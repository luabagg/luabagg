---
layout: default
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
      The toolkit I use for product-critical systems: APIs, async imports,
      SQL-heavy workflows, observability, and operational interfaces.
    </p>
  </div>

  <div class="stack-layout">
    <article class="stack-feature">
      <ul class="tech-cloud" aria-label="Main technologies">
        <li class="tech-cloud-item tech-cloud-item-large">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="" aria-hidden="true"/>
          <span>Python</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-large">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" alt="" aria-hidden="true"/>
          <span>Go</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-large">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="" aria-hidden="true"/>
          <span>TypeScript</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-medium">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="" aria-hidden="true"/>
          <span>React</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-medium">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="" aria-hidden="true"/>
          <span>Django</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-medium">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="" aria-hidden="true"/>
          <span>PostgreSQL</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-small">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="" aria-hidden="true"/>
          <span>AWS</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-small">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="" aria-hidden="true"/>
          <span>Redis</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-small">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="" aria-hidden="true"/>
          <span>Docker</span>
        </li>
        <li class="tech-cloud-item tech-cloud-item-small">
          <img class="tech-cloud-logo-dark" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" alt="" aria-hidden="true"/>
          <span>gRPC</span>
        </li>
      </ul>
    </article>

    <div class="stack-groups">
      <article>
        <h3>Backend</h3>
        <p>Python, Go, Node.js, PHP, Django, FastAPI, Gin Gonic, Express.js, API design, service architecture.</p>
      </article>
      <article>
        <h3>Frontend</h3>
        <p>TypeScript, React, Vue, Next.js, Remix, Vite, shadcn/ui, Zustand, Radix UI, React Aria.</p>
      </article>
      <article>
        <h3>Data and async</h3>
        <p>PostgreSQL, MySQL, Redis, DynamoDB, S3, R, Kafka, Spark, Temporal, BigQuery, query plan analysis.</p>
      </article>
      <article>
        <h3>Infrastructure and ops</h3>
        <p>AWS, GCP, Kubernetes, Docker, Terraform, CloudWatch, Cloud Logging, Datadog, New Relic, Grafana, Sentry, Incident.io.</p>
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
    <svg class="experience-path" viewBox="0 0 120 1000" preserveAspectRatio="none" aria-hidden="true">
      <path id="career-path" d="M60,0 C112,145 8,245 58,390 C112,545 10,665 62,815 C94,905 28,955 60,1000" fill="none" stroke="rgba(140,28,19,0.2)" stroke-width="3" stroke-dasharray="10 10"/>
    </svg>

    <ol class="experience-timeline">
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
              Backend and platform work across a large ERP, helping modernize a
              PHP-heavy stack with Go services and API v3. Co-owned a Go/gRPC/S3
              file service serving 100k+ daily requests and supporting a 40TB+ migration.
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
              users as founding engineer. Owned Python/Django Ninja APIs, Go/Gin
              media processing, AWS infra, auth, Stripe, observability, and SQS workflows.
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
              <span>Software Engineer</span>
            </div>
            <h3>Yo Lara</h3>
            <p>
              Contributed to a local-first ERP for field-service teams, mainly on
              frontend flows over SQLite, PostgreSQL, and PowerSync. Built service-order
              workflows, centralized imports, and accessible React Aria interfaces.
            </p>
          </div>
        </article>
      </li>

      <li class="experience-entry">
        <span class="experience-node" aria-hidden="true"></span>
        <article class="experience-card">
          <div class="experience-logo">
            <img src="./images/athelas.png" alt="Athelas logo"/>
          </div>
          <div class="experience-body">
            <div class="timeline-meta">
              <span>2025 — current</span>
              <span>Software Engineer</span>
            </div>
            <h3>Athelas</h3>
            <p>
              Healthcare automation systems for billing, appointments, eligibility,
              patient responsibility, and clinic operations. Owned Charge Master imports/APIs,
              cut appointment latency 50%, and supported production across critical workflows.
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
      Projects where I owned more than code: product shape, operations,
      commercial details, and the technical path to ship.
    </p>
  </div>

  <div class="ventures-list">
    <article class="venture-row venture-gheno">
      <div class="venture-logo" aria-hidden="true">
        <img src="./images/gheno-rotors.png" alt=""/>
      </div>
      <div class="venture-panel">
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
        <a href="https://ghenortrs.com.br/" target="_blank" rel="noopener noreferrer">Visit site</a>
      </div>
    </article>

    <article class="venture-row venture-warm">
      <div class="venture-logo" aria-hidden="true">
        <img src="./images/thermal-aquecimento.png" alt=""/>
      </div>
      <div class="venture-panel">
        <div class="venture-kicker">Client project · Heating services</div>
        <h3>Thermal Aquecimento</h3>
        <p>
          Heating and solar-energy business focused on residential, commercial,
          and industrial projects. Supported website work, contracts, and budget
          quotation flows.
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
      Formal training that still shows up in how I model uncertainty, design
      systems, and reason about product trade-offs.
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
        <li>Inference</li>
        <li>Probability</li>
        <li>Data Analysis</li>
        <li>Experimentation</li>
      </ul>
    </article>

    <article class="education-card">
      <div class="education-card-head">
        <h3>IFRS</h3>
        <span class="education-tag">Instituto Federal do Rio Grande do Sul</span>
      </div>
      <p class="education-degree">Internet Computing</p>
      <ul class="education-badges">
        <li>Programming</li>
        <li>Web Systems</li>
        <li>Databases</li>
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
      Best places to reach me for work, collaboration, or a useful conversation.
    </p>
  </div>

  <ul class="contact-list" aria-label="Contact links">
    <li>
      <a href="mailto:luanbaggio0@gmail.com">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.75-1.25c-.42 0-.8.2-1.03.51l5.61 5.05c.38.34.96.34 1.34 0l5.61-5.05a1.24 1.24 0 0 0-1.03-.51H6.75Zm11.75 2.35-4.83 4.34a2.5 2.5 0 0 1-3.34 0L5.5 7.85v9.4c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-9.4Z"/></svg>
        <strong>luanbaggio0@gmail.com</strong>
      </a>
    </li>
    <li>
      <a href="https://github.com/luabagg">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.25A9.75 9.75 0 0 0 8.92 21.26c.49.09.67-.21.67-.47v-1.71c-2.72.59-3.29-1.16-3.29-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.31-2.17-.25-4.45-1.09-4.45-4.83 0-1.07.38-1.94 1-2.62-.1-.25-.44-1.24.1-2.59 0 0 .82-.26 2.68 1a9.2 9.2 0 0 1 4.86 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1 1.55 1 2.62 0 3.75-2.29 4.58-4.47 4.82.35.31.66.9.66 1.82v2.58c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"/></svg>
        <strong>github.com/luabagg</strong>
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/luabagg">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.94 8.98H3.9V20h3.04V8.98ZM5.42 4A1.76 1.76 0 1 0 5.4 7.52 1.76 1.76 0 0 0 5.42 4Zm5.52 4.98H8.03V20h3.03v-5.77c0-1.52.29-3 2.18-3 1.86 0 1.88 1.74 1.88 3.09V20h3.04v-6.4c0-3.14-.68-5.55-4.35-5.55-1.76 0-2.94.96-3.42 1.88h-.04l-.41-.95Z"/></svg>
        <strong>linkedin.com/in/luabagg</strong>
      </a>
    </li>
  </ul>
</section>
