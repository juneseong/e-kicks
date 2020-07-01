import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <span className='title'>I already have an account</span>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}  
                        label='email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password}  
                        label='password'
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;