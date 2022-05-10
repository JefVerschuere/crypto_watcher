// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "twitter-api-sdk";
const client = new Client("AAAAAAAAAAAAAAAAAAAAADTNcQEAAAAAoPYe2kALG8TuYLfg5YuuvUa68a0%3DbnCzICYzzLpNaMPvPchuRp1GWAEwHsbKkfHE4V8rUDbnL1ovCa");


export default async function handler(req, res) {
  const { twitter } = req.query;
    try {
      const result = await client.tweets.tweetsRecentSearch({query: twitter});
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ err })
    }
}
