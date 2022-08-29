import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <h1>This is homepage content rendering</h1>
    </>
  );
};

export default Homepage;
