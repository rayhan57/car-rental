export const formatThousand = (valueString) => {
  const value = valueString.toString().replace(/\D/g, "");
  const formatter = new Intl.NumberFormat("id-ID");
  return valueString ? formatter.format(parseInt(value, 10)) : "";
};

export const formatToRupiah = (amount) => `Rp ${amount.toLocaleString()}`;
