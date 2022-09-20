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
    justify-content: space-between;
  }
`
export const IntroList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  gap: 1.25rem 2.5rem;
  padding: 1rem 0;
`

interface IntroItemProps {
  iconVariant: 'yellow' | 'yellow-dark' | 'base-text' | 'purple'
}

export const IntroItem = styled.span<IntroItemProps>`
  color: ${($props) => $props.theme['base-text']};

  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 9999px;

    width: 2rem;
    height: 2rem;

    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[`${props.iconVariant}`]};
  }
`

export const CoffeeList = styled.div`
  padding: 2rem 0;

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
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`
