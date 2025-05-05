import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Page2 = () => {
  const [title, setTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setTitle(data));
  }, []);

  return (
    <div>
      <h1>Page2</h1>
      <button onClick={() => navigate(-1)}>go back</button>
      {title.map(item => (
        <h2 key={item.id}>
          <Link to={`/detail/${item.id}`}>{item.title}</Link>
        </h2>
      ))}
    </div>
  );
};

export default Page2;
