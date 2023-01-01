

const validateExpirationTime = () =>{
    var expiration = false
    const user = JSON.parse(localStorage.getItem('user'))
    const expirationTime = user.data.expirationTime
    const dateNow = Date.now();
    console.log('Expiration:',dateNow >= expirationTime? true: false)
    if(dateNow >= expirationTime){
        localStorage.removeItem('user')
        expiration = true
    }
    return expiration
}

export default validateExpirationTime