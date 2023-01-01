import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutSuccess } from '../action/auth';
import validateExpirationTime from "../validateExpirationTime";

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() =>{
        validateExpirationTime()
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            navigate('/signin')
        }
    }, [])
    return ( 
        <div>
            <Button onClick={() => dispatch(signoutSuccess())}>test</Button>
        </div>
    );
}
 
export default Dashboard;