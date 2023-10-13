import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

const BoxContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: "20px",
  borderRadius: "20px",
  gap: "35px",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const MainGameInformation = styled(Box)(({ theme }) => ({
  width: "60%",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "baseline",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const GenreText = styled(Typography)({
  backgroundColor: "white",
  opacity: "0.2",
  borderRadius: "10px",
  color: "black",
  margin: "5px",
  padding: "0 15px",
  fontSize: "12px",
});

const SysytemReqTitle = styled(Typography)(({ theme }) => ({
  fontSize: "23px",
  marginTop: "15px",
  borderBottom: "solid 1px rgba(236, 236, 236, 0.1)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

const ExtraGameWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ExtraGameInformation = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  opacity: "0.2",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    marginTop: "15px",
    alignItems: "flex-end",
  },
}));

export {
  BoxContainer,
  MainGameInformation,
  GenreText,
  SysytemReqTitle,
  ExtraGameWrapper,
  ExtraGameInformation,
};
