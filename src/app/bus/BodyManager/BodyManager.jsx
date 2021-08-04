// global components
import { FlexWrapper } from '../../components';
// additions
import { Header } from './Header/Header';
import MainContainer from './Main/MainContainer';

export const BodyManager = () => {
  return (
    <>
      <FlexWrapper width="100%" height="100%" fDirection="column">
        <Header />
        <MainContainer />
      </FlexWrapper>
    </>
  );
};
