import React from 'react'
import { Link } from 'react-router-dom'
// import "./Header.css"
function Header() {
    return (
        <div className='w-full h-[80px]  border-b bg-red-600'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                
                <img src="https://e7.pngegg.com/pngimages/1024/68/png-clipart-lego-logo-icons-logos-emojis-iconic-brands.png" className="h-[25px]" />
                
                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4'>
                        <Link to="/" className='text-xl font-semibold text-white'>Home</Link>
                        <Link to="/add-toy" className='text-xl font-semibold text-white'>Add Toy</Link>
                       
                    </ul>
                </div>
    
    
    
                <div className='md:hidden'  >
                        <img src="" />
                </div>
    
    
    
    
            </div>
    
            <div className={'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b'}>
                <ul>
                        <li className='p-4 hover:bg-gray-100'>Home</li>
                        <li className='p-4 hover:bg-gray-100'>About</li>
                        <li className='p-4 hover:bg-gray-100'>Support</li>
                        <li className='p-4 hover:bg-gray-100'>Platform</li>
                        <li className='p-4 hover:bg-gray-100'>Pricing</li>
                        <div className='flex flex-col my-4 gap-4'>
                            <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                             <img src="" />
                             Login
                            </button>
                            <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
                        </div>
                </ul>
            </div>
            
            
        </div>
      )
}

export default Header