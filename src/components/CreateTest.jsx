import { useState } from 'react';
import { useSelector } from 'react-redux';

function CreateTest() {   
    const [title, setTitle] = useState('')
    const { user } = useSelector((state) => state.auth)

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className="container">
            <label>Title</label>
            <input value={title} onChange={changeHandler}/>
            <p>Current selected 1</p>
            <p>Current selected 2</p>
            <hr></hr>
            <p>List of media</p>
            <button>Create test</button>
        </div>
    );
}



export default CreateTest;