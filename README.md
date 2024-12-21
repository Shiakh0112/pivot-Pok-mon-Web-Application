
# My Next.js Pokémon App

A modern and responsive Pokémon application built with **Next.js** and **Tailwind CSS**. The app provides Pokémon details, filters Pokémon by type, and features a clean, interactive UI. This project demonstrates the use of TypeScript, React Context API, and Tailwind CSS for styling.


## 🚀 Features
x
- **Pokémon Type Filter:** Filter Pokémon by types such as Fire, Grass, and Water.
- **Dynamic Pokémon Details:** Click on a Pokémon to view its stats and details on a dynamic page.
- **Responsive Design:** Fully responsive and mobile-friendly using Tailwind CSS.
- **Context API:** Centralized state management for handling filters and Pokémon data.
- **TypeScript Integration:** Ensures type safety and better developer experience.

---

## 🛠️ Installation and Setup

Follow these steps to set up the project on your local machine:

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn** installed globally

### Clone the Repository
```bash
git clone https://github.com/Shiakh0112/pivot-Pok-mon-Web-Application.git
cd my-nextjs-app
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.
Deploy: "https://pivot-pok-mon-web-application.vercel.app/"
---

## 🔧 Configuration

### Tailwind CSS
Tailwind is already configured in `tailwind.config.js`. Modify it as per your design requirements.


## 📂 Key Components

### `PokemonTypeFilter.tsx`
- A reusable component for filtering Pokémon by their type.
- Dynamically changes the UI and fetches relevant data.

### `PokemonContext.tsx`
- A Context Provider that manages the app's global state (e.g., active filters, Pokémon data).

### `index.tsx`
- Displays a list of Pokémon fetched from the PokéAPI.
- Includes filter buttons for a seamless user experience.

### `[id].tsx`
- A dynamic route for displaying detailed Pokémon information.
- Fetches individual Pokémon data using `useParams()`.

---

## 🖌️ Styling

- **Tailwind CSS** is used for all styling.
- Custom styles can be added in `src/styles/globals.css`.

---

## 🌐 APIs Used

This project uses the [PokéAPI](https://pokeapi.co/) to fetch data about Pokémon. Key endpoints:
- **List Pokémon:** `https://pokeapi.co/api/v2/pokemon`
- **Pokémon Details:** `https://pokeapi.co/api/v2/pokemon/{id}`



## 📝 Author

**Your Name**  
[GitHub Profile](https://github.com/Shiakh0112)  
[Portfolio](https://your-portfolio-link.com)


---

## ⭐ Acknowledgements

- **Next.js** for the amazing framework.
- **PokéAPI** for providing an excellent API.
- **Tailwind CSS** for effortless styling.

---

### 🚩 Don't forget to leave a ⭐ if you like this project!
