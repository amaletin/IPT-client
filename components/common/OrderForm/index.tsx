import { useState } from 'react';
import { postOrder, uploadFile } from '../../../lib/services';
import { breakpoints } from '../../../lib/styleguide';
import Button from '../Button';

const initialForm = {
  email: '',
  name: '',
  phone: '',
  text: '',
};

const ModalForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeField = (field: string) => (e) => {
    const val = e.target.value;
    setForm({
      ...form,
      [field]: val,
    });
  };
  const handleSubmitForm = async () => {
    setIsLoading(true);
    const data = new FormData();
    const input: HTMLInputElement = document.querySelector('input[type="file"]');
    const imagedata = input.files[0];
    data.append('test', 'test');
    data.append('data', imagedata);
    const newFile = await uploadFile(data);
    await postOrder({ ...form, file: newFile.data.id.toString() });
    setIsLoading(false);
  };
  return (
    <div>
    <form>
      <div className="form-row">
        <div className="order--inputs--block">
          <div className="form-block">
            <input
              onChange={handleChangeField('name')}
              value={form.name}
              placeholder="Ваше имя"
            />
          </div>
          <div className="form-block">
            <input
              onChange={handleChangeField('email')}
              value={form.email}
              placeholder="Эл. почта"
            />
          </div>
          <div className="form-block">
            <input
              onChange={handleChangeField('phone')}
              value={form.phone}
              placeholder="Телефон"
            />
          </div>
        </div>
        <div className="order--text--block">
          <div className="form-block">
            <textarea
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
