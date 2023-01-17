import {BrowserRouter, Outlet, Route, Routes, useParams} from 'react-router-dom'
import ErrorPage from './pages/common/error.page'
import LoginForm from './pages/home/form/login.page'
import HomePage from './pages/home/home.page'
import CategoryDetail from './pages/home/category/category-detail.page'
import RegisterFrom from './pages/home/register_form/register.form'

import CustomerLayout from './pages/layouts/customerLayout/customer.layout'
import AdminLayout from './pages/layouts/adminLayout/admin.layout'
import AdminDashboard from './pages/admin/dashboard/admin-dashboard.page'
const Routing = () =>{
    let id = useParams()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element= {<LoginForm/>}/>
                    <Route path="/register" element={<RegisterFrom/>}/>
                    {/* <Route path="/category" element={<RegisterFrom/>}/> */}
                    <Route path="/category/:id" element={<CategoryDetail/>}/>
                    
                    <Route path="/admin/" element={<AdminLayout/>}>
                        <Route index element={<AdminDashboard/>}/>
                        <Route path= "user" element={<>User Outlet<Outlet/></>}>
                            <Route index element={<>List all user</>}/>
                            <Route path='create' element={<>Create Componenet</>}/>
                            <Route path=':id/edit' element={<>Edit user form</>}/>
                            <Route path=':id' element={<>Detail of user</>}/>

                        </Route>
                    </Route>

                    //customer 
                    <Route>
                        <Route path="/customer/" element={<CustomerLayout/>}>
                            <Route path='order' element = {<>Orders</>}/>
                            <Route path="order/history" element={<>Order history</>} />
                            
                        </Route>
                    </Route>



                    <Route path="*" element={<ErrorPage error={404}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing