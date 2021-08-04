// global components
import { FlexWrapper, Subtitle } from '../../../components';

export const Header = () => {
  return (
    <>
      <FlexWrapper
        position="relative"
        width="100%"
        height="8%"
        jContent="flex-start"
        background="var(--color-bg-ghost)"
        bShadow="var(--shadow-addition-middle)"
      >
        <FlexWrapper>
          <Subtitle padding="0 0 0 var(--padding-xl)" fWeight="bold">
            Digital Habits.
          </Subtitle>
          <Subtitle fWeight="bold">Entrance test.</Subtitle>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
