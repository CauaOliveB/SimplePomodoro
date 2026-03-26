/**
 * COLOR TOKENS
 *
 * Fonte da verdade para todas as cores do projeto.
 * Os valores HSL mapeiam diretamente as variáveis CSS definidas no globals.css.
 *
 * Estrutura:
 *  - brand      → Cor de identidade (primary / CTA)
 *  - surface    → Planos de fundo e superfícies (background, card, popover)
 *  - secondary  → Ação secundária
 *  - muted      → Elementos de baixo contraste / placeholders
 *  - accent     → Hover e destaques sutis
 *  - feedback   → Cores de estado (destructive / erro)
 *  - border     → Linhas divisórias e inputs
 *  - glass      → Glassmorphism (valores com canal alpha)
 *  - gradient   → Stops do fundo animado (animated-bg-focus)
 */

// ─── Paleta primitiva (raw HSL) ──────────────────────────────────────────────
export const primitiveColors = {
  /** Laranja queimado — identidade visual principal */
  orange: {
    50:  'hsl(15, 90%, 95%)',
    100: 'hsl(15, 90%, 85%)',
    400: 'hsl(15, 90%, 65%)',
    primary: 'var(--color-primary)',   // ← primary
    600: 'hsl(15, 90%, 45%)',
    700: 'hsl(15, 70%, 35%)',
    900: 'hsl(15, 70%, 14%)',   // ← gradiente stop 1
  },
  /** Azul-ardósia escuro — base da UI */
  slate: {
    50:  'hsl(210, 40%, 95%)',  // ← foreground
    100: 'hsl(210, 40%, 90%)',  // ← secondary-foreground
    400: 'hsl(215, 15%, 55%)',  // ← muted-foreground
    700: 'hsl(220, 15%, 40%)',  // ← referência para glass borders / scrollbar
    800: 'hsl(220, 15%, 22%)',  // ← accent / border / input
    810: 'hsl(220, 15%, 20%)',  // ← secondary
    820: 'hsl(220, 15%, 18%)',  // ← muted
    900: 'hsl(220, 20%, 14%)',  // ← card
    910: 'hsl(220, 20%, 12%)',  // ← popover
    920: 'hsl(220, 20%, 10%)',  // ← background
    930: 'hsl(220, 40%,  8%)',  // ← gradiente stop 4
  },
  /** Marrom-carvão — variações do gradiente */
  coal: {
    800: 'hsl(25, 50%, 12%)',   // ← gradiente stop 3
    900: 'hsl(220, 30%, 10%)',  // ← gradiente stop 2
  },
  /** Vermelho — estados de erro */
  red: {
    500: 'hsl(0, 72%, 51%)',
  },
  white: 'hsl(0, 0%, 100%)',
} as const;

// ─── Tokens semânticos ────────────────────────────────────────────────────────

/** Cor de identidade / CTA (laranja) */
export const brand = {
  primary: 'var(--color-primary)',
  primaryForeground: 'var(--color-foreground)',
  ring:'var(--color-ring)',
} as const;

/** Planos de fundo e superfícies */
export const surface = {
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  card: 'var(--color-card)',
  cardForeground: 'var(--color-card-foreground)',
  popover: 'var(--color-popover)',
  popoverForeground: 'var(--color-popover-foreground)',
} as const;

/** Ação secundária */
export const secondary = {
  base: 'var(--color-secondary)',
  foreground: 'var(--color-secondary-foreground)',
} as const;

/** Elementos de baixo contraste / placeholders */
export const muted = {
  base: 'var(--color-muted)',
  foreground: 'var(--color-muted-foreground)',
} as const;

/** Hover e destaques sutis */
export const accent = {
  base: 'var(--color-accent)',
  foreground: 'var(--color-accent-foreground)',
} as const;

/** Estados de feedback */
export const feedback = {
  destructive: 'var(--color-destructive)',
  destructiveForeground: 'var(--color-destructive-foreground)',
} as const;

/** Bordas e campos de formulário */
export const border = {
  base: 'var(--color-border)',
  input: 'var(--color-border)',
} as const;

/**
 * Glass Tokens — valores incluem canal alpha (formato HSL para hsla())
 * Uso: `background: hsla(var(--glass-bg))`
 */
export const glass = {
  /** Fundo principal do card glassmorphism */
  bg: 'hsla(var(--glass-bg))',
  /** Borda do card glassmorphism */
  border: 'hsla(var(--glass-border))',
  /** Fundo sutil (inputs dentro de cards glass) */
  subtleBg: 'hsla(var(--glass-subtle-bg))',
  /** Borda sutil de inputs */
  subtleBorder: 'hsla(var(--glass-subtle-border))',
  /** Thumb da barra de rolagem */
  scrollbarThumb: 'hsla(var(--glass-scrollbar-thumb))',
} as const;

/**
 * Gradient stops — fundo animado das páginas de autenticação e timer
 * Aplicado na classe `.animated-bg-focus` com `linear-gradient(-45deg, ...)`
 */
export const gradient = {
  stop1: 'var(--color-gradient-stop1)',  // hsl(15,  70%, 14%)
  stop2: 'var(--color-gradient-stop2)',  // hsl(220, 30%, 10%)
  stop3: 'var(--color-gradient-stop3)',  // hsl(25,  50%, 12%)
  stop4: 'var(--color-gradient-stop4)',  // hsl(220, 40%,  8%)
} as const;

// ─── Exportação agrupada ──────────────────────────────────────────────────────
export const colorTokens = {
  primitive:  primitiveColors,
  brand,
  surface,
  secondary,
  muted,
  accent,
  feedback,
  border,
  glass,
  gradient,
} as const;

export type ColorTokens = typeof colorTokens;
