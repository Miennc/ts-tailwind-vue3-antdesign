import {defineStore} from 'pinia'
interface AdminStoreState {
    openModalAddAdmin: boolean
}
export const adminStore = defineStore('admin', {
    state: (): AdminStoreState => {
        return {
            openModalAddAdmin: false,
        };
    },
    actions: {
        setOpenModalAddAdmin(value: boolean) {
            this.openModalAddAdmin = value;
        }
    }
})


