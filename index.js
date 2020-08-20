const express = require('express');
const app= express();

const listAuthors = [
    {
        id: '1',
        name: 'Lawrence Nowell',
        contry: 'UK',
        books: ['Beowulf']
    },
    {
        id: '2',
        name: 'William Shakespeare',
        contry: 'UK',
        books: ['Hamlet', 'Othello', 'Romeo and Juliet', '  MacBeth' ]
    },
    {
        id: '3',
        name: 'Charles Dickens',
        contry: 'US',
        books: ['Oliver Twist', 'A Christmas Carol' ]
    },
    {
        id: '4',
        name: 'Oscar Wilde',
        contry: 'UK',
        books: ['The Picture of Dorian Gray, The Importance of Being Earnest' ]
    }
]

app.get('/authors/:id/', (req, res) => {
    // je regarde l'id que je récupère dans l'url
    // console.log("Id :", req.params.id);
    // je dois créer une variable à laquelle j'affecte l'objet
    // qui a le même :id en me servant de la méthode find
    // la condition 
    let author = listAuthors.find(element => element.id === req.params.id);
    // console.log('index:', author);
    // pour envoyer le résultat je pointe sur la clé de l'objetque je récupère dans la variable author
    res.send(`${author.name},  ${author.contry}`);
});

app.get('/authors/:id/books/', (req, res) => {
    console.log("id :", req.params.id);
    let author = listAuthors.find(element => element.id === req.params.id);
    console.log('index:', author);
    console.log('test', author.books.join(', '))
    res.send(`${author.books.join(', ')}`);
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});