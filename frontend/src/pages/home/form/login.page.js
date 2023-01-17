import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { NavBar } from "../../../components/home/home.component";
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
    //if success = ?? dashboard/admin,/customer, /seller
    localStorage.setItem("_mern15_user",JSON.stringify(user_detail))
    navigate("/"+user_detail.result.user.role)
  
  }
  return (
    <>
      <NavBar opt1="login" opt2="register" link1="/login" link2="/register" />

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
