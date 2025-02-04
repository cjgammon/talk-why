/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/athena.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#athena-root{\n\tposition: relative;\n}\n\n.athena-slide{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.athena-slide.current{\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n.athena-iframe-clickarea{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.athena-iframe-clickarea.focus{\n\tpointer-events: none;\n\tcursor: auto;\n}\n\n.athena-iframe.focus{\n\toutline: 100px solid rgba(255, 255, 255, .75);\n}\n\n.athena-hud{\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, 0.5);\n\tz-index: 100;\n\tdisplay: none;\n}\n\n.athena-hud.visible{\n\tdisplay: block;\n}\n\n.athena-hud-list{\n\tposition: relative;\n\toverflow-y: auto;\n\tmax-height: 100%;\n}\n\n.athena-hud-list-item{\n\tbackground: rgba(255, 255, 255, 0.7);\n\tcolor: black;\n}\n\n.athena-hud-list-item.selected{\n\tbackground: rgba(0, 0, 0, 0.7);\n\tcolor: white;\n}\n\n.athena-hud-input{\n\tbackground: #ccc;\n\tcolor: #333;\n}\n");

/***/ }),

/***/ "./src/events/EventBus.ts":
/*!********************************!*\
  !*** ./src/events/EventBus.ts ***!
  \********************************/
/*! exports provided: EventBus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
class SubscriptionReference {
    constructor(_bus, _eventType, _id, _callback) {
        this.bus = _bus;
        this.eventType = _eventType;
        this.id = _id;
        this.callback = _callback;
    }
    unsubscribe() {
        delete this.bus.subscriptions[this.eventType][this.id];
        if (Object.keys(this.bus.subscriptions[this.eventType]).length === 0) {
            delete this.bus.subscriptions[this.eventType];
        }
    }
}
class EventBus {
    constructor() {
        this.subscriptions = {};
        this.getNextUniqueId = this.getIdGenerator();
    }
    subscribe(_eventType, callback) {
        let id = this.getNextUniqueId(); //unique id.
        if (!this.subscriptions[_eventType]) {
            this.subscriptions[_eventType] = {};
        }
        let subRef = new SubscriptionReference(this, _eventType, id, callback);
        this.subscriptions[_eventType][id] = subRef;
        return subRef;
    }
    unsubscribe(_eventType, _id) {
        delete this.subscriptions[_eventType][_id];
        if (Object.keys(this.subscriptions[_eventType]).length === 0) {
            delete this.subscriptions[_eventType];
        }
    }
    dispatch(_eventType, _arg = null) {
        if (!this.subscriptions[_eventType]) {
            return;
        }
        for (let id in this.subscriptions[_eventType]) {
            let subRef = this.subscriptions[_eventType][id];
            subRef.callback(_arg);
            //TODO:: if once then destroy
        }
    }
    getIdGenerator() {
        let lastId = 0;
        return function getNextUniqueId() {
            lastId += 1;
            return lastId;
        };
    }
}
let bus = new EventBus();
/* harmony default export */ __webpack_exports__["default"] = (bus);


/***/ }),

/***/ "./src/events/SlideEvent.ts":
/*!**********************************!*\
  !*** ./src/events/SlideEvent.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    GOTO: 'slide_goto',
    NEXT: 'slide_next',
    PREV: 'slide_prev',
    TRIGGER: 'slide_trigger',
    ANIMIN: 'anim_in',
    ANIMOUT: 'anim_out',
    ANIMIN_COMPLETE: 'anim_in_complete',
    ANIMOUT_COMPLETE: 'anim_out_complete'
});


/***/ }),

/***/ "./src/events/UserEvent.ts":
/*!*********************************!*\
  !*** ./src/events/UserEvent.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    KEYDOWN: 'key_down',
    KEYUP: 'key_up'
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Athena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Athena", function() { return Athena; });
/* harmony import */ var src_models_slideTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");
/* harmony import */ var _views_hud_hud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/hud/hud */ "./src/views/hud/hud.ts");
/* harmony import */ var src_views_deck_deck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/views/deck/deck */ "./src/views/deck/deck.ts");
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
/* harmony import */ var src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/events/UserEvent */ "./src/events/UserEvent.ts");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");








