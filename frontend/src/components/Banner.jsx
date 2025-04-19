import React from 'react'
import hero from "../../public/hero.png"

function Banner() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-32">
      <div className ="space-y-12">
      <h1 className='text-4xl font-bold'>
        Hello, welcomes here to learn something {" "}
        <span className="text-pink-500">new everyday !!!</span>
        </h1>
        <p className="text-xl">
        From gripping thrillers to inspiring biographies, our digital shelves are 
        filled with stories that spark imagination and curiosity.<br />
            Read anywhere, anytime — just click and dive into the world of words.<br />
            Your perfect book is just a page away.
        </p>

        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label>
        </div>

        <button className="btn btn-secondary mt-6">Get Started</button>
        
      </div>
      <div className="order-1 w-full md:w-1/2 ">
      <img src= {hero} className="w-80 h-80 md:w-130 md:h-130"></img>
      </div>
    </div>
    </>
  )
}

export default Banner
