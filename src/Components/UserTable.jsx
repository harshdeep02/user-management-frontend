import EditSvg from '../assets/Edit.jsx'
import Delete from '../assets/Delete.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteUsers, editUsers, fetchUsers } from '../Redux/Actions/UserAction.js'
import { toggleForm } from '../Redux/Slices/FormSlice.js'
import { FormModal } from './FormModal.jsx'
import { userFields } from '../features/userSchema.js'
import LoadingButton from './LoadingButton.jsx'
import Loader from './Loader.jsx'

export default function UserTable() {
    const dispatch = useDispatch()
    const [editUserId, setEditUserId] = useState(null)
    const [deleteId, setDeleteId] = useState('')
    const showForm = useSelector((state)=>state.form.showForm) || false
    const userData = useSelector((state)=>state?.user) 
    const users = useSelector((state)=>state?.user?.users) || []
    const userDataLoading = useSelector((state)=>state?.user.loading) || false
    const deleteLoading = useSelector((state)=>state?.user.deleteLoading) || false

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])


    const handleEdit = async(e, id)=>{
         e.stopPropagation()
            setEditUserId(id)
           dispatch(toggleForm())
    }

    const handleDelete = async(e, id)=>{
        e.stopPropagation()
        setDeleteId(id)
       try{
        const res = await dispatch(deleteUsers({id})).unwrap()
       }
       catch(err){
        console.log(err)
       }
        
    }

    if(userDataLoading){
        return <Loader />
    }
    return (
        <>
            <div className="relative  p-3 rounded-none border-none overflow-x-auto bg-neutral-primary-soft w-full m-auto">
                <table className=" text-sm text-left rtl:text-right text-body   w-full m-auto rounded-sm border border-gray-300">
                    <thead className="text-sm text-body bg-gray-200 border-b border-gray-300 ">
                        <tr>
                            {userFields?.map((field)=>(
                                <th  key={field.name} scope="col" className="px-6 py-3 font-medium">
                                {field.label}
                            </th>
                            ))}
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user)=>(
                            <tr key={user?.id} className="bg-neutral-primary border-b border-gray-300 ">
                                {userFields?.map((field) => (
                                    <td key={field.name} className="px-6 py-4">
                                        {user[field.name] || ""}
                                    </td>
                                    ))}
                            <td className="px-6 py-4 flex gap-3">
                                <div onClick={(e)=>{handleEdit(e, user?.id)}} className='flex justify-center items-center gap-1 bg-[#29adec] text-white cursor-pointer pl-1.5 pr-1.5 pt-1 pb-1 rounded-sm'><EditSvg /> Edit</div>
                                <div onClick={(e)=>{handleDelete(e, user?.id)}} className='flex justify-center items-center gap-1 bg-[#ad3333] text-white cursor-pointer p-1 rounded-sm'>
                                {deleteLoading && deleteId === user?.id ?
                                  <LoadingButton loading={deleteLoading} color='white'/>
                                    :
                                    <>
                                    <Delete />Delete
                                 </>
                                 }</div>

                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>


    {showForm &&
      <FormModal editUserId={editUserId} setEditUserId={setEditUserId}/>
    }
        </>
    )
}
