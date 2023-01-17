import { Container ,Form, Button, Col, Row } from "react-bootstrap";
import { NavBar  } from "../../../components/home/home.component";

const RegisterFrom = () => {
  return (
    <>
      <NavBar opt1="login" opt2="register" link1="/login" link2="/register"/>
      <hr className='col-sm-6 offset-sm-3'/>
      <Container>
        <Row>
            <Col>
                <h1 className="text-center text-success">Registeration Form</h1>
            </Col>
        </Row>
      </Container>
        <hr className='col-sm-6 offset-sm-3'/>
      <Container >
        <Form className="col-sm-4 offset-sm-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="success" type="submit" className="offset-sm-5 col-sm-2">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default RegisterFrom;
