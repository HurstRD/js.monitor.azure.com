/*
 * 1DS JS SDK Shared Analytics, 3.1.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
import { __extendsFn as __extends } from "@microsoft/applicationinsights-shims";
/**
* OverridePropertiesPlugin.ts
* @author Nev Wylie (newylie)
* @copyright Microsoft 2019
*/
import { BaseTelemetryPlugin, setProcessTelemetryTimings, } from "@microsoft/1ds-core-js";
import { OverrideContext } from "./Override/OverrideContext";
var OverridePropertiesPlugin = /** @class */ (function (_super) {
    __extends(OverridePropertiesPlugin, _super);
    function OverridePropertiesPlugin() {
        var _this = _super.call(this) || this;
        _this.identifier = "OverridePropertiesPlugin";
        _this.priority = 4;
        _this.version = '3.1.11';
        var _self = _this;
        var _context = null;
        _self._baseInit = function (coreConfig, core, extensions) {
            _context = new OverrideContext(coreConfig, _this._getTelCtx().getExtCfg(_this.identifier), core);
        };
        _self.setProperty = function (name, value) {
            if (_context) {
                _context.data.setProperty(name, value);
            }
        };
        _self.getOverrideContext = function () {
            return _context;
        };
        return _this;
    }
    OverridePropertiesPlugin.prototype.initialize = function (coreConfig, core, extensions) {
        _super.prototype.initialize.call(this, coreConfig, core, extensions);
        this._baseInit(coreConfig, core, extensions);
    };
    /**
     * Process the event and add part A fields to it.
     * @param event - The event that needs to be stored.
     * @param itemCtx - This is the context for the current request, ITelemetryPlugin instances
     * can optionally use this to access the current core instance or define / pass additional information
     * to later plugins (vs appending items to the telemetry item)
     */
    OverridePropertiesPlugin.prototype.processTelemetry = function (item, itemCtx) {
        setProcessTelemetryTimings(item, this.identifier);
        itemCtx = this._getTelCtx(itemCtx);
        var context = this.getOverrideContext();
        if (context) {
            context.applyOverrides(item, itemCtx);
        }
        this.processNext(item, itemCtx);
    };
    return OverridePropertiesPlugin;
}(BaseTelemetryPlugin));
export default OverridePropertiesPlugin;
//# sourceMappingURL=OverridePropertiesPlugin.js.map