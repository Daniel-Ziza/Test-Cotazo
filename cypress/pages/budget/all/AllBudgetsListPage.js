import BaseQuotationsListPageClass from '../base/BaseBudgetsListPageClass';
import { InProgressBudgetsListPageClass } from '../inProgress/InProgressBudgetsListPage';
import { SentBudgetsListPageClass } from '../sent/SentBudgetsListPage';
import { ArchivedBudgetListPageClass } from '../archived/ArchivedBudgetListPage';

let aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this);
            });
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            });
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    })
    return base;
}

class AllBudgetsListPage extends aggregation(
    BaseQuotationsListPageClass,
    InProgressBudgetsListPageClass,
    SentBudgetsListPageClass,
    ArchivedBudgetListPageClass
) {}


export default new AllBudgetsListPage()

export { AllBudgetsListPage as AllBudgetsListPageClass }
