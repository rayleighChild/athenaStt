import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SAVE_AUDIO = "audio/SAVE";
const GET_AUDIO = "audio/GET";

export const saveAudio = createAction(SAVE_AUDIO);
export const getAudio = createAction(GET_AUDIO);

const initialState = {
  audio: {
    id: 0,
    title: "",
    filename: "",
    content: "" //문장 단위 index와 시간, 내용 등
  }
};

export default handleActions(
  {
    [SAVE_AUDIO]: (state, action) => {
      produce(state, draft => {});
    },
    [GET_AUDIO]: (state, action) => (
      produce(state, draft => {
        state['audio'] = action.payload;
        console.log(action.payload);
      })
    )
  },
  initialState
);
