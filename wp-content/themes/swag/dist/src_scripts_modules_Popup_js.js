"use strict";
(self["webpackChunk_19h47_wordpress_theme"] = self["webpackChunk_19h47_wordpress_theme"] || []).push([
    ["src_scripts_modules_Popup_js"], {

        /***/
        "./src/scripts/modules/Popup.js":
            /*!**************************************!*\
              !*** ./src/scripts/modules/Popup.js ***!
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
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
                /* harmony import */
                var _19h47_modular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @19h47/modular */ "./node_modules/@19h47/modular/dist/main.esm.js");
                /* harmony import */
                var utils_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! utils/scroll */ "./src/scripts/utils/scroll.js");
                /* harmony import */
                var utils_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! utils/environment */ "./src/scripts/utils/environment.js");
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! gsap */ "./node_modules/gsap/index.js");





                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
                            result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else {
                            result = Super.apply(this, arguments);
                        }
                        return (0, _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
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




                var Popup = /*#__PURE__*/ function(_M) {
                    (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Popup, _M);
                    var _super = _createSuper(Popup);

                    function Popup(m) {
                        var _this;
                        (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Popup);
                        _this = _super.call(this, m);
                        _this.opened = false;
                        _this.$backdrop = document.querySelector('.js-backdrop');
                        _this.$backdrop.addEventListener('click', function() {
                            return _this.close();
                        });
                        document.addEventListener('keydown', function(_ref) {
                            var keyCode = _ref.keyCode;
                            if (27 === keyCode) {
                                _this.close();
                            }
                        });
                        return _this;
                    }
                    (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, [{
                        key: "toggle",
                        value: function toggle() {
                            if (this.opened) {
                                return this.close();
                            }
                            return this.open();
                        }
                    }, {
                        key: "close",
                        value: function close() {
                            if (false === this.opened) {
                                return;
                            }
                            (0, utils_scroll__WEBPACK_IMPORTED_MODULE_5__.enableScroll)();
                            this.opened = false;
                            this.el.classList.remove('is-active');
                            utils_environment__WEBPACK_IMPORTED_MODULE_6__.body.classList.remove('popup-is-open');
                            gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(this.$backdrop, {
                                autoAlpha: 0
                            });
                        }
                    }, {
                        key: "open",
                        value: function open() {
                            if (true === this.opened) {
                                return;
                            }
                            (0, utils_scroll__WEBPACK_IMPORTED_MODULE_5__.disableScroll)();
                            this.opened = true;
                            this.el.classList.add('is-active');
                            utils_environment__WEBPACK_IMPORTED_MODULE_6__.body.classList.add('popup-is-open');

                            // TODO find a better way
                            gsap__WEBPACK_IMPORTED_MODULE_7__["default"].set(this.$backdrop, {
                                zIndex: 30
                            });
                            gsap__WEBPACK_IMPORTED_MODULE_7__["default"].set(this.$backdrop, {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            });
                            gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(this.$backdrop, {
                                autoAlpha: 1
                            });
                        }
                    }]);
                    return Popup;
                }(_19h47_modular__WEBPACK_IMPORTED_MODULE_8__.module);
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

                /***/
            })

    }
]);
//# sourceMappingURL=src_scripts_modules_Popup_js.js.map