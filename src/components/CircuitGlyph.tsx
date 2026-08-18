const PATHS = [
  "M8 34 C8 12, 34 8, 58 12 S96 20, 104 30 C110 40, 84 44, 60 40 S12 46, 8 34 Z",
  "M10 20 H70 C92 20, 104 30, 96 40 C88 48, 40 44, 26 40 C12 36, 10 28, 10 20 Z",
  "M12 40 C12 18, 30 10, 52 14 C74 18, 70 30, 88 30 C104 30, 108 42, 90 44 H20 Z",
  "M14 16 C40 10, 62 22, 84 16 C104 12, 110 30, 92 38 C70 48, 34 42, 18 38 C6 34, 6 20, 14 16 Z",
];

export function CircuitGlyph({ seed, className }: { seed: number; className?: string }) {
  const path = PATHS[seed % PATHS.length]!;
  return (
    <svg viewBox="0 0 116 56" fill="none" aria-hidden="true" className={className}>
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}