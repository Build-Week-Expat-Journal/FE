import React from 'react';

export default function Post(props) {
    return (
        <>
            <div className="post">
                <div className="post-head">
                <h3>{props.title}</h3>
                </div>
                <p>{props.contents}</p>
                <div className='by-user'>By {props.user}</div>
            </div>
        </>
    )
}