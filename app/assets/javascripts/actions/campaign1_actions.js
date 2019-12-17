import {
  GET_CAMPAIGN,
  API_FAIL
} from '../constants';
import logErrorMessage from '../utils/log_error_message';
import request from '../utils/request';

const getCampaignPromise = (slug) => {
  console.log('getCampaignpromise function');
  return request(`/campaigns/${slug}.json`)
    .then((res) => {
      if (res.ok && res.status === 200) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((error) => {
      logErrorMessage(error);
      return error;
    });
};

export const getCampaign = slug => (dispatch) => {
  console.log('getcampaign function');
  return (
    getCampaignPromise(slug)
      .then((resp) => {
        dispatch({
          type: GET_CAMPAIGN,
          data: resp
        });
      })
      .catch(response => dispatch({ type: API_FAIL, data: response }))
  );
};
