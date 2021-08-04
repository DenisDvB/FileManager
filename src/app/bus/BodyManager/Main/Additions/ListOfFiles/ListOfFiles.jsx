// global components
import { useEffect, useState } from 'react';
import { GridWrapper } from '../../../../../components';
import { LoaderWaiting } from '../../../../../components/LoaderWaiting/LoaderWaiting';
import { RootSection } from './RootSection';

export const ListOfFiles = ({ content }) => {
  const [isRoot, setRoot] = useState([]);

  useEffect(() => {
    if (content !== null) {
      setRoot(
        content.children.map((rootSection) => (
          <RootSection
            key={`${rootSection.id}`}
            content={content}
            rootSection={rootSection}
          />
        ))
      );
    }
    return;
  }, [content]);

  return (
    <>
      {isRoot.length === 0 ? (
        <>
          <LoaderWaiting />
        </>
      ) : (
        <>
          <GridWrapper
            width="100%"
            height="100%"
            gARows="max-content"
            gGap="var(--grid-gap-middle)"
          >
            {isRoot}
          </GridWrapper>
        </>
      )}
    </>
  );
};
