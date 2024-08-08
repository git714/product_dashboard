import React,{memo} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';


const Filters = ({ setPriceRange, setPopularityRange, setSortKey, setSortOrder }) => {
  const MAX_VALUE = Number.MAX_SAFE_INTEGER;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Price Range</InputLabel>
          <Select
            label="Price Range"
            onChange={(e) => setPriceRange(e)}
          >
            <MenuItem value={`[0, ${MAX_VALUE}]`}>All</MenuItem>
            <MenuItem value="[0, 5000]">0-5000</MenuItem>
            <MenuItem value="[5000, 10000]">5000-10000</MenuItem>
            <MenuItem value="[10000, 20000]">10000-20000</MenuItem>
            <MenuItem value={`[20000, ${MAX_VALUE}]`}>20000+</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Popularity Range</InputLabel>
          <Select
            label="Popularity Range"
            onChange={(e) => setPopularityRange(e)}
          >
            <MenuItem value={`[0, ${MAX_VALUE}]`}>All</MenuItem>
            <MenuItem value="[0, 10000]">0-10000</MenuItem>
            <MenuItem value="[10000, 30000]">10000-30000</MenuItem>
            <MenuItem value="[30000, 50000]">30000-50000</MenuItem>
            <MenuItem value={`[50000, ${MAX_VALUE}]`}>50000+</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Sort By</InputLabel>
          <Select
            label="Sort By"
            onChange={(e) => setSortKey(e)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Sort Order</InputLabel>
          <Select
            label="Sort Order"
            onChange={(e) => setSortOrder(e)}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default memo(Filters);
