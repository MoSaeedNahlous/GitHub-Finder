import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = (props) => {
    
    
        const {login,avatar_url}= props.user;
        return (
            <div className="card text-center">
                
                    <img src={avatar_url} alt={login +" profile picture"} className="round-img" style={{width: '60px'}}/>
                    <h2>{login}</h2>
                    <Link to={`/user/${login}`} className="btn-dark btn btn-sm my-1">
                        more
                         </Link>
            </div>
        )
    
}

UserItem.prototype={
    login:PropTypes.string.isRequired,
    
    avatar_url:PropTypes.string.isRequired
}

export default UserItem
