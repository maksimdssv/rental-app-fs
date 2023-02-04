import React, { FC, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { InfinitySpin } from 'react-loader-spinner';

import ApartmentsContext from '../../context/ApartmentsContext';
import ApartmentItem from './ApartmentItem';
import classes from './ApartmentsList.module.css';

const ApartmentsList: FC = () => {
  const { error, isLoading, getApartments, apartments } = useContext(ApartmentsContext);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);
  const modalNode = document.getElementById('modal');

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
            disabled={isLoading}
          />
          <label htmlFor={'price'}>Sort by:</label>
          <select
            id={'price'}
            value={sort}
            defaultValue={'-- select an option --'}
            onChange={handleSelect}
            className={classes.select}
            disabled={isLoading}
          >
            <option disabled>-- select an option --</option>
            <option value={'desc'}>Price: Highest First</option>
            <option value={'asc'}>Price: Lowest First</option>
          </select>
        </div>
      </header>
      {!isLoading && !error && (
        <ul className={classes['apartments-list']}>
          {apartments.map((apartment) => (
            <ApartmentItem key={apartment.id} {...apartment} />
          ))}
        </ul>
      )}
      {!isLoading && !error && apartments.length === 0 && (
        <h1>Nothing here for now...</h1>
      )}
      {isLoading &&
        modalNode &&
        createPortal(
          <div className={classes.loader}>
            <InfinitySpin width="400" color="#4fa94d" />
          </div>,
          modalNode,
        )}
      {error && <h1>Error:{error}</h1>}
    </section>
  );
};

export default ApartmentsList;
