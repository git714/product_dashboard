import React, { useState,memo,useCallback} from 'react';
import {Container, Grid, Typography } from '@mui/material';
import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import ProductDetailModal from '../components/ProductDetailModal';
import NoDataFallback from '../components/NoDataFallback';
import { useSelector} from 'react-redux'
const Dashboard = () => {
    const MAX_VALUE = Number.MAX_SAFE_INTEGER;
    const productData = useSelector((state) => state.products.value)
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, MAX_VALUE]);
    const [popularityRange, setPopularityRange] = useState([0, MAX_VALUE]);
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productsPerPage = 5;


    // usecallbacks optimization for searchbar

    const handleSearchTerm = useCallback((e) => {
        return setSearchTerm(e.target.value)
      }, [searchTerm]);

      // usecallbacks optimization for filters
      const handlesetPriceRange = useCallback((e) => {
        return setPriceRange(JSON.parse(e.target.value))
      }, [priceRange]);

      const handlesetPopularityRange = useCallback((e) => {
        return setPopularityRange(JSON.parse(e.target.value))
      }, [popularityRange]);

      const handlesetSortKey = useCallback((e) => {
        return setSortKey(e.target.value)
      }, [sortKey]);
      const handlesetSortOrder = useCallback((e) => {
        return setSortOrder(e.target.value)
      }, [sortOrder]);

    const filterAndSortProducts = () => {
        let filteredProducts = Object.values(productData.products)
            .filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                product.price >= priceRange[0] && product.price <= priceRange[1] &&
                product.popularity >= popularityRange[0] && product.popularity <= popularityRange[1]
            );

        if (sortKey) {
            filteredProducts = filteredProducts.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a[sortKey] - b[sortKey];
                } else {
                    return b[sortKey] - a[sortKey];
                }
            });
        }

        return filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    };

    const handleProductClick = useCallback((product)=> {
        setSelectedProduct(product);
    },[selectedProduct]);

    return (
        productData ? <>
            <Container>

                <Typography variant="h4" gutterBottom>Product List</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar setSearchTerm={handleSearchTerm} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Filters
                            setPriceRange={handlesetPriceRange}
                            setPopularityRange={handlesetPopularityRange}
                            setSortKey={handlesetSortKey}
                            setSortOrder={handlesetSortOrder}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <ProductTable
                            products={filterAndSortProducts()}
                            onProductClick={handleProductClick}
                        />
                        <Pagination
                            totalProducts={Object.values(productData.products).length}
                            productsPerPage={productsPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Grid>
                </Grid>

                {selectedProduct &&
                    <ProductDetailModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />}
            </Container>

        </> : <NoDataFallback/>

    );
};

export default memo(Dashboard);
