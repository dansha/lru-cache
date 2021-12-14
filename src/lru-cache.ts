type toStore = {
    date:number,
    key:string,
    value:JSON
}

export class lruCache {
    private _max:number=5;
    private _store :Array<toStore>=[];

    constructor (max:number){
        this._max=max;
    }


    setValue (key:string,value:JSON):void{
        const valueToStore= {date:Date.now(),key,value};
        if (this._store.length===this._max){
            const oldestIndex =  this._store.findIndex( element => element.date ===    this.getOldestValue());
            this._store[oldestIndex] = valueToStore
        }
        else this._store.push(valueToStore );
    }

    getValue (key:string) {
        return this._store.find(element => element.key ===key);
    }

    getAll(){
        return this._store;
    }

    private getOldestValue(){
        const oldest =  this._store.reduce( (prev,current)=> (prev.date>current.date?prev:current) );
        return oldest.date;
    }


}