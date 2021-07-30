import { createContext,  useState } from "react";
import axios from "axios"
export const ThemeContext = createContext({
    theme: "",
    handlechange: () => { },
    handleForm:()=>{}
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    
    const handlechange = () => {

        setTheme(true);
    }
    const handleForm = (item) => {
        axios.get("https://reqres.in/api/users?page=2").then(({ data }) => {
             var count = 0;
                var count1 = 0;
                var count2 = 0;
            data.data.forEach(e => {
               
                    
                if (e.first_name === item.FName) {
                    if (e.last_name === item.LName) {
                        if (e.email === item.Email) {
                            setTheme(false)
                        }
                    }
                }

                if (e.first_name !== item.FName) {
                    count2++
                }
                if (e.last_name !== item.LName) {
                    count1++
                }
                if (e.email !== item.Email) {
                    count++
                }

                if (data.data.length === count) {
                    alert("Enter Correct Email")
                } else if(data.data.length === count1){
                    alert("Enter Correct Last Name")
                }else if(data.data.length === count2){
                    alert("Enter Correct First Name")
                }
            });
            
        })
    }
    return (<ThemeContext.Provider value={{ theme, handlechange,handleForm }}>
        {children}
    </ThemeContext.Provider>);

};
 

