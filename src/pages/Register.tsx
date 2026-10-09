import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStore } from '../store/StoreContext'
import { AuthShell } from '../components/AuthShell'
import { Field } from '../components/Field'
import { Button } from '../components/ui'
import type { User } from '../types'

export default function Register() {
  usePageMeta('Register', 'Create a Tang Tech account.')
  const { dispatch } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '', verify: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const next: typeof errors = {}
    if (!form.username.trim()) next.username = 'Please choose a username.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email format.'
    if (form.password.length < 6) next.password = 'Password is too short – minimum 6 characters.'
    if (form.password !== form.verify) next.verify = 'Passwords do not match.'
    setErrors(next)
    if (Object.keys(next).length) return

    setLoading(true)
    setServerError('')
    try {
      const user = await api.post<User>('/auth/register', { username: form.username, password: form.password, email: form.email })
      dispatch({ type: 'login', user })
      navigate('/', { replace: true })
    } catch {
      setServerError('Error while registering, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Register">
      <form onSubmit={submit} noValidate className="mt-8 space-y-5">
        <Field label="Username" value={form.username} onChange={set('username')} error={errors.username} autoComplete="username" required />
        <Field label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} autoComplete="email" required />
        <Field label="Password" type="password" value={form.password} onChange={set('password')} error={errors.password} autoComplete="new-password" required />
        <Field label="Verify password" type="password" value={form.verify} onChange={set('verify')} error={errors.verify} autoComplete="new-password" required />
        <Button type="submit" size="lg" className="w-full" loading={loading}>Register</Button>
        <p role="alert" className="min-h-5 text-sm font-medium text-red-700">{serverError}</p>
      </form>
      <p className="text-sm text-ink-600">
        Already a member? <Link to="/login" className="font-semibold text-brand-700 hover:underline">Login</Link>
      </p>
    </AuthShell>
  )
}
