import React from 'react';
import { useState } from 'react';
import { useGetRandomTestQuery, useUpdateMediaMutation } from '../redux/services/testify';

function VoteOnTestContainer(props) {
    const { data, error, isFetching, refetch } = useGetRandomTestQuery('bulbasaur')
    const [voteOnTest, {isLoading}] = useUpdateMediaMutation()
    const [queuedVote, setVote] = useState(null)

    const voteHandler = (e, i) => {
        setVote(data.media[i])
    }

    const submitHandler = () => {
        const updatedMedia = {...queuedVote, votes: queuedVote.votes + 1}
        console.log(updatedMedia)
        voteOnTest({userId: data.userId, testId: data.testId, mediaId: queuedVote._id, media: updatedMedia})
        setVote(null)
        refetch()
    }

    return (
        <div>
            {isFetching ? <div>Loading...</div> 
            :
            <>
            <h3>You've currently selected {queuedVote?.title}</h3>
            <label >{data.media[0].title}</label>
            <button onClick={(e) => voteHandler(e, 0)}>Vote</button>
            <label>{data.media[1].title}</label>
            <button onClick={(e) => voteHandler(e, 1)}>Vote</button>
            <button onClick={submitHandler}>Submit</button>
            </>
            }
        </div>
    );
}

export default VoteOnTestContainer;