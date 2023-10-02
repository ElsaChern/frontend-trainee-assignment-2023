import styled from "@emotion/styled";
import { Card } from "@mui/material";
import GameSelector from "../GameSelector/GameSelector";

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
      <GameSelector />
    </HeaderContainer>
  );
};

export default Header;
