import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPost");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Chào mừng bạn đến với Blogging Dev</h1>
        <p className="text-gray-500 text-xs sm:text-lg">
          Nơi đây bạn sẽ tìm thấy một loạt các bài viết và hướng dẫn chia sẻ về kiến thức
          công nghê kỹ thuật phần mềm và ngôn ngữ lập trình.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          Xem tất cả bài viết
        </Link>
      </div>

      <div className="max-w-12xl mx-auto p-2 ml-9  flex flex-col justify-center gap-8 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Bài viết gần đây</h2>
            <div className="flex flex-wrap gap-10">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              Xem tất cả
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
