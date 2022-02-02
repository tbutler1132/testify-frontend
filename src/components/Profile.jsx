import React from 'react';
import ProfileTest from './ProfileTest';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
    const { user } = useSelector((state) => state.auth)
    
    console.log(user, "user auth")
    return (
        <div>
            <div className="profile-header-container">
                <h1>{user.username}</h1>
                <h4>Karma</h4>
                <h4>Link</h4>
                <Link to="/test">
                    <button>Upload</button>
                </Link>
                <button>Vote</button>
                <button>Logout</button>
            </div>
            <hr></hr>
            <ProfileTest />
        </div>
    );
}

export default Profile;