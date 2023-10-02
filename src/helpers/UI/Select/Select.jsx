/* eslint-disable */
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  Typography,
  Select as MuiSelect,
  MenuItem,
} from "@mui/material";

const SelectWrapper = styled(Box)(() => ({
  width: "100%",
}));

const FormControlStyle = styled(FormControl)({
  width: "100%",
});

const FormLabel = styled(Typography)({
  fontSize: "12px",
  marginLeft: "10px",
});

const FormSelect = styled(MuiSelect)({
  borderRadius: "10px",
  height: "40px",
  padding: "0px",
});

const Select = ({ label }) => {
  return (
    <SelectWrapper>
      <FormControlStyle>
        <FormLabel>{label}</FormLabel>
        <FormSelect
          placeholder={label}
          MenuProps={{ style: { maxHeight: 400 } }}
          displayEmpty={true}
          //   renderValue={(value) => (
          //     // <Typography>
          //     //   {array.find((item) => item.value === value)?.label ||
          //     //     array[0].label}
          //     // </Typography>
          //   )}
        >
          {/* {array.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))} */}
        </FormSelect>
      </FormControlStyle>
    </SelectWrapper>
  );
};

export default Select;
