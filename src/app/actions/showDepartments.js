import axios from "axios";

import {
  FetchDepratmentAttemp,
  FetchDepartmentFail,
  FetchDepartmentSuccess
} from "./types";

export const FetchDepartments = dispatch => {
  dispatch({ type: FetchDepratmentAttemp });
  axios
    .get("http://trust.shobeek-lobeek.com/api/departments")
    .then(res =>
      dispatch({ type: FetchDepartmentSuccess, payload: res.data.data })
    )
    .catch(e => dispatch({ type: FetchDepartmentFail }));
};
