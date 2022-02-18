import React from 'react';
import { useSelector } from 'react-redux';

function UserMediaContainer(props) {
    const { user } = useSelector((state) => state.auth)

    const renderMedia = () => {
        return user.media.map(media => 
        <div key={media._id} className='media-list'>
            <li>
                {media.title}
            </li>    
            <audio controls>
                <source src={media.url} />    
            </audio>  
        </div>
        )
    }

    return (
        <div className='create-test-bottom-container my-media'>
            <h1>MY MEDIA</h1>
            <ul>
                {renderMedia()}
            </ul>
        </div>
    );
}

export default UserMediaContainer;