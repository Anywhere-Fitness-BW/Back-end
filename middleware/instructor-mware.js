// function checkInstructor(req, res, next) {
//     if (req.jwt && req.jwt.role === 'instructor') {
//       next();
//     } else {
//       res.status(403).json({message: 'not authorized'});
//     }
//   }
// module.exports ={
//     checkInstructor
// }

//  when logging in and register we should have a role so it knows where to go. 