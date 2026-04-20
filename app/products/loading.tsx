export default function ProductsLoading() {
  return (
    <div style={{ background: '#FBF8F3' }}>
      <div
        className="animate-pulse"
        style={{ minHeight: '32vh', background: 'linear-gradient(160deg, #2A1005 0%, #3A1C08 100%)' }}
      />
      <div className="section-padding">
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 animate-pulse">
                <div className="h-60 bg-neutral-100" />
                <div className="p-6 space-y-3">
                  <div className="h-3 w-16 rounded bg-neutral-100" />
                  <div className="h-5 w-3/4 rounded bg-neutral-100" />
                  <div className="h-3 w-full rounded bg-neutral-100" />
                  <div className="h-3 w-2/3 rounded bg-neutral-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
