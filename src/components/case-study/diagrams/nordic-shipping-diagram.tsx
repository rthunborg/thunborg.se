export function NordicShippingDiagram() {
  // Layout constants
  const roleBoxW = 108;
  const roleBoxH = 40;
  const roleGap = 12;
  const topRowCount = 4;
  const bottomRowCount = 3;
  const totalW = topRowCount * roleBoxW + (topRowCount - 1) * roleGap; // 468
  const svgW = totalW + 40; // 508 with padding
  const startX = 20;

  // Y positions
  const layerLabelY = 16;
  const topRowY = 34;
  const bottomRowY = topRowY + roleBoxH + 10;
  const rlsY = bottomRowY + roleBoxH + 32;
  const rlsH = 28;
  const infraY = rlsY + rlsH + 32;
  const infraBoxH = 44;
  const infraRow2Y = infraY + infraBoxH + 10;
  const svgH = infraRow2Y + infraBoxH + 24;

  // Role labels
  const topRoles = ["HR-admin", "Rekryterare", "Catering\u00ADpartner", "Bemannings\u00ADpartner"];
  const bottomRoles = ["Lönekontor", "Logistik\u00ADpartner", "Besättning"];

  // Center bottom row
  const bottomRowTotalW = bottomRowCount * roleBoxW + (bottomRowCount - 1) * roleGap;
  const bottomRowStartX = startX + (totalW - bottomRowTotalW) / 2;

  // Infra boxes
  const infraBoxW = (totalW - 2 * roleGap) / 3;
  const infraItems = ["Vercel Cron", "CSV / Excel", "Backup"];

  return (
    <div className="w-full">
      <svg
        role="img"
        aria-label="Arkitekturdiagram: Rollbaserad realtidsplattform med Row Level Security för sju externa parter"
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        `}</style>

        {/* === Layer 1: Role-Based Views === */}
        <text
          x={svgW / 2}
          y={layerLabelY}
          textAnchor="middle"
          fill="#919191"
          fontSize="9"
          letterSpacing="0.08em"
        >
          ROLLBASERADE VYER
        </text>

        {/* Top row — 4 roles */}
        {topRoles.map((label, i) => {
          const x = startX + i * (roleBoxW + roleGap);
          return (
            <g key={label}>
              <rect
                x={x}
                y={topRowY}
                width={roleBoxW}
                height={roleBoxH}
                rx={4}
                fill="transparent"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              <text
                x={x + roleBoxW / 2}
                y={topRowY + roleBoxH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#EDEDED"
                fontSize="10"
              >
                {label.includes("\u00AD") ? (
                  <>
                    <tspan x={x + roleBoxW / 2} dy="-5">
                      {label.split("\u00AD")[0]}
                    </tspan>
                    <tspan x={x + roleBoxW / 2} dy="12">
                      {label.split("\u00AD")[1]}
                    </tspan>
                  </>
                ) : (
                  label
                )}
              </text>
            </g>
          );
        })}

        {/* Bottom row — 3 roles */}
        {bottomRoles.map((label, i) => {
          const x = bottomRowStartX + i * (roleBoxW + roleGap);
          return (
            <g key={label}>
              <rect
                x={x}
                y={bottomRowY}
                width={roleBoxW}
                height={roleBoxH}
                rx={4}
                fill="transparent"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              <text
                x={x + roleBoxW / 2}
                y={bottomRowY + roleBoxH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#EDEDED"
                fontSize="10"
              >
                {label.includes("\u00AD") ? (
                  <>
                    <tspan x={x + roleBoxW / 2} dy="-5">
                      {label.split("\u00AD")[0]}
                    </tspan>
                    <tspan x={x + roleBoxW / 2} dy="12">
                      {label.split("\u00AD")[1]}
                    </tspan>
                  </>
                ) : (
                  label
                )}
              </text>
            </g>
          );
        })}

        {/* Connection lines from role boxes to RLS barrier */}
        {topRoles.map((label, i) => {
          const cx = startX + i * (roleBoxW + roleGap) + roleBoxW / 2;
          return (
            <line
              key={`conn-top-${label}`}
              x1={cx}
              y1={topRowY + roleBoxH}
              x2={cx}
              y2={rlsY}
              stroke="#F59E0B"
              strokeWidth={1}
              strokeOpacity={0.4}
              strokeDasharray="3 3"
            />
          );
        })}
        {bottomRoles.map((label, i) => {
          const cx = bottomRowStartX + i * (roleBoxW + roleGap) + roleBoxW / 2;
          return (
            <line
              key={`conn-bot-${label}`}
              x1={cx}
              y1={bottomRowY + roleBoxH}
              x2={cx}
              y2={rlsY}
              stroke="#F59E0B"
              strokeWidth={1}
              strokeOpacity={0.4}
              strokeDasharray="3 3"
            />
          );
        })}

        {/* === Layer 2: RLS Security Barrier === */}
        <rect
          x={startX}
          y={rlsY}
          width={totalW}
          height={rlsH}
          rx={4}
          fill="rgba(245,158,11,0.08)"
          stroke="#F59E0B"
          strokeWidth={1.5}
        />
        {/* Shield icon (simple) */}
        <path
          d={`M${startX + 16},${rlsY + rlsH / 2 - 7} l5,-4 l5,4 v6 c0,4 -5,6 -5,6 s-5,-2 -5,-6 z`}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={1.2}
        />
        <text
          x={startX + 36}
          y={rlsY + rlsH / 2 + 1}
          dominantBaseline="central"
          fill="#F59E0B"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          ROW LEVEL SECURITY (RLS)
        </text>

        {/* Connection line from RLS to database */}
        <line
          x1={svgW / 2}
          y1={rlsY + rlsH}
          x2={svgW / 2}
          y2={infraY}
          stroke="#F59E0B"
          strokeWidth={1.5}
          strokeOpacity={0.5}
        />
        {/* Arrow head */}
        <polygon
          points={`${svgW / 2 - 4},${infraY - 1} ${svgW / 2 + 4},${infraY - 1} ${svgW / 2},${infraY + 5}`}
          fill="#F59E0B"
          fillOpacity={0.5}
        />

        {/* === Layer 3: Data & Infrastructure === */}
        <text
          x={svgW / 2}
          y={infraY - 8}
          textAnchor="middle"
          fill="#919191"
          fontSize="9"
          letterSpacing="0.08em"
        >
          DATA & INFRASTRUKTUR
        </text>

        {/* Main database box */}
        <rect
          x={startX}
          y={infraY}
          width={totalW}
          height={infraBoxH}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
        {/* DB icon (cylinder hint) */}
        <ellipse
          cx={startX + 20}
          cy={infraY + infraBoxH / 2 - 6}
          rx={8}
          ry={4}
          fill="none"
          stroke="#919191"
          strokeWidth={0.8}
        />
        <line
          x1={startX + 12}
          y1={infraY + infraBoxH / 2 - 6}
          x2={startX + 12}
          y2={infraY + infraBoxH / 2 + 6}
          stroke="#919191"
          strokeWidth={0.8}
        />
        <line
          x1={startX + 28}
          y1={infraY + infraBoxH / 2 - 6}
          x2={startX + 28}
          y2={infraY + infraBoxH / 2 + 6}
          stroke="#919191"
          strokeWidth={0.8}
        />
        <ellipse
          cx={startX + 20}
          cy={infraY + infraBoxH / 2 + 6}
          rx={8}
          ry={4}
          fill="none"
          stroke="#919191"
          strokeWidth={0.8}
        />
        <text
          x={startX + 38}
          y={infraY + infraBoxH / 2 - 4}
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="10"
          fontWeight="600"
        >
          PostgreSQL / Supabase
        </text>
        <text
          x={startX + 38}
          y={infraY + infraBoxH / 2 + 10}
          dominantBaseline="central"
          fill="#919191"
          fontSize="9"
        >
          JSONB custom_data · Relationsschema · Ändringslogg
        </text>

        {/* Infra row 2 — three utility boxes */}
        {infraItems.map((label, i) => {
          const x = startX + i * (infraBoxW + roleGap);
          return (
            <g key={label}>
              <rect
                x={x}
                y={infraRow2Y}
                width={infraBoxW}
                height={infraBoxH}
                rx={4}
                fill="transparent"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              <text
                x={x + infraBoxW / 2}
                y={infraRow2Y + infraBoxH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#919191"
                fontSize="10"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Connection lines from DB to infra boxes */}
        {infraItems.map((label, i) => {
          const cx = startX + i * (infraBoxW + roleGap) + infraBoxW / 2;
          return (
            <line
              key={`infra-conn-${label}`}
              x1={cx}
              y1={infraY + infraBoxH}
              x2={cx}
              y2={infraRow2Y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          );
        })}
      </svg>
    </div>
  );
}
