// Embeds every chart on the page. Each entry maps a container id in
// index.html to its Vega-Lite spec in this folder (js/<id>.vg.json).
const charts = [
  "youth_trend",
  "youth_compare",
  "state_unemployment_map",
  "state_unemployment_rank",
  "labour_scatter",
  "labour_composition",
  "cpi_heatmap",
  "cpi_trend",
  "income_expenditure_scatter",
  "income_pressure_rank",
  "pressure_index",
  "pressure_components",
];

charts.forEach((id) => {
  vegaEmbed(`#${id}`, `js/${id}.vg.json`, { actions: false }).catch((err) =>
    console.error(`Could not render ${id}:`, err)
  );
});
