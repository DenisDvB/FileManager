import { FlexWrapper } from '../FlexWrapper';
import { loaderText } from '../keyFrames';
import { Subtitle } from '../Subtitle';

export const Loader = () => (
  <FlexWrapper
    width="100vw"
    height="100vh"
    background="linear-gradient(45deg, rgba(2,0,28,1) 0%, rgba(0,0,41,1) 50%, rgba(52,46,103,1) 100%)"
    animation={loaderText}
  >
    <Subtitle fSize="var(--subtitle-fz-main)" animation={loaderText}>
      Test-task "File Manager"
    </Subtitle>
  </FlexWrapper>
);
