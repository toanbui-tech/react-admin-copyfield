# react-admin-copyfield

A simple, reusable `CopyField` component for React Admin and MUI. Supports copying a value from a field with a single click and tooltip feedback.

## Features

- 🎯 **Simple Integration**: Easy to use with React Admin fields
- 📋 **One-Click Copy**: Copy values to clipboard with a single click
- 💡 **Visual Feedback**: Tooltip shows copy status
- ♿ **Accessible**: Proper ARIA labels and keyboard navigation
- 🎨 **Customizable**: Supports custom styling via MUI's `sx` prop

## Install

```bash
npm install react-admin-copyfield
```

or

```bash
yarn add react-admin-copyfield
```

## Usage

### Basic Usage with React Admin Field

```jsx
import { CopyField } from 'react-admin-copyfield'
import { TextField } from 'react-admin'

// Copy the value from a TextField
<CopyField>
  <TextField source="email" />
</CopyField>
```

### Direct Text Copy

```jsx
import { CopyField } from 'react-admin-copyfield'

// Copy a specific text value
<CopyField text="secret-code-123" />
```

### Custom Styling

```jsx
import { CopyField } from 'react-admin-copyfield'
import { TextField } from 'react-admin'

<CopyField 
  sx={{ 
    color: 'primary.main',
    '&:hover': { 
      backgroundColor: 'action.hover' 
    } 
  }}
>
  <TextField source="apiKey" />
</CopyField>
```

### Multiple Fields

```jsx
import { CopyField } from 'react-admin-copyfield'
import { TextField, NumberField } from 'react-admin'

// Copy email
<CopyField>
  <TextField source="email" />
</CopyField>

// Copy phone number
<CopyField>
  <NumberField source="phone" />
</CopyField>

// Copy static text
<CopyField text="support@example.com" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Direct text to copy (if not using children) |
| `children` | `ReactNode` | - | React Admin field component to wrap |
| `sx` | `object` | - | MUI sx prop for custom styling |

## Requirements

- React 16.8+
- React Admin 4.0+
- Material-UI 5.0+

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
