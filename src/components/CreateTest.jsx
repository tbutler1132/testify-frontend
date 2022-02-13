import { useState } from 'react';
import { useSelector } from 'react-redux';
import useArray from '../hooks/useArray';
import { useCreateTestMutation } from '../redux/services/testify';
import Button from '@mui/material/Button'
// import { useNavigate } from 'react-router-dom';

function CreateTest() {   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useSelector((state) => state.auth)
    const { array, set, push, remove, filter, update, clear } = useArray([null, null])
    const [createTest, {isSuccess}] = useCreateTestMutation()

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value)
    }

    const mediaClickHandler = (e, media) => {
        if(!array[0]){
            update(0, media)
        }else if(!array[1]){
            update(1, media)
        }
    }

    const selectionClickHandler = (e, i) => {
        update(i, null)
    }


    const submitHandler = () => {
        createTest({test: {
            title: title,
            active: true,
            description: description,
            media: array
        }, id: user._id})
    }


    const renderMedia = (e) => {
        return user.media.map(media => 
            <li style={{color: mediaSelected(media.url) ? "green" : "black", cursor: "pointer"}} key={media.url} onClick={(e) => mediaClickHandler(e, {url: media.url, title: media.title, votes: 0})}>
                {media.title}
            </li>    
        )
    }

    const mediaSelected = (url) => {
        return array.map(el => el?.url).includes(url)
    }

    const validateForm = () => {
        return !!title && !!description && !array.includes(null)
    }

    return (
        <div className="create-test-container">
            <div className="create-test-form-container">
                <label>Title</label>
                <input value={title} onChange={titleChangeHandler}/>
                <label>Description</label>
                <textarea value={description} onChange={descriptionChangeHandler}/>
            </div>
            <p onClick={(e) => selectionClickHandler(e, 0)}>{array[0] ? array[0].title : "Pick something"}</p>
            <p onClick={(e) => selectionClickHandler(e, 1)}>{array[1] ? array[1].title : "Pick something"}</p>
            <hr></hr>
            <h3>Select Media</h3>
            <ul>
                {renderMedia()}
            </ul>
            <Button disabled={!validateForm()} variant="contained" onClick={() => submitHandler()}>Create test</Button>
        </div>
    );
}



export default CreateTest;