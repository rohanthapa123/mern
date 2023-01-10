const root = ReactDOM.createRoot(document.getElementById('register-content'));
let LoadForm = ()=>{
    return (
        <form action="Register">
                    <div className="form-group row mb-3 px-4">
                        <label htmlFor="Name" className="col-sm-4 form-label">Name :</label>
                        <div className="col-sm-8">
                            <input type="text" id="name" placeholder="Full Name" className="form-control form-control-sm"/>
                        </div>                        
                    </div>

                    <div className="form-group row mb-3 px-4">
                        <label htmlFor="email" className="col-sm-4 form-label">Email :</label>
                        <div className="col-sm-8">
                            <input type="email" id="email" placeholder="E-mail" className="form-control form-control-sm"/>
                        </div>                        
                    </div>

                    
                    <div className="form-group row mb-3 px-4">
                        <label htmlFor="role" className="col-sm-4 form-label">Role :</label>
                        <div className="col-sm-8">
                            <input type="text" id="role" placeholder="Role" className="form-control form-control-sm"/>
                        </div>                        
                    </div>
                    
                    <div className="form-group row mb-3 px-4">
                        <label htmlFor="status" className="col-sm-4 form-label">Status :</label>
                        <div className="col-sm-8">
                            <input type="text" id="status" placeholder="Status" className="form-control form-control-sm"/>
                        </div>                        
                    </div>
                    
                    <div className="form-group row mb-3 px-4">
                        <label htmlFor="password" className="col-sm-4 form-label">Password :</label>
                        <div className="col-sm-8">
                            <input type="password" id="password" placeholder="PassWord" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3 px-4 pb-5">
                        <label htmlFor="c-password" className="col-sm-4 form-label">Confirm Password :</label>
                        <div className="col-sm-8">
                            <input type="password" id="c-password" placeholder="PassWord" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <div className=" text-center mb-3">
                            <button type="reset" className="btn btn-danger btn-sm">Already a User</button>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success btn-sm align-center text-center">Submit</button>
                        </div>
                    </div>
                </form>
    )
}
root.render(<LoadForm />);
