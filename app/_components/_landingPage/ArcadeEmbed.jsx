"use client";
import { useEffect, useRef } from "react";

export function ArcadeEmbed() {
  const arcadeIframeRef = useRef(null);

  useEffect(() => {
    function onArcadeIframeMessage(e) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;

      const arcadeIframe = arcadeIframeRef.current;
      if (!arcadeIframe || !arcadeIframe.contentWindow) return;

      if (e.data.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage(
          { event: "register-popout-handler" },
          "*"
        );
      }

      if (e.data.event === "arcade-popout-open") {
        arcadeIframe.style["height"] = "100%";
        arcadeIframe.style["z-index"] = "9999999";
      }

      if (e.data.event === "arcade-popout-close") {
        arcadeIframe.style["height"] = "0";
        arcadeIframe.style["z-index"] = "auto";
      }
    }

    window.addEventListener("message", onArcadeIframeMessage);

    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage(
        { event: "register-popout-handler" },
        "*"
      );
    }

    return () => {
      if (arcadeIframe && arcadeIframe.contentWindow) {
        arcadeIframe.contentWindow.postMessage(
          { event: "unregister-popout-handler" },
          "*"
        );
      }

      window.removeEventListener("message", onArcadeIframeMessage);
    };
  }, []);

  function onClickArcadeTrigger() {
    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage(
        { event: "request-popout-open" },
        "*"
      );
    }
  }

  return (
    <>
      <button
        onClick={onClickArcadeTrigger}
        style={{
          border: "1px solid #E5E7EB",
          padding: "8px 12px",
          borderRadius: "12px",
        }}
      >
        <img
          src="ss.jpg"
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </button>
      <iframe
        ref={arcadeIframeRef}
        src="https://demo.arcade.software/g5s7spFE5uQ29EDV431H?embed&embed_custom&show_copy_link=true"
        title="writedaily"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 0,
          colorScheme: "light",
        }}
      />
    </>
  );
}
