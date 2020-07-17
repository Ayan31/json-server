const request = require("supertest");
const app = require("../index.js");

    describe("GET /posts/1", () => {
      it("respond with posts1(JSON)", (done) => {
        request(app).get("/posts/1").expect({ "id": 1, "title": "json-server", "author": "typicode" }, done);
      })
    });
