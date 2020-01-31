const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {


    
  describe("GET /", () => {
    it("should return status code 200", async () => {
      return await request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return the right structure", async () => {
      return await request(server)
        .get("/")
        .then(res => {
          res.expect.objectContaining({
            companyName: expect.any(String),
            founder: expect.any(String)
          });
        });
    });
  });

  describe("DELETE /", () => {
    it("should return status code 201", async () => {
      return await request(server)
        .delete("/2")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return a json message", async () => {
      return await request(server)
        .delete("/3")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
  });
});
