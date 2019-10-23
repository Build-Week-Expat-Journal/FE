import React from 'react';

export default function Post(props) {
    return (
        <>
            <div className="post">
                <h3>{props.title}</h3>
                <p>{props.created_at.slice(0,10)}</p>
                <p>{props.contents}</p>
            </div>
        </>
    )
}