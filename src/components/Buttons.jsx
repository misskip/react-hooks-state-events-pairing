import React, {useState} from 'react'

function Buttons({}) {
  const [like, setLike] = useState(100)
  const [dislike,setDislike] = useState(4)
  
  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive,setDislikeActive] = useState(false)
    
function liked(){
    if(likeActive){
        setLikeActive(false)
        setLike(like-1)
    }else{
        setLikeActive(true)
        setLike(like+1)
        if(dislikeActive){
            setDislikeActive(false)
            setLike(like+1)
            setDislike(dislike-1)
}}}
function disliked(){
    if(dislikeActive){
        setDislikeActive(false)
        setDislike(dislike-1)
    }else{
        setDislikeActive(true)
        setDislike(like+1)
        if(likeActive){
            setLikeActive(false)
            setDislike(like+1)
            setLike(dislike-1)
}}}
    return (
        <div className='Buttons-Container'>
            <div></div>
            <button onClick={liked}>Like {like}</button>
            <button onClick={disliked}>Dislike {dislike}</button>
        </div>
    )
}
export default Buttons;