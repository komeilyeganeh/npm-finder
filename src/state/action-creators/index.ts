import axios from "axios";
import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchPackages =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_PACKAGES,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const packagesList = data.objects.map((item: any) => {
        return { name: item.package.name, link: item.package.links.npm };
      });
      dispatch({
        type: ActionTypes.SEARCH_PACKAGES_SUCCESS,
        payload: packagesList,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SEARCH_PACKAGES_ERROR,
        payload: (err as Error).message,
      });
    }
  };
