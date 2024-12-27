import React from 'react';
import s from './TrainingSection.module.css';

type TrainingItem = {
  title: string;
  text: string;
};

type TrainingProps = {
  titleHead: string;
  sections: TrainingItem[];
  button: string;
};

export default function TrainingSection({
  sections,
  titleHead,
  button
}: TrainingProps) {
  return (
    <div className={s.training__section}>
      <div>
        <h2 className={s.training__section_title}>
          {titleHead.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <ul className={s.training__section_list}>
          {sections.map((section, index) => {
            return (
              <li key={index} className={s.training__section_item}>
                <p className={s.training__section_text_head}>{section.title}</p>
                <p className={s.training__section_text}>{section.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button className={s.training__section_btn}>{button}</button>
    </div>
  );
}
