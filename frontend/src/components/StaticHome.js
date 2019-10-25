import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import Post from './Post.js';
import MyPost from './MyPost';
import StaticCreate from './StaticCreate';
import create from '../assets/create.svg';
import story1 from '../images/story1.png';
import story2 from '../images/story2.png';
import story3 from '../images/story3.png';
import story4 from '../images/story4.png';
import checking1 from '../images/loc1.png';
import checking2 from '../images/loc2.png';
import './styles.css';

export default function StaticHome (props) {

    const staticID = 1;
    const [staticData, setStaticData] = useState([{
        contents: 'Had a great time exploring Cairo. Met some wonderful people. The pyramids are as beautiful as you\'d expect them to be.',
        title: 'First Day in Cairo',
        created_at: '2019-10-24T01:06:06.288Z',
        updated_at: '2019-10-24T01:06:06.288Z',
        user: 'Alice Johnson',
        user_id: 2,
    },{
        contents: 'Mykonos is so full of life!! There is something new to do every 50 feet.',
        title: 'Day in Mykonos',
        created_at: '2019-10-23T01:06:06.288Z',
        updated_at: '2019-10-23T01:06:06.288Z',
        user: 'John Smith',
        user_id: 1,
    },{
        contents: 'Today\'s the one year anniversary of my arrival in Thailand! Can\'t believe a whole year has gone by. Here\'s to the next!',
        title: 'Thailand',
        created_at: '2019-10-23T01:06:06.288Z',
        updated_at: '2019-10-23T01:06:06.288Z',
        user: 'Zeke Banks',
        user_id: 3,
    },{
        contents: 'The islands have all been amazing, are so unique and have so much to offer. Spent the day today learning to work in the vineyards. Thanks, Yianni!',
        title: 'Exploring Greece',
        created_at: '2019-10-22T01:06:06.288Z',
        updated_at: '2019-10-22T01:06:06.288Z',
        user: 'John Smith',
        user_id: 1,
    },{
        contents: 'Last day in my home country. Next stop: Egypt!',
        title: 'Heading Out',
        created_at: '2019-10-20T01:06:06.288Z',
        updated_at: '2019-10-20T01:06:06.288Z',
        user: 'Alice Johnson',
        user_id: 2,
    }]);

    const addPost = post => {
        setStaticData([...staticData, post]);
    }

    const editPost = post => {
        setStaticData([...staticData.map(item => {
            if (item.id === post.id) {
                return post
            } else {
                return item
            }
        })]);
    }

    const deletePost = id => {
        setStaticData([...staticData.filter(item => !(item.id === id))]);
    }

    return(
        <>
        <div className="homepage">
            <Route exact path="/staticcreate" render = { props => {return <StaticCreate {...props} addPost={addPost} /> }} />
            <Navbar />
            <div className="feed">
                <h2 className='home-header'>Home</h2>
                <h4 className='feed-header'>Feed</h4>
                {staticData &&
                    <div className="feed-reverse">
                        {staticData.map(post => (
                            post.user_id === staticID ?
                            <MyPost key={post.id} id={post.id} title={post.title} contents={post.contents} user_id={post.user_id} user={post.user} created_at={post.created_at} updated_at={post.updated_at} editPost={editPost} deletePost={deletePost} />
                            : 
                            <Post key={post.id} id={post.id} title={post.title} contents={post.contents} user_id={post.user_id} user={post.user} created_at={post.created_at} updated_at={post.updated_at} />
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
            <Link to='/staticcreate'><img className="create-icon hover-grow" src={create} /></Link>
        </div>
        </>
    )
}