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
  background: #f8f9fa;
  border-radius: 4px;
`

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBox = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 2px;
  min-width: 600px;
`

export const ShopCartBox = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  padding: 20px 16px;
  border-radius: 2px;
  max-height: 260px;
`
