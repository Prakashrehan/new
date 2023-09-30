import React,{ useState ,useEffect} from "react";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import './welcome.css';
// import TodoSVG from '../assets/todo-svg.svg';
import NK from '../assets/nk.png';



export default function Welcomes() {
 const [email , setEmail] = useState("");
 const [password , setPassword] = useState("");
 const [isRegistering,setIsRegistering] = useState(false);
 const navigate = useNavigate();

  useEffect(() => {
   auth.onAuthStateChanged((user) => {
   if(user){
     navigate("/homepage");
   }
   });
  }, []);

 const handleEmailChange =(e) => {
    setEmail(e.target.value);
 };

 const handlePasswordChange =(e) => {
    setPassword(e.target.value);
 };

 const handleSignIn = () => {
     signInWithEmailAndPassword(auth,email,password)
    .then(() => {
     navigate('/homepage');
    } )
    .catch((err) => 
    alert(err.message));
 };


return (
    <div className="welcome">
    <img src={NK} className="nk" />
    <h1>Task Tracker</h1>
    <div className="login-register-cointainer">
    <input type="email" placeholder="email" onChange={handleEmailChange} value={email}/>
     <input type="password" 
     onChange= {handlePasswordChange} 
     value={password}
     placeholder="password"
    
     />
    


     <button className="sign-in-register-button" onClick={handleSignIn}>Sign In</button>
     <button className="create-account-button" onClick={() => setIsRegistering(true)}>Create an account</button>
     
     
    </div>
    <div className="a">
      <p>RENGLOBAL SOLUTIONS</p>
    </div>
    </div>
    
    );
}