import { useState } from 'react';
import ProfileTest from './ProfileTest';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UploadModal from './UploadModal';

function Profile() {
    const { user } = useSelector((state) => state.auth)
    
    return (
        <div>
            <div className="profile-header-container">
                <h1>{user.username}</h1>
                <h4>Karma</h4>
                <h4>Link</h4>
                <Link to="/test">
                    <button>Create Test</button>
                </Link>
                <UploadModal />
                <button>Vote</button>
                <Link to="/media">
                    <button>View your media</button>       
                </Link>
                <button>Logout</button>
            </div>
            <hr></hr>
            <ProfileTest />
        </div>
    );
}

export default Profile;