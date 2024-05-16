import React from 'react'
import { Navbar } from '../../components'
import {Man, automalog, baselair, basin, bldrs, bootstraplogos, briteweb, chronicled, designlab, domain7, dovetail, goodkind, heroDevice, houston, kybercore, redstamp, serpmetrics, shipable, userforge} from "../../../assets"
import { FaBars } from 'react-icons/fa6'
const Herosection = () => {

    const skillsetData = [
        {
            id: 1,
            heading: "Designer",
            text: "I value simple content structure, clean design patterns, and thoughtful interactions.",
            things: "Things I enjoy designing:",
           //UX, UI, Web, Apps, Logos 
            listOfT: ["UX", "UI", "Web", "Apps", "Logos"],
            nofTool: "Design Tools:",
            lofTool: ["Affinity Designer", "Figma", "Pen & Paper", "Sketch"]
        },
        {
            id: 2,
            heading: "Frontend Developer",
            text: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
            things: "Languages I speak:",
           //HTML, Pug, Slim, CSS, Sass, Git
            listOfT: ["HTML", "Pug", "Slim", "CSS", "Sass", "Git"],
            nofTool: "Dev Tools:",
            lofTool: ["Astro JS", "Bitbucket", "Bootstrap", "Bulma", "Codekit", "Github", "Netlify", "Tailwind CSS", "VS Code"]
        },
        {
            id: 3,
            heading: "Mentor",
            text: "I genuinely care about people, and enjoy helping them work on their craft.",
            things: "Experiences I draw from:",
           //UX/UI, Product design, Freelancing
            listOfT: ["UX/UI", "Product design", "Freelancing"],
            nofTool: "Mentor Stats:",
            lofTool: ["9+ years experience", "30+ short courses", "65+ bootcamps ", "250+ students", "2,500+ mentor sessions", "60+ group critiques", "18,000+ bits of feedback"]
        }
    ]
    const companyLogo = [briteweb, goodkind, redstamp, domain7, designlab, chronicled, bldrs, serpmetrics]

    const startPro = [
        {
            id: 1,
            img: bootstraplogos,
            text: "Affordable, human-crafted logos for startups and indie projects.",
            link: "",
            ltext: "bootstraplogos.com",

        },
        {
            id: 2,
            img: baselair,
            text: "Community platform for miniature painters to learn, connect, and showcase work.",
            link: "",
            ltext: "thebaselair.com",

        },
        {
            id: 3,
            img: automalog,
            text: "AI-driven changelog that turns git commits into release notes, instantly.",
            link: "",
            ltext: "automalog.com",

        },
        {
            id: 4,
            img: shipable,
            text: "Short, focused design and growth collabs for startup tech founders.",
            link: "",
            ltext: "shipable.com",

        },
        {
            id: 5,
            img: houston,
            text: "Simple feedback and engagement tools that help teams ship winning products.",
            link: "",
            ltext: "houston.com",

        },
        {
            id: 6,
            img: kybercore,
            text: "Next level plug and play chassis systems for custom DIY lightsaber builds.",
            link: "",
            ltext: "kybercore.com",

        },
        {
            id: 7,
            img: basin,
            text: "A powerful, easy-to-configure form backend for designers and developers.",
            link: "",
            ltext: "basin.com",

        },
        {
            id: 8,
            img: dovetail,
            text: "A space and member management solution for coworking communities.",
            link: "",
            ltext: "dovetail.com",

        },
        {
            id: 9,
            img: userforge,
            text: "A collaborative tool for creating simple, effective user personas.",
            link: "",
            ltext: "userforge.com",

        },
    ]

  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='flex justify-center items-center' >
                <div className='flex flex-col justify-center items-center gap-4 pb-8 pt-12 '>
                    <h2 className='text-4xl ' >Designer, Frontend Developer and Mentor</h2>
                <p>I design and code beautifully simple things, and I love what I do.</p>
                <img src={Man} alt="" />
                </div>
                
            </div>
            <div className="flex justify-center items-center">
              <img src={heroDevice} alt="" className='w-full md:w-2/3' />  
            </div>
            
        </div>
        <div className='bg-primary'>
            <div className='container'>
                <div className="flex justify-center items-center">
                 <div className='w-full md:w-1/2 flex flex-col gap-8 py-16 justify-center items-center text-center'>
                    <h3 className='text-txtwhit font-semibold text-2xl'>Hi, I’m Matt. Nice to meet you.</h3>
                    <p className='text-txtwhit'>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</p>
                </div>   
                </div>
                
            </div>
        </div>
        <div className='container'>
            <div className='grid rounded-xl shadow grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col py-12 px-8 justify-center items-center text-center'>
                <div className='rounded-full p-4 bg-gray-600'>
                    <FaBars size={50}/>
                </div>
                <h2>Designer</h2>
                <p>I value simple con
                    tent structure, clean design patterns, and thoughtful interactions.</p>
                    <p>Things I enjoy designing:</p>
                    <ul className='flex flex-row items-center gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
                    <p>Design Tools:</p>
                    <ul className='flex items-center flex-col gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
            </div>
            <div className='flex flex-col py-12 px-8 justify-center items-center text-center'>
                <div className='rounded-full p-4 bg-gray-600'>
                    <FaBars size={50}/>
                </div>
                <h2>Designer</h2>
                <p>I value simple con
                    tent structure, clean design patterns, and thoughtful interactions.</p>
                    <p>Things I enjoy designing:</p>
                    <ul className='flex flex-row items-center gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
                    <p>Design Tools:</p>
                    <ul className='flex items-center flex-col gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
            </div>
            <div className='flex flex-col py-12 px-8 justify-center items-center text-center'>
                <div className='rounded-full p-4 bg-gray-600'>
                    <FaBars size={50}/>
                </div>
                <h2>Designer</h2>
                <p>I value simple con
                    tent structure, clean design patterns, and thoughtful interactions.</p>
                    <p>Things I enjoy designing:</p>
                    <ul className='flex flex-row items-center gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
                    <p>Design Tools:</p>
                    <ul className='flex items-center flex-col gap-4'>
                        <li>UX</li>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Logos</li>
                    </ul>
            </div>
            </div>

        </div>
        {/*PORTFOLIO  */}
        <div className='container py-12'>
            <div>
                <h2>My Recent Work</h2>
                <p>Here are a few past design projects I've worked on. Want to see more? Email me.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                <div className='rounded-xl flex justify-center items-center h-32'></div>
            </div>
            <div>
                <button className='border-1 border-primary text-primary bg- rounded-full'>See more on Dribble</button>
            </div>
        </div>
        {/*Collaboation  */}
        <div className="container py-12">
            <div className='flex justify-center items-center'>
<div className='md:w-1/2 w-full text-center'>
                <p className='text-3xl font-semibold'>I'm proud to have collaborated with some awesome companies:</p>
            </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center py-8">
            {companyLogo.map((item, index) => (
                <div key={index}>
                    <img src={item} alt="" />
                </div>
            ))}
            </div>
        </div>
        {/*Startup project  */}
        <div className='bg-primary'>
            <div className='container'>
                <div className="flex justify-center
                 items-center py-12">
               <div className='md:w-1/2 w-full text-center text-txtwhit'>
                <div>
                    <h3>My Startup Projects</h3>
                    <p>I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.</p>
                </div>
            </div>     
                </div>
            
            </div>
        </div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                {startPro.map((item) => (
                  <div className='bg-txtwhit rounded-xl shadow-md py-8 px-4 flex flex-col justify-center items-center gap-6' key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.text}</p>
                <div className='flex justify-center items-center flex-row gap-2 rounded-md'>
                    <FaBars size={14}/>
                    <p>{item.ltext}</p>
                </div>
                </div>  
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Herosection