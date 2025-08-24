# Portfolio Website Project

## Overview

This is a professional portfolio website for Leopoldo Rossi, a Financial Technology Expert and Software Developer. The application is built as a full-stack TypeScript project featuring a React frontend with a Node.js Express backend. The site showcases 25+ years of experience in electronic trading systems, algorithmic trading, financial markets technology, and includes a contact form for potential clients or employers to reach out.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with a simple single-page application structure
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features and type safety
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Hot module replacement and automatic server restart during development

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud-hosted data storage
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios

### Component Architecture
- **Design System**: Consistent component library with standardized props and styling
- **Layout**: Modular section-based architecture (Hero, About, Skills, Experience, Portfolio, Contact, Footer)
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database toolkit for schema definition and query building

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Headless UI primitives for building accessible components
- **Shadcn/ui**: Pre-built component library with consistent design patterns
- **Lucide React**: Icon library for consistent iconography throughout the application

### Development Tools
- **Vite**: Modern build tool with fast hot module replacement
- **TypeScript**: Static type checking for improved developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Frontend Libraries
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Wouter**: Minimalist routing library for React

### Fonts and Assets
- **Google Fonts**: Inter and Playfair Display fonts for professional typography
- **Unsplash**: Professional stock photography for portfolio and section backgrounds

### Development and Deployment
- **Replit**: Development environment with integrated tooling and deployment capabilities
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Autoprefixer**: Automatic vendor prefix handling for CSS compatibility