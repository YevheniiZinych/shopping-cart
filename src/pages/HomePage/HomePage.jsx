import { Title, HomeContainer, StyledLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <HomeContainer>
        <Title>Welcome to the FLASH delivery</Title>
        <StyledLink to="shop">
          <span>Lets start</span>
        </StyledLink>
      </HomeContainer>
    </main>
  );
};

export default HomePage;
