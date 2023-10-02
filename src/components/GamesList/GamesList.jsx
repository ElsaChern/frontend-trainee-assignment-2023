import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

const BoxContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  gap: "20px",
  alignItems: "start",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  width: "100%",
  height: "200px",
  transition: "transform ease .3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "47.5%",
  },
  [theme.breakpoints.up("md")]: {
    width: "31.6%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "32%",
  },
}));

const GamesList = () => {
  return (
    <BoxContainer>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </BoxContainer>
  );
};

export default GamesList;
