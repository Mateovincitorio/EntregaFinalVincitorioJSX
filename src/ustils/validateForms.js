import { mixed, number, object, string } from "yup"

let userSchema = object({
    fullname: string().required("Nombre requerido"),
    phone: mixed().required("Telefono requerido"),
    email: string().email("Complete el campo con su Email"),
})

const validateForm = async(dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return {status: "succes"}
    }catch(error){
        return{ status: "error", message: error.message}
    }
}

export default validateForm