class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.slides = src_models_deckModel__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.eventBus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.slideTypes = src_models_slideTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; //exposed for adding new types
        this.events = {
            UserEvent: src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"],
            SlideEvent: src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_7__["default"]
        };
        this._consoleStyle = [
            'background: #44918F',
            'color: white',
            'font-weight: bold',
            'padding: 0.2em'
        ];
        let message = `%c//${this.name} v${this.version}\\\\`;
        let consoleStyle = this._consoleStyle.join('; ');
        console.log(message, consoleStyle);
        window.addEventListener('keydown', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"].KEYDOWN, e));
        window.addEventListener('keyup', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"].KEYUP, e));
    }
    generate(config) {
        for (let i in config) {
            src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"][i] = config[i];
        }
        this.deck = new src_views_deck_deck__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.hud = new _views_hud_hud__WEBPACK_IMPORTED_MODULE_2__["default"](this.deck.rootElement);
    }
}
if (!window.Athena) {
    window.Athena = new Athena();
}
else {
    console.warn('Athena already defined');
}


/***/ }),

/***/ "./src/models/configModel.ts":
/*!***********************************!*\
  !*** ./src/models/configModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
let ConfigModel = {
    slideSelector: '.slide',
    stepSelector: '.step',
    stepListItems: true
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigModel);


/***/ }),

/***/ "./src/models/deckModel.ts":
/*!*********************************!*\
  !*** ./src/models/deckModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
let DeckModel = {
    currentSlide: -1,
    slides: []
};
/* harmony default export */ __webpack_exports__["default"] = (DeckModel);


/***/ }),

/***/ "./src/models/slideTypes.ts":
/*!**********************************!*\
  !*** ./src/models/slideTypes.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/deck/slides/slide */ "./src/views/deck/slides/slide.ts");
/* harmony import */ var _views_deck_slides_slideStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/deck/slides/slideStep */ "./src/views/deck/slides/slideStep.ts");
/* harmony import */ var _views_deck_slides_slideIframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/deck/slides/slideIframe */ "./src/views/deck/slides/slideIframe.ts");



;
let SlideTypes = {
    basic: _views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_0__["default"],
    step: _views_deck_slides_slideStep__WEBPACK_IMPORTED_MODULE_1__["default"],
    iframe: _views_deck_slides_slideIframe__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (SlideTypes);


/***/ }),

/***/ "./src/views/deck/deck.ts":
/*!********************************!*\
  !*** ./src/views/deck/deck.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deck; });
/* harmony import */ var _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!src/athena.css */ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");
/* harmony import */ var src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
// @ts-ignore






