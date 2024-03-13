import { useState } from "react";
import validation from "../../validation";
import styles from "./Form.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAccess } from "../../context/contextAccess";

const Form = () => {
  const { access, login } = useContext(ContextAccess)
  
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })
  
  const handlerChange = (event) => {
    setUserData({...userData, [event.target.name] : event.target.value})
  }

  const handlerSubmit =  async (event) => {
    event.preventDefault();
    let result = validation({...userData})
    let response =  await login({...userData}) 
    
    if (Object.keys(result).length) {
      setErrors(result)
    }
    else if (response) {
      setErrors({access : response})
    }
  }

  return (
    <div className={styles.divForm}>
      <form className={styles.form}>
        <h1>login</h1>
        <input onChange={handlerChange} type="text" name="email" value={userData.email} placeholder="Email"/>
        {errors.email && <p> <strong>{errors.email}</strong> </p>}
        
        <input onChange={handlerChange} type="text" name = "password" value={userData.password} placeholder="Password"/>
        {errors.password && <p> <strong>{errors.password}</strong> </p>}

        <button onClick={handlerSubmit} type="submit" >Submit</button>
        {errors.errors && <p> <strong>{errors.errors}</strong></p>}

        {errors.access && <p> <strong>{errors.access}</strong></p>}
      </form>
      <h4>No tienes una cuenta?
        <NavLink to = "register">
          <p>Crear cuenta</p>
        </NavLink>
      </h4>
    </div>
  )  
}


export default Form;