import getTweets from '../utils/helpers';
import { showLoading, hideLoading } from 'react-redux-loading';


export const RECEIVE_TWEETS = 'RECEIVE_TWEET'

function receiveTweets(data){
    return{
        type: RECEIVE_TWEETS,
        data
    }
}
function filterSortData (data){
    return Object.values(
        data.reduce( (c, e) => {
          if (!c[e.conversation_id]) c[e.conversation_id] = e;
          return c;
        }, {})
    ).sort((a,b)=>b.datetime - a.datetime);
}

  
export function handleReceiveTweets({ value, location }){
    return(dispatch)=>{
        dispatch(showLoading())
        return getTweets({ value, location })
            .then((data)=>{
                const filtered = filterSortData(data).filter(item=>item.tweet.includes(value));
                dispatch(receiveTweets(filtered));
                dispatch(hideLoading());
            })
    }
}