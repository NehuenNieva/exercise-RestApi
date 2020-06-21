const {Router } = require('express');
const router = Router();
const authors = require('../authors.json');
const books = require('../books.json');
const _ = require('lodash');


router.get ('/author', (req,res)=>{

    res.json(authors)

});


router.post('/author', (req,res) =>{

    const {name,lastname}= req.body;
    if(name&& lastname){
        const newAuthor = {...req.body};
        authors.push(newAuthor);
        res.json({'added': "ok"});
    }else{
        res.status(400).json({'statusCode' : 'Bad request'});
    }

});


router.put('/author/:id' , (req,res) =>{

    const id = req.params.id;
    const {name,lastname}=req.body;
    _.each(authors , (author) =>{

        if(author.id==id){
            author.name= name;
            author.lastname=lastname;
        }
    });
    res.json({'modified' : 'ok'});

});




router.delete('/author/:id' , (req,res) => {

    const id = req.params.id;

    _.remove(authors, (author) =>{
        return author.id == id
    })

    _.remove(books, (book) =>{
        return book.id == id
    })


    res.json(authors);

});


module.exports = router;

