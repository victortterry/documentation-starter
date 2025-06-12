import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started | Minimal Docs Site",
  description: "Learn how to get started with our documentation",
}

export default function GettingStarted() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
      <p className="text-xl mb-4">
        Welcome to the getting started guide for our documentation site. Follow these steps to set up your environment
        and begin using our tools.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🧩 Installation & Setup</h2>

      <h3 className="text-xl font-semibold mb-2">1. Clone the Repo</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>git clone https://github.com/tochi2055/shopamour.git
cd shopamour</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. Install Dependencies</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>npm install
# or
yarn install</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. Environment Variables</h3>
      <p className="mb-2">Create a <code>.env.local</code> file in the root and add:</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
CMS_PROJECT_ID=your-sanity-project-id
CMS_DATASET=production
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">4. Set Up CMS</h3>
      <p className="mb-2 font-medium">For <strong>Sanity.io</strong>:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Run <code>sanity init</code> in your CMS folder.</li>
        <li>Define schemas for products (name, slug, img, price, description).</li>
        <li>Deploy dataset and confirm <code>projectId</code> & <code>dataset</code> match <code>.env.local</code>.</li>
      </ul>
      <p className="mb-2 font-medium">For <strong>Contentful</strong>:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Create a Space and setup Content model “Product”.</li>
        <li>Add entries and copy the Content Delivery API token to <code>.env.local</code>.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">5. Configure Stripe</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Enable Test Mode in your Stripe Dashboard.</li>
        <li>Copy the publishable and secret keys.</li>
        <li>Create a webhook for <code>checkout.session.completed</code> and add it to <code>.env.local</code>.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">6. Run Locally</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>npm run dev
# or
yarn dev</code>
      </pre>
      <p className="mb-4">Browse to <code>http://localhost:3000</code></p>

      <h3 className="text-xl font-semibold mb-2">7. Build for Production</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>npm run build
npm start</code>
      </pre>
      <p className="mb-4">Ensure <code>.env.production</code> has correct variables.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🧪 Running Tests (Optional)</h2>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>npm test
# or
yarn test</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📦 Deployment</h2>
      <p className="mb-2 font-medium">With <strong>Vercel</strong> (recommended):</p>
      <ul className="list-disc list-inside mb-4">
        <li>Connect GitHub repo</li>
        <li>Add environment variables in project settings</li>
        <li>Deploy — Vercel auto-builds and previews</li>
      </ul>

      <p className="mb-2 font-medium">With <strong>Netlify</strong>:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Set build command to <code>npm run build && npm start</code></li>
        <li>Configure environment variables</li>
        <li>Deploy following Netlify’s instructions</li>
      </ul>

      <p className="mt-4">For more detailed information, check out the Components and API Reference sections.</p>
    </main>
  )
}
