export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';

export function requestUserList(payload, fields) {
  return {
    type: USER_REQUEST,
    payload: { ...payload, fields }
  };
}