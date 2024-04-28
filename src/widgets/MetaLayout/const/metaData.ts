import { SITE_URL } from '@/shared/const/URL'

export interface IMetaData {
    description: string
    keywords: string
    image: string
}

export const metaData: IMetaData = {
    description:
        'GLAMIFY - интернет-магазин одежды для стильных и модных. Широкий выбор женской, мужской и детской одежды высокого качества.',
    keywords:
        'GLAMIFY, одежда, интернет-магазин, мода, стиль, мужская одежда, женская одежда, брендовая одежда',
    image: `${SITE_URL}/intro.png`,
}
