import React from 'react';
import { useSelector } from 'react-redux';

function UserMediaContainer(props) {
    const { user } = useSelector((state) => state.auth)

    const renderMedia = () => {
        return user.media.map(media => 
        <li
        key={media._id}
        >
            {media.title}
        </li>    
        )
    }

    return (
        <div className='create-test-bottom-container'>
            <h1>MY MEDIA</h1>
            <ul>
                {renderMedia()}
            </ul>
        </div>
    );
}

export default UserMediaContainer;