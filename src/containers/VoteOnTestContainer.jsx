import React from 'react';
import { useState } from 'react';
import { useGetRandomTestQuery, useUpdateMediaMutation } from '../redux/services/testify';
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

function VoteOnTestContainer(props) {
    const { data, error, isFetching, refetch } = useGetRandomTestQuery('bulbasaur')
    const [voteOnTest, {isLoading}] = useUpdateMediaMutation()
    const [queuedVote, setVote] = useState(null)

    const voteHandler = (e, i) => {
        setVote(data.media[i])
    }

    const submitHandler = () => {
        const updatedMedia = {...queuedVote, votes: queuedVote.votes + 1}
        voteOnTest({userId: data.userId, testId: data.testId, mediaId: queuedVote._id, media: updatedMedia})
        setVote(null)
        refetch()
    }

    const buttonStyle = (id) => {
        if(queuedVote){
            if (queuedVote._id === id){
                return "contained"
            }else{
                return "outlined"
            }
        }else{
            return "outlined"
        }
    }

    return (
        <div className='test-vote-container'>
            {isFetching ? <CircularProgress /> 
            :
            <>
            <div className="poll-options-container">
                <div className="poll-option-container">
                    <label >{data.media[0].title}</label>
                    <audio controls>
                        <source src={data.media[0].url} />    
                    </audio>  
                    <Button variant={buttonStyle(data.media[0]._id)} onClick={(e) => voteHandler(e, 0)}>Vote</Button>
                </div>
                <div className="poll-option-container">
                    <label>{data.media[1].title}</label>
                    <audio controls>
                        <source src={data.media[1].url} />    
                    </audio>  
                    <Button variant={buttonStyle(data.media[1]._id)} onClick={(e) => voteHandler(e, 1)}>Vote</Button>
                </div>
            </div>
            <Button size='large' disabled={!queuedVote} onClick={submitHandler}>Submit</Button>
            </>
            }
        </div>
    );
}

export default VoteOnTestContainer;