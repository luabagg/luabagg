---
layout: default
title: Luan Baggio - Software Engineer
---

<section class="readme-section" id="intro" aria-label="Profile introduction">
{% capture readme_content %}
{% include_relative README.md %}
{% endcapture %}
{{ readme_content | markdownify }}
</section>

<section class="section stack-section" id="languages">
  <div class="section-heading">
    <p class="eyebrow">Languages and tools</p>
    <h2>Core stack</h2>
    <p>
      The practical toolkit I reach for when building product systems: APIs,
      async jobs, data-heavy workflows, and operational interfaces.
    </p>
  </div>

  <div class="stack-layout">
    <article class="stack-feature">
      <span class="stack-label">Primary languages</span>
      <div class="tech-dock" aria-label="Primary technologies">
        <button type="button" class="tech-dock-item">Python</button>
        <button type="button" class="tech-dock-item">Go</button>
        <button type="button" class="tech-dock-item">TypeScript</button>
        <button type="button" class="tech-dock-item">SQL</button>
        <button type="button" class="tech-dock-item">PHP</button>
      </div>
    </article>

    <div class="stack-groups">
      <article>
        <h3>Backend</h3>
        <p>Django, FastAPI, Gin, REST APIs, gRPC, service design, queues, import pipelines.</p>
      </article>
      <article>
        <h3>Frontend</h3>
        <p>React, Vue, Next.js, Remix, accessible product flows, operational interfaces.</p>
      </article>
      <article>
        <h3>Data</h3>
        <p>PostgreSQL, MySQL, Redis, DynamoDB, Kafka, OpenSearch, S3, Cloud Storage.</p>
      </article>
      <article>
        <h3>Operations</h3>
        <p>AWS, GCP, Terraform, Docker, CI/CD, Grafana, Sentry, PagerDuty, incident follow-up.</p>
      </article>
    </div>
  </div>
</section>

<section class="section experience-section" id="experience">
  <div class="section-heading">
    <p class="eyebrow">Experience</p>
    <h2>Where I’ve shipped real systems</h2>
    <p>
      Highlights from healthcare billing, local-first ERP, a car-enthusiast
      platform, and one of Brazil’s largest ERP products.
    </p>
  </div>

  <div class="experience-motion">
    <svg class="experience-path" viewBox="0 0 20 1000" preserveAspectRatio="none" aria-hidden="true">
      <path id="career-path" d="M10,0 C14,250 6,500 10,750 C14,875 6,940 10,1000" fill="none" stroke="rgba(140,28,19,0.18)" stroke-width="2" stroke-dasharray="8 8"/>
    </svg>
    <div class="experience-marker" aria-hidden="true"></div>

    <ol class="experience-timeline">
      <li class="experience-entry">
        <span class="experience-node" aria-hidden="true"></span>
        <article class="experience-card">
          <div class="experience-media">
            <img src="./images/athelas.png" alt="Athelas product screenshot"/>
          </div>
          <div class="experience-body">
            <div class="timeline-meta">
              <span>2025 — now</span>
              <span>Software Engineer</span>
            </div>
            <h3>Athelas</h3>
            <p>
              Healthcare automation platform. Shipped billing, eligibility, Charge
              Master, appointment billing, async CSV imports up to ~50k rows, and
              production support across Python, React/TypeScript, PostgreSQL, and
              GCP.
            </p>
          </div>
        </article>
      </li>

      <li class="experience-entry">
        <span class="experience-node" aria-hidden="true"></span>
        <article class="experience-card">
          <div class="experience-logo">
            <img src="./images/yo-lara.jpg" alt="Yo Lara logo"/>
          </div>
          <div class="experience-body">
            <div class="timeline-meta">
              <span>2024</span>
              <span>Software Engineer, contract</span>
            </div>
            <h3>Yo Lara</h3>
            <p>
              Local-first ERP product flows, service-order workflows, and
              centralized imports using React, React Aria, SQLite, PostgreSQL, and
              PowerSync.
            </p>
          </div>
        </article>
      </li>

      <li class="experience-entry">
        <span class="experience-node" aria-hidden="true"></span>
        <article class="experience-card">
          <div class="experience-logo">
            <img src="./images/gearpoint.svg" alt="Gearpoint logo"/>
          </div>
          <div class="experience-body">
            <div class="timeline-meta">
              <span>2023 — 2024</span>
              <span>Founding Engineer</span>
            </div>
            <h3>Gearpoint</h3>
            <p>
              Built a car enthusiast social/events platform from zero to 2,000+
              beta users. Owned Django APIs, frontend flows, payments, media
              infrastructure, and AWS deployment.
            </p>
          </div>
        </article>
      </li>

      <li class="experience-entry">
        <span class="experience-node" aria-hidden="true"></span>
        <article class="experience-card">
          <div class="experience-logo">
            <img src="./images/bling.svg" alt="Bling logo"/>
          </div>
          <div class="experience-body">
            <div class="timeline-meta">
              <span>2020 — 2024</span>
              <span>Software Engineer</span>
            </div>
            <h3>Bling</h3>
            <p>
              One of Brazil’s leading ERP platforms. Helped introduce Go/gRPC
              services, co-owned a file management service, migrated 40TB+ of
              files, and contributed to API v3 architecture.
            </p>
          </div>
        </article>
      </li>
    </ol>
  </div>
