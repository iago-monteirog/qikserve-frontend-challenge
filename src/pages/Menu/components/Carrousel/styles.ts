import styled from 'styled-components'

export const CarrouselBox = styled.div`
  display: flex;
  gap: 12px;
`

export const CarrouselCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 6.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primaryColour};
  padding: 0 10px 10px;

  p {
    font-weight: 600;
    font-size: 1rem;
    color: #121212;
  }
`

export const CardBadge = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.primaryColour};
  padding: 3px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`