import ProductCart from 'components/ProductCart/ProductCart';
import products from 'products';
import { McContainer, McList } from './McDonald.styled';

const McDonald = ({ handleClick }) => {
  return (
    <McContainer>
      <McList>
        {products?.map(product => (
          <ProductCart
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </McList>
    </McContainer>
  );
};

export default McDonald;
