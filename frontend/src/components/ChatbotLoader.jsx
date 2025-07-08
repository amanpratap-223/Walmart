// src/components/ChatbotLoader.jsx
import { useEffect } from 'react';

export default function ChatbotLoader() {
  useEffect(() => {
    const d = document;
    const t = 'script';
    const v = d.createElement(t);
    const s = d.getElementsByTagName(t)[0];

    v.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '686aa9b0f3b489a595d1031c' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };

    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);

    // optionally: cleanup on unmount
    return () => {
      if (window.voiceflow && window.voiceflow.chat) {
        // tear down if Voiceflow exposes a destroy…
        window.voiceflow.chat.destroy?.();
      }
    };
  }, []);

  return null;
}
