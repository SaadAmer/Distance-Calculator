// Front end Utility Functions

export function roundToTwoDecimalPlaces(num) {
    if (num === null || num === undefined) {
      return null;
    }
    return parseFloat(num.toFixed(2));
  }