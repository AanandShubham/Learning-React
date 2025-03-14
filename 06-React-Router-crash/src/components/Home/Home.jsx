import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-[570px] p-2 flex justify-around bg-slate-900'>
      <div className="img w-1/2 h-fit rounded-2xl p-4">
          <img className='w-1/2 h-[400px] shadow-amber-300   rounded-4xl shadow-2xl mix-blend-plus-darker ' src="./Eye_logo.jpg" alt="User Image" />
      </div>
      <div className="text-white w-1/2 flex flex-col justify-center gap-2 ">
            <h1 className='text-2xl w-fit text-amber-200 shadow-2xl shadow-amber-300 inline'>Hey i'm Aanand Pratap Singh</h1>
           
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi, voluptatum hic beatae consectetur optio repellendus sunt ea aperiam soluta tenetur tempore incidunt molestias architecto similique! Delectus totam veritatis minus.</h3>
      </div>
    </div>
  )
}

export default Home
