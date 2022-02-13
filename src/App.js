import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Signin from './components/Signin';
import CreateTest from './components/CreateTest';
import UserMediaContainer from './containers/UserMediaContainer';
import VoteOnTestContainer from './containers/VoteOnTestContainer';
import Header from './components/Header';
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='signin' element={<Signin />} />
        <Route path='test' element={<CreateTest />} />
        <Route path='media' element={<UserMediaContainer />} />
        <Route path='vote' element={<VoteOnTestContainer />} />
      </Routes>
    </div>
  );
}

export default App;
