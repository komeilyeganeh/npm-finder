import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { packageDataType } from "../action-types";

interface SearchState {
  loading: boolean;
  error: string | null;
  data: packageDataType[];
}

const initialState: SearchState = {
  loading: false,
  error: "",
  data: [],
};

const reducer = (
  state: SearchState = initialState,
  action: Action
): SearchState => {
  switch (action.type) {
    case ActionTypes.SEARCH_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
