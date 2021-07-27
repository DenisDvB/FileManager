import styled from 'styled-components';

export const Subtitle = styled.div`
  font-size: ${(props) => props.fSize || 'var(--subtitle-fz-middle)'};
  font-weight: ${(props) => props.fWeight || 'normal'};
  letter-spacing: ${(props) => props.lSpasing || '2px'};
  line-height: ${(props) => props.lHeight || ''};
  text-align: ${(props) => props.tAlign || 'center'};
  margin: ${(props) => props.margin || 'none'};
  padding: ${(props) => props.padding || 'none'};
  color: ${(props) => props.color || 'var(--color-subtitle-default)'};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'auto')};
  white-space: ${(props) => (props.nowrap ? 'nowrap' : 'normal')};
  transition: all 0.4s;

  animation: ${(props) => props.animation || 'none'} 3s forwards;
`;
