﻿# Surplus - Bridging the Gap between Surplus Food and Those in Need

Surplus is a BTech project with a mission to bridge the gap between surplus food and those in need. The project aims to provide surplus nourishment, support, and resources by connecting donors with donees in a seamless and impactful way.

## Deployed Project

[Link to Deployed Project (Surplus)](https://surplus-website-btech-frontend.vercel.app/)

## Demo
https://github.com/Rohit-Nandagawali/surplus-website-btech/assets/85486891/016d4a4f-c3c0-4cb6-b45c-059832db08a8

## Project Description

Surplus has two main goals:

1. **Connecting Donors and Donees:**
   The platform serves as a bridge between food donors and those in need, facilitating the efficient distribution of surplus food resources.

2. **Implementation of Advanced MySQL Features:**
   Surplus is a learning project that implements advanced features of the MySQL relational database management system (RDBMS). The project focuses on normalization, CRUD operations, triggers, stored procedures, and cursors.

## Features

### Database Implementation

- **Normalization:** The database is designed to achieve the third normal form (3NF) for efficient and organized data storage.
- **CRUD Operations:** Surplus implements Create, Read, Update, and Delete operations to manage data effectively.
- **Triggers:** A trigger named `UpdateDonorAvgRating` is implemented to update the average rating of donors after a new review is inserted.
  - Event: INSERT
  - Timing: AFTER
  - Table: `review`
- **Stored Procedures:** Several stored procedures are implemented for various functionalities:
  - `AddDonation`
  - `AddFeedback`
  - `AddReview`
  - `RegisterDonee`
  - `RegisterDonor`
  - `UpdateDonation`

### Frontend Implementation

- **React JS:** The frontend is built using React.js for a dynamic and interactive user interface.
- **Tailwind CSS:** Tailwind CSS is used for styling, providing a clean and modern look.
- **Flowbite React:** The project utilizes the Flowbite React library for UI components and design elements.
- **React Hot Toast:** To display notifications and alerts to users seamlessly.
- **Axios:** Axios is used for making HTTP requests to the backend API.
- **React Router DOM:** For handling navigation and routing within the application.
- **Moment.js:** Utilized for handling date and time-related functionalities.

### Backend Implementation

- **Express.js:** The backend is built using Express.js, a Node.js web application framework.
- **MySQL Database:** The project uses MySQL as the relational database management system, implementing various RDBMS concepts.
- **API Endpoints:** The backend API is structured in `index.js`, which contains all the APIs and endpoints for the project.

### Deployment

- **db4free.net:** An online MySQL database is hosted on db4free.net, providing a platform for the MySQL database.
- **Vercel:** Both the frontend and backend are deployed on Vercel for easy and seamless hosting.
- **Git/GitHub:** The project uses Git for version control and GitHub for collaboration and code hosting.



## Folder Structure

```plaintext
food-surplus
├─ backend
│  ├─ .env
│  ├─ .gitignore
│  ├─ config.js - database connections
│  ├─ env.txt
│  ├─ index.js - all APIs and endpoints are created here
│  ├─ package-lock.json
│  ├─ package.json
│  └─ vercel.json
├─ database
│  └─ food-surplus-db.sql
├─ frontend
│  ├─ .env
│  ├─ .gitignore
│  ├─ env.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ src
│  │  ├─ api - functions are created to call corresponding API
│  │  │  ├─ donation.js 
│  │  │  ├─ donee.js
│  │  │  ├─ donor.js
│  │  │  ├─ feedback.js
│  │  │  └─ review.js
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ App.test.js
│  │  ├─ assets - assets
│  │  │  ├─ circle.svg
│  │  │  ├─ hero-bg.jpg
│  │  │  └─ Logo.jsx
│  │  ├─ components - reusable components are created here
│  │  │  ├─ DashboardNav.jsx
│  │  │  ├─ DonationCard.jsx
│  │  │  ├─ DonationCategoryCard.jsx
│  │  │  ├─ EditDoneeProfile.jsx
│  │  │  ├─ EditDonorProfile.jsx
│  │  │  ├─ Landing.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ ReviewCard.jsx
│  │  │  └─ utility - these are reusable utility components
│  │  │     ├─ CustomeInput.jsx
│  │  │     └─ MainButton.jsx
│  │  ├─ data - constants are there such as server URL 
│  │  │  └─ constants.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ logo.svg
│  │  ├─ pages - pages are created here
│  │  │  ├─ About.jsx
│  │  │  ├─ donee - all pages related to donee
│  │  │  │  ├─ AvailableDonations.jsx
│  │  │  │  ├─ DoneeDashboard.jsx
│  │  │  │  ├─ DoneeLogin.jsx
│  │  │  │  ├─ DoneeRegister.jsx
│  │  │  │  └─ MyDoneeProfile.jsx
│  │  │  ├─ donor -  all pages related to donor
│  │  │  │  ├─ DonationDetails.jsx
│  │  │  │  ├─ DonorDashboard.jsx
│  │  │  │  ├─ DonorDetails.jsx
│  │  │  │  ├─ DonorLogin.jsx
│  │  │  │  ├─ DonorProfile.jsx
│  │  │  │  ├─ DonorRegister.jsx
│  │  │  │  ├─ MyDonorProfile.jsx
│  │  │  │  ├─ NewDonation.jsx
│  │  │  │  └─ UpdateDonation.jsx
│  │  │  ├─ Home.jsx
│  │  │  └─ Main.jsx
│  │  ├─ reportWebVitals.js
│  │  └─ setupTests.js
│  └─ tailwind.config.js - Tailwind configuration here - font, font color, etc
└─ README.md

## How to Run the Project

###  Frontend setup
1. Clone the repository:

   ```bash
   git clone https://github.com/Rohit-Nandagawali/surplus-website-btech.git
   ```
2. Navigate to the `frontend` directory:

   ```bash
   cd surplus/frontend
   ```
3. Install dependencies:
```bash
npm install
```
4. Create a `.env` file in the `frontend` directory with the following content:
```bash
REACT_APP_API_URL=https://your-backend-api-url
```
Replace https://your-backend-api-url with the URL where your backend API is hosted. 

5. Run the frontend:
```bash
npm start
```

###  Backend Setup
1. Navigate to the backend directory:

```bash
cd ../backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory with the necessary database and server configurations.
```bash
DB_HOST=db4free.net #where your database is hosted
DB_USER=put_your_username
DB_PASSWORD=put_your_password
DB_DATABASE=surplusdb #your database name

```

4. Run the backend:

```bash
nodemon
```

Once the server is started successfully, you will see the following messages:

- Server is listening on port 5000
- Connected to Host: ${process.env.DB_HOST}, Database: ${process.env.DB_DATABASE}


Access the application in your browser at http://localhost:3000.

Note: Make sure to replace placeholders like https://your-backend-api-url with actual URLs and customize any other details as needed.

---
---


Made with ❤️ | © 2023
