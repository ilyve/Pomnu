import { NativeElement } from '../core/Component';
import { QClipboard } from './QClipboard';
import { QStyle } from './QStyle';
import { QObjectSignals, NodeObject } from '../QtCore/QObject';
/**
 
> QApplication is the root object for the entire application. It manages app level settings.

* **This class is a JS wrapper around Qt's [QApplication class](https://doc.qt.io/qt-5/qapplication.html)**

The QApplication class manages the GUI application's control flow and main settings. In NodeGui you will never create an instance of it manually. NodeGui's internal runtime `Qode` does it for you on app start. You can access the initialised QApplication though if needed.

### Example

```js
const { QApplication } = require("@nodegui/nodegui");

const qApp = QApplication.instance();
qApp.quit();
```
 */
export declare class QApplication extends NodeObject<QApplicationSignals> {
    native: NativeElement;
    constructor();
    constructor(native: NativeElement);
    static clipboard(): QClipboard;
    processEvents(): void;
    exec(): number;
    static instance(): QApplication;
    quit(): number;
    exit(exitCode: number): number;
    setQuitOnLastWindowClosed(quit: boolean): void;
    quitOnLastWindowClosed(): boolean;
    static style(): QStyle;
}
export declare type QApplicationSignals = QObjectSignals;
