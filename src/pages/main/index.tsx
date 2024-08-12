import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/resume");
  }, []);

  return <div>main</div>;
};
