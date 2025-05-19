// src/global.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': {
      intent: string;
      'chat-title': string;
      'agent-id': string;
      'language-code': string;
      [key: string]: unknown; // Replaced 'any' with 'unknown' to satisfy ESLint
    };
  }
}