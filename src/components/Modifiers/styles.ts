import * as RadioGroup from "@radix-ui/react-radio-group"
import styled from "styled-components"

export const ModifierContent = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;

  p:first-of-type {
    font-weight: 700;
    line-height: 1.6;
    color: #464646;
  }

  span:first-of-type{
    color: #5F5F5F;
    line-height: 1.6;
  }
`

export const ModifierOptionContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModifierInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    line-height: 1.6;
    color: #121212;
  } 

  span {
    line-height: 1.6;
    color: #464646;
  }
`


export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 20px;
  height: 20px;
  border: 2px solid #5F5F5F;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primaryColour};
  }

`


export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.primaryColour};
  }
`