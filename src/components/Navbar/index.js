import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #111111;
    min-height: 5vh;
    display: grid;
    align-items: center;
    justify-content: center;
`

const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    transition: ease 0.2s;
    &:hover {
        font-size: 1.2rem;
        text-decoration: underline;
    }
    cursor: pointer;
`

export default function Navbar() {
    return (
        <Nav>
            <Link href="/">Back to Home</Link>
        </Nav>
    )
}
