import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        numOfInputs?: number | undefined;
        value?: string | undefined;
        separator?: string | undefined;
        disableDefaultStyle?: boolean | undefined;
        inputClass?: string | undefined;
        wrapperClass?: string | undefined;
        separatorClass?: string | undefined;
        inputStyle?: string | undefined;
        wrapperStyle?: string | undefined;
        separatorStyle?: string | undefined;
        numberOnly?: boolean | undefined;
        placeholder?: string | undefined;
        onlyShowMiddleSeparator?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SvelteOtpProps = typeof __propDef.props;
export type SvelteOtpEvents = typeof __propDef.events;
export type SvelteOtpSlots = typeof __propDef.slots;
export default class SvelteOtp extends SvelteComponentTyped<SvelteOtpProps, SvelteOtpEvents, SvelteOtpSlots> {
}
export {};
