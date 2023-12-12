import { useState } from "react";
import validation from "../../validation";
import { register } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {

  const [data, setData] = useState({
    nombre: "",
    email: "",
    password: ""
  });
  const [errors,  setErrors] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerData = (event) => {
    setData( {...data, [event.target.name] : event.target.value})
  } 
  
  
  const handlerSubmit =  async (event) => {
    event.preventDefault();

    let result = validation({...data})     
    if (Object.keys(result).length) {
      setErrors(result)
    }
    else { 
      
      let user =  await dispatch(register({...data}))
      console.log(user);
      if (user.length) {
        navigate("/")
      }
      console.log(errors);
    }
  }
  return (
    <div>
      <form >
        <h1>Register</h1>
        <input
          onChange={handlerData}
          type="text"
          name="nombre"
          value={data.nombre}
          placeholder="Nombre"
        />
        {errors.nombre && <p> <strong>{errors.nombre}</strong> </p>}
        
         <input
          onChange={handlerData}
          type="text"
          name="email"
          value={data.email}

          placeholder="Email"
        />
        {errors.email && <p> <strong>{errors.email}</strong> </p>}

        <input
          onChange={handlerData}

          type="text"
          name="password"
          value={data.password}

          placeholder="Password"
        />
        {errors.password && <p> <strong>{errors.password}</strong> </p>}
        {errors.errors && <p> <strong>{errors.errors}</strong> </p>}
        <button  onClick={handlerSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
