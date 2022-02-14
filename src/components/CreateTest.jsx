import { useState } from 'react';
import { useSelector } from 'react-redux';
import useArray from '../hooks/useArray';
import { useCreateTestMutation } from '../redux/services/testify';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';

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
        if(mediaSelected(media.url)){
            if(array.length === 1){
                clear()
            }else{
                filter(el => el?.url !== media.url)
            }
        }else
        {
            if(!array[0]){
                update(0, media)
            }else if(!array[1] || array.length === 2){
                update(1, media)
            }
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
            <li style={{ cursor: "pointer" }} key={media.url} onClick={(e) => mediaClickHandler(e, {url: media.url, title: media.title, votes: 0})}>
                <div style={{display: "flex", alignContent: "flex-start"}}>
                     {mediaSelected(media.url) ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                    <span style={{marginLeft: "8px"}}>{media.title}</span>
                </div>
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
            <div className="create-test-top-container">
                <div className="create-test-form-container">
                    <TextField label='Title' variant='standard' value={title} onChange={titleChangeHandler}/>
                    <TextField style={{marginTop: '2rem', zIndex: "0"}} multiline label='Description' value={description} onChange={descriptionChangeHandler}/>
                </div>
                <div id="create-test-queued-file-container">
                    <span style={{borderRight: 'solid'}} onClick={(e) => selectionClickHandler(e, 0)}>
                        {
                            array[0] ? 
                                array[0].title 
                            : 
                                <span style={{color: 'grey', fontStyle: 'italic'}}>Option A</span>
                        }
                    </span>
                    <span onClick={(e) => selectionClickHandler(e, 1)}>
                        {
                            array[1] ? 
                                array[1].title 
                            : 
                                <span style={{color: 'grey', fontStyle: 'italic'}}>Option B</span>
                        }
                    </span>
                </div>
            </div>
            <div className="create-test-bottom-container">
                <h3>Select Media</h3>
                <ul>
                    {renderMedia()}
                </ul>
            </div>
            <Button disabled={!validateForm()} variant="contained" onClick={() => submitHandler()}>Create test</Button>
        </div>
    );
}



export default CreateTest;