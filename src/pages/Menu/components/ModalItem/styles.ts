import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 480px;
  max-height: 90vh; 
  overflow-y: auto; 
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const CloseButton = styled.button`
    position: absolute;
    background: #fff;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
`

export const ModalItemHeader = styled.header`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ModifierHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`

export const AddToOrderContainer = styled.div`
  position: sticky; 
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8); 
  backdrop-filter: blur(1px); 
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const ShopCartQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
`

export const QuantityButton = styled.button`
  background-color: ${props => props.theme.primaryColour};
  border: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
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

export const AddButton = styled.button`
  background-color: ${props => props.theme.primaryColour};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 48px;
  padding: 14px;
  border: 0;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primaryColourHover};
  }

  p {
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    line-height: 1.6;
    color: #fff
  }
`