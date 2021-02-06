import useSWR from 'swr'
import styled from 'styled-components'

const fetcher = (url) => fetch(url).then(response => response.json())

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    & > li {
        padding-bottom: 10px;
        margin-right: 35px;
    }

    & > li > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        transition: ease 0.5s;
        &:hover {
            font-size: 1.5rem;
            text-decoration: underline;
        }
        cursor: pointer;
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