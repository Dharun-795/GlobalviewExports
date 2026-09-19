import React from 'react';

const comparisonData = [
  {
    param: 'Electrical Conductivity (EC)',
    lowEc: '< 0.5 mS/cm (Freshwater desalinated)',
    highEc: '> 0.8 mS/cm (Natural mineral content)',
    isStrong: true
  },
  {
    param: 'pH Range',
    lowEc: '5.5 to 6.8 (Optimal for root uptake)',
    highEc: '5.5 to 6.5'
  },
  {
    param: 'Washing Treatment',
    lowEc: 'Thoroughly washed with clean fresh water',
    highEc: 'Screened & de-dusted without washing'
  },
  {
    param: 'Primary Applications',
    lowEc: 'Hydroponic greenhouses, Potting soil, Vegetables, Berries, Seed germination',
    highEc: 'Horse stable bedding, Livestock sheds, Soil conditioner, Composting, Oil absorbent'
  },
  {
    param: 'Moisture Content',
    lowEc: '10% – 15% Maximum',
    highEc: '10% – 15% Maximum'
  },
  {
    param: 'Expansion Yield (5kg)',
    lowEc: '75 – 80 Liters per block',
    highEc: '70 – 75 Liters per block'
  },
  {
    param: 'Fibre & Impurities',
    lowEc: 'Fibre < 2%, Sand/Impurities < 3%',
    highEc: 'Fibre < 2%, Impurities < 2%'
  },
  {
    param: 'Block Dimensions',
    lowEc: '30 x 30 x 11 cm (11.8 x 11.8 x 4.3 in)',
    highEc: '30 x 30 x 11 cm (11.8 x 11.8 x 4.3 in)'
  },
  {
    param: 'Container Load (40\' HC)',
    lowEc: 'Palletized: 24–25 MT | Bare Block: 26 MT',
    highEc: 'Palletized: 24–25 MT | Bare Block: 26 MT'
  }
];

export default function ComparisonTable() {
  return (
    <section className="section-padding comparison-section" id="specs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Low EC vs High EC Comparison</h2>
          <p className="section-subtitle">
            Detailed technical comparison to select the appropriate grade for your specific crop or animal farming requirements.
          </p>
        </div>

        <div className="table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th>Technical Parameter</th>
                <th>Low EC Grade (Washed)</th>
                <th>High EC Grade (Unwashed)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className="param">{row.param}</td>
                  <td>{row.isStrong ? <strong>{row.lowEc}</strong> : row.lowEc}</td>
                  <td>{row.isStrong ? <strong>{row.highEc}</strong> : row.highEc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
