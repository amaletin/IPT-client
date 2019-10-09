import { useState } from 'react';
import { postOrder, uploadFile } from '../../../lib/services';
import { breakpoints, colors } from '../../../lib/styleguide';
import Button from '../Button';

const initialForm = {
  email: '',
  name: '',
  phone: '',
  text: '',
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateForm = (form) => {
  const errors = [];

  if (form.email === '' || !validateEmail(form.email)) {
    errors.push('email');
  }
  if (form.name === '') {
    errors.push('name');
  }
  if (form.phone === '') {
    errors.push('phone');
  }
  if (form.text === '') {
    errors.push('text');
  }

  return errors;
};

interface IProps {
  onClose: () => void;
}

const ModalForm = ({ onClose }: IProps) => {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChangeField = (field: string) => (e) => {
    const val = e.target.value;
    setForm({
      ...form,
      [field]: val || '',
    });
    setIsLoading(false);
  };
  const handleSubmitForm = async () => {
    setIsLoading(true);

    const currentErrors = validateForm(form);

    if (currentErrors.length !== 0) {
      setErrors(currentErrors);
      return false;
    }

    const data = new FormData();
    const input: HTMLInputElement = document.querySelector('input[type="file"]');
    try {
      if (input.files[0]) {
        const imagedata = input.files[0];
        data.append('test', 'test');
        data.append('data', imagedata);
        const newFile = await uploadFile(data);

        await postOrder({ ...form, file: newFile.data.id.toString() });
      } else {
        await postOrder({ ...form });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);

    onClose();
  };
  const hasError = (field) => errors.includes(field) ? { borderColor: colors.pink } : {};
  return (
    <div>
    <form>
      <div className="form-row">
        <div className="order--inputs--block">
          <div className="form-block">
            <input
              style={hasError('name')}
              onChange={handleChangeField('name')}
              value={form.name}
              placeholder="Ваше имя"
            />
          </div>
          <div className="form-block">
            <input
              style={hasError('email')}
              onChange={handleChangeField('email')}
              value={form.email}
              placeholder="Эл. почта"
            />
          </div>
          <div className="form-block">
            <input
              style={hasError('phone')}
              onChange={handleChangeField('phone')}
              value={form.phone}
              placeholder="Телефон"
            />
          </div>
        </div>
        <div className="order--text--block">
          <div className="form-block">
            <textarea
              style={hasError('text')}
              onChange={handleChangeField('text')}
              value={form.text}
              placeholder="Текст сообщения"
            />
          </div>
        </div>
      </div>
    </form>
    <form id="formfile" encType="multipart/form-data">
      <div className="order--file--block">
      <input type="file" />
      </div>
    </form>
      <div className="order--submit--block">
        <Button
          onClick={handleSubmitForm}
          size="sm"
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка' : 'Отправить'}
        </Button>
      </div>
      <style jsx>{`
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
          border: 1px solid ${ colors.greyLight };
          font-size: 16px;
          padding: 5px;
          resize: none;
        }

        .has-error {
          border-color: ${ colors.pink };
        }

        .form-block textarea {
          box-sizing: border-box;
          height: 116px;
          width: 100%;
        }

        .order--file--block {
          text-align: center;
        }

        .order--submit--block {
          text-align: center;
          padding-top: 20px;
        }

        @media screen and (min-width: ${ breakpoints.sm }px) {
          .form-row {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default ModalForm;
