import { ActionTypes } from "../action-types";
import { packageDataType } from "../action-types";

interface SearchPackages {
  type: ActionTypes.SEARCH_PACKAGES;
}
interface SearchPackagesSuccess {
  type: ActionTypes.SEARCH_PACKAGES_SUCCESS;
  payload: packageDataType[];
}
interface SearchPackagesError {
  type: ActionTypes.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchPackages
  | SearchPackagesSuccess
  | SearchPackagesError;
