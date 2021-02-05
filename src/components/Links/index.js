import styled from "styled-components";

const Section = styled.section`

    @media screen and (min-width: 60px) {
        height: 40vh;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: 2fr 2fr;
    }
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