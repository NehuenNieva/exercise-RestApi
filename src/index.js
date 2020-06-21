const express = require('express');
const app = express();
const morgan = require('morgan');
const router =require('../routes/index');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.use(router);

app.listen(3001, ()=>{

console.log(`server listne on port ${3001}`);

});

//404 handler
app.use((req, res ,next)=>{
    res.status(404).send('404 not found');
})


module.exports = router;