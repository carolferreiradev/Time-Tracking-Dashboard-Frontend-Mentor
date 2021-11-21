import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: var(--text);

  @media (max-width: 896px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }
`;

export const Profile = styled.article`
  width: 250px;
  background: var(--background-second);
  margin-right: 24px;

  border-radius: 18px;

  height: 500px;

  @media (max-width: 1104px) {
    width: 250px;
  }
  @media (max-width: 951px) {
    margin-right: 12px;
  }
  @media (max-width: 896px) {
    margin-bottom: 24px;
    margin-top: 2rem;
    border-radius: 18px;
    height: 200px;
    width: 80%;
  }
`;

export const ProfileContainer = styled.div`
  height: 500px;

  @media (max-width: 896px) {
    height: 200px;
  }
`;

export const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  border: 3px solid var(--text);
  margin-bottom: 2rem;
  margin-right: 24px;

  @media (max-width: 896px) {
    margin-bottom: 0rem;
    margin-right: 6px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ProfileHeader = styled.section`
  border-radius: 18px;
  background: var(--background-tertiary);
  padding: 24px;
  height: 60%;

  @media (max-width: 896px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
  }
`;

export const ProfileDescription = styled.div`
  p {
    font-weight: 300;
    font-size: 0.8rem;
  }

  h1 {
    font-weight: 300;
    font-size: 2.2rem;
    letter-spacing: 1px;
    color: white;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 896px) {
    h1 {
      font-size: 1.3rem;
      display: flex;
      flex-direction: row;
      span:nth-child(1) {
        margin-right: 2px;
      }
    }
  }
`;

export const ProfileMenu = styled.ul`
  padding: 24px;
  li {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: white;
    }
  }
  li:nth-child(2) {
    margin: 12px 0;
  }

  @media (max-width: 896px) {
    display: flex;
    justify-content: space-between;

    li:nth-child(2) {
      margin: 0;
    }
  }
`;

export const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 951px) {
    gap: 12px;
  }
  @media (max-width: 896px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

export const Card = styled.div`
  height: 238px;
  width: 250px;
  border-radius: 18px;
  position: relative;

  &.work-styled {
    background: var(--light-orange);
  }
  &.play-styled {
    background: var(--light-blue);
  }
  &.study-styled {
    background: var(--light-red);
  }
  &.exercise-styled {
    background: var(--light-green);
  }
  &.social-styled {
    background: var(--light-purple);
  }
  &.self-care-styled {
    background: var(--light-yellow);
  }

  @media (max-width: 951px) {
    height: 245px;
  }
  @media (max-width: 1104px) {
    width: 200px;
  }
  @media (max-width: 896px) {
    height: 180px;
    width: 100%;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 12px;
  }
`;

export const CardContent = styled.section`
  background: var(--background-second);
  bottom: 0px;
  border-radius: 16px;
  width: 100%;
  height: 80%;
  position: absolute;
  transition: background 0.2s;
  &:hover {
    cursor: pointer;
    background: hsl(235, 46%, 25%);
  }
`;
export const CardContentDescription = styled.div`
  span,
  p {
    padding: 24px;
  }

  span {
    font-size: 2.4rem;
    font-weight: 400;
  }
  p {
    font-size: 0.8rem;
  }

  @media (max-width: 896px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 5%;
    width: 100%;
    span {
      font-size: 2rem;
      font-weight: 400;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
export const CardContentHeader = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  button {
    background: transparent;
    color: var(--text);
    border: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
