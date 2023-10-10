import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputLabel,
  Select as MuiSelect,
} from "@mui/material";

const SelectWrapper = styled(Box)(() => ({
  width: "100%",
}));

const FormControlStyle = styled(FormControl)({
  width: "100%",
  padding: "10px 0",
});

const FormLabel = styled(InputLabel)({
  fontSize: "14px",
  padding: "5px",
});

const FormSelect = styled(MuiSelect)({
  borderRadius: "10px",
  height: "40px",
  padding: "0px",
  margin: "0 10px",
});

export { SelectWrapper, FormControlStyle, FormLabel, FormSelect };
