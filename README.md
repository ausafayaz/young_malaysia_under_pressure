# Young Malaysia Under Pressure

An interactive data story about the financial pressure facing young Malaysians, and how it differs from state to state. It combines youth unemployment, state labour-market conditions, cost-of-living changes and household income vs. spending into a single custom **pressure index**.

**Live site:** https://ausafayaz.github.io/young_malaysia_under_pressure/

Built with **Vega-Lite** (12 linked charts and maps), plain HTML/CSS and the Pure.css grid. All data comes from official open government sources.

## The story in six questions

| # | Question | Charts |
|---|----------|--------|
| 1 | Are young Malaysians still facing job pressure? | Youth unemployment trend since 2016 |
| 2 | Which youth age group faces higher unemployment? | 15–24 vs 15–30 comparison |
| 3 | Where is labour pressure highest? | Choropleth map of state unemployment, state ranking, unemployment vs participation scatter, labour-force composition |
| 4 | Where is daily life becoming more expensive? | Heatmap of CPI change by state and spending category (Jan 2024 – Apr 2026), CPI trend lines |
| 5 | Does income keep up with spending? | Income vs expenditure scatter, spending-pressure ranking |
| 6 | Which states face the strongest combined pressure? | Pressure index ranking and its stacked components |

## The combined pressure index

Each state gets three component scores, each scaled to 0–100 with min-max normalisation:

- **Unemployment score**: state unemployment rate, Q3 2025
- **Cost-of-living score**: state CPI percentage change, Jan 2024 – Apr 2026
- **Spending score**: mean household expenditure ÷ mean household income

The final `pressure_score` is the average of the three. It is stored in [`data/pressure_index.csv`](data/pressure_index.csv), and the stacked bar chart shows how much each component contributes.

## Data sources

| Dataset | Source |
|---------|--------|
| Youth labour force (monthly) | [data.gov.my – lfs_month_youth](https://data.gov.my/data-catalogue/lfs_month_youth) |
| Labour force by state (quarterly) | [data.gov.my / OpenDOSM](https://data.gov.my) |
| Consumer Price Index by state | [data.gov.my – cpi_state](https://data.gov.my/data-catalogue/cpi_state) |
| Household income & expenditure (HIES) by state | [data.gov.my / OpenDOSM](https://data.gov.my) |
| Malaysia state boundaries (GeoJSON) | [mptwaktusolat/jakim.geojson](https://github.com/mptwaktusolat/jakim.geojson) |

Derived files:
- `lfs_state_latest.csv`: the latest quarter of state labour-force data, one row per state
- `pressure_index.csv`: the combined index described above

## Project structure

```
├── index.html            # page layout and narrative
├── css/style.css         # styling
├── js/
│   ├── vega_lite_vis.js  # embeds every chart
│   └── *.vg.json         # one Vega-Lite spec per chart
├── data/                 # source and derived CSVs + GeoJSON
└── design-sketch.pdf     # original hand-drawn layout sketch
```

## Running locally

The charts load their specs and data with `fetch`, so open the page through a local server rather than straight from the file system:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Skills demonstrated

- Turning several public datasets into a single narrative with a clear question per section
- Choosing chart types to match each question: maps, heatmaps, scatter plots, ranked and stacked bars
- Data cleaning and joining across sources with different state naming and time granularity
- Designing a composite index and explaining it transparently

---

Author: Ausaf Ayaz
