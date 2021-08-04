// instruments
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
// additions
import { SecondSection } from './SecondSection';
import { LoaderWaiting } from '../../../../../components/LoaderWaiting/LoaderWaiting';

export const FirstSection = ({ content, firstSection }) => {
  const [isSecond, setIsSecond] = useState([]);
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
    if (firstSection.children !== undefined && firstSection !== null) {
      setIsSecond(
        firstSection.children.map((secondSection) => (
          <SecondSection
            key={secondSection.id}
            content={content}
            secondSection={secondSection}
          />
        ))
      );
    }
    return;
  }, [content, firstSection]);

  return (
    <>
      <FlexWrapper
        width="80%"
        height="100%"
        jContent="flex-start"
        pointer
        onClick={() => sendRequest(firstSection)}
      >
        {firstSection.children !== undefined ? (
          <Icon bg={typeArrow} pointer />
        ) : null}

        {firstSection.title.includes('.zip') ? (
          <Icon bg={zipIcon} pointer />
        ) : firstSection.title.includes('.jpg') ? (
          <Icon bg={ipgIcon} pointer />
        ) : firstSection.title.includes('.epub') ? (
          <Icon bg={epubIcon} pointer />
        ) : (
          <Icon bg={fileIcon} margin="0 0 0 var(--margin-m)" pointer />
        )}
        <Subtitle padding="0 var(--padding-m)" pointer>
          {firstSection.title}
        </Subtitle>
      </FlexWrapper>

      {isDetail === true && isSecond.length === 0 ? (
        <LoaderWaiting />
      ) : isDetail === true && isSecond.lenth !== 0 ? (
        <>{isSecond}</>
      ) : null}
    </>
  );
};
