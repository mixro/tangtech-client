import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CtaBand, PageHero, ProductCard } from "../components/Blocks";
import { categories, getProduct, products } from "../data/products";
import NotFound from "./NotFound";

const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));
const tagRank = (p) => (p.tags?.includes("New") ? 0 : p.tags?.includes("Popular") ? 1 : 2);

export function Products() {
  const [params, setParams] = useSearchParams();
  // Start from "all" so the prerendered HTML and first client render match,
  // then pick up any ?category= from the URL after hydration.
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const q = useDeferredValue(query.trim().toLowerCase());

  useEffect(() => {
    const c = params.get("category");
    if (c && catName[c]) setCat(c);
  }, [params]);

  const chooseCat = (c) => {
    setCat(c);
    setParams(c === "all" ? {} : { category: c }, { replace: true, preventScrollReset: true });
  };

  const list = useMemo(() => {
    let out = products.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!q || [p.name, p.summary, p.rating, ...(p.examples ?? [])].join(" ").toLowerCase().includes(q))
    );
    if (sort === "az") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") out = [...out].sort((a, b) => tagRank(a) - tagRank(b));
    return out;
  }, [cat, q, sort]);

  return (
    <>
      <Seo
        title="Products & equipment"
        path="/products"
        description="Distribution transformers, SF6-free ring main units, auto-reclosers, protection relays, XLPE cables, surge arresters, ATS panels, HV test instruments, CCTV and solar systems supplied and installed in Tanzania."
      />
      <PageHero
        title="Products &"
        accent="equipment"
        kicker="Current-generation MV equipment we supply and install, and the diagnostic instruments our engineers use to test it. Every item is quoted with installation, testing and commissioning."
      />

      <section className="section">
        <div className="wrap">
          <div className="catalog-tools">
            <label className="search-field">
              <Icon name="search" size={18} />
              <span className="sr-only">Search products</span>
              <input type="search" placeholder="Search, e.g. recloser, 33 kV, OMICRON" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            <label className="sort-field">
              <span>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">New &amp; popular first</option>
                <option value="az">Name A–Z</option>
                <option value="category">By category</option>
              </select>
            </label>
          </div>

          <div className="filter-chips" role="group" aria-label="Filter by category">
            <button className={`chip ${cat === "all" ? "is-active" : ""}`} aria-pressed={cat === "all"} onClick={() => chooseCat("all")}>
              All <span>{products.length}</span>
            </button>
            {categories.map((c) => (
              <button key={c.id} className={`chip ${cat === c.id ? "is-active" : ""}`} aria-pressed={cat === c.id} onClick={() => chooseCat(c.id)}>
                {c.name} <span>{products.filter((p) => p.category === c.id).length}</span>
              </button>
            ))}
          </div>

          <p className="result-count" aria-live="polite">
            {list.length} {list.length === 1 ? "product" : "products"}
          </p>

          {list.length > 0 ? (
            <div className="card-grid cols-3">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} categoryName={catName[p.category]} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No products match “{query}”. Try a shorter term, or ask us directly. We source equipment beyond this list.</p>
              <Link to="/contact-us" className="btn btn-outline">
                Ask about equipment
              </Link>
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Need equipment that isn't listed?" text="We source MV/LV equipment, cables and instruments through our partners. Send us your specification or bill of quantities." />
    </>
  );
}

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <NotFound />;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Seo title={product.name} path={`/products/${product.slug}`} description={`${product.summary} ${product.rating}.`} />
      <PageHero
        title={product.name}
        crumbs={[{ label: "Products", to: "/products" }, { label: catName[product.category], to: `/products?category=${product.category}` }, { label: product.name }]}
      />
      <section className="section">
        <div className="wrap product-detail">
          <Img image={product.image} ratio="4/3" sizes="(max-width: 900px) 100vw, 50vw" max={1600} priority />
          <div className="product-info">
            <p className="product-cat">
              {catName[product.category]}
              {product.tags?.map((t) => (
                <span key={t} className={`tag tag-${t.toLowerCase()}`}>
                  {t}
                </span>
              ))}
            </p>
            <p className="product-rating big">{product.rating}</p>
            <p className="lead">{product.summary}</p>
            <ul className="ticks">
              {product.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={18} /> {h}
                </li>
              ))}
            </ul>
            <div className="product-actions">
              <Link to={`/contact-us?item=${encodeURIComponent(product.name)}`} className="btn btn-primary">
                Request a quote
              </Link>
              <Link to="/services/testing-commissioning" className="btn btn-outline">
                Installation &amp; testing
              </Link>
            </div>
          </div>
        </div>

        <div className="wrap product-specs">
          <div>
            <h2>Typical specifications</h2>
            <dl className="spec-table">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="note">Final ratings are confirmed against your site requirements and the manufacturer's datasheet at quotation.</p>
          </div>
          {product.examples && (
            <div>
              <h2>Example product families</h2>
              <ul className="example-list">
                {product.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="note">Brand availability depends on current supplier stock. Ask us for equivalents.</p>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tint">
          <div className="wrap">
            <div className="section-head">
              <h2>More in {catName[product.category].toLowerCase()}</h2>
            </div>
            <div className="card-grid cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} categoryName={catName[p.category]} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
