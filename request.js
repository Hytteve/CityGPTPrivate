import React, { useState, useEffect } from './node_modules/react/index';
import axios from './node_modules/axios/index.cjs';

// function App() {
//     const [posts, setPosts] = useState([]);
  
//     useEffect(() => {
//       axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//           setPosts(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }, []);
  
//     return (
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     );
//   }
  
//   export default App;