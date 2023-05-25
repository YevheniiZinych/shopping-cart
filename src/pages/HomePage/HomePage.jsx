import { Title, HomeContainer, StyledLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <HomeContainer>
        <Title>Welcome to the FLASH delivery</Title>
        <div>
          <StyledLink to="shop"> Lets start</StyledLink>
        </div>
      </HomeContainer>
    </main>
  );
};

export default HomePage;
