# Cascader

Single selection of data with hierarchical relationship structure.

* `<Cascader>`

## Usage

```js
import { Cascader } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Cascader>`

| Property             | Type`(Default)`                                                                         | Description                                            |
| -------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| appearance           | enum: 'default', 'subtle' `('default')`                                                 | Set picker appearence                                  |
| block                | boolean                                                                                 | Blocking an entire row                                 |
| childrenKey          | string `('children')`                                                                   | Set children key in data                               |
| classPrefix          | string `('picker')`                                                                     | The prefix of the component CSS class                  |
| cleanable            | boolean `(true)`                                                                        | Whether the selected value can be cleared              |
| container            | HTMLElement or (() => HTMLElement)                                                      | Sets the rendering container                           |
| data \*              | Array&lt;[DataItemType](#types)&gt;                                                     | The data of component                                  |
| defaultOpen          | boolean                                                                                 | Default value of open property                         |
| defaultValue         | string                                                                                  | Default values of the selected items                   |
| disabled             | boolean                                                                                 | Disabled component                                     |
| disabledItemValues   | string[]                                                                                | Disabled items                                         |
| height               | number `(320)`                                                                          | The height of Dropdown                                 |
| labelKey             | string `('label')`                                                                      | Set label key in data                                  |
| menuHeight           | number                                                                                  | Sets the height of the menu                            |
| menuWidth            | number                                                                                  | Sets the width of the menu                             |
| onChange             | (value:string, event)=>void                                                             | Callback fired when value change                       |
| onClose              | ()=>void                                                                                | Callback fired when close component                    |
| onGroupTitleClick    | (event)=>void                                                                           | Callback fired when click the group title              |
| onOpen               | ()=>void                                                                                | Callback fired when open component                     |
| onSelect             | (item:[DataItemType](#types), activePaths: Array, concat:(data, children)=>Array)=>void | Callback fired when item is selected                   |
| open                 | boolean                                                                                 | Whether open the component                             |
| placeholder          | React.Node `('Select')`                                                                 | Setting placeholders                                   |
| placement            | enum: [PlacementLeft](#types)`('bottomLeft')`                                           | The placement of component                             |
| renderMenuItem       | (label:React.Node, item: [DataItemType](#types))=>React.Node                            | Custom render menu items                               |
| renderValue          | (value: string, item: [DataItemType](#types), selectedElement:React.Node)=>React.Node   | Custom render selected items                           |
| toggleComponentClass | React.ElementType `('a')`                                                               | You can use a custom element for this component        |
| value                | string                                                                                  | Specifies the values of the selected items(Controlled) |
| valueKey             | string `('value')`                                                                      | Set value key in data                                  |

