import {useTranslations} from 'next-intl';
import CustomLink from '../CustomLink/CustomLink';
import s from './MyWork.module.css';

export function MyWork() {
  const t = useTranslations('MyWork');
  return (
    <div id="my_works" className={`container ${s.mywork__container}`}>
      <div className={s.mywork__wrap}>
        <div className={s.mywork__head}>
          <h2 className={s.mywork__title}>{t('title')}</h2>
          <ul className={s.mywork__button_group}>
            <li className={`${s.mywork__link} ${s.mywork__link_text}`}>
              <p className={s.mywork__text}>@kolibry_studioo</p>
            </li>
            <li className={s.mywork__link}>
              <CustomLink href="@kolibry_studioo">{t('button')}</CustomLink>
            </li>
          </ul>
        </div>
        <div className={s.mywork__gallary}>
          <ul className={s.mywork__gallary_list}>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_1" src="/img/main/image_4_x1.png" />
            </li>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_2" src="/img/main/image_5_x1.png" />
            </li>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_3" src="/img/main/image_6_x1.png" />
            </li>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_4" src="/img/main/image_7_x1.png" />
            </li>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_5" src="/img/main/image_8_x1.png" />
            </li>
            <li className={s.mywork__gallary_item}>
              <img alt="girl_6" src="/img/main/image_9_x1.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
