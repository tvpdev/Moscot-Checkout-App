import "@shopify/ui-extensions/preact";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack direction="block" gap="small-200">
      <s-divider direction="inline" />
    </s-stack>
  );
}
