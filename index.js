const express = require('express');
const app= express();

const listAuthors = [
    {
        id: '1',
        name: 'Lawrence Nowell',
        nationality: 'UK',
        books: ['Beowulf']
    },
    {
        id: '2',
        name: 'William Shakespeare',
        nationality: 'UK',
        books: ['Hamlet', 'Othello', 'Romeo and Juliet', '  MacBeth' ]
    },
    {
        id: '3',
        name: 'Charles Dickens',
        nationality: 'US',
        books: ['Oliver Twist', 'A Christmas Carol' ]
    },
    {
        id: '4',
        name: 'Oscar Wilde',
        nationality: 'UK',
        books: ['The Picture of Dorian Gray, The Importance of Being Earnest' ]
    }
]

app.get('/', (req, res) => {
    res.send('Authors API');
});

app.get('/authors/:id/', (req, res) => {
    // je regarde l'id que je récupère dans l'url
    // console.log("/authors/:id/  id :", req.params.id);
    // je dois créer une variable à laquelle j'affecte l'objet
    // qui a le même :id en me servant de la méthode find
    // la condition 
    let author = listAuthors.find(element => element.id === req.params.id);
    // console.log('/authors/:id/  author :', author);
    // pour envoyer le résultat je pointe sur la clé de l'objetque je récupère dans la variable author
    // res.send(`${author.name},  ${author.nationality}`);
    delete author.id, delete author.books;
    res.json(author);
});

app.get('/authors/:id/books/', (req, res) => {
    // console.log("/authors/:id/books/  id :", req.params.id);
    let author = listAuthors.find(element => element.id === req.params.id);
    // console.log('/authors/:id/books/  author:', author);
    // console.log('/authors/:id/books/ author.book.join', author.books.join(', '))
    // res.send(`${author.books.join(', ')}`);
    delete author.id, delete author.name, delete author.nationality;
    res.json(author);
});

app.get('/authors/*', (req, res) => {
    // console.log('*', req)
    res.send('<h1 style="color: red">The author with the ID 12133 does not exist<h1>');
});

app.get('*', (req, res) => {
    // console.log('*', req)
    res.send('<h1 style="color: red">Error<h1>');
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});