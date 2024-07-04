import styled from 'styled-components';

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden; 
`;

export const BannerImage = styled.img`
  width: 100%; 
  height: auto; 
  max-width: 100%;
  object-fit: cover; 
  
  @media (min-width: 768px) {
    max-height: 150px; 
  }

  @media (max-width: 767px) {
    max-height: none;
    height: 20vh;
  } 
`;