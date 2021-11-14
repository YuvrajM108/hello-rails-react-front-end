import axios from 'axios';

const GET_GREETING = 'greeting/message/GET_GREETING';

const initialState = {
  message: '',
}

const requestURL = 'http://hello-rails-react-ym108.herokuapp.com/api/greetings';

export const getGreeting = () => async (dispatch) => {
  const res = await axios.get(requestURL);
  const messages = res.data;
  const messageArr = [];
  let randomMsg = '';
  if(messages) {
    messages.forEach((obj) => {
      const messageText = obj.message;
      messageArr.push(messageText);
    });
    let idx = Math.floor(Math.random() * messageArr.length);
    randomMsg = messageArr[idx];
  }
  dispatch({
    type: GET_GREETING,
    payload: randomMsg,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        message: action.payload,
      }
    default:
      return state;
  }
};
  
export default reducer;
