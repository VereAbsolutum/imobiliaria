import { Router } from "express";
import { readdirSync } from "fs";
import { fileURLToPath } from 'url';
import path from 'path';

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const setupRoutes = (app) => {
    const router = Router();

    readdirSync(path.join(__dirname, '../routes')).forEach(async (filename) => {
        const routeModule = await import(`../routes/${filename}`);

        routeModule.default(router);
    });

    app.use(router);
}