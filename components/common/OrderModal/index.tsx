import Router from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeOrderModal } from '../../../actions/uiActions';
import { IAppState } from '../../../lib/models';
import { breakpoints, colors } from '../../../lib/styleguide';
import CloseIcon from '../../icons/Close';
import Button from '../Button';

interface IProps extends IStateProps, IDispatchProps {}

const OrderModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [isOpen]);
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleClickAgreement = () => {
    onClose();
    Router.push('/agreement');
  }
  return (
    <div className="modal--wrapper">
      {isOpen && (
        <div className="modal--container" onClick={handleClickOutside}>
          <div className="modal">
            <div className="modal--header">
              <span>Сделать заказ</span>
              <div
                className="modal--close"
                onClick={onClose}
              >
                <CloseIcon color="#ffffff" size="30px" />
              </div>
            </div>
            <div className="modal--body">
              <div className="form-row">
                <div className="order--inputs--block">
                  <div className="form-block">
                    <input
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="form-block">
                    <input
                      placeholder="Эл. почта"
                    />
                  </div>
                  <div className="form-block">
                    <input
                      placeholder="Телефон"
                    />
                  </div>
                </div>
                <div className="order--text--block">
                  <div className="form-block">
                    <textarea
                      placeholder="Текст сообщения"
                    />
                  </div>
                </div>
              </div>
              <div className="order--file--block">
                <input type="file" />
              </div>
            </div>
            <div className="modal--footer">
              <Button onClick={() => false} size="sm">Отправить</Button>
              <div>
                <small>
                  Нажимая на кнопку вы соглашаетесь с нашими
                  <span onClick={handleClickAgreement}> условиями обработки персональных данных</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal--wrapper {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
        }

        .modal--container {
          align-items: center;
          background: rgba(0,0,0,0.8);
          display: flex;
          height: 100vh;
          justify-content: center;
          position: absolute;
          width: 100vw;
        }

        .modal {
          background: ${ colors.white };
          position: absolute;
        }

        .modal--header {
          background: ${ colors.headerBlue };
          color: ${ colors.white };
          font-size: 18px;
          line-height: 30px;
          padding: 20px;
          position: relative;
          text-align: center;
          text-transform: uppercase;
        }

        .modal--close {
          cursor: pointer;
          height: 30px;
          position: absolute;
          right: 20px;
          top: 20px;
          width: 30px;
        }

        .modal--body {
          padding: 15px;
        }

        .form-row {
          display: flex;
          flex-direction: column;
        }

        .order--inputs--block {
          display: flex;
          flex-direction: column;
        }

        .order--text--block {
          flex: 1;
        }

        .form-block {
          padding: 5px 10px;
        }

        .form-block input, .form-block textarea {
          font-size: 16px;
          padding: 5px;
          resize: none;
        }

        .form-block textarea {
          box-sizing: border-box;
          height: 116px;
          width: 100%;
        }

        .order--file--block {
          text-align: center;
        }

        .modal--footer {
          text-align: center;
        }

        .modal--footer small, .modal--footer span {
          color: ${ colors.greyDark };
        }

        .modal--footer span {
          cursor: pointer;
          text-decoration: underline;
        }

        @media screen and (min-width: ${ breakpoints.sm }px) {
          .modal {
            width: 600px;
          }

          .form-row {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

interface IStateProps {
  isOpen: boolean;
}
const mapStateToProps = (state: IAppState): IStateProps => ({
  isOpen: state.ui.orderModal.open,
});

interface IDispatchProps {
  onClose: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onClose: () => dispatch(closeOrderModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
