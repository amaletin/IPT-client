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
              <div className="order--inputs--block">
                <input />
                <input />
                <input />
              </div>
              <div className="order--text--block">
                <textarea />
              </div>
            </div>
            <div className="modal--footer">
              <Button onClick={() => false}>Отправить</Button>
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
          display: flex;
          flex-direction: column;
          padding: 15px;
        }

        .order--inputs--block {
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: ${ breakpoints.sm }px) {
          .modal--body {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
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
