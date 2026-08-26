import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div
        className="rounded-2xl p-12 border text-center max-w-lg"
        style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}
      >
        <p
          className="font-display italic text-4xl mb-6"
          style={{ color: 'var(--rust-dark)' }}
        >
          Sold.
        </p>
        <h1
          className="font-display text-3xl mb-4"
          style={{ color: 'var(--ink)' }}
        >
          It's yours now
        </h1>
        <p className="mb-8 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Naomi will wrap it herself and post a note with the parcel. Thank
          you for giving it a second home.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.08em]"
          style={{ background: 'var(--rust)', color: '#fbf3e3' }}
        >
          Back to the shelf
        </Link>
      </div>
    </div>
  )
}
