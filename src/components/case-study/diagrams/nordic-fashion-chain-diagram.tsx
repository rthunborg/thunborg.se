export function NordicFashionChainDiagram() {
  // Layout constants
  const pad = 20;
  const serviceBoxW = 130;
  const serviceBoxH = 48;
  const serviceGap = 16;
  const serviceCount = 3;
  const totalServicesW =
    serviceCount * serviceBoxW + (serviceCount - 1) * serviceGap;
  const svgW = totalServicesW + pad * 2 + 140; // extra space for legacy box
  const startX = pad;

  // Y positions
  const infraLabelY = 16;
  const infraY = 28;
  const observabilityY = 38;
  const observabilityH = 24;
  const serviceY = observabilityY + observabilityH + 30;
  const cosmosH = 28;
  const cosmosGap = 8;
  const cosmosY = serviceY + serviceBoxH + cosmosGap;
  const busY = cosmosY + cosmosH + 30;
  const busH = 30;
  const legacyY = serviceY + 10;
  const legacyBoxW = 110;
  const legacyBoxH = 56;
  const legacyX = startX + totalServicesW + 40;

  const svgH = busY + busH + 40;

  // Service definitions
  const services = [
    { name: "Order", subtitle: ".NET Service" },
    { name: "Lager", subtitle: ".NET Service" },
    { name: "WMS", subtitle: ".NET Service" },
  ];

  return (
    <div className="w-full">
      <svg
        role="img"
        aria-label="Arkitekturdiagram: Eventdriven mikroservicearkitektur med Order, Lager och WMS-tjänster kopplade via Service Bus, Event Grid och Kafka, med Cosmos DB per tjänst, Azure/Kubernetes infrastruktur och Grafana-observabilitet. Ersätter tidigare Oracle-monolit."
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        `}</style>

        {/* === Infrastructure background layer === */}
        <rect
          x={startX - 8}
          y={infraY}
          width={totalServicesW + 16}
          height={svgH - infraY - 16}
          rx={6}
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <text
          x={startX + totalServicesW / 2}
          y={infraLabelY}
          textAnchor="middle"
          fill="#919191"
          fontSize="8"
          letterSpacing="0.1em"
        >
          AZURE / KUBERNETES
        </text>

        {/* === Observability layer (Grafana) === */}
        <rect
          x={startX}
          y={observabilityY}
          width={totalServicesW}
          height={observabilityH}
          rx={4}
          fill="rgba(245,158,11,0.06)"
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.5}
        />
        <text
          x={startX + totalServicesW / 2}
          y={observabilityY + observabilityH / 2 + 1}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#F59E0B"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          GRAFANA OBSERVABILITY
        </text>

        {/* === Microservice boxes === */}
        {services.map((svc, i) => {
          const x = startX + i * (serviceBoxW + serviceGap);
          return (
            <g key={svc.name}>
              <rect
                x={x}
                y={serviceY}
                width={serviceBoxW}
                height={serviceBoxH}
                rx={4}
                fill="transparent"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              <text
                x={x + serviceBoxW / 2}
                y={serviceY + serviceBoxH / 2 - 6}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#EDEDED"
                fontSize="11"
                fontWeight="600"
              >
                {svc.name}
              </text>
              <text
                x={x + serviceBoxW / 2}
                y={serviceY + serviceBoxH / 2 + 9}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#919191"
                fontSize="8"
              >
                {svc.subtitle}
              </text>
            </g>
          );
        })}

        {/* === Cosmos DB per service === */}
        {services.map((svc, i) => {
          const x = startX + i * (serviceBoxW + serviceGap);
          const cx = x + serviceBoxW / 2;
          return (
            <g key={`cosmos-${svc.name}`}>
              {/* Connection line from service to cosmos */}
              <line
                x1={cx}
                y1={serviceY + serviceBoxH}
                x2={cx}
                y2={cosmosY}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              {/* Cosmos DB box */}
              <rect
                x={x + 10}
                y={cosmosY}
                width={serviceBoxW - 20}
                height={cosmosH}
                rx={4}
                fill="transparent"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              {/* DB cylinder icon */}
              <ellipse
                cx={x + 22}
                cy={cosmosY + cosmosH / 2 - 3}
                rx={5}
                ry={3}
                fill="none"
                stroke="#919191"
                strokeWidth={0.7}
              />
              <line
                x1={x + 17}
                y1={cosmosY + cosmosH / 2 - 3}
                x2={x + 17}
                y2={cosmosY + cosmosH / 2 + 4}
                stroke="#919191"
                strokeWidth={0.7}
              />
              <line
                x1={x + 27}
                y1={cosmosY + cosmosH / 2 - 3}
                x2={x + 27}
                y2={cosmosY + cosmosH / 2 + 4}
                stroke="#919191"
                strokeWidth={0.7}
              />
              <ellipse
                cx={x + 22}
                cy={cosmosY + cosmosH / 2 + 4}
                rx={5}
                ry={3}
                fill="none"
                stroke="#919191"
                strokeWidth={0.7}
              />
              <text
                x={x + 32}
                y={cosmosY + cosmosH / 2 + 1}
                dominantBaseline="central"
                fill="#919191"
                fontSize="8"
              >
                Cosmos DB
              </text>
            </g>
          );
        })}

        {/* === Connection lines from Cosmos to Event Bus === */}
        {services.map((svc, i) => {
          const cx =
            startX + i * (serviceBoxW + serviceGap) + serviceBoxW / 2;
          return (
            <line
              key={`bus-conn-${svc.name}`}
              x1={cx}
              y1={cosmosY + cosmosH}
              x2={cx}
              y2={busY}
              stroke="#F59E0B"
              strokeWidth={1}
              strokeOpacity={0.4}
              strokeDasharray="3 3"
            />
          );
        })}

        {/* === Event Backbone (central bus) === */}
        <rect
          x={startX}
          y={busY}
          width={totalServicesW}
          height={busH}
          rx={4}
          fill="rgba(245,158,11,0.08)"
          stroke="#F59E0B"
          strokeWidth={1.5}
        />
        <text
          x={startX + totalServicesW / 2}
          y={busY + busH / 2 - 4}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#F59E0B"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.04em"
        >
          EVENT BACKBONE
        </text>
        <text
          x={startX + totalServicesW / 2}
          y={busY + busH / 2 + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="7.5"
        >
          Service Bus · Event Grid · Kafka
        </text>

        {/* === Legacy Oracle monolith (faded, struck-through) === */}
        <g opacity={0.35}>
          <rect
            x={legacyX}
            y={legacyY}
            width={legacyBoxW}
            height={legacyBoxH}
            rx={4}
            fill="transparent"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
            strokeDasharray="6 4"
          />
          <text
            x={legacyX + legacyBoxW / 2}
            y={legacyY + legacyBoxH / 2 - 7}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="10"
            fontWeight="600"
          >
            Oracle
          </text>
          <text
            x={legacyX + legacyBoxW / 2}
            y={legacyY + legacyBoxH / 2 + 7}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            Monolit (legacy)
          </text>
          {/* Strike-through X lines */}
          <line
            x1={legacyX + 8}
            y1={legacyY + 8}
            x2={legacyX + legacyBoxW - 8}
            y2={legacyY + legacyBoxH - 8}
            stroke="#EF4444"
            strokeWidth={1.5}
            strokeOpacity={0.7}
          />
          <line
            x1={legacyX + legacyBoxW - 8}
            y1={legacyY + 8}
            x2={legacyX + 8}
            y2={legacyY + legacyBoxH - 8}
            stroke="#EF4444"
            strokeWidth={1.5}
            strokeOpacity={0.7}
          />
        </g>

        {/* Arrow from legacy to services (migration arrow) */}
        <line
          x1={legacyX}
          y1={legacyY + legacyBoxH / 2}
          x2={startX + totalServicesW + 6}
          y2={serviceY + serviceBoxH / 2}
          stroke="#919191"
          strokeWidth={1}
          strokeOpacity={0.3}
          strokeDasharray="4 3"
        />
        <polygon
          points={`${startX + totalServicesW + 6},${serviceY + serviceBoxH / 2 - 3} ${startX + totalServicesW + 6},${serviceY + serviceBoxH / 2 + 3} ${startX + totalServicesW},${serviceY + serviceBoxH / 2}`}
          fill="#919191"
          fillOpacity={0.3}
        />

        {/* Observability dashed connections to services */}
        {services.map((svc, i) => {
          const cx =
            startX + i * (serviceBoxW + serviceGap) + serviceBoxW / 2;
          return (
            <line
              key={`obs-${svc.name}`}
              x1={cx}
              y1={observabilityY + observabilityH}
              x2={cx}
              y2={serviceY}
              stroke="#F59E0B"
              strokeWidth={0.7}
              strokeOpacity={0.3}
              strokeDasharray="2 3"
            />
          );
        })}
      </svg>
    </div>
  );
}
