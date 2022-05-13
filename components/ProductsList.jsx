import React from 'react'
import styles from '../styles/ProducstList.module.css'
import { LocalShipping, CreditCard, ShoppingCart } from '@material-ui/icons';
import { ProductCard } from './ProductCard';

export const ProductsList = ({productsList}) => {
  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.itemCard}>
              <div className={styles.iconCard}>
                <LocalShipping fontSize='large'/>
              </div>
              <h5 className={styles.textIconCard}>Shiping</h5>
              <div className="span">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab beatae hic praesentium ad velit, perferendis amet blanditiis. Vitae distinctio, at harum ab doloribus, rem iste quibusdam cumque deleniti fuga impedit.</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemCard}>
              <div className={styles.iconCard}>
              <CreditCard fontSize='large'/>
              </div>
              <h5 className={styles.textIconCard}>Safe payment</h5>
              <div className="span">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla asperiores animi quam nostrum omnis aut quis voluptas dicta consequatur, exercitationem vitae expedita voluptates hic eius repellendus dolore porro! Sint, inventore?</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemCard}>
              <div className={styles.iconCard}>
              <ShoppingCart fontSize='large'/>
              </div>
              <h5 className={styles.textIconCard}>Shop with confidence</h5>
              <div className="span">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut quae est maxime itaque blanditiis eaque vitae libero minus. Doloremque dolores iste eligendi consequuntur eius. Excepturi eos ipsam consequuntur itaque!</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.headerCake}>cake of Custome</h1>
      <div className={styles.feature}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.itemButton}>
                <button className={styles.fillterButton}>CAKE</button>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemButton}>
                <button className={styles.fillterButton}>CUP CAKE</button>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.itemButton}>
                <button className={styles.fillterButton}>MACARON CAKE</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.wrapper}>
          {productsList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          
        </div>
      </div>
    </div>
    
  )
}
