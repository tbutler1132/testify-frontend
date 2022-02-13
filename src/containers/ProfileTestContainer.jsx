import React from 'react';
import { useSelector } from 'react-redux';

function ProfileTestContainer() {
    const { user } = useSelector((state) => state.auth)

    const renderTests = () => {
        return user.tests.map(test => 
            <div className='test-profile-container'
            key={test.title}
            >
                <div className="test-profile-title-container">
                    <h4>
                        {test.title}
                    </h4>
                </div>
                <div
                className="test-profile-media-container"
                >
                    {test.media.map(media => 
                        <div
                        key={media._id}
                        className="test-profile-media"
                        >
                            <p>{media.title}</p>    
                            <p>{media.votes}</p>    
                        </div>
                    )}
                </div>
            </div>    
        )
    }

    return (
        <div>
            <h1>My Tests</h1>
            {renderTests()}
        </div>
    );
}

export default ProfileTestContainer;