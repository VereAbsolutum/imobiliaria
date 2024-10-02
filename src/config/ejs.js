import expressLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const setupEjs = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../resources/views'));
    app.set('layout', 'layouts/main');
    app.use(expressLayouts);
    app.use(methodOverride('_method'));
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use(bodyParser.urlencoded({ limit: '10md', extended: false }));
}