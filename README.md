# React Portfolio - Bigyan Basnet

A modern, responsive portfolio website built with React and Vite, showcasing full-stack development skills and projects.

## 🚀 Live Demo

[View Live Portfolio](your-portfolio-url.com) <!-- Replace with your actual deployed URL -->

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Components](#components)
- [Contact Form](#contact-form)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections using react-anchor-link-smooth-scroll
- **Interactive UI**: Dynamic navbar with active section highlighting
- **Contact Form**: Functional contact form integrated with Web3Forms
- **Mobile Menu**: Collapsible mobile navigation menu
- **Modern Styling**: Clean and modern CSS design
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Friendly**: Structured content for better search engine optimization

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS3 with custom styling
- **Navigation**: react-anchor-link-smooth-scroll
- **Form Handling**: Web3Forms API
- **Linting**: ESLint with React plugins
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio_react/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── MyWork/
│   │   │   ├── MyWork.jsx
│   │   │   └── MyWork.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Services/
│   │       ├── Services.jsx
│   │       └── Services.css
│   ├── assets/
│   │   ├── images/ (profile images, logos, icons)
│   │   ├── mywork_data.js
│   │   └── services_data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bigyanhub/react_portfolio.git
   cd portfolio_react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🧩 Components

### Navbar

- Responsive navigation with mobile menu
- Smooth scrolling to sections
- Active section highlighting

### Hero

- Introduction section with profile image
- Call-to-action buttons
- Personal branding

### About

- Personal introduction and background
- Skills showcase with progress bars
- Achievement statistics

### Services

- Display of offered services
- Dynamic content from services_data.js
- Professional service descriptions

### MyWork

- Portfolio showcase
- Project gallery
- "Show More" functionality

### Contact

- Functional contact form
- Integration with Web3Forms API
- Success message display
- Contact information display

### Footer

- Newsletter subscription
- Social links
- Copyright information

## 📧 Contact Form

The contact form is integrated with Web3Forms for seamless message handling:

- **API Integration**: Uses Web3Forms API for form submissions
- **Success Feedback**: Shows success message after form submission
- **Form Validation**: Built-in HTML5 validation
- **Auto-reset**: Form clears after successful submission

To set up the contact form:

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Replace the access key in `Contact.jsx`

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `Hero.jsx` - Name, title, and description
- `About.jsx` - About section content and skills
- `Contact.jsx` - Contact details and email
- `Footer.jsx` - Footer information

### Portfolio Projects

- Update `mywork_data.js` with your projects
- Replace project images in the assets folder

### Services

- Modify `services_data.js` to reflect your services
- Update service descriptions and offerings

### Styling

- Each component has its own CSS file for easy customization
- Global styles are in `index.css`
- Modify colors, fonts, and layouts as needed

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Other Hosting Options

- GitHub Pages
- Surge.sh
- Firebase Hosting
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Bigyan Basnet**

- Email: bigboss@gmail.com
- Phone: 987654321
- Location: London, New York

---

⭐ If you found this project helpful, please give it a star!

---

_Built with ❤️ using React and Vite_
