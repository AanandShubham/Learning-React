
function App() {

  return (
    <>
      <div className="w-screen h-screen flex justify-center p-4 items-center bg-neutral-700">
        <div className="w-fit h-fit p-5 bg-neutral-400">
          <h2 className="">Password Generator</h2>

          <div className="w-full h-full">
            <input className="bg-white min-w-[400px]" type="text" />
            <button className="bg-blue-300">copy</button>
          </div>


          <div className="flex gap-2">
            <input
              className="w-30"
              type="range" />
            <p>length :{} </p>
            <input type="checkbox" name="" id="" />
            <p>Numbers</p>
            <input type="checkbox" name="" id="" />
            <p>SpecialCharacker</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
