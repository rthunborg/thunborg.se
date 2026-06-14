export function GlobalFurnitureGroupDiagram() {
  // Layout constants
  const padX = 20;
  const svgW = 520;
  const contentW = svgW - padX * 2;

  // Box dimensions
  const boxW = 140;
  const boxH = 48;
  const smallBoxW = 120;
  const smallBoxH = 42;

  // Y positions — top to bottom flow
  const cicdY = 16;
  const cicdH = 28;

  const authY = 64;
  const authBoxW = 150;

  const frontendY = 64;

  const apiY = 148;
  const apiBoxW = 200;

  const dataY = 240;
  const dataBoxW = 160;

  const legacyY = 240;

  const svgH = 310;

  // X positions — centered layout
  const centerX = svgW / 2;

  // CI/CD bar spans full width
  const cicdX = padX;
  const cicdW = contentW;

  // Frontend (left-center) and Auth (right-center) on same row
  const frontendX = padX + 30;
  const authX = svgW - padX - authBoxW - 30;

  // API layer centered
  const apiX = centerX - apiBoxW / 2;

  // Data store (left) and Legacy (right) on same row
  const dataX = padX + 40;
  const legacyX = svgW - padX - smallBoxW - 40;

  return (
    <div className="w-full">
      <svg
        role="img"
        aria-label="Arkitekturdiagram: Backend-arkitektur med .NET API, Active Directory-integration, MongoDB och legacy Python-migration"
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        `}</style>

        {/* === CI/CD Pipeline — top bar === */}
        <rect
          x={cicdX}
          y={cicdY}
          width={cicdW}
          height={cicdH}
          rx={4}
          fill="rgba(245,158,11,0.06)"
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.5}
        />
        {/* Gear icon */}
        <circle
          cx={cicdX + 18}
          cy={cicdY + cicdH / 2}
          r={6}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={0.8}
          strokeOpacity={0.7}
        />
        <circle
          cx={cicdX + 18}
          cy={cicdY + cicdH / 2}
          r={2.5}
          fill="#F59E0B"
          fillOpacity={0.5}
        />
        <text
          x={cicdX + 32}
          y={cicdY + cicdH / 2 + 1}
          dominantBaseline="central"
          fill="#F59E0B"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          AZURE DEVOPS CI/CD PIPELINE
        </text>

        {/* === Frontend — React app === */}
        <rect
          x={frontendX}
          y={frontendY}
          width={boxW}
          height={boxH}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
        <text
          x={frontendX + boxW / 2}
          y={frontendY + boxH / 2 - 6}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="10"
          fontWeight="600"
        >
          React Frontend
        </text>
        <text
          x={frontendX + boxW / 2}
          y={frontendY + boxH / 2 + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
        >
          3D-modellering (intern app)
        </text>

        {/* === Auth — Active Directory === */}
        <rect
          x={authX}
          y={authY}
          width={authBoxW}
          height={boxH}
          rx={4}
          fill="rgba(245,158,11,0.04)"
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.4}
        />
        {/* Lock icon */}
        <rect
          x={authX + 10}
          y={authY + boxH / 2 - 3}
          width={8}
          height={7}
          rx={1}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={0.8}
          strokeOpacity={0.7}
        />
        <path
          d={`M${authX + 12},${authY + boxH / 2 - 3} v-3 a2,2 0 0,1 4,0 v3`}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={0.8}
          strokeOpacity={0.7}
        />
        <text
          x={authX + 26}
          y={authY + boxH / 2 - 6}
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="10"
          fontWeight="600"
        >
          Active Directory
        </text>
        <text
          x={authX + 26}
          y={authY + boxH / 2 + 8}
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
        >
          Microsoft Graph / Azure AD
        </text>

        {/* === Connection: Frontend → API === */}
        <line
          x1={frontendX + boxW / 2}
          y1={frontendY + boxH}
          x2={centerX}
          y2={apiY}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.4}
          strokeDasharray="3 3"
        />

        {/* === Connection: Auth → API === */}
        <line
          x1={authX + authBoxW / 2}
          y1={authY + boxH}
          x2={centerX + 40}
          y2={apiY}
          stroke="#F59E0B"
          strokeWidth={1.2}
          strokeOpacity={0.5}
        />
        {/* Arrow head for auth connection */}
        <polygon
          points={`${centerX + 40 - 3},${apiY - 1} ${centerX + 40 + 3},${apiY - 1} ${centerX + 40},${apiY + 4}`}
          fill="#F59E0B"
          fillOpacity={0.5}
        />

        {/* === Connection: CI/CD → API (vertical dashed) === */}
        <line
          x1={centerX}
          y1={cicdY + cicdH}
          x2={centerX}
          y2={apiY}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* === API Layer — .NET Gateway === */}
        <rect
          x={apiX}
          y={apiY}
          width={apiBoxW}
          height={boxH + 6}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={1.5}
        />
        <text
          x={centerX}
          y={apiY + (boxH + 6) / 2 - 8}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="11"
          fontWeight="600"
        >
          .NET API Gateway
        </text>
        <text
          x={centerX}
          y={apiY + (boxH + 6) / 2 + 6}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="9"
        >
          24 endpoints · REST
        </text>

        {/* === Connection: API → Data Store === */}
        <line
          x1={centerX - 30}
          y1={apiY + boxH + 6}
          x2={dataX + dataBoxW / 2}
          y2={dataY}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.4}
          strokeDasharray="3 3"
        />

        {/* === Connection: API → Legacy (dotted migration) === */}
        <line
          x1={centerX + 30}
          y1={apiY + boxH + 6}
          x2={legacyX + smallBoxW / 2}
          y2={legacyY}
          stroke="#919191"
          strokeWidth={1}
          strokeOpacity={0.4}
          strokeDasharray="2 4"
        />

        {/* === Data Store — MongoDB === */}
        <rect
          x={dataX}
          y={dataY}
          width={dataBoxW}
          height={boxH}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
        {/* DB icon (cylinder) */}
        <ellipse
          cx={dataX + 18}
          cy={dataY + boxH / 2 - 6}
          rx={7}
          ry={3.5}
          fill="none"
          stroke="#919191"
          strokeWidth={0.8}
        />
        <line
          x1={dataX + 11}
          y1={dataY + boxH / 2 - 6}
          x2={dataX + 11}
          y2={dataY + boxH / 2 + 5}
          stroke="#919191"
          strokeWidth={0.8}
        />
        <line
          x1={dataX + 25}
          y1={dataY + boxH / 2 - 6}
          x2={dataX + 25}
          y2={dataY + boxH / 2 + 5}
          stroke="#919191"
          strokeWidth={0.8}
        />
        <ellipse
          cx={dataX + 18}
          cy={dataY + boxH / 2 + 5}
          rx={7}
          ry={3.5}
          fill="none"
          stroke="#919191"
          strokeWidth={0.8}
        />
        <text
          x={dataX + 34}
          y={dataY + boxH / 2 - 6}
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="10"
          fontWeight="600"
        >
          MongoDB
        </text>
        <text
          x={dataX + 34}
          y={dataY + boxH / 2 + 8}
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
        >
          3D-modelldata
        </text>

        {/* === Legacy — Python Backend (faded, dashed) === */}
        <rect
          x={legacyX}
          y={legacyY}
          width={smallBoxW}
          height={smallBoxH}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
          strokeDasharray="4 3"
          opacity={0.5}
        />
        <text
          x={legacyX + smallBoxW / 2}
          y={legacyY + smallBoxH / 2 - 6}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="10"
          opacity={0.6}
        >
          Python Backend
        </text>
        <text
          x={legacyX + smallBoxW / 2}
          y={legacyY + smallBoxH / 2 + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
          opacity={0.4}
        >
          LEGACY (migreras)
        </text>

        {/* Migration arrow: Legacy → API (.NET) */}
        <line
          x1={legacyX + smallBoxW / 2}
          y1={legacyY}
          x2={centerX + 50}
          y2={apiY + boxH + 6}
          stroke="#919191"
          strokeWidth={1}
          strokeOpacity={0.3}
          strokeDasharray="2 4"
          markerEnd="url(#migration-arrow)"
        />
        <defs>
          <marker
            id="migration-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#919191" fillOpacity={0.4} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
