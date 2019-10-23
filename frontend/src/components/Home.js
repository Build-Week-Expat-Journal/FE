import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import Navbar from './Navbar.js';
import Post from './Post.js';
import create from '../assets/create.svg';
import story1 from '../assets/story1.svg';
import story2 from '../assets/story2.svg';
import story3 from '../assets/story3.svg';
import story4 from '../assets/story4.svg';
import checking1 from '../assets/checking1.svg';
import checking2 from '../assets/checking2.svg';
import './styles.css';

class Home extends React.Component {
    componentDidMount() {
        this.props.getPosts();
        console.log(this.props.data);
    }

    render() {
        return(
            <>
            <div className="homepage">
                <Navbar />
                <div className="feed">
                    <h2 className='home-header'>Home</h2>
                    <h4 className='feed-header'>Feed</h4>
                    {this.props.isFetching && <p className="fetching">Fetching...</p>}
                    {this.props.data &&
                        <div>
                            {this.props.data.map(post => (
                                <Post key={post.id} title={post.title} contents={post.contents} user_id={post.user_id} created_at={post.created_at} updated_at={post.updated_at} />
                            ))}
                        </div>
                    }
                </div>
                <div className="stories-and-checking">
                    <div className="stories">
                        <h4 className="stories-header">Stories</h4>
                        <div className="stories-row">
                            <img className="story hover-grow" src={story1} />
                            <img className="story hover-grow" src={story2} />
                            <img className="story hover-grow" src={story3} />
                            <img className="story hover-grow" src={story4} />
                        </div>
                    </div>
                    <div className="checking-in">
                        <h4 className="checking-in-header">Checking In</h4>
                        <div className="checking-row">
                            <img className="checkin hover-grow" src={checking1} />
                            <img className="checkin hover-grow" src={checking2} />
                        </div>
                    </div>
                </div>
                <Link to='/create'><img className="create-icon hover-grow" src={create} /></Link>
            </div>
            </>
        )
    }
}


const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    isUpdating: state.isUpdating,
    isDeleting: state.isDeleting,
    error: state.error
});

export default connect(mapStateToProps, { getPosts })(Home);