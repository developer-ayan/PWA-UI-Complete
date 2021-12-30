import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../config/Firebase";

const signupUser = (user) => {
    return (dispatch) => {

        
        createUserWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            alert('Your account hase been create')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
}

const signinUser = (user) => {
    return (dispatch) => {

        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
              let  user = userCredential.user;
              alert('account has been signin')
    
          })
          .catch((error) => {
            alert(error)
          });
    }
}

export {
    signupUser,
    signinUser
}