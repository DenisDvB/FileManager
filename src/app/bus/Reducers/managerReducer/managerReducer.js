// manager API
import { managerAPI } from '../../../api/rest';
// type
const GET_ROOT_STRUCTURE = 'GET_ROOT_STRUCTURE';
const GET_STRUCTURE_ADDITION = 'GET_STRUCTURE_ADDITION';
const ERROR = 'ERROR';

// initialState
let initialState = {
  content: null,
  error: null,
};

// reducer
export const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOT_STRUCTURE:
      return {
        ...state,
        content: action.data,
      };
    case GET_STRUCTURE_ADDITION:
      let stateCopy = { ...state };
      stateCopy.content = { ...state.content };
      let childrenFirst = action.data;
      stateCopy.content.children.filter((firstSection, a) => {
        if (firstSection.id === childrenFirst.id) {
          stateCopy.content.children[a] = { ...childrenFirst };
        }
        if (
          firstSection.children !== undefined &&
          firstSection.children.length !== 0
        ) {
          firstSection.children.filter((secondSection, b) => {
            if (secondSection.id === childrenFirst.id) {
              stateCopy.content.children[a].children[b] = { ...childrenFirst };
            }
            if (
              secondSection.children !== undefined &&
              secondSection.children.length !== 0
            ) {
              secondSection.children.filter((thirdSection, c) => {
                if (thirdSection.id === childrenFirst.id) {
                  stateCopy.content.children[a].children[b].children[c] = {
                    ...childrenFirst,
                  };
                }
                return stateCopy;
              });
            }
            return stateCopy;
          });
        }
        return stateCopy;
      });
      return stateCopy;
    case ERROR:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};

// action creator
export const listOfRootStructure = (content) => ({
  type: GET_ROOT_STRUCTURE,
  data: content,
});
export const listOfAdditionsFirst = (content) => ({
  type: GET_STRUCTURE_ADDITION,
  data: content,
});
export const getErrorInfo = (error) => ({
  type: ERROR,
  data: error,
});

// thunk get root structure
export const getRootStructure = (content) => (dispatch) => {
  managerAPI
    .getRootStructure(content)
    .then((response) => {
      if (response.status === 200) {
        dispatch(listOfRootStructure(response.data));
      }
    })
    .catch((error) => {
      console.log('Request error: ', error.response.data.message);
    });
};
// thunk get root structure
export const getStructureAdditionFirst = (id) => (dispatch) => {
  managerAPI
    .getStructureAddition(id)
    .then((response) => {
      if (response.status === 200) {
        dispatch(listOfAdditionsFirst(response.data, id));
      }
    })
    .catch((error) => {
      console.log('Request error: ', error.response.data.message);
    });
};
