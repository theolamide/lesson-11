import { createSelector } from 'reselect';

const selectUser = state => state.user; //this is an input selector


export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)