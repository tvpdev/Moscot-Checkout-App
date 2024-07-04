import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../shopify.server";
import { changeOrderSummaryScheme, colorScheme, deliveryCustomizationFunc, getProfileId, inputFieldFocus, setComponentHeight } from "../models/CheckoutStyle.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  let checkoutProfileId = await getProfileId(admin.graphql);
  checkoutProfileId = checkoutProfileId.data.checkoutProfiles.edges.map(item => item.node.id);
  for (const profileId of checkoutProfileId) {
    await inputFieldFocus(admin.graphql, profileId);
    await colorScheme(admin.graphql, profileId)
    await setComponentHeight(admin.graphql, profileId)
    await changeOrderSummaryScheme(admin.graphql, profileId)
    }
  // await deliveryCustomizationFunc(admin.graphql)

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <ui-nav-menu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/additional">Additional page</Link>
      </ui-nav-menu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
