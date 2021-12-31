import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { signinUser } from '../store/reducers/actions/userAction'
import { useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/Firebase'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { db } from '../config/Firebase'

export default function Login() {

    let dispatch = useDispatch()

    let [email, setEmail] = React.useState('')
    let [password, setPassword] = React.useState('')


    const usersCollectionref = collection(db,'users')
    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                return (
                    alert('account has been signin')
                )
            })
            .catch((error) => {
                alert(error)
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
                            Log-In
                        </h1>
                    </div>

                </div>

                <div className='div-2'>
                    <div className='top'></div>

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
                        <button onClick={signin} className='text'>Login</button>
                    </div>

                    <Link to='/signup'>
                        <p className='text-center underline create-an-acc'>i've Already Account</p>
                    </Link>

                </div>
                <div className='div-3'>
                </div>

            </div>



        </div>
    )
}
