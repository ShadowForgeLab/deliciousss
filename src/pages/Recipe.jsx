import { useEffect,useState } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import React from 'react'

function Recipe() {
    const [detail,setDetail]=useState({})
    const [activeTab,setActiveTab]=useState('instructions')
    let params=useParams();

    const getRecipe= async (RecipeId) => {
        const fetchData= await fetch(`https://api.spoonacular.com/recipes/${RecipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await fetchData.json();
        setDetail(data);
    }
    // eslint-disable-next-line
    useEffect(()=>{
        getRecipe(params.name);
    },[params.name])


  return (
    <>
    <DetailWrapper>
        <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' :""} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' :""} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === 'instructions' &&
            <div>
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{__html:detail.summary}}></p>
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{__html:detail.instructions}}></p>
        </div>}
            {activeTab === 'ingredients' &&
            <ul>
            {detail.extendedIngredients.map((item)=>{
                return(
                    <li key={item.id}>{item.original}</li>
                );
            })}
        </ul>
            }
        </Info>
    </DetailWrapper>
    </>
  )
}

const DetailWrapper=styled(motion.div)`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    align items:flex-start;
    .active{
        background:linear-gradient(35deg,#494949,#313131);
        color:white;
    }
    li{
    list-style-type:none;
    font-size:1.22rem;
    }
    ul{
    margin-top:2rem;
    }
    img{
    width:20rem;
    border-radius:10px;
    }
`;

const Button=styled.button`
    padding:1rem 2rem;  
    color:#313131;
    background:white;
    border:2px solid black;
    margin-right:1rem;
    font-weight:400;
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease; /* Add transition properties */
     &:hover {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        transform: scale(1.05); /* Slightly scale up the button on hover */
    }

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

`;

const Info=styled.div`
    margin-left:5rem;
     height: 400px;
    overflow-y: auto; 
    p{
    margin-top:1rem;
    }
    }
`

export default Recipe
