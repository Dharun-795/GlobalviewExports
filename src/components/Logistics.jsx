import React from 'react';

export default function Logistics() {
  return (
    <section className="section-padding logistics-section" id="logistics">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shipping & Container Specifications</h2>
          <p className="section-subtitle">
            Exporting Full Container Loads (FCL) to Europe, USA, Middle East, Australia, and Asia.
          </p>
        </div>

        <div className="logistics-grid">
          <div className="logistics-card">
            <h3>Palletized Stretch-Wrapped Loading</h3>
            <ul className="logistics-list">
              <li>
                <span>Blocks per Pallet:</span>
                <span>210 – 240 Blocks (~1,050 – 1,200 Kg)</span>
              </li>
              <li>
                <span>Pallets per 40' HC Container:</span>
                <span>20 – 24 Pallets</span>
              </li>
              <li>
                <span>Net Weight per 40' HC:</span>
                <span>24 – 25 Metric Tons</span>
              </li>
              <li>
                <span>Pallet Standards:</span>
                <span>ISPM 15 Heat-Treated Pallets + UV Shrink Wrap</span>
              </li>
              <li>
                <span>Unloading Benefit:</span>
                <span>Fast automated forklift unloading at destination port</span>
              </li>
            </ul>
          </div>

          <div className="logistics-card">
            <h3>Bulk Bare Block Floor Loading</h3>
            <ul className="logistics-list">
              <li>
                <span>Loading Format:</span>
                <span>Direct floor-loaded bare blocks / bulk cartons</span>
              </li>
              <li>
                <span>Blocks per 40' HC Container:</span>
                <span>Approx. 5,200 Blocks</span>
              </li>
              <li>
                <span>Maximum Net Payload:</span>
                <span>26 Metric Tons (Maximum container capacity)</span>
              </li>
              <li>
                <span>Freight Advantage:</span>
                <span>Highest tonnage per container for maximum freight savings</span>
              </li>
            </ul>

            <div className="ports-tag">
              <strong>Connecting Indian Sea Ports:</strong> Tuticorin Port (VOCPT) • Cochin Port • Chennai Port
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
