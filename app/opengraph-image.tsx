import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Default social-share image for the marketing site (1200×630).
 * Generated on-brand (cream + violet) with Cyrillic support — Martian Grotesk
 * (headings face) is bundled as ttf under public/fonts and passed to satori.
 */
export const alt = "OVEERMOON — ИИ-автоматизация продаж, поддержки и документов";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "public", "fonts");
  const [bold, medium] = await Promise.all([
    readFile(join(fontDir, "martian-grotesk-bd.ttf")),
    readFile(join(fontDir, "martian-grotesk-md.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 84,
          backgroundColor: "#F4F2EE",
          color: "#0E0E10",
          fontFamily: "Martian Grotesk",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(100,8,247,0.22), rgba(100,8,247,0) 55%)",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: "0.14em", color: "#6408F7", fontWeight: 600 }}>
          OVEERMOON
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: 960 }}>
            ИИ для продаж, поддержки и документов
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 28 }}>
            <div style={{ width: 64, height: 6, backgroundColor: "#6408F7" }} />
            <div style={{ fontSize: 30, color: "rgba(14,14,16,0.58)", marginLeft: 18 }}>
              oveermoon.ru
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Martian Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Martian Grotesk", data: bold, weight: 600, style: "normal" },
      ],
    }
  );
}
