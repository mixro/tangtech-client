import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CredentialStrip, CtaBand, LeaderQuote, PageHero } from "../components/Blocks";
import { images } from "../data/images";
import { milestones, mission, values, vision } from "../data/site";

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        path="/about-us"
        description="Founded in 2023 in Dar es Salaam, Tang Tech & Engineering Ltd is a CRB Class V electrical works contractor with EWURA Class A licensed personnel, delivering power, automation and ICT systems across Tanzania."
      />
      <PageHero
        title="About"
        accent="Tang Tech"
        kicker="A Class V registered electrical works contractor and power engineering specialist, delivering turnkey MV/HV distribution infrastructure, control automation and ICT systems across Tanzania."
      />

      <section className="section">
        <div className="wrap about-intro">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              Tang Tech &amp; Engineering Ltd was founded in Dar es Salaam in 2023 and is incorporated under BRELA (Cert. No.
              168901461). We are registered with the Contractors Registration Board as a Class V Electrical Works Contractor,
              and our technical personnel hold EWURA Class A licences.
            </p>
            <p>
              Our engineers, technicians and artisans build and maintain the infrastructure that keeps industry running:
              33 kV and 11 kV lines, substations and transformers, switchgear and metering, standby power, and the networks,
              security and control systems that sit on top of them. Every installation is tested and documented before it
              is energised.
            </p>
          </div>
          <Img image={images.siteTeam} ratio="4/3" sizes="(max-width: 900px) 100vw, 45vw" max={1600} />
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <LeaderQuote />
        </div>
      </section>

      <section className="section">
        <div className="wrap mv-grid">
          <div>
            <h2>Mission</h2>
            <p>{mission}</p>
          </div>
          <div>
            <h2>Vision</h2>
            <p>{vision}</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <h2>History &amp; milestones</h2>
          </div>
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year}>
                <span className="timeline-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How we work</h2>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div key={v.title} className="value">
                <Icon name={["shield", "gauge", "bolt"][i]} size={28} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="compliance">
        <div className="wrap">
          <div className="section-head">
            <h2>Registration &amp; compliance</h2>
            <p>Copies of our certificates are available on request for tenders and vendor registration.</p>
          </div>
          <CredentialStrip />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
