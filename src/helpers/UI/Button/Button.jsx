import styled from "@emotion/styled";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const ButtonStyle = styled(Button)({
  width: "20%",
  padding: "10px 25px",
  color: "white",
  border: "1px solid #474747",
  borderRadius: "10px",
});

const ButtonComponent = ({ text, onClick }) => {
  return (
    <ButtonStyle startIcon={<KeyboardReturnIcon />} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default ButtonComponent;
