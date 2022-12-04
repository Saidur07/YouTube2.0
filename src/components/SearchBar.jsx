import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <div>

    <form
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
      }}
      className="rounded-2xl   border-1 border-gray-200 bg-gray-700"
    >
      <input
        className='search-bar font-semibold  rounded-r-none rounded-2xl py-2 px-4 bg-gray-700 text-slate-100 focus:ring-1 ring-slate-400'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
   
      <IconButton type='submit' sx={{ p: '10px', color: '#1b9ff1' }} aria-label='search' className='gradient-text font-semibold '>
        <SearchIcon />
      </IconButton>
    </form>

    </div>
  );
};

export default SearchBar;
