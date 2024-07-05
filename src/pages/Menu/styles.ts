import styled from 'styled-components'

export const MenuContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    max-width: 74rem;
    margin: 1rem;
    padding: 32px 40px;
`

export const Content = styled.div`
    display: flex;
    gap: 24px;
    padding: 32px 40px;
    background: #F8F9FA;
    border-radius: 4px;
`

export const MenuBox = styled.div`
    background: ${props => props.theme.backgroundColour};
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2px;

`

export const ShopCartBox = styled.div`
    background: ${props => props.theme.backgroundColour};
    padding: 20px 16px;
    border-radius: 2px;

`