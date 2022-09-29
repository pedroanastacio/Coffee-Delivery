import styled from 'styled-components'

export const HomeContainer = styled.main`
  &::before {
    content: '';

    position: absolute;
    left: 0;
    right: 0;

    height: 34rem;

    background: transparent url('/src/assets/intro-blur-bg.png') no-repeat
      center;
    background-size: cover;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  padding: 5.5rem 0;

  h1 {
    color: ${(props) => props.theme['base-title']};

    font-size: 3rem;
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.25rem;
    line-height: 1.3;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > div {
      align-items: center;
    }

    h1,
    p {
      text-align: center;
    }

    img {
      max-width: 29.75rem;
    }
  }

  @media only screen and (max-width: 576px) {
    img {
      max-width: 90vw;
    }
  }
`
export const IntroList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;

  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const IntroItem = styled.span`
  color: ${($props) => $props.theme['base-text']};

  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const CoffeeList = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};

    font-weight: 800;
    font-size: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 2.5rem;
    column-gap: 2rem;

    li {
      height: 100%;
      width: 100%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 992px) {
    ul {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media only screen and (max-width: 576px) {
    ul {
      grid-template-columns: 1fr;

      li {
        max-width: 30rem;
      }
    }
  }
`
