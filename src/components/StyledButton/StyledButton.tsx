import { styled } from "@mui/system";
import theme from "../../theme";

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

  const StyledButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    ":hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main
    }
  }))

  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default StyledButton;