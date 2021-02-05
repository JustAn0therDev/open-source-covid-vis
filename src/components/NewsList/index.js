import useSWR from 'swr'
import styled from 'styled-components'

const fetcher = (url) => fetch(url).then(response => response.json())

const Ul = styled.ul`
    list-style: none;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    & > li {
        /* TODO: change this later, its ugly */
        margin-left: -37px;
    }
`

export default function NewsList() {

    const { data, error } = useSWR('/api/news', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Ul>
                {data.news.map(news => <li key={news.originalUrl}><a target="_blank" href={news.originalUrl}>{news.title}</a></li>)}
            </Ul>
        </>
    )
}