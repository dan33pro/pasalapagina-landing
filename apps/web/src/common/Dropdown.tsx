import { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";

const Dropdown = () => {
  const { selectedCountry, setSelectedCountry, countries } =
    useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-between w-[110px] h-12 px-4 py-2 text-sm
                    font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                    border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={selectedCountry.flag} alt="icono de bandera" />
          <span className="ml-2">{selectedCountry.code}</span>
          <svg
            className="w-6 h-4 fill-[var(--dark-grey)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 16"
            aria-hidden="true"
          >
            <path d="M10 12l-5-8h10l-5 8z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-full text-sm font-medium
                        text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                        border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom"
        >
          {countries.map(
            (country: { code: string; flag: any; name: string }) => (
              <button
                key={country.code}
                className="flex w-full px-4 py-2 text-center text-sm text-[var(--dark-grey)] hover:bg-[var(--light-gray)]"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <Image src={country.flag} alt="icono de bandera" />
                <span className="ml-2">{country.code}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
