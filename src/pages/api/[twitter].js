import { faker } from '@faker-js/faker';
import { Client } from "twitter-api-sdk";
const client = new Client("AAAAAAAAAAAAAAAAAAAAADTNcQEAAAAAoPYe2kALG8TuYLfg5YuuvUa68a0%3DbnCzICYzzLpNaMPvPchuRp1GWAEwHsbKkfHE4V8rUDbnL1ovCa");


export default async function handler(req, res) {
  /*
    const { twitter } = req.query;
      try {
        const result = await client.tweets.tweetsRecentSearch({query: twitter, sort_order: "relevancy"});
        res.status(200).json({ result })
      } catch (err) {
        res.status(500).json({ err })
      }
  */
      let result = [];
      for(var i =0; i<10; i++) {
        var element = {};
        element.name = faker.name.findName();
        element.tweet = faker.company.catchPhrase();
        element.likes = faker.random.numeric(5);
        element.retweets = faker.random.numeric(4);
        result.push(element)
      }

      res.status(200).json({result})
}
