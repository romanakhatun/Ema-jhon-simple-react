import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const signInHandle = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/review'
            })
    }
    const signOutHandle = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/shop'
            })
    }
    return (
        <div>
            {
                auth.user ? <button onClick={signOutHandle}>Sign Out</button>
                    : <button onClick={signInHandle}>SignIn with Google</button>
            }
        </div>
    );
};

export default Login;