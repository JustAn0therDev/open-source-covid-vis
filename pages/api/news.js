import fs from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let cacheFilePath = join(__dirname, 'cache', 'news.json')

if (process.platform == 'win32') {
    cacheFilePath = '.' + cacheFilePath.replace(/\\/g, '/')
}

export default async function getNews(req, res) {
    let newsToReturn
    let cachedObject = JSON.parse(fs.readFileSync(cacheFilePath, { encoding: 'utf-8' }))
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
        newsToReturn = JSON.parse(fs.readFileSync(cacheFilePath, { encoding: 'utf-8' })).data
    }
    return res.status(200).json(newsToReturn)
}