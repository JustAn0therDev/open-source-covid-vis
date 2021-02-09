import styled from 'styled-components'

const Section = styled.section`
    height: 30vh;
    background-color: #111111;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Header = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
    text-align: center;
`

export default function HomeHeader() {
    return (
        <Section>
            <Header>
                COVID-19 information through the power of open-source
            </Header>
        </Section>
    )
}
