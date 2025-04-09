import MenuItem from './MenuItem';

const Menu = ({ currentMenu }) => {
  return (
    <div className='section-center'>
      {currentMenu.map((menuItem) => {
        return <MenuItem {...menuItem} key={menuItem.id} />;
      })}
    </div>
  );
};
export default Menu;
