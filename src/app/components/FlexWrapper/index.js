import styled from 'styled-components';

export const FlexWrapper = styled.div`
  position: ${(props) => props.position || 'initial'};
  display: flex;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || 'none'};
  top: ${(props) => props.top || 'none'};
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  bottom: ${(props) => props.bottom || 'none'};
  background: ${(props) => props.background || 'none'};
  overflow: ${(props) => props.overflow || 'hidden'};
  flex-direction: ${(props) => props.fDirection || 'row'};
  justify-content: ${(props) => props.jContent || 'center'};
  align-items: ${(props) => props.aItems || 'center'};
  flex-wrap: ${(props) => props.fWrap || 'nowrap'};
  padding: ${(props) => props.padding || 'none'};
  box-shadow: ${(props) => props.bShadow || 'none'};
  backdrop-filter: ${(props) => props.bDrop || 'none'};
  border: ${(props) => props.border || 'none'};
  z-index: ${(props) => props.zIndex || 'auto'};
  border-radius: ${(props) => props.bRadius || 'none'};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'auto')};
  transition: all 0.6s;
  transform: ${(props) => props.translate || 'none'};
`;
