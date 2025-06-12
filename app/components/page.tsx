import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components | Minimal Docs Site",
  description: "Explore the components available in our library",
}

export default function Components() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <p className="text-xl mb-4">
        Our library provides a set of reusable components to help you build your application faster. Here's an
        overview of some key components:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🖼️ Screenshot Documentation – ShopX Interface</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">📷 Image 1: Home Page with Flash Sales</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Special Offer Banner:</strong> Text with <code>font-bold</code> and <code>text-sm</code></li>
        <li><strong>Greeting:</strong> <code>text-2xl font-bold</code></li>
        <li><strong>Buttons:</strong> 
          <ul className="list-disc list-inside ml-4">
            <li><code>Start Selling</code>: <code>bg-orange-100 px-4 py-2 rounded</code></li>
            <li><code>Browse Products</code>: <code>border px-4 py-2 rounded</code></li>
          </ul>
        </li>
        <li><strong>Flash Sales:</strong> Section with grid layout, red badge for discounts</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📷 Image 2: Dark Mode Product View</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Navbar:</strong> Logo and icons (theme, cart, profile)</li>
        <li><strong>Cards:</strong> <code>text-white</code> over <code>bg-zinc-900</code></li>
        <li><strong>Star Ratings:</strong> <code>text-yellow-400</code></li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📷 Image 3: Extended Product Listings</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Shows products like Water Bottles, Mugs, Fitness Bands</li>
        <li>Each card has: Category, Title, Rating, Price, Image</li>
        <li>Layout: Responsive Tailwind-powered grid</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📷 Image 4: Newsletter Signup</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Headline:</strong> <code>text-3xl font-bold</code></li>
        <li><strong>Form:</strong> Input with <code>border p-2 rounded bg-muted text-sm</code></li>
        <li><strong>Preferences:</strong> Checkbox list</li>
        <li><strong>Subscribe Button:</strong> <code>bg-orange-100 px-6 py-2 rounded w-full</code></li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📷 Image 5: User Profile Page</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Tabs:</strong> Profile Info, Order History, Listings</li>
        <li><strong>Avatar:</strong> <code>rounded-full bg-gray-800 w-20 h-20</code></li>
        <li><strong>Stats Grid:</strong> <code>font-bold text-2xl</code> with muted text below</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📘 Summary of Styling</h2>
      <table className="table-auto w-full text-sm mb-8">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Element</th>
            <th className="text-left p-2">Tailwind Classes</th>
            <th className="text-left p-2">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Headers</td>
            <td className="p-2">text-xl/2xl/4xl font-bold</td>
            <td className="p-2">Visual hierarchy</td>
          </tr>
          <tr>
            <td className="p-2">Buttons</td>
            <td className="p-2">px-4 py-2 rounded bg-* or border</td>
            <td className="p-2">Clear CTAs</td>
          </tr>
          <tr>
            <td className="p-2">Cards</td>
            <td className="p-2">bg-muted shadow rounded-lg</td>
            <td className="p-2">Uniform product display</td>
          </tr>
          <tr>
            <td className="p-2">Icons</td>
            <td className="p-2">lucide-react w/ hover:text-primary</td>
            <td className="p-2">Modern interactive UI</td>
          </tr>
          <tr>
            <td className="p-2">Grids</td>
            <td className="p-2">grid grid-cols-* gap-*</td>
            <td className="p-2">Responsive product layouts</td>
          </tr>
          <tr>
            <td className="p-2">Dark Mode</td>
            <td className="p-2">bg-zinc-900 text-white</td>
            <td className="p-2">Accessible, toggle-enabled theme</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        For more visual examples and real UI usage, explore our components in the live app demo.
      </p>
    </div>
  )
}
