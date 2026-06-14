import type { CaseStudyMetric } from "./types";

export function MetricCard({ metric }: { metric: CaseStudyMetric }) {
  return (
    <div
      className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-6"
      aria-label={`${metric.label}: från ${metric.before} till ${metric.after}, förändring ${metric.delta}`}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-3">
        {metric.label}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-[#919191] text-lg">{metric.before}</span>
        <span className="text-[#919191]/50">→</span>
        <span className="text-[#EDEDED] text-lg font-semibold">
          {metric.after}
        </span>
      </div>
      <p
        className={`font-mono text-sm font-semibold mt-2 ${
          metric.improvement === "positive"
            ? "text-[#22C55E]"
            : "text-[#DC2626]"
        }`}
      >
        {metric.delta}
      </p>
    </div>
  );
}
