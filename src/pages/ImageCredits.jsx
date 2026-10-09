import Seo from "../lib/seo";
import { PageHero } from "../components/Blocks";
import { images } from "../data/images";

export default function ImageCredits() {
  const list = Object.values(images).filter((i) => i.page);
  return (
    <>
      <Seo title="Image credits" path="/image-credits" description="Credits for photography used on the Tang Tech & Engineering website." />
      <PageHero title="Image" accent="credits" kicker="Some photographs on this site are placeholders from Unsplash, used under the Unsplash License. Thank you to the photographers." />
      <section className="section">
        <div className="wrap">
          <ul className="credits">
            {list.map((i) => (
              <li key={i.id}>
                <a href={i.page} target="_blank" rel="noopener noreferrer">
                  {i.alt}
                </a>
                <span>
                  {i.by ? `${i.by} · ` : ""}
                  {i.provider}
                </span>
              </li>
            ))}
          </ul>
          <p className="note">
            Licence:{" "}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
              Unsplash License
            </a>
            . Partner and client logos are trademarks of their respective owners.
          </p>
        </div>
      </section>
    </>
  );
}
