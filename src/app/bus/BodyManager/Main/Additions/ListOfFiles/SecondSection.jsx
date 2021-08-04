import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// global components
import { FlexWrapper, Icon, Subtitle } from '../../../../../components';
// assets
import arrowShow from '../../../../../../assets/arrowShow.png';
import arrowHide from '../../../../../../assets/arrowHide.png';
import fileIcon from '../../../../../../assets/fileIcon.png';
import zipIcon from '../../../../../../assets/zipIcon.png';
import epubIcon from '../../../../../../assets/epubIcon.png';
import ipgIcon from '../../../../../../assets/ipgIcon.png';
// reducer
import { getStructureAdditionFirst } from '../../../../Reducers/managerReducer/managerReducer';
import { ThirdSection } from './ThirdSection';
import { LoaderWaiting } from '../../../../../components/LoaderWaiting/LoaderWaiting';

export const SecondSection = ({ content, secondSection }) => {
  const [isThird, setIsThird] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [typeArrow, setTypeArrow] = useState(arrowShow);
  const dispatch = useDispatch();

  const sendRequest = (index) => {
    if (!isDetail && index.children !== undefined) {
      dispatch(getStructureAdditionFirst(index.id));
      setIsDetail(true);
      setTypeArrow(arrowHide);
    }
    if (isDetail) {
      setIsDetail(false);
      setTypeArrow(arrowShow);
    }
  };

  useEffect(() => {
    if (secondSection.children !== undefined && secondSection !== null) {
      setIsThird(
        secondSection.children.map((thirdSection) => (
          <ThirdSection
            key={thirdSection.id}
            content={content}
            thirdSection={thirdSection}
          />
        ))
      );
    }
    return;
  }, [content, secondSection]);

  return (
    <>
      <FlexWrapper
        width="70%"
        height="100%"
        jContent="flex-start"
        pointer
        onClick={() => sendRequest(secondSection)}
      >
        {secondSection.children !== undefined ? (
          <Icon bg={typeArrow} pointer />
        ) : null}

        {secondSection.title.includes('.zip') ? (
          <Icon bg={zipIcon} pointer />
        ) : secondSection.title.includes('.jpg') ? (
          <Icon bg={ipgIcon} pointer />
        ) : secondSection.title.includes('.epub') ? (
          <Icon bg={epubIcon} pointer />
        ) : (
          <Icon bg={fileIcon} margin="0 0 0 var(--margin-m)" pointer />
        )}

        <Subtitle padding="0 var(--padding-m)" pointer>
          {secondSection.title}
        </Subtitle>
      </FlexWrapper>

      {isDetail === true && isThird.length === 0 ? (
        <LoaderWaiting />
      ) : isDetail === true && isThird.lenth !== 0 ? (
        <>{isThird}</>
      ) : null}
    </>
  );
};
