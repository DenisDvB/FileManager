// instruments
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
// reducer
import { getRootStructure } from '../../Reducers/managerReducer/managerReducer';
// additions
import { Main } from './Main';

const MainContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.content === null) {
      dispatch(getRootStructure());
    }
  }, [dispatch, props.content]);

  return <Main content={props.content} />;
};

let mapStateToProps = (state) => {
  return {
    content: state.managerStore.content,
  };
};
export default connect(mapStateToProps)(MainContainer);
