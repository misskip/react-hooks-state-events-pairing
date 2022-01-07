import video from '../data/video.js';
import VideoLink from './VideoLink';
import Buttons from './Buttons';
import CommentSection from './CommentSection';


function Main() {
    return (
        <div>
            <VideoLink />
             <h2>{video.title}</h2>
             <h6>{video.views}{" views | "}{video.createdAt} </h6>
                 
            <Buttons/>
            <CommentSection 
            user1= "duanebot"
            comment1= "first!"
            user2= "gaeron"
            comment2= "What a great tutorial!"
            />
        </div>
    )
}

export default Main;