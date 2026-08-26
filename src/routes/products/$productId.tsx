import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] mb-8"
        style={{ color: 'var(--rust-dark)' }}
      >
        &larr; Back to the shelf
      </Link>

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-12">
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded-full"
              style={{
                color: '#fbf3e3',
                background:
                  product.category === 'clothing'
                    ? 'var(--mustard)'
                    : 'var(--olive)',
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

          <h1
            className="font-display text-4xl leading-tight mb-4"
            style={{ color: 'var(--ink)' }}
          >
            {product.name}
          </h1>

          <p
            className="leading-relaxed mb-8"
            style={{ color: 'var(--ink-soft)' }}
          >
            {product.description}
          </p>

          <div
            className="flex items-center justify-between border-t pt-6"
            style={{ borderColor: 'var(--line)' }}
          >
            <span
              className="font-display text-3xl"
              style={{ color: 'var(--ink)' }}
            >
              ${product.price}
            </span>
            <BuyButton productId={product.id} />
          </div>

          <p
            className="text-xs mt-6 leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            One of one. Once it's gone, we won't be reordering it &mdash;
            there's nowhere to reorder it from.
          </p>
        </div>
      </div>
    </div>
  )
}
