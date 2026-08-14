import React from 'react'

// Load components from the MicroFrontend application
const Button = React.lazy(() => import('MicroFrontend/Button'))
const InputField = React.lazy(() => import('MicroFrontend/InputField'))

export default function App() {
  return (
    <div>
      <label>ShellApplication</label>
      <div className="flex flex-col">
        <InputField typeName="text" placeholder="Enter your name" />
        <InputField typeName="number" placeholder="Enter your age" />
      </div>
      <Button buttonName="Click here" />
    </div>
  )
}
