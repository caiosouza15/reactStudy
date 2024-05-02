export const getPost = async () => {
    try {
      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
  
      const [postsJson, photosJson] = await Promise.all([postResponse.json(), photosResponse.json()]);
  
      const postsAndPhotos = postsJson.map((post, index) => {
        return {
          ...post,
          photo: photosJson[index].url
        };
      });

      return postsAndPhotos;
      
    } catch (error) {
      console.error('Erro ao carregar os posts:', error);
    }
  };  