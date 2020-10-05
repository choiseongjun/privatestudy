import axios from 'axios';
import {wrap} from 'module';

export const fetchData = () =>{
    const userPromise = fetchUser();
    const postsPromise = fetchPosts();
    return {
        user:wrapPromise(userPromise),
        posts:wrapPromise(postsPromise)
    }
}

const wrapPromise=(promise)=>{
    //Set initial status;
    let status ='pending';
    //Store result
    let result;
    let suspender = promise.then(
        res=>{
            status:'success';
            result=res;
        },
        err=>{
            status='error';
            result=err;
        }
    )
}

const fetchUser = () =>{
    console.log('Fetching User...');
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.data)
        .catch(err=>console.log(err))
}
const fetchPosts = () =>{
    console.log('Fetching Posts...');
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res=>res.data)
        .catch(err=>console.log(err))
}