"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDateEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDateTimeEdit_1 = require("./QDateTimeEdit");
/**
 
> Creates a widget to edit dates with spin box layout. WIP!

* **This class is a JS wrapper around Qt's [QDateEdit class](https://doc.qt.io/qt-5/qdateedit.html)**

A `QDateEdit` provides a widget for editing dates based on the QDateTimeEdit widget.

### Example

```javascript
const { QDateEdit } = require("@nodegui/nodegui");

const dateEdit = new QDateEdit();
// must be implemented
```
 */
class QDateEdit extends QDateTimeEdit_1.NodeDateTimeEdit {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QDateEdit(parent.native);
        }
        else {
            native = new addon_1.default.QDateEdit();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
}
exports.QDateEdit = QDateEdit;
