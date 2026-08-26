import { useMemo, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import products, { type Category } from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

const FILTERS: Array<{ label: string; value: Category | 'all' }> = [
  { label: 'Everything', value: 'all' },
  { label: 'Clothing', value: 'clothing' },
  { label: 'Homeware', value: 'homeware' },
]

function tagColor(category: Category) {
  return category === 'clothing' ? 'var(--mustard)' : 'var(--olive)'
}

function ProductsIndex() {
  const [filter, setFilter] = useState<Category | 'all'>('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  )

  return (
    <div>
      <section className="px-6 pt-16 pb-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-end">
          <div className="rise-in">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--rust-dark)' }}
            >
              One shelf, restocked by hand
            </p>
            <h1
              className="font-display text-5xl md:text-6xl leading-[1.05] mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Worn-in clothes and
              <br />
              <span className="italic">lived-with</span> objects.
            </h1>
            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: 'var(--ink-soft)' }}
            >
              Naomi sources every piece herself — from estate sales, closing
              shops, and the occasional attic. Nothing is reproduced. Nothing
              is new. Flaws are noted, not hidden.
            </p>
          </div>
          <div
            className="rise-in border rounded-3xl p-6 md:p-8 md:-rotate-1"
            style={{
              borderColor: 'var(--line)',
              background: 'var(--paper)',
              animationDelay: '0.12s',
            }}
          >
            <p
              className="font-display italic text-xl mb-2"
              style={{ color: 'var(--ink)' }}
            >
              "If it's chipped, torn, or a little uneven, I'll tell you before
              you tell me."
            </p>
            <p
              className="text-sm uppercase tracking-[0.14em]"
              style={{ color: 'var(--ink-soft)' }}
            >
              &mdash; Naomi, owner
            </p>
          </div>
        </div>
      </section>

      <section id="catalog" className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => {
            const active = filter === f.value
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className="px-4 py-2 rounded-full text-sm font-medium uppercase tracking-[0.08em] transition-colors border"
                style={{
                  borderColor: active ? 'var(--rust-dark)' : 'var(--line)',
                  background: active ? 'var(--rust)' : 'transparent',
                  color: active ? '#fbf3e3' : 'var(--ink-soft)',
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((product, index) => (
            <article
              key={product.id}
              className="rise-in border rounded-2xl overflow-hidden flex flex-col"
              style={{
                borderColor: 'var(--line)',
                background: 'var(--paper)',
                animationDelay: `${Math.min(index, 6) * 0.06}s`,
              }}
            >
              <Link
                to="/products/$productId"
                params={{ productId: product.id.toString() }}
                className="block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded-full"
                    style={{
                      color: '#fbf3e3',
                      background: tagColor(product.category),
                    }}
                  >
                    {product.category}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {product.era}
                  </span>
                </div>
                <h2
                  className="font-display text-xl mb-2 leading-snug"
                  style={{ color: 'var(--ink)' }}
                >
                  <Link
                    to="/products/$productId"
                    params={{ productId: product.id.toString() }}
                  >
                    {product.name}
                  </Link>
                </h2>
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-xl"
                    style={{ color: 'var(--ink)' }}
                  >
                    ${product.price}
                  </span>
                  <BuyButton productId={product.id} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
