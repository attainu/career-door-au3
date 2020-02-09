"use strict";
const express = require('express');
const router = express.Router();
const loginModel = require('../models/user');
const chalk = require('chalk');

router.post('/auth',async(req,res)=>{
  let response={};
  try {
    const reqParams = req.body;
    const status = await loginController(reqParams);
    if(!status){
      response.success = false;
      response.message = "Invalid Credentials";
    }
    else{
      response.success = true;
      response.message = "Login success";
    }

  } catch (e) {
    console.log(`${e}`);
  }
  finally{
    res.header("content-type","application/json");
    res.json(response);
  }
})


async function loginController(params){
const {email,password} = params;
try {
  await loginModel.findOne({where:{email:email}})
  return true;
} catch (e) {
  console.log(`controller ${e}`);
  return false;
}
}

module.exports = router;
