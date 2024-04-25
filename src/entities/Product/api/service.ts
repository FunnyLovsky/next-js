import { AxiosResponse } from 'axios'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { IProductDetail } from '../types/IProduct'
import { ProductsResponse } from '../model/types/ProductsResponse'
import { API_URL } from '@/shared/const/URL'
import { get } from 'http'

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
        try {
            const url = `${API_URL}/products?${query}`
            const cache = await caches.open('getProducts')

            const cachedResponse = await cache.match(url)
    
            if(cachedResponse) {
                return await cachedResponse.json();
            }
    
            const response = await this.getProducts(query)
            await cache.put(url, new Response(JSON.stringify(response)))
 
            return response
            
        } catch (error) {
            return errorHandler(error)
        }
    }
}
