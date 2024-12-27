import TrainingSection from './TrainingSection/TrainingSection';
import s from './TrainingCourses.module.css';
import {useTranslations} from 'next-intl';

export default function TrainingCourses() {
  const t = useTranslations('training');

  return (
    <div className={`container ${s.training__container}`}>
      <h2 className={s.training__title_h2}>{t('title')}</h2>
      <h3 className={s.training__title_h3}>{t('title_2')}</h3>
      <p className={s.training__text_head}>{t('description')}</p>
      <div className={s.training__section_block}>
        <TrainingSection />
        <TrainingSection />
        <TrainingSection />
      </div>
      <div className={s.training__wrap_descr}>
        <h4 className={s.training__title_h4}>{t('title_3')}</h4>
        <ul className={s.training__list}>
          <li className={s.training__item}>{t('descr_3.0')}</li>
          <li className={s.training__item}>{t('descr_3.1')}</li>
          <li className={s.training__item}>{t('descr_3.2')}</li>
        </ul>
      </div>
      <div className={s.training__wrap_descr}>
        <h4 className={s.training__title_h4}>{t('title_4')}</h4>
        <ul className={s.training__list}>
          <li className={s.training__item}>{t('descr_4.0')}</li>
          <li className={s.training__item}>{t('descr_4.1')}</li>
          <li className={s.training__item}>{t('descr_4.2')}</li>
          <li className={s.training__item}>{t('descr_4.3')}</li>
        </ul>
      </div>
    </div>
  );
}
