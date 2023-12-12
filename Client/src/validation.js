
const validation = (userData) => {
    
    const error = {}
    if(userData.hasOwnProperty("nombre")) {
        if(!userData.nombre) error.nombre = "Nombre incorreto"
        if (userData.nombre.length > 15) error.nombre = "Max 15 caracteres"
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) error.email = "email incorrecto"
    if(userData.email.length > 35 ) error.email = "email incorrecto"
            
    if(!/^(?=\w*\d)\S{6,15}$/.test(userData.password)) error.password = "Debe tener al menos un numero, y tener ente 6 y 15 caracteres"
    
    console.log(error);
    return error;
    
}
export default validation;