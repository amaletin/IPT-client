import './footer.less';

const Footer = () => (
  <footer className="footer">
    <div className="container footer--container">
      <div className="socials">
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
      <div className="contacts">
        <div className="address">
          <img src="/static/images/icons/contacts-address.png" alt="Адрес" />
          <div>
            <p>ул. Уральская</p>
            <p>д.3 корпус 1</p>
          </div>
        </div>
        <div className="phone">
          <img src="/static/images/icons/contacts-phone.png" alt="Адрес" />
          <div>
            <p>(812)-02-05</p>
            <p>(812)-02-06</p>
          </div>
        </div>
        <div className="email">
          <img src="/static/images/icons/contacts-email.png" alt="Адрес" />
          <div>
            <a href="mailto:nerudmhdf@mail.ru">nerudmhdf@mail.ru</a>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; 2018</div>
    </div>
  </footer>
);

export default Footer;
