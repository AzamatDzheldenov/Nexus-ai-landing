import { ImageResponse } from "next/og";

export const alt = "Nexus AI premium dark workspace preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#05070c",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
            boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: 56,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "rgba(186,230,253,0.1)",
                border: "1px solid rgba(186,230,253,0.18)",
                borderRadius: 14,
                display: "flex",
                height: 56,
                justifyContent: "center",
                width: 56,
              }}
            >
              N
            </div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>Nexus AI</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                letterSpacing: -2,
                lineHeight: 0.96,
              }}
            >
              AI workspace for freelancers
            </div>
            <div
              style={{
                color: "#cbd5e1",
                fontSize: 30,
                lineHeight: 1.35,
              }}
            >
              Clients, tasks, documents, and payments in one calm operating
              layer.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
