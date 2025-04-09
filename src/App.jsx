import { useState } from 'react';
import menu from './data';
import Categories from './Categories';
import Menu from './Menu';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState(menu);

  const filterMenu = (category) => {
    if (category === 'all') {
      setCurrentMenu(menu);
      return;
    }
    const filteredMenu = menu.filter((menu) => menu.category === category);
    setCurrentMenu(filteredMenu);
  };
  return (
    <section className='menu'>
      {/* title */}
      <div className='title'>
        <h2>our menu</h2>
        <div className='title-underline'></div>
      </div>
      <Categories filterMenu={filterMenu} />
      <Menu currentMenu={currentMenu} />
    </section>
  );
};
export default App;
