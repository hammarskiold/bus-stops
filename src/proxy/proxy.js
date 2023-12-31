import express from "express";
import cors from "cors";

const transportMode = "BUS";
const apiKey = "15283e2f8ba0489d825f38bcdb1541c8";
const baseUrl = "https://api.sl.se/api2/LineData.json";

const url = `${baseUrl}?DefaultTransportModeCode=${transportMode}&key=${apiKey}`;

const port = 3000;
const app = express();

app.use(cors());

app.get("/stops", (req, res) => {
  fetch(`${url}&model=stop`)
    .then((response) => response.text())
    .then((body) => res.send(body));
});

app.get("/journeys", (req, res) => {
  fetch(`${url}&model=jour`)
    .then((response) => response.text())
    .then((body) => res.send(body));
});

app.listen(port, () => {
  console.log(`Proxy is listening on port ${port}`);
});
