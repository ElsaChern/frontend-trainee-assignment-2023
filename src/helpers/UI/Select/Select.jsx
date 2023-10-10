import { MenuItem, Typography } from "@mui/material";
import {
  FormControlStyle,
  FormLabel,
  FormSelect,
  SelectWrapper,
} from "./styled";

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
