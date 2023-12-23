import React from 'react'
import { navLinks } from '../../constants'
import { Link } from "react-scroll";

const Navlist = () => {
  return (
   <ul className="my-2 flex flex-col gap-4 border-b pb-4 lg:pb-0 border-dark-border lg:border-none lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 text-gray-800 dark:text-white">
    {
        navLinks.map(link=>(
           <Link key={link.id} to={link.path} duration={500} smooth={true} offset={-60}>
             <li  className='cursor-pointer'>{link.name}</li>
           </Link>
        ))
    }
   </ul>
  )
}

export default Navlist