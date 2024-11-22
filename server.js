import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Criar um novo post',
        imagem: 'https://example.com/image1.jpg',
        data: '2023-11-22',
        autor: 'João Silva',
        curtidas: 100,
        comentarios: ['Ótimo post!', 'Concordo!']
    },
    {
        id: 2,
        descricao: 'Tutorial de JavaScript',
        imagem: 'https://example.com/js.png',
        data: '2023-11-23',
        autor: 'Ana Oliveira',
        curtidas: 50,
        comentarios: ['Muito bom!', 'Ajudou muito!']
    },
    {
        id: 3,
        descricao: 'Receita de bolo de chocolate',
        imagem: 'https://example.com/bolo.jpg',
        data: '2023-11-24',
        autor: 'Maria Souza',
        curtidas: 200,
        comentarios: ['Deu água na boca!', 'Já vou fazer!']
    },
    {
        id: 4,
        descricao: 'Dicas de organização',
        imagem: 'https://example.com/organiza.jpg',
        data: '2023-11-25',
        autor: 'Pedro Santos',
        curtidas: 80,
        comentarios: ['Amei as dicas!', 'Vou colocar em prática!']
    },
    {
        id: 5,
        descricao: 'Análise do último filme da Marvel',
        imagem: 'https://example.com/filme.jpg',
        data: '2023-11-26',
        autor: 'Lucas Pereira',
        curtidas: 150,
        comentarios: ['Concordo com tudo!', 'Que final inesperado!']
    },
    {
        id: 6,
        descricao: 'Viagem para a Europa',
        imagem: 'https://example.com/europa.jpg',
        data: '2023-11-27',
        autor: 'Julia Almeida',
        curtidas: 300,
        comentarios: ['Que lugar incrível!', 'Quero ir também!']
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server running on port 3000! Access it at http://localhost:3000/posts');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});