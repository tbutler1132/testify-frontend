import React from 'react';
import { useGetRandomTestQuery } from '../redux/services/testify';

function VoteOnTestContainer(props) {
    const { data, error, isLoading, isFetching, refetch } = useGetRandomTestQuery('bulbasaur')

    const voteHandler = (e, i) => {
        console.log(data)
    }

    return (
        <div>
            {isFetching ? <div>Loading...</div> 
            :
            <>
            <label onClick={(e) => voteHandler(e, 0)}>{data.media[0].title}</label>
            <button>Vote</button>
            <label>{data.media[1].title}</label>
            <button>Vote</button>
            <button onClick={refetch}>Submit</button>
            </>
            }
        </div>
    );
}

export default VoteOnTestContainer;