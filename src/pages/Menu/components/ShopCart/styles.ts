import styled from "styled-components";

export const ShopCartContainer = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  border-radius: 2px;
  height: fit-content;
  min-width: 320px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const ShopCartHeader = styled.header`
  padding: 22px 24px;
  background: #F8F9FA;

  h1 {
    color: #464646;
    font-weight: 500;
    size: 1.5rem;
    line-height: 1.6;
  }
`

export const ShopCartContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
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

export const ShopCartQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
`

export const QuantityButton = styled.button`
  background-color: ${props => props.theme.primaryColour};
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
  background: #F8F9FA;
`

export const ShopCartSubTotal = styled(ShopCartTotalSubtotalModel)`
  border-bottom: 1px solid #EEEEEE;

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
