var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class DatePickerPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'DatePickerPlugin',
            platforms: ['web']
        });
    }
    present(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn('Not Yet Implemented', options);
            return { value: 'Not Yet Implemented' };
        });
    }
    darkMode() {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn('Not Yet Implemented');
        });
    }
    lightMode() {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn('Not Yet Implemented');
        });
    }
}
const DatePickerPlugin = new DatePickerPluginWeb();
export { DatePickerPlugin };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DatePickerPlugin);
//# sourceMappingURL=web.js.map