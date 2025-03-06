import { Category, Diversity3, ElectricalServices, Extension, Groups, Home, Info, Lan, PrecisionManufacturing, School, Security } from "@mui/icons-material"

export const NavsLink = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <Home sx={{color: "#333333", fontSize: 28}} />,
    },
    {
        id: 2,
        title: "Products",
        path: "/products",
        icon: <Category sx={{color: "#555555", fontSize: 28}} />,
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        icon: <ElectricalServices sx={{color: "#555555", fontSize: 28}} />,
    },
    {
        id: 4,
        title: "Training",
        path: "/training",
        icon: <School sx={{color: "#555555", fontSize: 28}} />,
    },
    {
        id: 5,
        title: "Customers",
        path: "/customers",
        icon: <Groups sx={{color: "#555555", fontSize: 28}} />
    },
    {
        id: 6,
        title: "Team",
        path: "/team",
        icon: <Diversity3 sx={{color: "#555555", fontSize: 28}} />
    },
    {
        id: 7,
        title: "Expertise",
        path: "/expertise",
        icon: <Extension sx={{color: "#555555", fontSize: 28}} />
    },
    {
        id: 8,
        title: "About us",
        path: "/about_us",
        icon: <Info sx={{color: "#555555", fontSize: 28}} />
    },
]

export const companyServices = [
    {
        id: 1,
        title: "Electrical Services",
        image: "/assets/back-1.jpg",
        desc: "We offer comprehensive electrical services, including installations, high-voltage works, testing, commissioning, and maintenance.",
        icon: <ElectricalServices sx={{fontSize: {xs: 42, sm: 60}}} />,
    },
    {
        id: 2,
        title: "ICT Solutions",
        image: "/assets/ict.jpg",
        desc: "We provide ICT solutions, including network design, structured cabling, telecommunication systems, and IT support.",
        icon: <Lan sx={{fontSize: {xs: 42, sm: 60}}} />,
    },
    {
        id: 3,
        title: "Security Solutions",
        image: "/assets/security.jpg",
        desc: "We offer security solutions, including CCTV surveillance, access control systems, and electric fencing to enhance security in all sectors",
        icon: <Security sx={{fontSize: {xs: 42, sm: 60}}} />,
    },
    {
        id: 4,
        title: "Automation & Control System",
        image: "/assets/automation.jpg",
        desc: "We deliver automation and control systems, including building management, industrial automation, and smart solutions.",
        icon: <PrecisionManufacturing sx={{fontSize: {xs: 42, sm: 60}}} />,
    }
]

export const servicesLinks = [
    {
        id: 1,
        name: "Electrical Services",
        path: "/services"
    },
    {
        id: 2,
        name: "ICT Solutions",
        path: "/services"
    },
    {
        id: 3,
        name: "Security Solution",
        path: "/services"
    },
    {
        id: 4,
        name: "Automation & Control System",
        path: "/services"
    }
]

export const productsLinks = [
    {
        id: 1,
        name: "Circuit breaker",
        path: "/products",
    },
    {
        id: 2,
        name: "Switchgear",
        path: "/products",
    },
    {
        id: 3,
        name: "HV cables",
        path: "/products",
    },
    {
        id: 4,
        name: "Voltage regulators",
        path: "/products",
    },
]

export const swiperProducts = [
    {
        id: 1,
        name: "POLIM-H Surge Arrester",
        brand: "ABB",
        image: "/assets/abb.png",
        desc: "ABB’s POLIM-H surge arrester uses metal-oxide varistor (MOV) technology with a voltage range up to 800 kV. It offers fast response times (<1 microsecond), high energy absorption capacity, and UV/weather resistance, ensuring long-term protection against transient overvoltages."
    },
    {
        id: 2,
        name: "U120BL Porcelain Disc Insulator",
        brand: "GE Vernova",
        image: "/assets/insulator.jpg",
        desc: "Built from porcelain, polymer, or glass, the U120BL disc insulator supports voltages up to 1000 kV. It features high mechanical strength, low leakage currents, and excellent resistance to thermal and electrical stress, making it ideal for extreme outdoor environments."
    },
    {
        id: 3,
        name: "EasyPact EXE Vacuum Circuit Breaker",
        brand: "Schneider Electric",
        image: "/assets/schneider.png",
        desc: "The EasyPact EXE Vacuum Circuit Breaker is designed for high-voltage applications up to 36 kV. It features a compact design, low maintenance requirements, and high durability, making it ideal for industrial and utility power distribution systems."
    },
    {
        id: 4,
        name: "LTB E 72.5–800 kV",
        brand: "Hitachi Energy",
        image: "/assets/hitachi.png",
        desc: "Designed for voltage levels from 72.5 kV to 800 kV, the LTB E series features SF6 or vacuum insulation, ensuring fast arc extinguishing and minimal maintenance. It provides high short-circuit breaking capacity and operates in extreme environmental conditions."
    },
    {
        id: 5,
        name: "8DQ1 Gas-Insulated Switchgear",
        brand: "Siemens",
        image: "/assets/siemens.png",
        desc: "The 8DQ1 GIS switchgear supports voltages from 72.5 kV to 550 kV. It features compact designs for space efficiency, arc-resistant enclosures, and digital monitoring systems for enhanced safety and reliability."
    },
];
