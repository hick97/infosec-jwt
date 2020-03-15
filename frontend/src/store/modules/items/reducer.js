import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  loading: false,
};

export default function items(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@items/GET_ALL_ITEMS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@items/GET_ALL_ITEMS_SUCCESS': {
        console.tron.log(JSON.stringify(action.payload.data));
        draft.loading = false;
        draft.items = action.payload.data.itens;
        break;
      }
      case '@items/GET_ITEMS_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
