import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            navigate('/signin')
        }
    }, [])
    return ( 
        <div>
            test
        </div>
    );
}
 
export default Dashboard;