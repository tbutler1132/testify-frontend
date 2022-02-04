import React from 'react';
import { useSelector } from 'react-redux';

function UserMediaContainer(props) {
    const { user } = useSelector((state) => state.auth)

    const renderMedia = () => {
        return user.media.map(media => 
        <div>
            {media.title}
        </div>    
        )
    }

    return (
        <div>
            Media
            {renderMedia()}
        </div>
    );
}

export default UserMediaContainer;