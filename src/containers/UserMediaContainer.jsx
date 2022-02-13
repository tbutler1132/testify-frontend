import React from 'react';
import { useSelector } from 'react-redux';

function UserMediaContainer(props) {
    const { user } = useSelector((state) => state.auth)

    const renderMedia = () => {
        return user.media.map(media => 
        <div
        key={media._id}
        >
            {media.title}
        </div>    
        )
    }

    return (
        <div>
            <h1>MY MEDIA</h1>
            {renderMedia()}
        </div>
    );
}

export default UserMediaContainer;