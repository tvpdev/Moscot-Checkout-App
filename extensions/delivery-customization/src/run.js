// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  // @ts-ignore
  let hideDeliveryoption = input.cart.lines.map(line => line.merchandise.product.metafield?.value).includes("true");

  if (hideDeliveryoption == true) {
    const title1 = 'UPS 2-Day Air';
    const title2 = 'UPS Next Day Air';
    const titles = [title1,title2];

    const operations = input.cart.deliveryGroups.flatMap(group => 
      group.deliveryOptions
      // @ts-ignore
      .filter(option => titles.includes(option.title))
      .map(option => ({
        hide: {
          deliveryOptionHandle: option.handle,
        }
      }))
    );

    if (operations.length > 0) {
      return {
        operations
      };
    }
  }

  return NO_CHANGES;
}
