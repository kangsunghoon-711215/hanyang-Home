export default function Loading() {
  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{ minHeight: '60vh', background: '#FBF8F3' }}
    >
      <div
        className="w-10 h-10 rounded-full border-4 animate-spin"
        style={{ borderColor: '#E8DFD0', borderTopColor: '#8B4513' }}
      />
    </div>
  );
}
