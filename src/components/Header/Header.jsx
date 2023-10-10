import styled from "@emotion/styled";
import { Card } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const HeaderContainer = styled(Card)({
    borderRadius: "10px",
    alignItems: "center",
    margin: "20px 0",
    overflow: "visible",
    display: "flex",
    padding: "20px",
  });

  return (
    <HeaderContainer>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
