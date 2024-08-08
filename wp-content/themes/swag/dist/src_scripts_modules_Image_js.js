"use strict";
(self["webpackChunk_19h47_wordpress_theme"] = self["webpackChunk_19h47_wordpress_theme"] || []).push([
    ["src_scripts_modules_Image_js"], {

        /***/
        "./src/scripts/modules/Image.js":
            /*!**************************************!*\
              !*** ./src/scripts/modules/Image.js ***!
              \**************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
                /* harmony import */
                var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
                /* harmony import */
                var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
                /* harmony import */
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
                /* harmony import */
                var _19h47_modular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @19h47/modular */ "./node_modules/@19h47/modular/dist/main.esm.js");






                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
                            result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else {
                            result = Super.apply(this, arguments);
                        }
                        return (0, _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
                    };
                }

                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }

                var Image = /*#__PURE__*/ function(_M) {
                    (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Image, _M);
                    var _super = _createSuper(Image);

                    function Image(m) {
                        var _this;
                        (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Image);
                        _this = _super.call(this, m);
                        _this.load = _this.load.bind((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));

                        // .complete checks if img is loaded from cache
                        if (_this.el.complete) {
                            _this.el.classList.add('is-active');
                        }

                        // else add event listener to check once img has loaded
                        _this.el.addEventListener('load', _this.load);
                        return _this;
                    }
                    (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Image, [{
                        key: "load",
                        value: function load() {
                            this.el.classList.add('is-active');
                            this.el.removeEventListener('load', this.load);
                        }
                    }]);
                    return Image;
                }(_19h47_modular__WEBPACK_IMPORTED_MODULE_6__.module);
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (Image);

                /***/
            })

    }
]);
//# sourceMappingURL=src_scripts_modules_Image_js.js.map