const request = require("supertest");
import app from '../server.js'

describe("GET /", () => {

    test("should return API working", async () => {

        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);

        expect(res.body.message).toBe("API Working");

    });

});