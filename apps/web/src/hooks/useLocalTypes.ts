const useLocalTypes = () => {
  const formatCurrency = (
    value: number,
    locale: string = "es-CO",
    currency: string = "COP"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return {
    formatCurrency,
  };
};

export default useLocalTypes;
