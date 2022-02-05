import { useEffect } from "react";
import Loadable from "react-loadable";
import Spinner from "../Spinner";

function CustomLoadable(opts) {
  let CustomLoader = Loadable(
    Object.assign(
      {
        loading: Spinner,
        delay: 200,
        timeout: 10000,
      },
      opts
    )
  );
  return <CustomLoader />;
}
export default CustomLoadable;
