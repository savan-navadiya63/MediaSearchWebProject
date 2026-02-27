import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/serchSlice';

const SearchBar = () => {

  const [text, settext] = useState("");

  const dispatch = useDispatch();  

  const submitHandler = (e) => {
    
     e.preventDefault();    //form submit hote hi page reload ho jata hai, isliye preventDefault use karte hai taki page reload na ho.
    
     dispatch(setQuery(text ))
    
     settext("");
  };

  return (
    <div>
        <form onSubmit={(e) => {
          submitHandler(e);
        }} className="flex items-center justify-center  bg-(--c2) p-4 rounded-lg">
          <input 
            required
             type="text" 
            placeholder="Search..." 
            className="bg-gray-800 text-white px-2 py-2 rounded-md  w-full" 

            value={text}
            onChange={
              (e) => 
           settext(e.target.value)
            }
          />
          <button className="bg-(--c3) active:scale-95 text-white px-4 py-2 rounded-md ml-2 cursor-pointer" >Search</button>
        </form>
    </div>
  )
}

export default SearchBar
