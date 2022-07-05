import request from "supertest";
import server from "../../../server";

describe("Search API", () => {
  describe("GET /search", () => {
    test("should respond with 200 status code", async () => {
      const response = await request(server().start())
        .get("/api/v1/search")
        .send();
      expect(response.statusCode).toBe(200);
    });
  });
});
