import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Lock,
  CheckCircle,
  Zap,
  Shield,
  ExternalLink,
} from "lucide-react";
import { LandingNav } from "@/components/landing-nav";

const TIERS = [
  {
    tier: "A",
    range: "600–850",
    limit: "$10,000+",
    rate: "8–12%",
    color: "emerald",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    tier: "B",
    range: "350–599",
    limit: "$2,000–$10,000",
    rate: "12–18%",
    color: "blue",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    tier: "C",
    range: "100–349",
    limit: "$200–$2,000",
    rate: "18–25%",
    color: "yellow",
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  {
    tier: "REJECTED",
    range: "0–99",
    limit: "No access",
    rate: "—",
    color: "red",
    badge: "bg-red-500/20 text-red-400 border-red-500/30",
  },
];

const PARTNERS = [
  {
    name: "Trustless Work",
    desc: "Escrow completion events on Stellar",
    event: "escrow_completed",
    points: "+60 pts/event",
    icon: Shield,
    color: "indigo",
  },
  {
    name: "Blend Protocol",
    desc: "Verified loan repayments on Stellar",
    event: "loan_repaid",
    points: "+80 pts/event",
    icon: BarChart3,
    color: "violet",
  },
  {
    name: "Vaquita",
    desc: "Savings rounds and tanda cycles",
    event: "tanda_cycle_complete",
    points: "+100 pts/cycle",
    icon: Zap,
    color: "purple",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Connect your Stellar wallet",
    desc: "Register with your Stellar wallet address (starts with G). No email, no password — your wallet is your identity.",
    icon: Lock,
  },
  {
    n: "02",
    title: "ZCore reads your on-chain history",
    desc: "We pull your payment history from Stellar Horizon and aggregate verified events from partner protocols like Trustless Work, Blend, and Vaquita.",
    icon: Globe,
  },
  {
    n: "03",
    title: "Get your score and unlock better rates",
    desc: "Receive a 0–850 credit score with full breakdown. Share it with any lending protocol to unlock lower collateral requirements and better interest rates.",
    icon: BarChart3,
  },
];

const SCORE_COMPONENTS = [
  { component: "Wallet age", max: 40, source: "Stellar Horizon" },
  { component: "Transaction activity", max: 60, source: "Stellar Horizon" },
  { component: "Transaction success rate", max: 30, source: "Stellar Horizon" },
  { component: "XLM balance", max: 20, source: "Stellar Horizon" },
  { component: "Escrow completed", max: 60, source: "Trustless Work" },
  { component: "Loan repaid", max: 80, source: "Blend Protocol" },
  { component: "Tanda round paid", max: 30, source: "Vaquita" },
  { component: "Tanda cycle complete", max: 100, source: "Vaquita" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <LandingNav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300">
              Built on Stellar · Powered by on-chain data
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Portable Credit Score
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              for Stellar DeFi
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turn your verified on-chain payment history into a credit score.
            No questionnaires, no banks — just your wallet and your track record.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-all text-white px-8 py-3.5 rounded-xl font-semibold text-base"
            >
              Check your score
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-base font-medium"
            >
              How it works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { value: "0–850", label: "Score range" },
              { value: "3", label: "Partner protocols" },
              { value: "0 fees", label: "For users" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-sm text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ZCORE IS NOT */}
      <section className="py-8 px-4 sm:px-6 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="font-medium text-white/30 uppercase text-xs tracking-widest">
              ZCore does NOT
            </span>
            {[
              "lend money",
              "custody funds",
              "collect personal data",
              "require email or password",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-red-400/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Three steps from wallet to credit score.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map(({ n, title, desc, icon: Icon }) => (
              <div
                key={n}
                className="relative p-7 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-indigo-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-black text-indigo-500/20 group-hover:text-indigo-500/30 transition-colors leading-none">
                    {n}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-4 sm:px-6 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Partner Protocols
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Every verified payment event from these protocols adds points to
              your score.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PARTNERS.map(({ name, desc, event, points, icon: Icon }) => (
              <div
                key={name}
                className="p-7 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{name}</h3>
                <p className="text-white/50 text-sm mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                    {event}
                  </code>
                  <span className="text-sm font-semibold text-emerald-400">
                    {points}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm">
              Are you building on Stellar?{" "}
              <a
                href="https://github.com/Zcorehub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
              >
                Become a partner <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SCORE SYSTEM */}
      <section id="score" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: explanation */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Score System (0–850)
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Your score has two sources: your base Stellar activity (up to
                150 pts) and verified events from partner protocols (up to 700
                pts).
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                  <div className="w-3 h-12 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Stellar Base</div>
                    <div className="text-white/50 text-sm">
                      Wallet age, activity, success rate, XLM balance
                    </div>
                    <div className="text-indigo-400 text-sm font-medium mt-1">
                      Up to 150 pts
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                  <div className="w-3 h-12 rounded-full bg-gradient-to-b from-violet-500 to-violet-700 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Partner Events</div>
                    <div className="text-white/50 text-sm">
                      Escrows, loans, tandas verified on-chain by partners
                    </div>
                    <div className="text-violet-400 text-sm font-medium mt-1">
                      Up to 700 pts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: table */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/[0.08] text-xs font-medium text-white/40 uppercase tracking-widest grid grid-cols-3">
                <span>Component</span>
                <span className="text-center">Max pts</span>
                <span className="text-right">Source</span>
              </div>
              {SCORE_COMPONENTS.map(({ component, max, source }) => (
                <div
                  key={component}
                  className="px-5 py-3 border-b border-white/[0.05] last:border-0 grid grid-cols-3 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm text-white/80">{component}</span>
                  <span className="text-sm text-center font-mono text-emerald-400">
                    {max}
                  </span>
                  <span className="text-xs text-right text-white/40">
                    {source}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-24 px-4 sm:px-6 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Credit Tiers
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Your tier determines what lending terms you can access across
              partner protocols.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map(({ tier, range, limit, rate, badge }) => (
              <div
                key={tier}
                className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-colors"
              >
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-bold border mb-4 ${badge}`}
                >
                  Tier {tier}
                </div>
                <div className="text-2xl font-bold mb-1">{range}</div>
                <div className="text-white/40 text-xs mb-4">score range</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Limit</span>
                    <span className="font-medium">{limit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Typical rate</span>
                    <span className="font-medium">{rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BUILDERS */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 sm:p-12 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6 text-xs text-indigo-300">
                  Open Source
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  For Lenders &amp; Protocol Builders
                </h2>
                <p className="text-white/50 mb-6 leading-relaxed">
                  ZCore answers one question:{" "}
                  <em className="text-white/70 not-italic font-medium">
                    "Has this person been reliable with money on Stellar?"
                  </em>{" "}
                  Integrate our API to get a score breakdown and make smarter
                  lending decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com/Zcorehub/ZCore-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors px-5 py-2.5 rounded-xl text-sm font-medium"
                  >
                    Backend repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/Zcorehub/Zcore-Landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors px-5 py-2.5 rounded-xl text-sm"
                  >
                    Frontend repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-[#080B14] border border-white/[0.08] rounded-xl p-5 font-mono text-sm">
                <div className="text-white/30 text-xs mb-3">
                  GET /api/user/{"{wallet}"}/score
                </div>
                <pre className="text-white/70 text-xs leading-relaxed overflow-x-auto">{`{
  "score": 387,
  "tier": "B",
  "breakdown": {
    "stellarBase": 67,
    "eventsScore": 320,
    "totalEvents": 8,
    "platforms": [
      "trustless-work",
      "blend-protocol"
    ]
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Start building
                <br />
                your credit history
              </h2>
              <p className="text-white/50 text-lg mb-10">
                Register your Stellar wallet. It takes 10 seconds.
              </p>
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-all text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Register your wallet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-6 text-white/30 text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No email. No password. Just your Stellar wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">Z</span>
            </div>
            <span>ZCore — Portable Credit Scoring for Stellar DeFi</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Zcorehub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Zcorehub/ZCore-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Backend
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
