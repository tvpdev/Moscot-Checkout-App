import type { LoaderFunctionArgs } from "react-router";
import { Form, redirect, useLoaderData } from "react-router";

import { login } from "../../shopify.server";

import "./style.css";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function Index() {
  const { showForm } = useLoaderData<typeof loader>();

  return (
    <div className="index">
      <div className="content">
        <h1>Moscot Checkout</h1>
        <p>Checkout extensions and branding for Moscot stores.</p>
        {showForm && (
          <Form method="post" action="/auth/login">
            <label>
              <span>Shop domain</span>
              <input type="text" name="shop" />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button type="submit">Log in</button>
          </Form>
        )}
      </div>
    </div>
  );
}
