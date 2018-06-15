import { GET_CANDIDATES, SORT_CANDIDATES, FILTER_CANDIDATES, UPDATE_CANDIDATE_STATUS } from '../actions/actionTypes.js';

const initialState = {
  candidates: [{id:0, name: "", years_exp: '', status: "", date_applied: ""}],
  sort:{parameter: "none", order:"none"},
  filter:"All"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: action.value.candidates
      }
    case SORT_CANDIDATES:
      return {
        ...state,
        candidates: action.value.candidates,
        sort: action.value.sorted
      }
    case FILTER_CANDIDATES:
      return{
        ...state,
        filter: action.value
      }
    case UPDATE_CANDIDATE_STATUS:
      return{
        ...state,
        candidates: [...state.candidates.slice(0, action.value.index), action.value.candidate, ...state.candidates.slice(action.value.index+1, state.candidates.length)]
      }
    default:
      return state;
  }
};

export default reducer;
