import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
const LoginForm = () => {
  let [data, setData] = useState({
    email: null,
    password: null,
  });
  let navigate = useNavigate();
  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
      
    })
     
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Data: ",data)
    //api integraiton
    
    let user_detail = {result:{
      user:{ _id:234 ,name:"",email:"" , role: "admin"},
      token:"jwttoken"
    }}
    //localStorage || Cookie
    localStorage.setItem("_mern15_user",JSON.stringify(user_detail.result.user))
    localStorage.setItem("_mern15_user_token",(user_detail.result.token))
    //if success = ?? dashboard/admin,/customer, /seller
    navigate("/"+user_detail.result.user.role)
  
  }
  useEffect(()=>{
    let token = localStorage.getItem('_mern15_user_token')
    let user = JSON.parse(localStorage.getItem('_mern15_user'));
    if(token){
      navigate("/"+user.role)
    }
  },[])
  return (
    <>
      <hr className="col-sm-6 offset-sm-3" />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-success">Login Page</h1>
          </Col>
        </Row>
      </Container>
      <hr className="col-sm-6 offset-sm-3" />
      <Container>
        <Form onSubmit={handleSubmit} className="offset-sm-4 col-sm-4 mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter email"
              defaultValue={data.email}
              />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            onChange={handleChange}  
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={data.password}
            />
          </Form.Group>
          <Row>
            <Col>
            <NavLink to={"/"}>
              <Button variant="danger" type="submit" className="offset-sm-5">
                <i className="fa fa-trash me-2" />
                cancel
              </Button>
            </NavLink>
            </Col>
            <Col>
              {/* <NavLink to={"/admin"}> */}
                <Button variant="primary" type="submit">
                  <i className="fa fa-paper-plane me-2" />
                  Login
                </Button>
              {/* </NavLink> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
