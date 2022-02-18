import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function ProfileTestContainer() {
    const { user } = useSelector((state) => state.auth)
    const [deletePopup, toggleDeletePopup] = useState(false)

    const calculatePercentage = (test, votes) => {
        let total = 0
            test.media.forEach(media => {
                total = total + media.votes
            })
        if(total === 0) return "0"
        return votes / total * 100
    }

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
                            <p style={{color: calculatePercentage(test, media.votes) > 50 ? "green" : "black"}}>{calculatePercentage(test, media.votes)}%</p>    
                        </div>
                    )}
                </div>
                <DeleteOutlineIcon />
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