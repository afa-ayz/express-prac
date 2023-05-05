const express = require('express');
const connectDb = require('./config/dbConnection');
const app = express();

const doteEnv = require('dotenv');

connectDb();
const errorHandler = require('./middleware/errorHandler');

const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
// app.get('/api/contacts', (req, res) => {
//     res.status(200).json({ message: 'Hello World' });
// });
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
