export default function AdditionalPage() {
  return (
    <s-page>
      <ui-title-bar title="Additional page" />
      <s-section heading="Checkout extensions">
        <s-paragraph>
          Moscot checkout extensions are configured in the Partner Dashboard and
          deployed with this app. Use the Home page for an overview of what the
          app manages in admin.
        </s-paragraph>
        <s-paragraph>
          To add another admin page, create a route under app/routes and link it
          from the NavMenu in app/routes/app.tsx.
        </s-paragraph>
      </s-section>
      <s-section heading="Resources">
        <s-link
          href="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
          target="_blank"
        >
          App nav best practices
        </s-link>
      </s-section>
    </s-page>
  );
}
