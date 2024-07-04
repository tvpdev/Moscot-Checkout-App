import React, { useEffect, useState } from "react";
import {
  reactExtension,
  BlockStack,
  Checkbox,
  ConsentPhoneField,
  Text,
  Link,
  useApplyAttributeChange,
  InlineStack,
  InlineLayout,
  View,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.delivery-address.render-after", () => <App />);

function App() {
  const [checked, setChecked] = useState(false);
  const [phoneFieldValue, setPhoneFieldValue] = useState("");

  const handleChange = () => {
    setChecked(!checked);
  };

  const noteUpdate = useApplyAttributeChange();

  return (
    <BlockStack>
      <Checkbox checked={checked} onChange={handleChange}>
        Text me with news and offers
      </Checkbox>
      {checked && (
        <>
          <InlineLayout columns={['5%', 'fill']}>
            <View></View>
            <View>
              <InlineStack >
                <View minInlineSize={361}>
                  <ConsentPhoneField
                    label="Mobile phone number"
                    policy="sms-marketing"
                    value={phoneFieldValue}
                    onChange={(newPhoneFieldValue) => {
                      setPhoneFieldValue(newPhoneFieldValue);
                      noteUpdate({
                        type: "updateAttribute",
                        key: "ConsentPhoneNumber",
                        value: newPhoneFieldValue,
                      });
                    }}
                  />
                </View>
                <View>
                  <Text size="base" appearance="info">
                    By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our <Link to="https://moscot.com/policies/privacy-policy">Privacy Policy</Link> and <Link to="https://moscot.com/policies/terms-of-service">Terms of Service</Link>.
                  </Text>
                </View>
              </InlineStack>
            </View>
          </InlineLayout>
        </>
      )}
    </BlockStack>
  );
}






