import { useEffect, useMemo, useRef, useState } from "react"
import Cross from "../assets/Cross"
import PlusSvg from "../assets/Plus"
import { userFields } from "../features/userSchema"
import { useDispatch, useSelector } from "react-redux"
import { addUsers, editUsers } from "../Redux/Actions/UserAction"
import { toggleForm } from "../Redux/Slices/FormSlice"
import { toast } from "react-toastify"
import LoadingButton from "./LoadingButton"
import { validate } from "../helper/Validation"

export const FormModal = ({ editUserId, setEditUserId}) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state?.user?.users) || []
    const userDataLoading = useSelector((state)=>state?.user.loading) || false
    const editLoading = useSelector((state)=>state?.user.editLoading) || false
    // const findFields = userFields?.map((field) => field?.name).reduce((acc, curr) => { acc[curr] = ""; return acc }, {})

    const findFields = useMemo(() => {
    return userFields.reduce((acc, field) => {
        acc[field.name] = ""
        return acc
    }, {})
    }, [])

    const [formData, setFormData] = useState(findFields)
    const handleform = (e) => {
        e?.stopPropagation()
        setEditUserId(null)
        setFormData(findFields)
        dispatch(toggleForm())
    }


    const handleChange = (e) => {
        const { name, value } = e?.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

 

    const handleAddUser = async (e) => {
        e.preventDefault()
        try {
            if(!validate(formData))return
            if(editUserId){
                 const res = await dispatch(editUsers({id:editUserId, data:formData})).unwrap()
                 if(res){
                     dispatch(toggleForm())
                     setEditUserId(null)
                 }
            }
            else{
                const res = await dispatch(addUsers(formData)).unwrap()
                if(res){
                     dispatch(toggleForm())
                     setEditUserId(null)
                 }
            }
        }
        catch (err) {   
            console.log(err)
        }
    }

    useEffect(() => {
        if (editUserId) {
            const findUserById = users?.find(
                (user) => user.id == editUserId
            );

            setFormData(findUserById || findFields);
        } else {
            setFormData(findFields);
        }
    }, [editUserId]);

    return (
        <>
            <div id="defaultModal" onClick={handleform} className="bg-[#0000007d] overflow-y-auto  h-[100vh]   overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl md:h-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" onClick={(e) => e.stopPropagation()}>
                    <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                {editUserId ? "Update User" : "Add User"}
                            </h3>
                            <div className="flex items-center gap-3">
                                <button type="button" className="text-gray-800 bg-transparent hover:bg-[#ad3333] hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center cursor-pointer" data-modal-toggle="defaultModal" onClick={handleform}>
                                    <Cross />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>

                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                {userFields?.map((field) => (
                                    <div key={field.name}>
                                        <div className="block mb-2 text-sm font-medium text-gray-900 ">{field.label}</div>
                                        <input type={field.type} name={field.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ad3333] focus:border-[#ad3333]  focus:outline-none  block w-full p-2.5 " placeholder={field.label} required={field.required} value={formData[field?.name]} onChange={handleChange} />
                                    </div>
                                ))}

                            </div>
                            <div className='flex items-center gap-4'>
                                <button type="submit" onClick={handleAddUser} className="text-white bg-[#ad3333]  inline-flex items-center hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer">
                                    {/* {!editUserId && <PlusSvg />}
                                    {editUserId ? "Update User" : "Add New User" } */}

                                    {editLoading ?
                                        <LoadingButton loading={editLoading} color='white'/>
                                        : editUserId ? "Update User"
                                        : userDataLoading ?
                                        <LoadingButton loading={userDataLoading} color='white'/> :
                                        <><PlusSvg /> Add New User</>
                                    }
                                    
                                </button>

                                <button onClick={handleform} type="button" className="text-white bg-[#29adec] inline-flex items-center hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
