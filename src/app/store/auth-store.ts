import { action, computed, observable } from "mobx-angular";


class Store {

    @observable
    public user: any;


    @action
    setUser(response: any) {
        this.user = response;
    }


    @computed
    get getUser(): any {
        return this.user;
    }

}

export const AuthStore = new Store();