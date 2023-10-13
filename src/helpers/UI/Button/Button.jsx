import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { ButtonStyle, ButtonText } from "./styled";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <ButtonStyle startIcon={<KeyboardReturnIcon />} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonStyle>
  );
};

export default ButtonComponent;
