import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header';

function ToyForm() {

    const [toy , setToy] = useState({
        id:0,
        name:"",
        price:0,
        manufacturer : "",
        image:""
    })
    const registerUser = async () => {
        const res = await axios.post("http://localhost:8082/toys/",toy);
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
    <>
    <Header />
     <div
      className="flex h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full bg-black  md:w-3/5 md:p-8">
        <div className="w-3/5 h-fit max-sm:shadow-lg md:bg-transparent self-center flex flex-col p-4 rounded-lg bg-[#212121] lg:w-3/4 max-md:w-[80%]  md:w-full  max-sm:p-8   ">
          <h1 className="text-2xl font-bold text-white">Register</h1>
          <p className="text-red-500 ml-0">
            Enter the New Toy Details 
          </p>
          <div className=" my-2 mb-1 h-fit p-2 pl-0 flex flex-col font-bold font-sans  ">
            <label className="text-white text-lg">Id</label>
            <input
              value={toy.id}
              onChange={handleChange}
              name="id"
              type="text"
              className="outline-none border border-zinc-300 p-2 rounded-md h-full  mt-1  "
            />
          </div>
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
          <div className=" my-2 mb-1 h-fit p-2 pl-0 flex flex-col font-bold font-sans  ">
            <label className="text-white text-lg">Image</label>
            <input
              value={toy.image}
              onChange={handleChange}
              name="image"
              type="text"
              className="outline-none border border-zinc-300 p-2 rounded-md h-full  mt-1  "
            />
          </div>
         
          <button
            onClick={registerUser}
            className=" flex items-center justify-center   rounded-lg w-20 p-2 text-white  bg-red-400 self-end mt-1 mr-2 "
          >
            POST
          </button>
        </div>
      </div>
      <div className="bg-black hidden h-full  md:block md:w-2/5">
        <img
          
          src="https://assets-prd.ignimgs.com/2022/09/29/blog-1664478524134.jpg?width=1280"
          alt=""
          className="w-full h-full overflow-hidden object-cover "
        />
      </div>
    </div>
    </>
   
  )
}

export default ToyForm