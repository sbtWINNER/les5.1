import { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { useNavigate, } from "react-router-dom";



const Page1 = () => {
const [users,setUsers] = useState([])

const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => setUsers(data)) 
    },[])


    return (
        <div>
            <h1>Page1</h1>
            <button onClick={()=> {
                navigate(-1)
            }}>go back</button>
            {
                users.map(item => {
                    return (
                      <h2 key={item.id}>
                        <Link to={`/detail/${item.id}`}>{item.username}</Link>
                      </h2>
                    );
                  })
                  
            }

        </div>
    );
}

export default Page1;
