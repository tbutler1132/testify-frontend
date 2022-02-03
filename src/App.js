import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Signin from './components/Signin';
import CreateTest from './components/CreateTest';
import UserMediaContainer from './containers/UserMediaContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='signin' element={<Signin />} />
        <Route path='test' element={<CreateTest />} />
        <Route path='media' element={<UserMediaContainer />} />
      </Routes>
    </div>
  );
}

export default App;
