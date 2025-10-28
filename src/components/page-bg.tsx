export default function PageBg({ src, dim = 0.5 }: { src: string; dim?: number }) {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="h-full w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${dim})` }}
      />
    </div>
  );
}
