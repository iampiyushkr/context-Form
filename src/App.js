import { useContext } from "react"
import Form from "./component/Form"
import './App.css';
import {ThemeContext} from "./contextComponent/AuthContext"
function App() {
  const {theme,handlechange}= useContext(ThemeContext)
  return (
    <div className="App">
      <div>
        <button onClick={() => {
          handlechange()
        }}>{ theme?"Login":"Logout"}</button>
      </div>
      {theme?<Form/>:"Your Logged in"}
    </div>
  );
}

export default App;
