import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import CreateTest from './components/CreateTest';
import UserMediaContainer from './containers/UserMediaContainer';
import VoteOnTestContainer from './containers/VoteOnTestContainer';
import Header from './components/Header';
import CreateWorld from './components/collaboration/CreateWorld';
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  console.log("TEST; EMAIL: tbutler14@fordham.edu, PASSWORD: 123")
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='test' element={<CreateTest />} />
        <Route path='media' element={<UserMediaContainer />} />
        <Route path='vote' element={<VoteOnTestContainer />} />
        <Route path='create-world' element={<CreateWorld />} />
      </Routes>
    </div>
  );
}

export default App;
