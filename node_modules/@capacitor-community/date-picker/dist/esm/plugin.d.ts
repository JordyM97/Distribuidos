import { DatePickerPluginInterface } from './definitions';
export declare class DatePicker implements DatePickerPluginInterface {
    present(options: any): Promise<{
        value: string;
    }>;
    darkMode(): Promise<void>;
    lightMode(): Promise<void>;
}
