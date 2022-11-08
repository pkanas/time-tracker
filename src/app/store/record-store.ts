


import { action, computed, observable } from "mobx-angular";


class Store {

    @observable
    public _recordList: any[] = [];


    @action
    setProducts(response: any) {
        this._recordList = response;
    }


    @computed
    get allItems(): any[] {
        return this._recordList;
    }

}

export const RecordStore = new Store();