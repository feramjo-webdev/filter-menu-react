import menu from './data';

const Categories = ({ filterMenu }) => {
  const uniqueCategories = [
    'all',
    ...new Set(menu.map(({ category }) => category)),
  ];
  return (
    <div className='btn-container'>
      {uniqueCategories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            onClick={() => {
              filterMenu(category);
            }}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
