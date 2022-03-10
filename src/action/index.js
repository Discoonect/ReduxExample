import * as Constants from '../constants';

export const updateValue = value => ({
  type: Constants.UPDATE_VALUE,
  value: value,
});
export const clearValue = () => ({type: Constants.CLEAR_VALUE});
export const changeLanguage = language => ({
  type: Constants.CHANGE_LANGUAGE,
  language: language,
});
