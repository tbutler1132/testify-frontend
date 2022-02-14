import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'material-ui-audio-player'

function ProfileTestContainer() {
    const { user } = useSelector((state) => state.auth)

    const renderTests = () => {
        return user.tests.map(test => 
            <div className='test-profile-container'
            style={{borderColor: test.active ? "#A0C398" : ""}}
            key={test.title}
            >
                <div className="test-profile-title-container">
                    <h4>
                        {test.title}
                    </h4>
                    <p style={{textAlign: 'left'}}>{test.description}</p>
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
                            <audio controls>
                                <source src={media.url} />    
                            </audio>  
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