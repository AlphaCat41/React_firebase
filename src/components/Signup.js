import { Button, Form, Input, Card, Row, Col, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../auth/auth';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../action/auth';
import { useEffect } from 'react';

const Signup = () => {
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
      await createUser(values.email, values.password)
        .then((res) =>{
            messageApi.success('Successfully registered')
            dispatch(signupSuccess(res))
            setTimeout(() => navigate('/dashboard'), 1000)   
        })
        .catch((e) =>{
            messageApi.success(e.message)
        })
    };
        
    return (
        <Row>
            <Col span={7}>Col1</Col>
            <Col span={10}>
                {contextHolder}
                <Card style={{ width: 500, height: 500 }}>
                    <h1>Sign up</h1>
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

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    I already have an account <Link to={'/signin'}>Click</Link>
                    
                </Card>
            </Col>
            <Col span={7}>Col3</Col>
        </Row>
    );
}
 
export default Signup;