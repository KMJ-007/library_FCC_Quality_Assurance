'use strict';
const mongoose = require('mongoose');
const Book = require('../model/book');


module.exports = function (app) {

  app.get('/api/books', async (req, res) => {
    
      Book.find({}, (err, data) => {
       if(err){
        res.send(err);
       }
        else{
          res.json(data);
        }
      })
    })

  app.post('/api/books', async (req, res) => {
    let title = req.body.title;

    Book.create({
      title:title,
      commentcount:0
    },(err,data)=>{
      if(err || !data){
        res.send("missing required field title");
      }else{
        res.json(data);
      }

    })
  })

  app.delete('/api/books', async (req, res) => {
    
    Book.deleteMany({},(err,deleted)=>{
      if(err || !deleted){
        res.send("no book exists")
      }else{
        res.json("complete delete successful");
      }
    })
  })

  app.get('/api/books/:id', async (req, res) => {
    let bookid=req.params.id;

    Book.findById(bookid,(err,data)=>{
      if(err || !data){
        res.send("no book exists");
      }
      else{
        res.json(data);
      }
    })
  })

  app.post('/api/books/:id', async (req, res) => {
   let bookid=req.params.id;
   let comment = req.body.comment;

   if(!comment){
    res.send("missing required field comment");
   }else{

    Book.findByIdAndUpdate(bookid,{$push:{comments:comment}}, {new:true}, (err,updatedBook)=>{
      if(err || !updatedBook){
        res.send("no book exists");
      }
      else{
        res.json(updatedBook);
      }
    })
   }

  })

  app.delete('/api/books/:id', async (req, res) => {
    
      let bookid = req.params.id;
    
    Book.findByIdAndDelete(bookid, (err,book)=>{
      if(err || !book){
        res.send("no book exists");
      }else{
        res.send("delete successful");
      }
    }) 
  })
};
