import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.css';

const Modal = ({children, close}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.querySelector('#modal-root');
    setModalRoot(root);
  }, []);

  if (!modalRoot) {
    return null; // Пока modalRoot не найден, ничего не рендерим
  }

  return ReactDOM.createPortal(
    <div className={s.wrapper}>
      <div className={s.content}>
        <button className={s.closeBtn} onClick={() => close()}>
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
