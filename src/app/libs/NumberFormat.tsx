import React from 'react';

interface NumberFormatProps {
  value: number;
}

const NumberFormat: React.FC<NumberFormatProps> = ({ value }) => {
  // Use Intl.NumberFormat for better internationalization support
  const formattedNumber = new Intl.NumberFormat().format(value);

  return <>{formattedNumber}</>;
};

export default NumberFormat;
