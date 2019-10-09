import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeOrderModal } from '../../../actions/uiActions';
import { IAppState } from '../../../lib/models';
import { breakpoints, colors } from '../../../lib/styleguide';
import CloseIcon from '../../icons/Close';
import OrderForm from '../OrderForm';

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

  const renderTitle = () => {
    if (typeof window !== 'undefined' && window.location.href.indexOf('/service') !== -1) {
      return 'Мы поможем';
    } else {
      return 'Сделать заказ';
    }
  };

  renderTitle();
  return (
    <div className="modal--wrapper">
      {isOpen && (
        <div className="modal--container" onClick={handleClickOutside}>
          <div className="modal">
            <div className="modal--header">
              <span>{renderTitle()}</span>
              <div
                className="modal--close"
                onClick={onClose}
              >
                <CloseIcon color="#ffffff" size="30px" />
              </div>
            </div>
            <div className="modal--body">
              <OrderForm />
            </div>
            <div className="modal--footer">
              <small>
                Нажимая на кнопку вы соглашаетесь с нашими
                <a href="/agreement" target="_blank"> условиями обработки персональных данных</a>
              </small>
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

        .modal--footer {
          padding: 15px;
          text-align: center;
        }

        .modal--footer small, .modal--footer span {
          color: ${ colors.greyLight };
        }

        .modal--footer a {
          color: ${ colors.greyLight };
          cursor: pointer;
          text-decoration: underline;
        }

        @media screen and (min-width: ${ breakpoints.sm }px) {
          .modal {
            width: 600px;
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
