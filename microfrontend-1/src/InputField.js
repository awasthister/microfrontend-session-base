import React from 'react'

export default function InputField({typeName, placeholder}) {
  return (
    <input type={typeName} placeholder={placeholder} />
  )
}
