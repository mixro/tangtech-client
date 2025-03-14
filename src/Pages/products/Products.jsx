import { ExpandMore, Search } from '@mui/icons-material'
import './products.css'
import { Link } from 'react-router-dom'
import { getProducts } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { dummyBrands, dummyCategories } from '../../staticData'


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.clientProducts.products);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        getProducts(dispatch);
    }, [ dispatch ]);

    // Extract unique categories and brands from the products
    const uniqueCategories = [...new Set(products.map((product) => product.type))];
    const uniqueBrands = [...new Set(products.map((product) => product.brand))];

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to handle category filter change
    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category) // Remove category
                : [...prevCategories, category] // Add category
        );
    };

    // Function to handle brand filter change
    const handleBrandChange = (brand) => {
        setSelectedBrands((prevBrands) =>
            prevBrands.includes(brand)
                ? prevBrands.filter((br) => br !== brand) // Remove brand
                : [...prevBrands, brand] // Add brand
        );
    };

    // Filter products based on search query, selected categories, and brands
    const filteredProducts = Array.isArray(products) && products.filter((product) => {
        const productTitle = product.title.toLowerCase();
        const productBrand = product.brand.toLowerCase();  // Convert brand to lowercase
        const query = searchQuery.toLowerCase();

        const matchesQuery = productTitle.includes(query);

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.type);

        // Convert selected brands to lowercase before comparing
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.map((brand) => brand.toLowerCase()).includes(productBrand);

        return matchesQuery && matchesCategory && matchesBrand;
    });
  

  return (
    <div className="products_container">
        <div className="productsWrapper">
            <div className="products-left">
                <div className="productsLeft_container">
                    <div className="products_search">
                        <input 
                            type="text" 
                            placeholder='Search product' 
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <div className="productSearch_Icon">
                            <Search />
                        </div>
                    </div>
                    
                    <div className="products-filters products-categories">
                        <h2>Categories</h2>
                        {uniqueCategories.length > 0 
                            ? 
                            uniqueCategories.map((category) => (
                                <div className="products-category-item" key={category}>
                                    <p>{category}</p>
                                    <input 
                                        type="checkbox" 
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                </div>
                            ))
                            :
                            dummyCategories.map((category) => (
                                <div className="products-category-item" key={category.id}>
                                    <p>{category.name}</p>
                                    <input 
                                        type="checkbox" 
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className="products-filters products-categories">
                        <h2>Brands</h2>
                        {uniqueBrands.length > 0
                            ?
                            uniqueBrands.map((brand) => (
                                <div className="products-category-item" key={brand}>
                                    <p>{brand}</p>
                                    <input 
                                        type="checkbox" 
                                        onChange={() => handleBrandChange(brand)} 
                                    />
                                </div>
                            ))
                            :
                            dummyBrands.map((brand) => (
                                <div className="products-category-item" key={brand.id}>
                                    <p>{brand.name}</p>
                                    <input 
                                        type="checkbox" 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="products-right">
                <div className="productsRight_top">
                    <div className="productsRight-header">
                        <h2>Products</h2>
                        <p>{filteredProducts.length} <span>Produts Results</span></p>
                    </div>
                    <div className="products-small-wrapper">
                        <div className="products_search_results">
                            <div className="products-small-search">
                                <input 
                                    type="text" 
                                    placeholder='Search products' 
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                                <div className="product-search-button">
                                    <Search sx={{fontSize: 25}} />
                                </div>
                            </div>
                            <p>Results: <span>{filteredProducts.length}</span></p>
                        </div>
                    </div>

                    <div className="productsFilters_small">
                        <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                            >
                                <Typography sx={{m: 0, p: 0}}>
                                    <div className="accordion-header small_accordion_filter">
                                        <p>Filters</p>
                                    </div>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{p: 0, margin: 0, background: "transparent"}}
                            >
                                <Typography>
                                    <div className="small-accordion-wrapper">
                                        <div className="small-accordion_item productSearch-accordion">
                                            <h2>Categories</h2>
                                            {uniqueCategories.map((category) => (
                                                <div className="accordion-wrapper" key={category._id}>
                                                    <div className="accordion-wrapper-item">
                                                        <input 
                                                            type="checkbox" 
                                                            onChange={() => handleCategoryChange(category)} 
                                                        />
                                                        <p>{category}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="small-accordion_item productSearch-accordion">
                                            <h2>Brands</h2>
                                            {uniqueBrands.map((brand) => (
                                                <div className="accordion-wrapper">
                                                    <div className="accordion-wrapper-item">
                                                        <input 
                                                            type="checkbox" 
                                                            onChange={() => handleBrandChange(brand)} 
                                                        />
                                                        <p>{brand}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="products-results">
                    {Array.isArray(filteredProducts) && filteredProducts.length > 0
                        ?
                            filteredProducts.map((product) => (
                                <div className="products-item" key={product._id}>
                                    <div className="productsItem-left">
                                        <h2>{product.title}</h2>
                                        <div className="productsItem-details">
                                            <p>{product.type}</p>
                                            <p>{product.desc}</p>
                                        </div>
                                        <div className="productsReaction_buttons">
                                            <Link to={`/product/${product._id}`} className='link-main'>
                                                <button>View Product</button>
                                            </Link>
                                            <button className='productBrand'>{product.brand}</button>
                                        </div>
                                    </div>
                                    <div className="productsItem-right">
                                        <div className="productsItem-name">
                                            <h2>{product.title}</h2>
                                            <p>{product.type}</p>
                                        </div>
                                        <Link to={`/product/${product._id}`} className='link-main productImage'>
                                            <LazyLoadImage
                                                src={product.img} 
                                                alt={product.title}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        :
                            <div className="NODATA_COMP">
                                <h1>NO PRODUCTS FOUND</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products