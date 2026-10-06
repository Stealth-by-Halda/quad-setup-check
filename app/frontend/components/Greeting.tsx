import { useState } from 'react'

export interface GreetingProps {
  name: string
}

export function Greeting({ name }: GreetingProps) {
  const [count, setCount] = useState(0)

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <p className="mb-4 text-lg">Hello, {name}!</p>
      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="rounded-lg bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700"
      >
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}
