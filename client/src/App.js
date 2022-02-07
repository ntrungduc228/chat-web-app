import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redux/actions/postAction";
import RoutesComponent from "./components/Routes/RoutesComponent";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const data = useSelector((state) => state.posts.data2);
  const requesting = useSelector((state) => state.posts.requesting);

  console.log("check data", data, requesting);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
}

export default App;
