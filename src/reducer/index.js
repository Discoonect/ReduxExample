import * as Constants from '../constants';
import i18n from '../i18n';

const initialState = {
  value: '',
  language: 'vn',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.UPDATE_VALUE:
      return {...state, value: action.value};
    case Constants.CLEAR_VALUE:
      return {...state, value: initialState.value};
    case Constants.CHANGE_LANGUAGE:
      i18n.locale = action.language;
      return {...state, language: action.language};
    default:
      return state;
  }
};
