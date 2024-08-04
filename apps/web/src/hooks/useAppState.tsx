import { useState } from 'react';
import { User } from '@models/userModel';
import { Views } from '@models/viewsModel';

import useCountries from '@hooks/useCountries';
import useLocalTypes from '@hooks/useLocalTypes';

const useAppState = () => {
    const { formatCurrency } = useLocalTypes();
    const [state, setState] = useState<Views>({isRegister: true});
    const updateState = (view: keyof Views) => {
      setState({[view]: true});
    }
    
    const { countries } = useCountries();

    const [phone, setPhone] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [dob, setDob] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    const clearPDTAInputs = () => {
      setPhone('');
      setDob('');
      setTermsAccepted(false);
    };

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
    state,
    updateState,
    user,
    updateUser,
    getPrice,
    getBargain,
    countries,
    phone,
    setPhone,
    selectedCountry,
    setSelectedCountry,
    dob,
    setDob,
    termsAccepted,
    setTermsAccepted,
    clearPDTAInputs
  };
};

export default useAppState;