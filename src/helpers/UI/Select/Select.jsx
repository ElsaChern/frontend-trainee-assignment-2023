import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  Typography,
  Select as MuiSelect,
  MenuItem,
  InputLabel,
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

const Select = ({ label, name, optoinsArray, value, onChange }) => {
  return (
    <SelectWrapper>
      <FormControlStyle>
        <FormLabel>{label}</FormLabel>
        <FormSelect
          MenuProps={{ style: { maxHeight: 300 } }}
          displayEmpty={false}
          name={name}
          value={value}
          onChange={onChange}
          renderValue={() => (
            <Typography>
              {optoinsArray.find((item) => item.value === value)?.label ||
                optoinsArray[0].label}
            </Typography>
          )}
        >
          {optoinsArray.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </FormSelect>
      </FormControlStyle>
    </SelectWrapper>
  );
};

export default Select;
