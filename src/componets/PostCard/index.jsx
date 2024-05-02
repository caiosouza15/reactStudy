import './style.css';

export const PostCard = ({ post }) => {
    
    return (
        <div className='post' key={post.id}>
            <img src={post.photo} alt={post.title} />
            <div className='post-content'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )

}
