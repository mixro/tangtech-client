import { useMemo, useState } from "react";
import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CtaBand, PageHero } from "../components/Blocks";
import { featuredProject as fp, projects, projectTypes } from "../data/projects";
import { stats } from "../data/site";

export default function Projects() {
  const [type, setType] = useState("all");
  const typeName = Object.fromEntries(projectTypes.map((t) => [t.id, t.name]));
  const counts = useMemo(() => Object.fromEntries(projectTypes.map((t) => [t.id, projects.filter((p) => p.type === t.id).length])), []);
  const list = type === "all" ? projects : projects.filter((p) => p.type === type);

  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description="Substations, 33 kV lines, transformer servicing, generator commissioning, solar and CCTV projects delivered by Tang Tech & Engineering across Tanzania."
      />
      <PageHero title="Our" accent="projects" kicker="Utility, industrial and institutional work across Tanzania, from 33 kV substations to standby power and surveillance." />

      <section className="section">
        <div className="wrap">
          <ul className="stats stats-light">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap case-study">
          <div className="case-study-head">
            <p className="case-label">Featured case study</p>
            <h2>{fp.title}</h2>
            <p className="lead">{fp.summary}</p>
          </div>
          <Img image={fp.image} ratio="21/9" sizes="100vw" max={2000} />
          <div className="case-columns">
            <div>
              <h3>Scope</h3>
              <ul className="ticks">
                {fp.scope.map((s) => (
                  <li key={s}>
                    <Icon name="check" size={18} /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Challenge</h3>
              <p>{fp.challenge}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <p>{fp.solution}</p>
            </div>
          </div>
          <p className="case-outcome">
            <Icon name="shield" size={20} /> {fp.outcome}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Project list</h2>
            <p>A selection of completed and ongoing contracts.</p>
          </div>
          <div className="filter-chips" role="group" aria-label="Filter projects by type">
            <button className={`chip ${type === "all" ? "is-active" : ""}`} aria-pressed={type === "all"} onClick={() => setType("all")}>
              All <span>{projects.length}</span>
            </button>
            {projectTypes.map((t) => (
              <button
                key={t.id}
                className={`chip ${type === t.id ? "is-active" : ""}`}
                aria-pressed={type === t.id}
                onClick={() => setType(t.id)}
              >
                {t.name} <span>{counts[t.id]}</span>
              </button>
            ))}
          </div>

          <ul className="project-rows" aria-live="polite">
            {list.map((p) => (
              <li key={p.client + p.title}>
                <span className="project-client">{p.client}</span>
                <span>{p.title}</span>
                <span className="project-meta">
                  {typeName[p.type]} · <span className={`status ${p.status === "Completed" ? "is-done" : "is-live"}`}>{p.status}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Have a project like these?" />
    </>
  );
}
