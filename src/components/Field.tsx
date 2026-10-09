import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

interface Common {
  label: string
  error?: string
  hint?: string
}

export function Field({ label, error, hint, ...props }: Common & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...props} className="field" />
      {hint && !error && <p className="mt-1 text-xs text-ink-500">{hint}</p>}
      {error && (
        <p id={`${id}-e`} className="mt-1 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextArea({ label, error, ...props }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <textarea id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...props} className="field min-h-32 resize-y" />
      {error && (
        <p id={`${id}-e`} className="mt-1 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
