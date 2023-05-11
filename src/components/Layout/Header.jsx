import sushiImage from '../../assets/sushi.jpg';
import HeaderCartBut from './HeaderCartBut';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartBut onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </>
  );
};

export default Header;
