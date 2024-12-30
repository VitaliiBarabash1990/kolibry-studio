import axios from 'axios';
import toast from 'react-hot-toast';

export const sendMail = async (body) => {
  try {
    await axios.post('http://localhost:5000/send-email', body);
    toast.success('Сообщение отправлено!');
  } catch (error) {
    console.error('Ошибка отправки:', error);
    toast.error('Ошибка при отправке сообщения');
  }
};
