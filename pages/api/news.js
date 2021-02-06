import fetch from 'node-fetch'
import fs from 'fs'

const cacheFilePath = 'cache/news.json'
const cacheNewstimestampFilePath = 'cache/news_timestamp.json'

export default async function getNews(req, res) {
    let response
    let newsTimestampObject = JSON.parse(fs.readFileSync('cache/news_timestamp.json', { encoding: 'utf-8' }))

    if (!newsTimestampObject.timestamp || newsTimestampObject.timestamp <= new Date()) {
        console.log('rebuilding cache...')
        let twoHoursInMilliseconds = 2 * 60 * 60 * 1000

        response = await (await fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
                headers: {
                    "x-rapidapi-key": process.env.COVID_19_NEWS_API_KEY,
                    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                    "accept": "application/json"
                },
                method: 'GET'
            })).json()

        newsTimestampObject.timestamp = (new Date().getTime() + twoHoursInMilliseconds).toJSON()

        fs.writeFileSync(cacheFilePath, JSON.stringify(response), { encoding: 'utf-8' })
        fs.writeFileSync(cacheNewstimestampFilePath, JSON.stringify(newsTimestampObject), { encoding: 'utf-8' })
    } else {
        response = JSON.parse(fs.readFileSync('cache/news.json', { encoding: 'utf-8' }))
    }

    return res.status(200).json(response)
}