import styled from 'styled-components';

export const GridWrapper = styled.div`
  position: ${(props) => props.position || 'initial'};
  display: grid;
  width: ${(props) => props.width || '100vw'};
  height: ${(props) => props.height || '100vh'};
  overflow: ${(props) => props.oHidden || 'auto'};
  overflow-y: ${(props) => props.oHiddenY || 'auto'};
  overflow-x: ${(props) => props.oHiddenX || 'auto'};
  padding: ${(props) => props.padding || 'none'};
  grid-gap: ${(props) => props.gGap || 'none'};
  grid-template-columns: ${(props) => props.gTColumns || 'none'};
  grid-auto-rows: ${(props) => props.gARows || 'none'};
  grid-template-rows: ${(props) => props.gTRows || 'none'};
  grid-auto-flow: ${(props) => props.gAFlow || 'none'};
  align-items: ${(props) => props.aItems || 'center'};
  justify-items: ${(props) => props.jItems || 'center'};
  background: ${(props) => props.background || 'none'};
  backdrop-filter: ${(props) => props.bDrop || 'none'};
  border-radius: ${(props) => props.bRadius || 'none'};
  box-shadow: ${(props) => props.bShadow || 'none'};
  border-bottom: ${(props) => props.borderB || 'none'};
`;
