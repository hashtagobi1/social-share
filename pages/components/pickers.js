// import createApp from "@shopify/app-bridge";
// import { ResourcePicker } from '@shopify/app-bridge/actions'

// const app = createApp({
//     apiKey: '65c354806db5d18ab330d59a1532c6a1',
//     shopOrigin
// })

// const productPicker = ResourcePicker.create(app, {
//     resourceType: ResourcePicker.ResourceType.Product,
// })

// const variantPicker = ResourcePicker.create(app, {
//     resourceType: ResourcePicker.ResourceType.ProductVariant,
// })

// const collectionPicker = ResourcePicker.create(app, {
//     resourceType: ResourcePicker.ResourceType.Collection
// })

// const picker = ResourcePicker.create(app. {
//     resourceType: ResourcePicker.ResourceType.Product,
// })

// picker.subscribe(ResourcePicker.Action.CANCEL, () => {
//     // Picker was cancelled
//     console.log('Cancelled!')
// })

// picker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
//     const selection = selectPayload.selection;
//     console.log(selection)
// })