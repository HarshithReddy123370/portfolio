# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark theme with gradient accents
- 📧 Contact form
- 🔗 Social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd porfolio
```

2. Install dependencies:
```bash
npm install
```

3. Update your personal information in `constants/index.js`:
   - Update `personalInfo` with your details
   - Add your projects to the `projects` array
   - Customize your skills in the `skills` array

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Edit `constants/index.js` to update:
- Your name, title, and bio
- Social media links
- Email and location
- Projects and skills

### Styling
- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles are in each component file

### Components
All components are in the `components/` folder:
- `Navbar.js` - Navigation bar
- `Hero.js` - Hero section
- `About.js` - About section
- `Projects.js` - Projects showcase
- `Skills.js` - Skills section
- `Contact.js` - Contact form
- `Footer.js` - Footer

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **ESLint** - Code linting

## License

This project is open source and available under the MIT License.

