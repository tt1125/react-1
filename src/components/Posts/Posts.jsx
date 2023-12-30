import './Posts.css';

function Posts({post}){
return(
    <>
    <div className='postContainer'>
        <p className='post'>{post}</p>
    </div>
    </>
)
}

export default Posts;