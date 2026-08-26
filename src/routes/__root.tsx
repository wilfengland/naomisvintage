import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: "Naomi's — Vintage Clothing & Homeware",
      },
      {
        name: 'description',
        content:
          'A small, hand-picked shop of worn-in clothing and lived-with homeware — one careful find at a time.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b" style={{ borderColor: 'var(--line)' }}>
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
              <Link to="/" className="flex items-baseline gap-3">
                <span
                  className="font-display italic text-3xl tracking-tight"
                  style={{ color: 'var(--ink)' }}
                >
                  Naomi's
                </span>
                <span
                  className="hidden sm:inline text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  Vintage &amp; Homeware
                </span>
              </Link>
              <a
                href="#catalog"
                className="text-sm font-medium uppercase tracking-[0.12em] hover:opacity-70 transition-opacity"
                style={{ color: 'var(--rust-dark)' }}
              >
                Shop the shelf
              </a>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer
            className="border-t mt-16"
            style={{ borderColor: 'var(--line)' }}
          >
            <div
              className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm"
              style={{ color: 'var(--ink-soft)' }}
            >
              <p>
                Every piece is secondhand, inspected by hand, and sold as-is —
                that's the point.
              </p>
              <p>Naomi's General Goods &mdash; trading out of the same corner shop since 2011</p>
            </div>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
