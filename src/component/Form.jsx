import { useState,useContext } from "react";
import { ThemeContext } from "../contextComponent/AuthContext"

export default function Form() {
  const [fname, setFName] = useState("")
  const [email, setEmail] = useState("")
  const [lname, setLName] = useState("")
  
  const {handleForm}= useContext(ThemeContext)
  return (
    <div style={{marginTop:50}}>
      <label>First Name</label>
      <input value={fname} type="text" placeholder="Name" onChange={(e) => { setFName(e.target.value) }} /><br/>
      <label>Last Name</label>
      <input value={lname} type="text" placeholder="Name" onChange={(e) => { setLName(e.target.value) }} /><br/>
      <label>Email</label>
      <input value={email} type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} /><br/>
      <button onClick={() => {
        const payload = {
          FName: fname,
          LName:lname,
          Email:email,
        }
        handleForm(payload)
      }}>Submit</button>
    </div>
  );    
}