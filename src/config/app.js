import express from 'express';
import { setupEjs } from './ejs.js';
import { setupRoutes } from './routes.js';


const app = express();
setupEjs(app);
setupRoutes(app)
export default app;