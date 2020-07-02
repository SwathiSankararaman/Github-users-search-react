import React from 'react';
import searchContext from "./context";
import './index.css';
import UserRepo from "./UserRepo";
import { Link } from 'react-router-dom';
import {
  Card,
} from 'react-bootstrap';

function UserList() {
    const { usersArray, isClickedUser, handleClickSearch } = React.useContext(searchContext);
    return (
        <div className='lists'>
            {isClickedUser ? <UserRepo /> :
                <div>
                    <ul>
                        {usersArray.map(user =>
                        <Card>
                        <Card.Body>
                        <Link key={user.id} to={`profile/${user.login}`} onClick={(event) => handleClickSearch(event, user.login)} className='github_userlist'>
                            <Card.Title>{user.login}</Card.Title>
                            <Card.Img alt="avatar" style={{ width: '50px' }} src={user.avatar_url} />
                        </Link>
                        </Card.Body>
                        </Card>)}
                    </ul>
                </div>}
        </div>
    )
}

export default UserList;
