import { NodeWidget } from './QWidget';
import { NativeElement, NativeRawPointer } from '../core/Component';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
import { QMenu } from './QMenu';
/**
 
> Create and control buttons.

* **This class is a JS wrapper around Qt's [QPushButton class](https://doc.qt.io/qt-5/qpushbutton.html)**

A `QPushButton` provides ability to add and manipulate native button widgets.

### Example

```javascript
const { QPushButton } = require("@nodegui/nodegui");

const button = new QPushButton();
button.setText("Hello");
```
 */
export declare class QPushButton extends QAbstractButton<QPushButtonSignals> {
    native: NativeElement;
    private _menu?;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(native: NativeElement);
    constructor(rawPointer: NativeRawPointer<any>, disableNativeDeletion?: boolean);
    setAutoDefault(auto: boolean): void;
    autoDefault(): boolean;
    setDefault(isDefault: boolean): void;
    isDefault(): boolean;
    setFlat(isFlat: boolean): void;
    isFlat(): boolean;
    setMenu(menu: QMenu): void;
    menu(): QMenu | null;
    showMenu(): void;
}
export declare type QPushButtonSignals = QAbstractButtonSignals;
