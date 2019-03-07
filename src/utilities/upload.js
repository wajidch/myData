'use strict';

const uuid = require('uuid');
const config = require('../../configs/config');
const AWS = require('aws-sdk');
const fs = require("fs");
var multer = require('multer');
/**
 * This function is to upload file to local machine or server where code is deployed
 * @param data will be holding name of file and file data base64
 * @param reply return unique file name generated in this function and file headers or error if there is any arror uploading file
 */
const localUpload = (data, reply) => {
  if (data) {
    console.log("sd",data)
      const name = uuid.v1() + data;
      console.log("sd",name)

      const path = "C:/wamp/www/upload" + name;
      const file = fs.createWriteStream(path);
      file.on('error', function (err) {
          console.error(err)
      });
    return file
  }
};


/**
 * This function is to generate unique file name using uuid.v4
 * @param fileName plain file name
 * @returns {string} will return unique file name
 */
const generateImageName = (fileName) => {
    return uuid.v4() + '.' + fileName.substr((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);
};

module.exports = {
  localUpload:localUpload,
   generateImageName: generateImageName,
    
};
