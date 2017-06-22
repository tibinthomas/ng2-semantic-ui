// tslint:disable-next-line:ext-variable-name
export interface PopupAfterOpen {
    popupAfterOpen():void;
}

// tslint:disable-next-line:ext-variable-name
export interface PopupAfterClose {
    popupAfterClose():void;
}

export interface IPopupLifecycle {
    popupAfterOpen?():void;
    popupAfterClose?():void;
}