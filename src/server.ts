import express from 'express';
import userRoutes from './routes';
import serverless from 'serverless-http'; // Importa el paquete

import dbConfig from './config/dbconfig';

const app = express();

dbConfig.getConnection()
  .then((connection) => {
    console.log('Database connected successfully');
    connection.release(); // Libera la conexión después de usarla
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
