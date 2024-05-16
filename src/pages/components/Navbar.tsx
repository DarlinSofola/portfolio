import React from "react"
import {Link} from  "react-router-dom"


const Navbar = () => {
  return (
    <div className='container'>
        <div className='flex justify-between items-center py-4'>
            <h1>Logo</h1>
            <div className='flex flex-row gap-4 items-center '>
                <p>Mentorship</p>
                <Link to="/contact">
                  <button className='text-primary border-2 border-primary rounded-full py-2 px-4'>Say hello</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar