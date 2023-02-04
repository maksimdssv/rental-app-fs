import React, { FC, useContext, useRef } from 'react';

import Button from '../../components/Button';
import ApartmentsContext from '../../context/ApartmentsContext';
import classes from './ApartmentForm.module.css';
import Input from './Input';

const ApartmentForm: FC = () => {
  const { isLoading, createApartment } = useContext(ApartmentsContext);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSave: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const target = evt.target as typeof evt.target & {
      name: { value: string };
      description: { value: string };
      rooms: { value: number };
      price: { value: number };
    };
    const data = {
      name: target.name.value,
      price: Number(target.price.value),
      rooms: Number(target.rooms.value),
      description: target.description.value ?? '',
    };
    formRef?.current?.reset();
    createApartment(data);
  };

  return (
    <>
      <h1>🤑Add new apartment</h1>
      <form onSubmit={handleSave} ref={formRef}>
        <div className={classes['forms-container']}>
          <Input
            title={'Title*'}
            type={'text'}
            id={'name'}
            maxLength={98}
            minLength={1}
            placeholder={'Ex. Flat in city center'}
            disabled={isLoading}
            required
          />
          <Input
            title={'Rooms* №'}
            type={'number'}
            id={'rooms'}
            name={'rooms'}
            min={1}
            placeholder={'4'}
            required
            disabled={isLoading}
          />
          <Input
            title={'Price* $'}
            type={'number'}
            id={'price'}
            name={'price'}
            min={1}
            placeholder={'99'}
            required
            disabled={isLoading}
          />
          <Input
            title={'Description'}
            textArea
            type={'number'}
            id={'description'}
            name={'description'}
            placeholder={'Put some description here...'}
            disabled={isLoading}
          />
          <Button type={'submit'} disabled={isLoading} />
        </div>
      </form>
    </>
  );
};

export default ApartmentForm;
