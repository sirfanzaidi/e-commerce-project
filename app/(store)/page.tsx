import ProductsView from "@/components/ProductsView";
import NewYearBanner from "@/components/ui/NewYearBanner";
import { getALLCategories } from "@/sanity/lib/products/getALLCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home() {
  const products = await getAllProducts();
  const categories = await getALLCategories();
  
  return (
    <div>
      <NewYearBanner />
<div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
  <ProductsView products={products} categories={categories}/>
</div>
     
    </div>
  );
}
