# DatePicker

To select or input a date or time

* `<DatePicker>`

> When you need to select a date range, it is recommended to use [`<DateRangePicker>`](./date-range-picker)

## Usage

```js
import { DatePicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<DatePicker>`

| Property              | Type`(default)`                                | Description                                                                          |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| appearance            | enum: 'default', 'subtle' `('default')`        | Set picker appearence                                                                |
| block                 | boolean                                        | Blocking an entire row                                                               |
| calendarDefaultDate   | Moment                                         | Calendar panel default presentation date and time                                    |
| cleanable             | boolean `(true)`                               | Whether the selected value can be cleared                                            |
| container             | HTMLElement or (() => HTMLElement)             | Sets the rendering container                                                         |
| defaultOpen           | boolean                                        | Default value of open property                                                       |
| defaultValue          | Moment                                         | Default value                                                                        |
| disabled              | boolean                                        | Whether disabled the component                                                       |
| disabledDate          | (date:Moment)=>boolean                         | Disabled date                                                                        |
| disabledHours         | (hour:number, date:Moment)=>boolean            | Disabled hours                                                                       |
| disabledMinutes       | (minute:number, date:Moment)=>boolean          | Disabled minutes                                                                     |
| disabledSeconds       | (second:number, date:Moment)=>boolean          | Disabled seconds                                                                     |
| format                | string `('YYYY-MM-DD')`                        | Format date                                                                          |
| hideHours             | (hour:number, date:Moment)=>boolean            | Hidden hours                                                                         |
| hideMinutes           | (minute:number, date:Moment)=>boolean          | Hidden minutes                                                                       |
| hideSeconds           | (second:number, date:Moment)=>boolean          | Hidden seconds                                                                       |
| inline                | boolean                                        | Display date panel when component initial                                            |
| isoWeek               | boolean                                        | ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day |
| limitEndYear          | number `(1000)`                                | Set the lower limit of the available year relative to the current selection date     |
| locale                | Object [`(Locale)`](#Locale)                   | i18n config                                                                          |
| onChange              | (date:Moment)=>void                            | Callback fired when value changed                                                    |
| onChangeCalendarDate  | (date: Moment, event?: SyntheticEvent) => void | Callback function that changes the calendar date.                                    |
| onClose               | ()=>void                                       | Callback fired when close component                                                  |
| onNextMonth           | (date: Moment) => void                         | Switch to the callback function for the next Month                                   |
| onOk                  | (date: Moment, event: SyntheticEvent) => void  | Click the OK callback function                                                       |
| onOpen                | ()=>void                                       | Callback fired when open component                                                   |
| onPrevMonth           | (date: Moment) => void                         | Switch to the callback function for the previous Month                               |
| onSelect              | (date:Moment)=>void                            | Callback fired when date or time is selected                                         |
| onToggleMonthDropdown | (open: boolean) => void                        | Callback function that switches to the month view                                    |
| onToggleTimeDropdown  | (open: boolean) => void                        | Callback function that switches to the time view                                     |
| open                  | boolean                                        | Whether open the component                                                           |
| placeholder           | string                                         | Placeholder                                                                          |
| placement             | enum: [Placement](#types) `('bottomLeft')`     | The placement of component                                                           |
| ranges                | Array<[Range](#types)> [`(Ranges)`](#Ranges)   | Shortcut config                                                                      |
| toggleComponentClass  | React.ElementType `('a')`                      | You can use a custom element for this component                                      |
| value                 | Moment                                         | Value (Controlled)                                                                   |


## Default

### Locale

```js
const Locale = {
  sunday: 'Su',
  monday: 'Mo',
  tuesday: 'Tu',
  wednesday: 'We',
  thursday: 'Th',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds'
};
```

### Ranges

```js
const Ranges = [
  {
    label: 'today',
    value: Moment(),
    closeOverlay: true
  },
  {
    label: 'yesterday',
    value: Moment().add(-1, 'd'),
    closeOverlay: true
  }
];
```
