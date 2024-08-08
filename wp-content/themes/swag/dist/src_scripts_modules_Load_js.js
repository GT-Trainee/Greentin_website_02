"use strict";
(self["webpackChunk_19h47_wordpress_theme"] = self["webpackChunk_19h47_wordpress_theme"] || []).push([
    ["src_scripts_modules_Load_js"], {

        /***/
        "./src/scripts/modules/Load.js":
            /*!*************************************!*\
              !*** ./src/scripts/modules/Load.js ***!
              \*************************************/
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
                var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
                /* harmony import */
                var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
                /* harmony import */
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */
                var _19h47_modular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @19h47/modular */ "./node_modules/@19h47/modular/dist/main.esm.js");
                /* harmony import */
                var modularload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! modularload */ "./node_modules/modularload/dist/main.esm.js");
                /* harmony import */
                var utils_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! utils/environment */ "./src/scripts/utils/environment.js");
                /* harmony import */
                var utils_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! utils/transition */ "./src/scripts/utils/transition.js");
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! gsap */ "./node_modules/gsap/index.js");
                /* harmony import */
                var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
                /* harmony import */
                var utils_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! utils/scroll */ "./src/scripts/utils/scroll.js");







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







                gsap__WEBPACK_IMPORTED_MODULE_11__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.ScrollTrigger);
                var Load = /*#__PURE__*/ function(_M) {
                    (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Load, _M);
                    var _super = _createSuper(Load);

                    function Load() {
                        (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Load);
                        return _super.apply(this, arguments);
                    }
                    (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Load, [{
                        key: "init",
                        value: function init() {
                            var _this = this;
                            var event = new Event("loaded");

                            // eslint-disable-next-line new-cap
                            this.load = new modularload__WEBPACK_IMPORTED_MODULE_7__["default"]({
                                transitionsHistory: false,
                                enterDelay: 900
                            });
                            var $path = document.querySelector('.js-overlay').querySelector('path');

                            // eslint-disable-next-line no-unused-vars
                            this.load.on('loading', /*#__PURE__*/ function() {
                                var _ref = (0, _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(_, oldContainer) {
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
                                        while (1) switch (_context.prev = _context.next) {
                                            case 0:
                                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.html.classList.remove('has-dom-ready');
                                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.html.classList.add('is-loading');
                                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.body.classList.add('cursor-wait');
                                                if (utils_environment__WEBPACK_IMPORTED_MODULE_8__.body.classList.contains('nav-is-open')) {
                                                    utils_environment__WEBPACK_IMPORTED_MODULE_8__.body.classList.remove('nav-is-open');
                                                    (0, utils_scroll__WEBPACK_IMPORTED_MODULE_10__.enableScroll)();
                                                }
                                                _context.next = 6;
                                                return (0, utils_transition__WEBPACK_IMPORTED_MODULE_9__.transitionIn)($path, oldContainer.getAttribute('data-schema')).play();
                                            case 6:
                                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.html.classList.add('is-ontop');
                                                oldContainer.style.setProperty('opacity', '0');
                                                window.scrollTo({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: 'auto'
                                                });
                                            case 9:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }, _callee);
                                }));
                                return function(_x, _x2) {
                                    return _ref.apply(this, arguments);
                                };
                            }());
                            this.load.on('loaded', function(_, oldContainer, newContainer) {
                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.html.classList.remove('is-loading');
                                document.dispatchEvent(event);
                                newContainer.style.setProperty('opacity', '0');
                                _this.call('destroy', oldContainer, 'app');
                                _this.call('update', newContainer, 'app');
                                gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.ScrollTrigger.refresh();
                                (0, utils_transition__WEBPACK_IMPORTED_MODULE_9__.transitionOut)($path).play();
                                utils_environment__WEBPACK_IMPORTED_MODULE_8__.body.classList.remove('cursor-wait');
                                setTimeout(function() {
                                    utils_environment__WEBPACK_IMPORTED_MODULE_8__.html.classList.add('has-dom-ready');
                                }, 1200);
                            });
                            this.load.on('ready', function(_, newContainer) {
                                newContainer.style.setProperty('opacity', '1');
                            });
                        }
                    }, {
                        key: "goTo",
                        value: function goTo() {
                            var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
                            this.load.goTo(href);
                        }
                    }]);
                    return Load;
                }(_19h47_modular__WEBPACK_IMPORTED_MODULE_13__.module);
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (Load);

                /***/
            }),

        /***/
        "./src/scripts/utils/transition.js":
            /*!*****************************************!*\
              !*** ./src/scripts/utils/transition.js ***!
              \*****************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    transitionIn: () => ( /* binding */ transitionIn),
                    /* harmony export */
                    transitionOut: () => ( /* binding */ transitionOut)
                    /* harmony export */
                });
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! gsap */ "./node_modules/gsap/index.js");

                var transitionOut = function transitionOut($path) {
                    // console.log('transitionOut');

                    var timeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
                        paused: true
                        // onComplete: () => console.log('PageTransition.out.onComplete'),
                    });

                    timeline.set($path, {
                        attr: {
                            d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z'
                        }
                    });
                    timeline.to($path, {
                        duration: 0.25,
                        ease: 'power2.in',
                        attr: {
                            d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z'
                        }
                    });
                    timeline.to($path, {
                        duration: 0.95,
                        ease: 'power4',
                        attr: {
                            d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z'
                        }
                    });
                    return timeline;
                };
                var transitionIn = function transitionIn($path) {
                    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#ba80e6';
                    // console.log('transitionIn');

                    var timeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
                        paused: true
                        // onComplete: () => console.log('PageTransition.in.onComplete'),
                    });

                    timeline.set($path, {
                        attr: {
                            fill: color
                        }
                    });
                    timeline.set($path, {
                        attr: {
                            d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z'
                        }
                    });
                    timeline.to($path, {
                        duration: 0.25,
                        ease: 'power4.in',
                        attr: {
                            d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z'
                        }
                    }, 0);
                    timeline.to($path, {
                        duration: 0.65,
                        ease: 'power2.out',
                        attr: {
                            d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z'
                        }
                    });
                    return timeline;
                };


                /***/
            }),

        /***/
        "./node_modules/modularload/dist/main.esm.js":
            /*!***************************************************!*\
              !*** ./node_modules/modularload/dist/main.esm.js ***!
              \***************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                function _slicedToArray(arr, i) {
                    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
                }

                function _arrayWithHoles(arr) {
                    if (Array.isArray(arr)) return arr;
                }

                function _iterableToArrayLimit(arr, i) {
                    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

                    if (_i == null) return;
                    var _arr = [];
                    var _n = true;
                    var _d = false;

                    var _s, _e;

                    try {
                        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);

                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"] != null) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }

                    return _arr;
                }

                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === "Object" && o.constructor) n = o.constructor.name;
                    if (n === "Map" || n === "Set") return Array.from(o);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                }

                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;

                    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

                    return arr2;
                }

                function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }

                var _default = /*#__PURE__*/ function() {
                    function _default(options) {
                        _classCallCheck(this, _default);

                        this.defaults = {
                            name: 'load',
                            loadingClass: 'is-loading',
                            loadedClass: 'is-loaded',
                            readyClass: 'is-ready',
                            transitionsPrefix: 'is-',
                            transitionsHistory: true,
                            enterDelay: 0,
                            exitDelay: 0,
                            loadedDelay: 0,
                            isLoaded: false,
                            isEntered: false,
                            isUrl: false,
                            transitionContainer: null,
                            popstateIgnore: false
                        };
                        Object.assign(this, this.defaults, options);
                        this.options = options;
                        this.namespace = 'modular';
                        this.html = document.documentElement;
                        this.href = window.location.href;
                        this.container = 'data-' + this.name + '-container';
                        this.subContainer = false;
                        this.prevTransition = null;
                        this.loadAttributes = ['src', 'srcset', 'style', 'href'];
                        this.isInserted = false;
                        this.isLoading = false;
                        this.enterTimeout = false;
                        this.controller = new AbortController();
                        this.classContainer = this.html;
                        this.isChrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
                        this.init();
                    }

                    _createClass(_default, [{
                        key: "init",
                        value: function init() {
                            var _this = this;

                            window.addEventListener('popstate', function(e) {
                                return _this.checkState(e);
                            }, false);
                            this.html.addEventListener('click', function(e) {
                                return _this.checkClick(e);
                            }, false);
                            this.loadEls(document);
                        }
                    }, {
                        key: "checkClick",
                        value: function checkClick(e) {
                            if (!e.ctrlKey && !e.metaKey) {
                                var target = e.target;

                                while (target && target !== document) {
                                    if (target.matches('a') && target.getAttribute('download') == null) {
                                        var href = target.getAttribute('href');

                                        if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                                            e.preventDefault();
                                            this.reset();
                                            this.getClickOptions(target);
                                        }

                                        break;
                                    }

                                    target = target.parentNode;
                                }
                            }
                        }
                    }, {
                        key: "checkState",
                        value: function checkState() {
                            if (typeof this.popstateIgnore === 'string' && window.location.href.indexOf(this.popstateIgnore) > -1) {
                                return;
                            }

                            this.reset();
                            this.getStateOptions();
                        }
                    }, {
                        key: "reset",
                        value: function reset() {
                            if (this.isLoading) {
                                this.controller.abort();
                                this.isLoading = false;
                                this.controller = new AbortController();
                            }

                            window.clearTimeout(this.enterTimeout);

                            if (this.isInserted) {
                                this.removeContainer();
                            }

                            this.classContainer = this.html;
                            Object.assign(this, this.defaults, this.options);
                        }
                    }, {
                        key: "getClickOptions",
                        value: function getClickOptions(link) {
                            this.transition = link.getAttribute('data-' + this.name);
                            this.isUrl = link.getAttribute('data-' + this.name + '-url');
                            var href = link.getAttribute('href');
                            var target = link.getAttribute('target');

                            if (target == '_blank') {
                                window.open(href, '_blank');
                                return;
                            }

                            if (this.transition == 'false') {
                                window.location = href;
                                return;
                            }

                            this.setOptions(href, true);
                        }
                    }, {
                        key: "getStateOptions",
                        value: function getStateOptions() {
                            if (this.transitionsHistory) {
                                this.transition = history.state;
                            } else {
                                this.transition = false;
                            }

                            var href = window.location.href;
                            this.setOptions(href);
                        }
                    }, {
                        key: "goTo",
                        value: function goTo(href, transition, isUrl) {
                            this.reset();
                            this.transition = transition;
                            this.isUrl = isUrl;
                            this.setOptions(href, true);
                        }
                    }, {
                        key: "setOptions",
                        value: function setOptions(href, push) {
                            var container = '[' + this.container + ']';
                            var oldContainer;

                            if (this.transition && this.transition != 'true') {
                                this.transitionContainer = '[' + this.container + '="' + this.transition + '"]';
                                this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass;
                                this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass;
                                this.readyClass = this.transitions[this.transition].readyClass || this.readyClass;
                                this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix;
                                this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay;
                                this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay;
                                this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay;
                                oldContainer = document.querySelector(this.transitionContainer);
                            }

                            if (oldContainer) {
                                container = this.transitionContainer;
                                this.oldContainer = oldContainer;
                                this.classContainer = this.oldContainer.parentNode;

                                if (!this.subContainer) {
                                    history.replaceState(this.transition, null, this.href);
                                }

                                this.subContainer = true;
                            } else {
                                this.oldContainer = document.querySelector(container);

                                if (this.subContainer) {
                                    history.replaceState(this.prevTransition, null, this.href);
                                }

                                this.subContainer = false;
                            }

                            this.href = href;
                            this.parentContainer = this.oldContainer.parentNode;

                            if (this.isUrl === '' || this.isUrl != null && this.isUrl != 'false' && this.isUrl != false) {
                                history.pushState(this.transition, null, href);
                            } else {
                                this.oldContainer.classList.add('is-old');
                                this.setLoading();
                                this.startEnterDelay();
                                this.loadHref(href, container, push);
                            }
                        }
                    }, {
                        key: "setLoading",
                        value: function setLoading() {
                            this.classContainer.classList.remove(this.loadedClass, this.readyClass);
                            this.classContainer.classList.add(this.loadingClass);
                            this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition);

                            if (this.transition) {
                                this.classContainer.classList.add(this.transitionsPrefix + this.transition);
                            }

                            if (!this.subContainer) {
                                this.prevTransition = this.transition;
                            }

                            var loadingEvent = new Event(this.namespace + 'loading');
                            window.dispatchEvent(loadingEvent);
                        }
                    }, {
                        key: "startEnterDelay",
                        value: function startEnterDelay() {
                            var _this2 = this;

                            this.enterTimeout = window.setTimeout(function() {
                                _this2.isEntered = true;

                                if (_this2.isLoaded) {
                                    _this2.transitionContainers();
                                }
                            }, this.enterDelay);
                        }
                    }, {
                        key: "loadHref",
                        value: function loadHref(href, container, push) {
                            var _this3 = this;

                            this.isLoading = true;
                            var signal = this.controller.signal;
                            fetch(href, {
                                signal: signal
                            }).then(function(response) {
                                return response.text();
                            }).then(function(data) {
                                if (push) {
                                    history.pushState(_this3.transition, null, href);
                                }

                                var parser = new DOMParser();
                                _this3.data = parser.parseFromString(data, 'text/html');
                                _this3.newContainer = _this3.data.querySelector(container);

                                _this3.newContainer.classList.add('is-new');

                                _this3.parentNewContainer = _this3.newContainer.parentNode;

                                _this3.hideContainer();

                                _this3.parentContainer.insertBefore(_this3.newContainer, _this3.oldContainer);

                                _this3.isInserted = true;

                                _this3.setSvgs();

                                _this3.isLoaded = true;

                                if (_this3.isEntered) {
                                    _this3.transitionContainers();
                                }

                                _this3.loadEls(_this3.newContainer);

                                _this3.isLoading = false;
                            })["catch"](function(err) {
                                window.location = href;
                            });
                        }
                    }, {
                        key: "transitionContainers",
                        value: function transitionContainers() {
                            var _this4 = this;

                            this.setAttributes();
                            this.showContainer();
                            this.setLoaded();
                            setTimeout(function() {
                                _this4.removeContainer();

                                _this4.setReady();
                            }, this.exitDelay);
                        }
                    }, {
                        key: "setSvgs",
                        value: function setSvgs() {
                            if (this.isChrome) {
                                var svgs = this.newContainer.querySelectorAll('use');

                                if (svgs.length) {
                                    svgs.forEach(function(svg) {
                                        var xhref = svg.getAttribute('xlink:href');

                                        if (xhref) {
                                            svg.parentNode.innerHTML = '<use xlink:href="' + xhref + '"></use>';
                                        } else {
                                            var href = svg.getAttribute('href');
                                            if (href) svg.parentNode.innerHTML = '<use href="' + href + '"></use>';
                                        }
                                    });
                                }
                            }
                        }
                    }, {
                        key: "setAttributes",
                        value: function setAttributes() {
                            var _this5 = this;

                            var title = this.data.getElementsByTagName('title')[0];
                            var newDesc = this.data.head.querySelector('meta[name="description"]');
                            var oldDesc = document.head.querySelector('meta[name="description"]');
                            var container;
                            var newContainer;

                            if (this.subContainer) {
                                newContainer = this.parentNewContainer;
                                container = document.querySelector(this.transitionContainer).parentNode;
                            } else {
                                newContainer = this.data.querySelector('html');
                                container = document.querySelector('html');
                            }

                            var datas = Object.assign({}, newContainer.dataset);
                            if (title) document.title = title.innerText;
                            if (oldDesc && newDesc) oldDesc.setAttribute('content', newDesc.getAttribute('content'));

                            if (datas) {
                                Object.entries(datas).forEach(function(_ref) {
                                    var _ref2 = _slicedToArray(_ref, 2),
                                        key = _ref2[0],
                                        val = _ref2[1];

                                    container.setAttribute('data-' + _this5.toDash(key), val);
                                });
                            }
                        }
                    }, {
                        key: "toDash",
                        value: function toDash(str) {
                            return str.split(/(?=[A-Z])/).join('-').toLowerCase();
                        }
                    }, {
                        key: "hideContainer",
                        value: function hideContainer() {
                            this.newContainer.style.visibility = 'hidden';
                            this.newContainer.style.height = 0;
                            this.newContainer.style.overflow = 'hidden';
                        }
                    }, {
                        key: "showContainer",
                        value: function showContainer() {
                            this.newContainer.style.visibility = '';
                            this.newContainer.style.height = '';
                            this.newContainer.style.overflow = '';
                        }
                    }, {
                        key: "loadEls",
                        value: function loadEls(container) {
                            var _this6 = this;

                            var promises = [];
                            this.loadAttributes.forEach(function(attr) {
                                var data = 'data-' + _this6.name + '-' + attr;
                                var els = container.querySelectorAll('[' + data + ']');

                                if (els.length) {
                                    els.forEach(function(el) {
                                        var elData = el.getAttribute(data);
                                        el.setAttribute(attr, elData);

                                        if (attr == 'src' || attr == 'srcset') {
                                            var promise = new Promise(function(resolve) {
                                                el.onload = function() {
                                                    return resolve(el);
                                                };
                                            });
                                            promises.push(promise);
                                        }
                                    });
                                }
                            });
                            Promise.all(promises).then(function(val) {
                                var imagesEvent = new Event(_this6.namespace + 'images');
                                window.dispatchEvent(imagesEvent);
                            });
                        }
                    }, {
                        key: "setLoaded",
                        value: function setLoaded() {
                            var _this7 = this;

                            this.classContainer.classList.remove(this.loadingClass);
                            setTimeout(function() {
                                _this7.classContainer.classList.add(_this7.loadedClass);
                            }, this.loadedDelay);
                            var loadedEvent = new Event(this.namespace + 'loaded');
                            window.dispatchEvent(loadedEvent);
                        }
                    }, {
                        key: "removeContainer",
                        value: function removeContainer() {
                            this.parentContainer.removeChild(this.oldContainer);
                            this.newContainer.classList.remove('is-new');
                            this.isInserted = false;
                        }
                    }, {
                        key: "setReady",
                        value: function setReady() {
                            this.classContainer.classList.add(this.readyClass);
                            var readyEvent = new Event(this.namespace + 'ready');
                            window.dispatchEvent(readyEvent);
                        }
                    }, {
                        key: "on",
                        value: function on(event, func) {
                            var _this8 = this;

                            window.addEventListener(this.namespace + event, function() {
                                switch (event) {
                                    case 'loading':
                                        return func(_this8.transition, _this8.oldContainer);

                                    case 'loaded':
                                        return func(_this8.transition, _this8.oldContainer, _this8.newContainer);

                                    case 'ready':
                                        return func(_this8.transition, _this8.newContainer);

                                    default:
                                        return func();
                                }
                            }, false);
                        }
                    }]);

                    return _default;
                }();

                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (_default);


                /***/
            })

    }
]);
//# sourceMappingURL=src_scripts_modules_Load_js.js.map