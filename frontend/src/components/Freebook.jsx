import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';

function Freebook() {

  const [book,setBook] = useState([])
    useEffect(() => {
     const getBook=async()=>{
      try {
        const res = await axios.get("https://book-store-hmyt.onrender.com/book");
        const data = res.data.filter((data)=>data.price === 0)
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
     }
     getBook();
    }, [])

    
  //  console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
      <h1 className="font-semi-bold text-xl pb-2">Free Offered Courses</h1>
      <p> No need to get dependent on price for reading anymore! Get free books to be accessed online,
         track your reads, and never lose your place again.<br />
      Start your next chapter with us — one page at a time.</p>
    </div>

    <div>
    <Slider {...settings}>
    {book.map((item) => (
        <Cards item={item} key={item.id}/>
      ))}
      
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
