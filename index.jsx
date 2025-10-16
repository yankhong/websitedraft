export default function Site() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Crypto Trader Growth Hub</h1>
          <nav className="text-sm">
            <a href="#lead" className="mr-4 hover:underline">Lead</a>
            <a href="#image" className="mr-4 hover:underline">Image</a>
            <a href="#experience" className="mr-4 hover:underline">Experience</a>
            <a href="#main" className="mr-4 hover:underline">Main</a>
            <a href="#discussion" className="hover:underline">Discussion</a>
          </nav>
        </div>
      </header>

      {/* LEAD PARAGRAPH (1) */}
      <section id="lead" className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Lead paragraph / Branding</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Turn <span className="underline decoration-amber-400">curious traffic</span> into <span className="underline decoration-emerald-400">active traders</span>
            </h2>
            <p className="text-lg text-gray-700">
              Crypto Trader Growth Hub is a lightweight service for exchanges, KOLs, and trading communities to onboard, activate, and retain users with automation-friendly funnels—without spamming or guesswork. Built for high‑integrity growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Clear positioning: Activation > Volume > Retention</li>
              <li>• Promise: 14‑day setup, measurable improvement in activation rate</li>
              <li>• Differentiator: ethical, rate‑limit aware outreach + transparent metrics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RELEVANT IMAGE (2) */}
      <section id="image" className="max-w-5xl mx-auto px-4 py-12">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Relevant image (described)</p>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="aspect-[16/9] w-full rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center text-center p-6">
              <div>
                <div className="text-sm text-gray-500 mb-2">Image placeholder</div>
                <p className="text-gray-700">
                  Imagine a clean dashboard with three cards: <em>Leads Captured</em>, <em>Activated Traders</em>, and <em>30‑Day Volume</em>. A smooth line chart shows activation rate rising after implementing compliant, staged outreach. Minimalist colors; labels are legible; tooltips explain each metric.
                </p>
              </div>
            </div>
          </div>
          <aside className="text-sm text-gray-700 bg-gray-50 rounded-2xl border border-gray-200 p-4">
            <p className="font-medium mb-1">Why this image?</p>
            <p>It communicates the product’s essence at a glance: humane automation that converts conversation into sustainable trading activity with transparent metrics.</p>
          </aside>
        </div>
      </section>

      {/* PERSONAL EXPERIENCE + TESTIMONIAL (3) */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-12">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Personal experience & one testimonial</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Founder’s note</h3>
            <p className="text-gray-700">
              I built several compliant outreach bots and activation workflows for trader communities. The painful parts were always the same: cold starts, spam risks, and zero visibility into what actually moved activation. Crypto Trader Growth Hub bundles the proven pieces—opt‑in capture, staged messaging, and clear dashboards—so new communities stop guessing and start compounding.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Testimonial</h3>
            <blockquote className="text-gray-700 italic">
              “We used the Hub to relaunch our referral program. Opt‑in DMs replaced mass blasts, and our new‑trader activation jumped from 18% to 31% in four weeks. The audit log made compliance happy, and our mods finally slept.”
            </blockquote>
            <p className="text-sm text-gray-500 mt-2">— L., Community Lead at a mid‑size trading group</p>
          </div>
        </div>
      </section>

      {/* MAIN BODY (4) */}
      <section id="main" className="max-w-5xl mx-auto px-4 py-12">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Main body (≥100 words) + specs & contact</p>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-3">What it is vs. what it does</h3>
          <p className="text-gray-700 mb-4">
            Crypto Trader Growth Hub is a conversion‑focused toolkit that helps communities transform passive followers into active, retained traders. Practically, it captures consent‑based leads, orchestrates staged, rate‑limited messages, and tracks activation, first trade time, and rolling volume. Unlike generic email tools, it respects platform ToS, uses deduplication to prevent repeats, and ships with pre‑built engagement libraries tailored to trading contexts. For managers, the Hub provides live dashboards, CSV exports, and clear attribution so you can scale what works and sunset what doesn’t. The goal isn’t vanity metrics—it’s measurable activation and healthier retention with minimal operational drag.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Core Modules</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Lead Capture (links, QR, webhook)</li>
                <li>Staged Outreach (5‑touch max, pause on reply)</li>
                <li>Ethical Filters (no admins/mods, user‑only)</li>
                <li>Activation Metrics (D1/D7, first‑trade)
                </li>
                <li>Retention & Re‑engage (opt‑in only)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Specs</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Stack: Python + SQLite/Postgres; optional Google Sheets sync</li>
                <li>APIs: WebSocket price feeds; referral & volume checks (where allowed)</li>
                <li>Rate Limits: jitter, backoff, and daily caps per channel</li>
                <li>Exports: CSV with UID, join time, activation status, and notes</li>
                <li>Hosting: self‑host (Docker) or managed by request</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Packages</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Starter: setup + templates + basic dashboard</li>
                <li>Growth: custom funnels + integrations</li>
                <li>Pro: managed ops + quarterly experiments</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm text-gray-700">
                Email: <a href="mailto:contact@yourdomain.com" className="underline">contact@yourdomain.com</a><br/>
                Telegram: <span className="font-mono">@yourhandle</span><br/>
                Location: Ho Chi Minh City, Viet Nam
              </p>
            </div>
            <form className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <h4 className="font-semibold mb-2">Request a demo</h4>
              <label className="block text-sm mb-1">Email</label>
              <input className="w-full border rounded-lg p-2 mb-2" placeholder="you@example.com"/>
              <label className="block text-sm mb-1">What problem are you solving?</label>
              <textarea className="w-full border rounded-lg p-2 mb-2" rows={3} placeholder="Tell us about your community and goals"/>
              <button type="button" className="px-4 py-2 rounded-xl bg-black text-white">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* DISCUSSION QUESTION (5) */}
      <section id="discussion" className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">Discussion Question</h3>
          <p className="text-gray-800">
            What’s the single most respectful, non‑spammy touchpoint that has ever convinced you—or your community—to place the <em>first</em> real trade, and why did it work?
          </p>
          <div className="mt-4">
            <input className="w-full border rounded-lg p-2" placeholder="Share your answer here…"/>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Crypto Trader Growth Hub. All rights reserved.</p>
        <p className="mt-1">Built with Michael Hyatt’s 5‑part outline: Lead • Image • Personal Experience • Main Body • Discussion.</p>
      </footer>
    </div>
  );
}
