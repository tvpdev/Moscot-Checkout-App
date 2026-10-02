import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { Link, Outlet, useLoaderData, useRouteError } from "react-router";
import { NavMenu } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider } from "@shopify/shopify-app-react-router/react";

import { authenticate } from "../shopify.server";
import {
  changeOrderSummaryScheme,
  colorScheme,
  getProfileId,
  inputFieldFocus,
  setComponentHeight,
} from "../models/CheckoutStyle.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  // Apply Moscot checkout branding to all checkout profiles on each admin load.
  const profileResponse = await getProfileId(admin.graphql);
  const checkoutProfileIds =
    profileResponse.data.checkoutProfiles.edges.map(
      (item: { node: { id: string } }) => item.node.id,
    );
  for (const profileId of checkoutProfileIds) {
    await inputFieldFocus(admin.graphql, profileId);
    await colorScheme(admin.graphql, profileId);
    await setComponentHeight(admin.graphql, profileId);
    await changeOrderSummaryScheme(admin.graphql, profileId);
  }

  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <AppProvider embedded apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/additional">Additional page</Link>
      </NavMenu>
      <Outlet />
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
