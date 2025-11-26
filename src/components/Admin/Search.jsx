import React from 'react'

export default function Search({value, onChange, placeholder, className= ''}) {
  return (
    <input type="search" 
           value={value}
           onChange={(e) => onChange(e.target.value)} 
           placeholder={placeholder || 'search...'}
           className={`w-80 p-3 border rounded-lg focus:ring-2 focus:ring-rose-700 bg-transparent outline-none ${className}` }/>
  )
}
