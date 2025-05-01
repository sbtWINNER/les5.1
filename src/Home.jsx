import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
       
    }, []);
    return (
        <div>
            <h1>Home</h1>
            {
                users.map(item => {
                    return<h2><Link to={`/detail/${item.id}`}>{item.username}</Link></h2>
                })
            }
        </div>
    );
}

export default Home;
