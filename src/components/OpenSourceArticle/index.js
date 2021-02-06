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
                Today we can say that <strong>open-source is the basis of almost everything that envolves technology and science. From an open-source library
                and data availability to a gigantic company that started as an open-source project</strong>, it helps the community interact, help each other
                and find people that are interested in making the world a better place by making knowledge available to everyone. 
            </Paragraph>
            <Paragraph>
                Information about the world (from the polar cap reduction to COVID-19 data) has shown it's importance more than ever with the pandemic.
                We have been able to reach out to other people telling them to stay home and
                giving them a way to see what was going on in the world. Even in such troubled times, open-source still helps people connect and stay safe.
                The COVID-19 pandemic made us realize that information about it should be <strong><em>filtered and interpreted correctly</em></strong>. 
                A way found by the community to keep everyone <em>up-to-date</em> was to provide <strong>free information with the latest data and news</strong>, 
                as well as providing the necessary resources for it.
            </Paragraph>            
                
            <Paragraph>
                <strong>Speaking of providing resources</strong>, there are two links down below where you can read and check out data about COVID-19 in convenient formats,
                all made available to you by the power of open-source. It goes to show that open-source is fully related to how we can make the world a better place.
            </Paragraph>
        </Article>
    )
}