// const jwt = require("jsonwebtoken");
// SECRET_KEY = "supersecretkey";

// const generateToken = (data) => jwt.sign(data, SECRET_KEY, { algorithm: "HS256", expiresIn: 10000 });

// const validateToken = (token) => jwt.verify(token, SECRET_KEY);

// const testTokens = () => {
//   const user = { email: "person@gmail.com" };

//   const token = generateToken(user);
//   console.log("token", token);
//   const validatedToken = validateToken(token);
//   console.log("validatedToken", validatedToken);
// };

// testTokens();

// const testEncoding = (str) => {
//   console.log("str:", str);

//   //encoding ==> base64
//   const encodedString = Buffer.from(str).toString("base64");
//   console.log("encodingString", encodedString);

//   //decoding ==> ascii
//   const decodedString = Buffer.from(str).toString("ascii");
//   console.log("decodedString", decodedString);
// };

// testEncoding("string_to_encode");
