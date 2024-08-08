import React,{memo} from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ProductTable = ({ products, onProductClick }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Popularity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index} hover onClick={() => onProductClick(product)}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.popularity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(ProductTable);
