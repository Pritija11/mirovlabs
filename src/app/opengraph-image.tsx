import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Mirov Labs — The Control Plane for Production AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(255,227,225,0.9), transparent 55%), radial-gradient(circle at 85% 10%, rgba(255,227,225,0.9), transparent 45%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={100}
          height={100}
          style={{ position: "relative", borderRadius: 22 }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#131313",
          }}
        >
          Mirov Labs
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#525252",
          }}
        >
          The control plane for production AI agents
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#ff5a50",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