</section>

<section class="section ventures-section" id="ventures">
  <div class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2>Outside-the-day-job projects</h2>
    <p>
      Side business and client work where I handled strategy, operations, and
      the technical pieces end to end.
    </p>
  </div>

  <div class="ventures-grid">
    <article class="venture-card venture-card-large venture-gheno">
      <span class="card-orb orb-a" aria-hidden="true"></span>
      <span class="card-orb orb-b" aria-hidden="true"></span>
      <span class="card-noise" aria-hidden="true"></span>
      <span class="card-shimmer" aria-hidden="true"></span>
      <div class="venture-media">
        <img src="./images/gheno-rotors.png" alt="GHENO rotors"/>
      </div>
      <div class="venture-body">
        <div class="venture-tags" aria-label="GHENO focus areas">
          <span>DOWNHILL</span>
          <span>ENDURO</span>
          <span>E-BIKE</span>
        </div>
        <div class="venture-kicker">Side business · Brazilian MTB components</div>
        <h3>GHENO</h3>
        <p>
          A Brazilian performance MTB components brand built around real riding
          experience and technical product selection. Direct-to-consumer
          ecommerce and B2B distribution for bike shops, workshops, and
          resellers.
        </p>
      </div>
    </article>

    <article class="venture-card venture-warm">
      <span class="card-shimmer" aria-hidden="true"></span>
      <div class="venture-media">
        <img src="./images/thermal-aquecimento.webp" alt="Thermal Aquecimento website"/>
      </div>
      <div class="venture-body">
        <div class="venture-kicker">Client project · Heating services</div>
        <h3>Thermal Aquecimento</h3>
        <p>
          Helped my brother’s heating-services business with website work,
          contracts, and budget quotations.
        </p>
        <a href="https://www.thermalaquecimento.com.br/" target="_blank" rel="noopener noreferrer">Visit site</a>
      </div>
    </article>
  </div>
</section>

<section class="section education-section" id="education">
  <div class="section-heading">
    <p class="eyebrow">Education</p>
    <h2>Statistics, data, and software foundations</h2>
    <p>
      Two programs that shaped how I think about systems, data, and the
      trade-offs behind every decision.
    </p>
  </div>

  <div class="education-grid">
    <article class="education-card">
      <div class="education-card-head">
        <h3>UFSM</h3>
        <span class="education-tag">Universidade Federal de Santa Maria</span>
      </div>
      <p class="education-degree">Statistics &amp; Data Science</p>
      <ul class="education-badges">
        <li>Statistics</li>
        <li>Data Science</li>
        <li>Probability</li>
        <li>Statistical Modeling</li>
      </ul>
    </article>

    <article class="education-card">
      <div class="education-card-head">
        <h3>IFRS</h3>
        <span class="education-tag">Instituto Federal do Rio Grande do Sul</span>
      </div>
      <p class="education-degree">Internet Computing</p>
      <ul class="education-badges">
        <li>Web Development</li>
        <li>Programming</li>
        <li>Networking</li>
        <li>Systems Analysis</li>
      </ul>
    </article>
  </div>
</section>

<section class="section contact-section" id="contact">
  <div class="section-heading">
    <p class="eyebrow">Contact</p>
    <h2>Let&rsquo;s talk</h2>
    <p>
      Reach out for work, collaboration, or just to say hi.
    </p>
  </div>

  <div class="contact-block">
    <a href="mailto:luanbaggio0@gmail.com">luanbaggio0@gmail.com</a>
    <a href="https://github.com/luabagg">github.com/luabagg</a>
    <a href="https://linkedin.com/in/luabagg">linkedin.com/in/luabagg</a>
  </div>
</section>
