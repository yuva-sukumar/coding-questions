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
        <p>By Yuva</p>

        <div className={styles.grid}>
          <Link className={styles.card} to="/docs/intro">
            📘 Get Started
            <span>Overview and preparation roadmap</span>
          </Link>

          <Link
            className={styles.card}
            to="/docs/Coding Questions/Service Companies/interview-process"
          >
            🏢 Service Companies
            <span>Common coding questions & topics</span>
          </Link>

          <Link className={styles.card} to="">
            🧑‍💻 Product Companies
            <span>Tier 1 & Tier 2 coding preparation</span>
            <span>Comming Soon...Stay Tuned</span>
          </Link>

          <Link className={styles.card} to="">
            🚀 FAANG / MAANG
            <span>DSA patterns & system design</span>
            <span>Comming Soon...Stay Tuned</span>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