class Deck {
    constructor() {
        this.addStyles();
        this.createRoot();
        this.createSlides();
        this.registerEvents();
        this.resetAllSlides();
        this.getSlideFromHash();
    }
    gotoSlideByIndex(_n) {
        let slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[_n];
        let slideId = slide.id;
        this.gotoSlideById(slideId);
    }
    gotoSlideById(_id) {
        window.location.hash = `slide/${_id}`;
    }
    getSlideById(_id) {
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length; i++) {
            if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i].id == _id) {
                return src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i];
            }
        }
    }
    next() {
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length - 1 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide + 1 : src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length - 1;
        this.gotoSlideByIndex(nextSlide);
    }
    previous() {
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide > 0 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide - 1 : 0;
        this.gotoSlideByIndex(nextSlide);
    }
    trigger() {
        src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide].trigger();
    }
    /**
     * sets current slide
     * @param n number or string - index or id of slide to set
     */
    setSlide(_n) {
        if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length == 0) {
            return;
        }
        let slide;
        if (!isNaN(_n)) {
            slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[_n];
        }
        else {
            slide = this.getSlideById(_n);
        }
        if (!slide) {
            console.error('no slide by that name');
            slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[0]; //return first slide
        }
        //NOTE:: if any fun camera work it would go here.
        let prevSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide];
        let transition = prevSlide && prevSlide.isCurrent() ? true : false;
        //console.log('set slide', prevSlide.id, slide.id, transition);
        if (transition) {
            prevSlide.animOut()
                .then(() => slide.animIn());
        }
        else {
            slide.animIn(true);
        }
    }
    getSlideFromHash() {
        if (window.location.hash) {
            let slide = window.location.hash.replace('#slide/', '');
            let n = parseInt(slide);
            if (!isNaN(n)) {
                this.setSlide(n);
            }
            else {
                this.setSlide(slide);
            }
        }
        else {
            this.setSlide(src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide);
        }
    }
    createRoot() {
        this.rootElement = document.createElement('div');
        this.rootElement.id = 'athena-root';
        document.body.appendChild(this.rootElement);
    }
    createSlides() {
        let slideEls = [].slice.call(document.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].slideSelector));
        for (let i = 0; i < slideEls.length; i++) {
            let slideEl = slideEls[i];
            slideEl.parentNode.removeChild(slideEl);
            let SlideClass = this.findSlideType(slideEl);
            let slide = new SlideClass(i, slideEl);
            slide.setParent(this.rootElement);
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.push(slide);
        }
        if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length == 0) {
            console.warn('no slides with selector: ', src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].slideSelector);
        }
    }
    addStyles() {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__["default"];
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    registerEvents() {
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].GOTO, (_id) => this.gotoSlideById(_id));
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT, () => this.next());
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV, () => this.previous());
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER, () => this.trigger());
        window.addEventListener('hashchange', (e) => this.hashChange(e));
        window.addEventListener('keydown', (e) => this.keyDown(e));
        window.addEventListener('keyup', (e) => this.keyUp(e));
    }
    //EVENT HANDLERS
    hashChange(e) {
        let hash = window.location.hash;
        this.getSlideFromHash();
    }
    keyDown(e) {
        switch (e.code) {
            case 'ArrowRight':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT);
                break;
            case 'ArrowLeft':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV);
                break;
            case 'Space':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER);
                break;
        }
    }
    keyUp(e) {
    }
    findSlideType(el) {
        //custom slide
        if (el.dataset['slideType']) {
            let slideTypeName = el.dataset['slideType'];
            if (src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProperty(slideTypeName)) {
                return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"][slideTypeName];
            }
        }
        //step reveal
        let steps = [].slice.call(el.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].stepSelector));
        if (src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].stepListItems) {
            let lists = [].slice.call(el.querySelectorAll('li'));
            steps = steps.concat(lists);
        }
        if (steps.length > 0) {
            return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['step'];
        }
        //basic slide
        return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['basic'];
    }
    resetAllSlides() {
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length; i++) {
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i].setCurrent(false);
        }
    }
}


/***/ }),

/***/ "./src/views/deck/slides/slide.ts":
/*!****************************************!*\
  !*** ./src/views/deck/slides/slide.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideBasic; });
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");



;
class SlideBasic {
    constructor(_index, _el) {
        this.index = _index;
        this.el = _el;
        this.id = _el.getAttribute('id') || `slide${_index}`;
        this.url = `slide/${this.id}`;
        this.bus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"]; //make accessible on slide for extensibility
        _el.classList.add('athena-slide');
    }
    animIn(jump = false) {
        this.setCurrent(true);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMIN);
        this.animInComplete();
    }
    animOut() {
        return new Promise((resolve) => {
            this.setCurrent(false);
            src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMOUT);
            this.animOutComplete();
            resolve();
        });
    }
    animInComplete() {
        this.setCurrent(true);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMIN_COMPLETE);
    }
    animOutComplete() {
        this.setCurrent(false);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMOUT_COMPLETE);
    }
    trigger() {
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].NEXT);
    }
    setParent(_parent) {
        this.parent = _parent;
        _parent.appendChild(this.el);
    }
    setCurrent(_current) {
        if (_current) {
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__["default"].currentSlide = this.index;
            this.el.classList.add('current');
        }
        else {
            this.el.classList.remove('current');
        }
    }
    isCurrent() {
        return src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__["default"].currentSlide == this.index;
    }
}


/***/ }),

