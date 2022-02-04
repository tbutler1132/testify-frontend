import { useState } from 'react';
import { useSelector } from 'react-redux';
import useArray from '../hooks/useArray';
import { useCreateTestMutation } from '../redux/services/testify';

function CreateTest() {   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useSelector((state) => state.auth)
    const { array, set, push, remove, filter, update, clear } = useArray([null, null])
    const [createTest, {isLoading}] = useCreateTestMutation()

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
            <li key={media.url} onClick={(e) => mediaClickHandler(e, {url: media.url, title: media.title, votes: 0})}>
                {media.title}
            </li>    
        )
    }

    console.log(array)

    return (
        <div className="container">
            <label>Title</label>
            <input value={title} onChange={titleChangeHandler}/>
            <label>Description</label>
            <textarea value={description} onChange={descriptionChangeHandler}/>
            <p onClick={(e) => selectionClickHandler(e, 0)}>{array[0] ? array[0].title : "Pick something"}</p>
            <p onClick={(e) => selectionClickHandler(e, 1)}>{array[1] ? array[1].title : "Pick something"}</p>
            <hr></hr>
            <p>List of media</p>
            <ul>
                {renderMedia()}
            </ul>
            <button onClick={() => submitHandler()}>Create test</button>
        </div>
    );
}



export default CreateTest;