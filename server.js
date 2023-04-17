const express = require('express');

const app = express();

const doteEnv = require('dotenv');

const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
// app.get('/api/contacts', (req, res) => {
//     res.status(200).json({ message: 'Hello World' });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
