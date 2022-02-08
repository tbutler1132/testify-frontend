import React from 'react';
import { useSelector } from 'react-redux';

function ProfileTestContainer() {
    const { user } = useSelector((state) => state.auth)

    const renderTests = () => {
        return user.tests.map(test => 
            <div className='test-profile-container'
            key={test.title}
            >
                <p>
                Title: {test.title}
                </p>
                {test.media.map(media => 
                    <div
                    key={media._id}
                    >
                        <p>{media.title}</p>    
                        <p>{media.votes}</p>    
                    </div>
                )}
            </div>    
        )
    }

    return (
        <div>
            <h1>MY TESTS</h1>
            {renderTests()}
        </div>
    );
}

export default ProfileTestContainer;