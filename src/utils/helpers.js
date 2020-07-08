//http://35.194.13.170
export default function getTweets(value){
    return fetch(`http://127.0.0.1:8080/${value}`, {mode: 'cors'})
    .then(res=>res.json())
}
