import { SearchBarContent, SearchIncon, SearchInput } from "./styles"

export const SearchBarComponent = () => {
    return (
        <SearchBarContent>
            <SearchIncon size={24} />
            <SearchInput type="text" id="search-input" placeholder="Search menu items" />
        </SearchBarContent>
    )
}