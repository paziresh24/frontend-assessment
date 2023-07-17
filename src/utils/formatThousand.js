function formatThousand(number) {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.replace(".0", "") + "K";
  }
  return number.toString();
}

export default formatThousand;
