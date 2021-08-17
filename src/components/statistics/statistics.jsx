import PropTypes from 'prop-types';
import s from './statistics.module.css';

const randColor = () =>
  'rgb(' +
  (() => Math.floor(Math.random() * 255))() +
  ', ' +
  (() => Math.floor(Math.random() * 255))() +
  ', ' +
  (() => Math.floor(Math.random() * 255))() +
  ')';

export default function Statistics({title, stats}) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statistics__title}>{title}</h2>}
      <ul className={s.statlist}>
        {stats.map((elem) => (
          <li
            key={elem.id}
            className={s.statlist__item}
            style={{backgroundColor: randColor()}}
          >
            <span className={s.statlist__label}>{elem.label}</span>
            <span className={s.statlist__percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

console.log(randColor());
