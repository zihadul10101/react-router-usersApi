import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setFriend(data));
    },[])
    return (
        <div>
            <h2>This is friend detail: {friendId}  </h2>
            <h3>name: {friend.name}</h3>
            <h4>email: {friend.email}</h4>
            <h5>phone: {friend.phone}</h5>

        </div>
    );
};

export default FriendDetail;