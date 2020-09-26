/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlayerProps } from "@vime/core";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface TapSidesToSeek {
        "currentTime": PlayerProps['currentTime'];
        "duration": PlayerProps['duration'];
    }
    interface VmIcons {
        /**
          * The URL to an SVG sprite to load.
         */
        "href": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLTapSidesToSeekElement extends Components.TapSidesToSeek, HTMLStencilElement {
    }
    var HTMLTapSidesToSeekElement: {
        prototype: HTMLTapSidesToSeekElement;
        new (): HTMLTapSidesToSeekElement;
    };
    interface HTMLVmIconsElement extends Components.VmIcons, HTMLStencilElement {
    }
    var HTMLVmIconsElement: {
        prototype: HTMLVmIconsElement;
        new (): HTMLVmIconsElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "tap-sides-to-seek": HTMLTapSidesToSeekElement;
        "vm-icons": HTMLVmIconsElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface TapSidesToSeek {
        "currentTime"?: PlayerProps['currentTime'];
        "duration"?: PlayerProps['duration'];
    }
    interface VmIcons {
        /**
          * The URL to an SVG sprite to load.
         */
        "href"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "tap-sides-to-seek": TapSidesToSeek;
        "vm-icons": VmIcons;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "tap-sides-to-seek": LocalJSX.TapSidesToSeek & JSXBase.HTMLAttributes<HTMLTapSidesToSeekElement>;
            "vm-icons": LocalJSX.VmIcons & JSXBase.HTMLAttributes<HTMLVmIconsElement>;
        }
    }
}