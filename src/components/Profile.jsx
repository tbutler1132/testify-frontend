import { useState } from 'react';
import ProfileTestContainer from '../containers/ProfileTestContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import UploadModal from './UploadModal';

function Profile() {
    const { user } = useSelector((state) => state.auth)
    
    return (
        <div>
            <ProfileTestContainer />
        </div>
    );
}

export default Profile;