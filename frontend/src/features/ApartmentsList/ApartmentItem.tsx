import React, { FC, useContext, useState } from 'react';

import Button from '../../components/Button';
import ApartmentsContext from '../../context/ApartmentsContext';
import { Apartment } from '../../types/Apartment';
import classes from './ApartmentItem.module.css';

const ApartmentItem: FC<Apartment> = ({ id, name, description, price, rooms }) => {
  const [isExtended, setIsExtended] = useState(false);
  const { removeApartment } = useContext(ApartmentsContext);
  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.stopPropagation();
    const confirm = window.confirm('Are you sure ?');
    if (confirm) removeApartment(id);
  };

  const handleExtension = () => {
    setIsExtended((prevState) => !prevState);
  };

  return (
    <li className={`${classes.item} ${isExtended ? classes.active : ''}`}>
      <div className={classes.container}>
        <p className={classes.text}>
          <button
            className={`${classes['dropdown-button']} ${
              isExtended ? classes.active : ''
            }`}
            onClick={handleExtension}
          >
            ▼
          </button>
          <span className={`${classes.text} ${classes['full-name']}`}>{name}</span> /{' '}
          {rooms} room
          {rooms > 1 ? 's' : ''} / $ {price}
        </p>
        <Button type={'delete'} action={handleDelete} />
      </div>
      {isExtended && (
        <div>
          <span className={classes.break} />
          <h1 className={`${classes.text} ${classes['full-name']}`}>{name}</h1>
          <p className={`${classes.text} ${classes.description}`}>{description}</p>
        </div>
      )}
    </li>
  );
};

export default ApartmentItem;
