import {useEffect} from 'react';
import { updatePassword as updatePasswordAction, clearAuthError } from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function UpdatePassword() {
    let navigate=useNavigate()

    const dispatch = useDispatch();
    const { isUpdated, error } = useSelector(state => state.authState)

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
       
        dispatch(updatePasswordAction(formProps))
    }

    useEffect(() => {
        if(isUpdated) {
            toast('Password updated successfully',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER
            })
            navigate('/myprofile')
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
    },[isUpdated, error, dispatch,navigate])

    return (
        <div className="row wrapper mt-5">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mt-2 mb-5">Update Password</h1>
                    <div className="form-group">
                        <label htmlFor="old_password_field">Old Password</label>
                        <input
                            type="password"
                            id="old_password_field"
                            className="form-control"
                            name='oldPassword'
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="new_password_field">New Password</label>
                        <input
                            type="password"
                            id="new_password_field"
                            className="form-control"
                            name='password'
                        />
                    </div>

                    <button type="submit" className="btn update-btn btn-block mt-4 mb-3">Update Password</button>
                </form>
            </div>
        </div>
    )
}