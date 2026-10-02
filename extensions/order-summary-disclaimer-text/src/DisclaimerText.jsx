import "@shopify/ui-extensions/preact";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-text color="subdued">
      The total amount you pay includes all applicable customs duties & taxes.
      We guarantee no additional charges on delivery.
    </s-text>
  );
}
