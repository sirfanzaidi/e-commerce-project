import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductBySlug = async (slug: string) => {
  const PPODUCT_BY_ID_QUERY = defineQuery(`
    
    *[_type == "product" && slug.current == $slug] | order(name asc) [0]
`)
try {
    const products = await sanityFetch ({
        query: PPODUCT_BY_ID_QUERY,
        params: {
            slug,
        },
    });
    return products.data || null;
} catch (error) {
    console.error ("Error fetching product by ID:", error);
    return null;
}


};
