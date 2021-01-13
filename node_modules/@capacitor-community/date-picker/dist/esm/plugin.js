import { Plugins } from '@capacitor/core';
const _DatePickerPlugin = Plugins.DatePickerPlugin;
export class DatePicker {
    present(options) {
        return _DatePickerPlugin.present(options);
    }
    darkMode() {
        return _DatePickerPlugin.darkMode();
    }
    lightMode() {
        return _DatePickerPlugin.lightMode();
    }
}
//# sourceMappingURL=plugin.js.map