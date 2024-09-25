import React from 'react'

function PopupOrder() {
  return (
    <div className="max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold mb-4">Are you sure to Place Your Order</h1>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">Acme Widgets</h3>
        <p className="text-muted-foreground">Quantity: 2</p>
      </div>
      <div className="font-medium">$19.99</div>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">Mega Gizmos</h3>
        <p className="text-muted-foreground">Quantity: 1</p>
      </div>
      <div className="font-medium">$49.99</div>
    </div>
    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
    <div className="flex items-center justify-between font-medium">
      <span>Total:</span>
      <span>$69.98</span>
    </div>
  </div>
  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6">
    Place Order
  </button>
</div>
  )
}

export default PopupOrder