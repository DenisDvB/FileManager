// global components
import { FlexWrapper, Subtitle } from '../index';
import { loaderText } from '../keyFrames';

export const Loader = () => {
  return (
    <>
      <FlexWrapper
        width="100vw"
        height="100vh"
        background="linear-gradient(45deg, rgba(2,0,28,1) 0%, rgba(0,0,41,1) 50%, rgba(52,46,103,1) 100%)"
      >
        <Subtitle fSize="var(--subtitle-fz-main)" animation={loaderText}>
          Structure file manager
        </Subtitle>
      </FlexWrapper>
    </>
  );
};
