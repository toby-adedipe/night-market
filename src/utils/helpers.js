//http://35.194.13.170
export default function getTweets({ value, location }){
    return fetch(`https://35.194.13.170/search?value=${value}&location=${location}`, {mode: 'cors'})
    .then(res=>res.json())
}
