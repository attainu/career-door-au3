"use strict";
const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const model = require('../config/config');
const uuid = require('uuid');

router.post('/auth',async(req,res)=>{
  let response = {};
  try {
    const reqParams = req.body;
    reqParams.id = uuid.v4();
    const status = await addUserController(reqParams);
    if(!status){
      response.success = false;
      response.message = "Email Id already exists";
    }
    else{
      response.success = true;
      response.message = "You have signed-up successfully";
    }
  } catch (e) {
    console.error(chalk.red(`route:-${e}`));
    response.success = false;
    response.message = "Signed up failed";
  } finally {
    // res.setHeader("content-type","application/json");
    res.json(response);
  }

})

// controller
async function addUserController(params){
  const {id,first_name,last_name,email,gender,dob,user_type,password,confirm_password,company_name}=params;
  try {
    await model.userModel.create({
      id,
      first_name,
      last_name,
      email,
      gender,
      dob,
      user_type,
      password,
      confirm_password,
      company_name
    })
    return true;
  } catch (e) {
    console.log(chalk.red(`controller-${e}`));
    return false;
  }
}



module.exports = router;
