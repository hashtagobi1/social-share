import { Page, Layout, EmptyState, Button, Card, Heading } from "@shopify/polaris";
import React, { useState } from 'react'
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react'
import ResourceListWithProducts from "./components/ResourceList";
import store from 'store-js'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const Index = () => {

  const [open, setOpen] = useState(false)

  const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"

  // Functions

  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    setOpen(false);
    store.set('ids', idsFromResources)
    console.log(resources, idsFromResources);
  }
  const handleCancel = () => {
    setOpen(false)
    console.log('Closed')
  }
  // a constant defines your app's empty state
  const emptyState = !store.get('ids')


  return (

    <Page>

      <TitleBar
        primaryAction={{
          content: 'Pick some products!!',
          onAction: () => setOpen(true),
        }}
      />

      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => handleCancel()}
      />

      {emptyState ? ( // Controls the layout of your app's empty state
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => setOpen(true)
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      ) : (
        // <p>can you see me</p>
        // Uses the new resource list that retrieves products by IDs
        <ResourceListWithProducts />
      )}

      <Heading>Work in Progress! 😅</Heading>
    </Page>
  )
};

export default Index;
