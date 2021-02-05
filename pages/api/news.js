import fetch from 'node-fetch'

export default async function getNews(req, res) {
        return res.status(200).json(await (await fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
            headers: {
                "x-rapidapi-key": process.env.COVID_19_NEWS_API_KEY,
                "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
                "accept": "application/json"
            },
            method: 'GET'
        })).json())
}