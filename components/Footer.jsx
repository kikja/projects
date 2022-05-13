import React from 'react'
import styles from '../styles/Footer.module.css'
import {
  PhoneOutlined,
  BusinessCenterOutlined,
  EmailOutlined,
  LocationOnOutlined,
  Instagram,
  Facebook,
  WhatsApp,
  LanguageOutlined
} from '@material-ui/icons'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.title}>Help & information </h3>
        <div className={styles.linkHelp}>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Product Return</a>
        </div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>About Us </h3>
        <div className={styles.linkHelp}>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Product Return</a>
        </div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Categories </h3>
        <div className={styles.linkHelp}>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Product Return</a>
        </div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Follow Us </h3>
        <div className={styles.linkHelp}>
          <span className={styles.followIcon}><PhoneOutlined /> 012 125 7890</span>
          <span className={styles.followIcon}><BusinessCenterOutlined /> 068 125 6844</span>
          <span className={styles.followIcon}><EmailOutlined /> help@example.com</span>
          <span className={styles.followIcon}><LocationOnOutlined /> 1208 Broadway Suite</span>
        </div>
        <div className={styles.socialIcon}>
          <div className={styles.iconItem}>
            <Instagram className={styles.icon} />
          </div>
          <div className={styles.iconItem}>
            <Facebook className={styles.icon} />
          </div>
          <div className={styles.iconItem}>
            <WhatsApp className={styles.icon} />
          </div>
          <div className={styles.iconItem}>
            <LanguageOutlined className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Newsleetters </h3>
        <span>Be rhe first who lern about our great promotions!</span>
        <div className={styles.subscribeForm}>
          <input type="email" className={styles.emailInput} placeholder='please enter your email' />
          <input type="submit" className={styles.buttonInput} />
        </div>
      </div>
    </div>
  )
}
