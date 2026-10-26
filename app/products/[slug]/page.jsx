import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { findProduct, products } from '@/lib/products';

export const dynamicParams = false;
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  return product ? { title: `${product.name} — Features & Pricing`, description: product.summary } : {};
}
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
