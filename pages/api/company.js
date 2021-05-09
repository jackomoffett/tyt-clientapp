import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  await runMiddleware(req, res, cors);

  fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&keywords=amd&apikey=${process.env.AV_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => res.json(response["bestMatches"]));
}

export default handler;
