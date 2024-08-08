import React,{memo} from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <MuiPagination 
      count={totalPages} 
      page={currentPage} 
      onChange={(event, value) => setCurrentPage(value)} 
      color="primary" 
    />
  );
};

export default memo(Pagination);
