import React,{memo} from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ProductDetailModal = ({ product, onClose }) => {
  return (
    <Modal open={!!product} onClose={onClose}>
      <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
        <Typography variant="h6" gutterBottom>{product.title}</Typography>
        <Typography variant="body1">Price: {product.price}</Typography>
        <Typography variant="body1">Popularity: {product.popularity}</Typography>
        <Typography variant="body2" paragraph>Description: This is a placeholder description for {product.title}.</Typography>
        <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default memo(ProductDetailModal);
