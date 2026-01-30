import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Coding Interview Prep"
      description="Structured interview preparation for Service, Product, and FAANG companies"
    >
      <main className={styles.container}>
        <h1>🚀 Kickstart Your Career</h1>
        <p>
          By Yuva
        </p>

        <div className={styles.grid}>
          <Link className={styles.card} to="/docs/intro">
            📘 Get Started
            <span>Overview and preparation roadmap</span>
          </Link>

          <Link className={styles.card} to="/docs/service-companies/overview">
            🏢 Service Companies
            <span>Common coding questions & topics</span>
          </Link>

          <Link
            className={styles.card}
            to="/docs/product-companies/tier1/overview"
          >
            🧑‍💻 Product Companies
            <span>Tier 1 & Tier 2 coding preparation</span>
          </Link>

          <Link className={styles.card} to="/docs/faang-maang/overview">
            🚀 FAANG / MAANG
            <span>DSA patterns & system design</span>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
