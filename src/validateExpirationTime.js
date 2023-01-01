const validateExpirationTime = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    const expirationTime = user.data.expirationTime
    const dateNow = Date.now();
    console.log('Expiration:',dateNow >= expirationTime? true: false)
    if(dateNow >= expirationTime){
        localStorage.removeItem('user')
    }
    
}

export default validateExpirationTime