# react-admin-copyfield

A simple, reusable `CopyField` component for React Admin and MUI. Supports copying a value from a field with a single click and tooltip feedback.

## Install

```bash
npm install react-admin-copyfield
```
# Usage
```js
import { CopyField } from 'react-admin-copyfield'
import { TextField } from 'react-admin'

<CopyField>
  <TextField source="email" />
</CopyField>

<CopyField text="secret-code" />

```
# License
- MIT
