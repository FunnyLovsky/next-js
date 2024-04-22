import { ParsedUrlQuery } from 'querystring'
import { pathCategory } from '../const/pathCategory'
import { routePaths } from '../const/routePaths'

export const mapPathName = (pathname: string, search:  ParsedUrlQuery) => {
    const crumbs = pathname
        .split('/')
        .filter((path) => routePaths[`/${path}`])
        .map((path) => ({
            to: `/${path}`,
            title: routePaths[`/${path}`],
        }))


    const paths: {to: string, title: string}[] = []

    const {gender, category, name} = search

    if (gender && !Array.isArray(gender) ) {
            paths.push({ to: `${pathname}?gender=${gender}`, title: pathCategory[gender] })
    }

    if (category && !Array.isArray(category)) {
        paths.push({
            to: `${pathname}?gender=${gender}&category=${category}`,
            title: pathCategory[category],
        })
    }

    if (name && !Array.isArray(name)) {
        paths.push({
            to: `${pathname}?name=${name}`,
            title: name[0].toUpperCase() + name.substring(1),
        })
    }

    crumbs.push(...paths)
    
    return crumbs
}
