// instruments
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// global components
import { FlexWrapper, Icon, Subtitle } from '../../../../../components';
// assets
import arrowShow from '../../../../../../assets/arrowShow.png';
import arrowHide from '../../../../../../assets/arrowHide.png';
import fileIcon from '../../../../../../assets/fileIcon.png';
// reducer
import { getStructureAdditionFirst } from '../../../../Reducers/managerReducer/managerReducer';
// additions
import { FirstSection } from './FirstSection';
import { LoaderWaiting } from '../../../../../components/LoaderWaiting/LoaderWaiting';

export const RootSection = ({ content, rootSection }) => {
  const [isFirst, setIsFirst] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [typeArrow, setTypeArrow] = useState(arrowShow);
  const dispatch = useDispatch();

  const sendRequest = (index) => {
    if (!isDetail) {
      dispatch(getStructureAdditionFirst(index));
      setIsDetail(true);
      setTypeArrow(arrowHide);
    }
    if (isDetail) {
      setIsDetail(false);
      setTypeArrow(arrowShow);
    }
  };

  useEffect(() => {
    if (rootSection !== null) {
      setIsFirst(
        rootSection.children.map((firstSection) => (
          <FirstSection
            key={firstSection.id}
            content={content}
            firstSection={firstSection}
          />
        ))
      );
    }
    return;
  }, [rootSection, content]);

  return (
    <>
      <FlexWrapper
        width="90%"
        height="100%"
        jContent="flex-start"
        pointer
        onClick={() => sendRequest(rootSection.id)}
      >
        {rootSection.children !== undefined ? (
          <Icon bg={typeArrow} pointer />
        ) : null}
        <Icon bg={fileIcon} margin="0 0 0 var(--margin-m)" pointer />
        <Subtitle padding="0 var(--padding-m)" pointer>
          {rootSection.title}
        </Subtitle>
      </FlexWrapper>

      {isDetail === true && isFirst.length === 0 ? (
        <LoaderWaiting />
      ) : isDetail === true && isFirst.lenth !== 0 ? (
        <>{isFirst}</>
      ) : null}
    </>
  );
};
