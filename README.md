# DEVELOPER AKADEMIE - FOTOGRAM

## Overview

Fotogram is a minimalist photo gallery project that offers a curated visual archive of memorable moments. Built with HTML, CSS, and JavaScript, the gallery features a responsive layout and a dynamic modal viewer with navigation functionality.

### The Challenge

- View a responsive gallery layout that adapts seamlessly to different screen sizes
- Click on an image to open it in a modal
- Navigate between images inside the modal (next/previous)
- Experience a dynamic navigation bar that hides on scroll down and shows on scroll up

### Links

- **Solution URL:** [GitHub Repository](https://github.com/stefanstraeter/fotogram)
- **Live Site URL:** [Live Demo]()

## My Process

### Built With

- **HTML5** – semantic and accessible markup
- **CSS3** – custom properties, Grid & Flexbox layout
- **JavaScript** (Vanilla) – dynamic rendering, modal functionality, scroll detection
- **Mobile-First Workflow** – layout optimized for smaller screens first
- **CSS Reset** – to ensure consistency across browsers

### Key Features & Techniques

#### Dynamic Rendering with JavaScript

- Images are loaded dynamically from a JavaScript array (imageGallery)
- The DOM is updated on page load using a render() function to insert `<img>` elements

#### Modal with Image Navigation

- Clicking an image opens a centered modal viewer
- “Previous” and “Next” buttons allow smooth browsing through the gallery
- Clicking outside the image or the close button will close the modal

#### Mobile-First Responsive Design

- Responsive layout using CSS Grid with auto-fit and minmax
- Scalable text using clamp() for better readability across devices
- Navigation bar hides while scrolling down and reappears when scrolling up

#### Semantic HTML & Accessibility

- Uses meaningful HTML elements like `<header>`, `<main>`, `<section>`, and `<footer>`
- Alt attributes are generated dynamically from the image filenames
- Some accessibility features are built-in, with potential for keyboard navigation expansion

#### Theming with CSS Variables

- Centralized design tokens using custom properties (:root)
- Colors, spacing, and fonts are easy to maintain and update

## Author

- GitHub: [@stefanstraeter](https://github.com/stefanstraeter)
