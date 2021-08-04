// global components
import { FlexWrapper } from '../../../components';
// additions
import { ListOfFiles } from './Additions/ListOfFiles/ListOfFiles';

export const Main = ({ content }) => {
  return (
    <>
      <FlexWrapper width="100%" height="92%" position="relative">
        <FlexWrapper
          width="30%"
          height="95%"
          position="absolute"
          left="2em"
          padding="var(--padding-xl) 0"
          background="var(--color-bg-ghost)"
          bShadow="var(--shadow-addition-middle)"
          bRadius="var(--radius-m)"
        >
          <ListOfFiles content={content} />
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
