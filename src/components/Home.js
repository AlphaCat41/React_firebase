import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <h1>Welcome</h1>
            <Button type="primary" onClick={() => navigate("/signin")}>Sign in</Button>
            <Button type="primary" onClick={() => navigate("/signup")}>Sign up</Button>
        </div>
     );
}
 
export default Home;