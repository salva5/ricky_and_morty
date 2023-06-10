import { useState } from "react";
import validation from "../../validation";
import styles from "./Form.module.css"
const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password:"",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
            
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
            
        }))  
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    
    return (
        <div  className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                <input name = "email"type="email" onChange = {handleChange}  value={userData.email} placeholder="Ingrese un email"/>
                {errors.email && <p>{errors.email}</p>}
                <br />
                
                <input name="password" type="text" onChange ={handleChange} value = {userData.password}placeholder="Ingrese una password"/>
                {errors.password && <p>{errors.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;