import s from './RegistrationForm.module.css';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';
import {useTranslations} from 'next-intl';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function RegistrationForm() {
  const t = useTranslations('formik');

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const onlyWords = /^[a-zA-Z]+$/;
  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, 'ONLY WORDS')
      .min(3, 'Мінімум 3 символа')
      .max(50, 'Максимум 50 символів')
      .required("Це поле обов'язкове!"),
    email: Yup.string()
      .email('Не коректрий Email!')
      .required('Введіть коректну email-адресу!'),
    message: Yup.string()
      .min(10, 'Повідомлення має бути не менш як 10 символів')
      .max(300, 'Повідомлення має бути не більш як 300 символів')
      .required("Це поле обов'язкове!")
  });

  const succsessContact = () => toast.success('Contact successfully added!');

  const handleAdd = (
    values: FormValues,
    options: FormikHelpers<FormValues>
  ) => {
    const newContact = {
      name: values.name,
      email: values.email,
      message: values.message
    };
    // dispatch(addContact(newContact));
    succsessContact();
    options.resetForm();
  };

  return (
    <div className={s.container__form}>
      <div className={s.container__title_lashes}>
        <h2 className={s.formik__title}>{t('title')}</h2>
        <div className={s.formik__img_container}>
          <img
            className={s.formik__lashes_right}
            src="/img/register_form/lashes.png"
            alt="lashes-right"
          />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('name')}</p>
            <Field
              className={s.formik__input}
              type="text"
              name="name"
              placeholder={t('placeholder.0')}
            />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('email')}</p>
            <Field
              className={s.formik__input}
              type="email"
              name="email"
              placeholder={t('placeholder.1')}
            />
            <ErrorMessage name="email" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <p className={s.formik__name_label}>{t('message')}</p>
            <Field
              as="textarea" // Указываем, что это textarea
              className={s.formik__text_area}
              name="message"
              placeholder={t('placeholder.2')}
            />
            <ErrorMessage name="message" component="p" className={s.error} />
          </label>
          <button className={s.formik__btn} type="submit">
            {t('button')}
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
