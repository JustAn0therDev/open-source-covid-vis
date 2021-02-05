import styled from 'styled-components'

const Article = styled.article`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* border: 1px solid red; */
    min-height: 10vh;
    color: ${({ theme }) => theme.colors.primary};
`

const Paragraph = styled.p`
    width: 50vw;
`

export default function OpenSourceArticle() {
    return (
        <Article>
            <Paragraph> 
                Today we can say that <strong>open-source is the basis of almost everything that envolves technology and programming. From an open-source library
                and data availability to a gigantic company that started as an open-source project</strong>, it helps the community interact, help each other
                and find people that are interested in making the world a better place by providing free knowledge and resources to everyone. 
            </Paragraph>
            <Paragraph>
                <em>Speaking of providing resources</em>, there are two links down below where you can check out data about COVID-19 in convenient formats,
                all made available to you by the power of open-source.
            </Paragraph>
        </Article>
    )
}