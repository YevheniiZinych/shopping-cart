import {
  ProductContainer,
  ProductList,
} from 'components/McDonald/McDonald.styled';
import ProductCart from 'components/ProductCart/ProductCart';

const Mafia = ({ handleClick, shops }) => {
  const filteredProducts = shops?.filter(item => item.link === 'mafia');

  const products = filteredProducts.reduce((acc, item) => {
    return (acc = item.menu);
  }, []);

  return (
    <ProductContainer>
      <ProductList>
        {products?.map(product => (
          <ProductCart
            key={product._id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ProductList>
    </ProductContainer>
  );
};

export default Mafia;
