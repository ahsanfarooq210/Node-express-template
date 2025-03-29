import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

import { prepareV1Routes } from './apiVersions/v1';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { corsOrigin } from './utils/general';

const app: Express = express();

export type SessionUserType = {
  id: string;
  email: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
};

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: Array.isArray(corsOrigin)
      ? [...corsOrigin, process.env.FRONTEND_URL ?? '', 'null', '*']
      : corsOrigin,
    credentials: true,
  }),
);

// Request logging
app.use(loggerMiddleware);

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
prepareV1Routes(app);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An unexpected error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

export { app };
