export interface Store {
    "description"?: string,
    "location"?: string,
    "memberId"?: number,
    "name": string,
    "storeId": number,
    "x"?: number,
    "y"?: number
}

export interface StoreTableHeader {
    name: string,
    column: string,
    component?: any
}