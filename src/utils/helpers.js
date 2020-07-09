//http://35.194.13.170
export default function getTweets({ value, location }){
    return fetch(`https://onestopshop-281920.uc.r.appspot.com/search?value=${value}&location=${location}`, {mode: 'cors'})
    .then(res=>res.json())
}
