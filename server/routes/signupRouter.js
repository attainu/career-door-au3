const express = require('express');
const router = express.Router();
const moment = require('moment');

router.post('/auth',(req,res,next)=>{
  console.log('sd');
  res.send('auth');
})

module.exports = router;
