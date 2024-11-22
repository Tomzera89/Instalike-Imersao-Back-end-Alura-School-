import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log('Server running on port 3000! Access it at http://localhost:3000/');
});

app.get('/', (req, res) => {
    res.status(200).send('Olá, mundo!');
});