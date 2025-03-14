import { Link } from 'react-router-dom'
import './services.css'
import { Search, Sort } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getServices } from '../../redux/apiCalls';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { dummyCategories } from '../../staticData';

const Services = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.clientServices.services);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getServices(dispatch);
    }, [ dispatch ]);

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Extract unique categories from services
    const uniqueCategories = [...new Set(services.map((service) => service.category))];

    // Function to handle category filter change
    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category) // Remove category
                : [...prevCategories, category] // Add category
        );
    };

    // Function to filter the lessons based on the search query
    const filteredServices = Array.isArray(services) && services.filter((service) => {
        const serviceName = service.title.toLowerCase();
        const query = searchQuery.toLowerCase();

        const matchesQuery = serviceName.includes(query);

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(service.category);

        return matchesQuery && matchesCategory;
    });

  return (
    <div className="installation-container">
        <div className="installation-wrapper">
            <div className="installations-top">
                <h1>SERVICES</h1>
                <div className="installation-top-wrapper">
                    <div className="installation-top-left">
                        <h2>Tang Tech & Engineering Services</h2>
                        <h2>Our Services.</h2>
                    </div>

                    <div className="installation-top-right">
                        <p>Our services include electrical installations, high-voltage systems, testing, commissioning, and maintenance to ensure safe and efficient power distribution. We also specialize in ICT solutions, including network design, structured cabling, and telecommunication systems to enhance digital connectivity. Additionally, we offer security solutions such as CCTV installation, access control systems, and electric fencing to safeguard properties.</p>
                    </div>
                </div>
            </div>

            <div className="installations-services">
                <div className="installation_services_top">
                    <h2>{filteredServices.length} <span>Results</span></h2>
                    <div className="services-sorts">
                        <p>Sort By</p>
                        <div className="service-sorts-format">
                            <p>Alpha: A to Z</p>
                            <Sort />
                        </div>
                    </div>
                </div>

                <div className="filters_small_screen">
                    <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
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
                                    <div className="installation-services-search small-accordion-search">
                                        <input type="text" placeholder='Search service' />
                                        <div className="installation-seachIcon">
                                            <Search />
                                        </div>
                                    </div>

                                    <div className="small-accordion_item">
                                        <h3>Service category</h3>
                                        <div className="accordion-wrapper">
                                            {uniqueCategories.length > 0
                                                ?
                                                uniqueCategories.map((category) => (
                                                    <div className="accordion-wrapper-item" key={category}>
                                                        <input 
                                                            type="checkbox" 
                                                            onChange={() => handleCategoryChange(category)}
                                                        />
                                                        <p>{category}</p>
                                                    </div>
                                                ))
                                                :
                                                dummyCategories.map((category) => (
                                                    <div className="accordion-wrapper-item" key={category.id}> 
                                                        <input type="checkbox" />
                                                        <p>{category.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="installation-services-wrapper">
                    <div className="installation-services_filters">
                        <h2>Filters</h2>
                        <p>Search within these values</p>
                        <div className="installation-services-search">
                            <input 
                                type="text" 
                                placeholder='Search service' 
                                value={searchQuery}
                                onChange={handleSearchInputChange} 
                            />
                            <div className="installation-seachIcon">
                                <Search />
                            </div>
                        </div>
                        <div className="services-accordion">
                            <div className="service-accordion_item">
                                <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                                    >
                                        <Typography sx={{m: 0, p: 0}}>
                                            <div className="accordion-header">
                                                <p>Service Category</p>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{p: 0, margin: 0, background: "transparent"}}
                                    >
                                        <Typography>
                                            <div className="accordion-wrapper">
                                                {uniqueCategories.length > 0
                                                    ?
                                                    uniqueCategories.map((category) => (
                                                        <div className="accordion-wrapper-item" key={category}>
                                                            <input 
                                                                type="checkbox" 
                                                                onChange={() => handleCategoryChange(category)}
                                                            />
                                                            <p>{category}</p>
                                                        </div>
                                                    ))
                                                    :
                                                    dummyCategories.map((category) => (
                                                        <div className="accordion-wrapper-item" key={category.id}>
                                                            <input type="checkbox" />
                                                            <p>{category.name}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="installations-services-container">
                        {Array.isArray(filteredServices) && filteredServices.length > 0
                            ?
                                filteredServices.map((service) => (
                                    <div className="installations-services-item" key={service._id}>
                                        <Link to={`/service/${service._id}`} className='link-main'>
                                            <div className="installations-service-image">
                                                <LazyLoadImage 
                                                    src={service.img}
                                                    alt={service.title}
                                                />
                                            </div>
                                        </Link>
                                        <div className="installation-service-desc">
                                            <Link to={`/service/${service._id}`} className='link-main'>
                                                <h2>{service.title}</h2>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            :
                                <div className="NODATA_COMP">
                                    <h1>NO SERVICE FOUND</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services