import React, {useState} from 'react'

function CommentSection(props) {
    const [show, setShow]= useState(true)
    const { user1, comment1, user2 , comment2} = props;
return (
    <div className='comments-container'>
    
        <button onClick={()=>setShow(true)}> Show Comments </button>
        <button onClick={()=>setShow(false)}> Hide Comments </button>

        {show ? 

        <div> 
            <ul>{user1}</ul><ul>{comment1}</ul> 
            <ul>{user2}</ul><ul>{comment2}</ul>
        </div>
          
        :null
        }
        
    </div>
    )
}
export default CommentSection;