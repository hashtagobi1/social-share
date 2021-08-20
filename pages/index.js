import { EmptyState, Heading, Layout, Page } from "@shopify/polaris";
import React, { useState } from 'react'


const Index = () => {

  const [open, setOpen] = useState(false)

  if (open) {
    console.log('Clicked!!')
  }


  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select Products',
            onAction: () => setOpen(true)
          }}
          image="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/potato.png"
        >
          <p>Select products to change their price temporarily.</p>

        </EmptyState>
      </Layout>
      <Heading>Obi App!</Heading>
    </Page>

  )
};

export default Index;
