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

  const { ticker } = req.query;

  fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=earnings`
  )
    .then((res) => res.json())
    .then((response) => res.json(response));
}

export default handler;
