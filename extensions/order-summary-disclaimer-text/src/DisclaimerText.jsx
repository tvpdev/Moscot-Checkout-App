import {
    reactExtension,
    Text,
    useApi,
  } from '@shopify/ui-extensions-react/checkout';
  
  export default reactExtension(
    'purchase.checkout.block.render',
    () => <Extension />,
  );
  
  function Extension() {

    const data = useApi();

    return (
      <Text appearance='decorative'>
        The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery.	
      </Text>
    );
  }
  