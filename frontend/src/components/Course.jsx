import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {

  const [book,setBook] = useState([])
  useEffect(() => {
   const getBook=async()=>{
    try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
   }
   getBook();
  }, [])
  
  return (
    <>
     <div className="max-w-screen-2xl container bg-base-200 mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">We're delighted to have you {" "}
            <span className="text-pink-500">here! :) </span>
        </h1>
        <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quasi, corrupti accusantium ex quod voluptates minus excepturi
              molestias voluptatem. Accusamus maiores odio alias temporibus 
              nihil hic itaque nisi magni incidunt beatae.
        </p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 rounded-md mt-6 hover:bg-pink-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            book.map((item) => (
                <Cards key={item.id} item={item}/>
            ))
            
        }
      </div>
      </div>
    </>
   
  )
}

export default Course
