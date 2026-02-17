import axios from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL

export const fetchUserApi = async({url})=>{
   return await axios({url: `${baseUrl}/${url}`,
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export const addUserApi = async({url, data, method})=>{
   return await axios({url: `${baseUrl}/${url}`,
        method,
        headers:{
            "Content-Type": "application/json"
        },
        data
    })
}

export const editUserApi = async({url, data, method})=>{
    return await axios({url: `${baseUrl}/${url}`,
        method,
        headers:{
            "Content-Type": "application/json"
        },
    })
}


export const deleteUserApi = async({url, data, method})=>{
   return await axios({url: `${baseUrl}/${url}`,
        method,
        headers:{
            "Content-Type": "application/json"
        },
    })
}