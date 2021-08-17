import PropTypes from 'prop-types';
import './statistics.module.css';

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
    <section className="statistics">
      {title && <h2 className="statistics__title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((elem) => (
          <li
            key={elem.id}
            className="stat-list__item"
            style={{backgroundColor: randColor()}}
          >
            <span className="stat-list__label">{elem.label}</span>
            <span className="stat-list__percentage">{elem.percentage}%</span>
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
