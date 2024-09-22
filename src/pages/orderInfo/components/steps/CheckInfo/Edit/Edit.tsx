import { useLocation } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>Edit</div>;
};

export default Edit;
