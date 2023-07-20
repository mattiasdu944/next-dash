import { ProductsData, ProductsList, ProductsResponse } from "@/src/products";
import { Metadata } from "next";



export default async function ServerSidePage() {
    const products = await getAllProducts();
    return (
        <>
            <h1 className="mb-5">Productos - Server Side Rendering</h1>
            <ProductsList products={ products } />
        </>
    );
}


const getAllProducts =  async (): Promise<ProductsData[]> => {

    //TODO: GET SERVER SIDE PROPS
    const { data }: ProductsResponse = await fetch('https://store.innovacode.online/api/products', 
        { cache:'no-store' }
    )
    .then(res => res.json() )
    console.log(data);
    return data;
}

export const metadata: Metadata = {
    title: 'Server Side Rendering',
    description: 'Generated by create next app',
}