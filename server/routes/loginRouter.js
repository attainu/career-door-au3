"use strict";
const express = require('express');
const router = express.Router();
const loginModel = require('../config/config');
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
    console.log(chalk.red(`Route${e}`));
  }
  finally{
    // res.header("content-type","application/json");
    res.json(response);
  }
})

// login controller
async function loginController(params){
  const {email,password} = params;
  console.log(chalk.white(password));
  try {
    const status = await loginModel.findOne({where:{email:email}})

    if(!status || !(status.validPassword(password))){
      return false;
    }
    else{
      return true;
    }
  } catch (e) {
    console.log(chalk.red(`controller ${e}`));
    return false;
  }
}

module.exports = router;
