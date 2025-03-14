import { Category, ElectricalServices, Groups, Handshake, Home, Info, Lan, Login, PersonAdd, Phone, PrecisionManufacturing, School, Security, ShoppingCart } from "@mui/icons-material"

export const NavsLink = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <Home sx={{color: "#333333", fontSize: 24}} />,
    },
    {
        id: 2,
        title: "Products",
        path: "/products",
        icon: <Category sx={{color: "#555555", fontSize: 24}} />,
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        icon: <ElectricalServices sx={{color: "#555555", fontSize: 24}} />,
    },
    {
        id: 4,
        title: "Trainings",
        path: "/trainings",
        icon: <School sx={{color: "#555555", fontSize: 24}} />,
    },
    {
        id: 5,
        title: "Partners",
        path: "/partners",
        icon: <Handshake sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 6,
        title: "Customers",
        path: "/customers",
        icon: <Groups sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 7,
        title: "About Us",
        path: "/about-us",
        icon: <Info sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 8,
        title: "Contact",
        path: "/contact-us",
        icon: <Phone sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 9,
        title: "My Cart",
        path: "/cart",
        icon: <ShoppingCart sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 10,
        title: "Login",
        path: "/login",
        icon: <Login sx={{color: "#555555", fontSize: 24}} />
    },
    {
        id: 11,
        title: "Register",
        path: "/register",
        icon: <PersonAdd sx={{color: "#555555", fontSize: 24}} />
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
        name: "Power Equipments",
        path: "/products",
    },
    {
        id: 2,
        name: "Protection & Safety Devices",
        path: "/products",
    },
    {
        id: 3,
        name: "Testing & Monitoring Equipments",
        path: "/products",
    },
    {
        id: 4,
        name: "Control & Automation Equipments",
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

export const customersLogo = [
    {
        id: 1,
        img: "/assets/pic-1.png"
    },
    {
        id: 2,
        img: "/assets/rotana.png"
    },
    {
        id: 3,
        img: "/assets/pic-3.png"
    },
    {
        id: 4,
        img: "/assets/hyatt.png"
    },
    {
        id: 5,
        img: "/assets/jubilee.png"
    },
    {
        id: 6,
        img: "/assets/mcl.png"
    },
    {
        id: 7,
        img: "/assets/pic-7.png"
    }
]

export const partnersLogo = [
    {
        id: 1,
        img: "/assets/partner-1.png",
        company: "Schneider Electric",
        desc: "A global leader in energy management and automation, providing advanced electrical solutions, smart grid technology, and sustainable power distribution systems."
    },
    {
        id: 2,
        img: "/assets/partner-4.png",
        company: "AFRICAB",
        desc: "A leading manufacturer of electrical cables and wiring accessories, supplying high-quality, durable products essential for power distribution and industrial applications."
    },
    {
        id: 3,
        img: "/assets/partner-2.png",
        company: "ABB",
        desc: "Specializes in electrification, automation, and robotics, offering high-voltage equipment, switchgear, and innovative power solutions for industrial, commercial, and utility applications."
    },
    {
        id: 4,
        img: "/assets/partner-3.png",
        company: "TELA TECHNOLOGY",
        desc: "Focuses on ICT infrastructure, networking, and security solutions, delivering cutting-edge communication technologies and automation systems for various industries."
    },
    {
        id: 5,
        img: "/assets/partner-5.png",
        company: "DIT Teaching Factory",
        desc: "Provides hands-on technical training in electrical, automation, and engineering fields, ensuring skilled workforce development and industry collaboration."
    }
];

export const TeamMembers = [
    {
        id: 1,
        name: "Eng. Allen Mdendemi",
        qualification: "Bachelor of Engineering in Electrical Engineering",
        position: "Technical Director",
    },
    {
        id: 2,
        name: "Eng. Adriano Kamoye",
        qualification: "Bachelor of Engineering in Electronics and Telecommunication",
        position: "Managing Director",
    },
    {
        id: 3,
        name: "Lali Mbuya",
        qualification: "Bachelor of Engineering in Electronics and Telecommunication",
        position: "Technician",
    },
    {
        id: 4,
        name: "Isaac Mahofoli",
        qualification: "Bachelor of Engineering in Electrical Engineering",
        position: "Site Supervisor",
    },
    {
        id: 5,
        name: "Rodrick Mbanga",
        qualification: "Bachelor of Engineering in Computer Engineering",
        position: "Network and Security System Supervisor",
    },
    {
        id: 6,
        name: "Perfect Mrina",
        qualification: "Bachelor of Engineering in Electrical Engineering",
        position: "Solar Technician",
    },
    {
        id: 7,
        name: "Michael Paul",
        qualification: "Ordinary Diploma in Electrical Engineering",
        position: "Technician",
    },
    {
        id: 8,
        name: "Ramadhani Athuman",
        qualification: "Certificate of VTC in Electrical Installation",
        position: "Generator Electrician",
    }
];


export const dummyCategories = [
    {
        id: 1,
        name: "Electrical services"
    },
    {
        id: 2,
        name: "ICT solutions"
    },
    {
        id: 3,
        name: "Security solutions"
    },
    {
        id: 4,
        name: "Automation & control system"
    },
]

export const dummyBrands = [
    {
        id: 1,
        name: "Siemens"
    },
    {
        id: 2,
        name: "Schneider"
    },
    {
        id: 3,
        name: "ABB"
    },
    {
        id: 4,
        name: "Omron"
    },
    {
        id: 5,
        name: "Huawei"
    },
]


export const AdditionalResources = [
    {
        id:1,
        type: "Other name",
        desc: "1742-AESEB1S",
    },
    {
        id:2,
        type: "Standard Packages",
        desc: "1",
    },
]

export const TrainingsList = [
    {
        id: 1,
        title: "Switchgear Assembly Training",
        image: "/assets/switchgear.jpg",
        desc: "Learn the assembly, installation, and maintenance of LV and HV switchgear, including circuit breakers, relays, and control panels.",
        duration: "4 Weeks",
        field: "Electrical Engineering"
    },
    {
        id: 2,
        title: "AutoCAD Training",
        image: "/assets/autocad.jpg",
        desc: "Gain expertise in AutoCAD for creating electrical schematics, technical drawings, and 3D modeling for engineering projects.",
        duration: "6 Weeks",
        field: "Engineering Design"
    },
    {
        id: 3,
        title: "Automation Training",
        image: "/assets/automation-1.jpg",
        desc: "Develop skills in industrial automation, including PLC programming, SCADA systems, and smart control technologies.",
        duration: "5 Weeks",
        field: "Industrial Automation"
    },
    {
        id: 4,
        title: "Testing and Commissioning Training",
        image: "/assets/electrical.jpg",
        desc: "Master the procedures for testing, commissioning, and troubleshooting electrical systems to ensure safety and compliance.",
        duration: "4 Weeks",
        field: "Electrical Testing & Safety"
    },
    {
        id: 5,
        title: "Security Systems Training",
        image: "/assets/security.jpg",
        desc: "Learn to install, configure, and maintain security systems such as CCTV, access control, and surveillance solutions.",
        duration: "3 Weeks",
        field: "Security & Surveillance"
    }
];