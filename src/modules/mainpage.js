//------- 액션 타입 작성-----------------

//------- 액션 함수 작성-----------------

//------- 초기 상태 작성-----------------
const initialState = {
  storeDistance: [],
};
//------- 리듀서 작성-----------------

function mainpageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DISTANCE_LIST_SUCCESS":
      return { ...state, storesDistance: payload.data };
    default:
      return { ...state };
  }
}
export default mainpageReducer;
