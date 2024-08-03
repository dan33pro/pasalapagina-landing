import { useState } from 'react';
import { User } from '@models/userModel';
import useLocalTypes from '@hooks/useLocalTypes';

const useAppState = () => {
    const { formatCurrency } = useLocalTypes();
    
    const [user, setUser] = useState<User>({
        name: "Salomón",
        age: 85,
        discount: 85,
    });
    const updateUser = (name: string, age: number) => {
        age = Math.trunc(age);
        let discount = age;
        if (age < 25) discount = 25;
        if (age > 85) discount = 85;
        setUser({ name, age, discount });
    };

    const [price, setPrice] = useState<number>(342000);
    const getPrice = () => {
      return formatCurrency(price);
    };
    
    const getBargain = () => {
      const bargainPrice = price * (100 - user.discount) / 100;
      return formatCurrency(bargainPrice);
    };

  return {
    user,
    updateUser,
    getPrice,
    getBargain
  };
};

export default useAppState;