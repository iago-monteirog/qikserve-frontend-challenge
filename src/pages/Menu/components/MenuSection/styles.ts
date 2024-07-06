import { CaretDown, CaretUp } from "@phosphor-icons/react";
import styled from "styled-components";

export const MenuSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const MenuSectionToggleeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 16px 12px;
`

export const CaretUpIcon = styled(CaretUp)`
    color: ${props => props.theme.primaryColour};
    cursor: pointer;
`

export const CaretDownIcon = styled(CaretDown)`
    color: ${props => props.theme.primaryColour};
    cursor: pointer;
`

export const MenuItem = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    img {
        max-width: 128px;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    
`

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;

    h3 {
        line-height: 1.6;
        font-weight: 500;
        font-size: 1rem;
        color: #121212;
    }

    p {
        line-height: 1.6;
        font-weight: 300;
        font-size: 1rem;
        color: #464646;
    }

    span {
        line-height: 1.6;
        font-weight: 500;
        font-size: 1rem;
        color: #464646;
    }
`