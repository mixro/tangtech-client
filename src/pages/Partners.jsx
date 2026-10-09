import Seo from "../lib/seo";
import { ClientWall, CtaBand, PageHero } from "../components/Blocks";
import { partners } from "../data/organisations";

export default function Partners() {
  return (
    <>
      <Seo
        title="Clients & partners"
        path="/partners"
        description="Tang Tech & Engineering works with Schneider Electric, ABB, Africab, TELA Technology and DIT Teaching Factory, and serves clients across industry, hospitality and institutions in Tanzania."
      />
      <PageHero title="Clients &" accent="partners" kicker="The organisations we deliver for, and the manufacturers and institutions we work with." />

      <section className="section" id="clients">
        <div className="wrap">
          <div className="section-head">
            <h2>Clients</h2>
            <p>Industrial plants, hotels, commercial buildings, institutions and government entities.</p>
          </div>
          <ClientWall />
        </div>
      </section>

      <section className="section section-tint" id="partners">
        <div className="wrap">
          <div className="section-head">
            <h2>Partners</h2>
            <p>Technology, supply and training partners behind our projects.</p>
          </div>
          <ul className="partner-list">
            {partners.map((p) => (
              <li key={p.name}>
                <div className="partner-logo">
                  <img src={p.logo} alt="" width={p.w} height={p.h} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
