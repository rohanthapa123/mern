import React, { useEffect, useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminAccessControl = ({Component}) => {
  let token = localStorage.getItem("_mern15_user_token")
  console.log(token)
  let [loading,setLoading] = useState(true)
  let navigate = useNavigate()
  useEffect(() =>{
    if(!token){
        navigate('/login')
    }else{
        let user_detail = {result:{
            _id: 1,
            name: "Rohan Thapa",
            email:"thaparohan2019@gmail.com",
            role: "admin"}
        }
        if(user_detail.result.role !== 'admin'){
            navigate('/login')
            toast.warning("You do not have access to ADMIN panel")
        }
            setLoading(false)
        }
  },[])
    return loading ? <>Loading</> : Component
}

export default AdminAccessControl