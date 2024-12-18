import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Default from '../components/default.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Searched() {
    const [searched,setSearched]=useState([]);
    let params=useParams();

    const getSearched= async(Query) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${Query}`);
        const data = await response.json();
        console.log(data.results);
        setSearched(data.results);
    }


    useEffect(() => {
        getSearched(params.search)
    },[params.search])

  return (
    <Grid>
        {searched.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                    <img src={item.image?item.image:Default} alt="" onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop if default image fails
    e.target.src =Default; // Replace with your default image path
  }} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}
const Grid=styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
    grid-gap:3rem;

`;
const Card=styled.div`
    img{
        width:100%;
        border-radius:2rem;
    }
    a{
    text-decoration:none;
    }
    h4{
    text-align:center;
    padding:1rem;
    }
`;
export default Searched
