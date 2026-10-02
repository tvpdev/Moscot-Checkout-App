import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useState } from "preact/hooks";

export default async () => {
  render(<App />, document.body);
};

function App() {
  const [checked, setChecked] = useState(false);
  const [phoneFieldValue, setPhoneFieldValue] = useState("");

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <s-stack direction="block" gap="base">
      <s-checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        label="Text me with news and offers"
      />
      {checked && (
        <s-grid gridTemplateColumns="5% 1fr" gap="base">
          <s-box />
          <s-stack direction="inline" gap="base">
            <s-box minInlineSize="361px">
              <s-consent-phone-field
                label="Mobile phone number"
                name="consentPhone"
                value={phoneFieldValue}
                onChange={async (event) => {
                  const newPhoneFieldValue = event.target.value;
                  setPhoneFieldValue(newPhoneFieldValue);
                  await shopify.applyAttributeChange({
                    type: "updateAttribute",
                    key: "ConsentPhoneNumber",
                    value: newPhoneFieldValue,
                  });
                }}
              />
            </s-box>
            <s-text tone="info">
              By signing up via text, you agree to receive recurring automated
              marketing messages, including cart reminders, at the phone number
              provided. Consent is not a condition of purchase. Reply STOP to
              unsubscribe. Reply HELP for help. Message frequency varies. Msg &
              data rates may apply. View our{" "}
              <s-link href="https://moscot.com/policies/privacy-policy">
                Privacy Policy
              </s-link>{" "}
              and{" "}
              <s-link href="https://moscot.com/policies/terms-of-service">
                Terms of Service
              </s-link>
              .
            </s-text>
          </s-stack>
        </s-grid>
      )}
    </s-stack>
  );
}
