import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UploadModal from './UploadModal';
import Button from '@mui/material/Button'

function Header(props) {
    const { user, token } = useSelector((state) => state.auth)
    
    if(!token) return null
    return (
        <div>
            <div className="header-container">
                <div className="header-user-info-container">
                    <Link to="/profile">
                        <h1>{user.username}</h1>
                    </Link>
                    <h4>Karma</h4>
                    <h4>Link</h4>
                </div>
                <div className="header-nav-buttons-container">
                    <Link to="/test">
                        <Button variant='outlined'>Create Test</Button>
                    </Link>
                    <div id="upload-media-button">
                        <UploadModal />
                    </div>
                    <Link to="/vote">
                        <Button variant='outlined'>Vote</Button>
                    </Link>
                    <Link to="/media">
                        <Button variant='outlined'>View your media</Button>       
                    </Link>
                </div>
                <div className="header-utility-container">
                    <Button variant='outlined'>Logout</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;