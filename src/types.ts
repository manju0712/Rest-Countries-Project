/*type Currency = {
	name: string;
};*/


export type Country ={

    name:{
        common : string
    }

    languages:{
        [key :string] :string
    }
    /*currencies:{
        [key :string] :string
    }*/
    flags:{

        png:string
    }

    region:string
    population:number
    capital :string[]
    borders : string[]
    currencies: object
    /*currencies?: Currency[];*/

}