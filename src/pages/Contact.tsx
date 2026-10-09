import { useState, type FormEvent } from 'react'
import { CheckCircle2, MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { api } from '../lib/api'
import { usePageMeta } from '../hooks/usePageMeta'
import { CONTACT } from '../data/content'
import { Field, TextArea } from '../components/Field'
import { Button, PageHero } from '../components/ui'

type Errors = Partial<Record<'firstName' | 'email' | 'message', string>>

export default function Contact() {
  usePageMeta('Contact Us', 'Request a quote or send a message to Tang Tech & Engineering Ltd. Call +255659801321 or email info@tangtecheng.com – Kinondoni, Dar es Salaam.')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!form.firstName.trim()) next.firstName = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please write a short message.'
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('sending')
    try {
      await api.post('/messages', {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phoneNumber: form.phoneNumber,
        message: form.message,
      })
      setStatus('sent')
      setForm({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-in">
      <PageHero eyebrow="Contact" title="Let’s talk about your project" description="Drop us a message through the form, email us, or simply give us a call." />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {[
              { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.phone, href: CONTACT.whatsapp },
              { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: MapPin, label: 'Location', value: CONTACT.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card flex items-center gap-4 p-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
                  {href ? (
                    <a href={href} className="break-all font-medium hover:text-brand-700" {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} noValidate className="card space-y-5 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" value={form.firstName} onChange={set('firstName')} error={errors.firstName} autoComplete="given-name" required />
              <Field label="Last name" value={form.lastName} onChange={set('lastName')} autoComplete="family-name" />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} autoComplete="email" placeholder="e.g. example@gmail.com" required />
            <Field label="Phone (optional)" type="tel" value={form.phoneNumber} onChange={set('phoneNumber')} autoComplete="tel" placeholder="xxx xxx xxxx" />
            <TextArea label="Message" value={form.message} onChange={set('message')} error={errors.message} placeholder="Type your message here..." required />

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" loading={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              <p role="status" className="text-sm font-medium">
                {status === 'sent' && (
                  <span className="flex items-center gap-1.5 text-brand-700">
                    <CheckCircle2 className="size-4" aria-hidden /> Message sent – we&rsquo;ll be in touch.
                  </span>
                )}
                {status === 'error' && <span className="text-red-700">Message not sent. Please try again or call us.</span>}
              </p>
            </div>
          </form>
        </div>

        <div className="wrap mt-12">
          <h2 className="text-xl font-semibold">Find us</h2>
          <div className="mt-4 h-72 w-full overflow-hidden rounded-xl border border-ink-100 sm:h-96">
            <iframe
              title="Tang Tech location map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2346.6681862899877!2d39.26396890309323!3d-6.7897110863086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1741382536264!5m2!1sen!2stz"
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}