/***/ "./src/views/deck/slides/slideIframe.ts":
/*!**********************************************!*\
  !*** ./src/views/deck/slides/slideIframe.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideIframe; });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/views/deck/slides/slide.ts");

class SlideIframe extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
        this.transition = _el.dataset.transitionDuration ? parseFloat(_el.dataset.transitionDuration) : 0;
    }
    animIn() {
        let delay = this.transition * 1000;
        this.iframe = this.el.querySelector('iframe');
        if (!this.iframe) {
            this.iframe = document.createElement('iframe');
            this.iframe.classList.add('athena-iframe');
            this.el.appendChild(this.iframe);
        }
        if (this.el.dataset.width) { // automatically interactive if custom w/h
            this.iframe.style.width = this.el.dataset.width;
            this.iframe.style.height = this.el.dataset.height;
        }
        else if (this.el.dataset.interactive) {
            this.iframe.style.width = '95vw';
            this.iframe.style.height = '95vh';
        }
        else {
            this.iframe.style.width = '100vw';
            this.iframe.style.height = '100vh';
        }
        if (this.el.dataset.width || this.el.dataset.interactive) {
            this.addClickArea();
        }
        else {
            this.iframe.style.pointerEvents = 'none';
        }
        this.iframe.style.opacity = '0';
        this.iframe.addEventListener('load', () => this.loaded());
        super.animIn();
        setTimeout(() => {
            this.iframe.setAttribute('src', this.el.dataset['src']);
        }, delay);
    }
    animOut() {
        if (this.clickArea) {
            this.el.removeChild(this.clickArea);
        }
        this.el.removeChild(this.iframe);
        return super.animOut();
    }
    addClickArea() {
        this.clickArea = document.createElement('div');
        this.clickArea.classList.add('athena-iframe-clickarea');
        this.clickArea.addEventListener('click', (e) => this.handle_clickArea_CLICK(e));
        this.el.appendChild(this.clickArea);
    }
    loaded() {
        this.iframe.style.opacity = '1';
    }
    handle_clickArea_CLICK(e) {
        e.stopPropagation();
        this.clickArea.classList.add('focus');
        this.iframe.classList.add('focus');
        this.iframe.focus();
        this.boundHandler = (e) => this.handle_el_CLICK(e);
        this.el.addEventListener('click', this.boundHandler);
    }
    handle_el_CLICK(e) {
        e.stopPropagation();
        this.clickArea.classList.remove('focus');
        this.iframe.classList.remove('focus');
        this.el.removeEventListener('click', this.boundHandler);
    }
}


/***/ }),

/***/ "./src/views/deck/slides/slideStep.ts":
/*!********************************************!*\
  !*** ./src/views/deck/slides/slideStep.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideStep; });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/views/deck/slides/slide.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");


class SlideStep extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
        this.steps = [];
        this.currentStep = 0;
        let steps = [].slice.call(_el.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"].stepSelector));
        if (src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"].stepListItems) {
            let lists = [].slice.call(_el.querySelectorAll('li'));
            steps = steps.concat(lists);
        }
        this.steps = steps;
    }
    animIn() {
        for (let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            step.style.opacity = "0";
        }
        this.currentStep = 0;
        super.animIn();
    }
    trigger() {
        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].style.opacity = "1";
            this.currentStep++;
        }
        else {
            super.trigger();
        }
    }
}


/***/ }),

/***/ "./src/views/hud/hud.ts":
/*!******************************!*\
  !*** ./src/views/hud/hud.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hud; });
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
/* harmony import */ var src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/events/UserEvent */ "./src/events/UserEvent.ts");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");




