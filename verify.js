let jwt = require('jsonwebtoken');

let mytoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndhamlkQGdtYWlsLmNvbSIsImlkIjo0LCJzY29wZSI6WyJBRE1JTiJdLCJpYXQiOjE1MzA3NjQwNzMsImV4cCI6MTUzMzM1NjA3M30.WP7aqNFXrPGTHeIXpjofV9YWcsooGSNs4oSZiN0w1cY";
let mykey = "IntelligentAttendanceSecretKey";
const verifyToken = (token, key) => {
    return jwt.verify(token, key, (decoded) => {
        console.log("true")
    })
}

verifyToken(mytoken, mykey);