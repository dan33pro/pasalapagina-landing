import flagCO from '@icons/flags/flag-co.png';
import flagUS from '@icons/flags/flag-us.png';
import flagUK from '@icons/flags/flag-uk.png';

const useCountries = () => {
    const countries = [
        { code: '+57', flag: flagCO, name: 'Colombia' },
        { code: '+1', flag: flagUS, name: 'USA' },
        { code: '+44', flag: flagUK, name: 'UK' },
      ];

    return {
        countries
    };
}

export default useCountries;