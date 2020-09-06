export const SET_CURRENT_USER = '[USER] Set Current User';

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
});
