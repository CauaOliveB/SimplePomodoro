/**
 * SPACING TOKENS
 *
 * Fonte da verdade para espaçamentos, raios de borda e tamanhos do projeto.
 * Baseado na escala Tailwind (1 unidade = 0.25rem = 4px).
 *
 * Estrutura:
 *  - radius     → Raios de borda (globais e por variante)
 *  - space      → Escala de espaçamento (padding, margin, gap)
 *  - size       → Larguras, alturas e max-widths fixos
 *  - breakpoint → Breakpoints de responsividade
 */

// ─── Radius ──────────────────────────────────────────────────────────────────
/**
 * Raios de borda extraídos do @theme inline e das variáveis CSS.
 * `base` é o valor definido em --radius (globals.css).
 */
export const radius = {
  none: '0px',
  sm:   '0.75rem',   // calc(var(--radius) - 4px)
  md:   '0.875rem',  // calc(var(--radius) - 2px)
  base: '1rem',      // --radius → var(--radius-lg)
  lg:   '1rem',      // var(--radius)
  full: '9999px',
} as const;

// ─── Escala de Espaçamento ────────────────────────────────────────────────────
/**
 * Valores utilizados nos componentes via classes Tailwind (p-*, m-*, gap-*).
 * Escala: 1 = 0.25rem = 4px.
 */
export const space = {
  0:  '0px',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1:  '0.25rem',    // 4px
  1.5:'0.375rem',   // 6px
  2:  '0.5rem',     // 8px   ← p-2 (ícone Timer no header)
  3:  '0.75rem',    // 12px
  4:  '1rem',       // 16px  ← p-4 (main container padding)
  5:  '1.25rem',    // 20px
  6:  '1.5rem',     // 24px  ← gap-6 (Card interno dos formulários)
  7:  '1.75rem',    // 28px
  8:  '2rem',       // 32px  ← p-8 (Card padding) / m-8 (ícones do Timer)
  9:  '2.25rem',    // 36px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
} as const;

// ─── Tamanhos Fixos ───────────────────────────────────────────────────────────
/**
 * Tamanhos semânticos nomeados, usados para width/height e max-width.
 */
export const size = {
  /** Largura máxima dos formulários de autenticação (max-w-md = 28rem) */
  formMaxWidth: '28rem',

  /** Altura mínima de tela cheia (min-h-screen) */
  screenMinHeight: '100vh',

  /** Tamanho padrão de ícones grandes (ícone de Timer no login) */
  iconLg: '3.75rem',  // h-15 w-15

  /** Altura dos botões */
  button: {
    xs:      '1.5rem',   // h-6
    sm:      '2rem',     // h-8
    default: '2.25rem',  // h-9
    lg:      '2.5rem',   // h-10
    icon:    '2.25rem',  // size-9
  },
} as const;

// ─── Breakpoints ─────────────────────────────────────────────────────────────
/**
 * Breakpoints padrão do Tailwind v4, documentados aqui para referência.
 */
export const breakpoint = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1536px',
} as const;

// ─── Exportação agrupada ──────────────────────────────────────────────────────
export const spacingTokens = {
  radius,
  space,
  size,
  breakpoint,
} as const;

export type SpacingTokens = typeof spacingTokens;
