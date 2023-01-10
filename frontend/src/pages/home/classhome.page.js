// const HomePage = () =>{
//     return ("Home Page")
// }
// export default HomePage;
// import React from 'react'


//statefull component, 16.1
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
class HomePage extends Component {
    constructor(props){
        super(props)
        console.log("I am first call")
        // initilize states
        this.state = {
            name: "Rohan Thapa",
            props: {...this.props},
            userList:[],
            loading: false
        }
    }
    componentDidMount = () =>{
        console.log("After first render call")
        //update the state for once
        //data from api call
        //data
        this.setState((pre)=>{
            return {
                ...pre,
                loading: true
            }
        })
        let api_response = [{
            name: "Rohan Thapa",
            email: "thaparohan2019@gmail.com",
            address: "Kathmandu"
        },{
            name: "Ram Charan",
            email: "charanarama234@gmail.com",
            address: "Delhi"
        },{
            name: "Shirist Adhikari",
            email: "sapkotaSS@@gmail.com",
            address: "Kathmandu"
        }]
        //state updae
        setTimeout(()=>{
            this.setState((pre)=>{
                //this.state
                return {
                    ...pre,
                    userList : api_response,
                    loading: false
                }
            })
        },3000)
        
    }
    componentDidUpdate = () =>{
        console.log("After Second render")
    }
    componentWillUnmount = () =>{
        console.log("When a component is unmounted")
     }
    render() {
        
        console.log("second or always call")
        // this.state.props.name = "Updated Props"
    return (
      <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md 12'>
                <h1 className='text-center'>User List </h1>
        <table className='table table-sm table-bordered table-hover'>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {   this.state.loading ? <tr><td colSpan="4" className='text-center'>Loading ...</td></tr>: (
                            this.state.userList.map((value,index)=>(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.address}</td>
                        </tr>)
                    ))
                    
                }
            </tbody>
        </table>
                </div>
            </div>
        </div>
        
      </>
    )
  }
}
export default HomePage
