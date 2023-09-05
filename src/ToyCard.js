import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

function ToyCard({id,name,price , manufacturer,image}) {
    const handleDelete = async () => {
          const res =   await axios.delete(`http://localhost:8082/toys/${id}`);
          console.log(res);
    }
  return (
    <div
        className={` bg-slate-200   cursor-pointer h-[19rem]  my-3 hover:shadow-custom hover:shadow-red-600 transition rounded-md`} 
      >
        <div className="w-full h-[75%] rounded-t-md">
          {
            image ?
            <img  src={image} alt="" className="w-full h-full rounded-t-md" /> : <img src="https://i.imgur.com/odiu6Gs.jpg" alt="" className="w-full h-full rounded-t-md" />
          }
        </div>
        <div className="w-full h-[25%]  pr-2 px-2  flex items-center justify-between">
          <div className="h-full max-sm:text-xs flex justify-center flex-col max-md:text-[0.745rem]   max-lg:text-[0.715rem] max-lg:font-semibold lg:max-xl:text-[0.73rem]">
            <h6 className="font-semibold  max-sm:mb-1">{`${name}`}</h6>
            <p className="m-0 text-gray-600  max-sm:font-semibold">{`${price} | ${manufacturer}`}</p>
          </div>
          
          <div
            
            className="transition flex items-center outline-none bg-blue-400 text-white p-3 rounded-md"

          >
            <Link to={`/${id}/update-toy`}> Update</Link >
           
          </div>
          <button
            onClick={handleDelete}
            className="transition flex items-center outline-none bg-red-500 text-white p-3 rounded-md"
        
          >
            Delete 
          </button>
        </div>
       
      </div>
  )
}

export default ToyCard