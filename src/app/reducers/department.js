import {
  FetchDepratmentAttemp,
  FetchDepartmentSuccess,
  FetchDepartmentFail
} from "../actions/types";

const initialState = {
  loading: false,
  departments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FetchDepratmentAttemp:
      return { ...state, loading: true };
    case FetchDepartmentSuccess:
      return { ...state, loading: false, departments: action.payload };
    case FetchDepartmentFail:
      return { ...state, loading: false };

    default:
      return state;
  }
};
