import './style.css'

export const ButtonFooter = ({loadMorePosts, noMorePosts}) => {
    return (
        <button onClick={loadMorePosts} className="button" disabled={noMorePosts}>
            Loading more posts...
        </button>
    )
}