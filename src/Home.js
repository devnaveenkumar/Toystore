import React, { useEffect, useState } from 'react'
import TypewriterComponent from 'typewriter-effect';
import ToyCard from './ToyCard';
import axios from 'axios';
import Header from './Header';

function Home() {

    const [data,setData] = useState([]);
    const getAllToys = async () => {
        const toys = await axios.get("http://localhost:8082/toys/");
        setData(toys.data);
    }

    useEffect(() => {
        getAllToys();

    },[data])
  return (
    <>
    <Header/>
     <div
    className="w-full h-fit bg-black "
  >
    <section className="relative w-full h-[40.9rem]">
      <img
        src="https://i.imgur.com/3UlBk5G.jpg"
        alt=""
        className="w-full h-full z-0  object-cover"
      />
     <div className="bg-transparent p-8 z-10 w-full   h-full   border-none   absolute top-0 ">
          <div className="p-3 w-full  h-fit min-h-[19rem]  mt-6 ml-3">
            <h1 className="text-white max-sm:text-[1.1rem] sm:max-md:text-[1.4rem] font-bold text-[2.3rem]  ">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to ")
                    .pauseFor(1000)
                    // .deleteAll()
                    .typeString("ToyLandia ....")
                    .start();
                }}
              />
            </h1>
          </div>
        </div>
    </section>
    <section className=" w-full bg-black h-fit py-3 flex max-sm:flex-col ">
      <div className=" md:w-[40%] max-sm:w-full sm:max-md:w-1/2 h-full pt-8 px-6 pb-1  overflow-hidden">
        <h1 className="text-white font-semibold text-2xl">ABOUT US</h1>
        <div className="bg-red-500  w-full h-[2px] my-2"></div>
        <p className="text-white m-0 mt-3  leading-relaxed	text-justify	">
        At Toylandia, we believe that every child deserves the best when it comes to toys. Since 2003, we have been on a mission to provide a magical and memorable shopping experience for kids and parents alike. Our exceptional reputation among our customers speaks volumes about our commitment to quality, safety, and the joy of play.
        </p>
      </div>
      <div className=" w-[60%] max-sm:w-full max-md:w-1/2 h-full ">
        <img
          src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    <section className="w-full bg-black h-fit flex flex-col p-6">
      <div className=" w-full text-center h-fit ">
        <h1 className="text-white font-semibold text-2xl mb-1">
          TOYS
        </h1>
        <div className="bg-red-500 w-full h-[2px] my-2"></div>
      </div>
      <div className="scroll_manipulator   w-full h-fit bg-black grid  grid-cols-4 md:max-lg:grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-3  gap-y-4  p-4 overflow-y-scroll ">
                {data.map(data => (
                    <ToyCard key={data.id} id={data.id} name={data.name} price={data.price} manufacturer={data.manufacturer} image={data.image}/>

                ))}
                
                
                      </div>
    
      
    </section>
  </div>
    </>
   
  )
}

export default Home