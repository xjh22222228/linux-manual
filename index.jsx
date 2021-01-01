import React, { useState, useEffect } from 'react'

function GitMergeDemo() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setNumber(1000)
  }, [])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Inc</button>
    </div>
  )
}

export default GitMergeDemo
