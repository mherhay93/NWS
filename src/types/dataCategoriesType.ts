export interface ITypeCategories {
    id:string,
    name:string
}

export interface ITypeCats {
    height:number
    id:string
    url:string
    width:number
}

export interface IDataCategories {
    dataCategories?: Array<ITypeCategories>
    cats?: Array<ITypeCats>
}

interface actionDataCategories {
    type:string,
    payload:ITypeCategories
}

interface actionDataCats {
    type:string,
    payload:ITypeCats
}

export type actionsType = actionDataCategories & actionDataCats

export enum constActionType {
    DATA_CATEGORIES = 'DATA_CATEGORIES',
    DATA_CATS = 'DATA_CATS'
}
