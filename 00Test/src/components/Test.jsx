import React from 'react'

function Test({name="Mahadev",age=0}) {
  return (
    <div>Name : {name} and Age : {age}</div>
  )
}

// Test.PropTypes ={
//     name:PropTypes.string,
//     age:int
// }
// Test.defaultProps={
//     name:"Mahadev",
//     age:0
// }
export default Test