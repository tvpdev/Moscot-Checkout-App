import "@shopify/ui-extensions/preact";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack direction="block" gap="small-200">
      <s-box padding="small-200" border="base" borderRadius="base">
        <s-text>Please specify your complete address.</s-text>
      </s-box>
    </s-stack>
  );
}
