import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000075;
  z-index: 9999;
`;

export const ModalWindows = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  display: block;
  width: 80vw;
  height: 90vh;
  object-fit: cover;
`;
