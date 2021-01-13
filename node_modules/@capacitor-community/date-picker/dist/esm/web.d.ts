import { WebPlugin } from '@capacitor/core';
import { DatePickerPluginInterface, DatePickerOptions } from './definitions';
export declare class DatePickerPluginWeb extends WebPlugin implements DatePickerPluginInterface {
    constructor();
    present(options: DatePickerOptions): Promise<{
        value: string;
    }>;
    darkMode(): Promise<void>;
    lightMode(): Promise<void>;
}
declare const DatePickerPlugin: DatePickerPluginWeb;
export { DatePickerPlugin };
