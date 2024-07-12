import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  max-width: 74rem;
  margin: 1rem;
  padding: 32px 40px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px 40px;
  background: #f8f9fa;
  border-radius: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    background: ${(props) => props.theme.backgroundColour};
    justify-content: center;
    align-items: center;
  }
`

export const ShopCartContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuBox = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 2px;
  min-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    min-width: auto;
  }
`

export const MobileCartButton = styled.button`
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

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 0;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

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

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`
