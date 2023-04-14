import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;

  &:before {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const SpinnerFrame = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  padding: 10px;
`;

export const SpinnerCover = styled.div`
  background: ${({ theme }) => theme.color.background.default};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;

export const SpinnerBar = styled.div`
  background: #29d;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100% 0 0;
  -webkit-animation: spinny 2s linear infinite;
  transform-origin: 100% 100%;

  @-webkit-keyframes spinny {
    0% {
      transform: rotate(0deg);
      background: ${({ theme }) => theme.color.secondary.main};
    }
    50% {
      transform: rotate(180deg);
      background: ${({ theme }) => theme.color.secondary.main};
    }
    100% {
      transform: rotate(360deg);
      background: ${({ theme }) => theme.color.secondary.main};
    }
  }
`;
