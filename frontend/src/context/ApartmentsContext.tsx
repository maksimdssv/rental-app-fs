import { createContext, FC, useRef, useState } from 'react';

import { requestApi } from '../config/api';
import { Apartment } from '../types/Apartment';

const ApartmentsContext = createContext<ctxType>({
  error: null,
  isLoading: false,
  apartments: [],
  getApartments: function (rooms?: number | undefined, price?: string | undefined): void {
    throw new Error('Function not implemented.');
  },
  removeApartment: function (id: number): void {
    throw new Error('Function not implemented.');
  },
});

interface ctxType {
  error: string | null;
  isLoading: boolean;
  apartments: Apartment[];
  getApartments: (rooms?: number, price?: string) => void;
  removeApartment: (id: number) => void;
}

export const ApartmentsProvider: FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apartments, setApartments] = useState([]);
  const roomsRef = useRef<number | undefined>(undefined);
  const priceRef = useRef<string | undefined>(undefined);
  const getApartments = async (rooms?: number, price?: string) => {
    setIsLoading(true);
    setError(null);
    roomsRef.current = rooms;
    priceRef.current = price;
    try {
      const response = await requestApi('GET', 'apartments', {
        params: { rooms, price },
      });
      setApartments(response.data);
    } catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const removeApartment = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      await requestApi('DELETE', `apartments/${id}`);
      await getApartments(roomsRef.current, priceRef.current);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const ctx = {
    error,
    isLoading,
    apartments,
    getApartments,
    removeApartment,
  };
  return <ApartmentsContext.Provider value={ctx}>{children}</ApartmentsContext.Provider>;
};
export default ApartmentsContext;
