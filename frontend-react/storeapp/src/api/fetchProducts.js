export default async function fetchProducts(params) {
    const res = await fetch(`localhost:8000/api/products?q=${params}`);
    const data = await res.json();

    return data.data
}