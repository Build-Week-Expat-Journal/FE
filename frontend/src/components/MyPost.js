import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../context/AuthContext';

const MyPost = (props) => {

    const handleDelete = e => {
        e.preventDefault();
        console.log('delete clicked!', props.id)
        deletePost(props.id);
    }

    return (
        <>
            <div className="post mine">
                <div className="post-head">
                <h3>{props.title}</h3>
                    <div className="edit-del">
                        <button className="post-func hover-grow">🖋</button>
                        <button onClick={handleDelete} className="post-func hover-grow">✖</button>
                    </div>
                </div>
                <p>{props.contents}</p>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error
});

export default connect(mapStateToProps, { deletePost })(MyPost);