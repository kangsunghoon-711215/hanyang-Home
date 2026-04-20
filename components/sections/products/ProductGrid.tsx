import Image from 'next/image';
import Link from 'next/link';
import products from '@/content/products.json';

export default function ProductGrid() {
  return (
    <section className="section-padding" style={{ background: '#FBF8F3' }}>
      <div className="container-brand">
        <p className="font-body text-sm text-neutral-400 mb-8">종 <span className="font-semibold text-primary">{products.length}</span>개 제품</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg">
              <div className="relative overflow-hidden" style={{ height: '240px', background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)' }}>
                <Image src={product.images[0]} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                {product.badge && <div className="absolute top-4 left-4 z-10"><span className="font-body text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#8B4513', color: '#FBF8F3' }}>{product.badge}</span></div>}
              </div>
              <div className="p-6">
                <span className="font-body text-xs text-primary-500 font-medium tracking-wider uppercase mb-1.5 block">{product.category}</span>
                <h3 className="font-heading text-xl font-semibold text-neutral-900 word-keep mb-2 group-hover:text-primary transition-colors duration-150">{product.name}</h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed word-keep line-clamp-2 mb-5">{product.description}</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#F4EFE7' }}>
                  <span className="font-body text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-150">자세히 보기<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {products.length === 0 && <div className="text-center py-24"><p className="font-body text-neutral-400">등록된 제품이 없습니다.</p></div>}
      </div>
    </section>
  );
}
