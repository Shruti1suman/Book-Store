import React from 'react'

function Cards({item}) {
   // console.log(item)
  return (
    <>
    <div className="mt-4 my-3 p-3">
      <div className="card w-82 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 text-white">
  <figure className="h-80 w-full overflow-hidden">
    <img className="h-full w-full object-contain"
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="rounded-full border [2px] hover:bg-pink-500 text-white px-2 py-1 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
