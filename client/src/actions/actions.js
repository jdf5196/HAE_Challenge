import { GET_CANDIDATES, SORT_CANDIDATES, FILTER_CANDIDATES, UPDATE_CANDIDATE_STATUS } from './actionTypes';

export const getCandidates = (candidates)=>({
    type: GET_CANDIDATES,
    value: candidates
});
export const sortCandidates = (candidates)=>({
    type: SORT_CANDIDATES,
    value: candidates
});
export const filterCandidates = (filterType)=>({
    type: FILTER_CANDIDATES,
    value: filterType
});
export const updateCandidateStatus = (candidate, index)=>({
    type: UPDATE_CANDIDATE_STATUS,
    value: {candidate: candidate, index: index}
})