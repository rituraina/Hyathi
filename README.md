This is a website built using React, HTML, CSS, JS, and Bootstrap that allows users to explore and interact with various Pokemon. It fetches data from the Pokemon API and provides features such as viewing all Pokemons, registering, logging in, and logging out. The website consists of several components including Navbar, Footer, Home, All Pokemons, Login, and Register.

## Components
-Navbar
The Navbar component provides a navigation bar at the top of the website. It allows users to easily navigate between different sections of the website.

-Footer
The Footer component is displayed at the bottom of the website and provides information and links related to the Pokemon website.

-Home
The Home component is the landing page of the website. It displays a welcome message and introduces users to the website's features and functionality.

-All Pokemons
The All Pokemons component fetches data from the Pokemon API and displays a list of all available Pokemons. Each Pokemon is represented by a card with its image and basic information.

-Login
The Login component provides a form for users to log in to the website. Users can enter their credentials and submit the form to authenticate themselves.

-Register
The Register component allows new users to register an account on the website. It provides a form for users to enter their details and create a new account.

-Logout
The Logout component logs out the currently authenticated user and redirects them to the homepage.

## Installation
To run this project locally, follow these steps:

Clone the repository: git clone https://github.com/rituraina/Hyathi
Install the dependencies: npm install
Start the development server: npm start
Open your browser and visit: http://localhost:3000
Make sure you have Node.js and npm (Node Package Manager) installed on your system.

## Dependencies
This project relies on the following dependencies:

React: JavaScript library for building user interfaces.
Bootstrap: CSS framework for building responsive and mobile-first websites.
Pokemon API: External API for fetching Pokemon data.
These dependencies will be automatically installed when running npm install as mentioned in the installation instructions.

## File Structure
Here is a high-level overview of the project's file structure:

pokemon-website/
  ├── src/
  │   ├── components/
  │   │   ├── Navbar.js
  │   │   ├── Footer.js
  │   │   ├── Home.js
  │   │   ├── AllPokemons.js
  │   │   ├── Login.js
  │   │   ├── Register.js
  │   │   ├── Logout.js
  │   ├── App.js
  │   ├── index.js
  ├── public/
  │   ├── index.html
  ├── package.json
  ├── README.md
  
## Conclusion
The Pokemon website built with React, HTML, CSS, JS, and Bootstrap provides an interactive platform for users to explore and engage with various Pokemon. By utilizing components such as Navbar, Footer, Home, All Pokemons, Login, Register, and Logout, users can navigate through the website, view a list of Pokemons fetched from the Pokemon API, and perform authentication-related tasks.
