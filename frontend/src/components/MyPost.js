import React from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { deletePost } from '../context/AuthContext';

const MyPost = (props) => {

    const handleEdit = e => {

    }

    const handleDelete = e => {
        e.preventDefault();
        console.log('delete clicked!', props.id)
        props.deletePost(props.id);
    //     axiosWithAuth()
    //     .delete(`/api/posts/${props.id}`)
    //     .then(response => {
    //     console.log(response.data);
    //      })
    //     .catch(error => {
    //     console.log(error);
    // });
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