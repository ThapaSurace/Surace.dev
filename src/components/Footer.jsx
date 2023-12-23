import React from 'react'
import { navLinks } from '../constants'
import { Link } from "react-scroll";

const Footer = () => {
  return (
   <div className='border-t border-dark-border '>
     <div className='flex flex-col sm:flex-row gap-4 justify-between items-center px-6 py-10 max-w-6xl mx-auto'>
      <div className='font-light'>
        <span>&copy; Suresh Thapa</span>
      </div>
      <ul className='flex gap-4 text-sm dark:text-gray-400 font-light'>
        {
          navLinks.map(link=>(
            <Link key={link.id} to={link.path} duration={500} smooth={true} offset={-50}>
               <li className='cursor-pointer hover:text-gray-600'>{link.name}</li>
            </Link>
           
          ))
        }
      </ul>
    </div>
   </div>
  )
}

export default Footer