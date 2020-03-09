"use strict";
const express = require("express");
const router = express.Router();
const model = require("../config/config");
const chalk = require("chalk");
const cloudinary = require('cloudinary').v2;
const uuid = require('uuid');


// cloudinary configuration
cloudinary.config({
  cloud_name: "dychdoazz",
  api_key: "758689823458227",
  api_secret: "3896MRrNs4b5nus8OrYq4zs8S4g"
})



// routes

router.get("/test",async(req,res)=>{
  res.send('ok');
})


router.post("/",async (req, res) => {
   const file = req.files.cloudResume;
  // console.log("filepath",file);
   let  cloudResume = "";
    let response = {};
    // console.log(path)
     file.mv("public/files/" + file.name, function(error){
        if(error){
            console.log("Couldn't upload the  file");
            console.log(error);
        }else{
            console.log("file succesfully uploaded.");
        }
    });
  try {
    const reqParams = req.body;
     reqParams.id = uuid.v4();
     reqParams.cloudResume = file.name;
    const status = await profileController(reqParams);
    if (status) {
      response.message = "successfully created";
      response.success = true;
    } else {
      throw status;
    }
  } catch (e) {
    console.error(`route: ${e}`);
  } finally {
    res.json(response);
  }
})

// edit the profile
router.put('/update', async (req, res,next) => {
  let response={};
  try {
    const reqParams = JSON.parse(JSON.stringify(req.body));
    const reqid = req.query.id;
    const status = await editProfileController(reqParams, reqid);
    if(status){
    response.message = "successfully updated";
    }
  } catch (e) {
    console.error(`route:${e}`);
  } finally {
    res.json(response);
  }

})



// controllers
async function profileController(params) {
  const {
    id,
    email,
    cloudResume,
    skills,
    employment,
    education,
    projects,
    personalDetails
  } = params;
  try {
    console.log(email);
     await model.profileModel.create({
      id,
      email,
      cloudResume,
      skills,
      employment,
      education,
      projects,
      personalDetails
    })

    return true;
  } catch (e) {
    console.error(`controller:${e}`);
    return false;
  }

}


async function editProfileController(params, query) {
  const {
    email,
    cloudResume,
    skills,
    employment,
    education,
    projects,
    personalDetails
  } = params;
  try {
    const status = await model.profileModel.update(
        {cloudResume,skills,employment,education,projects,personalDetails},
      {returning: true,
        where: {
          id: query
        }
      })
      console.log(status);
      return true;
  } catch (e) {
    console.error(`controller:${e}`);
    return false;
  }
}


module.exports = router;
