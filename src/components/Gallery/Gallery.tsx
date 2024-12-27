import {useTranslations} from 'next-intl';
import s from './Gallery.module.css';

export function Gallery() {
  const t = useTranslations('gallery');
  return (
    <div className={`container ${s.gallery__container}`}>
      <h2 className={s.gallary__title}>{t('title')}</h2>
      <ul className={s.gallery__list}>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_1_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_2_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_3_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_4_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_5_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_6_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_7_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_8_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_9_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_10_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_11_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_12_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_13_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_14_x1.jpg" alt="" />
        </li>
        <li className={s.gallery_item}>
          <img src="/img/gallery/image_15_x1.jpg" alt="" />
        </li>
      </ul>
    </div>
  );
}
