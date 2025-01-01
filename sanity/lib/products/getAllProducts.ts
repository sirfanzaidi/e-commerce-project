import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
  const ALL_PPODUCTS_QUERY = defineQuery(`
    
    *[_type == "product"]
| order(name asc)         
`)
try {
    const products = await sanityFetch ({
        query: ALL_PPODUCTS_QUERY,
    });
    return products.data || [];
} catch (error) {
    console.error ("Error fetching all products:", error);
    return [];
}


};
