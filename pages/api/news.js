import fetch from 'node-fetch'
import cache from 'memory-cache'

export default async function getNews(req, res) {
    const twoHoursInMilisseconds = 2 * 60 * 60 * 1000
    let cachedResponse = cache.get('response-news')
    let response = await fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
            headers: {
                "x-rapidapi-key": process.env.COVID_19_NEWS_API_KEY,
                "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                "accept": "application/json"
            },
            method: 'GET'
        })

    if (!cachedResponse) {
        cache.put('response-news', await response.json(), twoHoursInMilisseconds, function (key, value) {
            console.log(`Cache expired. Re-building it. Key: ${key}. Value: ${value}`)
        })
        cachedResponse = cache.get('response-news')
    }     

    return res.status(200).json(cachedResponse) 
}