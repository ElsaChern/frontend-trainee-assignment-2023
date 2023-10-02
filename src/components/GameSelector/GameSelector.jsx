import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Select from "../../helpers/UI/Select/Select";

const SubmitBtn = styled(Button)({
  border: "1px solid #474747",
  borderRadius: "10px",
  width: "50%",
  color: "white",
  marginTop: "15px",
  padding: "8px",
});

const GameSelector = () => {
  return (
    <>
      <Select label="Платформа" />
      <Select label="Категория" />
      <Select label="Сортировать" />
      <SubmitBtn>Поиск</SubmitBtn>
    </>
  );
};

export default GameSelector;
