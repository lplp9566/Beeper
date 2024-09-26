export interface Beeper{
    id?:string,
    name:string,
    status:status,
    created_at:Date,
    detonated_at?:Date,
    latitude?:number,
    longitude?: Number,
}

export enum status{
    manufactured,
    assembled,
    shipped,
    deployed,
    detonated

}