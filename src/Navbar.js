import {useContext} from 'react'
import './Navbar.css'
import { AuthContext } from "./AuthProvider";
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <nav>
      <ul className="menu">
        <li className="logo">Todos App</li>
        {currentUser && (
          <li className="item button">
            <span onClick={()=>{signOut(auth)}}>Log out</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar