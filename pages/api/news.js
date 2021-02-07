import fs from 'fs'
import fetch from 'node-fetch'
import cachedJson from '../../cache/news.json'

export default async function getNews(req, res) {
    let newsToReturn
    let cachedObject = cachedJson
    let now = new Date().getTime()
    let cacheExpired = Number(cachedObject.timestamp) <= now

    if (cacheExpired) {
        let twoHoursInMilliseconds = 2 * 60 * 60 * 1000

        newsToReturn = await (await fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
                headers: {
                    "x-rapidapi-key": process.env.COVID_19_NEWS_API_KEY,
                    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                    "accept": "application/json"
                },
                method: 'GET'
            })).json()

        now += twoHoursInMilliseconds
        cachedObject.timestamp = now.toString()

        cachedObject.data = newsToReturn

        fs.writeFileSync(cacheFilePath, JSON.stringify(cachedObject), { encoding: 'utf-8' })
    } else {
        newsToReturn = cachedJson.data
    }
    return res.status(200).json(newsToReturn)
}