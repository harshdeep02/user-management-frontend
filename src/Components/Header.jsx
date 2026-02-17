import React, { useEffect, useState } from 'react'
import PlusSvg from '../assets/Plus'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../Redux/Slices/FormSlice'
import { FormModal } from './FormModal'
import { userFields } from '../features/userSchema'
import LoadingButton from './LoadingButton'

export default function Header() {

const dispatch = useDispatch()
const showForm = useSelector((state)=>state.form.showForm)

const handleform = (e)=>{
    e.stopPropagation()
        dispatch(toggleForm())
  }

  return (
    <>
    <div className=" border-gray-200 text-white px-4 lg:px-6 py-2.5 bg-[#ad3333]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <h2 href="https://flowbite.com" className="flex items-center">
                User Management
            </h2>
            <div className="flex items-center lg:order-2 bg-[#baced8] rounded-lg " onClick={handleform}>
                <button href="#" className="text-black flex bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-3 py-2 lg:py-2 mr-2 cursor-pointer outline-0"><PlusSvg />Add User</button>
            </div>
        </div>
    </div>
    {showForm &&
      <FormModal/>
    }
</>
  )
}
