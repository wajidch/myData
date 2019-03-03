'use strict';

const uuid = require('uuid');
const config = require('../../configs/config');
const AWS = require('aws-sdk');
const fs = require("fs");

AWS.config.update({
  accessKeyId: config.aws.accessKey,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
    httpOptions: {
        timeout: 900000 //your timeout value
    },
});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});


/**
 * This function is to upload files on S3 server
 * @param fileName with extension
 * @param fileBuffer file data base64
 * @returns {Promise} return uploaded file name if no error
 */
function s3upload (fileName, fileBuffer) {
  return new Promise(function (resolve, reject) {
    const uploadParams = {Bucket: config.aws.bucketId, Key: fileName, Body: fileBuffer, ContentEncoding: 'base64', ContentType : 'image/jpeg'};
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        return reject(err);
      }
      if (data) {
        return resolve(data.Key);
      }
      resolve(null);
    });
  });
}


/**
 * This function is to upload file to local machine or server where code is deployed
 * @param data will be holding name of file and file data base64
 * @param reply return unique file name generated in this function and file headers or error if there is any arror uploading file
 */
const localUpload = (data, reply) => {
    if (data) {
        const name = uuid.v1() + data.hapi.filename;
        const path = config.rootPath + "/static/uploads/" + name;
        const file = fs.createWriteStream(path);
        file.on('error', function (err) {
            console.error(err)
        });
        data.pipe(file);
        data.on('end', function (err) {
            return reply(null, {
                filename: name,
                headers: data.hapi.headers
            });
        })
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
    localUpload: localUpload,
    generateImageName: generateImageName,
    s3upload,
};
