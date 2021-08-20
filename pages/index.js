import { EmptyState, Heading, Layout, Page } from "@shopify/polaris";

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="create discounts for customers"
        action={{
          content: 'Create Discounts',
          onAction: () => this.setState({ open: true }),
        }}
        image="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/potato.png"
      >

      </EmptyState>
    </Layout>
    <Heading>Obi App!</Heading>
  </Page>
);

export default Index;
