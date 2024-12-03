
// import { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


function Search() {

    const [input,setInput]=useState("");
    let navigate=useNavigate();
    const submitHandler=(e)=>{

        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <FormStyle action="" onSubmit={submitHandler}>
        <FaSearch/>
        <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input} />
    </FormStyle>
  )
}

const FormStyle=styled.form`
    margin:20px auto;
    position:relative;
    width:10 0%;
    text-align:center;

    input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    padding:1rem 3rem;
    width:100%;
    border-radius:1rem;
    outline:none;
    color:white;
    }
    svg{
    position:absolute;
    top:50%;
    left:1rem;
    transform:translateY(-50%);
    color:white;
    font-size: 1.5rem; 
    }
`
export default Search;
