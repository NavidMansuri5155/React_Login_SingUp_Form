import React, { Component } from 'react';
import  "./Loin.css"


class Login extends Component {

    render() {

        return (
            <>
            <div className="container" >
                <form className="formAA" >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" style={{color:"black"}}>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color:"black"}}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{color:"black"}}>Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </>
        );
    }
}

export default Login;