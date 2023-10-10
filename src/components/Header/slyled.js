import styled from "@emotion/styled";
import { Card } from "@mui/material";

const HeaderContainer = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  alignItems: "center",
  margin: "20px 0",
  overflow: "visible",
  display: "flex",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export default HeaderContainer;
