import {defineStore} from 'pinia'

interface AdminStoreState {
    openModalAddAdmin: boolean,
    openModalDelAdmin: boolean,
    idAdmin: number,
}

export const adminStore = defineStore('admin', {
    state: (): AdminStoreState => {
        return {
            openModalAddAdmin: false,
            openModalDelAdmin: false,
            idAdmin: 0
        };
    },
    actions: {
        setOpenModalAddAdmin(value: boolean) {
            this.openModalAddAdmin = value;
        },
        setIdAdmin(value: number) {
            this.idAdmin = value;
        },
        setOpenModalDelAdmin(value: boolean) {
            this.openModalDelAdmin = value;
        }
    }
})


