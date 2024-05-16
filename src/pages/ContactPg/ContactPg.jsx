import React, { useState } from 'react'
import { Navbar } from '../components'
import { Man } from '../../assets'
import {toast} from "react-toastify"

const ContactPg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      toast.success("bottom-left", `Message received, ${name}`)
      // await
    } catch (error) {
      toast.error("bottom-left", error)
    }
  }

  return (
    <div>
      <Navbar />
      <div>
        <img src={Man} alt="" />

      </div>
      <div className="container">
        <div className='flex justify-start'>
<form className='w-full md:w-1/2 ' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4 justify-start items-center'>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary'/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary' />
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor="">Message</label>
            <textarea name="" id="" required value={message} onChange={(e) => setMessage(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary'></textarea>
          </div>
          <button className='bg-transparent border-2 border-primary px-6 py-3 rounded-full'>Submit</button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default ContactPg