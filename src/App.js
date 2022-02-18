import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import CreateTest from './components/CreateTest';
import UserMediaContainer from './containers/UserMediaContainer';
import VoteOnTestContainer from './containers/VoteOnTestContainer';
import Header from './components/Header';
import ProfileContainer from './containers/ProfileContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='profile' element={<ProfileContainer />}/>
        <Route path='signin' element={<Signin />} />
        <Route path='test' element={<CreateTest />} />
        <Route path='media' element={<UserMediaContainer />} />
        <Route path='vote' element={<VoteOnTestContainer />} />
      </Routes>
    </div>
  );
}

export default App;
