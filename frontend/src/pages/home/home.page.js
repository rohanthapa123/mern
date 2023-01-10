import {Col, Container, Row,Table} from "react-bootstrap"
import { users } from "../../mock/data"
const HomePage = () =>{
    let data = users.result;
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} >
                        <h1 className="text-center">User List</h1>
                    </Col>
                    <hr/>
                    <Table  bordered hover responsive size="sm" >
                        <thead className="table-dark">
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr> 
                        </thead>
                        <tbody>
                            {
                                data && data.map((item,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>{item.address}</td>
                                        <td>{item.status}</td>
                                        <td>Edit/Delete</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}
export default HomePage;