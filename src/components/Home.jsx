import ProfileTestContainer from '../containers/ProfileTestContainer';
import { useSelector } from 'react-redux';

function Home() {
    const { user } = useSelector((state) => state.auth)
    
    return (
        <div>
            <ProfileTestContainer />
        </div>
    );
}

export default Home;