import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function OrdersForm() {

    const {id} = useParams();
   
    const [toy , setToy] = useState({
        id:parseInt(id),
        name:"",
        price:0,
        manufacturer : ""
    })
    // console.log(toy);
    const registerUser = async () => {
        const res = await axios.put(`http://localhost:8082/toys/${id}`,toy);
        console.log(res);
    }
    const handleChange = (e) => {
        const { name , value} = e.target;

        setToy({
            ...toy,
            [name] : value,
        })
    }
  return (
    <div
      className="flex h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full bg-black  md:w-3/5 md:p-8">
        <div className="w-3/5 h-fit max-sm:shadow-lg md:bg-transparent self-center flex flex-col p-4 rounded-lg bg-[#212121] lg:w-3/4 max-md:w-[80%]  md:w-full  max-sm:p-8   ">
          <h1 className="text-2xl font-bold text-white">Update</h1>
          <p className="text-red-500 ml-0">
            Enter the New Toy Details 
          </p>
         
          <div className=" my-2 mb-1 h-fit p-2 pl-0 flex flex-col font-bold font-sans  ">
            <label className="text-white text-lg">NAME</label>
            <input
              value={toy.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="outline-none border border-zinc-300 p-2 rounded-md h-full  mt-1  "
            />
          </div>
          <div className=" my-2 mb-1 h-fit p-2 pl-0 flex flex-col font-bold font-sans  ">
            <label className="text-white text-lg">Price</label>
            <input
              value={toy.price}
              onChange={handleChange}
              name="price"
              type="number"
              className="outline-none border border-zinc-300 p-2 rounded-md h-full  mt-1  "
            />
          </div>
          <div className=" my-2 mb-1 h-fit p-2 pl-0 flex flex-col font-bold font-sans  ">
            <label className="text-white text-lg">Manufacturer</label>
            <input
              value={toy.manufacturer}
              onChange={handleChange}
              name="manufacturer"
              type="text"
              className="outline-none border border-zinc-300 p-2 rounded-md h-full  mt-1  "
            />
          </div>
         
          <button
            onClick={registerUser}
            className=" flex items-center justify-center   rounded-lg w-20 p-2 text-white  bg-red-400 self-end mt-1 mr-2 "
          >
            PUT
          </button>
        </div>
      </div>
      <div className="bg-black hidden h-full  md:block md:w-2/5">
        <img
          
          src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
          className="w-full h-full overflow-hidden object-cover "
        />
      </div>
    </div>
  )
}

export default OrdersForm