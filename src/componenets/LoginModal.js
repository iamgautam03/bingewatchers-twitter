import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginModal (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const verifyLogin = async () => {
        let res = await props.loginVerifier(email, password);
        if (!res) {
            alert("Incorrect email or password");
        }
        else {
            alert("Successfully logged In");
            document.querySelector('#loginModal .modal-auth-close-btn').click();
        }
        props.loginCallback(res);
        res && navigate('/trending');
    };

    const handleOnChage = (ev) => {
        let inputFieldName = ev.currentTarget.name;
        let value = ev.currentTarget.value;
        if (inputFieldName === 'email')
            setEmail(value);
        if (inputFieldName === 'password')
            setPassword(value);
    }

    return (
        <div className="modal fade" id={props.modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id='loginForm'>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email</label>
                            <input type="email" value={email} name='email' onChange={handleOnChage} className="form-control" id="loginEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input type="password" value={password} name='password' onChange={handleOnChage} className="form-control" id="loginPassword" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn modal-auth-btn" form='loginFrom' onClick={verifyLogin}>Login</button>
                    <button type="button" className="btn modal-auth-close-btn" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}
