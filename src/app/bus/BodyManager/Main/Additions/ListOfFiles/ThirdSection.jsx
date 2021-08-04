// global components
import { FlexWrapper, Icon, Subtitle } from '../../../../../components';
// assets
import fileIcon from '../../../../../../assets/fileIcon.png';
import zipIcon from '../../../../../../assets/zipIcon.png';
import epubIcon from '../../../../../../assets/epubIcon.png';
import ipgIcon from '../../../../../../assets/ipgIcon.png';

export const ThirdSection = ({ thirdSection }) => {
  return (
    <>
      <FlexWrapper
        width="60%"
        height="100%"
        jContent="flex-start"
      >
        {thirdSection.title.includes('.zip') ? (
          <Icon bg={zipIcon} pointer />
        ) : thirdSection.title.includes('.jpg') ? (
          <Icon bg={ipgIcon} pointer />
        ) : thirdSection.title.includes('.epub') ? (
          <Icon bg={epubIcon} pointer />
        ) : (
          <Icon bg={fileIcon} pointer margin="0 0 0 var(--margin-m)" />
        )}
        <Subtitle padding="0 var(--padding-m)" pointer>
          {thirdSection.title}
        </Subtitle>
      </FlexWrapper>
    </>
  );
};
