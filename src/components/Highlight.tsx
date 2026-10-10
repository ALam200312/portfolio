export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-2">
      {children}
    </strong>
  );
}
