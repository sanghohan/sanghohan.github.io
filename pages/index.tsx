import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import Icon from '../component/Icon';
import resume from '../payload';
import { formatDuration, formatMonth, formatPeriod } from '../lib/date';

const SECTIONS = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술' },
  { id: 'career', label: '경력' },
  { id: 'more', label: '그 외' },
];

type Theme = 'light' | 'dark';

export default function Home() {
  const { meta, profile, about, skills, career, educations, credentials, links } = resume;

  const [theme, setTheme] = useState<Theme | null>(null);
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [stuck, setStuck] = useState(false);

  const totalCareer = formatDuration(
    career[career.length - 1].startedAt,
    undefined,
    meta.updatedAt,
  );

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark' || current === 'light') {
      setTheme(current);
      return;
    }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    document.documentElement.classList.add('reveal-enabled');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.visible = 'true';
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.04 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        window.localStorage.setItem('theme', next);
      } catch {
        // 프라이빗 모드 등에서 저장이 막혀도 토글 자체는 동작해야 한다.
      }
      return next;
    });
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="author" content={profile.name} />
        <link rel="canonical" href={meta.siteUrl} />
        <link rel="shortcut icon" href={meta.favicon} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
      </Head>

      <a className="skip-link" href="#about">
        본문으로 건너뛰기
      </a>

      <header className="nav" data-stuck={stuck}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#top">
            한상호 <span>· {profile.headline}</span>
          </a>
          <nav className="nav__menu" aria-label="섹션 이동">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                className="nav__link"
                href={`#${section.id}`}
                aria-current={activeId === section.id}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="icon-button"
            onClick={() => window.print()}
            aria-label="이력서 인쇄 / PDF 저장"
            title="인쇄 · PDF 저장"
          >
            <Icon name="printer" />
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={theme === 'dark' ? '라이트 모드' : '다크 모드'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__inner">
            <div>
              <span className="hero__eyebrow">경력 {totalCareer}</span>
              <h1 className="hero__name">
                {profile.name}
                <small>
                  {profile.englishName} · {profile.headline}
                </small>
              </h1>
              <p className="hero__tagline">{profile.tagline}</p>

              <ul className="contacts">
                {profile.contacts.map((contact) => {
                  const body = (
                    <>
                      <Icon name={contact.icon} size={15} />
                      {contact.label}
                    </>
                  );

                  return (
                    <li key={contact.label}>
                      {contact.href ? (
                        <a
                          className="contact"
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                        >
                          {body}
                        </a>
                      ) : (
                        <span className="contact">{body}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <figure className="hero__figure" style={{ margin: 0 }}>
              <img
                className="hero__photo"
                src={profile.photo}
                alt={`${profile.name} 프로필 사진`}
              />
            </figure>
          </div>

          <div className="container">
            <ul className="hero__stats">
              <li className="stat">
                <div className="stat__label">Career</div>
                <div className="stat__value">{totalCareer}</div>
              </li>
              {about.facts.map((fact) => (
                <li className="stat" key={fact.label}>
                  <div className="stat__label">{fact.label}</div>
                  <div className="stat__value">{fact.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section__head">
              <span className="section__label">About</span>
              <h2 className="section__title">소개</h2>
            </div>
            <div className="prose reveal">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section__head">
              <span className="section__label">Skills</span>
              <h2 className="section__title">기술 스택</h2>
            </div>
            <div className="skill-grid">
              {skills.map((group) => (
                <div className="skill-row reveal" key={group.category}>
                  <div className="skill-row__category">{group.category}</div>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li className="chip" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="career">
          <div className="container">
            <div className="section__head">
              <span className="section__label">Career</span>
              <h2 className="section__title">경력 및 프로젝트</h2>
            </div>

            <div className="career">
              {career.map((company) => {
                const current = !company.endedAt;

                return (
                  <article
                    className="company reveal"
                    key={`${company.name}-${company.startedAt}`}
                    data-current={current}
                  >
                    <div className="company__head">
                      <h3 className="company__name">{company.name}</h3>
                      {company.nameNote ? (
                        <span className="company__note">{company.nameNote}</span>
                      ) : null}
                      {current ? <span className="badge">재직 중</span> : null}
                    </div>

                    <div className="company__meta">
                      <span className="company__role">{company.role}</span>
                      <span className="dot" aria-hidden="true" />
                      <span className="company__period">
                        {formatPeriod(company.startedAt, company.endedAt)}
                      </span>
                      <span className="dot" aria-hidden="true" />
                      <span>
                        {formatDuration(company.startedAt, company.endedAt, meta.updatedAt)}
                      </span>
                    </div>

                    <p className="company__summary">{company.summary}</p>

                    <div className="projects">
                      {company.projects.map((project) => (
                        <div className="project" key={project.title}>
                          <div className="project__head">
                            <h4 className="project__title">{project.title}</h4>
                            <span className="project__period">
                              {formatPeriod(project.startedAt, project.endedAt)}
                            </span>
                          </div>

                          {project.summary ? (
                            <p className="project__summary">{project.summary}</p>
                          ) : null}

                          <ul className="bullets">
                            {project.bullets.map((bullet) => (
                              <li key={bullet.slice(0, 24)}>{bullet}</li>
                            ))}
                          </ul>

                          {project.link ? (
                            <a
                              className="project__link"
                              href={project.link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.link.label}
                              <Icon name="arrow" size={13} />
                            </a>
                          ) : null}

                          {project.stack ? (
                            <ul className="chips">
                              {project.stack.map((item) => (
                                <li className="chip" key={item}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="more">
          <div className="container">
            <div className="section__head">
              <span className="section__label">More</span>
              <h2 className="section__title">학력 · 특허 · 링크</h2>
            </div>

            <div className="more-grid">
              <div className="card reveal">
                <div className="card__title">Education</div>
                <ul className="entries">
                  {educations.map((education) => (
                    <li key={education.school}>
                      <div className="entry__title">{education.school}</div>
                      <div className="entry__sub">{education.major}</div>
                      <div className="entry__period">
                        {formatPeriod(education.startedAt, education.endedAt)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card reveal">
                <div className="card__title">Patent &amp; Certificate</div>
                <ul className="entries">
                  {credentials.map((credential) => (
                    <li key={credential.title}>
                      <div className="entry__title">{credential.title}</div>
                      <div className="entry__sub">{credential.issuer}</div>
                      <div className="entry__period">{formatMonth(credential.at)}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card reveal">
                <div className="card__title">Links</div>
                <ul className="entries">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a className="entry__title" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                      {link.note ? <div className="entry__sub">{link.note}</div> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>
            Last updated {meta.updatedAt.replace(/-/g, '. ')} ·{' '}
            <a
              href="https://github.com/sanghohan/sanghohan.github.io"
              target="_blank"
              rel="noreferrer"
            >
              source on GitHub
            </a>
          </span>
          <span className="footer__sign">{meta.sign}</span>
        </div>
      </footer>
    </>
  );
}
