import styles from './footer.less';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.socials}>
        <a href="https://vk.com">
          <img src="/static/images/icons/social-vk.png" alt="https://vk.com" />
        </a>
        <a href="https://instagram.com">
          <img src="/static/images/icons/social-insta.png" alt="https://instagram.com" />
        </a>
        <a href="https://facebook.com">
          <img src="/static/images/icons/social-fb.png" alt="https://facebook.com" />
        </a>
      </div>
      <div className={styles.contacts}>
        <div className={styles.address}>
          <img src="/static/images/icons/contacts-address.png" alt="Адрес" />
          <div>
            <p>ул. Уральская</p>
            <p>д.3 корпус 1</p>
          </div>
        </div>
        <div className={styles.phone}>
          <img src="/static/images/icons/contacts-phone.png" alt="Адрес" />
          <div>
            <p>(812)-02-05</p>
            <p>(812)-02-06</p>
          </div>
        </div>
        <div className={styles.email}>
          <img src="/static/images/icons/contacts-email.png" alt="Адрес" />
          <div>
            <a href="mailto:nerudmhdf@mail.ru">nerudmhdf@mail.ru</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>&copy; 2018</div>
    </div>
  </footer>
);

export default Footer;
