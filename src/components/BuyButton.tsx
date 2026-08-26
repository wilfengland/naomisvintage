import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: productId })
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  if (stripeEnabled === false) {
    return (
      <button
        disabled
        className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.08em] border ${className}`}
        style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}
        title="Checkout is not available"
      >
        Unavailable
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading || stripeEnabled === null}
      className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.08em] transition-opacity disabled:cursor-wait disabled:opacity-60 hover:opacity-85 ${className}`}
      style={{ background: 'var(--rust)', color: '#fbf3e3' }}
    >
      {loading ? 'Wrapping it up…' : 'Claim it'}
    </button>
  )
}
