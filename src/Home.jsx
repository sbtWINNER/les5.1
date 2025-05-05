import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h3><Link to="/page1">Page1</Link></h3>
      <h3><Link to="/page2">Page2</Link></h3>
    </div>
  );
};

export default Home;
