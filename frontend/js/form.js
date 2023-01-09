const root = ReactDOM.createRoot(document.getElementById('form-content'));
const LoadForm = () =>{
    return (
    <form action="login">
    <div className="form-group row mb-3">
        <label htmlFor="email" className="form-label col-sm 3">Username:</label>
        <div className="col-sm-9">
            <input type="email" name="email" id="email" placeholder="Enter your Email" required className="form-control form-control-sm"/>
        </div>
    
    </div>
    <div className="form-group row mb-3">
        <label htmlFor="password" className="form-label col-sm 3">Password:</label>
        <div className="col-sm-9">
            <input type="password" name="password" id="password" placeholder="Enter your password"  required className="form-control form-control-sm"/>
            <span id="password_err" className="text-danger"></span>
        </div>
    
    </div>
    <div className="form-group row mb-3">
        <div className="offset-sm-3 col-sm-9">
            <button type="reset" className="btn btn-danger btn-sm">Cancel</button>
            <button type="submit" className="btn btn-success btn-sm">Submit</button>
        </div>
    </div>

    </form>
    )
}
root.render(<LoadForm />);