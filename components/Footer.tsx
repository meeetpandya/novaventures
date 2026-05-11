import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <span className="footer-brand-name">NOVAVENTURES</span>
          <p className="footer-tagline">
            Institutional-grade liquidity, connectivity, and risk solutions for
            the modern trading world.
          </p>
          <div className="footer-socials">
            {["f", "in", "X", "▶", "t"].map((s) => (
              <a key={s} href="#" className="footer-social">
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {[
              "About Us",
              "Why Us",
              "Global Presence",
              "Awards",
              "Careers",
              "Contact",
            ].map((l) => (
              <li key={l}>
                <a href={l === "Contact" ? "#contact" : "#"}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Trading</div>
          <ul className="footer-links">
            {[
              "Forex CFDs",
              "Metal CFDs",
              "Commodity CFDs",
              "Index CFDs",
              "Energy CFDs",
              "Crypto CFDs",
            ].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Prime & Tech</div>
          <ul className="footer-links">
            {[
              "Liquidity & Technology",
              "Copy Trading",
              "PAMM Account",
              "MAM Account",
              "VPS Servers",
              "API Access",
            ].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-legal">
        Risk Warning: Investing in derivative products carries significant risks
        and may not be suitable for all investors. The use of leverage can
        increase both the level of risk and potential for losses. Before
        engaging in trading, carefully consider your investment objectives,
        experience, and risk tolerance. You should only invest funds you can
        afford to lose.
      </p>
      <div className="footer-bottom">
        <span>© 2026 NOVAVENTURES — All Rights Reserved</span>
        <span>Regulated Financial Services Provider</span>
      </div>
    </footer>
  );
}
