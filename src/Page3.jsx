import { useEffect, useState } from "react";
import { useParams, useNavigate, } from "react-router-dom";


const Page3 = () => {
const [user, setUser ] = useState({})
const params = useParams ();
const navigate = useNavigate();


useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(response => response.json())
    .then(data => setUser(data))
}, [params]);
 
    return (
        <div>
            <h1>Page3</h1>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.username}</h3>
            <button onClick={() => {
                navigate(-1)
            }}>go back</button>
        </div>
    );
}

export default Page3;
