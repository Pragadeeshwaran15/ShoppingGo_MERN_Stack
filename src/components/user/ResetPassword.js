import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearAuthError } from '../../actions/userActions';
import {useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    
    const dispatch = useDispatch();
    const { isAuthenticated, error }  = useSelector(state => state.authState)
    const navigate = useNavigate();
    const { token } = useParams();

    const submitHandler  = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
        
        dispatch(resetPassword(formProps, token))
    }

    useEffect(()=> {
        if(isAuthenticated) {
            toast('Password Reset Success!', {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER
            })
            navigate('/')
            return;
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[isAuthenticated, error, dispatch, navigate])

    return (
        <div className="row wrapper mt-5">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">Forgot Password</h1>

                    <div className="form-group">
                        <label htmlFor="password_field"> New Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            name='password'
                            
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            className="form-control"
                            name='confirmPassword'
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Set Password
                    </button>

                </form>
            </div>
        </div>
    )
}