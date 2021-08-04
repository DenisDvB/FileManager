import styled from 'styled-components';

export const Icon = styled.div`
  background: url(${(props) => (props.bg ? props.bg : '#bf9063')}) no-repeat
    center / contain;
  width: ${(props) => props.width || 'var(--width-mini-icon)'};
  height: ${(props) => props.height || 'var(--height-mini-icon)'};
  margin: ${(props) => props.margin || 'none'};
  overflow: hidden;
  box-shadow: ${(props) => props.bShadow || 'none'};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'auto')};
  :hover {
    transition: all 0.4s;
    box-shadow: none;
  }
`;
