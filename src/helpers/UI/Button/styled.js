import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

const ButtonStyle = styled(Button)(({ theme }) => ({
  width: "20%",
  padding: "10px 25px",
  color: "white",
  border: "1px solid #474747",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    width: "2%",
    padding: "10px 50px",
    marginRight: "auto",
  },
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export { ButtonStyle, ButtonText };
