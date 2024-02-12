import { checkIfPriceValueExists, handleWithDollarRattingConverter } from "@/common/utils/priceUtils";

describe('checkIfPriceValueExists', () => {
  it('Should return the price as a string if it is valid', () => {
    expect(checkIfPriceValueExists(10)).toBe('10');
  });

  it('Should return "Valor indisponível" if the price is undefined', () => {
    expect(checkIfPriceValueExists(undefined)).toBe('Valor indispoível');
  });

  it('Should return "Valor indisponível" if the price is NaN', () => {
    expect(checkIfPriceValueExists(NaN)).toBe('Valor indispoível');
  });
});

describe('handleWithDollarRattingConverter', () => {
    it('Should return the formatted dollar value correctly', () => {
      expect(handleWithDollarRattingConverter('4.9537')).toBe('4,95');
    });
  
    it('Should return "Valor indisponível" if the dollar value is undefined', () => {
      expect(handleWithDollarRattingConverter(undefined)).toBe('Valor indispoível');
    });
  
    it('Should return "Valor indisponível" if the dollar value is an empty string', () => {
      expect(handleWithDollarRattingConverter('')).toBe('Valor indispoível');
    });
  });