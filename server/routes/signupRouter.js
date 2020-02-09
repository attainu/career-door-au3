"use strict";
const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const userModel = require('../models/user');

router.post('/auth',async(req,res)=>{
  let response = {};
  try {
    const reqParams = req.body;
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
    res.setHeader("content-type","application/json");
    res.json(response);
  }

})


async function addUserController(params){
  const {first_name,last_name,email,gender,dob,user_type,createdat,updatedat,password,confirm_password,company_name}=params;
  try {
    await userModel.create({
      first_name,
      last_name,
      email,
      gender,
      dob,
      user_type,
      createdat,
      updatedat,
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

// router.get('/all', async(req, res, next) => {
//   const users = await findUsers();
//   res.json(users);
// })
//
// // findUsers
// async function findUsers(){
// try {
//   const data = await userModel.findAll();
//   return data;
// } catch (e) {
// console.error(chalk.red(e));
// }
// }

module.exports = router;
