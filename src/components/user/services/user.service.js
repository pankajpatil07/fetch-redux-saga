import get from 'lodash/get';
import axios from 'axios';

const _ = {  get };

export async function getUser(payload) {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (response.status === 200) {
        return {
          message: 'Success',
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          message: "ERR_MSG_SOMETHING_WENT_WRONG",
          data: '',
          error: ''
        };
      }
    });
}