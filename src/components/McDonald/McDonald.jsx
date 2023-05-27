import ProductCart from 'components/ProductCart/ProductCart';
import products from 'products';
import { ProductContainer, ProductList } from './McDonald.styled';

const McDonald = ({ handleClick }) => {
  return (
    <ProductContainer>
      <ProductList>
        {products?.map(product => (
          <ProductCart
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ProductList>
    </ProductContainer>
  );
};

export default McDonald;
