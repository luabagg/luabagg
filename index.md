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
