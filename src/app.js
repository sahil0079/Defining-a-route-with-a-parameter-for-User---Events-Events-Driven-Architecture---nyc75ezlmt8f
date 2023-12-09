const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form

  const userId = req.params.userId;

  if(!userId || isNaN(userId)){
    res.status(400).json({
      error: 'Invalid userId'
    })
}else{
    res.status(200).json({userId)
  }
  );

module.exports = app;
