import React, { useState } from 'react'
import { Navbar } from '../components'
import { Man } from '../../assets'
import {toast} from "react-toastify"
import {createClient} from "@supabase/supabase-js"

const ContactPg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient("https://vrzvezwhorbkwdlqsxhf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyenZlendob3Jia3dkbHFzeGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NTQ1MTEsImV4cCI6MjAzMTQzMDUxMX0.VkN-X4hJs97cRyM3GM8b06HsL-Ki-UwXf82jVaD8pzk")

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      toast.success(`Message received, ${name}`, {position: "bottom-left"})
      console.log(name, email, message)
      // await
    } catch (error) {
      toast.error(error, {position: "bottom-left"})
    }finally {
      setLoading(false)
      setName("")
      setEmail("")
      setMessage("")
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
              <label>Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary'/>
            </div>
            <div>
              <label>Email</label>
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary' />
            </div>
          </div>
          <div className='w-full'>
            <label>Message</label>
            <textarea name="" id="" required value={message} onChange={(e) => setMessage(e.target.value)} className='px-4 py-2 rounded w-full border-2 border-primary'></textarea>
          </div>
          <button className='bg-transparent border-2 border-primary px-6 py-3 rounded-full'>{loading ? "Submitting" : "Submit"}</button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default ContactPg