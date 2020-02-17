"use strict";
const express = require("express");
const router = express.Router();
const model = require("../config/config");
const chalk = require("chalk");
const cloudinary = require('cloudinary').v2;
// const uuid = require('uuid');


// cloudinary configuration
cloudinary.config({
  cloud_name: "dychdoazz",
  api_key: "758689823458227",
  api_secret: "3896MRrNs4b5nus8OrYq4zs8S4g"
})



// routes

router.post("/", async (req, res) => {
  // const file = req.files.cloudResume;
  // let  cloudResume = "";
  //
  // try {
  //   let result = await cloudinary.uploader.upload(file.tempFilePath);
  //   cloudResume = result.secure_url;
  // } catch (e) {
  //   console.log(`cloudinary:${e}`);
  // }


  let response = {};
  try {
    const reqParams = req.body;
    reqParams.id = uuid.v4();
    const status = await profileController(reqParams);
    if (status) {
      response.message = "successfully created";
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
    keySkills,
    employement,
    education,
    projects,
    personalDetails
  } = params;
  try {
     await model.profileModel.create({
      id,
      email,
      cloudResume,
      keySkills,
      employement,
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
    keySkills,
    employement,
    education,
    projects,
    personalDetails
  } = params;
  try {
    const status = await model.profileModel.update(
        {cloudResume,keySkills,employement,education,projects,personalDetails},
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
