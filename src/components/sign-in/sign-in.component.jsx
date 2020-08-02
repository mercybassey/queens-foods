import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: " ",
            password: " "
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {;
        const { value, name } = event.target
        this.setState({[name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>You already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                  
                    <FormInput 
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            { ' '}
                            Sign in with Google { '' }
                        </CustomButton>

                    </div>
                    

                </form>
            </div>

        )
    }
}

export default SignIn;