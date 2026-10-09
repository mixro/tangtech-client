import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStore } from '../store/StoreContext'
import { AuthShell } from '../components/AuthShell'
import { Field } from '../components/Field'
import { Button } from '../components/ui'
import type { User } from '../types'

export default function Login() {
  usePageMeta('Login', 'Log in to your Tang Tech account.')
  const { dispatch } = useStore()
  const navigate = useNavigate()
  const from = (useLocation().state as { from?: string } | null)?.from ?? '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const user = await api.post<User>('/auth/login', { email, password })
      dispatch({ type: 'login', user })
      navigate(from, { replace: true })
    } catch {
      setError('Wrong credentials, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Login">
      <form onSubmit={submit} className="mt-8 space-y-5">
        <Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="e.g. johndoe@gmail.com" required />
        <Field label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Enter password" required />
        <Button type="submit" size="lg" className="w-full" loading={loading}>Login</Button>
        <p role="alert" className="min-h-5 text-sm font-medium text-red-700">{error}</p>
      </form>
      <p className="text-sm text-ink-600">
        Don&rsquo;t have an account? <Link to="/register" className="font-semibold text-brand-700 hover:underline">Register now</Link>
      </p>
    </AuthShell>
  )
}
