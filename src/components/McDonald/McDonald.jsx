import ProductCart from 'components/ProductCart/ProductCart';
import { ProductContainer, ProductList } from './McDonald.styled';

const McDonald = ({ handleClick, shops }) => {
  const filteredProducts = shops.filter(item => item.link === 'mc');

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

export default McDonald;
