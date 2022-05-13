import React from 'react'
import styles  from '../styles/Navbar.module.css'
import Image from 'next/image'
import { SearchOutlined, FavoriteBorderOutlined,PersonOutline, LocalMallOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';


export const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity)
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.logo}>
                <Image src='/img/logo.png' alt='' width='480px' height='180px'/>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listMenu}>Home</li>
                <li className={styles.listMenu}>Products</li>
                <li className={styles.listMenu}>Customs</li>
                <li className={styles.listMenu}>Events</li>
                <li className={styles.listMenu}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}><SearchOutlined /></li>
                <li className={styles.listItem}><FavoriteBorderOutlined /></li>
                <li className={styles.listItem}><PersonOutline /></li>
                <Link href='/Cart' passHref >
                    <li className={styles.listItem}><LocalMallOutlined />
                        <div>{quantity}</div>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}


