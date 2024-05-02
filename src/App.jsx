import { useEffect, useState } from 'react'

import './App.css'

import { getPost } from './componets/utils/load-post';
import { Posts } from './componets/Posts';
import { ButtonFooter } from './componets/Button';
import { TextInput } from './componets/TextInput';

function App() {
  const [post, setPost] = useState([])
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPerPage > allPosts.length;


  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const postAndPhtos = await getPost();
    setPost(postAndPhtos.slice(page, postPerPage));
    setAllPosts(postAndPhtos);
  };

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPerPage);
    post.push(...nextPost);
    setPost([...post, ...nextPost]);
    setPage(nextPage);

    console.log("Loading more posts");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)
  }

  const filteredPosts = () => {
    if (!!searchValue) {
      return allPosts.filter((post) => {
        return post.title.toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    } else {
      return post;
    }
  };

  return (
    <section className='container'>

      <div className='search-container'>
        {!!searchValue && (
        <>
          <h1>Seach Value: {searchValue}</h1>
        </>
      )} 

        <TextInput
          handleChange={handleChange}
          searchValue={searchValue}
        />
      </div>

      <Posts filteredPosts={filteredPosts()} />

      <div className='button-container'>
        <ButtonFooter loadMorePosts={loadMorePosts} noMorePosts={noMorePosts} />
      </div>

    </section>)
}

export default App
