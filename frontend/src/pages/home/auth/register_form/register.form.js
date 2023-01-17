import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {useFormik} from "formik"
const RegisterFrom = () => {
  let defaultValue = {
    name : "",
    email: "",
    password:"",
    address:"",
    role:"",
    image:"",
    status:""
  }

  let formik = useFormik({
    initialValues:defaultValue,
    validationSchema: null
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
        <Form className="col-sm-8 offset-sm-2">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Row>
              <Col sm={3}>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control size="sm" type="text" placeholder="Full Name" />
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
                />
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
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col sm={3}>
                <Form.Label>Confirm PassWord</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Confirm passWord"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Row>
              <Col sm={3}>
                <Form.Label>Role</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Select aria-label="Role" size="sm">
                  <option> ---select One --- </option>
                  <option value="1">Customer</option>
                  <option value="2">Seller</option>
                </Form.Select>
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
                  placeholder="Enter Your Address"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Row>
              <Col sm={3}>
                <Form.Label>Image</Form.Label>
              </Col>
              <Col sm={9}>
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
                    console.log(ext);
                  }}
                  placeholder="Enter Your Address"
                />
              </Col>
            </Row>
          </Form.Group>

          <Row className="col-sm-12">
            <Col className="col-sm-3 ">
              <NavLink to={"/"}>
                <Button variant="danger" type="cancel" className="offset-sm-3 ">
                  <i className="fa fa-trash me-1"></i> cancel
                </Button>
              </NavLink>
            </Col>
            <Col className="col-sm-3">
              <Button variant="success" type="submit" className="offset-sm-1">
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
