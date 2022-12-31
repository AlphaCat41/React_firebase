import { Button, Form, Input, Card, Row, Col, message  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../auth/auth';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../action/auth';
import { useEffect } from 'react';

const Signin = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            navigate('/dashboard')
        }
    }, [])
    const onFinish = async(values) => {
        await signin(values.email, values.password)
          .then((res) =>{
                console.log(res)
                messageApi.success('logged in successfully')
                dispatch(signinSuccess(res))
                setTimeout(() => navigate('/dashboard'), 1000)  
          })
          .catch((e) =>{
              messageApi.success(e.message)
          })
    };
    
    return ( 
        <Row>
            <Col span={12}>col1</Col>
            <Col span={12}>
                {contextHolder}
                <Card style={{ width: 500, height: 400 }}>
                    <h1>Sign in</h1>
                    <Form
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    I don't have an account yet <Link to={'/signup'}>Click</Link>
                </Card>
            </Col>
        </Row>
        
     );
}
 
export default Signin;