;
class Hud {
    constructor(parent) {
        this.list = [];
        this.visible = false;
        this.selected = 0;
        this.shift = false;
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYDOWN, (e) => this.checkToggle(e));
    }
    show() {
        this.container.classList.add('visible');
        this.selected = src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].currentSlide;
        this.registerEvents();
        this.addSearchInput();
        this.resetList();
        this.populateList();
        this.updateSelected();
        this.visible = true;
    }
    hide() {
        this.container.classList.remove('visible');
        this.container.innerHTML = '';
        this.removeEvents();
        this.visible = false;
    }
    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    registerEvents() {
        this.keyDownEvent = src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYDOWN, (e) => this.keyDown(e));
        this.keyUpEvent = src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYUP, (e) => this.keyUp(e));
    }
    removeEvents() {
        this.keyDownEvent.unsubscribe();
        this.keyUpEvent.unsubscribe();
    }
    resetList() {
        this.list = [];
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides.length; i++) {
            let slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides[i];
            this.list.push({
                listIndex: i,
                slideId: slide.id,
                slideEl: null,
                slideIndex: slide.index
            });
        }
    }
    populateList() {
        if (this.listContainer && this.listContainer.parentNode) {
            this.listContainer.parentNode.removeChild(this.listContainer);
        }
        this.listContainer = document.createElement('div');
        this.listContainer.className = 'athena-hud-list';
        for (let i = 0; i < this.list.length; i++) {
            let slide = this.list[i];
            let item = document.createElement('div');
            item.className = 'athena-hud-list-item';
            item.innerText = `${slide.listIndex}: ${slide.slideId}`;
            item.dataset.index = slide.slideId.toString();
            this.listContainer.appendChild(item);
            this.list[i].slideEl = item;
        }
        this.container.appendChild(this.listContainer);
    }
    addSearchInput() {
        this.input = document.createElement('div');
        this.input.className = 'athena-hud-input';
        this.container.appendChild(this.input);
    }
    typing(_char) {
        this.input.innerText = this.input.innerHTML + _char;
        this.search(this.input.innerText);
    }
    search(term) {
        this.list = [];
        this.searchList(term);
        this.populateList();
        this.selected = 0;
    }
    searchList(term) {
        let slides = src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides;
        for (let i = 0; i < slides.length; i++) {
            let slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides[i];
            let slideSearchProp = slide.id;
            if (!isNaN(parseInt(term))) { // handle search by index
                slideSearchProp = slide.index.toString();
            }
            if (slideSearchProp.search(term) === 0) {
                this.list.push({
                    listIndex: i,
                    slideId: slide.id,
                    slideIndex: slide.index,
                    slideEl: null
                });
            }
        }
    }
    subtractCharacter() {
        let orig = this.input.innerText;
        let newString = orig.substr(0, orig.length - 1);
        this.input.innerText = newString;
        this.search(this.input.innerText);
    }
    updateSelected() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].slideEl.classList.remove('selected');
        }
        let selected = this.list[this.selected];
        let el = selected.slideEl;
        el.classList.add('selected');
        //update scroll
        let rect = el.getBoundingClientRect();
        if (rect.top + rect.height > window.innerHeight) {
            this.listContainer.scrollTop += rect.top + rect.height - window.innerHeight;
        }
        else if (rect.top < 0) {
            this.listContainer.scrollTop += rect.top;
        }
    }
    checkToggle(e) {
        switch (e.code) {
            case 'Escape':
                this.toggle();
                break;
        }
    }
    keyDown(e) {
        if (e.code.toLowerCase().indexOf('shift') > -1) {
            this.shift = true;
        }
        switch (e.code) {
            case 'Backspace':
                e.preventDefault();
                this.subtractCharacter();
                break;
            case 'Enter':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_3__["default"].GOTO, this.list[this.selected].slideId);
                this.toggle();
                break;
            case 'ArrowUp':
                this.selected = this.selected > 0 ? this.selected - 1 : this.selected;
                break;
            case 'ArrowDown':
                this.selected = this.selected < this.list.length - 1 ? this.selected + 1 : this.selected;
                break;
        }
        if ((e.keyCode > 47 && e.keyCode < 58) ||
            (e.keyCode > 64 && e.keyCode < 91)) {
            let char = String.fromCharCode(e.keyCode);
            if (!this.shift) {
                char = char.toLowerCase();
            }
            this.typing(char);
        }
        if (this.list.length > 0) {
            this.updateSelected();
        }
    }
    keyUp(e) {
        if (e.code.toLowerCase().indexOf('shift') > -1) {
            this.shift = false;
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=athena.js.map