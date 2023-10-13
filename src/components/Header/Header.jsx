import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import HeaderContainer from "./slyled";
import ButtonComponent from "../../helpers/UI/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      {pathname === "/games" ? (
        <SearchBar />
      ) : (
        <ButtonComponent onClick={() => navigate("/games")} text="На главную" />
      )}
    </HeaderContainer>
  );
};

export default Header;
