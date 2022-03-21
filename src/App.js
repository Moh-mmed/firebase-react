import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './AuthProvider';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import WelcomeMessage from './WelcomeMessage';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <WelcomeMessage/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
