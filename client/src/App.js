import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redux/actions/postAction";
import RoutesComponent from "./components/Routes/RoutesComponent";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "17px" }}
      />
    </div>
  );
}

export default App;
