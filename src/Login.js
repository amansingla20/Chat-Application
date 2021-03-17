import React from 'react';
import './Login.css';
import {useState} from 'react';
import {useHistory} from 'react-router';
function Login() {
    const [username , setUsername] = useState('');
    const history=useHistory();
    let handleSubmit = (event) =>{
        event.preventDefault();
        history.push({
            pathname: '/chat_dashboard',
            username: username
        })
    }
    localStorage.setItem('userName' , username );
    return (
    <div className = 'login-container'>
        <form method='post' onSubmit={handleSubmit}>  
            <div className="avatar">
			    <img src="https://www.detoxcarpetcleaning.com/wp-content/uploads/2015/01/noavatar.png" alt="Avatar"/>
		    </div>
        <h2 className ="text-center">Sign In to Chat Application</h2>   
        <div className ="form-group">
        	<input 
            type="text" 
            className="form-control" 
            name="username" 
            placeholder="Username" 
            required="required"
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}            
            />
        </div>
        <div className="form-group">
            <input 
            type="submit"
            value = 'Submit' 
            className="btn btn-primary btn-lg btn-block"
            />
        </div>
        </form>
    </div>
    )
}
export default Login;
