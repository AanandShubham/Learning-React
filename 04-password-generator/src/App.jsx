import { useCallback, useEffect, useRef, useState } from "react"

function App() {


  const [range, setRange] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const rangeRef = useRef(null)
  const inputRef = useRef(null)

  const passWordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "@#$%^&*(){}:<>?"

    for (let len = 0; len < range; len++) {

      const ind = Math.random() * (str.length - 1);
      pass += str.charAt(ind)
    }

    setPassword(pass)

  }, [range,setPassword,numberAllowed, characterAllowed])

  useEffect(() => {
    passWordGenerator()
  }, [range,passWordGenerator,numberAllowed, characterAllowed])

  const handleChange = (e) => {
    setRange(rangeRef.current.value)
  }

  const handleCopy = useCallback(() => {
    inputRef.current?.select()
    // inputRef.current?.setSelectionRange(0,10);

    window.navigator.clipboard.writeText(password)

  },[password])


  return (
    <>
      <div className="w-screen h-screen flex justify-center p-4 items-center bg-neutral-700">
        <div className="w-fit h-fit p-5 bg-neutral-400">
          <h2 className="">Password Generator</h2>

          <div className="w-full h-full">
            <input ref={inputRef} className="bg-white min-w-[400px]" type="text" value={password} />
            <button onClick={handleCopy} className="bg-blue-300">copy</button>
          </div>


          <div className="flex gap-2">
            <input
              min={0}
              max={100}
              ref={rangeRef}
              onChange={handleChange}
              className="w-30"
              type="range" />
            <p>length :{range} </p>
            <input
              type="checkbox" name="" id="" value={numberAllowed} onClick={() => setNumberAllowed(!numberAllowed)} />

            <p>Numbers</p>

            <input type="checkbox" name="" id="" value={characterAllowed}
              onClick={() => setCharacterAllowed(!characterAllowed)} />
            <p>SpecialCharacker</p>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
