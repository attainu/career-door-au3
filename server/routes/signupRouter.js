"use strict";
const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const moment = require('moment');
const userModel = require('../models/user');

router.post('/auth',async(req,res,next)=>{
  let response = {};
  try {
    const reqParams = req.body;
    await addUser(reqParams);
    response.success = true;
    response.message = "You have signed-up successfully";
  } catch (e) {
    console.error(chalk.red(`route:-${e}`));
  } finally {
    res.setHeader("content-type","application/json");
    res.json(response);
  }

})


async function addUser(params){
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
