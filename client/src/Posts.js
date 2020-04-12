import React,{ useState,useEffect } from 'react'

const Posts = () => {

    const [user, setuser] = useState('');   
  
    useEffect(() => {
       getpost();
    },[]);

    const getpost = async () => {
        const token = await localStorage.getItem('auth-token');
        const post = await fetch('http://localhost:1337/posts',{
            headers: {
                'auth-token': token
            }
        });
        const result = await post.json();
        setuser(result.user);
        // return result;

    }
    console.log(user);

    
    return(
        <div>
            <h1>Welcome {user.name}!</h1>
            <p>welcome to the posts page</p>
            <p>find your log here.</p>

        </div>

    )


}

export default Posts;