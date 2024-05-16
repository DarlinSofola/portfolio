import {FaTwitter} from "react-icons/fa6"

const Footer = () => {
    const Iconbox = () => {
        return(
            <div className="rounded-full border-txtwhit p-2 border-1">
                <img src={FaTwitter} alt="" />
            </div>
        )
    }
  return (
    <div className="bg-primary">
        <div className="container">
            <div className="flex justify-center py-12 items-center">
             <div className=" w-full md:w-1/2 text-txtwhit ">
            <div>

            </div>
            <h2>Logo</h2>
            <p>Living, learning, & leveling up one day at a time.</p>
            <div>
                <Iconbox />
            </div>
        </div>   
            </div>

        </div>
        
    </div>
  )
}

export default Footer