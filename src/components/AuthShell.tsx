import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function AuthShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-5 py-8 sm:px-10">
        <Link to="/" aria-label="Tang Tech – home" className="w-fit">
          <img src="/images/logo.webp" alt="Tang Tech Engineering Ltd" width={260} height={226} className="h-14 w-auto" />
        </Link>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {children}
        </div>
      </div>
      <div className="relative hidden bg-ink-900 lg:block">
        <img src="/images/electrical.webp" alt="" className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="grid-bg absolute inset-0" />
        <div className="relative flex h-full items-end p-12">
          <p className="max-w-sm text-2xl font-semibold leading-snug text-white">Electrical, ICT, security and automation solutions you can rely on.</p>
        </div>
      </div>
    </div>
  )
}
