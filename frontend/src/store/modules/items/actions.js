export function getAllItemsRequest() {
  return {
    type: '@items/GET_ALL_ITEMS_REQUEST',
  };
}
export function getAllItemsSuccess(data) {
  return {
    type: '@items/GET_ALL_ITEMS_SUCCESS',
    payload: { data },
  };
}
export function getAllItemsFailure() {
  return {
    type: '@items/GET_ITEMS_FAILURE',
  };
}
