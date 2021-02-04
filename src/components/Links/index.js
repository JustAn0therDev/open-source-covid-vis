import styled from "styled-components";

const Section = styled.section`
    width: 99.9vw;
    height: 40vh;
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    text-align: center;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
`

const GraphLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: ease 0.5s;
    &:hover {
        font-size: 3.5rem;
        text-decoration: underline;
    }
    cursor: pointer;
`

const NewsLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: ease 0.5s;
    &:hover {
        font-size: 3.5rem;
        text-decoration: underline;
    }   
    cursor: pointer;
`

export default function Links() {
    return (
        <Section>
            <GraphLink href="/graphs">See Statistics</GraphLink>
            <NewsLink href="/news">Read News</NewsLink>
        </Section>
    )
}