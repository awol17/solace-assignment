import { Container, SearchArea, SearchInput, ResetButton } from "./SearchBar.styles";

export default function SearchBar({
  searchTerm,
  onSearchChange,
  onResetClick,
}: {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetClick: () => void;
}) {
  return (
    <Container>
      <SearchArea>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="🔍 Search advocates..."
        />
        <ResetButton onClick={onResetClick}>Reset</ResetButton>
      </SearchArea>
    </Container>
  );
}
