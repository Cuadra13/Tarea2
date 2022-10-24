const { Router } = require('express');
const router = Router();
const fs = require('fs');
const json_books= fs.readFileSync('src/books.json', 'utf-8');
const books = JSON.parse(json_books);

router.get('/', (req, res) => {
    res.render('index.ejs', {
        books
    });
});


router.get('/new-entry', (req, res) => {
    res.render('new-entry');
})

router.post('/new-entry', (req, res) => {
    const {Actividad, Categoria, Valor, Disponible} = req.body;
    let newBook = {
        Actividad,
        Categoria,
        Valor,
        Disponible
    };
    books.push(newBook);
    const json_books = JSON.stringify(books)
    fs.writeFileSync('src/books.json', json_books, 'utf-8');
    res.redirect('/');
});

router.get('/delete/:Actividad', (req, res) => {
    console.log(req.params);
    res.send("Recibido");
})
module.exports = router;