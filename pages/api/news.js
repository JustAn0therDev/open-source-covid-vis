import fetch from 'node-fetch'
import cache from 'memory-cache'

export default async function getNews(req, res) {
    let cachedResponse = cache.get('response-news')
    if (!cachedResponse) {
        const response = await fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
                headers: {
                    "x-rapidapi-key": process.env.COVID_19_NEWS_API_KEY,
                    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                    "accept": "application/json"
                },
                method: 'GET'
            })
        
        const responseObject = await response.json() 
        const twoHoursInMilisseconds = 2 * 60 * 60 * 1000

        cache.put('response-news', responseObject, twoHoursInMilisseconds, function (key, value) {
            console.log(`Cache expired. Re-building it. Key: ${key}. Value: ${value}`)
        })

        cachedResponse = responseObject
    }

    return res.status(200).json(cachedResponse) 
}
