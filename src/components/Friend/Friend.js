import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
 // console.log(props.friend);
  const { name, email, id } = props.friend;
  const history = useHistory();

  const handleClick = (friendId) => {
    const url =`/friend/${friendId}`;
    history.push(url);
  }
  const friendStyle = {
    border: '1px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'


  }
  return (
    <div style={friendStyle}>
      <h2>name: {name}</h2>
      <h3>email: {email}</h3>
      <h4>id:  <Link to={`/friend/${id}`}>show detail of {id}</Link></h4>
       <button onClick={() => handleClick(id)}>click me</button>
    </div>
  );
};

export default Friend;