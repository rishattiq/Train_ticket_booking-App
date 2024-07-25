export interface train{
    
    "id": number,
    "name": string,
    "code": string,
    "country": string,
    "founded": string,
    "fleet_size": string,
    "headquarters": string,
    "website": string,
    "destinations": [
      {
        "name": string,
        "code": string
      },
      {
        "name": string,
        "code": string
      },
      {
        "name": string,
        "code": string
      }
    ]
  }

  export class Search{
    fromstationId:number=0;
    tostationId:number=0;
    date:string=''
  }


export type Root = iTrain[]

export interface iTrain {
  id: number
  name: string
  code: string
  country: string
  founded: string
  fleet_size: string
  headquarters: string
  website: string
  destinations: Destination[]
}

export interface Destination {
  name: string
  code: string
}

    