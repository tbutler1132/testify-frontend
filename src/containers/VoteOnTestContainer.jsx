import React from 'react';
import { useGetRandomTestQuery, useUpdateMediaMutation } from '../redux/services/testify';

function VoteOnTestContainer(props) {
    const { data, error, isFetching, refetch } = useGetRandomTestQuery('bulbasaur')
    const [voteOnTest, {isLoading}] = useUpdateMediaMutation()

    const voteHandler = (e, i) => {
        const updatedMedia = {...data.media[i], votes: data.media[i].votes + 1}
        console.log(updatedMedia)
        voteOnTest({userId: data.userId, testId: data.testId, mediaId: data.media[i]._id, media: updatedMedia})
    }

    return (
        <div>
            {isFetching ? <div>Loading...</div> 
            :
            <>
            <label >{data.media[0].title}</label>
            <button onClick={(e) => voteHandler(e, 0)}>Vote</button>
            <label>{data.media[1].title}</label>
            <button onClick={(e) => voteHandler(e, 1)}>Vote</button>
            <button onClick={refetch}>Submit</button>
            </>
            }
        </div>
    );
}

export default VoteOnTestContainer;