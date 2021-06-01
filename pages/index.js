import * as React from "react";

export default function Buttons() {
  return (
    <div className="fixed inset-0 bg-white">
      <div className="p-8">
        <h1 className="mb-12 text-4xl">Buttons</h1>

        <h2 className="mb-8 text-2xl">Default button</h2>

        <div className="flex space-x-8">
          <button className="btn btn-black">Button text</button>

          <button className="btn btn-red" disabled>
            Button text
          </button>
        </div>
      </div>
    </div>
  );
}
