/* eslint-disable */

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  categoryOptions,
  platformOptions,
  sortByOptions,
} from "../../helpers/constants";
import Select from "../../helpers/UI/Select/Select";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../store/slices/searchSlice";

const SubmitBtn = styled(Button)({
  border: "1px solid #474747",
  borderRadius: "10px",
  width: "70px",
  color: "white",
  padding: "8px",
});

const SearchBar = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    platform: "",
    category: "",
    order: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(
      setSearchData({
        platform: values.platform,
        category: values.category,
        order: values.order,
      }),
    );
  };

  return (
    <>
      <Select
        label="Платформа"
        name="platform"
        optoinsArray={platformOptions}
        value={values.platform}
        onChange={handleChange}
      />
      <Select
        label="Категория"
        name="category"
        optoinsArray={categoryOptions}
        value={values.category}
        onChange={handleChange}
      />
      <Select
        label="Сортировать"
        name="order"
        optoinsArray={sortByOptions}
        value={values.order}
        onChange={handleChange}
      />
      <SubmitBtn onClick={handleSubmit}>
        <SearchIcon />
      </SubmitBtn>
    </>
  );
};

export default SearchBar;
