import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 3;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 1000px) {
    --columns: 2;
  }
  @media (max-width: 800px) {
    --columns: 1;
  }
  div {
    animation: 0.8s ease-out 0s 1 scaleIn;
    @keyframes scaleIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    :hover {
      transform: scale(1.05);
    }
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

// Single Grid Item (for home page)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    height: auto;
    font-size: 0;
  }
  p {
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
