import s from './TrainingSection.module.css';

export default function TrainingSection() {
  return (
    <div className={s.training__section}>
      <h2 className={s.training__section_title}>
        День 1 <br /> Теоретична частина
      </h2>
      <ul className={s.training__section_list}>
        <li className={s.training__section_item}>
          <p className={s.training__section_text_head}>
            Вступ: Основи професії
          </p>
          <p className={s.training__section_text}>
            Що таке нарощування вій, основні Огляд сучасних трендів (1:1, 2D-9D,
            «Kim Kardashian», мокрий ефект)
          </p>
        </li>
        <li className={s.training__section_item}>
          <p className={s.training__section_text_head}>Гігієна та безпека</p>
          <p className={s.training__section_text}>
            Санітарні норми та стерилі Правила роботи з клієнтами для збереження
          </p>
        </li>
        <li className={s.training__section_item}>
          <p className={s.training__section_text_head}>Анатомія вій та очей</p>
          <p className={s.training__section_text}>
            Типи вій: природні характеристики та будов Як визначати оптимальний
            стиль нарощування залежно від форми очей.
          </p>
        </li>
        <li className={s.training__section_item}>
          <p className={s.training__section_text_head}>
            Матеріали та інструменти
          </p>
          <p className={s.training__section_text}>
            Огляд інструментів: пінцети, клей, підкладки, щіточки. Типи штучних
            вій: товщина, вигини, довжина, матеріал.
          </p>
        </li>
        <li className={s.training__section_item}>
          <p className={s.training__section_text_head}>Робоче місце майстра</p>
          <p className={s.training__section_text}>
            Як організувати комфортне та ергономічне місце для роботи.
            Психологія спілкування з клієнтами.
          </p>
        </li>
      </ul>
      <button className={s.training__section_btn}>Записатись</button>
    </div>
  );
}
