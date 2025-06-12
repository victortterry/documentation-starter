import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Reference | Minimal Docs Site",
  description: "Comprehensive guide to the ShopX platform's API endpoints",
}

export default function APIReference() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🧾 API Reference</h1>
      <p className="mb-4">
        Below is a list of core API methods available in the ShopX platform. These APIs allow seamless data integration
        across products, authentication, and checkout services.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">GET /api/products</h3>
      <p className="mb-2">Returns a list of all products from the CMS.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`fetch('/api/products')
  .then(res => res.json())
  .then(data => console.log(data))`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">GET /api/user</h3>
      <p className="mb-2">Retrieves data for the currently authenticated user.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`fetch('/api/user', {
  headers: { Authorization: 'Bearer <token>' }
})
  .then(res => res.json())
  .then(user => console.log(user))`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">POST /api/cart</h3>
      <p className="mb-2">Adds a product to the shopping cart.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`fetch('/api/cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ productId: 'abc123', quantity: 1 })
})`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">POST /api/checkout</h3>
      <p className="mb-2">Creates a Stripe checkout session and redirects the user to payment.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`fetch('/api/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ cartItems })
})`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">GET /api/orders</h3>
      <p className="mb-2">Fetches the user's past orders.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`fetch('/api/orders')
  .then(res => res.json())
  .then(data => console.log(data))`}</code>
      </pre>

      <p className="mt-6">
        For more details or custom integrations, refer to the backend service documentation or contact the development team.
      </p>
    </div>
  )
}
