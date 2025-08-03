# Math, Chemistry & Physics Formulas Demo

A React + TypeScript + Vite application that demonstrates the rendering of mathematical, chemistry, and physics formulas using MathJax. This app showcases how to display complex mathematical expressions and scientific formulas in a web application.

## Features

- **Mathematical Formula Rendering**: Uses [better-react-mathjax](https://www.npmjs.com/package/better-react-mathjax) for high-quality math rendering
- **Physics Examples**: Includes sample physics problems with formulas like Newton's Second Law, Kinetic Energy, and Ohm's Law
- **Chemistry Support**: Configured with mhchem package for chemical formula rendering
- **TypeScript**: Full TypeScript support for type safety
- **Hot Module Replacement**: Fast development with Vite's HMR

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Technologies Used

- **React 19**: Modern React with latest features
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **MathJax 3**: Mathematical notation rendering
- **better-react-mathjax**: React wrapper for MathJax

## What You'll See

When you run the app, you'll see a "Physics Test" section with three example problems:

1. **Newton's Second Law**: Calculate acceleration using F = ma
2. **Kinetic Energy**: Calculate kinetic energy using KE = ½mv²
3. **Ohm's Law**: Calculate voltage using V = IR

Each problem displays the mathematical formulas using proper LaTeX notation rendered by MathJax, demonstrating how to integrate mathematical expressions into React applications.

## Project Structure

```
src/
├── App.tsx              # Main app component with MathJax configuration
├── physics/
│   └── PhysicsTest.tsx  # Physics problems with formulas
└── main.tsx             # App entry point
```
