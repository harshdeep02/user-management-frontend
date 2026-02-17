import { toast } from "react-toastify"
import { userFields } from "../features/userSchema"

   export const validate = (formData)=>{
        let newError = {}
        userFields.forEach((field)=>{
            const value = formData[field.name]
            if(field.required && !value?.trim()){
                newError[field.name] = `error in ${field.label}`
                return toast.error(`${field.label} Is required`);
            }
            if(field.validation.minLength && (value?.trim().length < field.validation.minLength)){
                newError[field.name] = `error in ${field.label}`
                return toast.error(`${field.label} Should Be At Least ${field.validation.minLength} characters`)
            }
            if((field.name === "phone") && (field.validation.pattern && !field.validation.pattern.test(value))){
                newError[field.name] = `error in ${field.label}`
                return toast.error(`Please Try With Real ${field.label}`)
            }
            if(field.validation.pattern && !field.validation.pattern.test(value)){
                newError[field.name] = `error in ${field.label}`
                return toast.error(`Invalid ${field.label}`)
            }
        })
        return Object.keys(newError).length === 0
    }