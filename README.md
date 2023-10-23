# React zz-modal [![npm package](https://img.shields.io/npm/v/zz-modal.svg?style=flat-square)](https://www.npmjs.org/package/zz-modal)

React zz-modal is a easiest way to create and custom a dialog in your app.

- Very small (less than 10Kb)
- Mobile friendly
- Without dependencies
- Customizable 

## Installation

`npm i zz-modal`

## Usage

```jsx
import { Modal } from "zz-modal"
import { useState } from "react"

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
	 <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal active={showModal} setActive={setShowModal}>
        <p>Your content goes here !</p>
      </Modal>
    </div>
  )
}
```

* Add your styles to the Modal component by passing additional props `customClass`:

Example :
```jsx
<Modal active={showModal} setActive={setShowModal} customClass="myOwnClass">
        {children}
      </Modal>
```

## Props

The `Modal` component accepts the following props:

- `active` (boolean, required): Whether the modal is open or closed.
- `setActive` (function, required) : Triggers `active` props value.
- `children` (ReactNode) : Children passed to the modal body, your own content.
- `customClass` (string, optional) :  Custom CSS class name to be added to the modal for additional styling or customization in your usual way.