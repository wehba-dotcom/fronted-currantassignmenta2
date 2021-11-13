import React,{useState,useEffect} from 'react';
import {} from 'react-bootstrap';


function Routering({ facade, setErrorMessage }) {

const [list,setList]= useState({detials: "",tags:[]});

const updateList = (data) => {
    setList({
    dettails: data.detials,
    tags: data.tags,
    });
};

useEffect(()=> {
    facade.fetchData('info/routing', updateList, setErrorMessage);
},[facade, setErrorMessage]);


return(
     <div style={{textAlign:"center"}}>
         <h3>Her is explining vedios about router</h3>
    <ul style={{ listStyleType: "none"}}>
    {list.tags.map(item => (
        <li key={item.id}>
            <a href={item.url}> {item.detials}</a>
        </li>
    ))}
    </ul>
    </div>
);
}
export default Routering;