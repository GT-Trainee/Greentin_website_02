"use strict";
(self["webpackChunk_19h47_wordpress_theme"] = self["webpackChunk_19h47_wordpress_theme"] || []).push([
    ["src_scripts_modules_HeroToggle_js"], {

        /***/
        "./src/scripts/modules/HeroToggle.js":
            /*!*******************************************!*\
              !*** ./src/scripts/modules/HeroToggle.js ***!
              \*******************************************/
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
                var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
                /* harmony import */
                var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
                /* harmony import */
                var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
                /* harmony import */
                var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
                /* harmony import */
                var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
                /* harmony import */
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
                /* harmony import */
                var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
                /* harmony import */
                var _19h47_modular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @19h47/modular */ "./node_modules/@19h47/modular/dist/main.esm.js");
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! gsap */ "./node_modules/gsap/index.js");









                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
                            result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = (0, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else {
                            result = Super.apply(this, arguments);
                        }
                        return (0, _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
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


                var HeroToggle = /*#__PURE__*/ function(_M) {
                    (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeroToggle, _M);
                    var _super = _createSuper(HeroToggle);

                    function HeroToggle(m) {
                        var _this;
                        (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HeroToggle);
                        _this = _super.call(this, m);
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "left", 8);
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "text", []);
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mouseout", function() {
                            _this.to(_this.$('button')[JSON.parse(_this.getData('active'))], 0.5);
                        });
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mouseover", function(_ref) {
                            var target = _ref.target;
                            _this.to(target, 0.5);
                        });
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "click", function(index) {
                            _this.el.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle('job-active', 1 === index);
                            _this.el.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle('app-active', 0 === index);
                            _this.setData('active', index);
                        });
                        (0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resize", function() {
                            _this.left = _this.el.getBoundingClientRect().left;
                        });
                        _this.events = {
                            mouseout: 'mouseout'
                        };
                        return _this;
                    }
                    (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HeroToggle, [{
                        key: "init",
                        value: function init() {
                            var _this2 = this;
                            window.addEventListener('resize', this.resize);
                            this.resize();
                            this.$('button').forEach(function($button, index) {
                                $button.addEventListener('mouseover', _this2.mouseover);
                                $button.addEventListener('click', function() {
                                    return _this2.click(index);
                                });
                                if (JSON.parse(_this2.getData('current', $button))) {
                                    _this2.to($button);
                                }
                            });
                            this.text = JSON.parse(this.getData('text'));
                        }
                    }, {
                        key: "to",
                        value: function to(el) {
                            var _this3 = this;
                            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                            var _el$getBoundingClient = el.getBoundingClientRect(),
                                left = _el$getBoundingClient.left;
                            var current = (0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$('button')).indexOf(el);
                            gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(this.$('background')[0], {
                                duration: duration,
                                left: 1 === current ? left - this.left - 10 : left - this.left
                            });
                            this.$('button').forEach(function($button, index) {
                                var classes = $button.className.split(' ');
                                var i = classes.findIndex(function(className) {
                                    return className.startsWith('text-');
                                }, 'text-');

                                // Not proud of this, sorry, but all this colors make everything pretty complicated :(
                                if (0 === current && 0 === index) {
                                    var _this3$text = (0, _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.text, 1);
                                    classes[i] = _this3$text[0];
                                }
                                if (0 === current && 1 === index) {
                                    classes[i] = _this3.text[1]; // eslint-disable-line
                                }

                                if (1 === current && 0 === index) {
                                    classes[i] = _this3.text[1]; // eslint-disable-line
                                }

                                if (1 === current && 1 === index) {
                                    var _this3$text2 = (0, _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.text, 1);
                                    classes[i] = _this3$text2[0];
                                }
                                $button.className = classes.join(' ');
                            });
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            window.removeEventListener('resize', this.resize);
                        }
                    }]);
                    return HeroToggle;
                }(_19h47_modular__WEBPACK_IMPORTED_MODULE_10__.module);
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (HeroToggle);

                /***/
            })

    }
]);
//# sourceMappingURL=src_scripts_modules_HeroToggle_js.js.map