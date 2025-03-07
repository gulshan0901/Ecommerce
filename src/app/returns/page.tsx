export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Exchanges</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Return Policy</h2>
          <p className="text-gray-600 mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order,
            you can return it within 30 days of delivery for a full refund or exchange.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Items must be unworn and in original condition with tags attached</li>
            <li>Original packaging must be included</li>
            <li>Sale items are final sale and cannot be returned</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Return</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              <span className="font-semibold">Start your return</span>
              <p className="ml-6 mt-2">
                Log into your account and go to your orders. Select the item(s) you wish to return
                and follow the instructions.
              </p>
            </li>
            <li>
              <span className="font-semibold">Pack your items</span>
              <p className="ml-6 mt-2">
                Place the items in their original packaging along with all tags and labels.
              </p>
            </li>
            <li>
              <span className="font-semibold">Ship your return</span>
              <p className="ml-6 mt-2">
                Use the prepaid shipping label provided and drop off your package at any authorized
                shipping location.
              </p>
            </li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Exchanges</h2>
          <p className="text-gray-600 mb-4">
            If you need a different size or color, you can request an exchange instead of a return.
            The process is similar to returns, but you'll select the new item you want during the
            exchange process.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Refund Information</h2>
          <p className="text-gray-600 mb-4">
            Once we receive and process your return, refunds will be issued to your original form
            of payment within 5-7 business days.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              Note: Shipping costs are non-refundable unless the return is due to our error.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 