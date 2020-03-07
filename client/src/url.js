// REST API's of the server

/*
signup authentication
*/
import axios from "axios";

export const addUser = data => {
  const url = "http://localhost:8080/signup/auth";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());
};

/*
Login authentication
*/

export const loginAuth = data => {
  const url = "http://localhost:8080/login/auth";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());
};

export const profile = async data => {
  const url = "http://localhost:8080/profile/";
  let result = "";
  try {
    result = await axios({
      method: "post",
      url,
      data,
      headers: { "Content-Type": "undefined" }
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const loginAuthWithToken = data => {
  const url = "http://localhost:8080/user/loginUser";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());
};

export const addReview = async data => {
  const url = "http://localhost:8080/review/addreview";
  let result = "";
  try {
    result = await axios({
      method: "POST",
      url,
      data
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const viewReview = async data => {
  const url = "http://localhost:8080/review/viewreview/" + data.company;
  let result = "";
  try {
    result = await axios.get(url);
  } catch (error) {
    console.log(error);
  }
  return result.data;
};
