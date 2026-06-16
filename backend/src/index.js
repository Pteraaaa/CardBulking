const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.listen(port, () => console.log(`Server listening at port ${port}`));