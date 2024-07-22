import styled from 'styled-components'

export const ShopCartContainer = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  border-radius: 2px;
  height: fit-content;
  min-width: 320px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ShopCartHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 22px 24px;
  background: #f8f9fa;
  width: 100%;

  h1 {
    color: #464646;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const ShopCartContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ShopCartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;

  p {
    font-size: 1rem;
    color: #464646;
  }

  span {
    font-weight: 500;
    size: 1rem;
    text-align: right;
    color: #121212;
  }
`

export const ShopCartRowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModifierText = styled.p`
  color: #5f5f5f;
  line-height: 1.6;
`

export const ShopCartQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
`

export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme.primaryColour};
  border: none;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ItemCounter = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  color: #121212;
`

export const ShopCartTotalSubtotalModel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
`

export const ShopCartSubTotal = styled(ShopCartTotalSubtotalModel)`
  border-bottom: 1px solid #eeeeee;

  span {
    font-weight: 500;
  }

  p {
    font-weight: 300;
    size: 1.5rem;
  }
`

export const ShopCartTotal = styled(ShopCartTotalSubtotalModel)`
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-weight: 300;
    font-size: 1.5rem;
  }
`

export const EmptyCart = styled.div`
  padding: 24px;
`

export const ShopCartFooter = styled.div`
  width: 100%;
`

export const CheckoutButton = styled.div`
  display: none;
  position: fixed;
  bottom: 16px;
  background-color: ${(props) => props.theme.primaryColour};
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 345px;
  max-height: 48px;
  padding: 14px;
  border: 0;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryColourHover};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
