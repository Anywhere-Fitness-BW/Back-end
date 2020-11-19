// const supertest = require("supertest")
// const { intersect } = require("../config")
// const server = require("../server")

// test('POST /api/auth/register', async () => {
//     const response = await request(server)
//       .post('/api/auth/register')
//       .send({
//         first_name: 'furno',
//         first_name: "west",
//         email: 'west@hotmail.com',
//         username: 'dummy1',
//         password: 'abc123',
       
//       });
//     expect(response.status).toBe(201);
//     expect(response.body).toMatchObject({
//       message: 'success'
//     });
//   });
  
//   test('POST /api/auth/login', async () => {
//     const register = await request(server)
//       .post('/api/auth/register')
//       .send({
//         username: 'dummy1',
//         password: 'abc123',
        
//       });
//     const response = await request(server)
//       .post('/api/auth/login')
//       .send({username: 'dummy1', password: 'abc123'});
  
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('token');
//     expect(response.body).toMatchObject({message: 'logged in'});
//   });




