
const validation = (userData) => {
    const error = {}
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) error.email = "email incorrecto"
        
    if(userData.email === "") error.email = "no hay ningun email"
    if(userData.email.length > 35 ) error.email = "email invalido"
    if(!/^(?=\w*\d)\S{6,10}$/.test(userData.password)) error.password = "Debe tener al menos un numero,\t y tener ente 6 y 10 caracteres"
    
    return error;
}
export default validation;