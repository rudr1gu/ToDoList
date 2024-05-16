import { FormEvent, RefObject } from "react";

export type AddButtonAndFilterHook = {
    modal: boolean;
    titleRef: RefObject<HTMLInputElement>;
    HandleOpenModal: () => void;
    HandleOnSubmit: (e: FormEvent) => void;
}