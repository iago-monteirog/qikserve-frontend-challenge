import { MagnifyingGlass } from '@phosphor-icons/react'
import styled from 'styled-components'

export const SearchBarContent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`

export const SearchIncon = styled(MagnifyingGlass)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #8a94a4;

  @media (max-width: 768px) {
    left: 25px;
  }
`
