import { PostCard } from "../PostCard"

import './style.css'

export const Posts = ({ filteredPosts }) => {
    console.log("post", filteredPosts)
    
    return (
        <div className='posts'>
            {filteredPosts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )

}