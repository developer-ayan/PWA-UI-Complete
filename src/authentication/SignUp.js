import React, { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { signupUser } from '../store/reducers/actions/userAction'
import TextField from '@mui/material/TextField';
import { auth } from '../config/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {



    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let dispatch = useDispatch()


    let signup_user = () => {
        // let user = {
        //     username,
        //     email,
        //     password
        // }
        // dispatch(signupUser(user))
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          

          alert('Your account hase been create')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }


    return (
        <div >

            {/* Logo  */}

            <div className='border'>

                <div className='div-1'>


                    <div className='logo-main'>
                        <div className='logo' >
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    </div>

                    {/* login heading  */}

                    <div>
                        <h1 className='log-in'>
                            SignUp
                        </h1>
                    </div>

                </div>

                <div className='div-2'>
                    <div className='top'></div>


                    <div className='input-main-div'>
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className='input'
                            required
                            id="outlined-required"
                            label="Username"
                            type='text'
                        />
                    </div>

                    {/* email input */}

                    <div className='input-main-div'>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='input'
                            required
                            id="outlined-required"
                            label="Email Address"
                            defaultValue="Hello World"
                            type='email'
                        />
                    </div>

                    {/* pass input */}

                    <div className='input-main-div'>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='input'
                            required
                            id="outlined-required"
                            type='password'
                            label="Password"
                            defaultValue="Hello World"
                            type='email'
                        />

                    </div>

                    {/* remember me */}

                    <div className='remember'>
                        
                        <div>
                            <p>remember me</p>
                        </div>
                    </div>

                    {/* log-in button */}

                    <div className='log-in-button'>
                        <button onClick={signup_user} className='text'>Sign Up</button>
                    </div>

                    <Link to='/'>
                        <p className='text-center underline create-an-acc'>i've Already Account</p>
                    </Link>

                </div>
                <div className='div-3'>
                </div>

            </div>



        </div>
    )
}
