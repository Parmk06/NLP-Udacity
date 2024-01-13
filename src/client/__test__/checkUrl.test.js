const { isValidUrl } = require('../js/checkURL'); 

describe('isValidUrl', () => {
  it('should return true for a valid URL', () => {
    const validUrl = 'https://www.example.com';
    const result = isValidUrl(validUrl);
    expect(result).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    const invalidUrl = 'not_a_valid_url';
    const result = isValidUrl(invalidUrl);
    expect(result).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = isValidUrl(emptyString);
    expect(result).toBe(false);
  });

  it('should return false for null', () => {
    const result = isValidUrl(null);
    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    const result = isValidUrl(undefined);
    expect(result).toBe(false);
  });
});
