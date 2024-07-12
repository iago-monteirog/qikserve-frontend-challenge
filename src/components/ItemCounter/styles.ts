import styled from 'styled-components'

export const ItemCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
`

export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme.primaryColour};
  border: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background-color: #dadada;
    cursor: not-allowed;

    svg {
      color: #5f5f5f;
    }
  }
`

export const Counter = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  color: #121212;
`
