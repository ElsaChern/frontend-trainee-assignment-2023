import styled from "@emotion/styled";
import { Box, Button, Card, Typography } from "@mui/material";

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: "20px",
  flexWrap: "wrap",
  alignContent: "center",
  alignItems: "start",
  justifyContent: "space-evenly",
  gap: "15px",
  [theme.breakpoints.only("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  width: "370px",
  transition: "transform ease .4s",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("lg")]: {
    width: "340px",
  },
}));

const CardGenre = styled(Typography)({
  color: "#599dcf",
});

const ExtraInfoWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  opacity: "0.2",
  borderRadius: "10px",
  marginTop: "10px",
});

const CardExtraInfo = styled(Typography)(({ theme }) => ({
  color: "black",
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const NavigateWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "20px",
  gap: "110px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    gap: "20px",
  },
}));

const NextPageBtn = styled(Button)(({ theme }) => ({
  width: "150px",
  padding: "10px 25px",
  backgroundColor: "inherit",
  color: "white",
  border: "1px solid #474747",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    width: "100px",
    padding: "0",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const LoadingWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "50px",
});

export {
  BoxContainer,
  CardContainer,
  CardGenre,
  ExtraInfoWrapper,
  CardExtraInfo,
  NavigateWrapper,
  NextPageBtn,
  LoadingWrapper,
};
