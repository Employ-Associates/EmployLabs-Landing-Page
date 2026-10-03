// A stand-in for app.employlabs.ai for the landing page's e2e tests:
//   POST /api/search-prospects/self-serve  -> mints an invite path (or a real-shaped error)
//   GET  /search-prospects                 -> a blank page, so the hand-off navigation completes
// Email local-part picks the behaviour: bad@ -> 400, rate@ -> 429, boom@ -> 500, slow@ -> 1.5s.
import http from "node:http";

const PORT = Number(process.env.PORT ?? 4120);
http
  .createServer((req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-headers", "*");
    if (req.method === "OPTIONS") return res.writeHead(204).end();
    if (req.method === "GET" && req.url?.startsWith("/search-prospects")) {
      res.setHeader("content-type", "text/html");
      return res.end("<!doctype html><title>Search prospects</title><h1>app</h1>");
    }
    if (req.method === "POST" && req.url === "/api/search-prospects/self-serve") {
      let body = "";
      req.on("data", (d) => (body += d));
      req.on("end", () => {
        let email = "";
        try {
          email = JSON.parse(body).email ?? "";
        } catch {}
        const who = email.split("@")[0];
        res.setHeader("content-type", "application/json");
        const reply = (status, json, ms = 150) => setTimeout(() => res.writeHead(status).end(JSON.stringify(json)), ms);
        if (who === "bad") return reply(400, { error: "That domain can't receive email." });
        if (who === "rate") return reply(429, { error: "Too many searches from here. Try again in a little while." });
        if (who === "boom") return reply(500, { error: "boom" });
        reply(201, { token: "sp_stub", path: "/search-prospects?invite=sp_stub" }, who === "slow" ? 1500 : 150);
      });
      return;
    }
    res.writeHead(404).end();
  })
  .listen(PORT);
