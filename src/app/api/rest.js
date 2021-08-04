/* eslint-disable no-return-await */
import axios from 'axios';
// ROOT_URL
import { ROOT_URL } from './index';

// manager API
export const managerAPI = {
  getRootStructure() {
    return axios.get(`http://${ROOT_URL}api/content`, {
      headers: {
        dirId: 0,
      },
    });
  },
  getStructureAddition(id) {
    return axios.get(`http://${ROOT_URL}api/content?dirId=${id}`, {
      headers: {
        dirId: id,
      },
    });
  },
};
