
// All Products 
export async function getAllProducts (){
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

// Trending Products
export async function getTrendingProducts (){
    try {
        const res = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

// Get Product By ID
export async function getProductById(id){
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}