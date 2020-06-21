const {Router } = require('express');
const router = Router();
const books = require('../books.json');
const authors = require('../authors.json');
const _ = require('lodash');


const GetBooksWithAuthors = ()=>{

   return books.concat(authors);
}

router.get ('/books', (req,res)=>{

    res.json(GetBooksWithAuthors());
     
});

router.post('/books', (req, res)=>{

    const {name,authorid}= req.body;
    if(name&& authorid){
        const newBook = {...req.body};
        books.push(newBook);
        res.json({'added': "ok"});
    }else{
        res.status(400).json({'statusCode' : 'Bad request'});
    }

});


router.delete('/books/:id' , (req,res) => {

    const id = req.params.id;
    _.remove(books, (book) =>{
        return book.id == id
    })

    _.remove(authors, (author) =>{
        return author.id == id
    })
    
    res.json(books);

});


router.put('/books/:id', ( req,res) =>{

    const id = req.params.id;
    const {name} = req.body;
    _.each(books,(book) =>{

        if(book.id==id){
            book.name = name;
            return;
        }
    });
    res.json({'modified': 'ok'});

});


module.exports = router;