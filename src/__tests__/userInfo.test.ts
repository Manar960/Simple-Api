import request from "supertest";
import { app, server } from "../index"; 

afterAll(() => {
  server.close();
});

describe("User Info API", () => {
  describe("GET /hello", () => {
    it("should return greeting with the provided name", async () => {
      const res = await request(app).get("/hello?name=Manar");
      expect(res.status).toBe(200);
      expect(res.body.greeting).toBe("Hello, Manar!");
    });

    it('should return "Hello, world!" if no name is provided', async () => {
      const res = await request(app).get("/hello");
      expect(res.status).toBe(200);
      expect(res.body.greeting).toBe("Hello, world!");
    });
  });

  describe("GET /info", () => {
    it("should return response info", async () => {
      const res = await request(app).get("/info");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("time");
      expect(res.body).toHaveProperty("client_address");
      expect(res.body).toHaveProperty("host_name");
      expect(res.body).toHaveProperty("headers");
    });
  });
});
