import request from  'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("Users", ()=>{
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  })
  
  it("Should be able to create a new user", async() => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "user@exemplo.com"
    });
    expect(response.status).toBe(200);
  });

  it("Should not be able to create a new user with exists email", async() => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "user@exemplo.com"
    });
    expect(response.status).toBe(400);
  });
});

