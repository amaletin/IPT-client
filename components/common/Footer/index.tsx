import { breakpoints, colors, gradients } from '../../../lib/styleguide';

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
    <style jsx>{`
      .footer {
        background: ${ gradients.gradient1 };
        color: ${ colors.white };
        margin-top: 30px;
      }

      .footer--container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 40px 0;
      }

      .socials {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
      }

      .socials a {
        padding: 10px;
      }

      .contacts {
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
      }

      .address,
      .phone,
      .email {
        align-items: center;
        font-family: @font-circe;
        font-size: 12px;
        display: flex;
        padding: 20px 0;
        text-transform: uppercase;
      }

      .address img,
      .phone img,
      .email img {
        height: 38px;
        width: 38px;
        margin-right: 10px;
      }

      .address div a, .address div a:visited,
      .phone div a, .phone div a:visited,
      .email div a, .email div a:visited {
        color: ${ colors.white };
        text-decoration: none;
      }

      .address div p,
      .phone div p,
      .email div p {
        margin: 0;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .contacts {
          flex-direction: row;
        }

        .address,
        .phone,
        .email {
          flex-direction: row;
          padding: 20px;
        }
      }

      @media screen and (min-width: ${ breakpoints.xl }px) {
        .footer--container {
          flex-direction: row;
          padding: 40px 15px;
        }

        .socials, .contacts {
          padding: 0
        }

        .address,
        .phone,
        .email {
          flex-direction: row;
          padding: 20px;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
