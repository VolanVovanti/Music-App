import { useState } from 'react';
import FilterButton from './SubcategoriesDivs/FilterButton';

function Filters() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <button
        type="button"
      >
        <FilterButton clickAction={() => toggleVisibleFilter('author')}>
          По Автору
        </FilterButton>
      </button>
      {visibleFilter === 'author' && 'Список авторов'}

      <button
        type="button"
      >
        <FilterButton clickAction={() => toggleVisibleFilter('year')}>
          По Году
        </FilterButton>
      </button>
      {visibleFilter === 'year' && 'По году'}

      <button
        type="button"
      >
        <FilterButton clickAction={() => toggleVisibleFilter('genre')}>
          По Жанру
        </FilterButton>
      </button>
      {visibleFilter === 'genre' && ' По жанру'}
    </div>
  );
}
export default Filters;
