"use strict";
(self["webpackChunk_19h47_wordpress_theme"] = self["webpackChunk_19h47_wordpress_theme"] || []).push([
    ["src_scripts_modules_Nav_js"], {

        /***/
        "./src/scripts/modules/Nav.js":
            /*!************************************!*\
              !*** ./src/scripts/modules/Nav.js ***!
              \************************************/
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
                var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
                /* harmony import */
                var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
                /* harmony import */
                var _19h47_modular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @19h47/modular */ "./node_modules/@19h47/modular/dist/main.esm.js");
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! gsap */ "./node_modules/gsap/index.js");
                /* harmony import */
                var utils_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! utils/environment */ "./src/scripts/utils/environment.js");
                /* harmony import */
                var utils_draw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! utils/draw */ "./src/scripts/utils/draw.js");
                /* harmony import */
                var utils_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! utils/scroll */ "./src/scripts/utils/scroll.js");









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





                var delay = function delay(ms) {
                    return new Promise(function(resolve) {
                        return setTimeout(resolve, ms);
                    });
                }; // eslint-disable-line no-promise-executor-return
                var Nav = /*#__PURE__*/ function(_M) {
                    (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _M);
                    var _super = _createSuper(Nav);

                    function Nav(m) {
                        var _this;
                        (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Nav);
                        _this = _super.call(this, m);
                        _this.resize = _this.resize.bind((0, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
                        _this.opened = false;
                        _this.animated = false;
                        _this.tween = {
                            value: 0
                        };
                        _this.color = _this.getData('color') || '#391952';
                        _this.breakpoint = utils_environment__WEBPACK_IMPORTED_MODULE_9__.breakpoints.lg.matches ? 'desktop' : 'mobile';

                        // Default bounds
                        _this.defaultWidth = 0;
                        _this.defaultHeight = 0;
                        _this.defaultPadding = 0;

                        // Device ratio
                        _this.ratio = 2;
                        var _this$$ = _this.$('canvas');
                        var _this$$2 = (0, _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$$, 1);
                        _this.canvas = _this$$2[0];
                        _this.context = _this.canvas.getContext('2d');
                        _this.events = {
                            click: {
                                backdrop: 'toggle',
                                button: 'toggle'
                            }
                            // transitionend: 'resize'
                        };

                        _this.$backdrop = document.querySelector('.js-backdrop');
                        _this.$backdrop.addEventListener('click', function() {
                            return _this.close();
                        });
                        document.addEventListener('keydown', function(_ref) {
                            var code = _ref.code;
                            if ('Escape' === code && _this.opened) {
                                _this.close();
                            }
                        });
                        return _this;
                    }
                    (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav, [{
                        key: "init",
                        value: function init() {
                            window.addEventListener('resize', this.resize);
                            this.resize();
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var _resize = (0, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
                                var _this$el$getBoundingC, width, height, _this$$$0$getBounding, defaultWidth, defaultHeight;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            if (this.opened) {
                                                this.close();
                                            }
                                            _context.next = 3;
                                            return delay(800);
                                        case 3:
                                            this.breakpoint = utils_environment__WEBPACK_IMPORTED_MODULE_9__.breakpoints.lg.matches ? 'desktop' : 'mobile';
                                            _this$el$getBoundingC = this.el.getBoundingClientRect(), width = _this$el$getBoundingC.width, height = _this$el$getBoundingC.height;
                                            _this$$$0$getBounding = this.$('buttons')[0].getBoundingClientRect(), defaultWidth = _this$$$0$getBounding.width, defaultHeight = _this$$$0$getBounding.height;
                                            this.width = width;
                                            this.height = height;
                                            this.defaultHeight = defaultHeight - 2;
                                            this.defaultWidth = defaultWidth - 2;
                                            this.defaultPadding = parseFloat(window.getComputedStyle(this.$('buttons')[0]).marginTop, 10) + 1;

                                            // console.log({ width, height, defaultWidth, defaultHeight });

                                            this.canvas.width = this.width * this.ratio;
                                            this.canvas.height = this.height * this.ratio;
                                            this.canvas.style.setProperty('width', "".concat(this.width, "px"));
                                            this.canvas.style.setProperty('height', "".concat(this.height, "px"));
                                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].set(this.el.parentElement, {
                                                height: window.innerHeight
                                            });

                                            // console.log({
                                            // 	defaultHeight: this.defaultHeight,
                                            // 	defaultWidth: this.defaultWidth,
                                            // 	defaultPadding: this.defaultPadding,
                                            // });

                                            this.draw(this.tween.value);
                                        case 17:
                                        case "end":
                                            return _context.stop();
                                    }
                                }, _callee, this);
                            }));

                            function resize() {
                                return _resize.apply(this, arguments);
                            }
                            return resize;
                        }()
                    }, {
                        key: "draw",
                        value: function draw() {
                            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                            var invertedValue = 100 - value;
                            var currentWidth = (this.defaultWidth + (this.width - this.defaultWidth) / 100 * value) * this.ratio;
                            var currentHeight = (this.defaultHeight + (this.height - this.defaultHeight) / 100 * value) * this.ratio;

                            // console.log(this.defaultPadding, this.ratio, invertedValue, {
                            // 	currentWidth,
                            // });

                            // const currentX = (this.width * this.ratio) - currentWidth - (((this.defaultPadding[ this.breakpoint ] * this.ratio) / 100) * invertedValue);
                            var currentX = this.defaultPadding * this.ratio / 100 * invertedValue;
                            var currentY = this.defaultPadding * this.ratio / 100 * invertedValue;
                            this.context.clearRect(0, 0, this.width * this.ratio, this.height * this.ratio);
                            this.context.fillStyle = this.color;
                            (0, utils_draw__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context, currentX, currentY, currentWidth, currentHeight, this.defaultHeight / 2 * this.ratio, true, false);
                        }
                    }, {
                        key: "animate",
                        value: function animate() {
                            var _this2 = this;
                            var value = this.opened ? 100 : 0;
                            // const animationValue = [this.tween.value, finalValue];

                            // animate a dummy object that will update transformations of mask and img on each frame
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(this.tween, {
                                value: value,
                                duration: 0.85,
                                ease: 'power4.inOut',
                                onUpdate: function onUpdate() {
                                    _this2.draw(_this2.tween.value);
                                }
                            });
                        }
                    }, {
                        key: "toggle",
                        value: function toggle() {
                            if (this.opened) {
                                return this.close();
                            }
                            return this.open();
                        }
                    }, {
                        key: "open",
                        value: function open() {
                            if (true === this.opened) {
                                return;
                            }
                            (0, utils_scroll__WEBPACK_IMPORTED_MODULE_11__.disableScroll)();
                            this.opened = true;
                            this.el.classList.add('is-active');
                            utils_environment__WEBPACK_IMPORTED_MODULE_9__.body.classList.add('nav-is-open');
                            this.el.parentElement.classList.remove('pointer-events-none');
                            this.el.parentElement.classList.add('pointer-events-auto');

                            // TODO find a better way
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].set(this.$backdrop, {
                                zIndex: 20
                            });
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].set(this.$backdrop, {
                                backgroundColor: 'rgba(22, 12, 31, 0.35)'
                            });
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(this.$backdrop, {
                                autoAlpha: 1
                            });
                            this.animate();
                        }
                    }, {
                        key: "close",
                        value: function close() {
                            var _this3 = this;
                            if (false === this.opened) {
                                return;
                            }
                            (0, utils_scroll__WEBPACK_IMPORTED_MODULE_11__.enableScroll)();
                            this.opened = false;
                            this.el.classList.remove('is-active');
                            utils_environment__WEBPACK_IMPORTED_MODULE_9__.body.classList.remove('nav-is-open');
                            this.el.parentElement.classList.add('pointer-events-none');
                            this.el.parentElement.classList.remove('pointer-events-auto');
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(this.$backdrop, {
                                autoAlpha: 0
                            });
                            gsap__WEBPACK_IMPORTED_MODULE_12__["default"].delayedCall(0.25, function() {
                                return _this3.animate();
                            });
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            window.removeEventListener('resize', this.resize);
                        }
                    }]);
                    return Nav;
                }(_19h47_modular__WEBPACK_IMPORTED_MODULE_13__.module);
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

                /***/
            }),

        /***/
        "./src/scripts/utils/draw.js":
            /*!***********************************!*\
              !*** ./src/scripts/utils/draw.js ***!
              \***********************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /**
                 * Draws a rounded rectangle using the current state of the canvas.
                 * If you omit the last three params, it will draw a rectangle outline with a 5 pixel border radius
                 * @param {CanvasRenderingContext2D} ctx
                 * @param {Number} x The top left x coordinate
                 * @param {Number} y The top left y coordinate
                 * @param {Number} width The width of the rectangle
                 * @param {Number} height The height of the rectangle
                 * @param {Number} [radius = 5] The corner radius; It can also be an object to specify different radii for corners
                 * @param {Number} [radius.tl = 0] Top left
                 * @param {Number} [radius.tr = 0] Top right
                 * @param {Number} [radius.br = 0] Bottom right
                 * @param {Number} [radius.bl = 0] Bottom left
                 * @param {Boolean} [fill = false] Whether to fill the rectangle.
                 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
                 *
                 * @see https://gist.github.com/sam-g-steel/6bea3c2294088641d86e4b4a39f10768
                 */
                var roundRect = function roundRect(ctx, x, y, width, height) {
                    var radius = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
                    var fill = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
                    var stroke = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
                    if ('number' === typeof radius) {
                        // eslint-disable-next-line  no-param-reassign
                        radius = {
                            tl: radius,
                            tr: radius,
                            br: radius,
                            bl: radius
                        };
                    } else {
                        var defaultRadius = {
                            tl: 0,
                            tr: 0,
                            br: 0,
                            bl: 0
                        };

                        // eslint-disable-next-line no-restricted-syntax, guard-for-in
                        for (var side in defaultRadius) {
                            radius[side] = radius[side] || defaultRadius[side];
                        }
                    }

                    // console.log(radius);

                    ctx.beginPath();
                    ctx.moveTo(x + radius.tl, y);
                    ctx.lineTo(x + width - radius.tr, y);
                    ctx.bezierCurveTo(x + width - radius.tr * 0.5, y, x + width, y + radius.tr * 0.5, x + width, y + radius.tr); // top-right

                    ctx.lineTo(x + width, y + height - radius.br);
                    ctx.bezierCurveTo(x + width, y + height - radius.br * 0.5, x + width - radius.br * 0.5, y + height, x + width - radius.br, y + height); // bottom-right

                    ctx.lineTo(x + radius.bl, y + height);
                    ctx.bezierCurveTo(x + radius.bl * 0.5, y + height, x, y + height - radius.bl * 0.5, x, y + height - radius.bl); // bottom-left

                    ctx.lineTo(x, y + radius.tl);
                    ctx.bezierCurveTo(x, y + radius.tl * 0.5, x + radius.tl * 0.5, y, x + radius.tl, y); // top-left

                    ctx.closePath();
                    if (fill) ctx.fill();
                    if (stroke) ctx.stroke();
                };
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (roundRect);

                /***/
            })

    }
]);
//# sourceMappingURL=src_scripts_modules_Nav_js.js.map