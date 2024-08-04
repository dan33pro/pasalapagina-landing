const useMasks = () => {
  const maskPhoneNumber = (phoneNumber: string): string => {
    if (phoneNumber.length < 5) return phoneNumber;

    const firstThree = phoneNumber.slice(0, 3);
    const lastTwo = phoneNumber.slice(-2);
    const middleSection = "*".repeat(phoneNumber.length - 5);

    return `${firstThree} ${middleSection} ${lastTwo}`;
  };

  const maskEmail = (email: string): string => {
    const atIndex = email.indexOf("@");
    if (atIndex === -1) return email;

    const firstLetter = email[0];
    const beforeAt = email.slice(atIndex - 2, atIndex);
    const domain = email.slice(atIndex);

    const middleSection = "*".repeat(atIndex - 3);

    return `${firstLetter}${middleSection}${beforeAt}${domain}`;
  };

  return {
    maskPhoneNumber,
    maskEmail,
  };
};

export default useMasks;
