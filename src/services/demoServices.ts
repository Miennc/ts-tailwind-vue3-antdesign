import {Axios} from "./Axios";
import type {DataAdd} from "@/interfaces/DataAdd.ts";

function addDemo(data: DataAdd): Promise<any> {
    return Axios.post("/file/add", data);
}

function getDemo(): Promise<any[]> {
    return Axios.get("posts");
}

export const demoServices = {
    addDemo,
    getDemo,
};
