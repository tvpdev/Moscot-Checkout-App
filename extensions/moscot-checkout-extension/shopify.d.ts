import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/ConsentPhoneField.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.delivery-address.render-after').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/ShippingAddressBanner.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.delivery-address.render-before').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/DividerAfterDiscountCode.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.reductions.render-before').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/DividerBelowDiscountCode.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.reductions.render-after').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/TermsAndConditions.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}
