import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPost - perPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={perPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
