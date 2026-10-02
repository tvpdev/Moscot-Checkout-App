import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useShippingAddress } from "@shopify/ui-extensions/checkout/preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const address = useShippingAddress();

  return (
    <s-stack direction="block" gap="small-400">
      <s-text>All fields are required unless marked as (optional)</s-text>
      {address?.address1 !== "" && address?.address1 !== undefined && (
        <>
          <s-text tone="critical">
            Please specify your complete address.
          </s-text>
        </>
      )}
      <s-text tone="critical">Please update or confirm address</s-text>
    </s-stack>
  );
}
