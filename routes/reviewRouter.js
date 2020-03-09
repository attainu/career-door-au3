const express = require("express");
const router = express.Router();
const model = require("../config/config");
const chalk = require("chalk");
const cloudinary = require('cloudinary').v2;
const path = "./files/"
 const uuid = require('uuid');

 router.post("/addreview",async(req,res)=>{
   let response={};
   try {
     const reqParams = req.body;
     reqParams.id = uuid.v4();
     const status = await reviewController(reqParams);
     if(status){
       response.message = "review added"
     }
     else{
       response.message="review failed"
     }
   } catch (e) {
     console.log("route:"+e);
   } finally {
     res.json(response)
   }
 })



 router.get("/viewreview/:company",async(req,res)=>{
   const companyName = req.params.company;
  let result = await viewController(companyName);
  res.json(result);

 })


 // controllers


 async function reviewController(params) {
   console.log(params);
   const {
     id,
     email,
     company,
     jobtitle,
     year,
     ratings,
     salary,
     review
   } = params;
   try {
      await model.reviewModel.create({
       id,
       email,
       company,
       jobtitle,
       year,
       ratings,
       salary,
       review
     })

     return true;
   } catch (e) {
     console.error(`controller:${e}`);
     return false;
   }

 }


 async function viewController(params){
   const company = params;
   let result = {}
   try {
     console.log(company);
    result = await model.reviewModel.findAll({where:{company:company}})
   } catch (e) {
     console.log("controller:"+e)
     result ="error"
   }
   return result;
 }


 module.exports = router;
