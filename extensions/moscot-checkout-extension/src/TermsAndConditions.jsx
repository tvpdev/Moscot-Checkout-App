import {
    Link,
    reactExtension,
    Text,
    useApi,
  } from '@shopify/ui-extensions-react/checkout';
  
  export default reactExtension(
    'purchase.checkout.block.render',
    () => <Extension />,
  );
  
  function Extension() {
  
    // const {settings} = useApi()
    // console.log(settings.current.terms_conditions)
  
    return (
      <Text appearance='info'>
        By clicking below and completing your order, you agree to purchase your item(s) from Global-e as merchant of record for this transaction, on Global-e's <Link>Terms of Sale</Link> and <Link>Privacy Policy</Link>. Global-e is an international fulfilment service provider to MOSCOT.
      </Text>
    );
  }