export function NordicHrGroupDiagram() {
  // Layout constants
  const svgW = 520;
  const svgH = 420;
  const centerX = svgW / 2;

  // --- Rotation cycle positions (circular layout) ---
  const cycleY = 60;
  const secretsX = centerX;
  const secretsY = cycleY + 60;
  const lambdaX = centerX + 140;
  const lambdaY = secretsY + 90;
  const targetsX = centerX - 140;
  const targetsY = lambdaY;

  // Box dimensions
  const boxW = 130;
  const boxH = 44;
  const smallBoxW = 110;
  const smallBoxH = 36;
  const envBoxW = 100;
  const envBoxH = 32;

  // --- Infrastructure row ---
  const infraY = 280;
  const cicdX = centerX - 80;
  const iacX = centerX + 80;

  // --- Environment pipeline ---
  const envY = 370;
  const envGap = 20;
  const envTotalW = 3 * envBoxW + 2 * envGap;
  const envStartX = (svgW - envTotalW) / 2;

  const envLabels = ["Test", "Staging", "Prod"];

  return (
    <div className="w-full">
      <svg
        role="img"
        aria-label="Arkitekturdiagram: Automatiserad credential-rotation med AWS Secrets Manager, Lambda, MSSQL och RabbitMQ, deployad via GitHub Actions och CloudFormation genom tre miljöer"
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        `}</style>

        {/* === Section label: Rotation Cycle === */}
        <text
          x={centerX}
          y={cycleY - 26}
          textAnchor="middle"
          fill="#919191"
          fontSize="9"
          letterSpacing="0.08em"
        >
          AUTOMATISERAD ROTATIONSCYKEL
        </text>

        {/* === Circular rotation arrows === */}
        {/* Secrets Manager → Lambda (right arc) */}
        <path
          d={`M${secretsX + 40},${secretsY + boxH / 2 + 8} Q${centerX + 160},${secretsY + 30} ${lambdaX + boxW / 2 - 10},${lambdaY - 6}`}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={1.5}
          strokeOpacity={0.6}
          markerEnd="url(#arrowAccent)"
        />
        {/* Lambda → Target Systems (bottom arc) */}
        <path
          d={`M${lambdaX - 10},${lambdaY + boxH / 2 + 4} Q${centerX},${lambdaY + 50} ${targetsX + boxW + 10},${targetsY + boxH / 2 + 4}`}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={1.5}
          strokeOpacity={0.6}
          markerEnd="url(#arrowAccent)"
        />
        {/* Target Systems → Secrets Manager (left arc) */}
        <path
          d={`M${targetsX + boxW / 2 + 10},${targetsY - 6} Q${centerX - 160},${secretsY + 30} ${secretsX - 40},${secretsY + boxH / 2 + 8}`}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={1.5}
          strokeOpacity={0.6}
          markerEnd="url(#arrowAccent)"
        />

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowAccent"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0,0 8,3 0,6" fill="#F59E0B" fillOpacity={0.7} />
          </marker>
          <marker
            id="arrowMuted"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0,0 8,3 0,6" fill="#919191" fillOpacity={0.6} />
          </marker>
        </defs>

        {/* === Secrets Manager (center-top) === */}
        <g>
          <rect
            x={secretsX - boxW / 2}
            y={secretsY}
            width={boxW}
            height={boxH}
            rx={4}
            fill="rgba(245,158,11,0.08)"
            stroke="#F59E0B"
            strokeWidth={1.5}
          />
          {/* Key icon */}
          <circle
            cx={secretsX - boxW / 2 + 18}
            cy={secretsY + boxH / 2 - 4}
            r={5}
            fill="none"
            stroke="#F59E0B"
            strokeWidth={1}
          />
          <line
            x1={secretsX - boxW / 2 + 23}
            y1={secretsY + boxH / 2 - 4}
            x2={secretsX - boxW / 2 + 30}
            y2={secretsY + boxH / 2 - 4}
            stroke="#F59E0B"
            strokeWidth={1}
          />
          <text
            x={secretsX + 8}
            y={secretsY + boxH / 2 - 5}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#F59E0B"
            fontSize="10"
            fontWeight="600"
          >
            Secrets Manager
          </text>
          <text
            x={secretsX}
            y={secretsY + boxH / 2 + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            AWS · 30-dagars rotation
          </text>
        </g>

        {/* === Lambda (right) === */}
        <g>
          <rect
            x={lambdaX - boxW / 2}
            y={lambdaY}
            width={boxW}
            height={boxH}
            rx={4}
            fill="transparent"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          {/* Lambda icon (λ) */}
          <text
            x={lambdaX - boxW / 2 + 16}
            y={lambdaY + boxH / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#F59E0B"
            fontSize="14"
            fontWeight="700"
          >
            λ
          </text>
          <text
            x={lambdaX + 8}
            y={lambdaY + boxH / 2 - 5}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#EDEDED"
            fontSize="10"
            fontWeight="600"
          >
            Lambda
          </text>
          <text
            x={lambdaX}
            y={lambdaY + boxH / 2 + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            .NET 8 Native AOT
          </text>
        </g>

        {/* === Target Systems (left) === */}
        <g>
          <rect
            x={targetsX - boxW / 2 + boxW / 2}
            y={targetsY}
            width={boxW}
            height={boxH}
            rx={4}
            fill="transparent"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          <text
            x={targetsX + boxW / 2}
            y={targetsY + boxH / 2 - 5}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#EDEDED"
            fontSize="10"
            fontWeight="600"
          >
            Målsystem
          </text>
          <text
            x={targetsX + boxW / 2}
            y={targetsY + boxH / 2 + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            MSSQL · RabbitMQ
          </text>
        </g>

        {/* === Dashed connections from cycle to infra === */}
        <line
          x1={centerX}
          y1={secretsY + boxH + 60}
          x2={centerX}
          y2={infraY - 14}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* === Section label: Infrastructure === */}
        <text
          x={centerX}
          y={infraY - 18}
          textAnchor="middle"
          fill="#919191"
          fontSize="9"
          letterSpacing="0.08em"
        >
          INFRASTRUKTUR & CI/CD
        </text>

        {/* === CI/CD Box === */}
        <g>
          <rect
            x={cicdX - smallBoxW / 2}
            y={infraY}
            width={smallBoxW}
            height={smallBoxH}
            rx={4}
            fill="transparent"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          <text
            x={cicdX}
            y={infraY + smallBoxH / 2 - 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#EDEDED"
            fontSize="10"
            fontWeight="600"
          >
            GitHub Actions
          </text>
          <text
            x={cicdX}
            y={infraY + smallBoxH / 2 + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            CI/CD Pipeline
          </text>
        </g>

        {/* === IaC Box === */}
        <g>
          <rect
            x={iacX - smallBoxW / 2}
            y={infraY}
            width={smallBoxW}
            height={smallBoxH}
            rx={4}
            fill="transparent"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          <text
            x={iacX}
            y={infraY + smallBoxH / 2 - 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#EDEDED"
            fontSize="10"
            fontWeight="600"
          >
            CloudFormation
          </text>
          <text
            x={iacX}
            y={infraY + smallBoxH / 2 + 9}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#919191"
            fontSize="8"
          >
            IAM least-privilege
          </text>
        </g>

        {/* === Connection from infra to env pipeline === */}
        <line
          x1={centerX}
          y1={infraY + smallBoxH}
          x2={centerX}
          y2={envY - 16}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* === Section label: Environment Pipeline === */}
        <text
          x={centerX}
          y={envY - 20}
          textAnchor="middle"
          fill="#919191"
          fontSize="9"
          letterSpacing="0.08em"
        >
          MILJÖPIPELINE
        </text>

        {/* === Environment boxes with arrows === */}
        {envLabels.map((label, i) => {
          const x = envStartX + i * (envBoxW + envGap);
          const isLast = i === envLabels.length - 1;
          return (
            <g key={label}>
              <rect
                x={x}
                y={envY}
                width={envBoxW}
                height={envBoxH}
                rx={4}
                fill={label === "Prod" ? "rgba(245,158,11,0.08)" : "transparent"}
                stroke={label === "Prod" ? "#F59E0B" : "rgba(255,255,255,0.08)"}
                strokeWidth={label === "Prod" ? 1.5 : 1}
              />
              <text
                x={x + envBoxW / 2}
                y={envY + envBoxH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill={label === "Prod" ? "#F59E0B" : "#EDEDED"}
                fontSize="10"
                fontWeight={label === "Prod" ? "600" : "400"}
              >
                {label}
              </text>
              {/* Arrow between env boxes */}
              {!isLast && (
                <line
                  x1={x + envBoxW + 2}
                  y1={envY + envBoxH / 2}
                  x2={x + envBoxW + envGap - 2}
                  y2={envY + envBoxH / 2}
                  stroke="#919191"
                  strokeWidth={1.2}
                  markerEnd="url(#arrowMuted)"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
