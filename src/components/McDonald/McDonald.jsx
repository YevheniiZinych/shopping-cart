import img from '../../img/burger.jpeg';
const products = [
  { id: 'h-1', name: 'Big Mac', img: '../../img/burger.jpeg' },
  { id: 'h-2', name: 'Cheeseburger', img: '../../img/burger.jpeg' },
  { id: 'h-3', name: 'Double Cheeseburger', img: '../../img/burger.jpeg' },
  { id: 's-1', name: 'Hamburger', img: '../../img/burger.jpeg' },
];

const McDonald = () => {
  return (
    <div>
      <ul>
        {products?.map(({ id, name }) => {
          return (
            <li key={id}>
              <article>
                <figure>
                  <img src={img} alt={name} loading="lazy" width={150} />
                  <figcaption>{name}</figcaption>
                </figure>
              </article>
              <button>Add to card</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default McDonald;
