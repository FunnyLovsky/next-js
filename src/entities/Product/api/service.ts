import { AxiosResponse } from 'axios'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { IProductDetail } from '../types/IProduct'
import { ProductsResponse } from '../model/types/ProductsResponse'
import { API_URL } from '@/shared/const/URL'

export class Services {
    static async getDetailProduct(url: string): Promise<AxiosResponse<IProductDetail>> {
        try {
            return await $api.get<IProductDetail>(`/products/${url}`)
        } catch (error) {
            errorHandler(error)
        }
    }

    static async getProducts(query: string): Promise<AxiosResponse<ProductsResponse>> {
        try {
            return await $api.get<ProductsResponse>(`/products?${query}`)
        } catch (error) {
            return errorHandler(error)
        }
    }

    static async getProductsCache(query: string) {
        const url = `${API_URL}/products?${query}`
        const cache = await caches.open('getProducts')
        console.log('open cache');
        

        const cachedResponse = await cache.match(url)

        if(cachedResponse) {
            const products = await cachedResponse.json();
            console.log('get cache');
            
            return {data: {products: products.products}}
        }

        const response = await fetch(url)
        await cache.put(url, response)
        console.log(cache.keys());
        
        console.log('step 1');

        if(response.ok) {
            const products = await response.json()
            console.log('step 2');
            console.log(products);
            
            return {data: {
                products: products.products
            }}
        } else {
            console.log('error');
            
            throw new Error('Хер знает что не так')
        }
        try {

            

        } catch (error) {
            // return errorHandler(error)
        }
    }
}
