"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
// import swaggerUi from 'swagger-ui-express';
// import swaggerJsdoc from 'swagger-jsdoc';
const routes_1 = __importDefault(require("./routes"));
const serverless_http_1 = __importDefault(require("serverless-http")); // Importa el paquete
const app = (0, express_1.default)();
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.ts'],
};
// const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express_1.default.json());
app.use('/api', routes_1.default);
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'lambda') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
// Exportar el handler para AWS Lambda
exports.handler = (0, serverless_http_1.default)(app);
// dbConfig();
