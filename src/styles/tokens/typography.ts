/**
 * TYPOGRAPHY TOKENS
 *
 * Fonte da verdade para tipografia do projeto.
 * Os valores mapeiam o @theme inline e as classes Tailwind utilizadas
 * nos componentes (globals.css + pages de autenticação + timer).
 *
 * Estrutura:
 *  - fontFamily  → Famílias tipográficas (sans / mono)
 *  - fontSize    → Escala de tamanhos
 *  - fontWeight  → Pesos
 *  - lineHeight  → Alturas de linha
 *  - letterSpacing → Espaçamento entre letras
 */

// ─── Famílias Tipográficas ────────────────────────────────────────────────────
/**
 * `sans`  → UI principal (labels, botões, parágrafos)
 * `mono`  → Exibição do timer e trechos de código
 */
export const fontFamily = {
  sans: "'Space Grotesk', var(--font-geist-sans), sans-serif",
  mono: "'JetBrains Mono', var(--font-geist-mono), monospace",
} as const;

// ─── Escala de Tamanhos ───────────────────────────────────────────────────────
/**
 * Tamanhos extraídos das classes usadas nos componentes.
 * Referência: text-xs → text-2xl encontrados nas páginas.
 */
export const fontSize = {
  xs:   ['0.75rem',  { lineHeight: '1rem' }],        // text-xs   (botão xs)
  sm:   ['0.875rem', { lineHeight: '1.25rem' }],      // text-sm   (buttonVariants, padrão)
  base: ['1rem',     { lineHeight: '1.5rem' }],       // text-base
  lg:   ['1.125rem', { lineHeight: '1.75rem' }],      // text-lg
  xl:   ['1.25rem',  { lineHeight: '1.75rem' }],      // text-xl
  '2xl':['1.5rem',   { lineHeight: '2rem' }],         // text-2xl  (títulos h1 nos forms)
  '3xl':['1.875rem', { lineHeight: '2.25rem' }],      // text-3xl  (reservado)
} as const;

// ─── Pesos Tipográficos ───────────────────────────────────────────────────────
/**
 * Pesos encontrados nos componentes:
 * - `medium` → botões (font-medium no buttonVariants)
 * - `bold`   → h1 dos formulários (font-bold)
 */
export const fontWeight = {
  normal:   '400',
  medium:   '500',   // ← buttonVariants base
  semibold: '600',
  bold:     '700',   // ← h1 (Pomodoro Timer, Sign Up, etc.)
} as const;

// ─── Alturas de Linha ─────────────────────────────────────────────────────────
export const lineHeight = {
  none:    '1',
  tight:   '1.25',
  snug:    '1.375',
  normal:  '1.5',
  relaxed: '1.625',
  loose:   '2',
} as const;

// ─── Espaçamento entre Letras ────────────────────────────────────────────────
export const letterSpacing = {
  tighter: '-0.05em',
  tight:   '-0.025em',
  normal:  '0em',
  wide:    '0.025em',
  wider:   '0.05em',
  widest:  '0.1em',
} as const;

// ─── Exportação agrupada ──────────────────────────────────────────────────────
export const typographyTokens = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const;

export type TypographyTokens = typeof typographyTokens;
