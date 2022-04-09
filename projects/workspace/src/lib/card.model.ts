import { ComponentModel } from "./shared/models/component.model";

export interface Card{
     id:string;
     title:string;
     component:ComponentModel;
     onClose?:any;
}