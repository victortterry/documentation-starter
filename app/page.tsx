import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction | Minimal Docs Site",
  description: "Welcome to our minimal documentation site",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">🛍️ ShopX (ShopAmour)</h1>
      <p className="mb-4">
        ShopX is a lightweight e-commerce storefront built with Next.js + React, featuring product listings, user authentication,
        cart logic, Stripe payments, responsive design, and dark mode support.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">🎯 Key Skills / Tech Stack</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Next.js + React – Server-side rendering & routing</li>
        <li>Stripe API – Secure checkout integration</li>
        <li>Sanity.io (or Contentful) – CMS for managing product data</li>
        <li>Tailwind CSS – Utility-first styling</li>
        <li>Context API (or Redux) – Cart & global state management</li>
        <li>External API fetching – Real-time product data from CMS</li>
        <li>Responsive UI – Mobile-first design with dark/light mode toggle</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">⚙️ Core Features</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>Product Listing:</strong> Pulls data from CMS and displays with images, pricing, and descriptions.</li>
        <li><strong>User Authentication:</strong> Login/signup and order history (e.g., with NextAuth.js or JWT).</li>
        <li><strong>Cart Management:</strong> Add/remove/adjust products in cart via Context/Redux.</li>
        <li><strong>Stripe Checkout:</strong> Secure payment flow via Stripe.</li>
        <li><strong>Dark Mode:</strong> Theme toggle stored in context/localStorage.</li>
        <li><strong>Responsive Design:</strong> Fully optimized for all devices via Tailwind CSS.</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">🖼️ UI Screens Overview</h2>
      <p className="mb-2 font-semibold">📷 Home Page + Navigation</p>
      <p className="mb-4">Shows user greeting, offer banner, CTA buttons, Flash Sales grid — dynamic via CMS.</p>

      <p className="mb-2 font-semibold">📷 Product Listings & Dark Mode</p>
      <p className="mb-4">Displays all products with image, price, reviews in dark theme. Toggle persists.</p>

      <p className="mb-2 font-semibold">📷 Newsletter & Preferences</p>
      <p className="mb-4">Form input with newsletter options — integrated with Mailchimp or internal API.</p>

      <p className="mb-2 font-semibold">📷 Profile Page</p>
      <p className="mb-4">Displays user info, statistics, and tabbed navigation for orders/listings.</p>

      <p className="mb-2 font-semibold">📷 Notifications Page</p>
      <p className="mb-4">Order alerts, messages, updates filtered via tabs — fetched via API.</p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">🧭 Usage Tips</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>Browse:</strong> Navigate product pages and explore details.</li>
        <li><strong>Add to Cart:</strong> Select quantity and add product to cart.</li>
        <li><strong>Auth:</strong> Log in or sign up to save items and check out.</li>
        <li><strong>Checkout:</strong> Secure payment via Stripe API.</li>
        <li><strong>Theme Toggle:</strong> Light/dark mode toggle icon on nav bar.</li>
        <li><strong>View Orders:</strong> Authenticated users can view previous purchases.</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">🪄 Contributing</h2>
      <p className="mb-4">
        We welcome contributions! Fork the repo, create a branch, and submit your changes via pull request.
        Make sure to follow coding guidelines and include tests if applicable.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">❓ FAQs</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>Can I use Contentful instead of Sanity?</strong> Yes, just switch the CMS client and update environment variables.</li>
        <li><strong>How do I customize payment flow?</strong> Extend `/api/create-checkout-session.js` with coupons/shipping.</li>
        <li><strong>Where is order history stored?</strong> Use CMS collection or a DB like MongoDB/Firestore after Stripe success.</li>
      </ul>
    </main>
  )
}
