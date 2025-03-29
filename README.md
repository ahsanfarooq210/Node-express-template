# Node.js Express TypeScript Template

A production-ready template for building scalable and maintainable Node.js REST APIs with Express and TypeScript.

## Features

- **TypeScript**: Full TypeScript support for type safety and better developer experience
- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **ESLint & Prettier**: Code linting and formatting for consistent code style
- **Jest**: Testing framework with TypeScript support
- **Husky & lint-staged**: Git hooks to enforce code quality on commit
- **Winston**: Logging utility for better debugging
- **dotenv**: Environment variable management
- **JWT Authentication**: JSON Web Token based authentication
- **Express Validator**: Request validation
- **Helmet**: Security middleware to protect against common vulnerabilities
- **CORS**: Cross-Origin Resource Sharing support
- **PNPM**: Fast, disk space efficient package manager

## Project Structure

```
.
├── config/              # Configuration files and environment variables
├── src/
│   ├── apiVersions/     # API version management
│   ├── constants/       # Application constants
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Express middlewares
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── app.ts           # Express app setup
│   └── index.ts         # Server entry point
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── jest.config.js       # Jest configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/node-express-typescript-template.git
   cd node-express-typescript-template
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   pnpm dev
   ```

## Scripts

- `pnpm start` - Start the production server
- `pnpm build` - Build the application
- `pnpm dev` - Start the development server with hot-reload
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode

## Adding New Features

### Creating a New Route

1. Create a controller in `src/controllers`
2. Add the route in `src/routes`
3. Register the route in the appropriate version file in `src/apiVersions`

### Adding Middleware

1. Create the middleware in `src/middlewares`
2. Apply it in the appropriate route or globally in `src/app.ts`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.