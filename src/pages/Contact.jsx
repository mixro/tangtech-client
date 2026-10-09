import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Seo from "../lib/seo";
import Icon from "../components/Icon";
import { PageHero } from "../components/Blocks";
import { site } from "../data/site";
import { services } from "../data/services";
import { trainings } from "../data/organisations";

// Quote requests are emailed straight to info@tangtecheng.com by Web3Forms
// (https://web3forms.com). Works on any host. The access key is public by
// design; it only says which inbox receives the email. Set it in
// src/data/site.js (web3formsKey) or as the VITE_WEB3FORMS_KEY env variable.
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env?.VITE_WEB3FORMS_KEY || site.web3formsKey;

const topics = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "products", label: "Products & equipment supply" },
  { value: "training", label: "Technical training" },
  { value: "other", label: "Something else" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", topic: "", item: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  // Prefill from links like /contact-us?item=… or ?service=… (after hydration)
  useEffect(() => {
    const item = params.get("item");
    const service = params.get("service");
    const training = params.get("training");
    setForm((f) => ({
      ...f,
      topic: service && services.some((s) => s.slug === service) ? service : item ? "products" : training ? "training" : f.topic,
      item: item ?? (training ? trainings.find((t) => t.slug === training)?.title ?? "" : f.item),
    }));
  }, [params]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const topicLabel = topics.find((t) => t.value === form.topic)?.label;

  async function submit(e) {
    e.preventDefault();
    // Honeypot: real visitors never see or tick this box
    if (e.target.elements.botcheck?.checked) return;
    if (!ACCESS_KEY) {
      setErrorMsg("The quote form isn't connected to an inbox yet (missing Web3Forms access key).");
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Quote request: ${topicLabel ?? "General"} | ${form.name}${form.company ? ` (${form.company})` : ""}`,
          from_name: "Tang Tech website",
          // Web3Forms uses `email` as the reply-to, so "Reply" goes to the customer
          email: form.email,
          Name: form.name,
          Company: form.company || "-",
          Phone: form.phone,
          "Service / topic": topicLabel ?? form.topic,
          "Equipment or course": form.item || "-",
          "Project details": form.message,
          Page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`);
      setState("sent");
    } catch (err) {
      setErrorMsg("");
      setState("error");
      console.warn("Quote form error:", err);
    }
  }

  const waText = encodeURIComponent(
    `Hello Tang Tech, I'm ${form.name || "…"}${form.company ? ` from ${form.company}` : ""}. ` +
      `${topicLabel ? `Enquiry: ${topicLabel}. ` : ""}${form.item ? `Item: ${form.item}. ` : ""}${form.message}`
  );

  return (
    <>
      <Seo
        title="Contact & quotations"
        path="/contact-us"
        description="Request a quotation or talk to an engineer at Tang Tech & Engineering Ltd, Tabata Business Centre, Dar es Salaam. Call +255 616 627 609 or email info@tangtecheng.com."
      />
      <PageHero title="Contact" accent="& quotations" kicker="Tell us about your site or the equipment you need. An engineer will review your request and reply with next steps." />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-form-wrap">
            {state === "sent" ? (
              <div className="form-done" role="status">
                <Icon name="check" size={32} />
                <h2>Request sent</h2>
                <p>
                  Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We've received your request and will reply to{" "}
                  {form.email || form.phone}. For anything urgent, call {site.phone.display}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="quote-form">
                <p className="hp" aria-hidden="true">
                  <label>
                    Leave this unticked <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <h2>Request a quote</h2>
                <div className="field-row">
                  <label className="field">
                    <span>Full name</span>
                    <input name="name" required autoComplete="name" value={form.name} onChange={update} />
                  </label>
                  <label className="field">
                    <span>
                      Company <small>(optional)</small>
                    </span>
                    <input name="company" autoComplete="organization" value={form.company} onChange={update} />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span>Phone</span>
                    <input name="phone" type="tel" required autoComplete="tel" placeholder="+255 …" value={form.phone} onChange={update} />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input name="email" type="email" required autoComplete="email" value={form.email} onChange={update} />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span>What do you need?</span>
                    <select name="topic" required value={form.topic} onChange={update}>
                      <option value="" disabled>
                        Choose a service or topic
                      </option>
                      {topics.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span>
                      Equipment or course <small>(optional)</small>
                    </span>
                    <input name="item" value={form.item} onChange={update} placeholder="e.g. 800 kVA transformer" />
                  </label>
                </div>
                <label className="field">
                  <span>Project details</span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={update}
                    placeholder="Location, voltage level, load (kVA), quantities and your timeline."
                  />
                </label>
                {state === "error" && (
                  <p className="form-error" role="alert">
                    {errorMsg || "Your request couldn't be sent. Check your connection and try again."} You can also send it on
                    WhatsApp, or email <a href={`mailto:${site.email}`}>{site.email}</a> directly.
                  </p>
                )}
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
                    {state === "sending" ? "Sending…" : "Send request"}
                  </button>
                  <a className="btn btn-outline" href={`https://wa.me/${site.whatsapp}?text=${waText}`} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Send on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          <aside className="contact-aside">
            <div className="contact-card">
              <h2>Head office</h2>
              <p>
                <Icon name="pin" size={18} />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.city}
                </span>
              </p>
              <a className="text-link" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="contact-card">
              <h2>Call or email</h2>
              <p>
                <Icon name="phone" size={18} />
                <span>
                  <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                  <br />
                  <a href={`tel:${site.phoneAlt.tel}`}>{site.phoneAlt.display}</a>
                </span>
              </p>
              <p>
                <Icon name="mail" size={18} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="contact-card">
              <h2>Registered location</h2>
              <p>{site.registeredAddress}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
