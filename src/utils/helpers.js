//http://35.194.13.170
export default function getTweets({ value, location }){
    return fetch(`http://127.0.0.1:8080/search?value=${value}&location=${location}`, {mode: 'cors'})
    .then(res=>res.json())
}
