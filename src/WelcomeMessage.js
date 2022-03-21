import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import './WelcomeMessage.css'
const WelcomeMessage = () => {
    const {currentUser, username} = useContext(AuthContext);
  return !!currentUser ? (
    <span className="welcome-msg">
      Welcome, <br />
      {username}
    </span>
  ) : (
    <></>
  );
}

export default WelcomeMessage