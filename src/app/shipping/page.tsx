export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Information</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Times</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-semibold w-32">Standard:</span>
              <span>3-5 business days</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-32">Express:</span>
              <span>1-2 business days</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-32">International:</span>
              <span>7-14 business days</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Rates</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-semibold w-32">Standard:</span>
              <span>$5.99</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-32">Express:</span>
              <span>$12.99</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-32">International:</span>
              <span>Starting from $19.99</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Free Shipping</h2>
          <p className="text-gray-600">
            Free standard shipping is available on orders over $50 within the continental United States.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tracking Your Order</h2>
          <p className="text-gray-600">
            Once your order ships, you will receive a confirmation email with tracking information.
            You can also track your order by logging into your account and viewing your order history.
          </p>
        </section>
      </div>
    </div>
  );
} 