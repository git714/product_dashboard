import React,{memo}from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <TextField 
      label="Search by title" 
      variant="outlined" 
      fullWidth 
      onChange={(e) => setSearchTerm(e)} 
    />
  );
};

export default memo(SearchBar);
