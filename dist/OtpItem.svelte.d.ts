import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        input?: HTMLInputElement | null | undefined;
        index: number;
        value: string;
        codes: string[];
        inputs: (null | HTMLInputElement)[];
        nostyle: boolean;
        className: string;
        num: boolean;
        style: string;
        placeholder: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OtpItemProps = typeof __propDef.props;
export type OtpItemEvents = typeof __propDef.events;
export type OtpItemSlots = typeof __propDef.slots;
export default class OtpItem extends SvelteComponentTyped<OtpItemProps, OtpItemEvents, OtpItemSlots> {
}
export {};
