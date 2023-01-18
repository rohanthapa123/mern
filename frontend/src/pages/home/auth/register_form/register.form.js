import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {useFormik} from "formik"
import "./register.form.css"
import * as Yup from "yup"
const RegisterFrom = () => {
  let defaultValue = {
    name : null,
    email: "",
    password:"",
    confirmPassword:"",
    role:"",
    status:"active",
    image:"",
    address:""
  }
  let validate = Yup.object({
    name : Yup.string().required().nullable().min(3),
    email: Yup.string().email().required(),
    password:Yup.string().min(8),
    confirmPassword:Yup.string().min(8).oneOf([Yup.ref('password')],'passwords must match'),
    role:Yup.string().required(),
    status:Yup.string().default("active"),
    image:Yup.object().nullable(),
    address:Yup.string().nullable()
  })

  let formik = useFormik({
    initialValues:defaultValue,
    validationSchema: validate,
    onSubmit: (values)=>{
      console.log('hello')
      console.log("Submit:",values);
    }
  })
  return (
    <>
      <hr className="col-sm-8 offset-sm-2" />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-success">Registeration Form</h1>
          </Col>
        </Row>
      </Container>
      <hr className="col-sm-8 offset-sm-2" />
      <Container>
        <Form onSubmit={formik.handleSubmit} className="col-sm-8 offset-sm-2">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Row>
              <Col sm={3}>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control size="sm" 
                type="text" 
                placeholder="Full Name"
                name="name" 
                onChange={formik.handleChange}/>
                <span className="text-danger">{formik.errors?.name}</span>

              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={3}>
                <Form.Label>Email address</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={formik.handleChange}
                />
                <span className="text-danger">{formik.errors?.email}</span>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col sm={3}>
                <Form.Label>PassWord</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Enter passWord"
                  name= "password"
                  onChange={formik.handleChange}
                />
                <span className="text-danger">{formik.errors?.password}</span>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Row>
              <Col sm={3}>
                <Form.Label>Confirm PassWord</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  size="sm"
                  type="password"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  placeholder="Confirm passWord"
                />
                  <span className="text-danger">{formik.errors?.confirmPassword}</span>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Row>
              <Col sm={3}>
                <Form.Label>Role</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Select aria-label="Role" name="role" size="sm" onChange={formik.handleChange}>
                  <option> ---select One --- </option>
                  <option value="1">Customer</option>
                  <option value="2">Seller</option>
                </Form.Select>
                <span className="text-danger">{formik.errors?.role}</span>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Row>
              <Col sm={3}>
                <Form.Label>Address</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  size="sm"
                  as={"textarea"}
                  name="address"
                  onChange={formik.handleChange}
                  placeholder="Enter Your Address"
                />
                 <span className="text-danger">{formik.errors?.address}</span>

              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Row>
              <Col sm={3}>
                <Form.Label>Image</Form.Label>
              </Col>
              <Col sm={6}>
                <Form.Control
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    let { files } = e.target;
                    let file = files[0];
                    // console.log(file)
                    let ext = file.name.split(".");
                    ext = ext.pop();
                    if(["jpg","jpeg","svg","bmp","webp","png","gif"].includes(ext.toLowerCase())){
                      if(file.size <= 10000000){
                        formik.setValues({
                          ...formik.values,
                          image:file
                        })
                      }else{
                        formik.setErrors({
                          ...formik.errors,
                          image:"file size should be less then 10 mb"
                        })
                      }
                    }else{
                      formik.setErrors({
                        ...formik.errors,
                        image:"file format not supported"
                      })
                    }
                    
                  }}
                />
                <span className="text-danger">{formik.errors?.image}</span>
              </Col>
              <Col sm={3}>
                {
                  formik.values.image ? <>
                    <img  src={URL.createObjectURL(formik.values.image)} className="img img-fluid image-border"/>
                  </> : <></>
                }
              </Col>
            </Row>
          </Form.Group>

          <Row className="col-sm-12">
            <Col className="col-sm-3 ">
              <NavLink to={"/"}>
                <Button variant="danger" type="reset" className="offset-sm-3 ">
                  <i className="fa fa-trash me-1"></i> cancel
                </Button>
              </NavLink>
            </Col>
            <Col className="col-sm-3">
              <Button variant="success" type="submit" name="submit" className="offset-sm-1">
                <i className="fa fa-paper-plane me-1"></i>Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default RegisterFrom;
