import { useMediaQuery } from "react-responsive";

const NotMobile = ({ children }) => {
  const notMobile = useMediaQuery({ minWidth: 768});
  return notMobile ? children : null;
};
export { NotMobile };
