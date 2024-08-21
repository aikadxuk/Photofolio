import styled, { keyframes } from "styled-components";

const OpeningWrapperContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
`;

const LeftOpening = keyframes`
    0%{
        left: 0;
    }
    100%{
        left: -100%;
    }
`;

const RightOpening = keyframes`
    0%{
        right: 0;
    }
    100%{
        right: -100%;
    }
`;

const OpeningRightBlock = styled.div`
  width: 50%;
  background-color: var(--black);
  z-index: 1000;
  top: 0;
  height: 100%;
  position: absolute;
  animation: ${RightOpening} 7s forwards;
  right: 0;
  border-left: 1px solid var(--white);
`;

const OpeningLeftBlock = styled.div`
  width: 50%;
  background-color: var(--black);
  z-index: 1000;
  top: 0;
  height: 100%;
  position: absolute;
  animation: ${LeftOpening} 7s forwards;
  left: 0;
  border-right: 1px solid var(--white);
`;

function Animation(Component) {
  function WrappedComponent(props) {
    return (
      <OpeningWrapperContainer>
        <OpeningRightBlock />
        <OpeningLeftBlock />
        <Component {...props} />
      </OpeningWrapperContainer>
    );
  }

  WrappedComponent.displayName = `Animation(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
}

export default Animation;
