import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #eee;

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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 5px solid #fff;
  padding: 10px;
`;

export const SpinnerCover = styled.div`
  background: #fff;
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
  border-radius: 100% 0 0 0;
  -webkit-animation: spinny 2s linear infinite;
  transform-origin: 100% 100%;

  @-webkit-keyframes spinny {
    0% {
      transform: rotate(0deg);
      background: #29d;
    }
    50% {
      transform: rotate(180deg);
      background: #00427c;
    }
    100% {
      transform: rotate(360deg);
      background: #29d;
    }
  }
`;
