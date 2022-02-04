import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UploadModal from './UploadModal';

function Header(props) {
    const { user, token } = useSelector((state) => state.auth)
    
    if(!token) return null
    return (
        <div>
            <div className="profile-header-container">
                <Link to="/profile">
                    <h1>{user.username}</h1>
                </Link>
                <h4>Karma</h4>
                <h4>Link</h4>
                <Link to="/test">
                    <button>Create Test</button>
                </Link>
                <UploadModal />
                <Link to="/vote">
                    <button>Vote</button>
                </Link>
                <Link to="/media">
                    <button>View your media</button>       
                </Link>
                <button>Logout</button>
            </div>
            <hr></hr>
        </div>
    );
}

export default Header;