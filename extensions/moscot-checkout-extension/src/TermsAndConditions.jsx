import "@shopify/ui-extensions/preact";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-text tone="info">
      By clicking below and completing your order, you agree to purchase your
      item(s) from Global-e as merchant of record for this transaction, on
      Global-e's{" "}
      <s-link href="https://www.global-e.com/terms-of-sale/">
        Terms of Sale
      </s-link>{" "}
      and{" "}
      <s-link href="https://www.global-e.com/privacy-policy/">
        Privacy Policy
      </s-link>
      . Global-e is an international fulfilment service provider to MOSCOT.
    </s-text>
  );
}
