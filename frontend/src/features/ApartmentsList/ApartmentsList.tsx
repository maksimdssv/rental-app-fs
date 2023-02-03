import React, { FC, useContext, useEffect, useState } from 'react';

import ApartmentsContext from '../../context/ApartmentsContext';
import ApartmentItem from './ApartmentItem';
import classes from './ApartmentsList.module.css';

const ApartmentsList: FC = () => {
  const { error, isLoading, getApartments, apartments } = useContext(ApartmentsContext);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => getApartments(filter, sort), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [filter, sort]);

  const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(evt.target.value);
  };

  const handleFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = Number(evt.target.value);
    if (newFilter > 0) setFilter(newFilter);
    else setFilter(undefined);
  };

  return (
    <section>
      <header className={classes.header}>
        🏡 Available apartments ({apartments.length})
        <div>
          <input
            type={'number'}
            className={`${classes.select} ${classes.rooms}`}
            onChange={handleFilter}
            min={1}
            placeholder={'Filter by rooms'}
          />
          <label htmlFor={'price'}>Sort by:</label>
          <select
            id={'price'}
            value={sort}
            defaultValue={'-- select an option --'}
            onChange={handleSelect}
            className={classes.select}
          >
            <option disabled>-- select an option --</option>
            <option value={'desc'}>Price: Highest First</option>
            <option value={'asc'}>Price: Lowest First</option>
          </select>
        </div>
      </header>
      <ul className={classes['apartments-list']}>
        {apartments.map((apartment) => (
          <ApartmentItem key={apartment.id} {...apartment} />
        ))}
      </ul>
    </section>
  );
};

export default ApartmentsList;
