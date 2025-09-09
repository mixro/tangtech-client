# Tang Tech Website – Frontend Documentation  

![React](https://img.shields.io/badge/React-v18-blue)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)
![MaterialUI](https://img.shields.io/badge/Material--UI-Components-blueviolet)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Analytics-orange)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue)  

The **Tang Tech Website** is a modern platform designed to showcase Tang Tech & Engineering Ltd’s expertise in **electrical services, ICT solutions, automation, and security systems**.  
It provides customers with seamless access to services, products, and training programs while enabling efficient management through an integrated admin panel.  


## Table of Contents  

- [Overview](#overview)  
- [Architecture](#architecture)  
- [Technologies](#technologies)  
- [Setup Instructions](#setup-instructions)  
- [Directory Structure](#directory-structure)  
- [Core Features](#core-features)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [Future Improvements](#future-improvements)  
- [Support](#support)  


## Overview  

Tang Tech Website empowers customers and administrators with tools to:  

- Explore detailed **electrical, ICT, security, and automation services**.  
- Browse and request quotes for **products and equipment**.  
- Register and enroll in **technical training programs**.  
- Submit **inquiries** and connect with Tang Tech directly.  
- Manage services, products, and messages via the **admin panel**.  


## Architecture  

### Components  

- **React (Frontend)** – Builds user interface and interactive views.  
- **Redux Toolkit** – Manages global application state (services, products, training, authentication).  
- **Material UI** – Provides responsive UI components and icons.  
- **Firebase** – Used for authentication, analytics, and storage integration.  
- **REST API Integration** – Connects frontend with backend services for data management.  

### Directory Structure  

```plaintext
targetech-client/
├── public/                  # Static assets (favicon, index.html, images)
├── src/
│   ├── Components/          # Reusable UI components (Navbar, Footer, Cards)
│   ├── Pages/               # Main application pages (Home, About, Services, Products, Training)
│   ├── redux/               # Redux store and slices
│   ├── App.css              # Global styles
│   ├── App.js               # Root component and routing
│   ├── index.css            # Base styling
│   ├── index.js             # Entry point rendering React App
│   └── staticData.js        # Static mock data (partners, services, training list)
├── package.json             # Dependencies and scripts
├── README.md                # Documentation
```  


## Technologies  

- **React** (v18) – Component-based frontend framework  
- **Redux Toolkit** – State management  
- **Material UI** – UI library for consistent design  
- **Firebase** – Authentication & analytics  
- **Axios** – API requests handling  
- **CSS3** – Styling  


## Setup Instructions  

### Prerequisites  
- **Node.js** v18+  
- **npm** or **yarn**  
- Firebase project credentials  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/mixro/targetech-client
   cd targetech-client
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Configure Firebase:  
   - Create a project in Firebase Console.  
   - Enable Authentication & Analytics.  
   - Add your Firebase config in `.env`.  

4. Run the app:  
   ```bash
   npm start
   ```  
   The app runs at `http://localhost:3000`.  


## Core Features  

- **Services Overview** – Detailed listing of all Tang Tech services.  
- **Product Catalog** – Browse and explore electrical and automation products.  
- **Training Programs** – View and register for professional training courses.  
- **Customer Inquiries** – Contact forms for support and information.  
- **Partners Section** – Showcases Tang Tech’s collaborators.  
- **Authentication** – Register/Login functionality with Firebase.  
- **Admin Panel** – Manage services, products, and customer interactions.  
- **Responsive Design** – Optimized for desktop and mobile devices.  


## Testing  

- **Static Data** in `staticData.js` is used for UI testing.  
- Manual testing can be performed with:  
  ```bash
  npm test
  ```  


## Deployment  

### Local  
```bash
npm run build
serve -s build
```  

### Production  
Deploy to:  
- **Firebase Hosting**  
- **Vercel**  
- **Netlify**  


## Future Improvements  

- Integration with backend for live data.  
- Advanced admin dashboard with analytics.  
- AI-powered chatbot for inquiries.  
- Mobile app support for training and services.  


## Support  

For issues or inquiries:  
- Contact Tang Tech support team at [josephchongola43@gmail.com].  
- Raise issues via the GitHub repository.  
