import { _ as _export_sfc$1, i as createElementBlock, g as openBlock, k as createBaseVNode, d as defineComponent, fX as getCurrentScope, b0 as inject, fY as effectScope, X as watch, cZ as getCurrentInstance, fZ as useSlots, bb as onUnmounted, j as createVNode, x as renderSlot, w as withCtx, m as unref, r as ref, f_ as useAttrs, f as createCommentVNode, e as createBlock, b7 as mergeProps, F as Fragment, bO as toRef, f$ as Teleport, g0 as createPropsRestProxy, q as computed, o as onMounted, n as normalizeClass, bR as reactive, g1 as onScopeDispose, az as onBeforeMount, D as renderList, B as normalizeStyle, z as nextTick, y as onBeforeUnmount, g2 as isMemoSame, t as toDisplayString, b6 as resolveDynamicComponent, l as createTextVNode, b1 as isRef, b3 as toRefs$1, g3 as customRef, bh as provide, h as resolveComponent, aq as h, g4 as toValue$1, g5 as markRaw, g6 as readonly, c as useI18n, bQ as KeyboardShortcutTooltip, bm as NodeConnectionTypes, g7 as CanvasKey, Y as useCssModule, H as useUIStore, bz as useNodeTypesStore, Q as useWorkflowsStore, a0 as useSourceControlStore, a7 as getResourcePermissions, g8 as EXECUTE_WORKFLOW_NODE_TYPE, fD as getSubworkflowId, el as isPresent, g9 as getMousePosition$1, ay as STICKY_NODE_TYPE, bq as usePinnedData, ga as NOT_DUPLICATABLE_NODE_TYPES, gb as isExecutable, bK as useStyles, gc as N8nActionDropdown, cx as getDefaultExportFromCjs, fT as NODE_SIZE, cd as CanvasNodeRenderType, fU as GRID_SIZE, bN as useThrottleFn, gd as useActiveElement, ge as useDeviceSupport, gf as useEventListener$1, gg as onKeyDown, gh as onKeyUp, a_ as watchEffect, b4 as normalizeProps, aV as createSlots, c8 as isValidNodeConnectionType, c9 as CanvasConnectionMode, gi as CanvasNodeKey, gj as mergeModels, gk as useModel, bA as useNodeHelpers, gl as TitledList, aR as N8nTooltip, gm as CanvasNodeDirtiness, bC as _sfc_main$A, b2 as withModifiers, ah as nodeViewEventBus, cc as NODE_CREATOR_OPEN_SOURCES, bW as useBuilderStore, bd as withKeys, gn as CanvasNodeHandleKey, aA as withDirectives, aB as vShow, go as Transition$2, b as useRouter, bB as useRunWorkflow, aZ as LOGS_PANEL_STATE, bk as CHAT_TRIGGER_NODE_TYPE, C as createEventBus, eq as isEqual, p as useSettingsStore, c4 as Suspense, b5 as guardReactiveProps, gp as useNodeDirtiness, fC as CUSTOM_API_CALL_KEY, bw as getNodeInputs, by as getNodeOutputs, dB as getTriggerNodeServiceName, cu as sanitizeHtml, gq as WAIT_NODE_TYPE, gr as SEND_AND_WAIT_OPERATION, gs as FORM_NODE_TYPE, gt as WAIT_INDEFINITELY, gu as SIMULATE_NODE_TYPE, gv as SIMULATE_TRIGGER_NODE_TYPE, gw as getNodeIconSource } from "./index-2X4RXSdq.js";
import { p as parseCanvasConnectionHandleString, u as useNodeCreatorStore, a as useCanvasOperations, i as insertSpacersBetweenEndpoints, c as createCanvasConnectionHandleString, m as mapLegacyEndpointsToCanvasConnectionPort, d as checkOverlap, e as mapLegacyConnectionsToCanvasConnections } from "./useCanvasOperations-DwvVHEsZ.js";
const _sfc_main$z = {};
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M1.6.13c-.18-.17-.47-.18-.62 0L.56.57.14.98c-.2.15-.18.44 0 .62l3.63 3.6c.1.1.1.27 0 .37-.2.2-.53.52-.93.94-.56.57-.12 1.62.22 2.11.05.07.12.1.2.1.05-.01.1-.04.15-.08l5.23-5.22c.1-.1.1-.26-.02-.34-.5-.34-1.55-.78-2.12-.22-.42.4-.75.73-.94.93-.1.1-.27.1-.37 0L1.6.13ZM9.5 3.9c.07-.09.2-.1.3-.04l6.07 3.44c.15.08.18.29.05.4l-1.21 1.22a.26.26 0 0 1-.26.07l-2.18-.64a.26.26 0 0 0-.32.33l.76 2.02c.04.1.01.2-.06.27L7.7 15.92a.26.26 0 0 1-.41-.05L3.83 9.8a.26.26 0 0 1 .04-.3l5.62-5.6Z"
    }, null, -1)
  ]));
}
const TidyUpIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["render", _sfc_render$1]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
const isDef$1 = (val) => typeof val !== "undefined";
const toString$1 = Object.prototype.toString;
const isObject = (val) => toString$1.call(val) === "[object Object]";
const noop$2 = () => {
};
function createFilterWrapper(filter2, fn) {
  function wrapper2(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper2;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter2,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter2);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function toRefs(objectRef, options = {}) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}
function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout2 != null) {
      promises.push(
        promiseTimeout(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout2 != null) {
      promises.push(
        promiseTimeout(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array2 = Array.from(v);
      return array2.includes(value) || array2.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count2 = -1;
    return toMatch(() => {
      count2 += 1;
      return count2 >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target2;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target2 = defaultWindow;
  } else {
    [target2, events, listeners, options] = args;
  }
  if (!target2)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target2), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function createKeyPredicate$1(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target: target2 = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate$1(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target2, eventName, listener, passive);
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => isDef$1(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
var noop$1$1 = { value: () => {
} };
function dispatch$2() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch$2(_);
}
function Dispatch$2(_) {
  this._ = _;
}
function parseTypenames$1$2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch$2.prototype = dispatch$2.prototype = {
  constructor: Dispatch$2,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1$2(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _)
      copy[t] = _[t].slice();
    return new Dispatch$2(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$1$1, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml$2 = "http://www.w3.org/1999/xhtml";
const namespaces$2 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml$2,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace$2(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces$2.hasOwnProperty(prefix) ? { space: namespaces$2[prefix], local: name } : name;
}
function creatorInherit$2(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml$2 && document2.documentElement.namespaceURI === xhtml$2 ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed$2(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator$2(name) {
  var fullname = namespace$2(name);
  return (fullname.local ? creatorFixed$2 : creatorInherit$2)(fullname);
}
function none$2() {
}
function selector$2(selector2) {
  return selector2 == null ? none$2 : function() {
    return this.querySelector(selector2);
  };
}
function selection_select$2(select2) {
  if (typeof select2 !== "function")
    select2 = selector$2(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select2.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1$1(subgroups, this._parents);
}
function array$2(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty$2() {
  return [];
}
function selectorAll$2(selector2) {
  return selector2 == null ? empty$2 : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll$2(select2) {
  return function() {
    return array$2(select2.apply(this, arguments));
  };
}
function selection_selectAll$2(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll$2(select2);
  else
    select2 = selectorAll$2(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        subgroups.push(select2.call(node2, node2.__data__, i, group));
        parents.push(node2);
      }
    }
  }
  return new Selection$1$1(subgroups, parents);
}
function matcher$2(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher$2(selector2) {
  return function(node2) {
    return node2.matches(selector2);
  };
}
var find$2 = Array.prototype.find;
function childFind$2(match) {
  return function() {
    return find$2.call(this.children, match);
  };
}
function childFirst$2() {
  return this.firstElementChild;
}
function selection_selectChild$2(match) {
  return this.select(match == null ? childFirst$2 : childFind$2(typeof match === "function" ? match : childMatcher$2(match)));
}
var filter$2 = Array.prototype.filter;
function children$2() {
  return Array.from(this.children);
}
function childrenFilter$2(match) {
  return function() {
    return filter$2.call(this.children, match);
  };
}
function selection_selectChildren$2(match) {
  return this.selectAll(match == null ? children$2 : childrenFilter$2(typeof match === "function" ? match : childMatcher$2(match)));
}
function selection_filter$2(match) {
  if (typeof match !== "function")
    match = matcher$2(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Selection$1$1(subgroups, this._parents);
}
function sparse$2(update) {
  return new Array(update.length);
}
function selection_enter$2() {
  return new Selection$1$1(this._enter || this._groups.map(sparse$2), this._parents);
}
function EnterNode$2(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode$2.prototype = {
  constructor: EnterNode$2,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$3$1(x) {
  return function() {
    return x;
  };
}
function bindIndex$2(parent, group, enter, update, exit, data) {
  var i = 0, node2, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node2 = group[i]) {
      node2.__data__ = data[i];
      update[i] = node2;
    } else {
      enter[i] = new EnterNode$2(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node2 = group[i]) {
      exit[i] = node2;
    }
  }
}
function bindKey$2(parent, group, enter, update, exit, data, key) {
  var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node2 = group[i]) {
      keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node2;
      } else {
        nodeByKeyValue.set(keyValue, node2);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node2 = nodeByKeyValue.get(keyValue)) {
      update[i] = node2;
      node2.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode$2(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node2 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
      exit[i] = node2;
    }
  }
}
function datum$2(node2) {
  return node2.__data__;
}
function selection_data$2(value, key) {
  if (!arguments.length)
    return Array.from(this, datum$2);
  var bind = key ? bindKey$2 : bindIndex$2, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$3$1(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike$2(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike$2(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit$2() {
  return new Selection$1$1(this._exit || this._groups.map(sparse$2), this._parents);
}
function selection_join$2(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge$2(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1$1(merges, this._parents);
}
function selection_order$2() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node2; --i >= 0; ) {
      if (node2 = group[i]) {
        if (next && node2.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node2, next);
        next = node2;
      }
    }
  }
  return this;
}
function selection_sort$2(compare) {
  if (!compare)
    compare = ascending$2;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        sortgroup[i] = node2;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1$1(sortgroups, this._parents).order();
}
function ascending$2(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call$2() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes$2() {
  return Array.from(this);
}
function selection_node$2() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node2 = group[i];
      if (node2)
        return node2;
    }
  }
  return null;
}
function selection_size$2() {
  let size = 0;
  for (const node2 of this)
    ++size;
  return size;
}
function selection_empty$2() {
  return !this.node();
}
function selection_each$2(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        callback.call(node2, node2.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS$1$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr$2(name, value) {
  var fullname = namespace$2(name);
  if (arguments.length < 2) {
    var node2 = this.node();
    return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1$1 : attrRemove$1$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1$1 : attrFunction$1$1 : fullname.local ? attrConstantNS$1$1 : attrConstant$1$1)(fullname, value));
}
function defaultView$2(node2) {
  return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
}
function styleRemove$1$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style$2(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1$1 : typeof value === "function" ? styleFunction$1$1 : styleConstant$1$1)(name, value, priority == null ? "" : priority)) : styleValue$2(this.node(), name);
}
function styleValue$2(node2, name) {
  return node2.style.getPropertyValue(name) || defaultView$2(node2).getComputedStyle(node2, null).getPropertyValue(name);
}
function propertyRemove$2(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant$2(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction$2(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property$2(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove$2 : typeof value === "function" ? propertyFunction$2 : propertyConstant$2)(name, value)) : this.node()[name];
}
function classArray$2(string) {
  return string.trim().split(/^|\s+/);
}
function classList$2(node2) {
  return node2.classList || new ClassList$2(node2);
}
function ClassList$2(node2) {
  this._node = node2;
  this._names = classArray$2(node2.getAttribute("class") || "");
}
ClassList$2.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd$2(node2, names) {
  var list2 = classList$2(node2), i = -1, n = names.length;
  while (++i < n)
    list2.add(names[i]);
}
function classedRemove$2(node2, names) {
  var list2 = classList$2(node2), i = -1, n = names.length;
  while (++i < n)
    list2.remove(names[i]);
}
function classedTrue$2(names) {
  return function() {
    classedAdd$2(this, names);
  };
}
function classedFalse$2(names) {
  return function() {
    classedRemove$2(this, names);
  };
}
function classedFunction$2(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd$2 : classedRemove$2)(this, names);
  };
}
function selection_classed$2(name, value) {
  var names = classArray$2(name + "");
  if (arguments.length < 2) {
    var list2 = classList$2(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list2.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction$2 : value ? classedTrue$2 : classedFalse$2)(names, value));
}
function textRemove$2() {
  this.textContent = "";
}
function textConstant$1$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text$2(value) {
  return arguments.length ? this.each(value == null ? textRemove$2 : (typeof value === "function" ? textFunction$1$1 : textConstant$1$1)(value)) : this.node().textContent;
}
function htmlRemove$2() {
  this.innerHTML = "";
}
function htmlConstant$2(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction$2(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html$2(value) {
  return arguments.length ? this.each(value == null ? htmlRemove$2 : (typeof value === "function" ? htmlFunction$2 : htmlConstant$2)(value)) : this.node().innerHTML;
}
function raise$2() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise$2() {
  return this.each(raise$2);
}
function lower$2() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower$2() {
  return this.each(lower$2);
}
function selection_append$2(name) {
  var create2 = typeof name === "function" ? name : creator$2(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull$2() {
  return null;
}
function selection_insert$2(name, before) {
  var create2 = typeof name === "function" ? name : creator$2(name), select2 = before == null ? constantNull$2 : typeof before === "function" ? before : selector$2(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove$2() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove$2() {
  return this.each(remove$2);
}
function selection_cloneShallow$2() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep$2() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone$2(deep) {
  return this.select(deep ? selection_cloneDeep$2 : selection_cloneShallow$2);
}
function selection_datum$2(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener$2(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames$3(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove$2(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd$2(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener$2(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on$2(typename, value, options) {
  var typenames = parseTypenames$3(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd$2 : onRemove$2;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent$2(node2, type, params) {
  var window2 = defaultView$2(node2), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node2.dispatchEvent(event);
}
function dispatchConstant$2(type, params) {
  return function() {
    return dispatchEvent$2(this, type, params);
  };
}
function dispatchFunction$2(type, params) {
  return function() {
    return dispatchEvent$2(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch$2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction$2 : dispatchConstant$2)(type, params));
}
function* selection_iterator$2() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        yield node2;
    }
  }
}
var root$2 = [null];
function Selection$1$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection$1() {
  return new Selection$1$1([[document.documentElement]], root$2);
}
function selection_selection$2() {
  return this;
}
Selection$1$1.prototype = selection$1.prototype = {
  constructor: Selection$1$1,
  select: selection_select$2,
  selectAll: selection_selectAll$2,
  selectChild: selection_selectChild$2,
  selectChildren: selection_selectChildren$2,
  filter: selection_filter$2,
  data: selection_data$2,
  enter: selection_enter$2,
  exit: selection_exit$2,
  join: selection_join$2,
  merge: selection_merge$2,
  selection: selection_selection$2,
  order: selection_order$2,
  sort: selection_sort$2,
  call: selection_call$2,
  nodes: selection_nodes$2,
  node: selection_node$2,
  size: selection_size$2,
  empty: selection_empty$2,
  each: selection_each$2,
  attr: selection_attr$2,
  style: selection_style$2,
  property: selection_property$2,
  classed: selection_classed$2,
  text: selection_text$2,
  html: selection_html$2,
  raise: selection_raise$2,
  lower: selection_lower$2,
  append: selection_append$2,
  insert: selection_insert$2,
  remove: selection_remove$2,
  clone: selection_clone$2,
  datum: selection_datum$2,
  on: selection_on$2,
  dispatch: selection_dispatch$2,
  [Symbol.iterator]: selection_iterator$2
};
function select$2(selector2) {
  return typeof selector2 === "string" ? new Selection$1$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1$1([[selector2]], root$2);
}
function sourceEvent$2(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent)
    event = sourceEvent2;
  return event;
}
function pointer$2(event, node2) {
  event = sourceEvent$2(event);
  if (node2 === void 0)
    node2 = event.currentTarget;
  if (node2) {
    var svg = node2.ownerSVGElement || node2;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node2.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node2.getBoundingClientRect) {
      var rect = node2.getBoundingClientRect();
      return [event.clientX - rect.left - node2.clientLeft, event.clientY - rect.top - node2.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
const nonpassive$1 = { passive: false };
const nonpassivecapture$2 = { capture: true, passive: false };
function nopropagation$1$1(event) {
  event.stopImmediatePropagation();
}
function noevent$1$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable$1(view) {
  var root2 = view.document.documentElement, selection2 = select$2(view).on("dragstart.drag", noevent$1$1, nonpassivecapture$2);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent$1$1, nonpassivecapture$2);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag$2(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select$2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent$1$1, nonpassivecapture$2);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
const constant$2$1 = (x) => () => x;
function DragEvent$1(type, {
  sourceEvent: sourceEvent2,
  subject,
  target: target2,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target2, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent$1.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter$1$1(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer$1() {
  return this.parentNode;
}
function defaultSubject$1(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable$1$1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag$1() {
  var filter2 = defaultFilter$1$1, container2 = defaultContainer$1, subject = defaultSubject$1, touchable = defaultTouchable$1$1, gestures = {}, listeners = dispatch$2("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive$1).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container2.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select$2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture$2).on("mouseup.drag", mouseupped, nonpassivecapture$2);
    dragDisable$1(event.view);
    nopropagation$1$1(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent$1$1(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select$2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag$2(event.view, mousemoving);
    noevent$1$1(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container2.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation$1$1(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent$1$1(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation$1$1(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container22, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer$2(touch || event, container22), dx, dy, s;
    if ((s = subject.call(that, new DragEvent$1("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer$2(touch2 || event2, container22), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent$1(type, {
          sourceEvent: event2,
          subject: s,
          target: drag2,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$2$1(!!_), drag2) : filter2;
  };
  drag2.container = function(_) {
    return arguments.length ? (container2 = typeof _ === "function" ? _ : constant$2$1(_), drag2) : container2;
  };
  drag2.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2$1(_), drag2) : subject;
  };
  drag2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2$1(!!_), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
function define$1(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color$1() {
}
var darker$1 = 0.7;
var brighter$1 = 1 / darker$1;
var reI$1 = "\\s*([+-]?\\d+)\\s*", reN$1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP$1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex$1 = /^#([0-9a-f]{3,8})$/, reRgbInteger$1 = new RegExp(`^rgb\\(${reI$1},${reI$1},${reI$1}\\)$`), reRgbPercent$1 = new RegExp(`^rgb\\(${reP$1},${reP$1},${reP$1}\\)$`), reRgbaInteger$1 = new RegExp(`^rgba\\(${reI$1},${reI$1},${reI$1},${reN$1}\\)$`), reRgbaPercent$1 = new RegExp(`^rgba\\(${reP$1},${reP$1},${reP$1},${reN$1}\\)$`), reHslPercent$1 = new RegExp(`^hsl\\(${reN$1},${reP$1},${reP$1}\\)$`), reHslaPercent$1 = new RegExp(`^hsla\\(${reN$1},${reP$1},${reP$1},${reN$1}\\)$`);
var named$1 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define$1(Color$1, color$2, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex$1,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex$1,
  formatHex8: color_formatHex8$1,
  formatHsl: color_formatHsl$1,
  formatRgb: color_formatRgb$1,
  toString: color_formatRgb$1
});
function color_formatHex$1() {
  return this.rgb().formatHex();
}
function color_formatHex8$1() {
  return this.rgb().formatHex8();
}
function color_formatHsl$1() {
  return hslConvert$1(this).formatHsl();
}
function color_formatRgb$1() {
  return this.rgb().formatRgb();
}
function color$2(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex$1.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn$1(m) : l === 3 ? new Rgb$1(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba$1(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba$1(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger$1.exec(format)) ? new Rgb$1(m[1], m[2], m[3], 1) : (m = reRgbPercent$1.exec(format)) ? new Rgb$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger$1.exec(format)) ? rgba$1(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent$1.exec(format)) ? rgba$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) : named$1.hasOwnProperty(format) ? rgbn$1(named$1[format]) : format === "transparent" ? new Rgb$1(NaN, NaN, NaN, 0) : null;
}
function rgbn$1(n) {
  return new Rgb$1(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba$1(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb$1(r, g, b, a);
}
function rgbConvert$1(o) {
  if (!(o instanceof Color$1))
    o = color$2(o);
  if (!o)
    return new Rgb$1();
  o = o.rgb();
  return new Rgb$1(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert$1(r) : new Rgb$1(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb$1(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define$1(Rgb$1, rgb$1, extend$1(Color$1, {
  brighter(k) {
    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker$1 : Math.pow(darker$1, k);
    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb$1(clampi$1(this.r), clampi$1(this.g), clampi$1(this.b), clampa$1(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex$1,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex$1,
  formatHex8: rgb_formatHex8$1,
  formatRgb: rgb_formatRgb$1,
  toString: rgb_formatRgb$1
}));
function rgb_formatHex$1() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}`;
}
function rgb_formatHex8$1() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}${hex$1((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb$1() {
  const a = clampa$1(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi$1(this.r)}, ${clampi$1(this.g)}, ${clampi$1(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa$1(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi$1(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex$1(value) {
  value = clampi$1(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla$1(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl$1(h2, s, l, a);
}
function hslConvert$1(o) {
  if (o instanceof Hsl$1)
    return new Hsl$1(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color$1))
    o = color$2(o);
  if (!o)
    return new Hsl$1();
  if (o instanceof Hsl$1)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl$1(h2, s, l, o.opacity);
}
function hsl$1(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert$1(h2) : new Hsl$1(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl$1(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define$1(Hsl$1, hsl$1, extend$1(Color$1, {
  brighter(k) {
    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker$1 : Math.pow(darker$1, k);
    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb$1(
      hsl2rgb$1(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb$1(h2, m1, m2),
      hsl2rgb$1(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl$1(clamph$1(this.h), clampt$1(this.s), clampt$1(this.l), clampa$1(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa$1(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph$1(this.h)}, ${clampt$1(this.s) * 100}%, ${clampt$1(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph$1(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt$1(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb$1(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1$2 = (x) => () => x;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential$1(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma$1(y) {
  return (y = +y) === 1 ? nogamma$1 : function(a, b) {
    return b - a ? exponential$1(a, b, y) : constant$1$2(isNaN(a) ? b : a);
  };
}
function nogamma$1(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant$1$2(isNaN(a) ? b : a);
}
const interpolateRgb$1 = function rgbGamma(y) {
  var color2 = gamma$1(y);
  function rgb$1$1(start2, end) {
    var r = color2((start2 = rgb$1(start2)).r, (end = rgb$1(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma$1(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1$1.gamma = rgbGamma;
  return rgb$1$1;
}(1);
function interpolateNumber$1(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
var reA$1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB$1 = new RegExp(reA$1.source, "g");
function zero$1(b) {
  return function() {
    return b;
  };
}
function one$1(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString$1(a, b) {
  var bi = reA$1.lastIndex = reB$1.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA$1.exec(a)) && (bm = reB$1.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber$1(am, bm) });
    }
    bi = reB$1.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one$1(q[0].x) : zero$1(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
var degrees$1 = 180 / Math.PI;
var identity$1$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose$1(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees$1,
    skewX: Math.atan(skewX) * degrees$1,
    scaleX,
    scaleY
  };
}
var svgNode$1;
function parseCss$1(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1$1 : decompose$1(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg$1(value) {
  if (value == null)
    return identity$1$1;
  if (!svgNode$1)
    svgNode$1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode$1.setAttribute("transform", value);
  if (!(value = svgNode$1.transform.baseVal.consolidate()))
    return identity$1$1;
  value = value.matrix;
  return decompose$1(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform$1(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber$1(xa, xb) }, { i: i - 2, x: interpolateNumber$1(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber$1(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber$1(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber$1(xa, xb) }, { i: i - 2, x: interpolateNumber$1(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss$1 = interpolateTransform$1(parseCss$1, "px, ", "px)", "deg)");
var interpolateTransformSvg$1 = interpolateTransform$1(parseSvg$1, ", ", ")", ")");
var epsilon2$1 = 1e-12;
function cosh$1(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh$1(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh$1(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const interpolateZoom$1 = function zoomRho(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2$1) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh$1(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh$1(rho * s + r0) - sinh$1(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh$1(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom2;
}(Math.SQRT2, 2, 4);
var frame$1 = 0, timeout$1$1 = 0, interval$1 = 0, pokeDelay$1 = 1e3, taskHead$1, taskTail$1, clockLast$1 = 0, clockNow$1 = 0, clockSkew$1 = 0, clock$1 = typeof performance === "object" && performance.now ? performance : Date, setFrame$1 = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now$1() {
  return clockNow$1 || (setFrame$1(clearNow$1), clockNow$1 = clock$1.now() + clockSkew$1);
}
function clearNow$1() {
  clockNow$1 = 0;
}
function Timer$1() {
  this._call = this._time = this._next = null;
}
Timer$1.prototype = timer$1.prototype = {
  constructor: Timer$1,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail$1 !== this) {
      if (taskTail$1)
        taskTail$1._next = this;
      else
        taskHead$1 = this;
      taskTail$1 = this;
    }
    this._call = callback;
    this._time = time;
    sleep$1();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep$1();
    }
  }
};
function timer$1(callback, delay, time) {
  var t = new Timer$1();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush$1() {
  now$1();
  ++frame$1;
  var t = taskHead$1, e;
  while (t) {
    if ((e = clockNow$1 - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame$1;
}
function wake$1() {
  clockNow$1 = (clockLast$1 = clock$1.now()) + clockSkew$1;
  frame$1 = timeout$1$1 = 0;
  try {
    timerFlush$1();
  } finally {
    frame$1 = 0;
    nap$1();
    clockNow$1 = 0;
  }
}
function poke$1() {
  var now2 = clock$1.now(), delay = now2 - clockLast$1;
  if (delay > pokeDelay$1)
    clockSkew$1 -= delay, clockLast$1 = now2;
}
function nap$1() {
  var t0, t1 = taskHead$1, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead$1 = t2;
    }
  }
  taskTail$1 = t0;
  sleep$1(time);
}
function sleep$1(time) {
  if (frame$1)
    return;
  if (timeout$1$1)
    timeout$1$1 = clearTimeout(timeout$1$1);
  var delay = time - clockNow$1;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1$1 = setTimeout(wake$1, time - clock$1.now() - clockSkew$1);
    if (interval$1)
      interval$1 = clearInterval(interval$1);
  } else {
    if (!interval$1)
      clockLast$1 = clock$1.now(), interval$1 = setInterval(poke$1, pokeDelay$1);
    frame$1 = 1, setFrame$1(wake$1);
  }
}
function timeout$2(callback, delay, time) {
  var t = new Timer$1();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn$1 = dispatch$2("start", "end", "cancel", "interrupt");
var emptyTween$1 = [];
var CREATED$1 = 0;
var SCHEDULED$1 = 1;
var STARTING$1 = 2;
var STARTED$1 = 3;
var RUNNING$1 = 4;
var ENDING$1 = 5;
var ENDED$1 = 6;
function schedule$1(node2, name, id2, index, group, timing) {
  var schedules = node2.__transition;
  if (!schedules)
    node2.__transition = {};
  else if (id2 in schedules)
    return;
  create$1(node2, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn$1,
    tween: emptyTween$1,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED$1
  });
}
function init$1(node2, id2) {
  var schedule2 = get$3(node2, id2);
  if (schedule2.state > CREATED$1)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set$3(node2, id2) {
  var schedule2 = get$3(node2, id2);
  if (schedule2.state > STARTED$1)
    throw new Error("too late; already running");
  return schedule2;
}
function get$3(node2, id2) {
  var schedule2 = node2.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create$1(node2, id2, self) {
  var schedules = node2.__transition, tween;
  schedules[id2] = self;
  self.timer = timer$1(schedule2, 0, self.time);
  function schedule2(elapsed) {
    self.state = SCHEDULED$1;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED$1)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED$1)
        return timeout$2(start2);
      if (o.state === RUNNING$1) {
        o.state = ENDED$1;
        o.timer.stop();
        o.on.call("interrupt", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED$1;
        o.timer.stop();
        o.on.call("cancel", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout$2(function() {
      if (self.state === STARTED$1) {
        self.state = RUNNING$1;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING$1;
    self.on.call("start", node2, node2.__data__, self.index, self.group);
    if (self.state !== STARTING$1)
      return;
    self.state = STARTED$1;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node2, node2.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING$1, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node2, t);
    }
    if (self.state === ENDING$1) {
      self.on.call("end", node2, node2.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED$1;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node2.__transition;
  }
}
function interrupt$1(node2, name) {
  var schedules = node2.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING$1 && schedule2.state < ENDING$1;
    schedule2.state = ENDED$1;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node2, node2.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node2.__transition;
}
function selection_interrupt$1(name) {
  return this.each(function() {
    interrupt$1(this, name);
  });
}
function tweenRemove$1(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set$3(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction$1(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set$3(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween$1(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get$3(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove$1 : tweenFunction$1)(id2, name, value));
}
function tweenValue$1(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule2 = set$3(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node2) {
    return get$3(node2, id2).value[name];
  };
}
function interpolate$1(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber$1 : b instanceof color$2 ? interpolateRgb$1 : (c = color$2(b)) ? (b = c, interpolateRgb$1) : interpolateString$1)(a, b);
}
function attrRemove$3(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$3(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$3(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS$3(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction$3(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS$3(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr$1(name, value) {
  var fullname = namespace$2(name), i = fullname === "transform" ? interpolateTransformSvg$1 : interpolate$1;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$3 : attrFunction$3)(fullname, i, tweenValue$1(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$3 : attrRemove$3)(fullname) : (fullname.local ? attrConstantNS$3 : attrConstant$3)(fullname, i, value));
}
function attrInterpolate$1(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS$1(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS$1(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS$1(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween$1(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate$1(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween$1(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace$2(name);
  return this.tween(key, (fullname.local ? attrTweenNS$1 : attrTween$1)(fullname, value));
}
function delayFunction$1(id2, value) {
  return function() {
    init$1(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant$1(id2, value) {
  return value = +value, function() {
    init$1(this, id2).delay = value;
  };
}
function transition_delay$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction$1 : delayConstant$1)(id2, value)) : get$3(this.node(), id2).delay;
}
function durationFunction$1(id2, value) {
  return function() {
    set$3(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant$1(id2, value) {
  return value = +value, function() {
    set$3(this, id2).duration = value;
  };
}
function transition_duration$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction$1 : durationConstant$1)(id2, value)) : get$3(this.node(), id2).duration;
}
function easeConstant$1(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set$3(this, id2).ease = value;
  };
}
function transition_ease$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant$1(id2, value)) : get$3(this.node(), id2).ease;
}
function easeVarying$1(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set$3(this, id2).ease = v;
  };
}
function transition_easeVarying$1(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying$1(this._id, value));
}
function transition_filter$1(match) {
  if (typeof match !== "function")
    match = matcher$2(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Transition$1(subgroups, this._parents, this._name, this._id);
}
function transition_merge$1(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition$1(merges, this._parents, this._name, this._id);
}
function start$1(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction$1(id2, name, listener) {
  var on0, on1, sit = start$1(name) ? init$1 : set$3;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on$1(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get$3(this.node(), id2).on.on(name) : this.each(onFunction$1(id2, name, listener));
}
function removeFunction$1(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove$1() {
  return this.on("end.remove", removeFunction$1(this._id));
}
function transition_select$1(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector$2(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select2.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
        schedule$1(subgroup[i], name, id2, i, subgroup, get$3(node2, id2));
      }
    }
  }
  return new Transition$1(subgroups, this._parents, name, id2);
}
function transition_selectAll$1(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll$2(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        for (var children2 = select2.call(node2, node2.__data__, i, group), child, inherit2 = get$3(node2, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule$1(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node2);
      }
    }
  }
  return new Transition$1(subgroups, parents, name, id2);
}
var Selection$3 = selection$1.prototype.constructor;
function transition_selection$1() {
  return new Selection$3(this._groups, this._parents);
}
function styleNull$1(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$2(this, name), string1 = (this.style.removeProperty(name), styleValue$2(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove$3(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$3(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue$2(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction$3(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$2(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue$2(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove$1(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set$3(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove$3(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style$1(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss$1 : interpolate$1;
  return value == null ? this.styleTween(name, styleNull$1(name, i)).on("end.style." + name, styleRemove$3(name)) : typeof value === "function" ? this.styleTween(name, styleFunction$3(name, i, tweenValue$1(this, "style." + name, value))).each(styleMaybeRemove$1(this._id, name)) : this.styleTween(name, styleConstant$3(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate$1(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween$1(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate$1(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween$1(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween$1(name, value, priority == null ? "" : priority));
}
function textConstant$3(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$3(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text$1(value) {
  return this.tween("text", typeof value === "function" ? textFunction$3(tweenValue$1(this, "text", value)) : textConstant$3(value == null ? "" : value + ""));
}
function textInterpolate$1(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween$1(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate$1(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween$1(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween$1(value));
}
function transition_transition$1() {
  var name = this._name, id0 = this._id, id1 = newId$1();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        var inherit2 = get$3(node2, id0);
        schedule$1(node2, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition$1(groups, this._parents, name, id1);
}
function transition_end$1() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set$3(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id$1 = 0;
function Transition$1(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId$1() {
  return ++id$1;
}
var selection_prototype$1 = selection$1.prototype;
Transition$1.prototype = {
  constructor: Transition$1,
  select: transition_select$1,
  selectAll: transition_selectAll$1,
  selectChild: selection_prototype$1.selectChild,
  selectChildren: selection_prototype$1.selectChildren,
  filter: transition_filter$1,
  merge: transition_merge$1,
  selection: transition_selection$1,
  transition: transition_transition$1,
  call: selection_prototype$1.call,
  nodes: selection_prototype$1.nodes,
  node: selection_prototype$1.node,
  size: selection_prototype$1.size,
  empty: selection_prototype$1.empty,
  each: selection_prototype$1.each,
  on: transition_on$1,
  attr: transition_attr$1,
  attrTween: transition_attrTween$1,
  style: transition_style$1,
  styleTween: transition_styleTween$1,
  text: transition_text$1,
  textTween: transition_textTween$1,
  remove: transition_remove$1,
  tween: transition_tween$1,
  delay: transition_delay$1,
  duration: transition_duration$1,
  ease: transition_ease$1,
  easeVarying: transition_easeVarying$1,
  end: transition_end$1,
  [Symbol.iterator]: selection_prototype$1[Symbol.iterator]
};
function cubicInOut$1(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming$1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut$1
};
function inherit$1(node2, id2) {
  var timing;
  while (!(timing = node2.__transition) || !(timing = timing[id2])) {
    if (!(node2 = node2.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition$1(name) {
  var id2, timing;
  if (name instanceof Transition$1) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId$1(), (timing = defaultTiming$1).time = now$1(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        schedule$1(node2, name, id2, i, group, timing || inherit$1(node2, id2));
      }
    }
  }
  return new Transition$1(groups, this._parents, name, id2);
}
selection$1.prototype.interrupt = selection_interrupt$1;
selection$1.prototype.transition = selection_transition$1;
const constant$4 = (x) => () => x;
function ZoomEvent$1(type, {
  sourceEvent: sourceEvent2,
  target: target2,
  transform,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target2, enumerable: true, configurable: true },
    transform: { value: transform, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function Transform$1(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform$1.prototype = {
  constructor: Transform$1,
  scale: function(k) {
    return k === 1 ? this : new Transform$1(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform$1(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity$2 = new Transform$1(1, 0, 0);
Transform$1.prototype;
function nopropagation$2(event) {
  event.stopImmediatePropagation();
}
function noevent$3(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function defaultFilter$2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent$1() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform$1() {
  return this.__zoom || identity$2;
}
function defaultWheelDelta$1(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable$2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain$1(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom$1() {
  var filter2 = defaultFilter$2, extent = defaultExtent$1, constrain = defaultConstrain$1, wheelDelta = defaultWheelDelta$1, touchable = defaultTouchable$2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom$1, listeners = dispatch$2("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform$1).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform$1);
    if (collection !== selection2) {
      schedule2(collection, transform, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k, p, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom2.scaleTo = function(selection2, k, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom2.translateBy = function(selection2, x, y, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x, y, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity$2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform$1(k, transform.x, transform.y);
  }
  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform$1(transform.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule2(transition2, transform, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate2(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform$1(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select$2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent$1(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer$2(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k)
      return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt$1(this);
      g.start();
    }
    noevent$3(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments))
      return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select$2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer$2(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    dragDisable$1(event.view);
    nopropagation$2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt$1(this);
    g.start();
    function mousemoved(event2) {
      noevent$3(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer$2(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag$2(event2.view, g.moved);
      noevent$3(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var t0 = this.__zoom, p0 = pointer$2(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent$3(event);
    if (duration > 0)
      select$2(this).transition().duration(duration).call(schedule2, t1, p0, event);
    else
      select$2(this).call(zoom2.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation$2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$2(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2])
        g.touch1 = p, g.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2)
        touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt$1(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent$3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$2(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier)
        g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0)
      p = g.touch0[0], l = g.touch0[1];
    else
      return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation$2(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier)
        delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        delete g.touch1;
    }
    if (g.touch1 && !g.touch0)
      g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0)
      g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer$2(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select$2(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$4(+_), zoom2) : wheelDelta;
  };
  zoom2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$4(!!_), zoom2) : filter2;
  };
  zoom2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$4(!!_), zoom2) : touchable;
  };
  zoom2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom2) : constrain;
  };
  zoom2.duration = function(_) {
    return arguments.length ? (duration = +_, zoom2) : duration;
  };
  zoom2.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
  };
  return zoom2;
}
var Position = /* @__PURE__ */ ((Position2) => {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
  return Position2;
})(Position || {});
var SelectionMode = /* @__PURE__ */ ((SelectionMode2) => {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
  return SelectionMode2;
})(SelectionMode || {});
var ConnectionLineType = /* @__PURE__ */ ((ConnectionLineType2) => {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["SimpleBezier"] = "simple-bezier";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  return ConnectionLineType2;
})(ConnectionLineType || {});
var ConnectionMode = /* @__PURE__ */ ((ConnectionMode2) => {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
  return ConnectionMode2;
})(ConnectionMode || {});
var MarkerType = /* @__PURE__ */ ((MarkerType2) => {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
  return MarkerType2;
})(MarkerType || {});
var PanOnScrollMode = /* @__PURE__ */ ((PanOnScrollMode2) => {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
  return PanOnScrollMode2;
})(PanOnScrollMode || {});
var PanelPosition = /* @__PURE__ */ ((PanelPosition2) => {
  PanelPosition2["TopLeft"] = "top-left";
  PanelPosition2["TopCenter"] = "top-center";
  PanelPosition2["TopRight"] = "top-right";
  PanelPosition2["BottomLeft"] = "bottom-left";
  PanelPosition2["BottomCenter"] = "bottom-center";
  PanelPosition2["BottomRight"] = "bottom-right";
  return PanelPosition2;
})(PanelPosition || {});
function isInputDOMNode(event) {
  var _a, _b;
  const target2 = ((_b = (_a = event.composedPath) == null ? void 0 : _a.call(event)) == null ? void 0 : _b[0]) || event.target;
  const hasAttribute = typeof (target2 == null ? void 0 : target2.hasAttribute) === "function" ? target2.hasAttribute("contenteditable") : false;
  const closest = typeof (target2 == null ? void 0 : target2.closest) === "function" ? target2.closest(".nokey") : null;
  return ["INPUT", "SELECT", "TEXTAREA"].includes(target2 == null ? void 0 : target2.nodeName) || hasAttribute || !!closest;
}
function wasModifierPressed(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey;
}
function isKeyMatch(pressedKey, keyToMatch, pressedKeys, isKeyUp) {
  const keyCombination = keyToMatch.replace("+", "\n").replace("\n\n", "\n+").split("\n").map((k) => k.trim().toLowerCase());
  if (keyCombination.length === 1) {
    return pressedKey.toLowerCase() === keyToMatch.toLowerCase();
  }
  if (!isKeyUp) {
    pressedKeys.add(pressedKey.toLowerCase());
  }
  const isMatch = keyCombination.every(
    (key, index) => pressedKeys.has(key) && Array.from(pressedKeys.values())[index] === keyCombination[index]
  );
  if (isKeyUp) {
    pressedKeys.delete(pressedKey.toLowerCase());
  }
  return isMatch;
}
function createKeyPredicate(keyFilter, pressedKeys) {
  return (event) => {
    if (!event.code && !event.key) {
      return false;
    }
    const keyOrCode = useKeyOrCode(event.code, keyFilter);
    if (Array.isArray(keyFilter)) {
      return keyFilter.some((key) => isKeyMatch(event[keyOrCode], key, pressedKeys, event.type === "keyup"));
    }
    return isKeyMatch(event[keyOrCode], keyFilter, pressedKeys, event.type === "keyup");
  };
}
function useKeyOrCode(code, keysToWatch) {
  return keysToWatch.includes(code) ? "code" : "key";
}
function useKeyPress(keyFilter, options) {
  const actInsideInputWithModifier = toRef(() => toValue$1(options == null ? void 0 : options.actInsideInputWithModifier) ?? false);
  const target2 = toRef(() => toValue$1(options == null ? void 0 : options.target) ?? window);
  const isPressed = ref(toValue$1(keyFilter) === true);
  let modifierPressed = false;
  const pressedKeys = /* @__PURE__ */ new Set();
  let currentFilter = createKeyFilterFn(toValue$1(keyFilter));
  watch(
    () => toValue$1(keyFilter),
    (nextKeyFilter, previousKeyFilter) => {
      if (typeof previousKeyFilter === "boolean" && typeof nextKeyFilter !== "boolean") {
        reset();
      }
      currentFilter = createKeyFilterFn(nextKeyFilter);
    },
    {
      immediate: true
    }
  );
  useEventListener(["blur", "contextmenu"], reset);
  onKeyStroke(
    (...args) => currentFilter(...args),
    (e) => {
      modifierPressed = wasModifierPressed(e);
      const preventAction = (!modifierPressed || modifierPressed && !actInsideInputWithModifier.value) && isInputDOMNode(e);
      if (preventAction) {
        return;
      }
      e.preventDefault();
      isPressed.value = true;
    },
    { eventName: "keydown", target: target2 }
  );
  onKeyStroke(
    (...args) => currentFilter(...args),
    (e) => {
      if (isPressed.value) {
        const preventAction = (!modifierPressed || modifierPressed && !actInsideInputWithModifier.value) && isInputDOMNode(e);
        if (preventAction) {
          return;
        }
        modifierPressed = false;
        isPressed.value = false;
      }
    },
    { eventName: "keyup", target: target2 }
  );
  function reset() {
    modifierPressed = false;
    pressedKeys.clear();
    isPressed.value = toValue$1(keyFilter) === true;
  }
  function createKeyFilterFn(keyFilter2) {
    if (keyFilter2 === null) {
      reset();
      return () => false;
    }
    if (typeof keyFilter2 === "boolean") {
      reset();
      isPressed.value = keyFilter2;
      return () => false;
    }
    if (Array.isArray(keyFilter2) || typeof keyFilter2 === "string") {
      return createKeyPredicate(keyFilter2, pressedKeys);
    }
    return keyFilter2;
  }
  return isPressed;
}
const ARIA_NODE_DESC_KEY = "vue-flow__node-desc";
const ARIA_EDGE_DESC_KEY = "vue-flow__edge-desc";
const ARIA_LIVE_MESSAGE = "vue-flow__aria-live";
const elementSelectionKeys = ["Enter", " ", "Escape"];
const arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function nodeToRect(node2) {
  return {
    ...node2.computedPosition || { x: 0, y: 0 },
    width: node2.dimensions.width || 0,
    height: node2.dimensions.height || 0
  };
}
function getOverlappingArea(rectA, rectB) {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
}
function getDimensions(node2) {
  return {
    width: node2.offsetWidth,
    height: node2.offsetHeight
  };
}
function clamp(val, min = 0, max = 1) {
  return Math.min(Math.max(val, min), max);
}
function clampPosition(position2, extent) {
  return {
    x: clamp(position2.x, extent[0][0], extent[1][0]),
    y: clamp(position2.y, extent[0][1], extent[1][1])
  };
}
function getHostForElement(element) {
  const doc = element.getRootNode();
  if ("elementFromPoint" in doc) {
    return doc;
  }
  return window.document;
}
function isEdge(element) {
  return element && typeof element === "object" && "id" in element && "source" in element && "target" in element;
}
function isNode(element) {
  return element && typeof element === "object" && "id" in element && "position" in element && !isEdge(element);
}
function isGraphNode(element) {
  return isNode(element) && "computedPosition" in element;
}
function isNumeric(n) {
  return !Number.isNaN(n) && Number.isFinite(n);
}
function isRect(obj) {
  return isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
}
function parseNode(node2, existingNode, parentNode) {
  const initialState = {
    id: node2.id.toString(),
    type: node2.type ?? "default",
    dimensions: markRaw({
      width: 0,
      height: 0
    }),
    computedPosition: markRaw({
      z: 0,
      ...node2.position
    }),
    // todo: shouldn't be defined initially, as we want to use handleBounds to check if a node was actually initialized or not
    handleBounds: {
      source: [],
      target: []
    },
    draggable: void 0,
    selectable: void 0,
    connectable: void 0,
    focusable: void 0,
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: {
      x: 0,
      y: 0
    },
    data: isDef(node2.data) ? node2.data : {},
    events: markRaw(isDef(node2.events) ? node2.events : {})
  };
  return Object.assign(existingNode ?? initialState, node2, { id: node2.id.toString(), parentNode });
}
function parseEdge(edge2, existingEdge, defaultEdgeOptions) {
  var _a, _b;
  const initialState = {
    id: edge2.id.toString(),
    type: edge2.type ?? (existingEdge == null ? void 0 : existingEdge.type) ?? "default",
    source: edge2.source.toString(),
    target: edge2.target.toString(),
    sourceHandle: (_a = edge2.sourceHandle) == null ? void 0 : _a.toString(),
    targetHandle: (_b = edge2.targetHandle) == null ? void 0 : _b.toString(),
    updatable: edge2.updatable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.updatable),
    selectable: edge2.selectable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.selectable),
    focusable: edge2.focusable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.focusable),
    data: isDef(edge2.data) ? edge2.data : {},
    events: markRaw(isDef(edge2.events) ? edge2.events : {}),
    label: edge2.label ?? "",
    interactionWidth: edge2.interactionWidth ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.interactionWidth),
    ...defaultEdgeOptions ?? {}
  };
  return Object.assign(existingEdge ?? initialState, edge2, { id: edge2.id.toString() });
}
function getConnectedElements(nodeOrId, nodes, edges, dir) {
  const id2 = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const connectedIds = /* @__PURE__ */ new Set();
  const origin = dir === "source" ? "target" : "source";
  for (const edge2 of edges) {
    if (edge2[origin] === id2) {
      connectedIds.add(edge2[dir]);
    }
  }
  return nodes.filter((n) => connectedIds.has(n.id));
}
function getOutgoers(...args) {
  if (args.length === 3) {
    const [nodeOrId2, nodes, edges] = args;
    return getConnectedElements(nodeOrId2, nodes, edges, "target");
  }
  const [nodeOrId, elements] = args;
  const nodeId = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const outgoers = elements.filter((el) => isEdge(el) && el.source === nodeId);
  return outgoers.map((edge2) => elements.find((el) => isNode(el) && el.id === edge2.target));
}
function getIncomers(...args) {
  if (args.length === 3) {
    const [nodeOrId2, nodes, edges] = args;
    return getConnectedElements(nodeOrId2, nodes, edges, "source");
  }
  const [nodeOrId, elements] = args;
  const nodeId = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const incomers = elements.filter((el) => isEdge(el) && el.target === nodeId);
  return incomers.map((edge2) => elements.find((el) => isNode(el) && el.id === edge2.source));
}
function getEdgeId({ source, sourceHandle, target: target2, targetHandle }) {
  return `vueflow__edge-${source}${sourceHandle ?? ""}-${target2}${targetHandle ?? ""}`;
}
function connectionExists(edge2, elements) {
  return elements.some(
    (el) => isEdge(el) && el.source === edge2.source && el.target === edge2.target && (el.sourceHandle === edge2.sourceHandle || !el.sourceHandle && !edge2.sourceHandle) && (el.targetHandle === edge2.targetHandle || !el.targetHandle && !edge2.targetHandle)
  );
}
function rendererPointToPoint({ x, y }, { x: tx, y: ty, zoom: tScale }) {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
}
function pointToRendererPoint({ x, y }, { x: tx, y: ty, zoom: tScale }, snapToGrid = false, snapGrid = [1, 1]) {
  const position2 = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  return snapToGrid ? snapPosition(position2, snapGrid) : position2;
}
function getBoundsOfBoxes(box1, box2) {
  return {
    x: Math.min(box1.x, box2.x),
    y: Math.min(box1.y, box2.y),
    x2: Math.max(box1.x2, box2.x2),
    y2: Math.max(box1.y2, box2.y2)
  };
}
function rectToBox({ x, y, width, height }) {
  return {
    x,
    y,
    x2: x + width,
    y2: y + height
  };
}
function boxToRect({ x, y, x2, y2 }) {
  return {
    x,
    y,
    width: x2 - x,
    height: y2 - y
  };
}
function getBoundsofRects(rect1, rect2) {
  return boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
}
function getRectOfNodes(nodes) {
  let box = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let i = 0; i < nodes.length; i++) {
    const node2 = nodes[i];
    box = getBoundsOfBoxes(
      box,
      rectToBox({
        ...node2.computedPosition,
        ...node2.dimensions
      })
    );
  }
  return boxToRect(box);
}
function getNodesInside(nodes, rect, viewport = { x: 0, y: 0, zoom: 1 }, partially = false, excludeNonSelectableNodes = false) {
  const paneRect = {
    ...pointToRendererPoint(rect, viewport),
    width: rect.width / viewport.zoom,
    height: rect.height / viewport.zoom
  };
  const visibleNodes = [];
  for (const node2 of nodes) {
    const { dimensions, selectable = true, hidden = false } = node2;
    const width = dimensions.width ?? node2.width ?? null;
    const height = dimensions.height ?? node2.height ?? null;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      continue;
    }
    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node2));
    const notInitialized = width === null || height === null;
    const partiallyVisible = partially && overlappingArea > 0;
    const area = (width ?? 0) * (height ?? 0);
    const isVisible = notInitialized || partiallyVisible || overlappingArea >= area;
    if (isVisible || node2.dragging) {
      visibleNodes.push(node2);
    }
  }
  return visibleNodes;
}
function getConnectedEdges(nodesOrId, edges) {
  const nodeIds = /* @__PURE__ */ new Set();
  if (typeof nodesOrId === "string") {
    nodeIds.add(nodesOrId);
  } else if (nodesOrId.length >= 1) {
    for (const n of nodesOrId) {
      nodeIds.add(n.id);
    }
  }
  return edges.filter((edge2) => nodeIds.has(edge2.source) || nodeIds.has(edge2.target));
}
function getTransformForBounds(bounds, width, height, minZoom, maxZoom, padding = 0.1, offset = { x: 0, y: 0 }) {
  const xZoom = width / (bounds.width * (1 + padding));
  const yZoom = height / (bounds.height * (1 + padding));
  const zoom2 = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom2, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom + (offset.x ?? 0);
  const y = height / 2 - boundsCenterY * clampedZoom + (offset.y ?? 0);
  return { x, y, zoom: clampedZoom };
}
function getXYZPos(parentPos, computedPosition) {
  return {
    x: computedPosition.x + parentPos.x,
    y: computedPosition.y + parentPos.y,
    z: (parentPos.z > computedPosition.z ? parentPos.z : computedPosition.z) + 1
  };
}
function isParentSelected(node2, findNode) {
  if (!node2.parentNode) {
    return false;
  }
  const parent = findNode(node2.parentNode);
  if (!parent) {
    return false;
  }
  if (parent.selected) {
    return true;
  }
  return isParentSelected(parent, findNode);
}
function getMarkerId(marker, vueFlowId) {
  if (typeof marker === "undefined") {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = vueFlowId ? `${vueFlowId}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
}
function calcAutoPanVelocity(value, min, max) {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, min) / min;
  }
  if (value > max) {
    return -clamp(Math.abs(value - max), 1, min) / min;
  }
  return 0;
}
function calcAutoPan(pos, bounds, speed = 15, distance2 = 40) {
  const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
  const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
  return [xMovement, yMovement];
}
function handleParentExpand(updateItem, parent) {
  if (parent) {
    const extendWidth = updateItem.position.x + updateItem.dimensions.width - parent.dimensions.width;
    const extendHeight = updateItem.position.y + updateItem.dimensions.height - parent.dimensions.height;
    if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
      let parentStyles = {};
      if (typeof parent.style === "function") {
        parentStyles = { ...parent.style(parent) };
      } else if (parent.style) {
        parentStyles = { ...parent.style };
      }
      parentStyles.width = parentStyles.width ?? `${parent.dimensions.width}px`;
      parentStyles.height = parentStyles.height ?? `${parent.dimensions.height}px`;
      if (extendWidth > 0) {
        if (typeof parentStyles.width === "string") {
          const currWidth = Number(parentStyles.width.replace("px", ""));
          parentStyles.width = `${currWidth + extendWidth}px`;
        } else {
          parentStyles.width += extendWidth;
        }
      }
      if (extendHeight > 0) {
        if (typeof parentStyles.height === "string") {
          const currWidth = Number(parentStyles.height.replace("px", ""));
          parentStyles.height = `${currWidth + extendHeight}px`;
        } else {
          parentStyles.height += extendHeight;
        }
      }
      if (updateItem.position.x < 0) {
        const xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        if (typeof parentStyles.width === "string") {
          const currWidth = Number(parentStyles.width.replace("px", ""));
          parentStyles.width = `${currWidth + xDiff}px`;
        } else {
          parentStyles.width += xDiff;
        }
        updateItem.position.x = 0;
      }
      if (updateItem.position.y < 0) {
        const yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        if (typeof parentStyles.height === "string") {
          const currWidth = Number(parentStyles.height.replace("px", ""));
          parentStyles.height = `${currWidth + yDiff}px`;
        } else {
          parentStyles.height += yDiff;
        }
        updateItem.position.y = 0;
      }
      parent.dimensions.width = Number(parentStyles.width.toString().replace("px", ""));
      parent.dimensions.height = Number(parentStyles.height.toString().replace("px", ""));
      if (typeof parent.style === "function") {
        parent.style = (p) => {
          const styleFunc = parent.style;
          return {
            ...styleFunc(p),
            ...parentStyles
          };
        };
      } else {
        parent.style = {
          ...parent.style,
          ...parentStyles
        };
      }
    }
  }
}
function applyChanges(changes, elements) {
  var _a, _b;
  const addRemoveChanges = changes.filter((c) => c.type === "add" || c.type === "remove");
  for (const change of addRemoveChanges) {
    if (change.type === "add") {
      const index = elements.findIndex((el) => el.id === change.item.id);
      if (index === -1) {
        elements.push(change.item);
      }
    } else if (change.type === "remove") {
      const index = elements.findIndex((el) => el.id === change.id);
      if (index !== -1) {
        elements.splice(index, 1);
      }
    }
  }
  const elementIds = elements.map((el) => el.id);
  for (const element of elements) {
    for (const currentChange of changes) {
      if (currentChange.id !== element.id) {
        continue;
      }
      switch (currentChange.type) {
        case "select":
          element.selected = currentChange.selected;
          break;
        case "position":
          if (isGraphNode(element)) {
            if (typeof currentChange.position !== "undefined") {
              element.position = currentChange.position;
            }
            if (typeof currentChange.dragging !== "undefined") {
              element.dragging = currentChange.dragging;
            }
            if (element.expandParent && element.parentNode) {
              const parent = elements[elementIds.indexOf(element.parentNode)];
              if (parent && isGraphNode(parent)) {
                handleParentExpand(element, parent);
              }
            }
          }
          break;
        case "dimensions":
          if (isGraphNode(element)) {
            if (typeof currentChange.dimensions !== "undefined") {
              element.dimensions = currentChange.dimensions;
            }
            if (typeof currentChange.updateStyle !== "undefined" && currentChange.updateStyle) {
              element.style = {
                ...element.style || {},
                width: `${(_a = currentChange.dimensions) == null ? void 0 : _a.width}px`,
                height: `${(_b = currentChange.dimensions) == null ? void 0 : _b.height}px`
              };
            }
            if (typeof currentChange.resizing !== "undefined") {
              element.resizing = currentChange.resizing;
            }
            if (element.expandParent && element.parentNode) {
              const parent = elements[elementIds.indexOf(element.parentNode)];
              if (parent && isGraphNode(parent)) {
                const parentInit = !!parent.dimensions.width && !!parent.dimensions.height;
                if (!parentInit) {
                  nextTick(() => {
                    handleParentExpand(element, parent);
                  });
                } else {
                  handleParentExpand(element, parent);
                }
              }
            }
          }
          break;
      }
    }
  }
  return elements;
}
function createSelectionChange(id2, selected2) {
  return {
    id: id2,
    type: "select",
    selected: selected2
  };
}
function createAdditionChange(item) {
  return {
    item,
    type: "add"
  };
}
function createNodeRemoveChange(id2) {
  return {
    id: id2,
    type: "remove"
  };
}
function createEdgeRemoveChange(id2, source, target2, sourceHandle, targetHandle) {
  return {
    id: id2,
    source,
    target: target2,
    sourceHandle: sourceHandle || null,
    targetHandle: targetHandle || null,
    type: "remove"
  };
}
function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
  const changes = [];
  for (const [id2, item] of items) {
    const willBeSelected = selectedIds.has(id2);
    if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
      if (mutateItem) {
        item.selected = willBeSelected;
      }
      changes.push(createSelectionChange(item.id, willBeSelected));
    }
  }
  return changes;
}
function createExtendedEventHook(defaultHandler) {
  const fns = /* @__PURE__ */ new Set();
  let hasDefaultHandler = false;
  const hasListeners = () => fns.size > 0;
  if (defaultHandler) {
    hasDefaultHandler = true;
    fns.add(defaultHandler);
  }
  const off = (fn) => {
    fns.delete(fn);
  };
  const on = (fn) => {
    if (defaultHandler && hasDefaultHandler) {
      fns.delete(defaultHandler);
    }
    fns.add(fn);
    const offFn = () => {
      off(fn);
      if (defaultHandler && hasDefaultHandler) {
        fns.add(defaultHandler);
      }
    };
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger2 = (param) => {
    return Promise.all(Array.from(fns).map((fn) => fn(param)));
  };
  return {
    on,
    off,
    trigger: trigger2,
    hasListeners,
    fns
  };
}
function hasSelector(target2, selector2, node2) {
  let current = target2;
  do {
    if (current && current.matches(selector2)) {
      return true;
    } else if (current === node2) {
      return false;
    }
    current = current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodes, nodesDraggable, mousePos, findNode, nodeId) {
  var _a, _b;
  const dragItems = [];
  for (const node2 of nodes) {
    if ((node2.selected || node2.id === nodeId) && (!node2.parentNode || !isParentSelected(node2, findNode)) && (node2.draggable || nodesDraggable && typeof node2.draggable === "undefined")) {
      dragItems.push(
        markRaw({
          id: node2.id,
          position: node2.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - ((_a = node2.computedPosition) == null ? void 0 : _a.x) || 0,
            y: mousePos.y - ((_b = node2.computedPosition) == null ? void 0 : _b.y) || 0
          },
          from: node2.computedPosition,
          extent: node2.extent,
          parentNode: node2.parentNode,
          dimensions: node2.dimensions,
          expandParent: node2.expandParent
        })
      );
    }
  }
  return dragItems;
}
function getEventHandlerParams({
  id: id2,
  dragItems,
  findNode
}) {
  const extendedDragItems = [];
  for (const dragItem of dragItems) {
    const node2 = findNode(dragItem.id);
    if (node2) {
      extendedDragItems.push(node2);
    }
  }
  return [id2 ? extendedDragItems.find((n) => n.id === id2) : extendedDragItems[0], extendedDragItems];
}
function getExtentPadding(padding) {
  if (Array.isArray(padding)) {
    switch (padding.length) {
      case 1:
        return [padding[0], padding[0], padding[0], padding[0]];
      case 2:
        return [padding[0], padding[1], padding[0], padding[1]];
      case 3:
        return [padding[0], padding[1], padding[2], padding[1]];
      case 4:
        return padding;
      default:
        return [0, 0, 0, 0];
    }
  }
  return [padding, padding, padding, padding];
}
function getParentExtent(currentExtent, node2, parent) {
  const [top2, right2, bottom2, left2] = typeof currentExtent !== "string" ? getExtentPadding(currentExtent.padding) : [0, 0, 0, 0];
  if (parent && typeof parent.computedPosition.x !== "undefined" && typeof parent.computedPosition.y !== "undefined" && typeof parent.dimensions.width !== "undefined" && typeof parent.dimensions.height !== "undefined") {
    return [
      [parent.computedPosition.x + left2, parent.computedPosition.y + top2],
      [
        parent.computedPosition.x + parent.dimensions.width - right2,
        parent.computedPosition.y + parent.dimensions.height - bottom2
      ]
    ];
  }
  return false;
}
function getExtent(item, triggerError, extent, parent) {
  let currentExtent = item.extent || extent;
  if ((currentExtent === "parent" || !Array.isArray(currentExtent) && (currentExtent == null ? void 0 : currentExtent.range) === "parent") && !item.expandParent) {
    if (item.parentNode && parent && item.dimensions.width && item.dimensions.height) {
      const parentExtent = getParentExtent(currentExtent, item, parent);
      if (parentExtent) {
        currentExtent = parentExtent;
      }
    } else {
      triggerError(new VueFlowError(ErrorCode.NODE_EXTENT_INVALID, item.id));
      currentExtent = extent;
    }
  } else if (Array.isArray(currentExtent)) {
    const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
    const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
    currentExtent = [
      [currentExtent[0][0] + parentX, currentExtent[0][1] + parentY],
      [currentExtent[1][0] + parentX, currentExtent[1][1] + parentY]
    ];
  } else if (currentExtent !== "parent" && (currentExtent == null ? void 0 : currentExtent.range) && Array.isArray(currentExtent.range)) {
    const [top2, right2, bottom2, left2] = getExtentPadding(currentExtent.padding);
    const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
    const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
    currentExtent = [
      [currentExtent.range[0][0] + parentX + left2, currentExtent.range[0][1] + parentY + top2],
      [currentExtent.range[1][0] + parentX - right2, currentExtent.range[1][1] + parentY - bottom2]
    ];
  }
  return currentExtent === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : currentExtent;
}
function clampNodeExtent({ width, height }, extent) {
  return [extent[0], [extent[1][0] - (width || 0), extent[1][1] - (height || 0)]];
}
function calcNextPosition(node2, nextPosition, triggerError, nodeExtent, parentNode) {
  const extent = clampNodeExtent(node2.dimensions, getExtent(node2, triggerError, nodeExtent, parentNode));
  const clampedPos = clampPosition(nextPosition, extent);
  return {
    position: {
      x: clampedPos.x - ((parentNode == null ? void 0 : parentNode.computedPosition.x) || 0),
      y: clampedPos.y - ((parentNode == null ? void 0 : parentNode.computedPosition.y) || 0)
    },
    computedPosition: clampedPos
  };
}
function getHandlePosition(node2, handle2, fallbackPosition = Position.Left, center = false) {
  const x = ((handle2 == null ? void 0 : handle2.x) ?? 0) + node2.computedPosition.x;
  const y = ((handle2 == null ? void 0 : handle2.y) ?? 0) + node2.computedPosition.y;
  const { width, height } = handle2 ?? getNodeDimensions(node2);
  if (center) {
    return { x: x + width / 2, y: y + height / 2 };
  }
  const position2 = (handle2 == null ? void 0 : handle2.position) ?? fallbackPosition;
  switch (position2) {
    case Position.Top:
      return { x: x + width / 2, y };
    case Position.Right:
      return { x: x + width, y: y + height / 2 };
    case Position.Bottom:
      return { x: x + width / 2, y: y + height };
    case Position.Left:
      return { x, y: y + height / 2 };
  }
}
function getEdgeHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
}
function isEdgeVisible({
  sourcePos,
  targetPos,
  sourceWidth,
  sourceHeight,
  targetWidth,
  targetHeight,
  width,
  height,
  viewport
}) {
  const edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewBox = rectToBox({
    x: (0 - viewport.x) / viewport.zoom,
    y: (0 - viewport.y) / viewport.zoom,
    width: width / viewport.zoom,
    height: height / viewport.zoom
  });
  const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  const overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getEdgeZIndex(edge2, findNode, elevateEdgesOnSelect = false) {
  const hasZIndex = typeof edge2.zIndex === "number";
  let z = hasZIndex ? edge2.zIndex : 0;
  const source = findNode(edge2.source);
  const target2 = findNode(edge2.target);
  if (!source || !target2) {
    return 0;
  }
  if (elevateEdgesOnSelect) {
    z = hasZIndex ? edge2.zIndex : Math.max(source.computedPosition.z || 0, target2.computedPosition.z || 0);
  }
  return z;
}
var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
  ErrorCode2["MISSING_STYLES"] = "MISSING_STYLES";
  ErrorCode2["MISSING_VIEWPORT_DIMENSIONS"] = "MISSING_VIEWPORT_DIMENSIONS";
  ErrorCode2["NODE_INVALID"] = "NODE_INVALID";
  ErrorCode2["NODE_NOT_FOUND"] = "NODE_NOT_FOUND";
  ErrorCode2["NODE_MISSING_PARENT"] = "NODE_MISSING_PARENT";
  ErrorCode2["NODE_TYPE_MISSING"] = "NODE_TYPE_MISSING";
  ErrorCode2["NODE_EXTENT_INVALID"] = "NODE_EXTENT_INVALID";
  ErrorCode2["EDGE_INVALID"] = "EDGE_INVALID";
  ErrorCode2["EDGE_NOT_FOUND"] = "EDGE_NOT_FOUND";
  ErrorCode2["EDGE_SOURCE_MISSING"] = "EDGE_SOURCE_MISSING";
  ErrorCode2["EDGE_TARGET_MISSING"] = "EDGE_TARGET_MISSING";
  ErrorCode2["EDGE_TYPE_MISSING"] = "EDGE_TYPE_MISSING";
  ErrorCode2["EDGE_SOURCE_TARGET_SAME"] = "EDGE_SOURCE_TARGET_SAME";
  ErrorCode2["EDGE_SOURCE_TARGET_MISSING"] = "EDGE_SOURCE_TARGET_MISSING";
  ErrorCode2["EDGE_ORPHANED"] = "EDGE_ORPHANED";
  ErrorCode2["USEVUEFLOW_OPTIONS"] = "USEVUEFLOW_OPTIONS";
  return ErrorCode2;
})(ErrorCode || {});
const messages = {
  [
    "MISSING_STYLES"
    /* MISSING_STYLES */
  ]: () => `It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly`,
  [
    "MISSING_VIEWPORT_DIMENSIONS"
    /* MISSING_VIEWPORT_DIMENSIONS */
  ]: () => "The Vue Flow parent container needs a width and a height to render the graph",
  [
    "NODE_INVALID"
    /* NODE_INVALID */
  ]: (id2) => `Node is invalid
Node: ${id2}`,
  [
    "NODE_NOT_FOUND"
    /* NODE_NOT_FOUND */
  ]: (id2) => `Node not found
Node: ${id2}`,
  [
    "NODE_MISSING_PARENT"
    /* NODE_MISSING_PARENT */
  ]: (id2, parentId) => `Node is missing a parent
Node: ${id2}
Parent: ${parentId}`,
  [
    "NODE_TYPE_MISSING"
    /* NODE_TYPE_MISSING */
  ]: (type) => `Node type is missing
Type: ${type}`,
  [
    "NODE_EXTENT_INVALID"
    /* NODE_EXTENT_INVALID */
  ]: (id2) => `Only child nodes can use a parent extent
Node: ${id2}`,
  [
    "EDGE_INVALID"
    /* EDGE_INVALID */
  ]: (id2) => `An edge needs a source and a target
Edge: ${id2}`,
  [
    "EDGE_SOURCE_MISSING"
    /* EDGE_SOURCE_MISSING */
  ]: (id2, source) => `Edge source is missing
Edge: ${id2} 
Source: ${source}`,
  [
    "EDGE_TARGET_MISSING"
    /* EDGE_TARGET_MISSING */
  ]: (id2, target2) => `Edge target is missing
Edge: ${id2} 
Target: ${target2}`,
  [
    "EDGE_TYPE_MISSING"
    /* EDGE_TYPE_MISSING */
  ]: (type) => `Edge type is missing
Type: ${type}`,
  [
    "EDGE_SOURCE_TARGET_SAME"
    /* EDGE_SOURCE_TARGET_SAME */
  ]: (id2, source, target2) => `Edge source and target are the same
Edge: ${id2} 
Source: ${source} 
Target: ${target2}`,
  [
    "EDGE_SOURCE_TARGET_MISSING"
    /* EDGE_SOURCE_TARGET_MISSING */
  ]: (id2, source, target2) => `Edge source or target is missing
Edge: ${id2} 
Source: ${source} 
Target: ${target2}`,
  [
    "EDGE_ORPHANED"
    /* EDGE_ORPHANED */
  ]: (id2) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${id2}`,
  [
    "EDGE_NOT_FOUND"
    /* EDGE_NOT_FOUND */
  ]: (id2) => `Edge not found
Edge: ${id2}`,
  // deprecation errors
  [
    "USEVUEFLOW_OPTIONS"
    /* USEVUEFLOW_OPTIONS */
  ]: () => `The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead`
};
class VueFlowError extends Error {
  constructor(code, ...args) {
    var _a;
    super((_a = messages[code]) == null ? void 0 : _a.call(messages, ...args));
    this.name = "VueFlowError";
    this.code = code;
    this.args = args;
  }
}
function isMouseEvent(event) {
  return "clientX" in event;
}
function isUseDragEvent(event) {
  return "sourceEvent" in event;
}
function getEventPosition(event, bounds) {
  var _a, _b;
  const isMouse = isMouseEvent(event);
  const evtX = isMouse ? event.clientX : (_a = event.touches) == null ? void 0 : _a[0].clientX;
  const evtY = isMouse ? event.clientY : (_b = event.touches) == null ? void 0 : _b[0].clientY;
  return {
    x: evtX - ((bounds == null ? void 0 : bounds.left) ?? 0),
    y: evtY - ((bounds == null ? void 0 : bounds.top) ?? 0)
  };
}
const isMacOs = () => {
  var _a;
  return typeof navigator !== "undefined" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
};
function getNodeDimensions(node2) {
  var _a, _b;
  return {
    width: ((_a = node2.dimensions) == null ? void 0 : _a.width) ?? node2.width ?? 0,
    height: ((_b = node2.dimensions) == null ? void 0 : _b.height) ?? node2.height ?? 0
  };
}
function snapPosition(position2, snapGrid = [1, 1]) {
  return {
    x: snapGrid[0] * Math.round(position2.x / snapGrid[0]),
    y: snapGrid[1] * Math.round(position2.y / snapGrid[1])
  };
}
const alwaysValid$1 = () => true;
function resetRecentHandle(handleDomNode) {
  handleDomNode == null ? void 0 : handleDomNode.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function getNodesWithinDistance(position2, nodeLookup, distance2) {
  const nodes = [];
  const rect = {
    x: position2.x - distance2,
    y: position2.y - distance2,
    width: distance2 * 2,
    height: distance2 * 2
  };
  for (const node2 of nodeLookup.values()) {
    if (getOverlappingArea(rect, nodeToRect(node2)) > 0) {
      nodes.push(node2);
    }
  }
  return nodes;
}
const ADDITIONAL_DISTANCE = 250;
function getClosestHandle(position2, connectionRadius, nodeLookup, fromHandle) {
  var _a, _b;
  let closestHandles = [];
  let minDistance = Number.POSITIVE_INFINITY;
  const closeNodes = getNodesWithinDistance(position2, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
  for (const node2 of closeNodes) {
    const allHandles = [...((_a = node2.handleBounds) == null ? void 0 : _a.source) ?? [], ...((_b = node2.handleBounds) == null ? void 0 : _b.target) ?? []];
    for (const handle2 of allHandles) {
      if (fromHandle.nodeId === handle2.nodeId && fromHandle.type === handle2.type && fromHandle.id === handle2.id) {
        continue;
      }
      const { x, y } = getHandlePosition(node2, handle2, handle2.position, true);
      const distance2 = Math.sqrt((x - position2.x) ** 2 + (y - position2.y) ** 2);
      if (distance2 > connectionRadius) {
        continue;
      }
      if (distance2 < minDistance) {
        closestHandles = [{ ...handle2, x, y }];
        minDistance = distance2;
      } else if (distance2 === minDistance) {
        closestHandles.push({ ...handle2, x, y });
      }
    }
  }
  if (!closestHandles.length) {
    return null;
  }
  if (closestHandles.length > 1) {
    const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
    return closestHandles.find((handle2) => handle2.type === oppositeHandleType) ?? closestHandles[0];
  }
  return closestHandles[0];
}
function isValidHandle(event, {
  handle: handle2,
  connectionMode,
  fromNodeId,
  fromHandleId,
  fromType,
  doc,
  lib: lib2,
  flowId,
  isValidConnection = alwaysValid$1
}, edges, nodes, findNode) {
  const isTarget = fromType === "target";
  const handleDomNode = handle2 ? doc.querySelector(`.${lib2}-flow__handle[data-id="${flowId}-${handle2 == null ? void 0 : handle2.nodeId}-${handle2 == null ? void 0 : handle2.id}-${handle2 == null ? void 0 : handle2.type}"]`) : null;
  const { x, y } = getEventPosition(event);
  const handleBelow = doc.elementFromPoint(x, y);
  const handleToCheck = (handleBelow == null ? void 0 : handleBelow.classList.contains(`${lib2}-flow__handle`)) ? handleBelow : handleDomNode;
  const result = {
    handleDomNode: handleToCheck,
    isValid: false,
    connection: null,
    toHandle: null
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    if (!handleNodeId || !handleType) {
      return result;
    }
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    result.isValid = isValid && isValidConnection(connection, {
      nodes,
      edges,
      sourceNode: findNode(fromNodeId),
      targetNode: findNode(handleNodeId)
    });
    result.toHandle = handle2;
  }
  return result;
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("target")) {
    return "target";
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("source")) {
    return "source";
  }
  return null;
}
function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
  let connectionStatus = null;
  if (isHandleValid) {
    connectionStatus = "valid";
  } else if (isInsideConnectionRadius && !isHandleValid) {
    connectionStatus = "invalid";
  }
  return connectionStatus;
}
function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
  let isValid = null;
  if (isHandleValid) {
    isValid = true;
  } else if (isInsideConnectionRadius && !isHandleValid) {
    isValid = false;
  }
  return isValid;
}
function getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
  var _a, _b, _c;
  const node2 = nodeLookup.get(nodeId);
  if (!node2) {
    return null;
  }
  const handles = connectionMode === ConnectionMode.Strict ? (_a = node2.handleBounds) == null ? void 0 : _a[handleType] : [...((_b = node2.handleBounds) == null ? void 0 : _b.source) ?? [], ...((_c = node2.handleBounds) == null ? void 0 : _c.target) ?? []];
  const handle2 = (handleId ? handles == null ? void 0 : handles.find((h2) => h2.id === handleId) : handles == null ? void 0 : handles[0]) ?? null;
  return handle2 && withAbsolutePosition ? { ...handle2, ...getHandlePosition(node2, handle2, handle2.position, true) } : handle2;
}
const oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
const productionEnvs = ["production", "prod"];
function warn(message, ...args) {
  if (isDev()) {
    console.warn(`[Vue Flow]: ${message}`, ...args);
  }
}
function isDev() {
  return !productionEnvs.includes("production");
}
function getHandleBounds(type, nodeElement, nodeBounds, zoom2) {
  const handles = nodeElement.querySelectorAll(`.vue-flow__handle.${type}`);
  const handlesArray = Array.from(handles);
  return handlesArray.map((handle2) => {
    const handleBounds = handle2.getBoundingClientRect();
    return {
      id: handle2.getAttribute("data-handleid"),
      position: handle2.getAttribute("data-handlepos"),
      nodeId: handle2.getAttribute("data-nodeid"),
      type,
      x: (handleBounds.left - nodeBounds.left) / zoom2,
      y: (handleBounds.top - nodeBounds.top) / zoom2,
      ...getDimensions(handle2)
    };
  });
}
function handleNodeClick(node2, multiSelectionActive, addSelectedNodes, removeSelectedNodes, nodesSelectionActive, unselect = false, nodeEl) {
  nodesSelectionActive.value = false;
  if (!node2.selected) {
    addSelectedNodes([node2]);
  } else if (unselect || node2.selected && multiSelectionActive) {
    removeSelectedNodes([node2]);
    nextTick(() => {
      nodeEl.blur();
    });
  }
}
function isDef(val) {
  const unrefVal = unref(val);
  return typeof unrefVal !== "undefined";
}
function addEdgeToStore(edgeParams, edges, triggerError, defaultEdgeOptions) {
  if (!edgeParams || !edgeParams.source || !edgeParams.target) {
    triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, (edgeParams == null ? void 0 : edgeParams.id) ?? `[ID UNKNOWN]`));
    return false;
  }
  let edge2;
  if (isEdge(edgeParams)) {
    edge2 = edgeParams;
  } else {
    edge2 = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  edge2 = parseEdge(edge2, void 0, defaultEdgeOptions);
  if (connectionExists(edge2, edges)) {
    return false;
  }
  return edge2;
}
function updateEdgeAction(edge2, newConnection, prevEdge, shouldReplaceId, triggerError) {
  if (!newConnection.source || !newConnection.target) {
    triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, edge2.id));
    return false;
  }
  if (!prevEdge) {
    triggerError(new VueFlowError(ErrorCode.EDGE_NOT_FOUND, edge2.id));
    return false;
  }
  const { id: id2, ...rest } = edge2;
  return {
    ...rest,
    id: shouldReplaceId ? getEdgeId(newConnection) : id2,
    source: newConnection.source,
    target: newConnection.target,
    sourceHandle: newConnection.sourceHandle,
    targetHandle: newConnection.targetHandle
  };
}
function createGraphNodes(nodes, findNode, triggerError) {
  const parentNodes = {};
  const nextNodes = [];
  for (let i = 0; i < nodes.length; ++i) {
    const node2 = nodes[i];
    if (!isNode(node2)) {
      triggerError(
        new VueFlowError(ErrorCode.NODE_INVALID, node2 == null ? void 0 : node2.id) || `[ID UNKNOWN|INDEX ${i}]`
      );
      continue;
    }
    const parsed = parseNode(node2, findNode(node2.id), node2.parentNode);
    if (node2.parentNode) {
      parentNodes[node2.parentNode] = true;
    }
    nextNodes[i] = parsed;
  }
  for (const node2 of nextNodes) {
    const parentNode = findNode(node2.parentNode) || nextNodes.find((n) => n.id === node2.parentNode);
    if (node2.parentNode && !parentNode) {
      triggerError(new VueFlowError(ErrorCode.NODE_MISSING_PARENT, node2.id, node2.parentNode));
    }
    if (node2.parentNode || parentNodes[node2.id]) {
      if (parentNodes[node2.id]) {
        node2.isParent = true;
      }
      if (parentNode) {
        parentNode.isParent = true;
      }
    }
  }
  return nextNodes;
}
function addConnectionToLookup(type, connection, connectionKey, connectionLookup, nodeId, handleId) {
  let key = nodeId;
  const nodeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, nodeMap.set(connectionKey, connection));
  key = `${nodeId}-${type}`;
  const typeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, typeMap.set(connectionKey, connection));
  if (handleId) {
    key = `${nodeId}-${type}-${handleId}`;
    const handleMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
    connectionLookup.set(key, handleMap.set(connectionKey, connection));
  }
}
function updateConnectionLookup(connectionLookup, edgeLookup, edges) {
  connectionLookup.clear();
  edgeLookup.clear();
  for (const edge2 of edges) {
    const { source: sourceNode, target: targetNode, sourceHandle = null, targetHandle = null } = edge2;
    const connection = { edgeId: edge2.id, source: sourceNode, target: targetNode, sourceHandle, targetHandle };
    const sourceKey = `${sourceNode}-${sourceHandle}--${targetNode}-${targetHandle}`;
    const targetKey = `${targetNode}-${targetHandle}--${sourceNode}-${sourceHandle}`;
    addConnectionToLookup("source", connection, targetKey, connectionLookup, sourceNode, sourceHandle);
    addConnectionToLookup("target", connection, sourceKey, connectionLookup, targetNode, targetHandle);
    edgeLookup.set(edge2.id, edge2);
  }
}
function areSetsEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
function createGraphEdges(nextEdges, isValidConnection, findNode, findEdge, onError, defaultEdgeOptions, nodes, edges) {
  const validEdges = [];
  for (const edgeOrConnection of nextEdges) {
    const edge2 = isEdge(edgeOrConnection) ? edgeOrConnection : addEdgeToStore(edgeOrConnection, edges, onError, defaultEdgeOptions);
    if (!edge2) {
      continue;
    }
    const sourceNode = findNode(edge2.source);
    const targetNode = findNode(edge2.target);
    if (!sourceNode || !targetNode) {
      onError(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge2.id, edge2.source, edge2.target));
      continue;
    }
    if (!sourceNode) {
      onError(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge2.id, edge2.source));
      continue;
    }
    if (!targetNode) {
      onError(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge2.id, edge2.target));
      continue;
    }
    if (isValidConnection) {
      const isValid = isValidConnection(edge2, {
        edges,
        nodes,
        sourceNode,
        targetNode
      });
      if (!isValid) {
        onError(new VueFlowError(ErrorCode.EDGE_INVALID, edge2.id));
        continue;
      }
    }
    const existingEdge = findEdge(edge2.id);
    validEdges.push({
      ...parseEdge(edge2, existingEdge, defaultEdgeOptions),
      sourceNode,
      targetNode
    });
  }
  return validEdges;
}
const VueFlow = Symbol("vueFlow");
const NodeId = Symbol("nodeId");
const NodeRef = Symbol("nodeRef");
const EdgeId = Symbol("edgeId");
const EdgeRef = Symbol("edgeRef");
const Slots$1 = Symbol("slots");
function useDrag(params) {
  const {
    vueFlowRef,
    snapToGrid,
    snapGrid,
    noDragClassName,
    nodes,
    nodeExtent,
    nodeDragThreshold,
    viewport,
    autoPanOnNodeDrag,
    autoPanSpeed,
    nodesDraggable,
    panBy,
    findNode,
    multiSelectionActive,
    nodesSelectionActive,
    selectNodesOnDrag,
    removeSelectedElements,
    addSelectedNodes,
    updateNodePositions,
    emits
  } = useVueFlow();
  const { onStart, onDrag, onStop, onClick, el, disabled: disabled2, id: id2, selectable, dragHandle } = params;
  const dragging = ref(false);
  let dragItems = [];
  let dragHandler;
  let containerBounds = null;
  let lastPos = { x: void 0, y: void 0 };
  let mousePosition = { x: 0, y: 0 };
  let dragEvent = null;
  let dragStarted = false;
  let autoPanId = 0;
  let autoPanStarted = false;
  const getPointerPosition = useGetPointerPosition();
  const updateNodes = ({ x, y }) => {
    lastPos = { x, y };
    let hasChange = false;
    dragItems = dragItems.map((n) => {
      const nextPosition = { x: x - n.distance.x, y: y - n.distance.y };
      const { computedPosition } = calcNextPosition(
        n,
        snapToGrid.value ? snapPosition(nextPosition, snapGrid.value) : nextPosition,
        emits.error,
        nodeExtent.value,
        n.parentNode ? findNode(n.parentNode) : void 0
      );
      hasChange = hasChange || n.position.x !== computedPosition.x || n.position.y !== computedPosition.y;
      n.position = computedPosition;
      return n;
    });
    if (!hasChange) {
      return;
    }
    updateNodePositions(dragItems, true, true);
    dragging.value = true;
    if (dragEvent) {
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onDrag({ event: dragEvent, node: currentNode, nodes: nodes2 });
    }
  };
  const autoPan = () => {
    if (!containerBounds) {
      return;
    }
    const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed.value);
    if (xMovement !== 0 || yMovement !== 0) {
      const nextPos = {
        x: (lastPos.x ?? 0) - xMovement / viewport.value.zoom,
        y: (lastPos.y ?? 0) - yMovement / viewport.value.zoom
      };
      if (panBy({ x: xMovement, y: yMovement })) {
        updateNodes(nextPos);
      }
    }
    autoPanId = requestAnimationFrame(autoPan);
  };
  const startDrag = (event, nodeEl) => {
    dragStarted = true;
    const node2 = findNode(id2);
    if (!selectNodesOnDrag.value && !multiSelectionActive.value && node2) {
      if (!node2.selected) {
        removeSelectedElements();
      }
    }
    if (node2 && toValue$1(selectable) && selectNodesOnDrag.value) {
      handleNodeClick(
        node2,
        multiSelectionActive.value,
        addSelectedNodes,
        removeSelectedElements,
        nodesSelectionActive,
        false,
        nodeEl
      );
    }
    const pointerPos = getPointerPosition(event.sourceEvent);
    lastPos = pointerPos;
    dragItems = getDragItems(nodes.value, nodesDraggable.value, pointerPos, findNode, id2);
    if (dragItems.length) {
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onStart({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
    }
  };
  const eventStart = (event, nodeEl) => {
    var _a;
    if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1) {
      return;
    }
    if (nodeDragThreshold.value === 0) {
      startDrag(event, nodeEl);
    }
    lastPos = getPointerPosition(event.sourceEvent);
    containerBounds = ((_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect()) || null;
    mousePosition = getEventPosition(event.sourceEvent, containerBounds);
  };
  const eventDrag = (event, nodeEl) => {
    const pointerPos = getPointerPosition(event.sourceEvent);
    if (!autoPanStarted && dragStarted && autoPanOnNodeDrag.value) {
      autoPanStarted = true;
      autoPan();
    }
    if (!dragStarted) {
      const x = pointerPos.xSnapped - (lastPos.x ?? 0);
      const y = pointerPos.ySnapped - (lastPos.y ?? 0);
      const distance2 = Math.sqrt(x * x + y * y);
      if (distance2 > nodeDragThreshold.value) {
        startDrag(event, nodeEl);
      }
    }
    if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems.length && dragStarted) {
      dragEvent = event.sourceEvent;
      mousePosition = getEventPosition(event.sourceEvent, containerBounds);
      updateNodes(pointerPos);
    }
  };
  const eventEnd = (event) => {
    if (!isUseDragEvent(event) && !dragStarted && !dragging.value && !multiSelectionActive.value) {
      const evt = event;
      const pointerPos = getPointerPosition(evt);
      const x = pointerPos.xSnapped - (lastPos.x ?? 0);
      const y = pointerPos.ySnapped - (lastPos.y ?? 0);
      const distance2 = Math.sqrt(x * x + y * y);
      if (distance2 !== 0 && distance2 <= nodeDragThreshold.value) {
        onClick == null ? void 0 : onClick(evt);
      }
      return;
    }
    dragging.value = false;
    autoPanStarted = false;
    dragStarted = false;
    lastPos = { x: void 0, y: void 0 };
    cancelAnimationFrame(autoPanId);
    if (dragItems.length) {
      updateNodePositions(dragItems, false, false);
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onStop({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
    }
  };
  watch([() => toValue$1(disabled2), el], ([isDisabled, nodeEl], _, onCleanup) => {
    if (nodeEl) {
      const selection2 = select$2(nodeEl);
      if (!isDisabled) {
        dragHandler = drag$1().on("start", (event) => eventStart(event, nodeEl)).on("drag", (event) => eventDrag(event, nodeEl)).on("end", (event) => eventEnd(event)).filter((event) => {
          const target2 = event.target;
          const unrefDragHandle = toValue$1(dragHandle);
          return !event.button && (!noDragClassName.value || !hasSelector(target2, `.${noDragClassName.value}`, nodeEl) && (!unrefDragHandle || hasSelector(target2, unrefDragHandle, nodeEl)));
        });
        selection2.call(dragHandler);
      }
      onCleanup(() => {
        selection2.on(".drag", null);
        if (dragHandler) {
          dragHandler.on("start", null);
          dragHandler.on("drag", null);
          dragHandler.on("end", null);
        }
      });
    }
  });
  return dragging;
}
function createEdgeHooks() {
  return {
    doubleClick: createExtendedEventHook(),
    click: createExtendedEventHook(),
    mouseEnter: createExtendedEventHook(),
    mouseMove: createExtendedEventHook(),
    mouseLeave: createExtendedEventHook(),
    contextMenu: createExtendedEventHook(),
    updateStart: createExtendedEventHook(),
    update: createExtendedEventHook(),
    updateEnd: createExtendedEventHook()
  };
}
function useEdgeHooks(edge2, emits) {
  const edgeHooks = createEdgeHooks();
  edgeHooks.doubleClick.on((event) => {
    var _a, _b;
    emits.edgeDoubleClick(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.doubleClick) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.click.on((event) => {
    var _a, _b;
    emits.edgeClick(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseEnter.on((event) => {
    var _a, _b;
    emits.edgeMouseEnter(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.mouseEnter) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseMove.on((event) => {
    var _a, _b;
    emits.edgeMouseMove(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.mouseMove) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseLeave.on((event) => {
    var _a, _b;
    emits.edgeMouseLeave(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.mouseLeave) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.contextMenu.on((event) => {
    var _a, _b;
    emits.edgeContextMenu(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.contextMenu) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.updateStart.on((event) => {
    var _a, _b;
    emits.edgeUpdateStart(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.updateStart) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.update.on((event) => {
    var _a, _b;
    emits.edgeUpdate(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.updateEnd.on((event) => {
    var _a, _b;
    emits.edgeUpdateEnd(event);
    (_b = (_a = edge2.events) == null ? void 0 : _a.updateEnd) == null ? void 0 : _b.call(_a, event);
  });
  return Object.entries(edgeHooks).reduce(
    (hooks, [key, value]) => {
      hooks.emit[key] = value.trigger;
      hooks.on[key] = value.on;
      return hooks;
    },
    { emit: {}, on: {} }
  );
}
function useGetPointerPosition() {
  const { viewport, snapGrid, snapToGrid } = useVueFlow();
  return (event) => {
    const evt = isUseDragEvent(event) ? event.sourceEvent : event;
    const { x, y } = getEventPosition(evt);
    const pointerPos = pointToRendererPoint({ x, y }, viewport.value);
    const { x: xSnapped, y: ySnapped } = snapToGrid.value ? snapPosition(pointerPos, snapGrid.value) : pointerPos;
    return {
      xSnapped,
      ySnapped,
      ...pointerPos
    };
  };
}
function alwaysValid() {
  return true;
}
function useHandle({
  handleId,
  nodeId,
  type,
  isValidConnection,
  edgeUpdaterType,
  onEdgeUpdate,
  onEdgeUpdateEnd
}) {
  const {
    id: flowId,
    vueFlowRef,
    connectionMode,
    connectionRadius,
    connectOnClick,
    connectionClickStartHandle,
    nodesConnectable,
    autoPanOnConnect,
    autoPanSpeed,
    findNode,
    panBy,
    startConnection,
    updateConnection,
    endConnection,
    emits,
    viewport,
    edges,
    nodes,
    isValidConnection: isValidConnectionProp,
    nodeLookup
  } = useVueFlow();
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  function handlePointerDown(event) {
    var _a;
    const isTarget = toValue$1(type) === "target";
    const isMouseTriggered = isMouseEvent(event);
    const doc = getHostForElement(event.target);
    if (isMouseTriggered && event.button === 0 || !isMouseTriggered) {
      let onPointerMove = function(event2) {
        connectionPosition = getEventPosition(event2, containerBounds);
        closestHandle = getClosestHandle(
          pointToRendererPoint(connectionPosition, viewport.value, false, [1, 1]),
          connectionRadius.value,
          nodeLookup.value,
          fromHandle
        );
        if (!autoPanStarted) {
          autoPan();
          autoPanStarted = true;
        }
        const result = isValidHandle(
          event2,
          {
            handle: closestHandle,
            connectionMode: connectionMode.value,
            fromNodeId: toValue$1(nodeId),
            fromHandleId: toValue$1(handleId),
            fromType: isTarget ? "target" : "source",
            isValidConnection: isValidConnectionHandler,
            doc,
            lib: "vue",
            flowId,
            nodeLookup: nodeLookup.value
          },
          edges.value,
          nodes.value,
          findNode
        );
        handleDomNode = result.handleDomNode;
        connection = result.connection;
        isValid = isConnectionValid(!!closestHandle, result.isValid);
        const newConnection2 = {
          // from stays the same
          ...previousConnection,
          isValid,
          to: closestHandle && isValid ? rendererPointToPoint({ x: closestHandle.x, y: closestHandle.y }, viewport.value) : connectionPosition,
          toHandle: result.toHandle,
          toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
          toNode: result.toHandle ? nodeLookup.value.get(result.toHandle.nodeId) : null
        };
        if (isValid && closestHandle && (previousConnection == null ? void 0 : previousConnection.toHandle) && newConnection2.toHandle && previousConnection.toHandle.type === newConnection2.toHandle.type && previousConnection.toHandle.nodeId === newConnection2.toHandle.nodeId && previousConnection.toHandle.id === newConnection2.toHandle.id && previousConnection.to.x === newConnection2.to.x && previousConnection.to.y === newConnection2.to.y) {
          return;
        }
        updateConnection(
          closestHandle && isValid ? rendererPointToPoint(
            {
              x: closestHandle.x,
              y: closestHandle.y
            },
            viewport.value
          ) : connectionPosition,
          result.toHandle,
          getConnectionStatus(!!closestHandle, isValid)
        );
        previousConnection = newConnection2;
        if (!closestHandle && !isValid && !handleDomNode) {
          return resetRecentHandle(prevActiveHandle);
        }
        if (connection && connection.source !== connection.target && handleDomNode) {
          resetRecentHandle(prevActiveHandle);
          prevActiveHandle = handleDomNode;
          handleDomNode.classList.add("connecting", "vue-flow__handle-connecting");
          handleDomNode.classList.toggle("valid", !!isValid);
          handleDomNode.classList.toggle("vue-flow__handle-valid", !!isValid);
        }
      }, onPointerUp = function(event2) {
        if ((closestHandle || handleDomNode) && connection && isValid) {
          if (!onEdgeUpdate) {
            emits.connect(connection);
          } else {
            onEdgeUpdate(event2, connection);
          }
        }
        emits.connectEnd(event2);
        if (edgeUpdaterType) {
          onEdgeUpdateEnd == null ? void 0 : onEdgeUpdateEnd(event2);
        }
        resetRecentHandle(prevActiveHandle);
        cancelAnimationFrame(autoPanId);
        endConnection(event2);
        autoPanStarted = false;
        isValid = false;
        connection = null;
        handleDomNode = null;
        doc.removeEventListener("mousemove", onPointerMove);
        doc.removeEventListener("mouseup", onPointerUp);
        doc.removeEventListener("touchmove", onPointerMove);
        doc.removeEventListener("touchend", onPointerUp);
      };
      const node2 = findNode(toValue$1(nodeId));
      let isValidConnectionHandler = toValue$1(isValidConnection) || isValidConnectionProp.value || alwaysValid;
      if (!isValidConnectionHandler && node2) {
        isValidConnectionHandler = (!isTarget ? node2.isValidTargetPos : node2.isValidSourcePos) || alwaysValid;
      }
      let closestHandle;
      let autoPanId = 0;
      const { x, y } = getEventPosition(event);
      const clickedHandle = doc == null ? void 0 : doc.elementFromPoint(x, y);
      const handleType = getHandleType(toValue$1(edgeUpdaterType), clickedHandle);
      const containerBounds = (_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!containerBounds || !handleType) {
        return;
      }
      const fromHandleInternal = getHandle(toValue$1(nodeId), handleType, toValue$1(handleId), nodeLookup.value, connectionMode.value);
      if (!fromHandleInternal) {
        return;
      }
      let prevActiveHandle;
      let connectionPosition = getEventPosition(event, containerBounds);
      let autoPanStarted = false;
      const autoPan = () => {
        if (!autoPanOnConnect.value) {
          return;
        }
        const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds, autoPanSpeed.value);
        panBy({ x: xMovement, y: yMovement });
        autoPanId = requestAnimationFrame(autoPan);
      };
      const fromHandle = {
        ...fromHandleInternal,
        nodeId: toValue$1(nodeId),
        type: handleType,
        position: fromHandleInternal.position
      };
      const fromNodeInternal = nodeLookup.value.get(toValue$1(nodeId));
      const from = getHandlePosition(fromNodeInternal, fromHandle, Position.Left, true);
      const newConnection = {
        inProgress: true,
        isValid: null,
        from,
        fromHandle,
        fromPosition: fromHandle.position,
        fromNode: fromNodeInternal,
        to: connectionPosition,
        toHandle: null,
        toPosition: oppositePosition[fromHandle.position],
        toNode: null
      };
      startConnection(
        {
          nodeId: toValue$1(nodeId),
          id: toValue$1(handleId),
          type: handleType,
          position: (clickedHandle == null ? void 0 : clickedHandle.getAttribute("data-handlepos")) || Position.Top
        },
        {
          x: x - containerBounds.left,
          y: y - containerBounds.top
        }
      );
      emits.connectStart({ event, nodeId: toValue$1(nodeId), handleId: toValue$1(handleId), handleType });
      let previousConnection = newConnection;
      doc.addEventListener("mousemove", onPointerMove);
      doc.addEventListener("mouseup", onPointerUp);
      doc.addEventListener("touchmove", onPointerMove);
      doc.addEventListener("touchend", onPointerUp);
    }
  }
  function handleClick(event) {
    var _a, _b;
    if (!connectOnClick.value) {
      return;
    }
    const isTarget = toValue$1(type) === "target";
    if (!connectionClickStartHandle.value) {
      emits.clickConnectStart({ event, nodeId: toValue$1(nodeId), handleId: toValue$1(handleId) });
      startConnection(
        { nodeId: toValue$1(nodeId), type: toValue$1(type), id: toValue$1(handleId), position: Position.Top },
        void 0,
        true
      );
      return;
    }
    let isValidConnectionHandler = toValue$1(isValidConnection) || isValidConnectionProp.value || alwaysValid;
    const node2 = findNode(toValue$1(nodeId));
    if (!isValidConnectionHandler && node2) {
      isValidConnectionHandler = (!isTarget ? node2.isValidTargetPos : node2.isValidSourcePos) || alwaysValid;
    }
    if (node2 && (typeof node2.connectable === "undefined" ? nodesConnectable.value : node2.connectable) === false) {
      return;
    }
    const doc = getHostForElement(event.target);
    const result = isValidHandle(
      event,
      {
        handle: {
          nodeId: toValue$1(nodeId),
          id: toValue$1(handleId),
          type: toValue$1(type),
          position: Position.Top
        },
        connectionMode: connectionMode.value,
        fromNodeId: connectionClickStartHandle.value.nodeId,
        fromHandleId: connectionClickStartHandle.value.id || null,
        fromType: connectionClickStartHandle.value.type,
        isValidConnection: isValidConnectionHandler,
        doc,
        lib: "vue",
        flowId,
        nodeLookup: nodeLookup.value
      },
      edges.value,
      nodes.value,
      findNode
    );
    const isOwnHandle = ((_a = result.connection) == null ? void 0 : _a.source) === ((_b = result.connection) == null ? void 0 : _b.target);
    if (result.isValid && result.connection && !isOwnHandle) {
      emits.connect(result.connection);
    }
    emits.clickConnectEnd(event);
    endConnection(event, true);
  }
  return {
    handlePointerDown,
    handleClick
  };
}
function useNodeId() {
  return inject(NodeId, "");
}
function useNode(id2) {
  const nodeId = id2 ?? useNodeId() ?? "";
  const nodeEl = inject(NodeRef, ref(null));
  const { findNode, edges, emits } = useVueFlow();
  const node2 = findNode(nodeId);
  if (!node2) {
    emits.error(new VueFlowError(ErrorCode.NODE_NOT_FOUND, nodeId));
  }
  return {
    id: nodeId,
    nodeEl,
    node: node2,
    parentNode: computed(() => findNode(node2.parentNode)),
    connectedEdges: computed(() => getConnectedEdges([node2], edges.value))
  };
}
function createNodeHooks() {
  return {
    doubleClick: createExtendedEventHook(),
    click: createExtendedEventHook(),
    mouseEnter: createExtendedEventHook(),
    mouseMove: createExtendedEventHook(),
    mouseLeave: createExtendedEventHook(),
    contextMenu: createExtendedEventHook(),
    dragStart: createExtendedEventHook(),
    drag: createExtendedEventHook(),
    dragStop: createExtendedEventHook()
  };
}
function useNodeHooks(node2, emits) {
  const nodeHooks = createNodeHooks();
  nodeHooks.doubleClick.on((event) => {
    var _a, _b;
    emits.nodeDoubleClick(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.doubleClick) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.click.on((event) => {
    var _a, _b;
    emits.nodeClick(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseEnter.on((event) => {
    var _a, _b;
    emits.nodeMouseEnter(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.mouseEnter) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseMove.on((event) => {
    var _a, _b;
    emits.nodeMouseMove(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.mouseMove) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseLeave.on((event) => {
    var _a, _b;
    emits.nodeMouseLeave(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.mouseLeave) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.contextMenu.on((event) => {
    var _a, _b;
    emits.nodeContextMenu(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.contextMenu) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.dragStart.on((event) => {
    var _a, _b;
    emits.nodeDragStart(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.dragStart) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.drag.on((event) => {
    var _a, _b;
    emits.nodeDrag(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.drag) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.dragStop.on((event) => {
    var _a, _b;
    emits.nodeDragStop(event);
    (_b = (_a = node2.events) == null ? void 0 : _a.dragStop) == null ? void 0 : _b.call(_a, event);
  });
  return Object.entries(nodeHooks).reduce(
    (hooks, [key, value]) => {
      hooks.emit[key] = value.trigger;
      hooks.on[key] = value.on;
      return hooks;
    },
    { emit: {}, on: {} }
  );
}
function useUpdateNodePositions() {
  const { getSelectedNodes, nodeExtent, updateNodePositions, findNode, snapGrid, snapToGrid, nodesDraggable, emits } = useVueFlow();
  return (positionDiff, isShiftPressed = false) => {
    const xVelo = snapToGrid.value ? snapGrid.value[0] : 5;
    const yVelo = snapToGrid.value ? snapGrid.value[1] : 5;
    const factor = isShiftPressed ? 4 : 1;
    const positionDiffX = positionDiff.x * xVelo * factor;
    const positionDiffY = positionDiff.y * yVelo * factor;
    const nodeUpdates = [];
    for (const node2 of getSelectedNodes.value) {
      if (node2.draggable || nodesDraggable && typeof node2.draggable === "undefined") {
        const nextPosition = { x: node2.computedPosition.x + positionDiffX, y: node2.computedPosition.y + positionDiffY };
        const { computedPosition } = calcNextPosition(
          node2,
          nextPosition,
          emits.error,
          nodeExtent.value,
          node2.parentNode ? findNode(node2.parentNode) : void 0
        );
        nodeUpdates.push({
          id: node2.id,
          position: computedPosition,
          from: node2.position,
          distance: { x: positionDiff.x, y: positionDiff.y },
          dimensions: node2.dimensions
        });
      }
    }
    updateNodePositions(nodeUpdates, true, false);
  };
}
const DEFAULT_PADDING = 0.1;
function noop$3() {
  warn("Viewport not initialized yet.");
  return Promise.resolve(false);
}
const initialViewportHelper = {
  zoomIn: noop$3,
  zoomOut: noop$3,
  zoomTo: noop$3,
  fitView: noop$3,
  setCenter: noop$3,
  fitBounds: noop$3,
  project: (position2) => position2,
  screenToFlowCoordinate: (position2) => position2,
  flowToScreenCoordinate: (position2) => position2,
  setViewport: noop$3,
  setTransform: noop$3,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: false
};
function useViewportHelper(state) {
  function zoom2(scale, duration) {
    return new Promise((resolve) => {
      if (state.d3Selection && state.d3Zoom) {
        state.d3Zoom.scaleBy(
          transition(state.d3Selection, duration, () => {
            resolve(true);
          }),
          scale
        );
      } else {
        resolve(false);
      }
    });
  }
  function transformViewport(x, y, zoom22, duration) {
    return new Promise((resolve) => {
      const { x: clampedX, y: clampedY } = clampPosition({ x: -x, y: -y }, state.translateExtent);
      const nextTransform = identity$2.translate(-clampedX, -clampedY).scale(zoom22);
      if (state.d3Selection && state.d3Zoom) {
        state.d3Zoom.transform(
          transition(state.d3Selection, duration, () => {
            resolve(true);
          }),
          nextTransform
        );
      } else {
        resolve(false);
      }
    });
  }
  return computed(() => {
    const isInitialized = state.d3Zoom && state.d3Selection && state.dimensions.width && state.dimensions.height;
    if (!isInitialized) {
      return initialViewportHelper;
    }
    return {
      viewportInitialized: true,
      // todo: allow passing scale as option
      zoomIn: (options) => {
        return zoom2(1.2, options == null ? void 0 : options.duration);
      },
      zoomOut: (options) => {
        return zoom2(1 / 1.2, options == null ? void 0 : options.duration);
      },
      zoomTo: (zoomLevel, options) => {
        return new Promise((resolve) => {
          if (state.d3Selection && state.d3Zoom) {
            state.d3Zoom.scaleTo(
              transition(state.d3Selection, options == null ? void 0 : options.duration, () => {
                resolve(true);
              }),
              zoomLevel
            );
          } else {
            resolve(false);
          }
        });
      },
      setViewport: (transform, options) => {
        return transformViewport(transform.x, transform.y, transform.zoom, options == null ? void 0 : options.duration);
      },
      setTransform: (transform, options) => {
        return transformViewport(transform.x, transform.y, transform.zoom, options == null ? void 0 : options.duration);
      },
      getViewport: () => ({
        x: state.viewport.x,
        y: state.viewport.y,
        zoom: state.viewport.zoom
      }),
      getTransform: () => {
        return {
          x: state.viewport.x,
          y: state.viewport.y,
          zoom: state.viewport.zoom
        };
      },
      fitView: (options = {
        padding: DEFAULT_PADDING,
        includeHiddenNodes: false,
        duration: 0
      }) => {
        var _a, _b;
        const nodesToFit = [];
        for (const node2 of state.nodes) {
          const isVisible = node2.dimensions.width && node2.dimensions.height && ((options == null ? void 0 : options.includeHiddenNodes) || !node2.hidden);
          if (isVisible) {
            if (!((_a = options.nodes) == null ? void 0 : _a.length) || ((_b = options.nodes) == null ? void 0 : _b.length) && options.nodes.includes(node2.id)) {
              nodesToFit.push(node2);
            }
          }
        }
        if (!nodesToFit.length) {
          return Promise.resolve(false);
        }
        const bounds = getRectOfNodes(nodesToFit);
        const { x, y, zoom: zoom22 } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          options.minZoom ?? state.minZoom,
          options.maxZoom ?? state.maxZoom,
          options.padding ?? DEFAULT_PADDING,
          options.offset
        );
        return transformViewport(x, y, zoom22, options == null ? void 0 : options.duration);
      },
      setCenter: (x, y, options) => {
        const nextZoom = typeof (options == null ? void 0 : options.zoom) !== "undefined" ? options.zoom : state.maxZoom;
        const centerX = state.dimensions.width / 2 - x * nextZoom;
        const centerY = state.dimensions.height / 2 - y * nextZoom;
        return transformViewport(centerX, centerY, nextZoom, options == null ? void 0 : options.duration);
      },
      fitBounds: (bounds, options = { padding: DEFAULT_PADDING }) => {
        const { x, y, zoom: zoom22 } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          state.minZoom,
          state.maxZoom,
          options.padding
        );
        return transformViewport(x, y, zoom22, options == null ? void 0 : options.duration);
      },
      project: (position2) => pointToRendererPoint(position2, state.viewport, state.snapToGrid, state.snapGrid),
      screenToFlowCoordinate: (position2) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect();
          const correctedPosition = {
            x: position2.x - domX,
            y: position2.y - domY
          };
          return pointToRendererPoint(correctedPosition, state.viewport, state.snapToGrid, state.snapGrid);
        }
        return { x: 0, y: 0 };
      },
      flowToScreenCoordinate: (position2) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect();
          const correctedPosition = {
            x: position2.x + domX,
            y: position2.y + domY
          };
          return rendererPointToPoint(correctedPosition, state.viewport);
        }
        return { x: 0, y: 0 };
      }
    };
  });
}
function transition(selection2, ms = 0, onEnd) {
  return selection2.transition().duration(ms).on("end", onEnd);
}
function useWatchProps(models, props, store) {
  const scope = effectScope(true);
  scope.run(() => {
    const watchModelValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!(store.nodes.value.length || store.edges.value.length);
        pauseModel = watchPausable([models.modelValue, () => {
          var _a, _b;
          return (_b = (_a = models.modelValue) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([elements]) => {
          if (elements && Array.isArray(elements)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setElements(elements);
            if (!pauseStore && !immediateStore && elements.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.nodes, store.edges, () => store.edges.value.length, () => store.nodes.value.length],
          ([nodes, edges]) => {
            var _a;
            if (((_a = models.modelValue) == null ? void 0 : _a.value) && Array.isArray(models.modelValue.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.modelValue.value = [...nodes, ...edges];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchNodesValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!store.nodes.value.length;
        pauseModel = watchPausable([models.nodes, () => {
          var _a, _b;
          return (_b = (_a = models.nodes) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([nodes]) => {
          if (nodes && Array.isArray(nodes)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setNodes(nodes);
            if (!pauseStore && !immediateStore && nodes.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.nodes, () => store.nodes.value.length],
          ([nodes]) => {
            var _a;
            if (((_a = models.nodes) == null ? void 0 : _a.value) && Array.isArray(models.nodes.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.nodes.value = [...nodes];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchEdgesValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!store.edges.value.length;
        pauseModel = watchPausable([models.edges, () => {
          var _a, _b;
          return (_b = (_a = models.edges) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([edges]) => {
          if (edges && Array.isArray(edges)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setEdges(edges);
            if (!pauseStore && !immediateStore && edges.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.edges, () => store.edges.value.length],
          ([edges]) => {
            var _a;
            if (((_a = models.edges) == null ? void 0 : _a.value) && Array.isArray(models.edges.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.edges.value = [...edges];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchMaxZoom = () => {
      scope.run(() => {
        watch(
          () => props.maxZoom,
          () => {
            if (props.maxZoom && isDef(props.maxZoom)) {
              store.setMaxZoom(props.maxZoom);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchMinZoom = () => {
      scope.run(() => {
        watch(
          () => props.minZoom,
          () => {
            if (props.minZoom && isDef(props.minZoom)) {
              store.setMinZoom(props.minZoom);
            }
          },
          { immediate: true }
        );
      });
    };
    const watchTranslateExtent = () => {
      scope.run(() => {
        watch(
          () => props.translateExtent,
          () => {
            if (props.translateExtent && isDef(props.translateExtent)) {
              store.setTranslateExtent(props.translateExtent);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchNodeExtent = () => {
      scope.run(() => {
        watch(
          () => props.nodeExtent,
          () => {
            if (props.nodeExtent && isDef(props.nodeExtent)) {
              store.setNodeExtent(props.nodeExtent);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchApplyDefault = () => {
      scope.run(() => {
        watch(
          () => props.applyDefault,
          () => {
            if (isDef(props.applyDefault)) {
              store.applyDefault.value = props.applyDefault;
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchAutoConnect = () => {
      scope.run(() => {
        const autoConnector = async (params) => {
          let connection = params;
          if (typeof props.autoConnect === "function") {
            connection = await props.autoConnect(params);
          }
          if (connection !== false) {
            store.addEdges([connection]);
          }
        };
        watch(
          () => props.autoConnect,
          () => {
            if (isDef(props.autoConnect)) {
              store.autoConnect.value = props.autoConnect;
            }
          },
          { immediate: true }
        );
        watch(
          store.autoConnect,
          (autoConnectEnabled, _, onCleanup) => {
            if (autoConnectEnabled) {
              store.onConnect(autoConnector);
            } else {
              store.hooks.value.connect.off(autoConnector);
            }
            onCleanup(() => {
              store.hooks.value.connect.off(autoConnector);
            });
          },
          { immediate: true }
        );
      });
    };
    const watchRest = () => {
      const skip = [
        "id",
        "modelValue",
        "translateExtent",
        "nodeExtent",
        "edges",
        "nodes",
        "maxZoom",
        "minZoom",
        "applyDefault",
        "autoConnect"
      ];
      for (const key of Object.keys(props)) {
        const propKey = key;
        if (!skip.includes(propKey)) {
          const propValue = toRef(() => props[propKey]);
          const storeRef = store[propKey];
          if (isRef(storeRef)) {
            scope.run(() => {
              watch(
                propValue,
                (nextValue) => {
                  if (isDef(nextValue)) {
                    storeRef.value = nextValue;
                  }
                },
                { immediate: true }
              );
            });
          }
        }
      }
    };
    const runAll = () => {
      watchModelValue();
      watchNodesValue();
      watchEdgesValue();
      watchMinZoom();
      watchMaxZoom();
      watchTranslateExtent();
      watchNodeExtent();
      watchApplyDefault();
      watchAutoConnect();
      watchRest();
    };
    runAll();
  });
  return () => scope.stop();
}
function createHooks() {
  return {
    edgesChange: createExtendedEventHook(),
    nodesChange: createExtendedEventHook(),
    nodeDoubleClick: createExtendedEventHook(),
    nodeClick: createExtendedEventHook(),
    nodeMouseEnter: createExtendedEventHook(),
    nodeMouseMove: createExtendedEventHook(),
    nodeMouseLeave: createExtendedEventHook(),
    nodeContextMenu: createExtendedEventHook(),
    nodeDragStart: createExtendedEventHook(),
    nodeDrag: createExtendedEventHook(),
    nodeDragStop: createExtendedEventHook(),
    nodesInitialized: createExtendedEventHook(),
    miniMapNodeClick: createExtendedEventHook(),
    miniMapNodeDoubleClick: createExtendedEventHook(),
    miniMapNodeMouseEnter: createExtendedEventHook(),
    miniMapNodeMouseMove: createExtendedEventHook(),
    miniMapNodeMouseLeave: createExtendedEventHook(),
    connect: createExtendedEventHook(),
    connectStart: createExtendedEventHook(),
    connectEnd: createExtendedEventHook(),
    clickConnectStart: createExtendedEventHook(),
    clickConnectEnd: createExtendedEventHook(),
    paneReady: createExtendedEventHook(),
    init: createExtendedEventHook(),
    move: createExtendedEventHook(),
    moveStart: createExtendedEventHook(),
    moveEnd: createExtendedEventHook(),
    selectionDragStart: createExtendedEventHook(),
    selectionDrag: createExtendedEventHook(),
    selectionDragStop: createExtendedEventHook(),
    selectionContextMenu: createExtendedEventHook(),
    selectionStart: createExtendedEventHook(),
    selectionEnd: createExtendedEventHook(),
    viewportChangeStart: createExtendedEventHook(),
    viewportChange: createExtendedEventHook(),
    viewportChangeEnd: createExtendedEventHook(),
    paneScroll: createExtendedEventHook(),
    paneClick: createExtendedEventHook(),
    paneContextMenu: createExtendedEventHook(),
    paneMouseEnter: createExtendedEventHook(),
    paneMouseMove: createExtendedEventHook(),
    paneMouseLeave: createExtendedEventHook(),
    edgeContextMenu: createExtendedEventHook(),
    edgeMouseEnter: createExtendedEventHook(),
    edgeMouseMove: createExtendedEventHook(),
    edgeMouseLeave: createExtendedEventHook(),
    edgeDoubleClick: createExtendedEventHook(),
    edgeClick: createExtendedEventHook(),
    edgeUpdateStart: createExtendedEventHook(),
    edgeUpdate: createExtendedEventHook(),
    edgeUpdateEnd: createExtendedEventHook(),
    updateNodeInternals: createExtendedEventHook(),
    error: createExtendedEventHook((err) => warn(err.message))
  };
}
function useHooks(emit, hooks) {
  onBeforeMount(() => {
    for (const [key, value] of Object.entries(hooks.value)) {
      const listener = (data) => {
        emit(key, data);
      };
      value.fns.add(listener);
      tryOnScopeDispose(() => {
        value.off(listener);
      });
    }
  });
}
function useState() {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    connectionLookup: /* @__PURE__ */ new Map(),
    nodeTypes: {},
    edgeTypes: {},
    initialized: false,
    dimensions: {
      width: 0,
      height: 0
    },
    viewport: { x: 0, y: 0, zoom: 1 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    selectionMode: SelectionMode.Full,
    paneDragging: false,
    preventScrolling: true,
    zoomOnScroll: true,
    zoomOnPinch: true,
    zoomOnDoubleClick: true,
    panOnScroll: false,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: PanOnScrollMode.Free,
    paneClickDistance: 0,
    panOnDrag: true,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: false,
    defaultViewport: { x: 0, y: 0, zoom: 1 },
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    defaultMarkerColor: "#b1b1b7",
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: ConnectionLineType.Bezier,
      style: {}
    },
    connectionMode: ConnectionMode.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: Number.NaN, y: Number.NaN },
    connectionRadius: 20,
    connectOnClick: true,
    connectionStatus: null,
    isValidConnection: null,
    snapGrid: [15, 15],
    snapToGrid: false,
    edgesUpdatable: false,
    edgesFocusable: true,
    nodesFocusable: true,
    nodesConnectable: true,
    nodesDraggable: true,
    nodeDragThreshold: 1,
    elementsSelectable: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    selectionKeyCode: "Shift",
    multiSelectionKeyCode: isMacOs() ? "Meta" : "Control",
    zoomActivationKeyCode: isMacOs() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: createHooks(),
    applyDefault: true,
    autoConnect: false,
    fitViewOnInit: false,
    fitViewOnInitDone: false,
    noDragClassName: "nodrag",
    noWheelClassName: "nowheel",
    noPanClassName: "nopan",
    defaultEdgeOptions: void 0,
    elevateEdgesOnSelect: false,
    elevateNodesOnSelect: true,
    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,
    autoPanSpeed: 15,
    disableKeyboardA11y: false,
    ariaLiveMessage: ""
  };
}
const storeOptionsToSkip = [
  "id",
  "vueFlowRef",
  "viewportRef",
  "initialized",
  "modelValue",
  "nodes",
  "edges",
  "maxZoom",
  "minZoom",
  "translateExtent",
  "hooks",
  "defaultEdgeOptions"
];
function useActions(state, nodeLookup, edgeLookup) {
  const viewportHelper = useViewportHelper(state);
  const updateNodeInternals = (ids) => {
    const updateIds = ids ?? [];
    state.hooks.updateNodeInternals.trigger(updateIds);
  };
  const getIncomers$1 = (nodeOrId) => {
    return getIncomers(nodeOrId, state.nodes, state.edges);
  };
  const getOutgoers$1 = (nodeOrId) => {
    return getOutgoers(nodeOrId, state.nodes, state.edges);
  };
  const getConnectedEdges$1 = (nodesOrId) => {
    return getConnectedEdges(nodesOrId, state.edges);
  };
  const getHandleConnections = ({ id: id2, type, nodeId }) => {
    var _a;
    return Array.from(((_a = state.connectionLookup.get(`${nodeId}-${type}-${id2 ?? null}`)) == null ? void 0 : _a.values()) ?? []);
  };
  const findNode = (id2) => {
    if (!id2) {
      return;
    }
    return nodeLookup.value.get(id2);
  };
  const findEdge = (id2) => {
    if (!id2) {
      return;
    }
    return edgeLookup.value.get(id2);
  };
  const updateNodePositions = (dragItems, changed, dragging) => {
    var _a, _b;
    const changes = [];
    for (const node2 of dragItems) {
      const change = {
        id: node2.id,
        type: "position",
        dragging,
        from: node2.from
      };
      if (changed) {
        change.position = node2.position;
        if (node2.parentNode) {
          const parentNode = findNode(node2.parentNode);
          change.position = {
            x: change.position.x - (((_a = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _a.x) ?? 0),
            y: change.position.y - (((_b = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _b.y) ?? 0)
          };
        }
      }
      changes.push(change);
    }
    if (changes == null ? void 0 : changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const updateNodeDimensions = (updates) => {
    if (!state.vueFlowRef) {
      return;
    }
    const viewportNode = state.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!viewportNode) {
      return;
    }
    const style = window.getComputedStyle(viewportNode);
    const { m22: zoom2 } = new window.DOMMatrixReadOnly(style.transform);
    const changes = [];
    for (let i = 0; i < updates.length; ++i) {
      const update = updates[i];
      const node2 = findNode(update.id);
      if (node2) {
        const dimensions = getDimensions(update.nodeElement);
        const doUpdate = !!(dimensions.width && dimensions.height && (node2.dimensions.width !== dimensions.width || node2.dimensions.height !== dimensions.height || update.forceUpdate));
        if (doUpdate) {
          const nodeBounds = update.nodeElement.getBoundingClientRect();
          node2.dimensions = dimensions;
          node2.handleBounds.source = getHandleBounds("source", update.nodeElement, nodeBounds, zoom2);
          node2.handleBounds.target = getHandleBounds("target", update.nodeElement, nodeBounds, zoom2);
          changes.push({
            id: node2.id,
            type: "dimensions",
            dimensions
          });
        }
      }
    }
    if (!state.fitViewOnInitDone && state.fitViewOnInit) {
      viewportHelper.value.fitView().then(() => {
        state.fitViewOnInitDone = true;
      });
    }
    if (changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const elementSelectionHandler = (elements, selected2) => {
    const nodeIds = /* @__PURE__ */ new Set();
    const edgeIds = /* @__PURE__ */ new Set();
    for (const element of elements) {
      if (isNode(element)) {
        nodeIds.add(element.id);
      } else if (isEdge(element)) {
        edgeIds.add(element.id);
      }
    }
    const changedNodes = getSelectionChanges(nodeLookup.value, nodeIds, true);
    const changedEdges = getSelectionChanges(edgeLookup.value, edgeIds);
    if (state.multiSelectionActive) {
      for (const nodeId of nodeIds) {
        changedNodes.push(createSelectionChange(nodeId, selected2));
      }
      for (const edgeId of edgeIds) {
        changedEdges.push(createSelectionChange(edgeId, selected2));
      }
    }
    if (changedNodes.length) {
      state.hooks.nodesChange.trigger(changedNodes);
    }
    if (changedEdges.length) {
      state.hooks.edgesChange.trigger(changedEdges);
    }
  };
  const addSelectedNodes = (nodes) => {
    if (state.multiSelectionActive) {
      const nodeChanges = nodes.map((node2) => createSelectionChange(node2.id, true));
      state.hooks.nodesChange.trigger(nodeChanges);
      return;
    }
    state.hooks.nodesChange.trigger(getSelectionChanges(nodeLookup.value, new Set(nodes.map((n) => n.id)), true));
    state.hooks.edgesChange.trigger(getSelectionChanges(edgeLookup.value));
  };
  const addSelectedEdges = (edges) => {
    if (state.multiSelectionActive) {
      const changedEdges = edges.map((edge2) => createSelectionChange(edge2.id, true));
      state.hooks.edgesChange.trigger(changedEdges);
      return;
    }
    state.hooks.edgesChange.trigger(getSelectionChanges(edgeLookup.value, new Set(edges.map((e) => e.id))));
    state.hooks.nodesChange.trigger(getSelectionChanges(nodeLookup.value, /* @__PURE__ */ new Set(), true));
  };
  const addSelectedElements = (elements) => {
    elementSelectionHandler(elements, true);
  };
  const removeSelectedNodes = (nodes) => {
    const nodesToUnselect = nodes || state.nodes;
    const nodeChanges = nodesToUnselect.map((n) => {
      n.selected = false;
      return createSelectionChange(n.id, false);
    });
    state.hooks.nodesChange.trigger(nodeChanges);
  };
  const removeSelectedEdges = (edges) => {
    const edgesToUnselect = edges || state.edges;
    const edgeChanges = edgesToUnselect.map((e) => {
      e.selected = false;
      return createSelectionChange(e.id, false);
    });
    state.hooks.edgesChange.trigger(edgeChanges);
  };
  const removeSelectedElements = (elements) => {
    if (!elements || !elements.length) {
      return elementSelectionHandler([], false);
    }
    const changes = elements.reduce(
      (changes2, curr) => {
        const selectionChange = createSelectionChange(curr.id, false);
        if (isNode(curr)) {
          changes2.nodes.push(selectionChange);
        } else {
          changes2.edges.push(selectionChange);
        }
        return changes2;
      },
      { nodes: [], edges: [] }
    );
    if (changes.nodes.length) {
      state.hooks.nodesChange.trigger(changes.nodes);
    }
    if (changes.edges.length) {
      state.hooks.edgesChange.trigger(changes.edges);
    }
  };
  const setMinZoom = (minZoom) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.scaleExtent([minZoom, state.maxZoom]);
    state.minZoom = minZoom;
  };
  const setMaxZoom = (maxZoom) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.scaleExtent([state.minZoom, maxZoom]);
    state.maxZoom = maxZoom;
  };
  const setTranslateExtent = (translateExtent) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.translateExtent(translateExtent);
    state.translateExtent = translateExtent;
  };
  const setNodeExtent = (nodeExtent) => {
    state.nodeExtent = nodeExtent;
    updateNodeInternals();
  };
  const setPaneClickDistance = (clickDistance) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.clickDistance(clickDistance);
  };
  const setInteractive = (isInteractive) => {
    state.nodesDraggable = isInteractive;
    state.nodesConnectable = isInteractive;
    state.elementsSelectable = isInteractive;
  };
  const setNodes = (nodes) => {
    const nextNodes = nodes instanceof Function ? nodes(state.nodes) : nodes;
    if (!state.initialized && !nextNodes.length) {
      return;
    }
    state.nodes = createGraphNodes(nextNodes, findNode, state.hooks.error.trigger);
  };
  const setEdges = (edges) => {
    const nextEdges = edges instanceof Function ? edges(state.edges) : edges;
    if (!state.initialized && !nextEdges.length) {
      return;
    }
    const validEdges = createGraphEdges(
      nextEdges,
      state.isValidConnection,
      findNode,
      findEdge,
      state.hooks.error.trigger,
      state.defaultEdgeOptions,
      state.nodes,
      state.edges
    );
    updateConnectionLookup(state.connectionLookup, edgeLookup.value, validEdges);
    state.edges = validEdges;
  };
  const setElements = (elements) => {
    const nextElements = elements instanceof Function ? elements([...state.nodes, ...state.edges]) : elements;
    if (!state.initialized && !nextElements.length) {
      return;
    }
    setNodes(nextElements.filter(isNode));
    setEdges(nextElements.filter(isEdge));
  };
  const addNodes2 = (nodes) => {
    let nextNodes = nodes instanceof Function ? nodes(state.nodes) : nodes;
    nextNodes = Array.isArray(nextNodes) ? nextNodes : [nextNodes];
    const graphNodes = createGraphNodes(nextNodes, findNode, state.hooks.error.trigger);
    const changes = [];
    for (const node2 of graphNodes) {
      changes.push(createAdditionChange(node2));
    }
    if (changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const addEdges = (params) => {
    let nextEdges = params instanceof Function ? params(state.edges) : params;
    nextEdges = Array.isArray(nextEdges) ? nextEdges : [nextEdges];
    const validEdges = createGraphEdges(
      nextEdges,
      state.isValidConnection,
      findNode,
      findEdge,
      state.hooks.error.trigger,
      state.defaultEdgeOptions,
      state.nodes,
      state.edges
    );
    const changes = [];
    for (const edge2 of validEdges) {
      changes.push(createAdditionChange(edge2));
    }
    if (changes.length) {
      state.hooks.edgesChange.trigger(changes);
    }
  };
  const removeNodes = (nodes, removeConnectedEdges = true, removeChildren = false) => {
    const nextNodes = nodes instanceof Function ? nodes(state.nodes) : nodes;
    const nodesToRemove = Array.isArray(nextNodes) ? nextNodes : [nextNodes];
    const nodeChanges = [];
    const edgeChanges = [];
    function createEdgeRemovalChanges(nodes2) {
      const connectedEdges = getConnectedEdges$1(nodes2);
      for (const edge2 of connectedEdges) {
        if (isDef(edge2.deletable) ? edge2.deletable : true) {
          edgeChanges.push(createEdgeRemoveChange(edge2.id, edge2.source, edge2.target, edge2.sourceHandle, edge2.targetHandle));
        }
      }
    }
    function createChildrenRemovalChanges(id2) {
      const children2 = [];
      for (const node2 of state.nodes) {
        if (node2.parentNode === id2) {
          children2.push(node2);
        }
      }
      if (children2.length) {
        for (const child of children2) {
          nodeChanges.push(createNodeRemoveChange(child.id));
        }
        if (removeConnectedEdges) {
          createEdgeRemovalChanges(children2);
        }
        for (const child of children2) {
          createChildrenRemovalChanges(child.id);
        }
      }
    }
    for (const item of nodesToRemove) {
      const currNode = typeof item === "string" ? findNode(item) : item;
      if (!currNode) {
        continue;
      }
      if (isDef(currNode.deletable) && !currNode.deletable) {
        continue;
      }
      nodeChanges.push(createNodeRemoveChange(currNode.id));
      if (removeConnectedEdges) {
        createEdgeRemovalChanges([currNode]);
      }
      if (removeChildren) {
        createChildrenRemovalChanges(currNode.id);
      }
    }
    if (edgeChanges.length) {
      state.hooks.edgesChange.trigger(edgeChanges);
    }
    if (nodeChanges.length) {
      state.hooks.nodesChange.trigger(nodeChanges);
    }
  };
  const removeEdges = (edges) => {
    const nextEdges = edges instanceof Function ? edges(state.edges) : edges;
    const edgesToRemove = Array.isArray(nextEdges) ? nextEdges : [nextEdges];
    const changes = [];
    for (const item of edgesToRemove) {
      const currEdge = typeof item === "string" ? findEdge(item) : item;
      if (!currEdge) {
        continue;
      }
      if (isDef(currEdge.deletable) && !currEdge.deletable) {
        continue;
      }
      changes.push(
        createEdgeRemoveChange(
          typeof item === "string" ? item : item.id,
          currEdge.source,
          currEdge.target,
          currEdge.sourceHandle,
          currEdge.targetHandle
        )
      );
    }
    state.hooks.edgesChange.trigger(changes);
  };
  const updateEdge2 = (oldEdge, newConnection, shouldReplaceId = true) => {
    const prevEdge = findEdge(oldEdge.id);
    const newEdge = updateEdgeAction(oldEdge, newConnection, prevEdge, shouldReplaceId, state.hooks.error.trigger);
    if (newEdge) {
      const [validEdge] = createGraphEdges(
        [newEdge],
        state.isValidConnection,
        findNode,
        findEdge,
        state.hooks.error.trigger,
        state.defaultEdgeOptions,
        state.nodes,
        state.edges
      );
      state.edges.splice(state.edges.indexOf(prevEdge), 1, validEdge);
      updateConnectionLookup(state.connectionLookup, edgeLookup.value, [validEdge]);
      return validEdge;
    }
    return false;
  };
  const updateEdgeData = (id2, dataUpdate, options = { replace: false }) => {
    const edge2 = findEdge(id2);
    if (!edge2) {
      return;
    }
    const nextData = typeof dataUpdate === "function" ? dataUpdate(edge2) : dataUpdate;
    edge2.data = options.replace ? nextData : { ...edge2.data, ...nextData };
  };
  const applyNodeChanges2 = (changes) => {
    return applyChanges(changes, state.nodes);
  };
  const applyEdgeChanges2 = (changes) => {
    const changedEdges = applyChanges(changes, state.edges);
    updateConnectionLookup(state.connectionLookup, edgeLookup.value, changedEdges);
    return changedEdges;
  };
  const updateNode = (id2, nodeUpdate, options = { replace: false }) => {
    const node2 = findNode(id2);
    if (!node2) {
      return;
    }
    const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node2) : nodeUpdate;
    if (options.replace) {
      state.nodes.splice(state.nodes.indexOf(node2), 1, nextNode);
    } else {
      Object.assign(node2, nextNode);
    }
  };
  const updateNodeData = (id2, dataUpdate, options = { replace: false }) => {
    const node2 = findNode(id2);
    if (!node2) {
      return;
    }
    const nextData = typeof dataUpdate === "function" ? dataUpdate(node2) : dataUpdate;
    node2.data = options.replace ? nextData : { ...node2.data, ...nextData };
  };
  const startConnection = (startHandle, position2, isClick = false) => {
    if (isClick) {
      state.connectionClickStartHandle = startHandle;
    } else {
      state.connectionStartHandle = startHandle;
    }
    state.connectionEndHandle = null;
    state.connectionStatus = null;
    if (position2) {
      state.connectionPosition = position2;
    }
  };
  const updateConnection = (position2, result = null, status2 = null) => {
    if (state.connectionStartHandle) {
      state.connectionPosition = position2;
      state.connectionEndHandle = result;
      state.connectionStatus = status2;
    }
  };
  const endConnection = (event, isClick) => {
    state.connectionPosition = { x: Number.NaN, y: Number.NaN };
    state.connectionEndHandle = null;
    state.connectionStatus = null;
    if (isClick) {
      state.connectionClickStartHandle = null;
    } else {
      state.connectionStartHandle = null;
    }
  };
  const getNodeRect = (nodeOrRect) => {
    const isRectObj = isRect(nodeOrRect);
    const node2 = isRectObj ? null : isGraphNode(nodeOrRect) ? nodeOrRect : findNode(nodeOrRect.id);
    if (!isRectObj && !node2) {
      return [null, null, isRectObj];
    }
    const nodeRect = isRectObj ? nodeOrRect : nodeToRect(node2);
    return [nodeRect, node2, isRectObj];
  };
  const getIntersectingNodes = (nodeOrRect, partially = true, nodes = state.nodes) => {
    const [nodeRect, node2, isRect2] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return [];
    }
    const intersections = [];
    for (const n of nodes || state.nodes) {
      if (!isRect2 && (n.id === node2.id || !n.computedPosition)) {
        continue;
      }
      const currNodeRect = nodeToRect(n);
      const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
      const partiallyVisible = partially && overlappingArea > 0;
      if (partiallyVisible || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height)) {
        intersections.push(n);
      }
    }
    return intersections;
  };
  const isNodeIntersecting = (nodeOrRect, area, partially = true) => {
    const [nodeRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return false;
    }
    const overlappingArea = getOverlappingArea(nodeRect, area);
    const partiallyVisible = partially && overlappingArea > 0;
    return partiallyVisible || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height);
  };
  const panBy = (delta) => {
    const { viewport, dimensions, d3Zoom, d3Selection, translateExtent } = state;
    if (!d3Zoom || !d3Selection || !delta.x && !delta.y) {
      return false;
    }
    const nextTransform = identity$2.translate(viewport.x + delta.x, viewport.y + delta.y).scale(viewport.zoom);
    const extent = [
      [0, 0],
      [dimensions.width, dimensions.height]
    ];
    const constrainedTransform = d3Zoom.constrain()(nextTransform, extent, translateExtent);
    const transformChanged = state.viewport.x !== constrainedTransform.x || state.viewport.y !== constrainedTransform.y || state.viewport.zoom !== constrainedTransform.k;
    d3Zoom.transform(d3Selection, constrainedTransform);
    return transformChanged;
  };
  const setState = (options) => {
    const opts = options instanceof Function ? options(state) : options;
    const exclude = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    if (isDef(opts.defaultEdgeOptions)) {
      state.defaultEdgeOptions = opts.defaultEdgeOptions;
    }
    const elements = opts.modelValue || opts.nodes || opts.edges ? [] : void 0;
    if (elements) {
      if (opts.modelValue) {
        elements.push(...opts.modelValue);
      }
      if (opts.nodes) {
        elements.push(...opts.nodes);
      }
      if (opts.edges) {
        elements.push(...opts.edges);
      }
      setElements(elements);
    }
    const setSkippedOptions = () => {
      if (isDef(opts.maxZoom)) {
        setMaxZoom(opts.maxZoom);
      }
      if (isDef(opts.minZoom)) {
        setMinZoom(opts.minZoom);
      }
      if (isDef(opts.translateExtent)) {
        setTranslateExtent(opts.translateExtent);
      }
    };
    for (const o of Object.keys(opts)) {
      const key = o;
      const option2 = opts[key];
      if (![...storeOptionsToSkip, ...exclude].includes(key) && isDef(option2)) {
        state[key] = option2;
      }
    }
    until(() => state.d3Zoom).not.toBeNull().then(setSkippedOptions);
    if (!state.initialized) {
      state.initialized = true;
    }
  };
  const toObject = () => {
    const nodes = [];
    const edges = [];
    for (const node2 of state.nodes) {
      const {
        computedPosition: _,
        handleBounds: __,
        selected: ___,
        dimensions: ____,
        isParent: _____,
        resizing: ______,
        dragging: _______,
        events: _________,
        ...rest
      } = node2;
      nodes.push(rest);
    }
    for (const edge2 of state.edges) {
      const { selected: _, sourceNode: __, targetNode: ___, events: ____, ...rest } = edge2;
      edges.push(rest);
    }
    return JSON.parse(
      JSON.stringify({
        nodes,
        edges,
        position: [state.viewport.x, state.viewport.y],
        zoom: state.viewport.zoom,
        viewport: state.viewport
      })
    );
  };
  const fromObject = (obj) => {
    return new Promise((resolve) => {
      const { nodes, edges, position: position2, zoom: zoom2, viewport } = obj;
      if (nodes) {
        setNodes(nodes);
      }
      if (edges) {
        setEdges(edges);
      }
      if ((viewport == null ? void 0 : viewport.x) && (viewport == null ? void 0 : viewport.y) || position2) {
        const x = (viewport == null ? void 0 : viewport.x) || position2[0];
        const y = (viewport == null ? void 0 : viewport.y) || position2[1];
        const nextZoom = (viewport == null ? void 0 : viewport.zoom) || zoom2 || state.viewport.zoom;
        return until(() => viewportHelper.value.viewportInitialized).toBe(true).then(() => {
          viewportHelper.value.setViewport({
            x,
            y,
            zoom: nextZoom
          }).then(() => {
            resolve(true);
          });
        });
      } else {
        resolve(true);
      }
    });
  };
  const $reset = () => {
    const resetState = useState();
    state.edges = [];
    state.nodes = [];
    if (state.d3Zoom && state.d3Selection) {
      const updatedTransform = identity$2.translate(resetState.defaultViewport.x ?? 0, resetState.defaultViewport.y ?? 0).scale(clamp(resetState.defaultViewport.zoom ?? 1, resetState.minZoom, resetState.maxZoom));
      const bbox = state.viewportRef.getBoundingClientRect();
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = state.d3Zoom.constrain()(updatedTransform, extent, resetState.translateExtent);
      state.d3Zoom.transform(state.d3Selection, constrainedTransform);
    }
    setState(resetState);
  };
  return {
    updateNodePositions,
    updateNodeDimensions,
    setElements,
    setNodes,
    setEdges,
    addNodes: addNodes2,
    addEdges,
    removeNodes,
    removeEdges,
    findNode,
    findEdge,
    updateEdge: updateEdge2,
    updateEdgeData,
    updateNode,
    updateNodeData,
    applyEdgeChanges: applyEdgeChanges2,
    applyNodeChanges: applyNodeChanges2,
    addSelectedElements,
    addSelectedNodes,
    addSelectedEdges,
    setMinZoom,
    setMaxZoom,
    setTranslateExtent,
    setNodeExtent,
    setPaneClickDistance,
    removeSelectedElements,
    removeSelectedNodes,
    removeSelectedEdges,
    startConnection,
    updateConnection,
    endConnection,
    setInteractive,
    setState,
    getIntersectingNodes,
    getIncomers: getIncomers$1,
    getOutgoers: getOutgoers$1,
    getConnectedEdges: getConnectedEdges$1,
    getHandleConnections,
    isNodeIntersecting,
    panBy,
    fitView: (params) => viewportHelper.value.fitView(params),
    zoomIn: (transitionOpts) => viewportHelper.value.zoomIn(transitionOpts),
    zoomOut: (transitionOpts) => viewportHelper.value.zoomOut(transitionOpts),
    zoomTo: (zoomLevel, transitionOpts) => viewportHelper.value.zoomTo(zoomLevel, transitionOpts),
    setViewport: (params, transitionOpts) => viewportHelper.value.setViewport(params, transitionOpts),
    setTransform: (params, transitionOpts) => viewportHelper.value.setTransform(params, transitionOpts),
    getViewport: () => viewportHelper.value.getViewport(),
    getTransform: () => viewportHelper.value.getTransform(),
    setCenter: (x, y, opts) => viewportHelper.value.setCenter(x, y, opts),
    fitBounds: (params, opts) => viewportHelper.value.fitBounds(params, opts),
    project: (params) => viewportHelper.value.project(params),
    screenToFlowCoordinate: (params) => viewportHelper.value.screenToFlowCoordinate(params),
    flowToScreenCoordinate: (params) => viewportHelper.value.flowToScreenCoordinate(params),
    toObject,
    fromObject,
    updateNodeInternals,
    viewportHelper,
    $reset,
    $destroy: () => {
    }
  };
}
const _hoisted_1$9$1 = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"];
const __default__$f = {
  name: "Handle",
  compatConfig: { MODE: 3 }
};
const _sfc_main$f$1 = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => Position.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: true },
    connectableEnd: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = createPropsRestProxy(__props, ["position", "connectable", "connectableStart", "connectableEnd", "id"]);
    const type = toRef(() => props.type ?? "source");
    const isValidConnection = toRef(() => props.isValidConnection ?? null);
    const {
      id: flowId,
      connectionStartHandle,
      connectionClickStartHandle,
      connectionEndHandle,
      vueFlowRef,
      nodesConnectable,
      noDragClassName,
      noPanClassName
    } = useVueFlow();
    const { id: nodeId, node: node2, nodeEl, connectedEdges } = useNode();
    const handle2 = ref();
    const isConnectableStart = toRef(() => typeof __props.connectableStart !== "undefined" ? __props.connectableStart : true);
    const isConnectableEnd = toRef(() => typeof __props.connectableEnd !== "undefined" ? __props.connectableEnd : true);
    const isConnecting = toRef(
      () => {
        var _a, _b, _c, _d, _e, _f;
        return ((_a = connectionStartHandle.value) == null ? void 0 : _a.nodeId) === nodeId && ((_b = connectionStartHandle.value) == null ? void 0 : _b.id) === __props.id && ((_c = connectionStartHandle.value) == null ? void 0 : _c.type) === type.value || ((_d = connectionEndHandle.value) == null ? void 0 : _d.nodeId) === nodeId && ((_e = connectionEndHandle.value) == null ? void 0 : _e.id) === __props.id && ((_f = connectionEndHandle.value) == null ? void 0 : _f.type) === type.value;
      }
    );
    const isClickConnecting = toRef(
      () => {
        var _a, _b, _c;
        return ((_a = connectionClickStartHandle.value) == null ? void 0 : _a.nodeId) === nodeId && ((_b = connectionClickStartHandle.value) == null ? void 0 : _b.id) === __props.id && ((_c = connectionClickStartHandle.value) == null ? void 0 : _c.type) === type.value;
      }
    );
    const { handlePointerDown, handleClick } = useHandle({
      nodeId,
      handleId: __props.id,
      isValidConnection,
      type
    });
    const isConnectable = computed(() => {
      if (typeof __props.connectable === "string" && __props.connectable === "single") {
        return !connectedEdges.value.some((edge2) => {
          const id2 = edge2[`${type.value}Handle`];
          if (edge2[type.value] !== nodeId) {
            return false;
          }
          return id2 ? id2 === __props.id : true;
        });
      }
      if (typeof __props.connectable === "number") {
        return connectedEdges.value.filter((edge2) => {
          const id2 = edge2[`${type.value}Handle`];
          if (edge2[type.value] !== nodeId) {
            return false;
          }
          return id2 ? id2 === __props.id : true;
        }).length < __props.connectable;
      }
      if (typeof __props.connectable === "function") {
        return __props.connectable(node2, connectedEdges.value);
      }
      return isDef(__props.connectable) ? __props.connectable : nodesConnectable.value;
    });
    onMounted(() => {
      var _a;
      if (!node2.dimensions.width || !node2.dimensions.height) {
        return;
      }
      const existingBounds = (_a = node2.handleBounds[type.value]) == null ? void 0 : _a.find((b) => b.id === __props.id);
      if (!vueFlowRef.value || existingBounds) {
        return;
      }
      const viewportNode = vueFlowRef.value.querySelector(".vue-flow__transformationpane");
      if (!nodeEl.value || !handle2.value || !viewportNode || !__props.id) {
        return;
      }
      const nodeBounds = nodeEl.value.getBoundingClientRect();
      const handleBounds = handle2.value.getBoundingClientRect();
      const style = window.getComputedStyle(viewportNode);
      const { m22: zoom2 } = new window.DOMMatrixReadOnly(style.transform);
      const nextBounds = {
        id: __props.id,
        position: __props.position,
        x: (handleBounds.left - nodeBounds.left) / zoom2,
        y: (handleBounds.top - nodeBounds.top) / zoom2,
        type: type.value,
        nodeId,
        ...getDimensions(handle2.value)
      };
      node2.handleBounds[type.value] = [...node2.handleBounds[type.value] ?? [], nextBounds];
    });
    onUnmounted(() => {
      const handleBounds = node2.handleBounds[type.value];
      if (handleBounds) {
        node2.handleBounds[type.value] = handleBounds.filter((b) => b.id !== __props.id);
      }
    });
    function onPointerDown(event) {
      const isMouseTriggered = isMouseEvent(event);
      if (isConnectable.value && isConnectableStart.value && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
        handlePointerDown(event);
      }
    }
    function onClick(event) {
      if (!nodeId || !connectionClickStartHandle.value && !isConnectableStart.value) {
        return;
      }
      if (isConnectable.value) {
        handleClick(event);
      }
    }
    __expose({
      handleClick,
      handlePointerDown,
      onClick,
      onPointerDown
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "handle",
        ref: handle2,
        "data-id": `${unref(flowId)}-${unref(nodeId)}-${__props.id}-${type.value}`,
        "data-handleid": __props.id,
        "data-nodeid": unref(nodeId),
        "data-handlepos": _ctx.position,
        class: normalizeClass(["vue-flow__handle", [
          `vue-flow__handle-${_ctx.position}`,
          `vue-flow__handle-${__props.id}`,
          unref(noDragClassName),
          unref(noPanClassName),
          type.value,
          {
            connectable: isConnectable.value,
            connecting: isClickConnecting.value,
            connectablestart: isConnectableStart.value,
            connectableend: isConnectableEnd.value,
            connectionindicator: isConnectable.value && (isConnectableStart.value && !isConnecting.value || isConnectableEnd.value && isConnecting.value)
          }
        ]]),
        onMousedown: onPointerDown,
        onTouchstartPassive: onPointerDown,
        onClick
      }, [
        renderSlot(_ctx.$slots, "default", { id: _ctx.id })
      ], 42, _hoisted_1$9$1);
    };
  }
});
const DefaultNode = function({
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
  label: _label,
  connectable = true,
  isValidTargetPos,
  isValidSourcePos,
  data
}) {
  const label2 = data.label || _label;
  return [
    h(_sfc_main$f$1, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
    typeof label2 !== "string" && label2 ? h(label2) : h(Fragment, [label2]),
    h(_sfc_main$f$1, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
  ];
};
DefaultNode.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
DefaultNode.inheritAttrs = false;
DefaultNode.compatConfig = { MODE: 3 };
const DefaultNode$1 = DefaultNode;
const OutputNode = function({
  targetPosition = Position.Top,
  label: _label,
  connectable = true,
  isValidTargetPos,
  data
}) {
  const label2 = data.label || _label;
  return [
    h(_sfc_main$f$1, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
    typeof label2 !== "string" && label2 ? h(label2) : h(Fragment, [label2])
  ];
};
OutputNode.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
OutputNode.inheritAttrs = false;
OutputNode.compatConfig = { MODE: 3 };
const OutputNode$1 = OutputNode;
const InputNode = function({
  sourcePosition = Position.Bottom,
  label: _label,
  connectable = true,
  isValidSourcePos,
  data
}) {
  const label2 = data.label || _label;
  return [
    typeof label2 !== "string" && label2 ? h(label2) : h(Fragment, [label2]),
    h(_sfc_main$f$1, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
  ];
};
InputNode.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
InputNode.inheritAttrs = false;
InputNode.compatConfig = { MODE: 3 };
const InputNode$1 = InputNode;
const _hoisted_1$8$1 = ["transform"];
const _hoisted_2$2$2 = ["width", "height", "x", "y", "rx", "ry"];
const _hoisted_3$1$2 = ["y"];
const __default__$e = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
};
const _sfc_main$e$1 = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: {
    x: {},
    y: {},
    label: {},
    labelStyle: { default: () => ({}) },
    labelShowBg: { type: Boolean, default: true },
    labelBgStyle: { default: () => ({}) },
    labelBgPadding: { default: () => [2, 4] },
    labelBgBorderRadius: { default: 2 }
  },
  setup(__props) {
    const box = ref({ x: 0, y: 0, width: 0, height: 0 });
    const el = ref(null);
    const transform = computed(() => `translate(${__props.x - box.value.width / 2} ${__props.y - box.value.height / 2})`);
    onMounted(getBox);
    watch([() => __props.x, () => __props.y, el, () => __props.label], getBox);
    function getBox() {
      if (!el.value) {
        return;
      }
      const nextBox = el.value.getBBox();
      if (nextBox.width !== box.value.width || nextBox.height !== box.value.height) {
        box.value = nextBox;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("g", {
        transform: transform.value,
        class: "vue-flow__edge-textwrapper"
      }, [
        _ctx.labelShowBg ? (openBlock(), createElementBlock("rect", {
          key: 0,
          class: "vue-flow__edge-textbg",
          width: `${box.value.width + 2 * _ctx.labelBgPadding[0]}px`,
          height: `${box.value.height + 2 * _ctx.labelBgPadding[1]}px`,
          x: -_ctx.labelBgPadding[0],
          y: -_ctx.labelBgPadding[1],
          style: normalizeStyle(_ctx.labelBgStyle),
          rx: _ctx.labelBgBorderRadius,
          ry: _ctx.labelBgBorderRadius
        }, null, 12, _hoisted_2$2$2)) : createCommentVNode("", true),
        createBaseVNode("text", mergeProps(_ctx.$attrs, {
          ref_key: "el",
          ref: el,
          class: "vue-flow__edge-text",
          y: box.value.height / 2,
          dy: "0.3em",
          style: _ctx.labelStyle
        }), [
          renderSlot(_ctx.$slots, "default", {}, () => [
            typeof _ctx.label !== "string" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64))
          ])
        ], 16, _hoisted_3$1$2)
      ], 8, _hoisted_1$8$1);
    };
  }
});
const _hoisted_1$7$1 = ["id", "d", "marker-end", "marker-start"];
const _hoisted_2$1$2 = ["d", "stroke-width"];
const __default__$d = {
  name: "BaseEdge",
  inheritAttrs: false,
  compatConfig: { MODE: 3 }
};
const _sfc_main$d$1 = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: {
    id: {},
    labelX: {},
    labelY: {},
    path: {},
    label: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: { default: 20 },
    labelStyle: {},
    labelShowBg: { type: Boolean },
    labelBgStyle: {},
    labelBgPadding: {},
    labelBgBorderRadius: {}
  },
  setup(__props, { expose: __expose }) {
    const pathEl = ref(null);
    const interactionEl = ref(null);
    const labelEl = ref(null);
    const attrs = useAttrs();
    __expose({
      pathEl,
      interactionEl,
      labelEl
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("path", mergeProps(unref(attrs), {
          id: _ctx.id,
          ref_key: "pathEl",
          ref: pathEl,
          d: _ctx.path,
          class: "vue-flow__edge-path",
          "marker-end": _ctx.markerEnd,
          "marker-start": _ctx.markerStart
        }), null, 16, _hoisted_1$7$1),
        _ctx.interactionWidth ? (openBlock(), createElementBlock("path", {
          key: 0,
          ref_key: "interactionEl",
          ref: interactionEl,
          fill: "none",
          d: _ctx.path,
          "stroke-width": _ctx.interactionWidth,
          "stroke-opacity": 0,
          class: "vue-flow__edge-interaction"
        }, null, 8, _hoisted_2$1$2)) : createCommentVNode("", true),
        _ctx.label && _ctx.labelX && _ctx.labelY ? (openBlock(), createBlock(_sfc_main$e$1, {
          key: 1,
          ref_key: "labelEl",
          ref: labelEl,
          x: _ctx.labelX,
          y: _ctx.labelY,
          label: _ctx.label,
          "label-show-bg": _ctx.labelShowBg,
          "label-bg-style": _ctx.labelBgStyle,
          "label-bg-padding": _ctx.labelBgPadding,
          "label-bg-border-radius": _ctx.labelBgBorderRadius,
          "label-style": _ctx.labelStyle
        }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
function getSimpleEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY
}) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getBezierEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourceControlX,
  sourceControlY,
  targetControlX,
  targetControlY
}) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  } else {
    return curvature * 25 * Math.sqrt(-distance2);
  }
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  let ctX, ctY;
  switch (pos) {
    case Position.Left:
      ctX = x1 - calculateControlOffset(x1 - x2, c);
      ctY = y1;
      break;
    case Position.Right:
      ctX = x1 + calculateControlOffset(x2 - x1, c);
      ctY = y1;
      break;
    case Position.Top:
      ctX = x1;
      ctY = y1 - calculateControlOffset(y1 - y2, c);
      break;
    case Position.Bottom:
      ctX = x1;
      ctY = y1 + calculateControlOffset(y2 - y1, c);
      break;
  }
  return [ctX, ctY];
}
function getBezierPath(bezierPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    curvature = 0.25
  } = bezierPathParams;
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
function getControl({ pos, x1, y1, x2, y2 }) {
  let ctX, ctY;
  switch (pos) {
    case Position.Left:
    case Position.Right:
      ctX = 0.5 * (x1 + x2);
      ctY = y1;
      break;
    case Position.Top:
    case Position.Bottom:
      ctX = x1;
      ctY = 0.5 * (y1 + y2);
      break;
  }
  return [ctX, ctY];
}
function getSimpleBezierPath(simpleBezierPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top
  } = simpleBezierPathParams;
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [centerX, centerY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    centerX,
    centerY,
    offsetX,
    offsetY
  ];
}
const handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
function getDirection$1({
  source,
  sourcePosition = Position.Bottom,
  target: target2
}) {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target2.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target2.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function distance(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
function getPoints({
  source,
  sourcePosition = Position.Bottom,
  target: target2,
  targetPosition = Position.Top,
  center,
  offset
}) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target2.x + targetDir.x * offset, y: target2.y + targetDir.y * offset };
  const dir = getDirection$1({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points;
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getSimpleEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target2.x,
    targetY: target2.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = center.x ?? defaultCenterX;
    centerY = center.y ?? defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target2[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target2[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target2
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath(smoothStepPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    borderRadius = 5,
    centerX,
    centerY,
    offset = 20
  } = smoothStepPathParams;
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset
  });
  const path = points.reduce((res, p, i) => {
    let segment;
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
function getStraightPath(straightEdgeParams) {
  const { sourceX, sourceY, targetX, targetY } = straightEdgeParams;
  const [centerX, centerY, offsetX, offsetY] = getSimpleEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, centerX, centerY, offsetX, offsetY];
}
const StraightEdge = defineComponent({
  name: "StraightEdge",
  props: [
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getStraightPath(props);
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const StraightEdge$1 = StraightEdge;
const SmoothStepEdge = defineComponent({
  name: "SmoothStepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "borderRadius",
    "markerEnd",
    "markerStart",
    "interactionWidth",
    "offset"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getSmoothStepPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const SmoothStepEdge$1 = SmoothStepEdge;
const StepEdge = defineComponent({
  name: "StepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  setup(props, { attrs }) {
    return () => h(SmoothStepEdge$1, { ...props, ...attrs, borderRadius: 0 });
  }
});
const StepEdge$1 = StepEdge;
const BezierEdge = defineComponent({
  name: "BezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "curvature",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getBezierPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const BezierEdge$1 = BezierEdge;
const SimpleBezierEdge = defineComponent({
  name: "SimpleBezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getSimpleBezierPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const SimpleBezierEdge$1 = SimpleBezierEdge;
const defaultNodeTypes = {
  input: InputNode$1,
  default: DefaultNode$1,
  output: OutputNode$1
};
const defaultEdgeTypes = {
  default: BezierEdge$1,
  straight: StraightEdge$1,
  step: StepEdge$1,
  smoothstep: SmoothStepEdge$1,
  simplebezier: SimpleBezierEdge$1
};
function useGetters(state, nodeLookup, edgeLookup) {
  const getNode = computed(() => (id2) => nodeLookup.value.get(id2));
  const getEdge = computed(() => (id2) => edgeLookup.value.get(id2));
  const getEdgeTypes = computed(() => {
    const edgeTypes = {
      ...defaultEdgeTypes,
      ...state.edgeTypes
    };
    const keys = Object.keys(edgeTypes);
    for (const e of state.edges) {
      e.type && !keys.includes(e.type) && (edgeTypes[e.type] = e.type);
    }
    return edgeTypes;
  });
  const getNodeTypes = computed(() => {
    const nodeTypes = {
      ...defaultNodeTypes,
      ...state.nodeTypes
    };
    const keys = Object.keys(nodeTypes);
    for (const n of state.nodes) {
      n.type && !keys.includes(n.type) && (nodeTypes[n.type] = n.type);
    }
    return nodeTypes;
  });
  const getNodes = computed(() => {
    if (state.onlyRenderVisibleElements) {
      return getNodesInside(
        state.nodes,
        {
          x: 0,
          y: 0,
          width: state.dimensions.width,
          height: state.dimensions.height
        },
        state.viewport,
        true
      );
    }
    return state.nodes;
  });
  const getEdges = computed(() => {
    if (state.onlyRenderVisibleElements) {
      const visibleEdges = [];
      for (const edge2 of state.edges) {
        const source = nodeLookup.value.get(edge2.source);
        const target2 = nodeLookup.value.get(edge2.target);
        if (isEdgeVisible({
          sourcePos: source.computedPosition || { x: 0, y: 0 },
          targetPos: target2.computedPosition || { x: 0, y: 0 },
          sourceWidth: source.dimensions.width,
          sourceHeight: source.dimensions.height,
          targetWidth: target2.dimensions.width,
          targetHeight: target2.dimensions.height,
          width: state.dimensions.width,
          height: state.dimensions.height,
          viewport: state.viewport
        })) {
          visibleEdges.push(edge2);
        }
      }
      return visibleEdges;
    }
    return state.edges;
  });
  const getElements = computed(() => [...getNodes.value, ...getEdges.value]);
  const getSelectedNodes = computed(() => {
    const selectedNodes = [];
    for (const node2 of state.nodes) {
      if (node2.selected) {
        selectedNodes.push(node2);
      }
    }
    return selectedNodes;
  });
  const getSelectedEdges = computed(() => {
    const selectedEdges = [];
    for (const edge2 of state.edges) {
      if (edge2.selected) {
        selectedEdges.push(edge2);
      }
    }
    return selectedEdges;
  });
  const getSelectedElements = computed(() => [
    ...getSelectedNodes.value,
    ...getSelectedEdges.value
  ]);
  const getNodesInitialized = computed(() => {
    const initializedNodes = [];
    for (const node2 of state.nodes) {
      if (!!node2.dimensions.width && !!node2.dimensions.height && node2.handleBounds !== void 0) {
        initializedNodes.push(node2);
      }
    }
    return initializedNodes;
  });
  const areNodesInitialized = computed(
    () => getNodes.value.length > 0 && getNodesInitialized.value.length === getNodes.value.length
  );
  return {
    getNode,
    getEdge,
    getElements,
    getEdgeTypes,
    getNodeTypes,
    getEdges,
    getNodes,
    getSelectedElements,
    getSelectedNodes,
    getSelectedEdges,
    getNodesInitialized,
    areNodesInitialized
  };
}
class Storage {
  constructor() {
    this.currentId = 0;
    this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var _a;
    const vueApp = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app;
    const existingInstance = (vueApp == null ? void 0 : vueApp.config.globalProperties.$vueFlowStorage) ?? Storage.instance;
    Storage.instance = existingInstance ?? new Storage();
    if (vueApp) {
      vueApp.config.globalProperties.$vueFlowStorage = Storage.instance;
    }
    return Storage.instance;
  }
  set(id2, flow) {
    return this.flows.set(id2, flow);
  }
  get(id2) {
    return this.flows.get(id2);
  }
  remove(id2) {
    return this.flows.delete(id2);
  }
  create(id2, preloadedState) {
    const state = useState();
    const reactiveState = reactive(state);
    const hooksOn = {};
    for (const [n, h2] of Object.entries(reactiveState.hooks)) {
      const name = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
      hooksOn[name] = h2.on;
    }
    const emits = {};
    for (const [n, h2] of Object.entries(reactiveState.hooks)) {
      emits[n] = h2.trigger;
    }
    const nodeLookup = computed(() => {
      const nodesMap = /* @__PURE__ */ new Map();
      for (const node2 of reactiveState.nodes) {
        nodesMap.set(node2.id, node2);
      }
      return nodesMap;
    });
    const edgeLookup = computed(() => {
      const edgesMap = /* @__PURE__ */ new Map();
      for (const edge2 of reactiveState.edges) {
        edgesMap.set(edge2.id, edge2);
      }
      return edgesMap;
    });
    const getters = useGetters(reactiveState, nodeLookup, edgeLookup);
    const actions2 = useActions(reactiveState, nodeLookup, edgeLookup);
    actions2.setState({ ...reactiveState, ...preloadedState });
    const flow = {
      ...hooksOn,
      ...getters,
      ...actions2,
      ...toRefs(reactiveState),
      nodeLookup,
      edgeLookup,
      emits,
      id: id2,
      vueFlowVersion: "1.42.1",
      $destroy: () => {
        this.remove(id2);
      }
    };
    this.set(id2, flow);
    return flow;
  }
  getId() {
    return `vue-flow-${this.currentId++}`;
  }
}
function useVueFlow(idOrOpts) {
  const storage = Storage.getInstance();
  const scope = getCurrentScope();
  const isOptsObj = typeof idOrOpts === "object";
  const options = isOptsObj ? idOrOpts : { id: idOrOpts };
  const id2 = options.id;
  const vueFlowId = id2 ?? (scope == null ? void 0 : scope.vueFlowId);
  let vueFlow;
  if (scope) {
    const injectedState = inject(VueFlow, null);
    if (typeof injectedState !== "undefined" && injectedState !== null && (!vueFlowId || injectedState.id === vueFlowId)) {
      vueFlow = injectedState;
    }
  }
  if (!vueFlow) {
    if (vueFlowId) {
      vueFlow = storage.get(vueFlowId);
    }
  }
  if (!vueFlow || vueFlowId && vueFlow.id !== vueFlowId) {
    const name = id2 ?? storage.getId();
    const state = storage.create(name, options);
    vueFlow = state;
    const vfScope = scope ?? effectScope(true);
    vfScope.run(() => {
      watch(
        state.applyDefault,
        (shouldApplyDefault, __, onCleanup) => {
          const nodesChangeHandler = (changes) => {
            state.applyNodeChanges(changes);
          };
          const edgesChangeHandler = (changes) => {
            state.applyEdgeChanges(changes);
          };
          if (shouldApplyDefault) {
            state.onNodesChange(nodesChangeHandler);
            state.onEdgesChange(edgesChangeHandler);
          } else {
            state.hooks.value.nodesChange.off(nodesChangeHandler);
            state.hooks.value.edgesChange.off(edgesChangeHandler);
          }
          onCleanup(() => {
            state.hooks.value.nodesChange.off(nodesChangeHandler);
            state.hooks.value.edgesChange.off(edgesChangeHandler);
          });
        },
        { immediate: true }
      );
      tryOnScopeDispose(() => {
        if (vueFlow) {
          const storedInstance = storage.get(vueFlow.id);
          if (storedInstance) {
            storedInstance.$destroy();
          } else {
            warn(`No store instance found for id ${vueFlow.id} in storage.`);
          }
        }
      });
    });
  } else {
    if (isOptsObj) {
      vueFlow.setState(options);
    }
  }
  if (scope) {
    provide(VueFlow, vueFlow);
    scope.vueFlowId = vueFlow.id;
  }
  if (isOptsObj) {
    const instance = getCurrentInstance();
    if ((instance == null ? void 0 : instance.type.name) !== "VueFlow") {
      vueFlow.emits.error(new VueFlowError(ErrorCode.USEVUEFLOW_OPTIONS));
    }
  }
  return vueFlow;
}
function useResizeHandler(viewportEl) {
  const { emits, dimensions } = useVueFlow();
  let resizeObserver;
  onMounted(() => {
    const rendererNode = viewportEl.value;
    const updateDimensions = () => {
      if (!rendererNode) {
        return;
      }
      const size = getDimensions(rendererNode);
      if (size.width === 0 || size.height === 0) {
        emits.error(new VueFlowError(ErrorCode.MISSING_VIEWPORT_DIMENSIONS));
      }
      dimensions.value = { width: size.width || 500, height: size.height || 500 };
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (rendererNode) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(rendererNode);
    }
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateDimensions);
      if (resizeObserver && rendererNode) {
        resizeObserver.unobserve(rendererNode);
      }
    });
  });
}
const __default__$c = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
};
const _sfc_main$c$1 = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: {
    userSelectionRect: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vue-flow__selection vue-flow__container",
        style: normalizeStyle({
          width: `${_ctx.userSelectionRect.width}px`,
          height: `${_ctx.userSelectionRect.height}px`,
          transform: `translate(${_ctx.userSelectionRect.x}px, ${_ctx.userSelectionRect.y}px)`
        })
      }, null, 4);
    };
  }
});
const _hoisted_1$6$1 = ["tabIndex"];
const __default__$b = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
};
const _sfc_main$b$1 = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  setup(__props) {
    const { emits, viewport, getSelectedNodes, noPanClassName, disableKeyboardA11y, userSelectionActive } = useVueFlow();
    const updatePositions = useUpdateNodePositions();
    const el = ref(null);
    const dragging = useDrag({
      el,
      onStart(args) {
        emits.selectionDragStart(args);
      },
      onDrag(args) {
        emits.selectionDrag(args);
      },
      onStop(args) {
        emits.selectionDragStop(args);
      }
    });
    onMounted(() => {
      var _a;
      if (!disableKeyboardA11y.value) {
        (_a = el.value) == null ? void 0 : _a.focus({ preventScroll: true });
      }
    });
    const selectedNodesBBox = computed(() => getRectOfNodes(getSelectedNodes.value));
    const innerStyle = computed(() => ({
      width: `${selectedNodesBBox.value.width}px`,
      height: `${selectedNodesBBox.value.height}px`,
      top: `${selectedNodesBBox.value.y}px`,
      left: `${selectedNodesBBox.value.x}px`
    }));
    function onContextMenu(event) {
      emits.selectionContextMenu({ event, nodes: getSelectedNodes.value });
    }
    function onKeyDown2(event) {
      if (disableKeyboardA11y) {
        return;
      }
      if (arrowKeyDiffs[event.key]) {
        event.preventDefault();
        updatePositions(
          {
            x: arrowKeyDiffs[event.key].x,
            y: arrowKeyDiffs[event.key].y
          },
          event.shiftKey
        );
      }
    }
    return (_ctx, _cache) => {
      return !unref(userSelectionActive) && selectedNodesBBox.value.width && selectedNodesBBox.value.height ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vue-flow__nodesselection vue-flow__container", unref(noPanClassName)]),
        style: normalizeStyle({ transform: `translate(${unref(viewport).x}px,${unref(viewport).y}px) scale(${unref(viewport).zoom})` })
      }, [
        createBaseVNode("div", {
          ref_key: "el",
          ref: el,
          class: normalizeClass([{ dragging: unref(dragging) }, "vue-flow__nodesselection-rect"]),
          style: normalizeStyle(innerStyle.value),
          tabIndex: unref(disableKeyboardA11y) ? void 0 : -1,
          onContextmenu: onContextMenu,
          onKeydown: onKeyDown2
        }, null, 46, _hoisted_1$6$1)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
function getMousePosition(event, containerBounds) {
  return {
    x: event.clientX - containerBounds.left,
    y: event.clientY - containerBounds.top
  };
}
const __default__$a = {
  name: "Pane",
  compatConfig: { MODE: 3 }
};
const _sfc_main$a$1 = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    isSelecting: { type: Boolean },
    selectionKeyPressed: { type: Boolean }
  },
  setup(__props) {
    const {
      vueFlowRef,
      nodes,
      viewport,
      emits,
      userSelectionActive,
      removeSelectedElements,
      userSelectionRect,
      elementsSelectable,
      nodesSelectionActive,
      getSelectedEdges,
      getSelectedNodes,
      removeNodes,
      removeEdges,
      selectionMode,
      deleteKeyCode,
      multiSelectionKeyCode,
      multiSelectionActive,
      edgeLookup,
      nodeLookup,
      connectionLookup,
      defaultEdgeOptions
    } = useVueFlow();
    const container2 = ref(null);
    const selectedNodeIds = ref(/* @__PURE__ */ new Set());
    const selectedEdgeIds = ref(/* @__PURE__ */ new Set());
    const containerBounds = ref();
    const hasActiveSelection = toRef(() => elementsSelectable.value && (__props.isSelecting || userSelectionActive.value));
    let selectionInProgress = false;
    let selectionStarted = false;
    const deleteKeyPressed = useKeyPress(deleteKeyCode, { actInsideInputWithModifier: false });
    const multiSelectKeyPressed = useKeyPress(multiSelectionKeyCode);
    watch(deleteKeyPressed, (isKeyPressed) => {
      if (!isKeyPressed) {
        return;
      }
      removeNodes(getSelectedNodes.value);
      removeEdges(getSelectedEdges.value);
      nodesSelectionActive.value = false;
    });
    watch(multiSelectKeyPressed, (isKeyPressed) => {
      multiSelectionActive.value = isKeyPressed;
    });
    function wrapHandler(handler, containerRef) {
      return (event) => {
        if (event.target !== containerRef) {
          return;
        }
        handler == null ? void 0 : handler(event);
      };
    }
    function onClick(event) {
      if (selectionInProgress) {
        selectionInProgress = false;
        return;
      }
      emits.paneClick(event);
      removeSelectedElements();
      nodesSelectionActive.value = false;
    }
    function onContextMenu(event) {
      event.preventDefault();
      event.stopPropagation();
      emits.paneContextMenu(event);
    }
    function onWheel(event) {
      emits.paneScroll(event);
    }
    function onPointerDown(event) {
      var _a, _b, _c;
      containerBounds.value = (_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!elementsSelectable.value || !__props.isSelecting || event.button !== 0 || event.target !== container2.value || !containerBounds.value) {
        return;
      }
      (_c = (_b = event.target) == null ? void 0 : _b.setPointerCapture) == null ? void 0 : _c.call(_b, event.pointerId);
      const { x, y } = getMousePosition(event, containerBounds.value);
      selectionStarted = true;
      selectionInProgress = false;
      removeSelectedElements();
      userSelectionRect.value = {
        width: 0,
        height: 0,
        startX: x,
        startY: y,
        x,
        y
      };
      emits.selectionStart(event);
    }
    function onPointerMove(event) {
      var _a;
      if (!containerBounds.value || !userSelectionRect.value) {
        return;
      }
      selectionInProgress = true;
      const { x: mouseX, y: mouseY } = getEventPosition(event, containerBounds.value);
      const { startX = 0, startY = 0 } = userSelectionRect.value;
      const nextUserSelectRect = {
        startX,
        startY,
        x: mouseX < startX ? mouseX : startX,
        y: mouseY < startY ? mouseY : startY,
        width: Math.abs(mouseX - startX),
        height: Math.abs(mouseY - startY)
      };
      const prevSelectedNodeIds = selectedNodeIds.value;
      const prevSelectedEdgeIds = selectedEdgeIds.value;
      selectedNodeIds.value = new Set(
        getNodesInside(nodes.value, nextUserSelectRect, viewport.value, selectionMode.value === SelectionMode.Partial, true).map(
          (node2) => node2.id
        )
      );
      selectedEdgeIds.value = /* @__PURE__ */ new Set();
      const edgesSelectable = ((_a = defaultEdgeOptions.value) == null ? void 0 : _a.selectable) ?? true;
      for (const nodeId of selectedNodeIds.value) {
        const connections = connectionLookup.value.get(nodeId);
        if (!connections) {
          continue;
        }
        for (const { edgeId } of connections.values()) {
          const edge2 = edgeLookup.value.get(edgeId);
          if (edge2 && (edge2.selectable ?? edgesSelectable)) {
            selectedEdgeIds.value.add(edgeId);
          }
        }
      }
      if (!areSetsEqual(prevSelectedNodeIds, selectedNodeIds.value)) {
        const changes = getSelectionChanges(nodeLookup.value, selectedNodeIds.value, true);
        emits.nodesChange(changes);
      }
      if (!areSetsEqual(prevSelectedEdgeIds, selectedEdgeIds.value)) {
        const changes = getSelectionChanges(edgeLookup.value, selectedEdgeIds.value);
        emits.edgesChange(changes);
      }
      userSelectionRect.value = nextUserSelectRect;
      userSelectionActive.value = true;
      nodesSelectionActive.value = false;
    }
    function onPointerUp(event) {
      var _a;
      if (event.button !== 0 || !selectionStarted) {
        return;
      }
      (_a = event.target) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
      if (!userSelectionActive.value && userSelectionRect.value && event.target === container2.value) {
        onClick(event);
      }
      userSelectionActive.value = false;
      userSelectionRect.value = null;
      nodesSelectionActive.value = selectedNodeIds.value.size > 0;
      emits.selectionEnd(event);
      if (__props.selectionKeyPressed) {
        selectionInProgress = false;
      }
      selectionStarted = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container2,
        class: normalizeClass(["vue-flow__pane vue-flow__container", { selection: _ctx.isSelecting }]),
        onClick: _cache[0] || (_cache[0] = (event) => hasActiveSelection.value ? void 0 : wrapHandler(onClick, container2.value)(event)),
        onContextmenu: _cache[1] || (_cache[1] = ($event) => wrapHandler(onContextMenu, container2.value)($event)),
        onWheelPassive: _cache[2] || (_cache[2] = ($event) => wrapHandler(onWheel, container2.value)($event)),
        onPointerenter: _cache[3] || (_cache[3] = (event) => hasActiveSelection.value ? void 0 : unref(emits).paneMouseEnter(event)),
        onPointerdown: _cache[4] || (_cache[4] = (event) => hasActiveSelection.value ? onPointerDown(event) : unref(emits).paneMouseMove(event)),
        onPointermove: _cache[5] || (_cache[5] = (event) => hasActiveSelection.value ? onPointerMove(event) : unref(emits).paneMouseMove(event)),
        onPointerup: _cache[6] || (_cache[6] = (event) => hasActiveSelection.value ? onPointerUp(event) : void 0),
        onPointerleave: _cache[7] || (_cache[7] = ($event) => unref(emits).paneMouseLeave($event))
      }, [
        renderSlot(_ctx.$slots, "default"),
        unref(userSelectionActive) && unref(userSelectionRect) ? (openBlock(), createBlock(_sfc_main$c$1, {
          key: 0,
          "user-selection-rect": unref(userSelectionRect)
        }, null, 8, ["user-selection-rect"])) : createCommentVNode("", true),
        unref(nodesSelectionActive) && unref(getSelectedNodes).length ? (openBlock(), createBlock(_sfc_main$b$1, { key: 1 })) : createCommentVNode("", true)
      ], 34);
    };
  }
});
const __default__$9 = {
  name: "Transform",
  compatConfig: { MODE: 3 }
};
const _sfc_main$9$1 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  setup(__props) {
    const { viewport, fitViewOnInit, fitViewOnInitDone } = useVueFlow();
    const isHidden = computed(() => {
      if (fitViewOnInit.value) {
        return !fitViewOnInitDone.value;
      }
      return false;
    });
    const transform = computed(() => `translate(${viewport.value.x}px,${viewport.value.y}px) scale(${viewport.value.zoom})`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vue-flow__transformationpane vue-flow__container",
        style: normalizeStyle({ transform: transform.value, opacity: isHidden.value ? 0 : void 0 })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
const __default__$8 = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
};
const _sfc_main$8$1 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const {
      minZoom,
      maxZoom,
      defaultViewport,
      translateExtent,
      zoomActivationKeyCode,
      selectionKeyCode,
      panActivationKeyCode,
      panOnScroll,
      panOnScrollMode,
      panOnScrollSpeed,
      panOnDrag,
      zoomOnDoubleClick,
      zoomOnPinch,
      zoomOnScroll,
      preventScrolling,
      noWheelClassName,
      noPanClassName,
      emits,
      connectionStartHandle,
      userSelectionActive,
      paneDragging,
      d3Zoom: storeD3Zoom,
      d3Selection: storeD3Selection,
      d3ZoomHandler: storeD3ZoomHandler,
      viewport,
      viewportRef,
      paneClickDistance
    } = useVueFlow();
    useResizeHandler(viewportRef);
    const isZoomingOrPanning = ref(false);
    const isPanScrolling = ref(false);
    let panScrollTimeout = null;
    let zoomedWithRightMouseButton = false;
    let mouseButton = 0;
    let prevTransform = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const panKeyPressed = useKeyPress(panActivationKeyCode);
    const selectionKeyPressed = useKeyPress(selectionKeyCode);
    const zoomKeyPressed = useKeyPress(zoomActivationKeyCode);
    const shouldPanOnDrag = toRef(
      () => (!selectionKeyPressed.value || selectionKeyPressed.value && selectionKeyCode.value === true) && (panKeyPressed.value || panOnDrag.value)
    );
    const shouldPanOnScroll = toRef(() => panKeyPressed.value || panOnScroll.value);
    const isSelecting = toRef(() => selectionKeyPressed.value || selectionKeyCode.value === true && shouldPanOnDrag.value !== true);
    onMounted(() => {
      if (!viewportRef.value) {
        warn("Viewport element is missing");
        return;
      }
      const viewportElement = viewportRef.value;
      const bbox = viewportElement.getBoundingClientRect();
      const d3Zoom = zoom$1().clickDistance(paneClickDistance.value).scaleExtent([minZoom.value, maxZoom.value]).translateExtent(translateExtent.value);
      const d3Selection = select$2(viewportElement).call(d3Zoom);
      const d3ZoomHandler = d3Selection.on("wheel.zoom");
      const updatedTransform = identity$2.translate(defaultViewport.value.x ?? 0, defaultViewport.value.y ?? 0).scale(clamp(defaultViewport.value.zoom ?? 1, minZoom.value, maxZoom.value));
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = d3Zoom.constrain()(updatedTransform, extent, translateExtent.value);
      d3Zoom.transform(d3Selection, constrainedTransform);
      d3Zoom.wheelDelta(wheelDelta);
      storeD3Zoom.value = d3Zoom;
      storeD3Selection.value = d3Selection;
      storeD3ZoomHandler.value = d3ZoomHandler;
      viewport.value = { x: constrainedTransform.x, y: constrainedTransform.y, zoom: constrainedTransform.k };
      d3Zoom.on("start", (event) => {
        var _a;
        if (!event.sourceEvent) {
          return null;
        }
        mouseButton = event.sourceEvent.button;
        isZoomingOrPanning.value = true;
        const flowTransform = eventToFlowTransform(event.transform);
        if (((_a = event.sourceEvent) == null ? void 0 : _a.type) === "mousedown") {
          paneDragging.value = true;
        }
        prevTransform = flowTransform;
        emits.viewportChangeStart(flowTransform);
        emits.moveStart({ event, flowTransform });
      });
      d3Zoom.on("end", (event) => {
        if (!event.sourceEvent) {
          return null;
        }
        isZoomingOrPanning.value = false;
        paneDragging.value = false;
        if (isRightClickPan(shouldPanOnDrag.value, mouseButton ?? 0) && !zoomedWithRightMouseButton) {
          emits.paneContextMenu(event.sourceEvent);
        }
        zoomedWithRightMouseButton = false;
        if (viewChanged(prevTransform, event.transform)) {
          const flowTransform = eventToFlowTransform(event.transform);
          prevTransform = flowTransform;
          emits.viewportChangeEnd(flowTransform);
          emits.moveEnd({ event, flowTransform });
        }
      });
      d3Zoom.filter((event) => {
        var _a;
        const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
        const pinchZoom = zoomOnPinch.value && event.ctrlKey;
        const eventButton = event.button;
        if (eventButton === 1 && event.type === "mousedown" && (isWrappedWithClass(event, "vue-flow__node") || isWrappedWithClass(event, "vue-flow__edge"))) {
          return true;
        }
        if (!shouldPanOnDrag.value && !zoomScroll && !shouldPanOnScroll.value && !zoomOnDoubleClick.value && !zoomOnPinch.value) {
          return false;
        }
        if (userSelectionActive.value) {
          return false;
        }
        if (!zoomOnDoubleClick.value && event.type === "dblclick") {
          return false;
        }
        if (isWrappedWithClass(event, noWheelClassName.value) && event.type === "wheel") {
          return false;
        }
        if (isWrappedWithClass(event, noPanClassName.value) && (event.type !== "wheel" || shouldPanOnScroll.value && event.type === "wheel" && !zoomKeyPressed.value)) {
          return false;
        }
        if (!zoomOnPinch.value && event.ctrlKey && event.type === "wheel") {
          return false;
        }
        if (!zoomScroll && !shouldPanOnScroll.value && !pinchZoom && event.type === "wheel") {
          return false;
        }
        if (!zoomOnPinch && event.type === "touchstart" && ((_a = event.touches) == null ? void 0 : _a.length) > 1) {
          event.preventDefault();
          return false;
        }
        if (!shouldPanOnDrag.value && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        if (selectionKeyCode.value === true && Array.isArray(panOnDrag.value) && panOnDrag.value.includes(0) && eventButton === 0) {
          return false;
        }
        if (Array.isArray(panOnDrag.value) && !panOnDrag.value.includes(eventButton) && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        const buttonAllowed = Array.isArray(panOnDrag.value) && panOnDrag.value.includes(eventButton) || selectionKeyCode.value === true && Array.isArray(panOnDrag.value) && !panOnDrag.value.includes(0) || !eventButton || eventButton <= 1;
        return (!event.ctrlKey || panKeyPressed.value || event.type === "wheel") && buttonAllowed;
      });
      watch(
        [userSelectionActive, shouldPanOnDrag],
        () => {
          if (userSelectionActive.value && !isZoomingOrPanning.value) {
            d3Zoom.on("zoom", null);
          } else if (!userSelectionActive.value) {
            d3Zoom.on("zoom", (event) => {
              viewport.value = { x: event.transform.x, y: event.transform.y, zoom: event.transform.k };
              const flowTransform = eventToFlowTransform(event.transform);
              zoomedWithRightMouseButton = isRightClickPan(shouldPanOnDrag.value, mouseButton ?? 0);
              emits.viewportChange(flowTransform);
              emits.move({ event, flowTransform });
            });
          }
        },
        { immediate: true }
      );
      watch(
        [userSelectionActive, shouldPanOnScroll, panOnScrollMode, zoomKeyPressed, zoomOnPinch, preventScrolling, noWheelClassName],
        () => {
          if (shouldPanOnScroll.value && !zoomKeyPressed.value && !userSelectionActive.value) {
            d3Selection.on(
              "wheel.zoom",
              (event) => {
                if (isWrappedWithClass(event, noWheelClassName.value)) {
                  return false;
                }
                const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
                const pinchZoom = zoomOnPinch.value && event.ctrlKey;
                const scrollEventEnabled = !preventScrolling.value || shouldPanOnScroll.value || zoomScroll || pinchZoom;
                if (!scrollEventEnabled) {
                  return false;
                }
                event.preventDefault();
                event.stopImmediatePropagation();
                const currentZoom = d3Selection.property("__zoom").k || 1;
                const _isMacOs = isMacOs();
                if (!panKeyPressed.value && event.ctrlKey && zoomOnPinch.value && _isMacOs) {
                  const point = pointer$2(event);
                  const pinchDelta = wheelDelta(event);
                  const zoom2 = currentZoom * 2 ** pinchDelta;
                  d3Zoom.scaleTo(d3Selection, zoom2, point, event);
                  return;
                }
                const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
                let deltaX = panOnScrollMode.value === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
                let deltaY = panOnScrollMode.value === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
                if (!_isMacOs && event.shiftKey && panOnScrollMode.value !== PanOnScrollMode.Vertical && !deltaX && deltaY) {
                  deltaX = deltaY;
                  deltaY = 0;
                }
                d3Zoom.translateBy(
                  d3Selection,
                  -(deltaX / currentZoom) * panOnScrollSpeed.value,
                  -(deltaY / currentZoom) * panOnScrollSpeed.value
                );
                const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
                if (panScrollTimeout) {
                  clearTimeout(panScrollTimeout);
                }
                if (!isPanScrolling.value) {
                  isPanScrolling.value = true;
                  emits.moveStart({ event, flowTransform: nextViewport });
                  emits.viewportChangeStart(nextViewport);
                } else {
                  emits.move({ event, flowTransform: nextViewport });
                  emits.viewportChange(nextViewport);
                  panScrollTimeout = setTimeout(() => {
                    emits.moveEnd({ event, flowTransform: nextViewport });
                    emits.viewportChangeEnd(nextViewport);
                    isPanScrolling.value = false;
                  }, 150);
                }
              },
              { passive: false }
            );
          } else if (typeof d3ZoomHandler !== "undefined") {
            d3Selection.on(
              "wheel.zoom",
              function(event, d) {
                const invalidEvent = !preventScrolling.value && event.type === "wheel" && !event.ctrlKey;
                const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
                const pinchZoom = zoomOnPinch.value && event.ctrlKey;
                const scrollEventsDisabled = !zoomScroll && !panOnScroll.value && !pinchZoom && event.type === "wheel";
                if (scrollEventsDisabled || invalidEvent || isWrappedWithClass(event, noWheelClassName.value)) {
                  return null;
                }
                event.preventDefault();
                d3ZoomHandler.call(this, event, d);
              },
              { passive: false }
            );
          }
        },
        { immediate: true }
      );
    });
    function isRightClickPan(pan, usedButton) {
      return usedButton === 2 && Array.isArray(pan) && pan.includes(2);
    }
    function wheelDelta(event) {
      const factor = event.ctrlKey && isMacOs() ? 10 : 1;
      return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
    }
    function viewChanged(prevViewport, eventTransform) {
      return prevViewport.x !== eventTransform.x && !Number.isNaN(eventTransform.x) || prevViewport.y !== eventTransform.y && !Number.isNaN(eventTransform.y) || prevViewport.zoom !== eventTransform.k && !Number.isNaN(eventTransform.k);
    }
    function eventToFlowTransform(eventTransform) {
      return {
        x: eventTransform.x,
        y: eventTransform.y,
        zoom: eventTransform.k
      };
    }
    function isWrappedWithClass(event, className) {
      return event.target.closest(`.${className}`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "viewportRef",
        ref: viewportRef,
        class: "vue-flow__viewport vue-flow__container"
      }, [
        createVNode(_sfc_main$a$1, {
          "is-selecting": isSelecting.value,
          "selection-key-pressed": unref(selectionKeyPressed),
          class: normalizeClass({
            connecting: !!unref(connectionStartHandle),
            dragging: unref(paneDragging),
            draggable: unref(panOnDrag) === true || Array.isArray(unref(panOnDrag)) && unref(panOnDrag).includes(0)
          })
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9$1, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["is-selecting", "selection-key-pressed", "class"])
      ], 512);
    };
  }
});
const _hoisted_1$5$2 = ["id"];
const _hoisted_2$8 = ["id"];
const _hoisted_3$6 = ["id"];
const __default__$7 = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
};
const _sfc_main$7$1 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const { id: id2, disableKeyboardA11y, ariaLiveMessage } = useVueFlow();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          id: `${unref(ARIA_NODE_DESC_KEY)}-${unref(id2)}`,
          style: { "display": "none" }
        }, " Press enter or space to select a node. " + toDisplayString(!unref(disableKeyboardA11y) ? "You can then use the arrow keys to move the node around." : "") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, _hoisted_1$5$2),
        createBaseVNode("div", {
          id: `${unref(ARIA_EDGE_DESC_KEY)}-${unref(id2)}`,
          style: { "display": "none" }
        }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, _hoisted_2$8),
        !unref(disableKeyboardA11y) ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: `${unref(ARIA_LIVE_MESSAGE)}-${unref(id2)}`,
          "aria-live": "assertive",
          "aria-atomic": "true",
          style: { "position": "absolute", "width": "1px", "height": "1px", "margin": "-1px", "border": "0", "padding": "0", "overflow": "hidden", "clip": "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
        }, toDisplayString(unref(ariaLiveMessage)), 9, _hoisted_3$6)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
function useOnInitHandler() {
  const vfInstance = useVueFlow();
  watch(
    () => vfInstance.viewportHelper.value.viewportInitialized,
    (isInitialized) => {
      if (isInitialized) {
        setTimeout(() => {
          vfInstance.emits.init(vfInstance);
          vfInstance.emits.paneReady(vfInstance);
        }, 1);
      }
    }
  );
}
function shiftX(x, shift, position2) {
  if (position2 === Position.Left) {
    return x - shift;
  }
  if (position2 === Position.Right) {
    return x + shift;
  }
  return x;
}
function shiftY(y, shift, position2) {
  if (position2 === Position.Top) {
    return y - shift;
  }
  if (position2 === Position.Bottom) {
    return y + shift;
  }
  return y;
}
const EdgeAnchor = function({
  radius = 10,
  centerX = 0,
  centerY = 0,
  position: position2 = Position.Top,
  type
}) {
  return h("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${type}`,
    cx: shiftX(centerX, radius, position2),
    cy: shiftY(centerY, radius, position2),
    r: radius,
    stroke: "transparent",
    fill: "transparent"
  });
};
EdgeAnchor.props = ["radius", "centerX", "centerY", "position", "type"];
EdgeAnchor.compatConfig = { MODE: 3 };
const EdgeAnchor$1 = EdgeAnchor;
const EdgeWrapper = defineComponent({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["id"],
  setup(props) {
    const {
      id: vueFlowId,
      addSelectedEdges,
      connectionMode,
      edgeUpdaterRadius,
      emits,
      nodesSelectionActive,
      noPanClassName,
      getEdgeTypes,
      removeSelectedEdges,
      findEdge,
      findNode,
      isValidConnection,
      multiSelectionActive,
      disableKeyboardA11y,
      elementsSelectable,
      edgesUpdatable,
      edgesFocusable,
      hooks
    } = useVueFlow();
    const edge2 = computed(() => findEdge(props.id));
    const { emit, on } = useEdgeHooks(edge2.value, emits);
    const slots = inject(Slots$1);
    const instance = getCurrentInstance();
    const mouseOver = ref(false);
    const updating = ref(false);
    const nodeId = ref("");
    const handleId = ref(null);
    const edgeUpdaterType = ref("source");
    const edgeEl = ref(null);
    const isSelectable = toRef(
      () => typeof edge2.value.selectable === "undefined" ? elementsSelectable.value : edge2.value.selectable
    );
    const isUpdatable = toRef(() => typeof edge2.value.updatable === "undefined" ? edgesUpdatable.value : edge2.value.updatable);
    const isFocusable = toRef(() => typeof edge2.value.focusable === "undefined" ? edgesFocusable.value : edge2.value.focusable);
    provide(EdgeId, props.id);
    provide(EdgeRef, edgeEl);
    const edgeClass = computed(() => edge2.value.class instanceof Function ? edge2.value.class(edge2.value) : edge2.value.class);
    const edgeStyle = computed(() => edge2.value.style instanceof Function ? edge2.value.style(edge2.value) : edge2.value.style);
    const edgeCmp = computed(() => {
      const name = edge2.value.type || "default";
      const slot = slots == null ? void 0 : slots[`edge-${name}`];
      if (slot) {
        return slot;
      }
      let edgeType = edge2.value.template ?? getEdgeTypes.value[name];
      if (typeof edgeType === "string") {
        if (instance) {
          const components = Object.keys(instance.appContext.components);
          if (components && components.includes(name)) {
            edgeType = resolveComponent(name, false);
          }
        }
      }
      if (edgeType && typeof edgeType !== "string") {
        return edgeType;
      }
      emits.error(new VueFlowError(ErrorCode.EDGE_TYPE_MISSING, edgeType));
      return false;
    });
    const { handlePointerDown } = useHandle({
      nodeId,
      handleId,
      type: edgeUpdaterType,
      isValidConnection,
      edgeUpdaterType,
      onEdgeUpdate,
      onEdgeUpdateEnd
    });
    return () => {
      const sourceNode = findNode(edge2.value.source);
      const targetNode = findNode(edge2.value.target);
      const pathOptions = "pathOptions" in edge2.value ? edge2.value.pathOptions : {};
      if (!sourceNode && !targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge2.value.id, edge2.value.source, edge2.value.target));
        return null;
      }
      if (!sourceNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge2.value.id, edge2.value.source));
        return null;
      }
      if (!targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge2.value.id, edge2.value.target));
        return null;
      }
      if (!edge2.value || edge2.value.hidden || sourceNode.hidden || targetNode.hidden) {
        return null;
      }
      let sourceNodeHandles;
      if (connectionMode.value === ConnectionMode.Strict) {
        sourceNodeHandles = sourceNode.handleBounds.source;
      } else {
        sourceNodeHandles = [...sourceNode.handleBounds.source || [], ...sourceNode.handleBounds.target || []];
      }
      const sourceHandle = getEdgeHandle(sourceNodeHandles, edge2.value.sourceHandle);
      let targetNodeHandles;
      if (connectionMode.value === ConnectionMode.Strict) {
        targetNodeHandles = targetNode.handleBounds.target;
      } else {
        targetNodeHandles = [...targetNode.handleBounds.target || [], ...targetNode.handleBounds.source || []];
      }
      const targetHandle = getEdgeHandle(targetNodeHandles, edge2.value.targetHandle);
      const sourcePosition = (sourceHandle == null ? void 0 : sourceHandle.position) || Position.Bottom;
      const targetPosition = (targetHandle == null ? void 0 : targetHandle.position) || Position.Top;
      const { x: sourceX, y: sourceY } = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
      const { x: targetX, y: targetY } = getHandlePosition(targetNode, targetHandle, targetPosition);
      edge2.value.sourceX = sourceX;
      edge2.value.sourceY = sourceY;
      edge2.value.targetX = targetX;
      edge2.value.targetY = targetY;
      return h(
        "g",
        {
          "ref": edgeEl,
          "key": props.id,
          "data-id": props.id,
          "class": [
            "vue-flow__edge",
            `vue-flow__edge-${edgeCmp.value === false ? "default" : edge2.value.type || "default"}`,
            noPanClassName.value,
            edgeClass.value,
            {
              updating: mouseOver.value,
              selected: edge2.value.selected,
              animated: edge2.value.animated,
              inactive: !isSelectable.value && !hooks.value.edgeClick.hasListeners()
            }
          ],
          "onClick": onEdgeClick,
          "onContextmenu": onEdgeContextMenu,
          "onDblclick": onDoubleClick,
          "onMouseenter": onEdgeMouseEnter,
          "onMousemove": onEdgeMouseMove,
          "onMouseleave": onEdgeMouseLeave,
          "onKeyDown": isFocusable.value ? onKeyDown2 : void 0,
          "tabIndex": isFocusable.value ? 0 : void 0,
          "aria-label": edge2.value.ariaLabel === null ? void 0 : edge2.value.ariaLabel || `Edge from ${edge2.value.source} to ${edge2.value.target}`,
          "aria-describedby": isFocusable.value ? `${ARIA_EDGE_DESC_KEY}-${vueFlowId}` : void 0,
          "role": isFocusable.value ? "button" : "img"
        },
        [
          updating.value ? null : h(edgeCmp.value === false ? getEdgeTypes.value.default : edgeCmp.value, {
            id: props.id,
            sourceNode,
            targetNode,
            source: edge2.value.source,
            target: edge2.value.target,
            type: edge2.value.type,
            updatable: isUpdatable.value,
            selected: edge2.value.selected,
            animated: edge2.value.animated,
            label: edge2.value.label,
            labelStyle: edge2.value.labelStyle,
            labelShowBg: edge2.value.labelShowBg,
            labelBgStyle: edge2.value.labelBgStyle,
            labelBgPadding: edge2.value.labelBgPadding,
            labelBgBorderRadius: edge2.value.labelBgBorderRadius,
            data: edge2.value.data,
            events: { ...edge2.value.events, ...on },
            style: edgeStyle.value,
            markerStart: `url('#${getMarkerId(edge2.value.markerStart, vueFlowId)}')`,
            markerEnd: `url('#${getMarkerId(edge2.value.markerEnd, vueFlowId)}')`,
            sourcePosition,
            targetPosition,
            sourceX,
            sourceY,
            targetX,
            targetY,
            sourceHandleId: edge2.value.sourceHandle,
            targetHandleId: edge2.value.targetHandle,
            interactionWidth: edge2.value.interactionWidth,
            ...pathOptions
          }),
          [
            isUpdatable.value === "source" || isUpdatable.value === true ? [
              h(
                "g",
                {
                  onMousedown: onEdgeUpdaterSourceMouseDown,
                  onMouseenter: onEdgeUpdaterMouseEnter,
                  onMouseout: onEdgeUpdaterMouseOut
                },
                h(EdgeAnchor$1, {
                  "position": sourcePosition,
                  "centerX": sourceX,
                  "centerY": sourceY,
                  "radius": edgeUpdaterRadius.value,
                  "type": "source",
                  "data-type": "source"
                })
              )
            ] : null,
            isUpdatable.value === "target" || isUpdatable.value === true ? [
              h(
                "g",
                {
                  onMousedown: onEdgeUpdaterTargetMouseDown,
                  onMouseenter: onEdgeUpdaterMouseEnter,
                  onMouseout: onEdgeUpdaterMouseOut
                },
                h(EdgeAnchor$1, {
                  "position": targetPosition,
                  "centerX": targetX,
                  "centerY": targetY,
                  "radius": edgeUpdaterRadius.value,
                  "type": "target",
                  "data-type": "target"
                })
              )
            ] : null
          ]
        ]
      );
    };
    function onEdgeUpdaterMouseEnter() {
      mouseOver.value = true;
    }
    function onEdgeUpdaterMouseOut() {
      mouseOver.value = false;
    }
    function onEdgeUpdate(event, connection) {
      emit.update({ event, edge: edge2.value, connection });
    }
    function onEdgeUpdateEnd(event) {
      emit.updateEnd({ event, edge: edge2.value });
      updating.value = false;
    }
    function handleEdgeUpdater(event, isSourceHandle) {
      if (event.button !== 0) {
        return;
      }
      updating.value = true;
      nodeId.value = isSourceHandle ? edge2.value.target : edge2.value.source;
      handleId.value = (isSourceHandle ? edge2.value.targetHandle : edge2.value.sourceHandle) ?? "";
      edgeUpdaterType.value = isSourceHandle ? "target" : "source";
      emit.updateStart({ event, edge: edge2.value });
      handlePointerDown(event);
    }
    function onEdgeClick(event) {
      var _a;
      const data = { event, edge: edge2.value };
      if (isSelectable.value) {
        nodesSelectionActive.value = false;
        if (edge2.value.selected && multiSelectionActive.value) {
          removeSelectedEdges([edge2.value]);
          (_a = edgeEl.value) == null ? void 0 : _a.blur();
        } else {
          addSelectedEdges([edge2.value]);
        }
      }
      emit.click(data);
    }
    function onEdgeContextMenu(event) {
      emit.contextMenu({ event, edge: edge2.value });
    }
    function onDoubleClick(event) {
      emit.doubleClick({ event, edge: edge2.value });
    }
    function onEdgeMouseEnter(event) {
      emit.mouseEnter({ event, edge: edge2.value });
    }
    function onEdgeMouseMove(event) {
      emit.mouseMove({ event, edge: edge2.value });
    }
    function onEdgeMouseLeave(event) {
      emit.mouseLeave({ event, edge: edge2.value });
    }
    function onEdgeUpdaterSourceMouseDown(event) {
      handleEdgeUpdater(event, true);
    }
    function onEdgeUpdaterTargetMouseDown(event) {
      handleEdgeUpdater(event, false);
    }
    function onKeyDown2(event) {
      var _a;
      if (!disableKeyboardA11y.value && elementSelectionKeys.includes(event.key) && isSelectable.value) {
        const unselect = event.key === "Escape";
        if (unselect) {
          (_a = edgeEl.value) == null ? void 0 : _a.blur();
          removeSelectedEdges([findEdge(props.id)]);
        } else {
          addSelectedEdges([findEdge(props.id)]);
        }
      }
    }
  }
});
const EdgeWrapper$1 = EdgeWrapper;
const ConnectionLine = defineComponent({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var _a;
    const {
      id: id2,
      connectionMode,
      connectionStartHandle,
      connectionEndHandle,
      connectionPosition,
      connectionLineType,
      connectionLineStyle,
      connectionLineOptions,
      connectionStatus,
      viewport,
      findNode
    } = useVueFlow();
    const connectionLineComponent = (_a = inject(Slots$1)) == null ? void 0 : _a["connection-line"];
    const fromNode = computed(() => {
      var _a2;
      return findNode((_a2 = connectionStartHandle.value) == null ? void 0 : _a2.nodeId);
    });
    const toNode = computed(() => {
      var _a2;
      return findNode((_a2 = connectionEndHandle.value) == null ? void 0 : _a2.nodeId) ?? null;
    });
    const toXY = computed(() => {
      return {
        x: (connectionPosition.value.x - viewport.value.x) / viewport.value.zoom,
        y: (connectionPosition.value.y - viewport.value.y) / viewport.value.zoom
      };
    });
    const markerStart = computed(
      () => connectionLineOptions.value.markerStart ? `url(#${getMarkerId(connectionLineOptions.value.markerStart, id2)})` : ""
    );
    const markerEnd = computed(
      () => connectionLineOptions.value.markerEnd ? `url(#${getMarkerId(connectionLineOptions.value.markerEnd, id2)})` : ""
    );
    return () => {
      var _a2, _b, _c;
      if (!fromNode.value || !connectionStartHandle.value) {
        return null;
      }
      const startHandleId = connectionStartHandle.value.id;
      const handleType = connectionStartHandle.value.type;
      const fromHandleBounds = fromNode.value.handleBounds;
      let handleBounds = (fromHandleBounds == null ? void 0 : fromHandleBounds[handleType]) || [];
      if (connectionMode.value === ConnectionMode.Loose) {
        const oppositeBounds = (fromHandleBounds == null ? void 0 : fromHandleBounds[handleType === "source" ? "target" : "source"]) || [];
        handleBounds = [...handleBounds, ...oppositeBounds];
      }
      if (!handleBounds) {
        return null;
      }
      const fromHandle = (startHandleId ? handleBounds.find((d) => d.id === startHandleId) : handleBounds[0]) ?? null;
      const fromPosition = (fromHandle == null ? void 0 : fromHandle.position) || Position.Top;
      const { x: fromX, y: fromY } = getHandlePosition(fromNode.value, fromHandle, fromPosition);
      let toHandle = null;
      if (toNode.value) {
        if (connectionMode.value === ConnectionMode.Strict) {
          toHandle = ((_a2 = toNode.value.handleBounds[handleType === "source" ? "target" : "source"]) == null ? void 0 : _a2.find(
            (d) => {
              var _a3;
              return d.id === ((_a3 = connectionEndHandle.value) == null ? void 0 : _a3.id);
            }
          )) || null;
        } else {
          toHandle = ((_b = [...toNode.value.handleBounds.source || [], ...toNode.value.handleBounds.target || []]) == null ? void 0 : _b.find(
            (d) => {
              var _a3;
              return d.id === ((_a3 = connectionEndHandle.value) == null ? void 0 : _a3.id);
            }
          )) || null;
        }
      }
      const toPosition = ((_c = connectionEndHandle.value) == null ? void 0 : _c.position) ?? (fromPosition ? oppositePosition[fromPosition] : null);
      if (!fromPosition || !toPosition) {
        return null;
      }
      const type = connectionLineType.value ?? connectionLineOptions.value.type ?? ConnectionLineType.Bezier;
      let dAttr = "";
      const pathParams = {
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: fromPosition,
        targetX: toXY.value.x,
        targetY: toXY.value.y,
        targetPosition: toPosition
      };
      if (type === ConnectionLineType.Bezier) {
        [dAttr] = getBezierPath(pathParams);
      } else if (type === ConnectionLineType.Step) {
        [dAttr] = getSmoothStepPath({
          ...pathParams,
          borderRadius: 0
        });
      } else if (type === ConnectionLineType.SmoothStep) {
        [dAttr] = getSmoothStepPath(pathParams);
      } else if (type === ConnectionLineType.SimpleBezier) {
        [dAttr] = getSimpleBezierPath(pathParams);
      } else {
        dAttr = `M${fromX},${fromY} ${toXY.value.x},${toXY.value.y}`;
      }
      return h(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        h(
          "g",
          { class: "vue-flow__connection" },
          connectionLineComponent ? h(connectionLineComponent, {
            sourceX: fromX,
            sourceY: fromY,
            sourcePosition: fromPosition,
            targetX: toXY.value.x,
            targetY: toXY.value.y,
            targetPosition: toPosition,
            sourceNode: fromNode.value,
            sourceHandle: fromHandle,
            targetNode: toNode.value,
            targetHandle: toHandle,
            markerEnd: markerEnd.value,
            markerStart: markerStart.value,
            connectionStatus: connectionStatus.value
          }) : h("path", {
            "d": dAttr,
            "class": [connectionLineOptions.value.class, connectionStatus, "vue-flow__connection-path"],
            "style": {
              ...connectionLineStyle.value,
              ...connectionLineOptions.value.style
            },
            "marker-end": markerEnd.value,
            "marker-start": markerStart.value
          })
        )
      );
    };
  }
});
const ConnectionLine$1 = ConnectionLine;
const _hoisted_1$4$2 = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"];
const __default__$6 = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
};
const _sfc_main$6$1 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    id: {},
    type: {},
    color: { default: "none" },
    width: { default: 12.5 },
    height: { default: 12.5 },
    markerUnits: { default: "strokeWidth" },
    orient: { default: "auto-start-reverse" },
    strokeWidth: { default: 1 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("marker", {
        id: _ctx.id,
        class: "vue-flow__arrowhead",
        viewBox: "-10 -10 20 20",
        refX: "0",
        refY: "0",
        markerWidth: `${_ctx.width}`,
        markerHeight: `${_ctx.height}`,
        markerUnits: _ctx.markerUnits,
        orient: _ctx.orient
      }, [
        _ctx.type === unref(MarkerType).ArrowClosed ? (openBlock(), createElementBlock("polyline", {
          key: 0,
          style: normalizeStyle({
            stroke: _ctx.color,
            fill: _ctx.color,
            strokeWidth: _ctx.strokeWidth
          }),
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          points: "-5,-4 0,0 -5,4 -5,-4"
        }, null, 4)) : createCommentVNode("", true),
        _ctx.type === unref(MarkerType).Arrow ? (openBlock(), createElementBlock("polyline", {
          key: 1,
          style: normalizeStyle({
            stroke: _ctx.color,
            strokeWidth: _ctx.strokeWidth
          }),
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          fill: "none",
          points: "-5,-4 0,0 -5,4"
        }, null, 4)) : createCommentVNode("", true)
      ], 8, _hoisted_1$4$2);
    };
  }
});
const _hoisted_1$3$2 = { class: "vue-flow__marker vue-flow__container" };
const __default__$5 = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
};
const _sfc_main$5$1 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    const { id: vueFlowId, edges, connectionLineOptions, defaultMarkerColor: defaultColor } = useVueFlow();
    const markers = computed(() => {
      const ids = /* @__PURE__ */ new Set();
      const markers2 = [];
      const createMarkers = (marker) => {
        if (marker) {
          const markerId = getMarkerId(marker, vueFlowId);
          if (!ids.has(markerId)) {
            if (typeof marker === "object") {
              markers2.push({ ...marker, id: markerId, color: marker.color || defaultColor.value });
            } else {
              markers2.push({ id: markerId, color: defaultColor.value, type: marker });
            }
            ids.add(markerId);
          }
        }
      };
      for (const marker of [connectionLineOptions.value.markerEnd, connectionLineOptions.value.markerStart]) {
        createMarkers(marker);
      }
      for (const edge2 of edges.value) {
        for (const marker of [edge2.markerStart, edge2.markerEnd]) {
          createMarkers(marker);
        }
      }
      return markers2.sort((a, b) => a.id.localeCompare(b.id));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$3$2, [
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(markers.value, (marker) => {
            return openBlock(), createBlock(_sfc_main$6$1, {
              id: marker.id,
              key: marker.id,
              type: marker.type,
              color: marker.color,
              width: marker.width,
              height: marker.height,
              markerUnits: marker.markerUnits,
              "stroke-width": marker.strokeWidth,
              orient: marker.orient
            }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]);
          }), 128))
        ])
      ]);
    };
  }
});
const __default__$4$1 = {
  name: "Edges",
  compatConfig: { MODE: 3 }
};
const _sfc_main$4$1 = /* @__PURE__ */ defineComponent({
  ...__default__$4$1,
  setup(__props) {
    const { findNode, getEdges, elevateEdgesOnSelect } = useVueFlow();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$5$1),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getEdges), (edge2) => {
          return openBlock(), createElementBlock("svg", {
            key: edge2.id,
            class: "vue-flow__edges vue-flow__container",
            style: normalizeStyle({ zIndex: unref(getEdgeZIndex)(edge2, unref(findNode), unref(elevateEdgesOnSelect)) })
          }, [
            createVNode(unref(EdgeWrapper$1), {
              id: edge2.id
            }, null, 8, ["id"])
          ], 4);
        }), 128)),
        createVNode(unref(ConnectionLine$1))
      ], 64);
    };
  }
});
const NodeWrapper = defineComponent({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["id", "resizeObserver"],
  setup(props) {
    const {
      id: vueFlowId,
      noPanClassName,
      selectNodesOnDrag,
      nodesSelectionActive,
      multiSelectionActive,
      emits,
      removeSelectedNodes,
      addSelectedNodes,
      updateNodeDimensions,
      onUpdateNodeInternals,
      getNodeTypes,
      nodeExtent,
      elevateNodesOnSelect,
      disableKeyboardA11y,
      ariaLiveMessage,
      snapToGrid,
      snapGrid,
      nodeDragThreshold,
      nodesDraggable,
      elementsSelectable,
      nodesConnectable,
      nodesFocusable,
      hooks
    } = useVueFlow();
    const nodeElement = ref(null);
    provide(NodeRef, nodeElement);
    provide(NodeId, props.id);
    const slots = inject(Slots$1);
    const instance = getCurrentInstance();
    const updateNodePositions = useUpdateNodePositions();
    const { node: node2, parentNode } = useNode(props.id);
    const { emit, on } = useNodeHooks(node2, emits);
    const isDraggable = toRef(() => typeof node2.draggable === "undefined" ? nodesDraggable.value : node2.draggable);
    const isSelectable = toRef(() => typeof node2.selectable === "undefined" ? elementsSelectable.value : node2.selectable);
    const isConnectable = toRef(() => typeof node2.connectable === "undefined" ? nodesConnectable.value : node2.connectable);
    const isFocusable = toRef(() => typeof node2.focusable === "undefined" ? nodesFocusable.value : node2.focusable);
    const hasPointerEvents = toRef(
      () => isSelectable.value || isDraggable.value || hooks.value.nodeClick.hasListeners() || hooks.value.nodeDoubleClick.hasListeners() || hooks.value.nodeMouseEnter.hasListeners() || hooks.value.nodeMouseMove.hasListeners() || hooks.value.nodeMouseLeave.hasListeners()
    );
    const isInit = toRef(() => !!node2.dimensions.width && !!node2.dimensions.height);
    const nodeCmp = computed(() => {
      const name = node2.type || "default";
      const slot = slots == null ? void 0 : slots[`node-${name}`];
      if (slot) {
        return slot;
      }
      let nodeType = node2.template || getNodeTypes.value[name];
      if (typeof nodeType === "string") {
        if (instance) {
          const components = Object.keys(instance.appContext.components);
          if (components && components.includes(name)) {
            nodeType = resolveComponent(name, false);
          }
        }
      }
      if (nodeType && typeof nodeType !== "string") {
        return nodeType;
      }
      emits.error(new VueFlowError(ErrorCode.NODE_TYPE_MISSING, nodeType));
      return false;
    });
    const dragging = useDrag({
      id: props.id,
      el: nodeElement,
      disabled: () => !isDraggable.value,
      selectable: isSelectable,
      dragHandle: () => node2.dragHandle,
      onStart(event) {
        emit.dragStart(event);
      },
      onDrag(event) {
        emit.drag(event);
      },
      onStop(event) {
        emit.dragStop(event);
      },
      onClick(event) {
        onSelectNode(event);
      }
    });
    const getClass = computed(() => node2.class instanceof Function ? node2.class(node2) : node2.class);
    const getStyle = computed(() => {
      const styles = (node2.style instanceof Function ? node2.style(node2) : node2.style) || {};
      const width = node2.width instanceof Function ? node2.width(node2) : node2.width;
      const height = node2.height instanceof Function ? node2.height(node2) : node2.height;
      if (!styles.width && width) {
        styles.width = typeof width === "string" ? width : `${width}px`;
      }
      if (!styles.height && height) {
        styles.height = typeof height === "string" ? height : `${height}px`;
      }
      return styles;
    });
    const zIndex = toRef(() => Number(node2.zIndex ?? getStyle.value.zIndex ?? 0));
    onUpdateNodeInternals((updateIds) => {
      if (updateIds.includes(props.id) || !updateIds.length) {
        updateInternals();
      }
    });
    onMounted(() => {
      watch(
        () => node2.hidden,
        (isHidden = false, _, onCleanup) => {
          if (!isHidden && nodeElement.value) {
            props.resizeObserver.observe(nodeElement.value);
            onCleanup(() => {
              if (nodeElement.value) {
                props.resizeObserver.unobserve(nodeElement.value);
              }
            });
          }
        },
        { immediate: true, flush: "post" }
      );
    });
    watch([() => node2.type, () => node2.sourcePosition, () => node2.targetPosition], () => {
      nextTick(() => {
        updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
      });
    });
    watch(
      [
        () => node2.position.x,
        () => node2.position.y,
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.x;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.y;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.z;
        },
        zIndex,
        () => node2.selected,
        () => node2.dimensions.height,
        () => node2.dimensions.width,
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.dimensions.height;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.dimensions.width;
        }
      ],
      ([newX, newY, parentX, parentY, parentZ, nodeZIndex]) => {
        const xyzPos = {
          x: newX,
          y: newY,
          z: nodeZIndex + (elevateNodesOnSelect.value ? node2.selected ? 1e3 : 0 : 0)
        };
        if (typeof parentX !== "undefined" && typeof parentY !== "undefined") {
          node2.computedPosition = getXYZPos({ x: parentX, y: parentY, z: parentZ }, xyzPos);
        } else {
          node2.computedPosition = xyzPos;
        }
      },
      { flush: "post", immediate: true }
    );
    watch([() => node2.extent, nodeExtent], ([nodeExtent2, globalExtent], [oldNodeExtent, oldGlobalExtent]) => {
      if (nodeExtent2 !== oldNodeExtent || globalExtent !== oldGlobalExtent) {
        clampPosition2();
      }
    });
    if (node2.extent === "parent" || typeof node2.extent === "object" && "range" in node2.extent && node2.extent.range === "parent") {
      until(() => isInit).toBe(true).then(clampPosition2);
    } else {
      clampPosition2();
    }
    return () => {
      if (node2.hidden) {
        return null;
      }
      return h(
        "div",
        {
          "ref": nodeElement,
          "data-id": node2.id,
          "class": [
            "vue-flow__node",
            `vue-flow__node-${nodeCmp.value === false ? "default" : node2.type || "default"}`,
            {
              [noPanClassName.value]: isDraggable.value,
              dragging: dragging == null ? void 0 : dragging.value,
              draggable: isDraggable.value,
              selected: node2.selected,
              selectable: isSelectable.value,
              parent: node2.isParent
            },
            getClass.value
          ],
          "style": {
            visibility: isInit.value ? "visible" : "hidden",
            zIndex: node2.computedPosition.z ?? zIndex.value,
            transform: `translate(${node2.computedPosition.x}px,${node2.computedPosition.y}px)`,
            pointerEvents: hasPointerEvents.value ? "all" : "none",
            ...getStyle.value
          },
          "tabIndex": isFocusable.value ? 0 : void 0,
          "role": isFocusable.value ? "button" : void 0,
          "aria-describedby": disableKeyboardA11y.value ? void 0 : `${ARIA_NODE_DESC_KEY}-${vueFlowId}`,
          "aria-label": node2.ariaLabel,
          "onMouseenter": onMouseEnter,
          "onMousemove": onMouseMove,
          "onMouseleave": onMouseLeave,
          "onContextmenu": onContextMenu,
          "onClick": onSelectNode,
          "onDblclick": onDoubleClick,
          "onKeydown": onKeyDown2
        },
        [
          h(nodeCmp.value === false ? getNodeTypes.value.default : nodeCmp.value, {
            id: node2.id,
            type: node2.type,
            data: node2.data,
            events: { ...node2.events, ...on },
            selected: node2.selected,
            resizing: node2.resizing,
            dragging: dragging.value,
            connectable: isConnectable.value,
            position: node2.computedPosition,
            dimensions: node2.dimensions,
            isValidTargetPos: node2.isValidTargetPos,
            isValidSourcePos: node2.isValidSourcePos,
            parent: node2.parentNode,
            parentNodeId: node2.parentNode,
            zIndex: node2.computedPosition.z ?? zIndex.value,
            targetPosition: node2.targetPosition,
            sourcePosition: node2.sourcePosition,
            label: node2.label,
            dragHandle: node2.dragHandle,
            onUpdateNodeInternals: updateInternals
          })
        ]
      );
    };
    function clampPosition2() {
      const nextPosition = node2.computedPosition;
      const { computedPosition, position: position2 } = calcNextPosition(
        node2,
        snapToGrid.value ? snapPosition(nextPosition, snapGrid.value) : nextPosition,
        emits.error,
        nodeExtent.value,
        parentNode.value
      );
      if (node2.computedPosition.x !== computedPosition.x || node2.computedPosition.y !== computedPosition.y) {
        node2.computedPosition = { ...node2.computedPosition, ...computedPosition };
      }
      if (node2.position.x !== position2.x || node2.position.y !== position2.y) {
        node2.position = position2;
      }
    }
    function updateInternals() {
      if (nodeElement.value) {
        updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
      }
    }
    function onMouseEnter(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseEnter({ event, node: node2 });
      }
    }
    function onMouseMove(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseMove({ event, node: node2 });
      }
    }
    function onMouseLeave(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseLeave({ event, node: node2 });
      }
    }
    function onContextMenu(event) {
      return emit.contextMenu({ event, node: node2 });
    }
    function onDoubleClick(event) {
      return emit.doubleClick({ event, node: node2 });
    }
    function onSelectNode(event) {
      if (isSelectable.value && (!selectNodesOnDrag.value || !isDraggable.value || nodeDragThreshold.value > 0)) {
        handleNodeClick(
          node2,
          multiSelectionActive.value,
          addSelectedNodes,
          removeSelectedNodes,
          nodesSelectionActive,
          false,
          nodeElement.value
        );
      }
      emit.click({ event, node: node2 });
    }
    function onKeyDown2(event) {
      if (isInputDOMNode(event) || disableKeyboardA11y.value) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable.value) {
        const unselect = event.key === "Escape";
        handleNodeClick(
          node2,
          multiSelectionActive.value,
          addSelectedNodes,
          removeSelectedNodes,
          nodesSelectionActive,
          unselect,
          nodeElement.value
        );
      } else if (isDraggable.value && node2.selected && arrowKeyDiffs[event.key]) {
        event.preventDefault();
        ariaLiveMessage.value = `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~node2.position.x}, y: ${~~node2.position.y}`;
        updateNodePositions(
          {
            x: arrowKeyDiffs[event.key].x,
            y: arrowKeyDiffs[event.key].y
          },
          event.shiftKey
        );
      }
    }
  }
});
const NodeWrapper$1 = NodeWrapper;
const _hoisted_1$2$2 = {
  height: "0",
  width: "0"
};
const __default__$3$1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
};
const _sfc_main$3$1 = /* @__PURE__ */ defineComponent({
  ...__default__$3$1,
  setup(__props) {
    const { viewportRef } = useVueFlow();
    const teleportTarget = toRef(() => {
      var _a;
      return (_a = viewportRef.value) == null ? void 0 : _a.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", null, [
        (openBlock(), createElementBlock("foreignObject", _hoisted_1$2$2, [
          (openBlock(), createBlock(Teleport, {
            to: teleportTarget.value,
            disabled: !teleportTarget.value
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 8, ["to", "disabled"]))
        ]))
      ]);
    };
  }
});
function useNodesInitialized(options = { includeHiddenNodes: false }) {
  const { nodes } = useVueFlow();
  return computed(() => {
    if (nodes.value.length === 0) {
      return false;
    }
    for (const node2 of nodes.value) {
      if (options.includeHiddenNodes || !node2.hidden) {
        if ((node2 == null ? void 0 : node2.handleBounds) === void 0 || node2.dimensions.width === 0 || node2.dimensions.height === 0) {
          return false;
        }
      }
    }
    return true;
  });
}
const _hoisted_1$1$3 = { class: "vue-flow__nodes vue-flow__container" };
const __default__$2$1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
};
const _sfc_main$2$1 = /* @__PURE__ */ defineComponent({
  ...__default__$2$1,
  setup(__props) {
    const { getNodes, updateNodeDimensions, emits } = useVueFlow();
    const nodesInitialized = useNodesInitialized();
    const resizeObserver = ref();
    watch(
      nodesInitialized,
      (isInit) => {
        if (isInit) {
          nextTick(() => {
            emits.nodesInitialized(getNodes.value);
          });
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      resizeObserver.value = new ResizeObserver((entries) => {
        const updates = entries.map((entry) => {
          const id2 = entry.target.getAttribute("data-id");
          return {
            id: id2,
            nodeElement: entry.target,
            forceUpdate: true
          };
        });
        nextTick(() => updateNodeDimensions(updates));
      });
    });
    onBeforeUnmount(() => {
      var _a;
      return (_a = resizeObserver.value) == null ? void 0 : _a.disconnect();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1$3, [
        resizeObserver.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(getNodes), (node2, __, ___, _cached) => {
          const _memo = [node2.id];
          if (_cached && _cached.key === node2.id && isMemoSame(_cached, _memo))
            return _cached;
          const _item = (openBlock(), createBlock(unref(NodeWrapper$1), {
            id: node2.id,
            key: node2.id,
            "resize-observer": resizeObserver.value
          }, null, 8, ["id", "resize-observer"]));
          _item.memo = _memo;
          return _item;
        }, _cache, 0), 128)) : createCommentVNode("", true)
      ]);
    };
  }
});
function useStylesLoadedWarning() {
  const { emits } = useVueFlow();
  onMounted(() => {
    if (isDev()) {
      const pane = document.querySelector(".vue-flow__pane");
      if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
        emits.error(new VueFlowError(ErrorCode.MISSING_STYLES));
      }
    }
  });
}
const _hoisted_1$c = /* @__PURE__ */ createBaseVNode("div", { class: "vue-flow__edge-labels" }, null, -1);
const __default__$1$2 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
};
const _sfc_main$1$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1$2,
  props: {
    id: {},
    modelValue: {},
    nodes: {},
    edges: {},
    edgeTypes: {},
    nodeTypes: {},
    connectionMode: {},
    connectionLineType: {},
    connectionLineStyle: { default: void 0 },
    connectionLineOptions: { default: void 0 },
    connectionRadius: {},
    isValidConnection: { type: [Function, null], default: void 0 },
    deleteKeyCode: { default: void 0 },
    selectionKeyCode: { type: [Boolean, null], default: void 0 },
    multiSelectionKeyCode: { default: void 0 },
    zoomActivationKeyCode: { default: void 0 },
    panActivationKeyCode: { default: void 0 },
    snapToGrid: { type: Boolean, default: void 0 },
    snapGrid: {},
    onlyRenderVisibleElements: { type: Boolean, default: void 0 },
    edgesUpdatable: { type: [Boolean, String], default: void 0 },
    nodesDraggable: { type: Boolean, default: void 0 },
    nodesConnectable: { type: Boolean, default: void 0 },
    nodeDragThreshold: {},
    elementsSelectable: { type: Boolean, default: void 0 },
    selectNodesOnDrag: { type: Boolean, default: void 0 },
    panOnDrag: { type: [Boolean, Array], default: void 0 },
    minZoom: {},
    maxZoom: {},
    defaultViewport: {},
    translateExtent: {},
    nodeExtent: {},
    defaultMarkerColor: {},
    zoomOnScroll: { type: Boolean, default: void 0 },
    zoomOnPinch: { type: Boolean, default: void 0 },
    panOnScroll: { type: Boolean, default: void 0 },
    panOnScrollSpeed: {},
    panOnScrollMode: {},
    paneClickDistance: {},
    zoomOnDoubleClick: { type: Boolean, default: void 0 },
    preventScrolling: { type: Boolean, default: void 0 },
    selectionMode: {},
    edgeUpdaterRadius: {},
    fitViewOnInit: { type: Boolean, default: void 0 },
    connectOnClick: { type: Boolean, default: void 0 },
    applyDefault: { type: Boolean, default: void 0 },
    autoConnect: { type: [Boolean, Function], default: void 0 },
    noDragClassName: {},
    noWheelClassName: {},
    noPanClassName: {},
    defaultEdgeOptions: {},
    elevateEdgesOnSelect: { type: Boolean, default: void 0 },
    elevateNodesOnSelect: { type: Boolean, default: void 0 },
    disableKeyboardA11y: { type: Boolean, default: void 0 },
    edgesFocusable: { type: Boolean, default: void 0 },
    nodesFocusable: { type: Boolean, default: void 0 },
    autoPanOnConnect: { type: Boolean, default: void 0 },
    autoPanOnNodeDrag: { type: Boolean, default: void 0 },
    autoPanSpeed: {}
  },
  emits: ["nodesChange", "edgesChange", "nodesInitialized", "paneReady", "init", "updateNodeInternals", "error", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeUpdate", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdateEnd", "nodeContextMenu", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeDoubleClick", "nodeClick", "nodeDragStart", "nodeDrag", "nodeDragStop", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "update:modelValue", "update:nodes", "update:edges"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const slots = useSlots();
    const modelValue = useVModel(props, "modelValue", emit);
    const modelNodes = useVModel(props, "nodes", emit);
    const modelEdges = useVModel(props, "edges", emit);
    const instance = useVueFlow(props);
    const dispose = useWatchProps({ modelValue, nodes: modelNodes, edges: modelEdges }, props, instance);
    useHooks(emit, instance.hooks);
    useOnInitHandler();
    useStylesLoadedWarning();
    provide(Slots$1, slots);
    onUnmounted(() => {
      dispose();
    });
    __expose(instance);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(instance).vueFlowRef,
        class: "vue-flow"
      }, [
        createVNode(_sfc_main$8$1, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$4$1),
            _hoisted_1$c,
            createVNode(_sfc_main$2$1),
            renderSlot(_ctx.$slots, "zoom-pane")
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "default"),
        createVNode(_sfc_main$7$1)
      ], 512);
    };
  }
});
const __default__$g = {
  name: "Panel",
  compatConfig: { MODE: 3 }
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: {
    position: {}
  },
  setup(__props) {
    const props = __props;
    const { userSelectionActive } = useVueFlow();
    const positionClasses = computed(() => `${props.position}`.split("-"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vue-flow__panel", positionClasses.value]),
        style: normalizeStyle({ pointerEvents: unref(userSelectionActive) ? "none" : "all" })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const _sfc_main$1$3 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
};
const _export_sfc = (sfc, props) => {
  const target2 = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target2[key] = val;
  }
  return target2;
};
const _hoisted_1$5$1 = { class: "vue-flow__controls-button" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$5$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const ControlButton = /* @__PURE__ */ _export_sfc(_sfc_main$1$3, [["render", _sfc_render]]);
const _hoisted_1$4$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};
const _hoisted_2$4$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4$1
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4$1, _hoisted_3$4);
}
const PlusIcon = { render: render$4 };
const _hoisted_1$3$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
};
const _hoisted_2$3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M0 0h32v4.2H0z" }, null, -1);
const _hoisted_3$3$1 = [
  _hoisted_2$3$1
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3$1, _hoisted_3$3$1);
}
const MinusIcon = { render: render$3 };
const _hoisted_1$2$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
};
const _hoisted_2$2$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1);
const _hoisted_3$2$1 = [
  _hoisted_2$2$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2$1, _hoisted_3$2$1);
}
const FitView = { render: render$2 };
const _hoisted_1$1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
};
const _hoisted_2$1$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1);
const _hoisted_3$1$1 = [
  _hoisted_2$1$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1$2, _hoisted_3$1$1);
}
const Lock = { render: render$1 };
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$7
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$5);
}
const Unlock = { render };
const __default__$4 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    showZoom: { type: Boolean, default: true },
    showFitView: { type: Boolean, default: true },
    showInteractive: { type: Boolean, default: true },
    fitViewParams: {},
    position: { default: () => PanelPosition.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(__props, { emit }) {
    const {
      nodesDraggable,
      nodesConnectable,
      elementsSelectable,
      setInteractive,
      zoomIn,
      zoomOut,
      fitView,
      viewport,
      minZoom,
      maxZoom
    } = useVueFlow();
    const isInteractive = toRef(() => nodesDraggable.value || nodesConnectable.value || elementsSelectable.value);
    const minZoomReached = toRef(() => viewport.value.zoom <= minZoom.value);
    const maxZoomReached = toRef(() => viewport.value.zoom >= maxZoom.value);
    function onZoomInHandler() {
      zoomIn();
      emit("zoomIn");
    }
    function onZoomOutHandler() {
      zoomOut();
      emit("zoomOut");
    }
    function onFitViewHandler() {
      fitView(__props.fitViewParams);
      emit("fitView");
    }
    function onInteractiveChangeHandler() {
      setInteractive(!isInteractive.value);
      emit("interactionChange", !isInteractive.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$y), {
        class: "vue-flow__controls",
        position: _ctx.position
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "top"),
          _ctx.showZoom ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            renderSlot(_ctx.$slots, "control-zoom-in", {}, () => [
              createVNode(ControlButton, {
                class: "vue-flow__controls-zoomin",
                disabled: maxZoomReached.value,
                onClick: onZoomInHandler
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon-zoom-in", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(PlusIcon))))
                  ])
                ]),
                _: 3
              }, 8, ["disabled"])
            ]),
            renderSlot(_ctx.$slots, "control-zoom-out", {}, () => [
              createVNode(ControlButton, {
                class: "vue-flow__controls-zoomout",
                disabled: minZoomReached.value,
                onClick: onZoomOutHandler
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon-zoom-out", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(MinusIcon))))
                  ])
                ]),
                _: 3
              }, 8, ["disabled"])
            ])
          ], 64)) : createCommentVNode("", true),
          _ctx.showFitView ? renderSlot(_ctx.$slots, "control-fit-view", { key: 1 }, () => [
            createVNode(ControlButton, {
              class: "vue-flow__controls-fitview",
              onClick: onFitViewHandler
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "icon-fit-view", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(FitView))))
                ])
              ]),
              _: 3
            })
          ]) : createCommentVNode("", true),
          _ctx.showInteractive ? renderSlot(_ctx.$slots, "control-interactive", { key: 2 }, () => [
            _ctx.showInteractive ? (openBlock(), createBlock(ControlButton, {
              key: 0,
              class: "vue-flow__controls-interactive",
              onClick: onInteractiveChangeHandler
            }, {
              default: withCtx(() => [
                isInteractive.value ? renderSlot(_ctx.$slots, "icon-unlock", { key: 0 }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(Unlock))))
                ]) : createCommentVNode("", true),
                !isInteractive.value ? renderSlot(_ctx.$slots, "icon-lock", { key: 1 }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(Lock))))
                ]) : createCommentVNode("", true)
              ]),
              _: 3
            })) : createCommentVNode("", true)
          ]) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["position"]);
    };
  }
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "CanvasControlButtons",
  props: {
    zoom: { default: 1 },
    readOnly: { type: Boolean, default: false }
  },
  emits: ["reset-zoom", "zoom-in", "zoom-out", "zoom-to-fit", "tidy-up"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const isResetZoomVisible = computed(() => props.zoom !== 1);
    function onResetZoom() {
      emit("reset-zoom");
    }
    function onZoomIn() {
      emit("zoom-in");
    }
    function onZoomOut() {
      emit("zoom-out");
    }
    function onZoomToFit() {
      emit("zoom-to-fit");
    }
    function onTidyUp() {
      emit("tidy-up");
    }
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      const _component_N8nButton = resolveComponent("N8nButton");
      return openBlock(), createBlock(unref(_sfc_main$x), {
        "show-zoom": false,
        "show-fit-view": false
      }, {
        default: withCtx(() => [
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.zoomToFit"),
            shortcut: { keys: ["1"] }
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                type: "tertiary",
                size: "large",
                icon: "expand",
                "data-test-id": "zoom-to-fit",
                onClick: onZoomToFit
              })
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.zoomIn"),
            shortcut: { keys: ["+"] }
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                type: "tertiary",
                size: "large",
                icon: "search-plus",
                "data-test-id": "zoom-in-button",
                onClick: onZoomIn
              })
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.zoomOut"),
            shortcut: { keys: ["-"] }
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                type: "tertiary",
                size: "large",
                icon: "search-minus",
                "data-test-id": "zoom-out-button",
                onClick: onZoomOut
              })
            ]),
            _: 1
          }, 8, ["label"]),
          isResetZoomVisible.value ? (openBlock(), createBlock(KeyboardShortcutTooltip, {
            key: 0,
            label: unref(i18n).baseText("nodeView.resetZoom"),
            shortcut: { keys: ["0"] }
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                type: "tertiary",
                size: "large",
                icon: "undo",
                "data-test-id": "reset-zoom-button",
                onClick: onResetZoom
              })
            ]),
            _: 1
          }, 8, ["label"])) : createCommentVNode("", true),
          !_ctx.readOnly ? (openBlock(), createBlock(KeyboardShortcutTooltip, {
            key: 1,
            label: unref(i18n).baseText("nodeView.tidyUp"),
            shortcut: { shiftKey: true, altKey: true, keys: ["T"] }
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nButton, {
                square: "",
                type: "tertiary",
                size: "large",
                "data-test-id": "tidy-up-button",
                class: normalizeClass(_ctx.$style.iconButton),
                onClick: onTidyUp
              }, {
                default: withCtx(() => [
                  createVNode(TidyUpIcon)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }, 8, ["label"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const iconButton = "_iconButton_fx9xi_123";
const style0$p = {
  iconButton
};
const cssModules$p = {
  "$style": style0$p
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__cssModules", cssModules$p]]);
const EDGE_PADDING_BOTTOM = 130;
const EDGE_PADDING_X = 40;
const EDGE_BORDER_RADIUS = 16;
const HANDLE_SIZE = 20;
const isRightOfSourceHandle = (sourceX, targetX) => sourceX - HANDLE_SIZE > targetX;
function getEdgeRenderData(props, {
  connectionType = NodeConnectionTypes.Main
} = {}) {
  const { targetX, targetY, sourceX, sourceY, sourcePosition, targetPosition } = props;
  const isConnectorStraight = sourceY === targetY;
  if (!isRightOfSourceHandle(sourceX, targetX) || connectionType !== NodeConnectionTypes.Main) {
    const segment = getBezierPath(props);
    return {
      segments: [segment],
      labelPosition: [segment[1], segment[2]],
      isConnectorStraight
    };
  }
  const firstSegmentTargetX = (sourceX + targetX) / 2;
  const firstSegmentTargetY = sourceY + EDGE_PADDING_BOTTOM;
  const firstSegment = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX: firstSegmentTargetX,
    targetY: firstSegmentTargetY,
    sourcePosition,
    targetPosition: Position.Right,
    borderRadius: EDGE_BORDER_RADIUS,
    offset: EDGE_PADDING_X
  });
  const secondSegment = getSmoothStepPath({
    sourceX: firstSegmentTargetX,
    sourceY: firstSegmentTargetY,
    targetX,
    targetY,
    sourcePosition: Position.Left,
    targetPosition,
    borderRadius: EDGE_BORDER_RADIUS,
    offset: EDGE_PADDING_X
  });
  return {
    segments: [firstSegment, secondSegment],
    labelPosition: [firstSegmentTargetX, firstSegmentTargetY],
    isConnectorStraight
  };
}
function injectStrict(key, fallback) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
function useCanvas() {
  return injectStrict(CanvasKey);
}
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "CanvasConnectionLine",
  props: {
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {},
    sourceNode: {},
    sourceHandle: {},
    targetNode: {},
    targetHandle: {},
    markerStart: {},
    markerEnd: {},
    connectionStatus: {}
  },
  setup(__props) {
    const props = __props;
    const $style = useCssModule();
    const { connectingHandle } = useCanvas();
    const connectionType = computed(
      () => parseCanvasConnectionHandleString(connectingHandle.value?.handleId).type
    );
    const classes = computed(() => {
      return {
        [$style.edge]: true,
        [$style.visible]: isVisible.value
      };
    });
    const edgeColor = computed(() => {
      if (connectionType.value !== NodeConnectionTypes.Main) {
        return "var(--node-type-supplemental-color)";
      } else {
        return "var(--color-foreground-xdark)";
      }
    });
    const edgeStyle = computed(() => ({
      ...connectionType.value === NodeConnectionTypes.Main ? {} : { strokeDasharray: "8,8" },
      strokeWidth: 2,
      stroke: edgeColor.value
    }));
    const renderData = computed(
      () => getEdgeRenderData(props, { connectionType: connectionType.value })
    );
    const segments = computed(() => renderData.value.segments);
    const isVisible = ref(false);
    onMounted(() => {
      setTimeout(() => {
        isVisible.value = true;
      }, 300);
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (segment) => {
        return openBlock(), createBlock(unref(_sfc_main$d$1), {
          key: segment[0],
          class: normalizeClass(classes.value),
          style: normalizeStyle(edgeStyle.value),
          path: segment[0],
          "marker-end": _ctx.markerEnd
        }, null, 8, ["class", "style", "path", "marker-end"]);
      }), 128);
    };
  }
});
const edge$1 = "_edge_cbk94_123";
const visible = "_visible_cbk94_129";
const style0$o = {
  edge: edge$1,
  visible
};
const cssModules$o = {
  "$style": style0$o
};
const __unplugin_components_0$5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__cssModules", cssModules$o]]);
const position = ref([0, 0]);
const isOpen = ref(false);
const target = ref();
const actions = ref([]);
const actionCallback = ref(() => {
});
const useContextMenu = (onAction = () => {
}) => {
  const uiStore = useUIStore();
  const nodeTypesStore = useNodeTypesStore();
  const workflowsStore = useWorkflowsStore();
  const sourceControlStore = useSourceControlStore();
  const i18n = useI18n();
  const workflowPermissions = computed(
    () => getResourcePermissions(workflowsStore.workflow.scopes).workflow
  );
  const isReadOnly = computed(
    () => sourceControlStore.preferences.branchReadOnly || uiStore.isReadOnlyView || !workflowPermissions.value.update || workflowsStore.workflow.isArchived
  );
  const canOpenSubworkflow = computed(() => {
    if (targetNodes.value.length !== 1) return false;
    const node2 = targetNodes.value[0];
    if (node2.type !== EXECUTE_WORKFLOW_NODE_TYPE) return false;
    return getSubworkflowId(node2);
  });
  const targetNodeIds = computed(() => {
    if (!isOpen.value || !target.value) return [];
    const currentTarget = target.value;
    return currentTarget.source === "canvas" ? currentTarget.nodeIds : [currentTarget.nodeId];
  });
  const targetNodes = computed(
    () => targetNodeIds.value.map((nodeId) => workflowsStore.getNodeById(nodeId)).filter(isPresent)
  );
  const canAddNodeOfType = (nodeType) => {
    const sameTypeNodes = workflowsStore.allNodes.filter((n) => n.type === nodeType.name);
    return nodeType.maxNodes === void 0 || sameTypeNodes.length < nodeType.maxNodes;
  };
  const canDuplicateNode = (node2) => {
    const nodeType = nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    if (!nodeType) return false;
    if (NOT_DUPLICATABLE_NODE_TYPES.includes(nodeType.name)) return false;
    return canAddNodeOfType(nodeType);
  };
  const hasPinData = (node2) => {
    return !!workflowsStore.pinDataByNodeName(node2.name);
  };
  const close = () => {
    target.value = void 0;
    isOpen.value = false;
    actions.value = [];
    position.value = [0, 0];
  };
  const isExecutable$1 = (node2) => {
    const currentWorkflow = workflowsStore.getCurrentWorkflow();
    const workflowNode = currentWorkflow.getNode(node2.name);
    const nodeType = nodeTypesStore.getNodeType(
      workflowNode.type,
      workflowNode.typeVersion
    );
    return isExecutable(currentWorkflow, workflowNode, nodeType);
  };
  const open = (event, menuTarget) => {
    event.stopPropagation();
    if (isOpen.value && menuTarget.source === target.value?.source && menuTarget.nodeId === target.value?.nodeId) {
      close();
      return;
    }
    event.preventDefault();
    actionCallback.value = onAction;
    target.value = menuTarget;
    position.value = getMousePosition$1(event);
    isOpen.value = true;
    const nodes = targetNodes.value;
    const onlyStickies = nodes.every((node2) => node2.type === STICKY_NODE_TYPE);
    const i18nOptions = {
      adjustToNumber: nodes.length,
      interpolate: {
        subject: onlyStickies ? i18n.baseText("contextMenu.sticky", { adjustToNumber: nodes.length }) : i18n.baseText("contextMenu.node", { adjustToNumber: nodes.length })
      }
    };
    const selectionActions = [
      {
        id: "select_all",
        divided: true,
        label: i18n.baseText("contextMenu.selectAll"),
        shortcut: { metaKey: true, keys: ["A"] },
        disabled: nodes.length === workflowsStore.allNodes.length
      },
      {
        id: "deselect_all",
        label: i18n.baseText("contextMenu.deselectAll"),
        disabled: nodes.length === 0
      }
    ];
    const layoutActions = [
      {
        id: "tidy_up",
        divided: true,
        label: i18n.baseText(
          nodes.length < 2 ? "contextMenu.tidyUpWorkflow" : "contextMenu.tidyUpSelection"
        ),
        shortcut: { shiftKey: true, altKey: true, keys: ["T"] }
      }
    ];
    if (nodes.length === 0) {
      actions.value = [
        {
          id: "add_node",
          shortcut: { keys: ["Tab"] },
          label: i18n.baseText("contextMenu.addNode"),
          disabled: isReadOnly.value
        },
        {
          id: "add_sticky",
          shortcut: { shiftKey: true, keys: ["s"] },
          label: i18n.baseText("contextMenu.addSticky"),
          disabled: isReadOnly.value
        },
        ...layoutActions,
        ...selectionActions
      ];
    } else {
      const menuActions = [
        !onlyStickies && {
          id: "toggle_activation",
          label: nodes.every((node2) => node2.disabled) ? i18n.baseText("contextMenu.activate", i18nOptions) : i18n.baseText("contextMenu.deactivate", i18nOptions),
          shortcut: { keys: ["D"] },
          disabled: isReadOnly.value
        },
        !onlyStickies && {
          id: "toggle_pin",
          label: nodes.every((node2) => hasPinData(node2)) ? i18n.baseText("contextMenu.unpin", i18nOptions) : i18n.baseText("contextMenu.pin", i18nOptions),
          shortcut: { keys: ["p"] },
          disabled: isReadOnly.value || !nodes.every((n) => usePinnedData(n).canPinNode(true))
        },
        {
          id: "copy",
          label: i18n.baseText("contextMenu.copy", i18nOptions),
          shortcut: { metaKey: true, keys: ["C"] }
        },
        {
          id: "duplicate",
          label: i18n.baseText("contextMenu.duplicate", i18nOptions),
          shortcut: { metaKey: true, keys: ["D"] },
          disabled: isReadOnly.value || !nodes.every(canDuplicateNode)
        },
        ...layoutActions,
        ...selectionActions,
        {
          id: "delete",
          divided: true,
          label: i18n.baseText("contextMenu.delete", i18nOptions),
          shortcut: { keys: ["Del"] },
          disabled: isReadOnly.value
        }
      ].filter(Boolean);
      if (nodes.length === 1) {
        const isExecuteWorkflowNode = nodes[0].type === EXECUTE_WORKFLOW_NODE_TYPE;
        const singleNodeActions = onlyStickies ? [
          {
            id: "open",
            label: i18n.baseText("contextMenu.editSticky"),
            shortcut: { keys: ["↵"] },
            disabled: isReadOnly.value
          },
          {
            id: "change_color",
            label: i18n.baseText("contextMenu.changeColor"),
            disabled: isReadOnly.value
          }
        ] : [
          {
            id: "open",
            label: i18n.baseText("contextMenu.open"),
            shortcut: { keys: ["↵"] }
          },
          {
            id: "execute",
            label: i18n.baseText("contextMenu.test"),
            disabled: isReadOnly.value || !isExecutable$1(nodes[0])
          },
          {
            id: "rename",
            label: i18n.baseText("contextMenu.rename"),
            shortcut: { keys: ["Space"] },
            disabled: isReadOnly.value
          }
        ];
        if (isExecuteWorkflowNode) {
          singleNodeActions.push({
            id: "open_sub_workflow",
            label: i18n.baseText("contextMenu.openSubworkflow"),
            shortcut: { shiftKey: true, metaKey: true, keys: ["O"] },
            disabled: !canOpenSubworkflow.value
          });
        }
        menuActions.unshift(...singleNodeActions);
      }
      actions.value = menuActions;
    }
  };
  const _dispatchAction = (a) => {
    actionCallback.value(a, targetNodeIds.value);
  };
  watch(
    () => uiStore.nodeViewOffsetPosition,
    () => {
      close();
    }
  );
  return {
    isOpen,
    position,
    target,
    actions,
    targetNodeIds,
    open,
    close,
    _dispatchAction
  };
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "ContextMenu",
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const contextMenu2 = useContextMenu();
    const { position: position2, isOpen: isOpen2, actions: actions2, target: target2 } = contextMenu2;
    const dropdown = ref();
    const emit = __emit;
    const { APP_Z_INDEXES } = useStyles();
    watch(
      isOpen2,
      () => {
        if (isOpen2) {
          dropdown.value?.open();
        } else {
          dropdown.value?.close();
        }
      },
      { flush: "post" }
    );
    function onActionSelect(item) {
      const action = item;
      contextMenu2._dispatchAction(action);
      emit("action", action, contextMenu2.targetNodeIds.value);
    }
    function onVisibleChange(open) {
      if (!open) {
        contextMenu2.close();
      }
    }
    return (_ctx, _cache) => {
      return unref(isOpen2) ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: "body"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.contextMenu),
          style: normalizeStyle({
            left: `${unref(position2)[0]}px`,
            top: `${unref(position2)[1]}px`,
            zIndex: unref(APP_Z_INDEXES).CONTEXT_MENU
          })
        }, [
          createVNode(unref(N8nActionDropdown), {
            ref_key: "dropdown",
            ref: dropdown,
            items: unref(actions2),
            placement: "bottom-start",
            "data-test-id": "context-menu",
            "hide-arrow": unref(target2)?.source !== "node-button",
            teleported: false,
            onSelect: onActionSelect,
            onVisibleChange
          }, {
            activator: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.activator)
              }, null, 2)
            ]),
            _: 1
          }, 8, ["items", "hide-arrow"])
        ], 6)
      ])) : createCommentVNode("", true);
    };
  }
});
const contextMenu = "_contextMenu_12fz3_123";
const activator = "_activator_12fz3_127";
const style0$n = {
  contextMenu,
  activator
};
const cssModules$n = {
  "$style": style0$n
};
const ContextMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__cssModules", cssModules$n]]);
var graph;
var hasRequiredGraph;
function requireGraph() {
  if (hasRequiredGraph) return graph;
  hasRequiredGraph = 1;
  var DEFAULT_EDGE_NAME = "\0";
  var GRAPH_NODE = "\0";
  var EDGE_KEY_DELIM = "";
  class Graph {
    _isDirected = true;
    _isMultigraph = false;
    _isCompound = false;
    // Label for the graph itself
    _label;
    // Defaults to be set when creating a new node
    _defaultNodeLabelFn = () => void 0;
    // Defaults to be set when creating a new edge
    _defaultEdgeLabelFn = () => void 0;
    // v -> label
    _nodes = {};
    // v -> edgeObj
    _in = {};
    // u -> v -> Number
    _preds = {};
    // v -> edgeObj
    _out = {};
    // v -> w -> Number
    _sucs = {};
    // e -> edgeObj
    _edgeObjs = {};
    // e -> label
    _edgeLabels = {};
    /* Number of nodes in the graph. Should only be changed by the implementation. */
    _nodeCount = 0;
    /* Number of edges in the graph. Should only be changed by the implementation. */
    _edgeCount = 0;
    _parent;
    _children;
    constructor(opts) {
      if (opts) {
        this._isDirected = Object.hasOwn(opts, "directed") ? opts.directed : true;
        this._isMultigraph = Object.hasOwn(opts, "multigraph") ? opts.multigraph : false;
        this._isCompound = Object.hasOwn(opts, "compound") ? opts.compound : false;
      }
      if (this._isCompound) {
        this._parent = {};
        this._children = {};
        this._children[GRAPH_NODE] = {};
      }
    }
    /* === Graph functions ========= */
    /**
     * Whether graph was created with 'directed' flag set to true or not.
     */
    isDirected() {
      return this._isDirected;
    }
    /**
     * Whether graph was created with 'multigraph' flag set to true or not.
     */
    isMultigraph() {
      return this._isMultigraph;
    }
    /**
     * Whether graph was created with 'compound' flag set to true or not.
     */
    isCompound() {
      return this._isCompound;
    }
    /**
     * Sets the label of the graph.
     */
    setGraph(label2) {
      this._label = label2;
      return this;
    }
    /**
     * Gets the graph label.
     */
    graph() {
      return this._label;
    }
    /* === Node functions ========== */
    /**
     * Sets the default node label. If newDefault is a function, it will be
     * invoked ach time when setting a label for a node. Otherwise, this label
     * will be assigned as default label in case if no label was specified while
     * setting a node.
     * Complexity: O(1).
     */
    setDefaultNodeLabel(newDefault) {
      this._defaultNodeLabelFn = newDefault;
      if (typeof newDefault !== "function") {
        this._defaultNodeLabelFn = () => newDefault;
      }
      return this;
    }
    /**
     * Gets the number of nodes in the graph.
     * Complexity: O(1).
     */
    nodeCount() {
      return this._nodeCount;
    }
    /**
     * Gets all nodes of the graph. Note, the in case of compound graph subnodes are
     * not included in list.
     * Complexity: O(1).
     */
    nodes() {
      return Object.keys(this._nodes);
    }
    /**
     * Gets list of nodes without in-edges.
     * Complexity: O(|V|).
     */
    sources() {
      var self = this;
      return this.nodes().filter((v) => Object.keys(self._in[v]).length === 0);
    }
    /**
     * Gets list of nodes without out-edges.
     * Complexity: O(|V|).
     */
    sinks() {
      var self = this;
      return this.nodes().filter((v) => Object.keys(self._out[v]).length === 0);
    }
    /**
     * Invokes setNode method for each node in names list.
     * Complexity: O(|names|).
     */
    setNodes(vs, value) {
      var args = arguments;
      var self = this;
      vs.forEach(function(v) {
        if (args.length > 1) {
          self.setNode(v, value);
        } else {
          self.setNode(v);
        }
      });
      return this;
    }
    /**
     * Creates or updates the value for the node v in the graph. If label is supplied
     * it is set as the value for the node. If label is not supplied and the node was
     * created by this call then the default node label will be assigned.
     * Complexity: O(1).
     */
    setNode(v, value) {
      if (Object.hasOwn(this._nodes, v)) {
        if (arguments.length > 1) {
          this._nodes[v] = value;
        }
        return this;
      }
      this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
      if (this._isCompound) {
        this._parent[v] = GRAPH_NODE;
        this._children[v] = {};
        this._children[GRAPH_NODE][v] = true;
      }
      this._in[v] = {};
      this._preds[v] = {};
      this._out[v] = {};
      this._sucs[v] = {};
      ++this._nodeCount;
      return this;
    }
    /**
     * Gets the label of node with specified name.
     * Complexity: O(|V|).
     */
    node(v) {
      return this._nodes[v];
    }
    /**
     * Detects whether graph has a node with specified name or not.
     */
    hasNode(v) {
      return Object.hasOwn(this._nodes, v);
    }
    /**
     * Remove the node with the name from the graph or do nothing if the node is not in
     * the graph. If the node was removed this function also removes any incident
     * edges.
     * Complexity: O(1).
     */
    removeNode(v) {
      var self = this;
      if (Object.hasOwn(this._nodes, v)) {
        var removeEdge = (e) => self.removeEdge(self._edgeObjs[e]);
        delete this._nodes[v];
        if (this._isCompound) {
          this._removeFromParentsChildList(v);
          delete this._parent[v];
          this.children(v).forEach(function(child) {
            self.setParent(child);
          });
          delete this._children[v];
        }
        Object.keys(this._in[v]).forEach(removeEdge);
        delete this._in[v];
        delete this._preds[v];
        Object.keys(this._out[v]).forEach(removeEdge);
        delete this._out[v];
        delete this._sucs[v];
        --this._nodeCount;
      }
      return this;
    }
    /**
     * Sets node p as a parent for node v if it is defined, or removes the
     * parent for v if p is undefined. Method throws an exception in case of
     * invoking it in context of noncompound graph.
     * Average-case complexity: O(1).
     */
    setParent(v, parent) {
      if (!this._isCompound) {
        throw new Error("Cannot set parent in a non-compound graph");
      }
      if (parent === void 0) {
        parent = GRAPH_NODE;
      } else {
        parent += "";
        for (var ancestor = parent; ancestor !== void 0; ancestor = this.parent(ancestor)) {
          if (ancestor === v) {
            throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
          }
        }
        this.setNode(parent);
      }
      this.setNode(v);
      this._removeFromParentsChildList(v);
      this._parent[v] = parent;
      this._children[parent][v] = true;
      return this;
    }
    _removeFromParentsChildList(v) {
      delete this._children[this._parent[v]][v];
    }
    /**
     * Gets parent node for node v.
     * Complexity: O(1).
     */
    parent(v) {
      if (this._isCompound) {
        var parent = this._parent[v];
        if (parent !== GRAPH_NODE) {
          return parent;
        }
      }
    }
    /**
     * Gets list of direct children of node v.
     * Complexity: O(1).
     */
    children(v = GRAPH_NODE) {
      if (this._isCompound) {
        var children2 = this._children[v];
        if (children2) {
          return Object.keys(children2);
        }
      } else if (v === GRAPH_NODE) {
        return this.nodes();
      } else if (this.hasNode(v)) {
        return [];
      }
    }
    /**
     * Return all nodes that are predecessors of the specified node or undefined if node v is not in
     * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
     * Complexity: O(|V|).
     */
    predecessors(v) {
      var predsV = this._preds[v];
      if (predsV) {
        return Object.keys(predsV);
      }
    }
    /**
     * Return all nodes that are successors of the specified node or undefined if node v is not in
     * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
     * Complexity: O(|V|).
     */
    successors(v) {
      var sucsV = this._sucs[v];
      if (sucsV) {
        return Object.keys(sucsV);
      }
    }
    /**
     * Return all nodes that are predecessors or successors of the specified node or undefined if
     * node v is not in the graph.
     * Complexity: O(|V|).
     */
    neighbors(v) {
      var preds = this.predecessors(v);
      if (preds) {
        const union = new Set(preds);
        for (var succ of this.successors(v)) {
          union.add(succ);
        }
        return Array.from(union.values());
      }
    }
    isLeaf(v) {
      var neighbors;
      if (this.isDirected()) {
        neighbors = this.successors(v);
      } else {
        neighbors = this.neighbors(v);
      }
      return neighbors.length === 0;
    }
    /**
     * Creates new graph with nodes filtered via filter. Edges incident to rejected node
     * are also removed. In case of compound graph, if parent is rejected by filter,
     * than all its children are rejected too.
     * Average-case complexity: O(|E|+|V|).
     */
    filterNodes(filter2) {
      var copy = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound
      });
      copy.setGraph(this.graph());
      var self = this;
      Object.entries(this._nodes).forEach(function([v, value]) {
        if (filter2(v)) {
          copy.setNode(v, value);
        }
      });
      Object.values(this._edgeObjs).forEach(function(e) {
        if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
          copy.setEdge(e, self.edge(e));
        }
      });
      var parents = {};
      function findParent(v) {
        var parent = self.parent(v);
        if (parent === void 0 || copy.hasNode(parent)) {
          parents[v] = parent;
          return parent;
        } else if (parent in parents) {
          return parents[parent];
        } else {
          return findParent(parent);
        }
      }
      if (this._isCompound) {
        copy.nodes().forEach((v) => copy.setParent(v, findParent(v)));
      }
      return copy;
    }
    /* === Edge functions ========== */
    /**
     * Sets the default edge label or factory function. This label will be
     * assigned as default label in case if no label was specified while setting
     * an edge or this function will be invoked each time when setting an edge
     * with no label specified and returned value * will be used as a label for edge.
     * Complexity: O(1).
     */
    setDefaultEdgeLabel(newDefault) {
      this._defaultEdgeLabelFn = newDefault;
      if (typeof newDefault !== "function") {
        this._defaultEdgeLabelFn = () => newDefault;
      }
      return this;
    }
    /**
     * Gets the number of edges in the graph.
     * Complexity: O(1).
     */
    edgeCount() {
      return this._edgeCount;
    }
    /**
     * Gets edges of the graph. In case of compound graph subgraphs are not considered.
     * Complexity: O(|E|).
     */
    edges() {
      return Object.values(this._edgeObjs);
    }
    /**
     * Establish an edges path over the nodes in nodes list. If some edge is already
     * exists, it will update its label, otherwise it will create an edge between pair
     * of nodes with label provided or default label if no label provided.
     * Complexity: O(|nodes|).
     */
    setPath(vs, value) {
      var self = this;
      var args = arguments;
      vs.reduce(function(v, w) {
        if (args.length > 1) {
          self.setEdge(v, w, value);
        } else {
          self.setEdge(v, w);
        }
        return w;
      });
      return this;
    }
    /**
     * Creates or updates the label for the edge (v, w) with the optionally supplied
     * name. If label is supplied it is set as the value for the edge. If label is not
     * supplied and the edge was created by this call then the default edge label will
     * be assigned. The name parameter is only useful with multigraphs.
     */
    setEdge() {
      var v, w, name, value;
      var valueSpecified = false;
      var arg0 = arguments[0];
      if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
        v = arg0.v;
        w = arg0.w;
        name = arg0.name;
        if (arguments.length === 2) {
          value = arguments[1];
          valueSpecified = true;
        }
      } else {
        v = arg0;
        w = arguments[1];
        name = arguments[3];
        if (arguments.length > 2) {
          value = arguments[2];
          valueSpecified = true;
        }
      }
      v = "" + v;
      w = "" + w;
      if (name !== void 0) {
        name = "" + name;
      }
      var e = edgeArgsToId(this._isDirected, v, w, name);
      if (Object.hasOwn(this._edgeLabels, e)) {
        if (valueSpecified) {
          this._edgeLabels[e] = value;
        }
        return this;
      }
      if (name !== void 0 && !this._isMultigraph) {
        throw new Error("Cannot set a named edge when isMultigraph = false");
      }
      this.setNode(v);
      this.setNode(w);
      this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
      var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
      v = edgeObj.v;
      w = edgeObj.w;
      Object.freeze(edgeObj);
      this._edgeObjs[e] = edgeObj;
      incrementOrInitEntry(this._preds[w], v);
      incrementOrInitEntry(this._sucs[v], w);
      this._in[w][e] = edgeObj;
      this._out[v][e] = edgeObj;
      this._edgeCount++;
      return this;
    }
    /**
     * Gets the label for the specified edge.
     * Complexity: O(1).
     */
    edge(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      return this._edgeLabels[e];
    }
    /**
     * Gets the label for the specified edge and converts it to an object.
     * Complexity: O(1)
     */
    edgeAsObj() {
      const edge2 = this.edge(...arguments);
      if (typeof edge2 !== "object") {
        return { label: edge2 };
      }
      return edge2;
    }
    /**
     * Detects whether the graph contains specified edge or not. No subgraphs are considered.
     * Complexity: O(1).
     */
    hasEdge(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      return Object.hasOwn(this._edgeLabels, e);
    }
    /**
     * Removes the specified edge from the graph. No subgraphs are considered.
     * Complexity: O(1).
     */
    removeEdge(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      var edge2 = this._edgeObjs[e];
      if (edge2) {
        v = edge2.v;
        w = edge2.w;
        delete this._edgeLabels[e];
        delete this._edgeObjs[e];
        decrementOrRemoveEntry(this._preds[w], v);
        decrementOrRemoveEntry(this._sucs[v], w);
        delete this._in[w][e];
        delete this._out[v][e];
        this._edgeCount--;
      }
      return this;
    }
    /**
     * Return all edges that point to the node v. Optionally filters those edges down to just those
     * coming from node u. Behavior is undefined for undirected graphs - use nodeEdges instead.
     * Complexity: O(|E|).
     */
    inEdges(v, u) {
      var inV = this._in[v];
      if (inV) {
        var edges = Object.values(inV);
        if (!u) {
          return edges;
        }
        return edges.filter((edge2) => edge2.v === u);
      }
    }
    /**
     * Return all edges that are pointed at by node v. Optionally filters those edges down to just
     * those point to w. Behavior is undefined for undirected graphs - use nodeEdges instead.
     * Complexity: O(|E|).
     */
    outEdges(v, w) {
      var outV = this._out[v];
      if (outV) {
        var edges = Object.values(outV);
        if (!w) {
          return edges;
        }
        return edges.filter((edge2) => edge2.w === w);
      }
    }
    /**
     * Returns all edges to or from node v regardless of direction. Optionally filters those edges
     * down to just those between nodes v and w regardless of direction.
     * Complexity: O(|E|).
     */
    nodeEdges(v, w) {
      var inEdges = this.inEdges(v, w);
      if (inEdges) {
        return inEdges.concat(this.outEdges(v, w));
      }
    }
  }
  function incrementOrInitEntry(map, k) {
    if (map[k]) {
      map[k]++;
    } else {
      map[k] = 1;
    }
  }
  function decrementOrRemoveEntry(map, k) {
    if (!--map[k]) {
      delete map[k];
    }
  }
  function edgeArgsToId(isDirected, v_, w_, name) {
    var v = "" + v_;
    var w = "" + w_;
    if (!isDirected && v > w) {
      var tmp = v;
      v = w;
      w = tmp;
    }
    return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (name === void 0 ? DEFAULT_EDGE_NAME : name);
  }
  function edgeArgsToObj(isDirected, v_, w_, name) {
    var v = "" + v_;
    var w = "" + w_;
    if (!isDirected && v > w) {
      var tmp = v;
      v = w;
      w = tmp;
    }
    var edgeObj = { v, w };
    if (name) {
      edgeObj.name = name;
    }
    return edgeObj;
  }
  function edgeObjToId(isDirected, edgeObj) {
    return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
  }
  graph = Graph;
  return graph;
}
var version$1;
var hasRequiredVersion$1;
function requireVersion$1() {
  if (hasRequiredVersion$1) return version$1;
  hasRequiredVersion$1 = 1;
  version$1 = "2.2.4";
  return version$1;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  lib = {
    Graph: requireGraph(),
    version: requireVersion$1()
  };
  return lib;
}
var json;
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  var Graph = requireGraph();
  json = {
    write,
    read
  };
  function write(g) {
    var json2 = {
      options: {
        directed: g.isDirected(),
        multigraph: g.isMultigraph(),
        compound: g.isCompound()
      },
      nodes: writeNodes(g),
      edges: writeEdges(g)
    };
    if (g.graph() !== void 0) {
      json2.value = structuredClone(g.graph());
    }
    return json2;
  }
  function writeNodes(g) {
    return g.nodes().map(function(v) {
      var nodeValue = g.node(v);
      var parent = g.parent(v);
      var node2 = { v };
      if (nodeValue !== void 0) {
        node2.value = nodeValue;
      }
      if (parent !== void 0) {
        node2.parent = parent;
      }
      return node2;
    });
  }
  function writeEdges(g) {
    return g.edges().map(function(e) {
      var edgeValue = g.edge(e);
      var edge2 = { v: e.v, w: e.w };
      if (e.name !== void 0) {
        edge2.name = e.name;
      }
      if (edgeValue !== void 0) {
        edge2.value = edgeValue;
      }
      return edge2;
    });
  }
  function read(json2) {
    var g = new Graph(json2.options).setGraph(json2.value);
    json2.nodes.forEach(function(entry) {
      g.setNode(entry.v, entry.value);
      if (entry.parent) {
        g.setParent(entry.v, entry.parent);
      }
    });
    json2.edges.forEach(function(entry) {
      g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
    });
    return g;
  }
  return json;
}
var components_1;
var hasRequiredComponents;
function requireComponents() {
  if (hasRequiredComponents) return components_1;
  hasRequiredComponents = 1;
  components_1 = components;
  function components(g) {
    var visited = {};
    var cmpts = [];
    var cmpt;
    function dfs(v) {
      if (Object.hasOwn(visited, v)) return;
      visited[v] = true;
      cmpt.push(v);
      g.successors(v).forEach(dfs);
      g.predecessors(v).forEach(dfs);
    }
    g.nodes().forEach(function(v) {
      cmpt = [];
      dfs(v);
      if (cmpt.length) {
        cmpts.push(cmpt);
      }
    });
    return cmpts;
  }
  return components_1;
}
var priorityQueue;
var hasRequiredPriorityQueue;
function requirePriorityQueue() {
  if (hasRequiredPriorityQueue) return priorityQueue;
  hasRequiredPriorityQueue = 1;
  class PriorityQueue {
    _arr = [];
    _keyIndices = {};
    /**
     * Returns the number of elements in the queue. Takes `O(1)` time.
     */
    size() {
      return this._arr.length;
    }
    /**
     * Returns the keys that are in the queue. Takes `O(n)` time.
     */
    keys() {
      return this._arr.map(function(x) {
        return x.key;
      });
    }
    /**
     * Returns `true` if **key** is in the queue and `false` if not.
     */
    has(key) {
      return Object.hasOwn(this._keyIndices, key);
    }
    /**
     * Returns the priority for **key**. If **key** is not present in the queue
     * then this function returns `undefined`. Takes `O(1)` time.
     *
     * @param {Object} key
     */
    priority(key) {
      var index = this._keyIndices[key];
      if (index !== void 0) {
        return this._arr[index].priority;
      }
    }
    /**
     * Returns the key for the minimum element in this queue. If the queue is
     * empty this function throws an Error. Takes `O(1)` time.
     */
    min() {
      if (this.size() === 0) {
        throw new Error("Queue underflow");
      }
      return this._arr[0].key;
    }
    /**
     * Inserts a new key into the priority queue. If the key already exists in
     * the queue this function returns `false`; otherwise it will return `true`.
     * Takes `O(n)` time.
     *
     * @param {Object} key the key to add
     * @param {Number} priority the initial priority for the key
     */
    add(key, priority) {
      var keyIndices = this._keyIndices;
      key = String(key);
      if (!Object.hasOwn(keyIndices, key)) {
        var arr = this._arr;
        var index = arr.length;
        keyIndices[key] = index;
        arr.push({ key, priority });
        this._decrease(index);
        return true;
      }
      return false;
    }
    /**
     * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
     */
    removeMin() {
      this._swap(0, this._arr.length - 1);
      var min = this._arr.pop();
      delete this._keyIndices[min.key];
      this._heapify(0);
      return min.key;
    }
    /**
     * Decreases the priority for **key** to **priority**. If the new priority is
     * greater than the previous priority, this function will throw an Error.
     *
     * @param {Object} key the key for which to raise priority
     * @param {Number} priority the new priority for the key
     */
    decrease(key, priority) {
      var index = this._keyIndices[key];
      if (priority > this._arr[index].priority) {
        throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
      }
      this._arr[index].priority = priority;
      this._decrease(index);
    }
    _heapify(i) {
      var arr = this._arr;
      var l = 2 * i;
      var r = l + 1;
      var largest = i;
      if (l < arr.length) {
        largest = arr[l].priority < arr[largest].priority ? l : largest;
        if (r < arr.length) {
          largest = arr[r].priority < arr[largest].priority ? r : largest;
        }
        if (largest !== i) {
          this._swap(i, largest);
          this._heapify(largest);
        }
      }
    }
    _decrease(index) {
      var arr = this._arr;
      var priority = arr[index].priority;
      var parent;
      while (index !== 0) {
        parent = index >> 1;
        if (arr[parent].priority < priority) {
          break;
        }
        this._swap(index, parent);
        index = parent;
      }
    }
    _swap(i, j) {
      var arr = this._arr;
      var keyIndices = this._keyIndices;
      var origArrI = arr[i];
      var origArrJ = arr[j];
      arr[i] = origArrJ;
      arr[j] = origArrI;
      keyIndices[origArrJ.key] = i;
      keyIndices[origArrI.key] = j;
    }
  }
  priorityQueue = PriorityQueue;
  return priorityQueue;
}
var dijkstra_1;
var hasRequiredDijkstra;
function requireDijkstra() {
  if (hasRequiredDijkstra) return dijkstra_1;
  hasRequiredDijkstra = 1;
  var PriorityQueue = requirePriorityQueue();
  dijkstra_1 = dijkstra;
  var DEFAULT_WEIGHT_FUNC = () => 1;
  function dijkstra(g, source, weightFn, edgeFn) {
    return runDijkstra(
      g,
      String(source),
      weightFn || DEFAULT_WEIGHT_FUNC,
      edgeFn || function(v) {
        return g.outEdges(v);
      }
    );
  }
  function runDijkstra(g, source, weightFn, edgeFn) {
    var results = {};
    var pq = new PriorityQueue();
    var v, vEntry;
    var updateNeighbors = function(edge2) {
      var w = edge2.v !== v ? edge2.v : edge2.w;
      var wEntry = results[w];
      var weight = weightFn(edge2);
      var distance2 = vEntry.distance + weight;
      if (weight < 0) {
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge2 + " Weight: " + weight);
      }
      if (distance2 < wEntry.distance) {
        wEntry.distance = distance2;
        wEntry.predecessor = v;
        pq.decrease(w, distance2);
      }
    };
    g.nodes().forEach(function(v2) {
      var distance2 = v2 === source ? 0 : Number.POSITIVE_INFINITY;
      results[v2] = { distance: distance2 };
      pq.add(v2, distance2);
    });
    while (pq.size() > 0) {
      v = pq.removeMin();
      vEntry = results[v];
      if (vEntry.distance === Number.POSITIVE_INFINITY) {
        break;
      }
      edgeFn(v).forEach(updateNeighbors);
    }
    return results;
  }
  return dijkstra_1;
}
var dijkstraAll_1;
var hasRequiredDijkstraAll;
function requireDijkstraAll() {
  if (hasRequiredDijkstraAll) return dijkstraAll_1;
  hasRequiredDijkstraAll = 1;
  var dijkstra = requireDijkstra();
  dijkstraAll_1 = dijkstraAll;
  function dijkstraAll(g, weightFunc, edgeFunc) {
    return g.nodes().reduce(function(acc, v) {
      acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
      return acc;
    }, {});
  }
  return dijkstraAll_1;
}
var tarjan_1;
var hasRequiredTarjan;
function requireTarjan() {
  if (hasRequiredTarjan) return tarjan_1;
  hasRequiredTarjan = 1;
  tarjan_1 = tarjan;
  function tarjan(g) {
    var index = 0;
    var stack = [];
    var visited = {};
    var results = [];
    function dfs(v) {
      var entry = visited[v] = {
        onStack: true,
        lowlink: index,
        index: index++
      };
      stack.push(v);
      g.successors(v).forEach(function(w2) {
        if (!Object.hasOwn(visited, w2)) {
          dfs(w2);
          entry.lowlink = Math.min(entry.lowlink, visited[w2].lowlink);
        } else if (visited[w2].onStack) {
          entry.lowlink = Math.min(entry.lowlink, visited[w2].index);
        }
      });
      if (entry.lowlink === entry.index) {
        var cmpt = [];
        var w;
        do {
          w = stack.pop();
          visited[w].onStack = false;
          cmpt.push(w);
        } while (v !== w);
        results.push(cmpt);
      }
    }
    g.nodes().forEach(function(v) {
      if (!Object.hasOwn(visited, v)) {
        dfs(v);
      }
    });
    return results;
  }
  return tarjan_1;
}
var findCycles_1;
var hasRequiredFindCycles;
function requireFindCycles() {
  if (hasRequiredFindCycles) return findCycles_1;
  hasRequiredFindCycles = 1;
  var tarjan = requireTarjan();
  findCycles_1 = findCycles;
  function findCycles(g) {
    return tarjan(g).filter(function(cmpt) {
      return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
    });
  }
  return findCycles_1;
}
var floydWarshall_1;
var hasRequiredFloydWarshall;
function requireFloydWarshall() {
  if (hasRequiredFloydWarshall) return floydWarshall_1;
  hasRequiredFloydWarshall = 1;
  floydWarshall_1 = floydWarshall;
  var DEFAULT_WEIGHT_FUNC = () => 1;
  function floydWarshall(g, weightFn, edgeFn) {
    return runFloydWarshall(
      g,
      weightFn || DEFAULT_WEIGHT_FUNC,
      edgeFn || function(v) {
        return g.outEdges(v);
      }
    );
  }
  function runFloydWarshall(g, weightFn, edgeFn) {
    var results = {};
    var nodes = g.nodes();
    nodes.forEach(function(v) {
      results[v] = {};
      results[v][v] = { distance: 0 };
      nodes.forEach(function(w) {
        if (v !== w) {
          results[v][w] = { distance: Number.POSITIVE_INFINITY };
        }
      });
      edgeFn(v).forEach(function(edge2) {
        var w = edge2.v === v ? edge2.w : edge2.v;
        var d = weightFn(edge2);
        results[v][w] = { distance: d, predecessor: v };
      });
    });
    nodes.forEach(function(k) {
      var rowK = results[k];
      nodes.forEach(function(i) {
        var rowI = results[i];
        nodes.forEach(function(j) {
          var ik = rowI[k];
          var kj = rowK[j];
          var ij = rowI[j];
          var altDistance = ik.distance + kj.distance;
          if (altDistance < ij.distance) {
            ij.distance = altDistance;
            ij.predecessor = kj.predecessor;
          }
        });
      });
    });
    return results;
  }
  return floydWarshall_1;
}
var topsort_1;
var hasRequiredTopsort;
function requireTopsort() {
  if (hasRequiredTopsort) return topsort_1;
  hasRequiredTopsort = 1;
  function topsort(g) {
    var visited = {};
    var stack = {};
    var results = [];
    function visit(node2) {
      if (Object.hasOwn(stack, node2)) {
        throw new CycleException();
      }
      if (!Object.hasOwn(visited, node2)) {
        stack[node2] = true;
        visited[node2] = true;
        g.predecessors(node2).forEach(visit);
        delete stack[node2];
        results.push(node2);
      }
    }
    g.sinks().forEach(visit);
    if (Object.keys(visited).length !== g.nodeCount()) {
      throw new CycleException();
    }
    return results;
  }
  class CycleException extends Error {
    constructor() {
      super(...arguments);
    }
  }
  topsort_1 = topsort;
  topsort.CycleException = CycleException;
  return topsort_1;
}
var isAcyclic_1;
var hasRequiredIsAcyclic;
function requireIsAcyclic() {
  if (hasRequiredIsAcyclic) return isAcyclic_1;
  hasRequiredIsAcyclic = 1;
  var topsort = requireTopsort();
  isAcyclic_1 = isAcyclic;
  function isAcyclic(g) {
    try {
      topsort(g);
    } catch (e) {
      if (e instanceof topsort.CycleException) {
        return false;
      }
      throw e;
    }
    return true;
  }
  return isAcyclic_1;
}
var dfs_1;
var hasRequiredDfs;
function requireDfs() {
  if (hasRequiredDfs) return dfs_1;
  hasRequiredDfs = 1;
  dfs_1 = dfs;
  function dfs(g, vs, order) {
    if (!Array.isArray(vs)) {
      vs = [vs];
    }
    var navigation = g.isDirected() ? (v) => g.successors(v) : (v) => g.neighbors(v);
    var orderFunc = order === "post" ? postOrderDfs : preOrderDfs;
    var acc = [];
    var visited = {};
    vs.forEach((v) => {
      if (!g.hasNode(v)) {
        throw new Error("Graph does not have node: " + v);
      }
      orderFunc(v, navigation, visited, acc);
    });
    return acc;
  }
  function postOrderDfs(v, navigation, visited, acc) {
    var stack = [[v, false]];
    while (stack.length > 0) {
      var curr = stack.pop();
      if (curr[1]) {
        acc.push(curr[0]);
      } else {
        if (!Object.hasOwn(visited, curr[0])) {
          visited[curr[0]] = true;
          stack.push([curr[0], true]);
          forEachRight(navigation(curr[0]), (w) => stack.push([w, false]));
        }
      }
    }
  }
  function preOrderDfs(v, navigation, visited, acc) {
    var stack = [v];
    while (stack.length > 0) {
      var curr = stack.pop();
      if (!Object.hasOwn(visited, curr)) {
        visited[curr] = true;
        acc.push(curr);
        forEachRight(navigation(curr), (w) => stack.push(w));
      }
    }
  }
  function forEachRight(array2, iteratee) {
    var length = array2.length;
    while (length--) {
      iteratee(array2[length], length, array2);
    }
    return array2;
  }
  return dfs_1;
}
var postorder_1;
var hasRequiredPostorder;
function requirePostorder() {
  if (hasRequiredPostorder) return postorder_1;
  hasRequiredPostorder = 1;
  var dfs = requireDfs();
  postorder_1 = postorder;
  function postorder(g, vs) {
    return dfs(g, vs, "post");
  }
  return postorder_1;
}
var preorder_1;
var hasRequiredPreorder;
function requirePreorder() {
  if (hasRequiredPreorder) return preorder_1;
  hasRequiredPreorder = 1;
  var dfs = requireDfs();
  preorder_1 = preorder;
  function preorder(g, vs) {
    return dfs(g, vs, "pre");
  }
  return preorder_1;
}
var prim_1;
var hasRequiredPrim;
function requirePrim() {
  if (hasRequiredPrim) return prim_1;
  hasRequiredPrim = 1;
  var Graph = requireGraph();
  var PriorityQueue = requirePriorityQueue();
  prim_1 = prim;
  function prim(g, weightFunc) {
    var result = new Graph();
    var parents = {};
    var pq = new PriorityQueue();
    var v;
    function updateNeighbors(edge2) {
      var w = edge2.v === v ? edge2.w : edge2.v;
      var pri = pq.priority(w);
      if (pri !== void 0) {
        var edgeWeight = weightFunc(edge2);
        if (edgeWeight < pri) {
          parents[w] = v;
          pq.decrease(w, edgeWeight);
        }
      }
    }
    if (g.nodeCount() === 0) {
      return result;
    }
    g.nodes().forEach(function(v2) {
      pq.add(v2, Number.POSITIVE_INFINITY);
      result.setNode(v2);
    });
    pq.decrease(g.nodes()[0], 0);
    var init2 = false;
    while (pq.size() > 0) {
      v = pq.removeMin();
      if (Object.hasOwn(parents, v)) {
        result.setEdge(v, parents[v]);
      } else if (init2) {
        throw new Error("Input graph is not connected: " + g);
      } else {
        init2 = true;
      }
      g.nodeEdges(v).forEach(updateNeighbors);
    }
    return result;
  }
  return prim_1;
}
var alg;
var hasRequiredAlg;
function requireAlg() {
  if (hasRequiredAlg) return alg;
  hasRequiredAlg = 1;
  alg = {
    components: requireComponents(),
    dijkstra: requireDijkstra(),
    dijkstraAll: requireDijkstraAll(),
    findCycles: requireFindCycles(),
    floydWarshall: requireFloydWarshall(),
    isAcyclic: requireIsAcyclic(),
    postorder: requirePostorder(),
    preorder: requirePreorder(),
    prim: requirePrim(),
    tarjan: requireTarjan(),
    topsort: requireTopsort()
  };
  return alg;
}
var graphlib;
var hasRequiredGraphlib;
function requireGraphlib() {
  if (hasRequiredGraphlib) return graphlib;
  hasRequiredGraphlib = 1;
  var lib2 = requireLib();
  graphlib = {
    Graph: lib2.Graph,
    json: requireJson(),
    alg: requireAlg(),
    version: lib2.version
  };
  return graphlib;
}
var list;
var hasRequiredList;
function requireList() {
  if (hasRequiredList) return list;
  hasRequiredList = 1;
  class List {
    constructor() {
      let sentinel = {};
      sentinel._next = sentinel._prev = sentinel;
      this._sentinel = sentinel;
    }
    dequeue() {
      let sentinel = this._sentinel;
      let entry = sentinel._prev;
      if (entry !== sentinel) {
        unlink(entry);
        return entry;
      }
    }
    enqueue(entry) {
      let sentinel = this._sentinel;
      if (entry._prev && entry._next) {
        unlink(entry);
      }
      entry._next = sentinel._next;
      sentinel._next._prev = entry;
      sentinel._next = entry;
      entry._prev = sentinel;
    }
    toString() {
      let strs = [];
      let sentinel = this._sentinel;
      let curr = sentinel._prev;
      while (curr !== sentinel) {
        strs.push(JSON.stringify(curr, filterOutLinks));
        curr = curr._prev;
      }
      return "[" + strs.join(", ") + "]";
    }
  }
  function unlink(entry) {
    entry._prev._next = entry._next;
    entry._next._prev = entry._prev;
    delete entry._next;
    delete entry._prev;
  }
  function filterOutLinks(k, v) {
    if (k !== "_next" && k !== "_prev") {
      return v;
    }
  }
  list = List;
  return list;
}
var greedyFas;
var hasRequiredGreedyFas;
function requireGreedyFas() {
  if (hasRequiredGreedyFas) return greedyFas;
  hasRequiredGreedyFas = 1;
  let Graph = requireGraphlib().Graph;
  let List = requireList();
  greedyFas = greedyFAS;
  let DEFAULT_WEIGHT_FN = () => 1;
  function greedyFAS(g, weightFn) {
    if (g.nodeCount() <= 1) {
      return [];
    }
    let state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
    let results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
    return results.flatMap((e) => g.outEdges(e.v, e.w));
  }
  function doGreedyFAS(g, buckets, zeroIdx) {
    let results = [];
    let sources = buckets[buckets.length - 1];
    let sinks = buckets[0];
    let entry;
    while (g.nodeCount()) {
      while (entry = sinks.dequeue()) {
        removeNode(g, buckets, zeroIdx, entry);
      }
      while (entry = sources.dequeue()) {
        removeNode(g, buckets, zeroIdx, entry);
      }
      if (g.nodeCount()) {
        for (let i = buckets.length - 2; i > 0; --i) {
          entry = buckets[i].dequeue();
          if (entry) {
            results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
            break;
          }
        }
      }
    }
    return results;
  }
  function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
    let results = collectPredecessors ? [] : void 0;
    g.inEdges(entry.v).forEach((edge2) => {
      let weight = g.edge(edge2);
      let uEntry = g.node(edge2.v);
      if (collectPredecessors) {
        results.push({ v: edge2.v, w: edge2.w });
      }
      uEntry.out -= weight;
      assignBucket(buckets, zeroIdx, uEntry);
    });
    g.outEdges(entry.v).forEach((edge2) => {
      let weight = g.edge(edge2);
      let w = edge2.w;
      let wEntry = g.node(w);
      wEntry["in"] -= weight;
      assignBucket(buckets, zeroIdx, wEntry);
    });
    g.removeNode(entry.v);
    return results;
  }
  function buildState(g, weightFn) {
    let fasGraph = new Graph();
    let maxIn = 0;
    let maxOut = 0;
    g.nodes().forEach((v) => {
      fasGraph.setNode(v, { v, "in": 0, out: 0 });
    });
    g.edges().forEach((e) => {
      let prevWeight = fasGraph.edge(e.v, e.w) || 0;
      let weight = weightFn(e);
      let edgeWeight = prevWeight + weight;
      fasGraph.setEdge(e.v, e.w, edgeWeight);
      maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
      maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
    });
    let buckets = range(maxOut + maxIn + 3).map(() => new List());
    let zeroIdx = maxIn + 1;
    fasGraph.nodes().forEach((v) => {
      assignBucket(buckets, zeroIdx, fasGraph.node(v));
    });
    return { graph: fasGraph, buckets, zeroIdx };
  }
  function assignBucket(buckets, zeroIdx, entry) {
    if (!entry.out) {
      buckets[0].enqueue(entry);
    } else if (!entry["in"]) {
      buckets[buckets.length - 1].enqueue(entry);
    } else {
      buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
    }
  }
  function range(limit) {
    const range2 = [];
    for (let i = 0; i < limit; i++) {
      range2.push(i);
    }
    return range2;
  }
  return greedyFas;
}
var util$1;
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util$1;
  hasRequiredUtil$1 = 1;
  let Graph = requireGraphlib().Graph;
  util$1 = {
    addBorderNode,
    addDummyNode,
    applyWithChunking,
    asNonCompoundGraph,
    buildLayerMatrix,
    intersectRect,
    mapValues,
    maxRank,
    normalizeRanks,
    notime,
    partition,
    pick,
    predecessorWeights,
    range,
    removeEmptyRanks,
    simplify,
    successorWeights,
    time,
    uniqueId,
    zipObject
  };
  function addDummyNode(g, type, attrs, name) {
    let v;
    do {
      v = uniqueId(name);
    } while (g.hasNode(v));
    attrs.dummy = type;
    g.setNode(v, attrs);
    return v;
  }
  function simplify(g) {
    let simplified = new Graph().setGraph(g.graph());
    g.nodes().forEach((v) => simplified.setNode(v, g.node(v)));
    g.edges().forEach((e) => {
      let simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
      let label2 = g.edge(e);
      simplified.setEdge(e.v, e.w, {
        weight: simpleLabel.weight + label2.weight,
        minlen: Math.max(simpleLabel.minlen, label2.minlen)
      });
    });
    return simplified;
  }
  function asNonCompoundGraph(g) {
    let simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
    g.nodes().forEach((v) => {
      if (!g.children(v).length) {
        simplified.setNode(v, g.node(v));
      }
    });
    g.edges().forEach((e) => {
      simplified.setEdge(e, g.edge(e));
    });
    return simplified;
  }
  function successorWeights(g) {
    let weightMap = g.nodes().map((v) => {
      let sucs = {};
      g.outEdges(v).forEach((e) => {
        sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
      });
      return sucs;
    });
    return zipObject(g.nodes(), weightMap);
  }
  function predecessorWeights(g) {
    let weightMap = g.nodes().map((v) => {
      let preds = {};
      g.inEdges(v).forEach((e) => {
        preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
      });
      return preds;
    });
    return zipObject(g.nodes(), weightMap);
  }
  function intersectRect(rect, point) {
    let x = rect.x;
    let y = rect.y;
    let dx = point.x - x;
    let dy = point.y - y;
    let w = rect.width / 2;
    let h2 = rect.height / 2;
    if (!dx && !dy) {
      throw new Error("Not possible to find intersection inside of the rectangle");
    }
    let sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h2) {
      if (dy < 0) {
        h2 = -h2;
      }
      sx = h2 * dx / dy;
      sy = h2;
    } else {
      if (dx < 0) {
        w = -w;
      }
      sx = w;
      sy = w * dy / dx;
    }
    return { x: x + sx, y: y + sy };
  }
  function buildLayerMatrix(g) {
    let layering = range(maxRank(g) + 1).map(() => []);
    g.nodes().forEach((v) => {
      let node2 = g.node(v);
      let rank = node2.rank;
      if (rank !== void 0) {
        layering[rank][node2.order] = v;
      }
    });
    return layering;
  }
  function normalizeRanks(g) {
    let nodeRanks = g.nodes().map((v) => {
      let rank = g.node(v).rank;
      if (rank === void 0) {
        return Number.MAX_VALUE;
      }
      return rank;
    });
    let min = applyWithChunking(Math.min, nodeRanks);
    g.nodes().forEach((v) => {
      let node2 = g.node(v);
      if (Object.hasOwn(node2, "rank")) {
        node2.rank -= min;
      }
    });
  }
  function removeEmptyRanks(g) {
    let nodeRanks = g.nodes().map((v) => g.node(v).rank);
    let offset = applyWithChunking(Math.min, nodeRanks);
    let layers = [];
    g.nodes().forEach((v) => {
      let rank = g.node(v).rank - offset;
      if (!layers[rank]) {
        layers[rank] = [];
      }
      layers[rank].push(v);
    });
    let delta = 0;
    let nodeRankFactor = g.graph().nodeRankFactor;
    Array.from(layers).forEach((vs, i) => {
      if (vs === void 0 && i % nodeRankFactor !== 0) {
        --delta;
      } else if (vs !== void 0 && delta) {
        vs.forEach((v) => g.node(v).rank += delta);
      }
    });
  }
  function addBorderNode(g, prefix, rank, order) {
    let node2 = {
      width: 0,
      height: 0
    };
    if (arguments.length >= 4) {
      node2.rank = rank;
      node2.order = order;
    }
    return addDummyNode(g, "border", node2, prefix);
  }
  function splitToChunks(array2, chunkSize = CHUNKING_THRESHOLD) {
    const chunks = [];
    for (let i = 0; i < array2.length; i += chunkSize) {
      const chunk = array2.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    return chunks;
  }
  const CHUNKING_THRESHOLD = 65535;
  function applyWithChunking(fn, argsArray) {
    if (argsArray.length > CHUNKING_THRESHOLD) {
      const chunks = splitToChunks(argsArray);
      return fn.apply(null, chunks.map((chunk) => fn.apply(null, chunk)));
    } else {
      return fn.apply(null, argsArray);
    }
  }
  function maxRank(g) {
    const nodes = g.nodes();
    const nodeRanks = nodes.map((v) => {
      let rank = g.node(v).rank;
      if (rank === void 0) {
        return Number.MIN_VALUE;
      }
      return rank;
    });
    return applyWithChunking(Math.max, nodeRanks);
  }
  function partition(collection, fn) {
    let result = { lhs: [], rhs: [] };
    collection.forEach((value) => {
      if (fn(value)) {
        result.lhs.push(value);
      } else {
        result.rhs.push(value);
      }
    });
    return result;
  }
  function time(name, fn) {
    let start2 = Date.now();
    try {
      return fn();
    } finally {
      console.log(name + " time: " + (Date.now() - start2) + "ms");
    }
  }
  function notime(name, fn) {
    return fn();
  }
  let idCounter = 0;
  function uniqueId(prefix) {
    var id2 = ++idCounter;
    return toString(prefix) + id2;
  }
  function range(start2, limit, step = 1) {
    if (limit == null) {
      limit = start2;
      start2 = 0;
    }
    let endCon = (i) => i < limit;
    if (step < 0) {
      endCon = (i) => limit < i;
    }
    const range2 = [];
    for (let i = start2; endCon(i); i += step) {
      range2.push(i);
    }
    return range2;
  }
  function pick(source, keys) {
    const dest = {};
    for (const key of keys) {
      if (source[key] !== void 0) {
        dest[key] = source[key];
      }
    }
    return dest;
  }
  function mapValues(obj, funcOrProp) {
    let func = funcOrProp;
    if (typeof funcOrProp === "string") {
      func = (val) => val[funcOrProp];
    }
    return Object.entries(obj).reduce((acc, [k, v]) => {
      acc[k] = func(v, k);
      return acc;
    }, {});
  }
  function zipObject(props, values) {
    return props.reduce((acc, key, i) => {
      acc[key] = values[i];
      return acc;
    }, {});
  }
  return util$1;
}
var acyclic;
var hasRequiredAcyclic;
function requireAcyclic() {
  if (hasRequiredAcyclic) return acyclic;
  hasRequiredAcyclic = 1;
  let greedyFAS = requireGreedyFas();
  let uniqueId = requireUtil$1().uniqueId;
  acyclic = {
    run,
    undo
  };
  function run(g) {
    let fas = g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
    fas.forEach((e) => {
      let label2 = g.edge(e);
      g.removeEdge(e);
      label2.forwardName = e.name;
      label2.reversed = true;
      g.setEdge(e.w, e.v, label2, uniqueId("rev"));
    });
    function weightFn(g2) {
      return (e) => {
        return g2.edge(e).weight;
      };
    }
  }
  function dfsFAS(g) {
    let fas = [];
    let stack = {};
    let visited = {};
    function dfs(v) {
      if (Object.hasOwn(visited, v)) {
        return;
      }
      visited[v] = true;
      stack[v] = true;
      g.outEdges(v).forEach((e) => {
        if (Object.hasOwn(stack, e.w)) {
          fas.push(e);
        } else {
          dfs(e.w);
        }
      });
      delete stack[v];
    }
    g.nodes().forEach(dfs);
    return fas;
  }
  function undo(g) {
    g.edges().forEach((e) => {
      let label2 = g.edge(e);
      if (label2.reversed) {
        g.removeEdge(e);
        let forwardName = label2.forwardName;
        delete label2.reversed;
        delete label2.forwardName;
        g.setEdge(e.w, e.v, label2, forwardName);
      }
    });
  }
  return acyclic;
}
var normalize;
var hasRequiredNormalize;
function requireNormalize() {
  if (hasRequiredNormalize) return normalize;
  hasRequiredNormalize = 1;
  let util2 = requireUtil$1();
  normalize = {
    run,
    undo
  };
  function run(g) {
    g.graph().dummyChains = [];
    g.edges().forEach((edge2) => normalizeEdge(g, edge2));
  }
  function normalizeEdge(g, e) {
    let v = e.v;
    let vRank = g.node(v).rank;
    let w = e.w;
    let wRank = g.node(w).rank;
    let name = e.name;
    let edgeLabel2 = g.edge(e);
    let labelRank = edgeLabel2.labelRank;
    if (wRank === vRank + 1) return;
    g.removeEdge(e);
    let dummy, attrs, i;
    for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
      edgeLabel2.points = [];
      attrs = {
        width: 0,
        height: 0,
        edgeLabel: edgeLabel2,
        edgeObj: e,
        rank: vRank
      };
      dummy = util2.addDummyNode(g, "edge", attrs, "_d");
      if (vRank === labelRank) {
        attrs.width = edgeLabel2.width;
        attrs.height = edgeLabel2.height;
        attrs.dummy = "edge-label";
        attrs.labelpos = edgeLabel2.labelpos;
      }
      g.setEdge(v, dummy, { weight: edgeLabel2.weight }, name);
      if (i === 0) {
        g.graph().dummyChains.push(dummy);
      }
      v = dummy;
    }
    g.setEdge(v, w, { weight: edgeLabel2.weight }, name);
  }
  function undo(g) {
    g.graph().dummyChains.forEach((v) => {
      let node2 = g.node(v);
      let origLabel = node2.edgeLabel;
      let w;
      g.setEdge(node2.edgeObj, origLabel);
      while (node2.dummy) {
        w = g.successors(v)[0];
        g.removeNode(v);
        origLabel.points.push({ x: node2.x, y: node2.y });
        if (node2.dummy === "edge-label") {
          origLabel.x = node2.x;
          origLabel.y = node2.y;
          origLabel.width = node2.width;
          origLabel.height = node2.height;
        }
        v = w;
        node2 = g.node(v);
      }
    });
  }
  return normalize;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  const { applyWithChunking } = requireUtil$1();
  util = {
    longestPath,
    slack
  };
  function longestPath(g) {
    var visited = {};
    function dfs(v) {
      var label2 = g.node(v);
      if (Object.hasOwn(visited, v)) {
        return label2.rank;
      }
      visited[v] = true;
      let outEdgesMinLens = g.outEdges(v).map((e) => {
        if (e == null) {
          return Number.POSITIVE_INFINITY;
        }
        return dfs(e.w) - g.edge(e).minlen;
      });
      var rank = applyWithChunking(Math.min, outEdgesMinLens);
      if (rank === Number.POSITIVE_INFINITY) {
        rank = 0;
      }
      return label2.rank = rank;
    }
    g.sources().forEach(dfs);
  }
  function slack(g, e) {
    return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
  }
  return util;
}
var feasibleTree_1;
var hasRequiredFeasibleTree;
function requireFeasibleTree() {
  if (hasRequiredFeasibleTree) return feasibleTree_1;
  hasRequiredFeasibleTree = 1;
  var Graph = requireGraphlib().Graph;
  var slack = requireUtil().slack;
  feasibleTree_1 = feasibleTree;
  function feasibleTree(g) {
    var t = new Graph({ directed: false });
    var start2 = g.nodes()[0];
    var size = g.nodeCount();
    t.setNode(start2, {});
    var edge2, delta;
    while (tightTree(t, g) < size) {
      edge2 = findMinSlackEdge(t, g);
      delta = t.hasNode(edge2.v) ? slack(g, edge2) : -slack(g, edge2);
      shiftRanks(t, g, delta);
    }
    return t;
  }
  function tightTree(t, g) {
    function dfs(v) {
      g.nodeEdges(v).forEach((e) => {
        var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
        if (!t.hasNode(w) && !slack(g, e)) {
          t.setNode(w, {});
          t.setEdge(v, w, {});
          dfs(w);
        }
      });
    }
    t.nodes().forEach(dfs);
    return t.nodeCount();
  }
  function findMinSlackEdge(t, g) {
    const edges = g.edges();
    return edges.reduce((acc, edge2) => {
      let edgeSlack = Number.POSITIVE_INFINITY;
      if (t.hasNode(edge2.v) !== t.hasNode(edge2.w)) {
        edgeSlack = slack(g, edge2);
      }
      if (edgeSlack < acc[0]) {
        return [edgeSlack, edge2];
      }
      return acc;
    }, [Number.POSITIVE_INFINITY, null])[1];
  }
  function shiftRanks(t, g, delta) {
    t.nodes().forEach((v) => g.node(v).rank += delta);
  }
  return feasibleTree_1;
}
var networkSimplex_1;
var hasRequiredNetworkSimplex;
function requireNetworkSimplex() {
  if (hasRequiredNetworkSimplex) return networkSimplex_1;
  hasRequiredNetworkSimplex = 1;
  var feasibleTree = requireFeasibleTree();
  var slack = requireUtil().slack;
  var initRank = requireUtil().longestPath;
  var preorder = requireGraphlib().alg.preorder;
  var postorder = requireGraphlib().alg.postorder;
  var simplify = requireUtil$1().simplify;
  networkSimplex_1 = networkSimplex;
  networkSimplex.initLowLimValues = initLowLimValues;
  networkSimplex.initCutValues = initCutValues;
  networkSimplex.calcCutValue = calcCutValue;
  networkSimplex.leaveEdge = leaveEdge;
  networkSimplex.enterEdge = enterEdge;
  networkSimplex.exchangeEdges = exchangeEdges;
  function networkSimplex(g) {
    g = simplify(g);
    initRank(g);
    var t = feasibleTree(g);
    initLowLimValues(t);
    initCutValues(t, g);
    var e, f;
    while (e = leaveEdge(t)) {
      f = enterEdge(t, g, e);
      exchangeEdges(t, g, e, f);
    }
  }
  function initCutValues(t, g) {
    var vs = postorder(t, t.nodes());
    vs = vs.slice(0, vs.length - 1);
    vs.forEach((v) => assignCutValue(t, g, v));
  }
  function assignCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
  }
  function calcCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    var childIsTail = true;
    var graphEdge = g.edge(child, parent);
    var cutValue = 0;
    if (!graphEdge) {
      childIsTail = false;
      graphEdge = g.edge(parent, child);
    }
    cutValue = graphEdge.weight;
    g.nodeEdges(child).forEach((e) => {
      var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
      if (other !== parent) {
        var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
        cutValue += pointsToHead ? otherWeight : -otherWeight;
        if (isTreeEdge(t, child, other)) {
          var otherCutValue = t.edge(child, other).cutvalue;
          cutValue += pointsToHead ? -otherCutValue : otherCutValue;
        }
      }
    });
    return cutValue;
  }
  function initLowLimValues(tree, root2) {
    if (arguments.length < 2) {
      root2 = tree.nodes()[0];
    }
    dfsAssignLowLim(tree, {}, 1, root2);
  }
  function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
    var low = nextLim;
    var label2 = tree.node(v);
    visited[v] = true;
    tree.neighbors(v).forEach((w) => {
      if (!Object.hasOwn(visited, w)) {
        nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
      }
    });
    label2.low = low;
    label2.lim = nextLim++;
    if (parent) {
      label2.parent = parent;
    } else {
      delete label2.parent;
    }
    return nextLim;
  }
  function leaveEdge(tree) {
    return tree.edges().find((e) => tree.edge(e).cutvalue < 0);
  }
  function enterEdge(t, g, edge2) {
    var v = edge2.v;
    var w = edge2.w;
    if (!g.hasEdge(v, w)) {
      v = edge2.w;
      w = edge2.v;
    }
    var vLabel = t.node(v);
    var wLabel = t.node(w);
    var tailLabel = vLabel;
    var flip = false;
    if (vLabel.lim > wLabel.lim) {
      tailLabel = wLabel;
      flip = true;
    }
    var candidates = g.edges().filter((edge3) => {
      return flip === isDescendant(t, t.node(edge3.v), tailLabel) && flip !== isDescendant(t, t.node(edge3.w), tailLabel);
    });
    return candidates.reduce((acc, edge3) => {
      if (slack(g, edge3) < slack(g, acc)) {
        return edge3;
      }
      return acc;
    });
  }
  function exchangeEdges(t, g, e, f) {
    var v = e.v;
    var w = e.w;
    t.removeEdge(v, w);
    t.setEdge(f.v, f.w, {});
    initLowLimValues(t);
    initCutValues(t, g);
    updateRanks(t, g);
  }
  function updateRanks(t, g) {
    var root2 = t.nodes().find((v) => !g.node(v).parent);
    var vs = preorder(t, root2);
    vs = vs.slice(1);
    vs.forEach((v) => {
      var parent = t.node(v).parent, edge2 = g.edge(v, parent), flipped = false;
      if (!edge2) {
        edge2 = g.edge(parent, v);
        flipped = true;
      }
      g.node(v).rank = g.node(parent).rank + (flipped ? edge2.minlen : -edge2.minlen);
    });
  }
  function isTreeEdge(tree, u, v) {
    return tree.hasEdge(u, v);
  }
  function isDescendant(tree, vLabel, rootLabel) {
    return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
  }
  return networkSimplex_1;
}
var rank_1;
var hasRequiredRank;
function requireRank() {
  if (hasRequiredRank) return rank_1;
  hasRequiredRank = 1;
  var rankUtil = requireUtil();
  var longestPath = rankUtil.longestPath;
  var feasibleTree = requireFeasibleTree();
  var networkSimplex = requireNetworkSimplex();
  rank_1 = rank;
  function rank(g) {
    switch (g.graph().ranker) {
      case "network-simplex":
        networkSimplexRanker(g);
        break;
      case "tight-tree":
        tightTreeRanker(g);
        break;
      case "longest-path":
        longestPathRanker(g);
        break;
      default:
        networkSimplexRanker(g);
    }
  }
  var longestPathRanker = longestPath;
  function tightTreeRanker(g) {
    longestPath(g);
    feasibleTree(g);
  }
  function networkSimplexRanker(g) {
    networkSimplex(g);
  }
  return rank_1;
}
var parentDummyChains_1;
var hasRequiredParentDummyChains;
function requireParentDummyChains() {
  if (hasRequiredParentDummyChains) return parentDummyChains_1;
  hasRequiredParentDummyChains = 1;
  parentDummyChains_1 = parentDummyChains;
  function parentDummyChains(g) {
    let postorderNums = postorder(g);
    g.graph().dummyChains.forEach((v) => {
      let node2 = g.node(v);
      let edgeObj = node2.edgeObj;
      let pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
      let path = pathData.path;
      let lca = pathData.lca;
      let pathIdx = 0;
      let pathV = path[pathIdx];
      let ascending2 = true;
      while (v !== edgeObj.w) {
        node2 = g.node(v);
        if (ascending2) {
          while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node2.rank) {
            pathIdx++;
          }
          if (pathV === lca) {
            ascending2 = false;
          }
        }
        if (!ascending2) {
          while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node2.rank) {
            pathIdx++;
          }
          pathV = path[pathIdx];
        }
        g.setParent(v, pathV);
        v = g.successors(v)[0];
      }
    });
  }
  function findPath(g, postorderNums, v, w) {
    let vPath = [];
    let wPath = [];
    let low = Math.min(postorderNums[v].low, postorderNums[w].low);
    let lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
    let parent;
    let lca;
    parent = v;
    do {
      parent = g.parent(parent);
      vPath.push(parent);
    } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
    lca = parent;
    parent = w;
    while ((parent = g.parent(parent)) !== lca) {
      wPath.push(parent);
    }
    return { path: vPath.concat(wPath.reverse()), lca };
  }
  function postorder(g) {
    let result = {};
    let lim = 0;
    function dfs(v) {
      let low = lim;
      g.children(v).forEach(dfs);
      result[v] = { low, lim: lim++ };
    }
    g.children().forEach(dfs);
    return result;
  }
  return parentDummyChains_1;
}
var nestingGraph;
var hasRequiredNestingGraph;
function requireNestingGraph() {
  if (hasRequiredNestingGraph) return nestingGraph;
  hasRequiredNestingGraph = 1;
  let util2 = requireUtil$1();
  nestingGraph = {
    run,
    cleanup
  };
  function run(g) {
    let root2 = util2.addDummyNode(g, "root", {}, "_root");
    let depths = treeDepths(g);
    let depthsArr = Object.values(depths);
    let height = util2.applyWithChunking(Math.max, depthsArr) - 1;
    let nodeSep = 2 * height + 1;
    g.graph().nestingRoot = root2;
    g.edges().forEach((e) => g.edge(e).minlen *= nodeSep);
    let weight = sumWeights(g) + 1;
    g.children().forEach((child) => dfs(g, root2, nodeSep, weight, height, depths, child));
    g.graph().nodeRankFactor = nodeSep;
  }
  function dfs(g, root2, nodeSep, weight, height, depths, v) {
    let children2 = g.children(v);
    if (!children2.length) {
      if (v !== root2) {
        g.setEdge(root2, v, { weight: 0, minlen: nodeSep });
      }
      return;
    }
    let top2 = util2.addBorderNode(g, "_bt");
    let bottom2 = util2.addBorderNode(g, "_bb");
    let label2 = g.node(v);
    g.setParent(top2, v);
    label2.borderTop = top2;
    g.setParent(bottom2, v);
    label2.borderBottom = bottom2;
    children2.forEach((child) => {
      dfs(g, root2, nodeSep, weight, height, depths, child);
      let childNode = g.node(child);
      let childTop = childNode.borderTop ? childNode.borderTop : child;
      let childBottom = childNode.borderBottom ? childNode.borderBottom : child;
      let thisWeight = childNode.borderTop ? weight : 2 * weight;
      let minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
      g.setEdge(top2, childTop, {
        weight: thisWeight,
        minlen,
        nestingEdge: true
      });
      g.setEdge(childBottom, bottom2, {
        weight: thisWeight,
        minlen,
        nestingEdge: true
      });
    });
    if (!g.parent(v)) {
      g.setEdge(root2, top2, { weight: 0, minlen: height + depths[v] });
    }
  }
  function treeDepths(g) {
    var depths = {};
    function dfs2(v, depth) {
      var children2 = g.children(v);
      if (children2 && children2.length) {
        children2.forEach((child) => dfs2(child, depth + 1));
      }
      depths[v] = depth;
    }
    g.children().forEach((v) => dfs2(v, 1));
    return depths;
  }
  function sumWeights(g) {
    return g.edges().reduce((acc, e) => acc + g.edge(e).weight, 0);
  }
  function cleanup(g) {
    var graphLabel = g.graph();
    g.removeNode(graphLabel.nestingRoot);
    delete graphLabel.nestingRoot;
    g.edges().forEach((e) => {
      var edge2 = g.edge(e);
      if (edge2.nestingEdge) {
        g.removeEdge(e);
      }
    });
  }
  return nestingGraph;
}
var addBorderSegments_1;
var hasRequiredAddBorderSegments;
function requireAddBorderSegments() {
  if (hasRequiredAddBorderSegments) return addBorderSegments_1;
  hasRequiredAddBorderSegments = 1;
  let util2 = requireUtil$1();
  addBorderSegments_1 = addBorderSegments;
  function addBorderSegments(g) {
    function dfs(v) {
      let children2 = g.children(v);
      let node2 = g.node(v);
      if (children2.length) {
        children2.forEach(dfs);
      }
      if (Object.hasOwn(node2, "minRank")) {
        node2.borderLeft = [];
        node2.borderRight = [];
        for (let rank = node2.minRank, maxRank = node2.maxRank + 1; rank < maxRank; ++rank) {
          addBorderNode(g, "borderLeft", "_bl", v, node2, rank);
          addBorderNode(g, "borderRight", "_br", v, node2, rank);
        }
      }
    }
    g.children().forEach(dfs);
  }
  function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
    let label2 = { width: 0, height: 0, rank, borderType: prop };
    let prev = sgNode[prop][rank - 1];
    let curr = util2.addDummyNode(g, "border", label2, prefix);
    sgNode[prop][rank] = curr;
    g.setParent(curr, sg);
    if (prev) {
      g.setEdge(prev, curr, { weight: 1 });
    }
  }
  return addBorderSegments_1;
}
var coordinateSystem;
var hasRequiredCoordinateSystem;
function requireCoordinateSystem() {
  if (hasRequiredCoordinateSystem) return coordinateSystem;
  hasRequiredCoordinateSystem = 1;
  coordinateSystem = {
    adjust,
    undo
  };
  function adjust(g) {
    let rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "lr" || rankDir === "rl") {
      swapWidthHeight(g);
    }
  }
  function undo(g) {
    let rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "bt" || rankDir === "rl") {
      reverseY(g);
    }
    if (rankDir === "lr" || rankDir === "rl") {
      swapXY(g);
      swapWidthHeight(g);
    }
  }
  function swapWidthHeight(g) {
    g.nodes().forEach((v) => swapWidthHeightOne(g.node(v)));
    g.edges().forEach((e) => swapWidthHeightOne(g.edge(e)));
  }
  function swapWidthHeightOne(attrs) {
    let w = attrs.width;
    attrs.width = attrs.height;
    attrs.height = w;
  }
  function reverseY(g) {
    g.nodes().forEach((v) => reverseYOne(g.node(v)));
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      edge2.points.forEach(reverseYOne);
      if (Object.hasOwn(edge2, "y")) {
        reverseYOne(edge2);
      }
    });
  }
  function reverseYOne(attrs) {
    attrs.y = -attrs.y;
  }
  function swapXY(g) {
    g.nodes().forEach((v) => swapXYOne(g.node(v)));
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      edge2.points.forEach(swapXYOne);
      if (Object.hasOwn(edge2, "x")) {
        swapXYOne(edge2);
      }
    });
  }
  function swapXYOne(attrs) {
    let x = attrs.x;
    attrs.x = attrs.y;
    attrs.y = x;
  }
  return coordinateSystem;
}
var initOrder_1;
var hasRequiredInitOrder;
function requireInitOrder() {
  if (hasRequiredInitOrder) return initOrder_1;
  hasRequiredInitOrder = 1;
  let util2 = requireUtil$1();
  initOrder_1 = initOrder;
  function initOrder(g) {
    let visited = {};
    let simpleNodes = g.nodes().filter((v) => !g.children(v).length);
    let simpleNodesRanks = simpleNodes.map((v) => g.node(v).rank);
    let maxRank = util2.applyWithChunking(Math.max, simpleNodesRanks);
    let layers = util2.range(maxRank + 1).map(() => []);
    function dfs(v) {
      if (visited[v]) return;
      visited[v] = true;
      let node2 = g.node(v);
      layers[node2.rank].push(v);
      g.successors(v).forEach(dfs);
    }
    let orderedVs = simpleNodes.sort((a, b) => g.node(a).rank - g.node(b).rank);
    orderedVs.forEach(dfs);
    return layers;
  }
  return initOrder_1;
}
var crossCount_1;
var hasRequiredCrossCount;
function requireCrossCount() {
  if (hasRequiredCrossCount) return crossCount_1;
  hasRequiredCrossCount = 1;
  let zipObject = requireUtil$1().zipObject;
  crossCount_1 = crossCount;
  function crossCount(g, layering) {
    let cc = 0;
    for (let i = 1; i < layering.length; ++i) {
      cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
    }
    return cc;
  }
  function twoLayerCrossCount(g, northLayer, southLayer) {
    let southPos = zipObject(southLayer, southLayer.map((v, i) => i));
    let southEntries = northLayer.flatMap((v) => {
      return g.outEdges(v).map((e) => {
        return { pos: southPos[e.w], weight: g.edge(e).weight };
      }).sort((a, b) => a.pos - b.pos);
    });
    let firstIndex = 1;
    while (firstIndex < southLayer.length) firstIndex <<= 1;
    let treeSize = 2 * firstIndex - 1;
    firstIndex -= 1;
    let tree = new Array(treeSize).fill(0);
    let cc = 0;
    southEntries.forEach((entry) => {
      let index = entry.pos + firstIndex;
      tree[index] += entry.weight;
      let weightSum = 0;
      while (index > 0) {
        if (index % 2) {
          weightSum += tree[index + 1];
        }
        index = index - 1 >> 1;
        tree[index] += entry.weight;
      }
      cc += entry.weight * weightSum;
    });
    return cc;
  }
  return crossCount_1;
}
var barycenter_1;
var hasRequiredBarycenter;
function requireBarycenter() {
  if (hasRequiredBarycenter) return barycenter_1;
  hasRequiredBarycenter = 1;
  barycenter_1 = barycenter;
  function barycenter(g, movable = []) {
    return movable.map((v) => {
      let inV = g.inEdges(v);
      if (!inV.length) {
        return { v };
      } else {
        let result = inV.reduce((acc, e) => {
          let edge2 = g.edge(e), nodeU = g.node(e.v);
          return {
            sum: acc.sum + edge2.weight * nodeU.order,
            weight: acc.weight + edge2.weight
          };
        }, { sum: 0, weight: 0 });
        return {
          v,
          barycenter: result.sum / result.weight,
          weight: result.weight
        };
      }
    });
  }
  return barycenter_1;
}
var resolveConflicts_1;
var hasRequiredResolveConflicts;
function requireResolveConflicts() {
  if (hasRequiredResolveConflicts) return resolveConflicts_1;
  hasRequiredResolveConflicts = 1;
  let util2 = requireUtil$1();
  resolveConflicts_1 = resolveConflicts;
  function resolveConflicts(entries, cg) {
    let mappedEntries = {};
    entries.forEach((entry, i) => {
      let tmp = mappedEntries[entry.v] = {
        indegree: 0,
        "in": [],
        out: [],
        vs: [entry.v],
        i
      };
      if (entry.barycenter !== void 0) {
        tmp.barycenter = entry.barycenter;
        tmp.weight = entry.weight;
      }
    });
    cg.edges().forEach((e) => {
      let entryV = mappedEntries[e.v];
      let entryW = mappedEntries[e.w];
      if (entryV !== void 0 && entryW !== void 0) {
        entryW.indegree++;
        entryV.out.push(mappedEntries[e.w]);
      }
    });
    let sourceSet = Object.values(mappedEntries).filter((entry) => !entry.indegree);
    return doResolveConflicts(sourceSet);
  }
  function doResolveConflicts(sourceSet) {
    let entries = [];
    function handleIn(vEntry) {
      return (uEntry) => {
        if (uEntry.merged) {
          return;
        }
        if (uEntry.barycenter === void 0 || vEntry.barycenter === void 0 || uEntry.barycenter >= vEntry.barycenter) {
          mergeEntries(vEntry, uEntry);
        }
      };
    }
    function handleOut(vEntry) {
      return (wEntry) => {
        wEntry["in"].push(vEntry);
        if (--wEntry.indegree === 0) {
          sourceSet.push(wEntry);
        }
      };
    }
    while (sourceSet.length) {
      let entry = sourceSet.pop();
      entries.push(entry);
      entry["in"].reverse().forEach(handleIn(entry));
      entry.out.forEach(handleOut(entry));
    }
    return entries.filter((entry) => !entry.merged).map((entry) => {
      return util2.pick(entry, ["vs", "i", "barycenter", "weight"]);
    });
  }
  function mergeEntries(target2, source) {
    let sum = 0;
    let weight = 0;
    if (target2.weight) {
      sum += target2.barycenter * target2.weight;
      weight += target2.weight;
    }
    if (source.weight) {
      sum += source.barycenter * source.weight;
      weight += source.weight;
    }
    target2.vs = source.vs.concat(target2.vs);
    target2.barycenter = sum / weight;
    target2.weight = weight;
    target2.i = Math.min(source.i, target2.i);
    source.merged = true;
  }
  return resolveConflicts_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  let util2 = requireUtil$1();
  sort_1 = sort;
  function sort(entries, biasRight) {
    let parts = util2.partition(entries, (entry) => {
      return Object.hasOwn(entry, "barycenter");
    });
    let sortable = parts.lhs, unsortable = parts.rhs.sort((a, b) => b.i - a.i), vs = [], sum = 0, weight = 0, vsIndex = 0;
    sortable.sort(compareWithBias(!!biasRight));
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    sortable.forEach((entry) => {
      vsIndex += entry.vs.length;
      vs.push(entry.vs);
      sum += entry.barycenter * entry.weight;
      weight += entry.weight;
      vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    });
    let result = { vs: vs.flat(true) };
    if (weight) {
      result.barycenter = sum / weight;
      result.weight = weight;
    }
    return result;
  }
  function consumeUnsortable(vs, unsortable, index) {
    let last;
    while (unsortable.length && (last = unsortable[unsortable.length - 1]).i <= index) {
      unsortable.pop();
      vs.push(last.vs);
      index++;
    }
    return index;
  }
  function compareWithBias(bias) {
    return (entryV, entryW) => {
      if (entryV.barycenter < entryW.barycenter) {
        return -1;
      } else if (entryV.barycenter > entryW.barycenter) {
        return 1;
      }
      return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
    };
  }
  return sort_1;
}
var sortSubgraph_1;
var hasRequiredSortSubgraph;
function requireSortSubgraph() {
  if (hasRequiredSortSubgraph) return sortSubgraph_1;
  hasRequiredSortSubgraph = 1;
  let barycenter = requireBarycenter();
  let resolveConflicts = requireResolveConflicts();
  let sort = requireSort();
  sortSubgraph_1 = sortSubgraph;
  function sortSubgraph(g, v, cg, biasRight) {
    let movable = g.children(v);
    let node2 = g.node(v);
    let bl = node2 ? node2.borderLeft : void 0;
    let br = node2 ? node2.borderRight : void 0;
    let subgraphs = {};
    if (bl) {
      movable = movable.filter((w) => w !== bl && w !== br);
    }
    let barycenters = barycenter(g, movable);
    barycenters.forEach((entry) => {
      if (g.children(entry.v).length) {
        let subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
        subgraphs[entry.v] = subgraphResult;
        if (Object.hasOwn(subgraphResult, "barycenter")) {
          mergeBarycenters(entry, subgraphResult);
        }
      }
    });
    let entries = resolveConflicts(barycenters, cg);
    expandSubgraphs(entries, subgraphs);
    let result = sort(entries, biasRight);
    if (bl) {
      result.vs = [bl, result.vs, br].flat(true);
      if (g.predecessors(bl).length) {
        let blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
        if (!Object.hasOwn(result, "barycenter")) {
          result.barycenter = 0;
          result.weight = 0;
        }
        result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
        result.weight += 2;
      }
    }
    return result;
  }
  function expandSubgraphs(entries, subgraphs) {
    entries.forEach((entry) => {
      entry.vs = entry.vs.flatMap((v) => {
        if (subgraphs[v]) {
          return subgraphs[v].vs;
        }
        return v;
      });
    });
  }
  function mergeBarycenters(target2, other) {
    if (target2.barycenter !== void 0) {
      target2.barycenter = (target2.barycenter * target2.weight + other.barycenter * other.weight) / (target2.weight + other.weight);
      target2.weight += other.weight;
    } else {
      target2.barycenter = other.barycenter;
      target2.weight = other.weight;
    }
  }
  return sortSubgraph_1;
}
var buildLayerGraph_1;
var hasRequiredBuildLayerGraph;
function requireBuildLayerGraph() {
  if (hasRequiredBuildLayerGraph) return buildLayerGraph_1;
  hasRequiredBuildLayerGraph = 1;
  let Graph = requireGraphlib().Graph;
  let util2 = requireUtil$1();
  buildLayerGraph_1 = buildLayerGraph;
  function buildLayerGraph(g, rank, relationship) {
    let root2 = createRootNode(g), result = new Graph({ compound: true }).setGraph({ root: root2 }).setDefaultNodeLabel((v) => g.node(v));
    g.nodes().forEach((v) => {
      let node2 = g.node(v), parent = g.parent(v);
      if (node2.rank === rank || node2.minRank <= rank && rank <= node2.maxRank) {
        result.setNode(v);
        result.setParent(v, parent || root2);
        g[relationship](v).forEach((e) => {
          let u = e.v === v ? e.w : e.v, edge2 = result.edge(u, v), weight = edge2 !== void 0 ? edge2.weight : 0;
          result.setEdge(u, v, { weight: g.edge(e).weight + weight });
        });
        if (Object.hasOwn(node2, "minRank")) {
          result.setNode(v, {
            borderLeft: node2.borderLeft[rank],
            borderRight: node2.borderRight[rank]
          });
        }
      }
    });
    return result;
  }
  function createRootNode(g) {
    var v;
    while (g.hasNode(v = util2.uniqueId("_root"))) ;
    return v;
  }
  return buildLayerGraph_1;
}
var addSubgraphConstraints_1;
var hasRequiredAddSubgraphConstraints;
function requireAddSubgraphConstraints() {
  if (hasRequiredAddSubgraphConstraints) return addSubgraphConstraints_1;
  hasRequiredAddSubgraphConstraints = 1;
  addSubgraphConstraints_1 = addSubgraphConstraints;
  function addSubgraphConstraints(g, cg, vs) {
    let prev = {}, rootPrev;
    vs.forEach((v) => {
      let child = g.parent(v), parent, prevChild;
      while (child) {
        parent = g.parent(child);
        if (parent) {
          prevChild = prev[parent];
          prev[parent] = child;
        } else {
          prevChild = rootPrev;
          rootPrev = child;
        }
        if (prevChild && prevChild !== child) {
          cg.setEdge(prevChild, child);
          return;
        }
        child = parent;
      }
    });
  }
  return addSubgraphConstraints_1;
}
var order_1;
var hasRequiredOrder;
function requireOrder() {
  if (hasRequiredOrder) return order_1;
  hasRequiredOrder = 1;
  let initOrder = requireInitOrder();
  let crossCount = requireCrossCount();
  let sortSubgraph = requireSortSubgraph();
  let buildLayerGraph = requireBuildLayerGraph();
  let addSubgraphConstraints = requireAddSubgraphConstraints();
  let Graph = requireGraphlib().Graph;
  let util2 = requireUtil$1();
  order_1 = order;
  function order(g, opts) {
    if (opts && typeof opts.customOrder === "function") {
      opts.customOrder(g, order);
      return;
    }
    let maxRank = util2.maxRank(g), downLayerGraphs = buildLayerGraphs(g, util2.range(1, maxRank + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g, util2.range(maxRank - 1, -1, -1), "outEdges");
    let layering = initOrder(g);
    assignOrder(g, layering);
    if (opts && opts.disableOptimalOrderHeuristic) {
      return;
    }
    let bestCC = Number.POSITIVE_INFINITY, best;
    for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
      sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
      layering = util2.buildLayerMatrix(g);
      let cc = crossCount(g, layering);
      if (cc < bestCC) {
        lastBest = 0;
        best = Object.assign({}, layering);
        bestCC = cc;
      }
    }
    assignOrder(g, best);
  }
  function buildLayerGraphs(g, ranks, relationship) {
    return ranks.map(function(rank) {
      return buildLayerGraph(g, rank, relationship);
    });
  }
  function sweepLayerGraphs(layerGraphs, biasRight) {
    let cg = new Graph();
    layerGraphs.forEach(function(lg) {
      let root2 = lg.graph().root;
      let sorted = sortSubgraph(lg, root2, cg, biasRight);
      sorted.vs.forEach((v, i) => lg.node(v).order = i);
      addSubgraphConstraints(lg, cg, sorted.vs);
    });
  }
  function assignOrder(g, layering) {
    Object.values(layering).forEach((layer) => layer.forEach((v, i) => g.node(v).order = i));
  }
  return order_1;
}
var bk;
var hasRequiredBk;
function requireBk() {
  if (hasRequiredBk) return bk;
  hasRequiredBk = 1;
  let Graph = requireGraphlib().Graph;
  let util2 = requireUtil$1();
  bk = {
    positionX,
    findType1Conflicts,
    findType2Conflicts,
    addConflict,
    hasConflict,
    verticalAlignment,
    horizontalCompaction,
    alignCoordinates,
    findSmallestWidthAlignment,
    balance
  };
  function findType1Conflicts(g, layering) {
    let conflicts = {};
    function visitLayer(prevLayer, layer) {
      let k0 = 0, scanPos = 0, prevLayerLength = prevLayer.length, lastNode = layer[layer.length - 1];
      layer.forEach((v, i) => {
        let w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
        if (w || v === lastNode) {
          layer.slice(scanPos, i + 1).forEach((scanNode) => {
            g.predecessors(scanNode).forEach((u) => {
              let uLabel = g.node(u), uPos = uLabel.order;
              if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
                addConflict(conflicts, u, scanNode);
              }
            });
          });
          scanPos = i + 1;
          k0 = k1;
        }
      });
      return layer;
    }
    layering.length && layering.reduce(visitLayer);
    return conflicts;
  }
  function findType2Conflicts(g, layering) {
    let conflicts = {};
    function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
      let v;
      util2.range(southPos, southEnd).forEach((i) => {
        v = south[i];
        if (g.node(v).dummy) {
          g.predecessors(v).forEach((u) => {
            let uNode = g.node(u);
            if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
              addConflict(conflicts, u, v);
            }
          });
        }
      });
    }
    function visitLayer(north, south) {
      let prevNorthPos = -1, nextNorthPos, southPos = 0;
      south.forEach((v, southLookahead) => {
        if (g.node(v).dummy === "border") {
          let predecessors = g.predecessors(v);
          if (predecessors.length) {
            nextNorthPos = g.node(predecessors[0]).order;
            scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
            southPos = southLookahead;
            prevNorthPos = nextNorthPos;
          }
        }
        scan(south, southPos, south.length, nextNorthPos, north.length);
      });
      return south;
    }
    layering.length && layering.reduce(visitLayer);
    return conflicts;
  }
  function findOtherInnerSegmentNode(g, v) {
    if (g.node(v).dummy) {
      return g.predecessors(v).find((u) => g.node(u).dummy);
    }
  }
  function addConflict(conflicts, v, w) {
    if (v > w) {
      let tmp = v;
      v = w;
      w = tmp;
    }
    let conflictsV = conflicts[v];
    if (!conflictsV) {
      conflicts[v] = conflictsV = {};
    }
    conflictsV[w] = true;
  }
  function hasConflict(conflicts, v, w) {
    if (v > w) {
      let tmp = v;
      v = w;
      w = tmp;
    }
    return !!conflicts[v] && Object.hasOwn(conflicts[v], w);
  }
  function verticalAlignment(g, layering, conflicts, neighborFn) {
    let root2 = {}, align = {}, pos = {};
    layering.forEach((layer) => {
      layer.forEach((v, order) => {
        root2[v] = v;
        align[v] = v;
        pos[v] = order;
      });
    });
    layering.forEach((layer) => {
      let prevIdx = -1;
      layer.forEach((v) => {
        let ws = neighborFn(v);
        if (ws.length) {
          ws = ws.sort((a, b) => pos[a] - pos[b]);
          let mp = (ws.length - 1) / 2;
          for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
            let w = ws[i];
            if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
              align[w] = v;
              align[v] = root2[v] = root2[w];
              prevIdx = pos[w];
            }
          }
        }
      });
    });
    return { root: root2, align };
  }
  function horizontalCompaction(g, layering, root2, align, reverseSep) {
    let xs = {}, blockG = buildBlockGraph(g, layering, root2, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
    function iterate(setXsFunc, nextNodesFunc) {
      let stack = blockG.nodes();
      let elem = stack.pop();
      let visited = {};
      while (elem) {
        if (visited[elem]) {
          setXsFunc(elem);
        } else {
          visited[elem] = true;
          stack.push(elem);
          stack = stack.concat(nextNodesFunc(elem));
        }
        elem = stack.pop();
      }
    }
    function pass1(elem) {
      xs[elem] = blockG.inEdges(elem).reduce((acc, e) => {
        return Math.max(acc, xs[e.v] + blockG.edge(e));
      }, 0);
    }
    function pass2(elem) {
      let min = blockG.outEdges(elem).reduce((acc, e) => {
        return Math.min(acc, xs[e.w] - blockG.edge(e));
      }, Number.POSITIVE_INFINITY);
      let node2 = g.node(elem);
      if (min !== Number.POSITIVE_INFINITY && node2.borderType !== borderType) {
        xs[elem] = Math.max(xs[elem], min);
      }
    }
    iterate(pass1, blockG.predecessors.bind(blockG));
    iterate(pass2, blockG.successors.bind(blockG));
    Object.keys(align).forEach((v) => xs[v] = xs[root2[v]]);
    return xs;
  }
  function buildBlockGraph(g, layering, root2, reverseSep) {
    let blockGraph = new Graph(), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
    layering.forEach((layer) => {
      let u;
      layer.forEach((v) => {
        let vRoot = root2[v];
        blockGraph.setNode(vRoot);
        if (u) {
          var uRoot = root2[u], prevMax = blockGraph.edge(uRoot, vRoot);
          blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
        }
        u = v;
      });
    });
    return blockGraph;
  }
  function findSmallestWidthAlignment(g, xss) {
    return Object.values(xss).reduce((currentMinAndXs, xs) => {
      let max = Number.NEGATIVE_INFINITY;
      let min = Number.POSITIVE_INFINITY;
      Object.entries(xs).forEach(([v, x]) => {
        let halfWidth = width(g, v) / 2;
        max = Math.max(x + halfWidth, max);
        min = Math.min(x - halfWidth, min);
      });
      const newMin = max - min;
      if (newMin < currentMinAndXs[0]) {
        currentMinAndXs = [newMin, xs];
      }
      return currentMinAndXs;
    }, [Number.POSITIVE_INFINITY, null])[1];
  }
  function alignCoordinates(xss, alignTo) {
    let alignToVals = Object.values(alignTo), alignToMin = util2.applyWithChunking(Math.min, alignToVals), alignToMax = util2.applyWithChunking(Math.max, alignToVals);
    ["u", "d"].forEach((vert) => {
      ["l", "r"].forEach((horiz) => {
        let alignment = vert + horiz, xs = xss[alignment];
        if (xs === alignTo) return;
        let xsVals = Object.values(xs);
        let delta = alignToMin - util2.applyWithChunking(Math.min, xsVals);
        if (horiz !== "l") {
          delta = alignToMax - util2.applyWithChunking(Math.max, xsVals);
        }
        if (delta) {
          xss[alignment] = util2.mapValues(xs, (x) => x + delta);
        }
      });
    });
  }
  function balance(xss, align) {
    return util2.mapValues(xss.ul, (num, v) => {
      if (align) {
        return xss[align.toLowerCase()][v];
      } else {
        let xs = Object.values(xss).map((xs2) => xs2[v]).sort((a, b) => a - b);
        return (xs[1] + xs[2]) / 2;
      }
    });
  }
  function positionX(g) {
    let layering = util2.buildLayerMatrix(g);
    let conflicts = Object.assign(
      findType1Conflicts(g, layering),
      findType2Conflicts(g, layering)
    );
    let xss = {};
    let adjustedLayering;
    ["u", "d"].forEach((vert) => {
      adjustedLayering = vert === "u" ? layering : Object.values(layering).reverse();
      ["l", "r"].forEach((horiz) => {
        if (horiz === "r") {
          adjustedLayering = adjustedLayering.map((inner) => {
            return Object.values(inner).reverse();
          });
        }
        let neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
        let align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
        let xs = horizontalCompaction(
          g,
          adjustedLayering,
          align.root,
          align.align,
          horiz === "r"
        );
        if (horiz === "r") {
          xs = util2.mapValues(xs, (x) => -x);
        }
        xss[vert + horiz] = xs;
      });
    });
    let smallestWidth = findSmallestWidthAlignment(g, xss);
    alignCoordinates(xss, smallestWidth);
    return balance(xss, g.graph().align);
  }
  function sep(nodeSep, edgeSep, reverseSep) {
    return (g, v, w) => {
      let vLabel = g.node(v);
      let wLabel = g.node(w);
      let sum = 0;
      let delta;
      sum += vLabel.width / 2;
      if (Object.hasOwn(vLabel, "labelpos")) {
        switch (vLabel.labelpos.toLowerCase()) {
          case "l":
            delta = -vLabel.width / 2;
            break;
          case "r":
            delta = vLabel.width / 2;
            break;
        }
      }
      if (delta) {
        sum += reverseSep ? delta : -delta;
      }
      delta = 0;
      sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
      sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
      sum += wLabel.width / 2;
      if (Object.hasOwn(wLabel, "labelpos")) {
        switch (wLabel.labelpos.toLowerCase()) {
          case "l":
            delta = wLabel.width / 2;
            break;
          case "r":
            delta = -wLabel.width / 2;
            break;
        }
      }
      if (delta) {
        sum += reverseSep ? delta : -delta;
      }
      delta = 0;
      return sum;
    };
  }
  function width(g, v) {
    return g.node(v).width;
  }
  return bk;
}
var position_1;
var hasRequiredPosition;
function requirePosition() {
  if (hasRequiredPosition) return position_1;
  hasRequiredPosition = 1;
  let util2 = requireUtil$1();
  let positionX = requireBk().positionX;
  position_1 = position2;
  function position2(g) {
    g = util2.asNonCompoundGraph(g);
    positionY(g);
    Object.entries(positionX(g)).forEach(([v, x]) => g.node(v).x = x);
  }
  function positionY(g) {
    let layering = util2.buildLayerMatrix(g);
    let rankSep = g.graph().ranksep;
    let prevY = 0;
    layering.forEach((layer) => {
      const maxHeight = layer.reduce((acc, v) => {
        const height = g.node(v).height;
        if (acc > height) {
          return acc;
        } else {
          return height;
        }
      }, 0);
      layer.forEach((v) => g.node(v).y = prevY + maxHeight / 2);
      prevY += maxHeight + rankSep;
    });
  }
  return position_1;
}
var layout_1;
var hasRequiredLayout;
function requireLayout() {
  if (hasRequiredLayout) return layout_1;
  hasRequiredLayout = 1;
  let acyclic2 = requireAcyclic();
  let normalize2 = requireNormalize();
  let rank = requireRank();
  let normalizeRanks = requireUtil$1().normalizeRanks;
  let parentDummyChains = requireParentDummyChains();
  let removeEmptyRanks = requireUtil$1().removeEmptyRanks;
  let nestingGraph2 = requireNestingGraph();
  let addBorderSegments = requireAddBorderSegments();
  let coordinateSystem2 = requireCoordinateSystem();
  let order = requireOrder();
  let position2 = requirePosition();
  let util2 = requireUtil$1();
  let Graph = requireGraphlib().Graph;
  layout_1 = layout;
  function layout(g, opts) {
    let time = opts && opts.debugTiming ? util2.time : util2.notime;
    time("layout", () => {
      let layoutGraph = time("  buildLayoutGraph", () => buildLayoutGraph(g));
      time("  runLayout", () => runLayout(layoutGraph, time, opts));
      time("  updateInputGraph", () => updateInputGraph(g, layoutGraph));
    });
  }
  function runLayout(g, time, opts) {
    time("    makeSpaceForEdgeLabels", () => makeSpaceForEdgeLabels(g));
    time("    removeSelfEdges", () => removeSelfEdges(g));
    time("    acyclic", () => acyclic2.run(g));
    time("    nestingGraph.run", () => nestingGraph2.run(g));
    time("    rank", () => rank(util2.asNonCompoundGraph(g)));
    time("    injectEdgeLabelProxies", () => injectEdgeLabelProxies(g));
    time("    removeEmptyRanks", () => removeEmptyRanks(g));
    time("    nestingGraph.cleanup", () => nestingGraph2.cleanup(g));
    time("    normalizeRanks", () => normalizeRanks(g));
    time("    assignRankMinMax", () => assignRankMinMax(g));
    time("    removeEdgeLabelProxies", () => removeEdgeLabelProxies(g));
    time("    normalize.run", () => normalize2.run(g));
    time("    parentDummyChains", () => parentDummyChains(g));
    time("    addBorderSegments", () => addBorderSegments(g));
    time("    order", () => order(g, opts));
    time("    insertSelfEdges", () => insertSelfEdges(g));
    time("    adjustCoordinateSystem", () => coordinateSystem2.adjust(g));
    time("    position", () => position2(g));
    time("    positionSelfEdges", () => positionSelfEdges(g));
    time("    removeBorderNodes", () => removeBorderNodes(g));
    time("    normalize.undo", () => normalize2.undo(g));
    time("    fixupEdgeLabelCoords", () => fixupEdgeLabelCoords(g));
    time("    undoCoordinateSystem", () => coordinateSystem2.undo(g));
    time("    translateGraph", () => translateGraph(g));
    time("    assignNodeIntersects", () => assignNodeIntersects(g));
    time("    reversePoints", () => reversePointsForReversedEdges(g));
    time("    acyclic.undo", () => acyclic2.undo(g));
  }
  function updateInputGraph(inputGraph, layoutGraph) {
    inputGraph.nodes().forEach((v) => {
      let inputLabel = inputGraph.node(v);
      let layoutLabel = layoutGraph.node(v);
      if (inputLabel) {
        inputLabel.x = layoutLabel.x;
        inputLabel.y = layoutLabel.y;
        inputLabel.rank = layoutLabel.rank;
        if (layoutGraph.children(v).length) {
          inputLabel.width = layoutLabel.width;
          inputLabel.height = layoutLabel.height;
        }
      }
    });
    inputGraph.edges().forEach((e) => {
      let inputLabel = inputGraph.edge(e);
      let layoutLabel = layoutGraph.edge(e);
      inputLabel.points = layoutLabel.points;
      if (Object.hasOwn(layoutLabel, "x")) {
        inputLabel.x = layoutLabel.x;
        inputLabel.y = layoutLabel.y;
      }
    });
    inputGraph.graph().width = layoutGraph.graph().width;
    inputGraph.graph().height = layoutGraph.graph().height;
  }
  let graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
  let graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
  let graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
  let nodeNumAttrs = ["width", "height"];
  let nodeDefaults = { width: 0, height: 0 };
  let edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
  let edgeDefaults = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  };
  let edgeAttrs = ["labelpos"];
  function buildLayoutGraph(inputGraph) {
    let g = new Graph({ multigraph: true, compound: true });
    let graph2 = canonicalize(inputGraph.graph());
    g.setGraph(Object.assign(
      {},
      graphDefaults,
      selectNumberAttrs(graph2, graphNumAttrs),
      util2.pick(graph2, graphAttrs)
    ));
    inputGraph.nodes().forEach((v) => {
      let node2 = canonicalize(inputGraph.node(v));
      const newNode = selectNumberAttrs(node2, nodeNumAttrs);
      Object.keys(nodeDefaults).forEach((k) => {
        if (newNode[k] === void 0) {
          newNode[k] = nodeDefaults[k];
        }
      });
      g.setNode(v, newNode);
      g.setParent(v, inputGraph.parent(v));
    });
    inputGraph.edges().forEach((e) => {
      let edge2 = canonicalize(inputGraph.edge(e));
      g.setEdge(e, Object.assign(
        {},
        edgeDefaults,
        selectNumberAttrs(edge2, edgeNumAttrs),
        util2.pick(edge2, edgeAttrs)
      ));
    });
    return g;
  }
  function makeSpaceForEdgeLabels(g) {
    let graph2 = g.graph();
    graph2.ranksep /= 2;
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      edge2.minlen *= 2;
      if (edge2.labelpos.toLowerCase() !== "c") {
        if (graph2.rankdir === "TB" || graph2.rankdir === "BT") {
          edge2.width += edge2.labeloffset;
        } else {
          edge2.height += edge2.labeloffset;
        }
      }
    });
  }
  function injectEdgeLabelProxies(g) {
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      if (edge2.width && edge2.height) {
        let v = g.node(e.v);
        let w = g.node(e.w);
        let label2 = { rank: (w.rank - v.rank) / 2 + v.rank, e };
        util2.addDummyNode(g, "edge-proxy", label2, "_ep");
      }
    });
  }
  function assignRankMinMax(g) {
    let maxRank = 0;
    g.nodes().forEach((v) => {
      let node2 = g.node(v);
      if (node2.borderTop) {
        node2.minRank = g.node(node2.borderTop).rank;
        node2.maxRank = g.node(node2.borderBottom).rank;
        maxRank = Math.max(maxRank, node2.maxRank);
      }
    });
    g.graph().maxRank = maxRank;
  }
  function removeEdgeLabelProxies(g) {
    g.nodes().forEach((v) => {
      let node2 = g.node(v);
      if (node2.dummy === "edge-proxy") {
        g.edge(node2.e).labelRank = node2.rank;
        g.removeNode(v);
      }
    });
  }
  function translateGraph(g) {
    let minX = Number.POSITIVE_INFINITY;
    let maxX = 0;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = 0;
    let graphLabel = g.graph();
    let marginX = graphLabel.marginx || 0;
    let marginY = graphLabel.marginy || 0;
    function getExtremes(attrs) {
      let x = attrs.x;
      let y = attrs.y;
      let w = attrs.width;
      let h2 = attrs.height;
      minX = Math.min(minX, x - w / 2);
      maxX = Math.max(maxX, x + w / 2);
      minY = Math.min(minY, y - h2 / 2);
      maxY = Math.max(maxY, y + h2 / 2);
    }
    g.nodes().forEach((v) => getExtremes(g.node(v)));
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      if (Object.hasOwn(edge2, "x")) {
        getExtremes(edge2);
      }
    });
    minX -= marginX;
    minY -= marginY;
    g.nodes().forEach((v) => {
      let node2 = g.node(v);
      node2.x -= minX;
      node2.y -= minY;
    });
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      edge2.points.forEach((p) => {
        p.x -= minX;
        p.y -= minY;
      });
      if (Object.hasOwn(edge2, "x")) {
        edge2.x -= minX;
      }
      if (Object.hasOwn(edge2, "y")) {
        edge2.y -= minY;
      }
    });
    graphLabel.width = maxX - minX + marginX;
    graphLabel.height = maxY - minY + marginY;
  }
  function assignNodeIntersects(g) {
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      let nodeV = g.node(e.v);
      let nodeW = g.node(e.w);
      let p1, p2;
      if (!edge2.points) {
        edge2.points = [];
        p1 = nodeW;
        p2 = nodeV;
      } else {
        p1 = edge2.points[0];
        p2 = edge2.points[edge2.points.length - 1];
      }
      edge2.points.unshift(util2.intersectRect(nodeV, p1));
      edge2.points.push(util2.intersectRect(nodeW, p2));
    });
  }
  function fixupEdgeLabelCoords(g) {
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      if (Object.hasOwn(edge2, "x")) {
        if (edge2.labelpos === "l" || edge2.labelpos === "r") {
          edge2.width -= edge2.labeloffset;
        }
        switch (edge2.labelpos) {
          case "l":
            edge2.x -= edge2.width / 2 + edge2.labeloffset;
            break;
          case "r":
            edge2.x += edge2.width / 2 + edge2.labeloffset;
            break;
        }
      }
    });
  }
  function reversePointsForReversedEdges(g) {
    g.edges().forEach((e) => {
      let edge2 = g.edge(e);
      if (edge2.reversed) {
        edge2.points.reverse();
      }
    });
  }
  function removeBorderNodes(g) {
    g.nodes().forEach((v) => {
      if (g.children(v).length) {
        let node2 = g.node(v);
        let t = g.node(node2.borderTop);
        let b = g.node(node2.borderBottom);
        let l = g.node(node2.borderLeft[node2.borderLeft.length - 1]);
        let r = g.node(node2.borderRight[node2.borderRight.length - 1]);
        node2.width = Math.abs(r.x - l.x);
        node2.height = Math.abs(b.y - t.y);
        node2.x = l.x + node2.width / 2;
        node2.y = t.y + node2.height / 2;
      }
    });
    g.nodes().forEach((v) => {
      if (g.node(v).dummy === "border") {
        g.removeNode(v);
      }
    });
  }
  function removeSelfEdges(g) {
    g.edges().forEach((e) => {
      if (e.v === e.w) {
        var node2 = g.node(e.v);
        if (!node2.selfEdges) {
          node2.selfEdges = [];
        }
        node2.selfEdges.push({ e, label: g.edge(e) });
        g.removeEdge(e);
      }
    });
  }
  function insertSelfEdges(g) {
    var layers = util2.buildLayerMatrix(g);
    layers.forEach((layer) => {
      var orderShift = 0;
      layer.forEach((v, i) => {
        var node2 = g.node(v);
        node2.order = i + orderShift;
        (node2.selfEdges || []).forEach((selfEdge) => {
          util2.addDummyNode(g, "selfedge", {
            width: selfEdge.label.width,
            height: selfEdge.label.height,
            rank: node2.rank,
            order: i + ++orderShift,
            e: selfEdge.e,
            label: selfEdge.label
          }, "_se");
        });
        delete node2.selfEdges;
      });
    });
  }
  function positionSelfEdges(g) {
    g.nodes().forEach((v) => {
      var node2 = g.node(v);
      if (node2.dummy === "selfedge") {
        var selfNode = g.node(node2.e.v);
        var x = selfNode.x + selfNode.width / 2;
        var y = selfNode.y;
        var dx = node2.x - x;
        var dy = selfNode.height / 2;
        g.setEdge(node2.e, node2.label);
        g.removeNode(v);
        node2.label.points = [
          { x: x + 2 * dx / 3, y: y - dy },
          { x: x + 5 * dx / 6, y: y - dy },
          { x: x + dx, y },
          { x: x + 5 * dx / 6, y: y + dy },
          { x: x + 2 * dx / 3, y: y + dy }
        ];
        node2.label.x = node2.x;
        node2.label.y = node2.y;
      }
    });
  }
  function selectNumberAttrs(obj, attrs) {
    return util2.mapValues(util2.pick(obj, attrs), Number);
  }
  function canonicalize(attrs) {
    var newAttrs = {};
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (typeof k === "string") {
          k = k.toLowerCase();
        }
        newAttrs[k] = v;
      });
    }
    return newAttrs;
  }
  return layout_1;
}
var debug;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug;
  hasRequiredDebug = 1;
  let util2 = requireUtil$1();
  let Graph = requireGraphlib().Graph;
  debug = {
    debugOrdering
  };
  function debugOrdering(g) {
    let layerMatrix = util2.buildLayerMatrix(g);
    let h2 = new Graph({ compound: true, multigraph: true }).setGraph({});
    g.nodes().forEach((v) => {
      h2.setNode(v, { label: v });
      h2.setParent(v, "layer" + g.node(v).rank);
    });
    g.edges().forEach((e) => h2.setEdge(e.v, e.w, {}, e.name));
    layerMatrix.forEach((layer, i) => {
      let layerV = "layer" + i;
      h2.setNode(layerV, { rank: "same" });
      layer.reduce((u, v) => {
        h2.setEdge(u, v, { style: "invis" });
        return v;
      });
    });
    return h2;
  }
  return debug;
}
var version;
var hasRequiredVersion;
function requireVersion() {
  if (hasRequiredVersion) return version;
  hasRequiredVersion = 1;
  version = "1.1.4";
  return version;
}
var dagre$1;
var hasRequiredDagre;
function requireDagre() {
  if (hasRequiredDagre) return dagre$1;
  hasRequiredDagre = 1;
  dagre$1 = {
    graphlib: requireGraphlib(),
    layout: requireLayout(),
    debug: requireDebug(),
    util: {
      time: requireUtil$1().time,
      notime: requireUtil$1().notime
    },
    version: requireVersion()
  };
  return dagre$1;
}
var dagreExports = requireDagre();
const dagre = /* @__PURE__ */ getDefaultExportFromCjs(dagreExports);
const NODE_X_SPACING = GRID_SIZE * 6;
const NODE_Y_SPACING = GRID_SIZE * 5;
const SUBGRAPH_SPACING = GRID_SIZE * 8;
const AI_X_SPACING = GRID_SIZE * 2;
const AI_Y_SPACING = GRID_SIZE * 6;
const STICKY_BOTTOM_PADDING = GRID_SIZE * 3;
function useCanvasLayout({ id: canvasId } = {}) {
  const {
    findNode,
    findEdge,
    getSelectedNodes,
    edges: allEdges,
    nodes: allNodes
  } = useVueFlow({ id: canvasId });
  function getTargetData(target2) {
    if (target2 === "selection") {
      return { nodes: getSelectedNodes.value, edges: allEdges.value };
    }
    return { nodes: allNodes.value, edges: allEdges.value };
  }
  function sortByPosition(posA, posB) {
    const yDiff = posA.y - posB.y;
    return yDiff === 0 ? posA.x - posB.x : yDiff;
  }
  function sortNodesByPosition(nodeA, nodeB) {
    const hasEdgesA = allEdges.value.some((edge2) => edge2.target === nodeA.id);
    const hasEdgesB = allEdges.value.some((edge2) => edge2.target === nodeB.id);
    if (!hasEdgesA && hasEdgesB) return -1;
    if (hasEdgesA && !hasEdgesB) return 1;
    return sortByPosition(nodeA.position, nodeB.position);
  }
  function sortEdgesByPosition(edgeA, edgeB) {
    return sortByPosition(positionFromEdge(edgeA), positionFromEdge(edgeB));
  }
  function positionFromEdge(edge2) {
    return { x: edge2.targetX, y: edge2.targetY };
  }
  function createDagreGraph({ nodes, edges }) {
    const graph2 = new dagre.graphlib.Graph();
    graph2.setDefaultEdgeLabel(() => ({}));
    const graphNodes = nodes.map((node2) => findNode(node2.id)).filter(isPresent).sort(sortNodesByPosition);
    const nodeIdSet = new Set(nodes.map((node2) => node2.id));
    graphNodes.forEach(({ id: nodeId, position: { x, y }, dimensions: { width, height } }) => {
      graph2.setNode(nodeId, { width, height, x, y });
    });
    edges.map((node2) => findEdge(node2.id)).filter(isPresent).filter((edge2) => nodeIdSet.has(edge2.source) && nodeIdSet.has(edge2.target)).sort(sortEdgesByPosition).forEach((edge2) => graph2.setEdge(edge2.source, edge2.target));
    return graph2;
  }
  function createDagreSubGraph({
    nodeIds,
    parent
  }) {
    const subGraph = new dagre.graphlib.Graph();
    subGraph.setGraph({
      rankdir: "LR",
      edgesep: NODE_Y_SPACING,
      nodesep: NODE_Y_SPACING,
      ranksep: NODE_X_SPACING
    });
    subGraph.setDefaultEdgeLabel(() => ({}));
    const nodeIdSet = new Set(nodeIds);
    parent.nodes().filter((nodeId) => nodeIdSet.has(nodeId)).forEach((nodeId) => {
      subGraph.setNode(nodeId, parent.node(nodeId));
    });
    parent.edges().filter((edge2) => nodeIdSet.has(edge2.v) && nodeIdSet.has(edge2.w)).forEach((edge2) => subGraph.setEdge(edge2.v, edge2.w, parent.edge(edge2)));
    return subGraph;
  }
  function createDagreVerticalGraph({ nodes }) {
    const subGraph = new dagre.graphlib.Graph();
    subGraph.setGraph({
      rankdir: "TB",
      align: "UL",
      edgesep: SUBGRAPH_SPACING,
      nodesep: SUBGRAPH_SPACING,
      ranksep: SUBGRAPH_SPACING
    });
    subGraph.setDefaultEdgeLabel(() => ({}));
    nodes.forEach(
      ({ id: id2, box: { x, y, width, height } }) => subGraph.setNode(id2, { x, y, width, height })
    );
    nodes.forEach((node2, index) => {
      if (!nodes[index + 1]) return;
      subGraph.setEdge(node2.id, nodes[index + 1].id);
    });
    return subGraph;
  }
  function createAiSubGraph({
    parent,
    nodeIds
  }) {
    const subGraph = new dagre.graphlib.Graph();
    subGraph.setGraph({
      rankdir: "TB",
      edgesep: AI_X_SPACING,
      nodesep: AI_X_SPACING,
      ranksep: AI_Y_SPACING
    });
    subGraph.setDefaultEdgeLabel(() => ({}));
    const nodeIdSet = new Set(nodeIds);
    parent.nodes().filter((nodeId) => nodeIdSet.has(nodeId)).forEach((nodeId) => {
      subGraph.setNode(nodeId, parent.node(nodeId));
    });
    parent.edges().filter((edge2) => nodeIdSet.has(edge2.v) && nodeIdSet.has(edge2.w)).forEach((edge2) => subGraph.setEdge(edge2.w, edge2.v));
    return subGraph;
  }
  function compositeBoundingBox(boxes) {
    const { minX, minY, maxX, maxY } = boxes.reduce(
      (bbox, node2) => {
        const { x, y, width, height } = node2;
        return {
          minX: Math.min(bbox.minX, x),
          maxX: Math.max(bbox.maxX, x + width),
          minY: Math.min(bbox.minY, y),
          maxY: Math.max(bbox.maxY, y + height)
        };
      },
      { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
    );
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  function boundingBoxFromCanvasNode(node2) {
    return {
      x: node2.position.x,
      y: node2.position.y,
      width: node2.dimensions.width,
      height: node2.dimensions.height
    };
  }
  function boundingBoxFromDagreNode(node2) {
    return {
      x: node2.x - node2.width / 2,
      y: node2.y - node2.height / 2,
      width: node2.width,
      height: node2.height
    };
  }
  function boundingBoxFromGraph(graph2) {
    return compositeBoundingBox(
      graph2.nodes().map((nodeId) => boundingBoxFromDagreNode(graph2.node(nodeId)))
    );
  }
  function boundingBoxFromCanvasNodes(nodes) {
    return compositeBoundingBox(nodes.map(boundingBoxFromCanvasNode));
  }
  function isCoveredBy(parent, child) {
    const childRight = child.x + child.width;
    const childBottom = child.y + child.height;
    const parentRight = parent.x + parent.width;
    const parentBottom = parent.y + parent.height;
    return child.x >= parent.x && child.y >= parent.y && childRight <= parentRight && childBottom <= parentBottom;
  }
  function centerHorizontally(container2, target2) {
    const containerCenter = container2.x + container2.width / 2;
    const newX = containerCenter - target2.width / 2;
    return newX;
  }
  function intersects(container2, target2, padding = 0) {
    const targetWithPadding = {
      x: target2.x - padding,
      y: target2.y - padding,
      width: target2.width + padding * 2,
      height: target2.height + padding * 2
    };
    const noIntersection = targetWithPadding.x + targetWithPadding.width < container2.x || targetWithPadding.x > container2.x + container2.width || targetWithPadding.y + targetWithPadding.height < container2.y || targetWithPadding.y > container2.y + container2.height;
    return !noIntersection;
  }
  function isAiParentNode(node2) {
    return node2.render.type === CanvasNodeRenderType.Default && node2.render.options.configurable && !node2.render.options.configuration;
  }
  function isAiConfigNode(node2) {
    return node2.render.type === CanvasNodeRenderType.Default && node2.render.options.configuration;
  }
  function getAllConnectedAiConfigNodes({
    graph: graph2,
    root: root2,
    nodeById
  }) {
    return graph2.predecessors(root2.id).map((successor) => nodeById[successor]).filter((node2) => isAiConfigNode(node2.data)).flatMap((node2) => [
      node2.id,
      ...getAllConnectedAiConfigNodes({ graph: graph2, root: node2.data, nodeById })
    ]);
  }
  function layout(target2) {
    const { nodes, edges } = getTargetData(target2);
    const nonStickyNodes = nodes.filter((node2) => node2.data.type !== STICKY_NODE_TYPE).map((node2) => findNode(node2.id)).filter(isPresent);
    const boundingBoxBefore = boundingBoxFromCanvasNodes(nonStickyNodes);
    const parentGraph = createDagreGraph({ nodes: nonStickyNodes, edges });
    const nodeById = nonStickyNodes.reduce((acc, node2) => {
      acc[node2.id] = node2;
      return acc;
    }, {});
    const subgraphs = dagre.graphlib.alg.components(parentGraph).map((nodeIds) => {
      const subgraph = createDagreSubGraph({ nodeIds, parent: parentGraph });
      const aiParentNodes = subgraph.nodes().map((nodeId) => nodeById[nodeId].data).filter(isAiParentNode);
      const aiGraphs = aiParentNodes.map((aiParentNode) => {
        const configNodeIds = getAllConnectedAiConfigNodes({
          graph: subgraph,
          nodeById,
          root: aiParentNode
        });
        const allAiNodeIds = configNodeIds.concat(aiParentNode.id);
        const aiGraph = createAiSubGraph({
          parent: subgraph,
          nodeIds: allAiNodeIds
        });
        configNodeIds.forEach((nodeId) => subgraph.removeNode(nodeId));
        const rootEdges = subgraph.edges().filter((edge2) => edge2.v === aiParentNode.id || edge2.w === aiParentNode.id);
        dagre.layout(aiGraph, { disableOptimalOrderHeuristic: true });
        const aiBoundingBox = boundingBoxFromGraph(aiGraph);
        subgraph.setNode(aiParentNode.id, {
          width: aiBoundingBox.width,
          height: aiBoundingBox.height
        });
        rootEdges.forEach((edge2) => subgraph.setEdge(edge2));
        return { graph: aiGraph, boundingBox: aiBoundingBox, aiParentNode };
      });
      dagre.layout(subgraph, { disableOptimalOrderHeuristic: true });
      return { graph: subgraph, aiGraphs, boundingBox: boundingBoxFromGraph(subgraph) };
    });
    const compositeGraph = createDagreVerticalGraph({
      nodes: subgraphs.map(({ boundingBox }, index) => ({
        box: boundingBox,
        id: index.toString()
      }))
    });
    dagre.layout(compositeGraph, { disableOptimalOrderHeuristic: true });
    const boundingBoxByNodeId = subgraphs.flatMap(({ graph: graph2, aiGraphs }, index) => {
      const subgraphPosition = compositeGraph.node(index.toString());
      const aiParentNodes = new Set(aiGraphs.map(({ aiParentNode }) => aiParentNode.id));
      const offset = {
        x: 0,
        y: subgraphPosition.y - subgraphPosition.height / 2
      };
      return graph2.nodes().flatMap((nodeId) => {
        const { x, y, width, height } = graph2.node(nodeId);
        const positionedNode = {
          id: nodeId,
          boundingBox: {
            x: x + offset.x - width / 2,
            y: y + offset.y - height / 2,
            width,
            height
          }
        };
        if (aiParentNodes.has(nodeId)) {
          const aiGraph = aiGraphs.find(({ aiParentNode }) => aiParentNode.id === nodeId);
          if (!aiGraph) return [];
          const aiParentNodeBox = positionedNode.boundingBox;
          const parentOffset = {
            x: aiParentNodeBox.x,
            y: aiParentNodeBox.y
          };
          return aiGraph.graph.nodes().map((aiNodeId) => {
            const aiNode = aiGraph.graph.node(aiNodeId);
            const aiBoundingBox = {
              x: aiNode.x + parentOffset.x - aiNode.width / 2,
              y: aiNode.y + parentOffset.y - aiNode.height / 2,
              width: aiNode.width,
              height: aiNode.height
            };
            return {
              id: aiNodeId,
              boundingBox: aiBoundingBox
            };
          });
        }
        return positionedNode;
      });
    }).reduce(
      (acc, node2) => {
        acc[node2.id] = node2.boundingBox;
        return acc;
      },
      {}
    );
    subgraphs.flatMap(({ aiGraphs }) => aiGraphs).forEach(({ graph: graph2 }) => {
      const aiNodes = graph2.nodes();
      const aiGraphBoundingBox = compositeBoundingBox(
        aiNodes.map((nodeId) => boundingBoxByNodeId[nodeId]).filter(isPresent)
      );
      const aiNodeVerticalCorrection = aiGraphBoundingBox.height / 2 - NODE_SIZE / 2;
      aiGraphBoundingBox.y += aiNodeVerticalCorrection;
      const hasConflictingNodes = Object.entries(boundingBoxByNodeId).filter(([id2]) => !graph2.hasNode(id2)).some(
        ([, nodeBoundingBox]) => intersects(aiGraphBoundingBox, nodeBoundingBox, NODE_Y_SPACING)
      );
      if (!hasConflictingNodes) {
        for (const aiNode of aiNodes) {
          boundingBoxByNodeId[aiNode].y += aiNodeVerticalCorrection;
        }
      }
    });
    const positionedNodes = Object.entries(boundingBoxByNodeId).map(([id2, boundingBox]) => ({
      id: id2,
      boundingBox
    }));
    const boundingBoxAfter = compositeBoundingBox(positionedNodes.map((node2) => node2.boundingBox));
    const anchor = {
      x: boundingBoxAfter.x - boundingBoxBefore.x,
      y: boundingBoxAfter.y - boundingBoxBefore.y
    };
    const stickies = nodes.filter((node2) => node2.data.type === STICKY_NODE_TYPE).map((node2) => findNode(node2.id)).filter(isPresent);
    const positionedStickies = stickies.map((sticky2) => {
      const stickyBox = boundingBoxFromCanvasNode(sticky2);
      const coveredNodes = nonStickyNodes.filter(
        (node2) => isCoveredBy(boundingBoxFromCanvasNode(sticky2), boundingBoxFromCanvasNode(node2))
      );
      if (coveredNodes.length === 0) return null;
      const coveredNodesBoxAfter = compositeBoundingBox(
        positionedNodes.filter((node2) => coveredNodes.some((covered) => covered.id === node2.id)).map(({ boundingBox }) => boundingBox)
      );
      return {
        id: sticky2.id,
        boundingBox: {
          x: centerHorizontally(coveredNodesBoxAfter, stickyBox),
          y: coveredNodesBoxAfter.y + coveredNodesBoxAfter.height - stickyBox.height + STICKY_BOTTOM_PADDING,
          height: stickyBox.height,
          width: stickyBox.width
        }
      };
    }).filter(isPresent);
    return {
      boundingBox: boundingBoxAfter,
      nodes: positionedNodes.concat(positionedStickies).map(({ id: id2, boundingBox }) => {
        return {
          id: id2,
          x: boundingBox.x - anchor.x,
          y: boundingBox.y - anchor.y
        };
      })
    };
  }
  return { layout };
}
function useCanvasNodeHover(nodesRef, store, getHitBox) {
  const id2 = ref();
  const recalculate = useThrottleFn(
    (event) => {
      const bounds = store.viewportRef.value?.getBoundingClientRect();
      if (!bounds) {
        return;
      }
      const eventCoord = store.project({
        x: event.clientX - bounds.x,
        y: event.clientY - bounds.y
      });
      const nearbyNodes = nodesRef.value.flatMap((node2) => {
        if (node2.data?.disabled) {
          return [];
        }
        const vueFlowNode = store.nodeLookup.value.get(node2.id);
        if (!vueFlowNode) {
          return [];
        }
        const nodeRect = getRectOfNodes([vueFlowNode]);
        const hitBox = getHitBox(nodeRect);
        if (hitBox.x > eventCoord.x || eventCoord.x > hitBox.x + hitBox.width || hitBox.y > eventCoord.y || eventCoord.y > hitBox.y + hitBox.height) {
          return [];
        }
        const dx = nodeRect.x + nodeRect.width / 2 - eventCoord.x;
        const dy = nodeRect.y + nodeRect.height / 2 - eventCoord.y;
        return [
          {
            id: node2.id,
            squareDistance: dx ** 2 + dy ** 2
          }
        ];
      }).toSorted((nodeA, nodeB) => nodeA.squareDistance - nodeB.squareDistance);
      id2.value = nearbyNodes[0]?.id;
    },
    200,
    true,
    true
  );
  onMounted(() => {
    store.vueFlowRef.value?.addEventListener("mousemove", recalculate);
  });
  onUnmounted(() => {
    store.vueFlowRef.value?.removeEventListener("mousemove", recalculate);
  });
  return { id: id2 };
}
function useCanvasTraversal({ getIncomers: getIncomers2, getOutgoers: getOutgoers2 }) {
  function sortNodesByVerticalPosition(nodes) {
    return nodes.sort((a, b) => a.position.y - b.position.y);
  }
  function getIncomingNodes(id2) {
    return sortNodesByVerticalPosition(getIncomers2(id2));
  }
  function getOutgoingNodes(id2) {
    return sortNodesByVerticalPosition(getOutgoers2(id2));
  }
  function getSiblingNodes(id2) {
    const incomingSiblings = getIncomers2(id2).flatMap(
      (incomingNode) => getOutgoers2(incomingNode.id)
    );
    const outgoingSiblings = getOutgoers2(id2).flatMap(
      (outgoingNode) => getIncomers2(outgoingNode.id)
    );
    return sortNodesByVerticalPosition(
      [...incomingSiblings, ...outgoingSiblings].filter(
        (node2, index, nodes) => nodes.findIndex((n) => n.id === node2.id) === index
      )
    );
  }
  function getDownstreamNodes(id2, visited = []) {
    if (visited.includes(id2)) {
      return [];
    }
    visited.push(id2);
    const downstreamNodes = getOutgoers2(id2);
    return [
      ...downstreamNodes,
      ...downstreamNodes.flatMap((node2) => getDownstreamNodes(node2.id, visited))
    ].filter((node2, index, nodes) => nodes.findIndex((n) => n.id === node2.id) === index);
  }
  function getUpstreamNodes(id2, visited = []) {
    if (visited.includes(id2)) {
      return [];
    }
    visited.push(id2);
    const upstreamNodes = getIncomers2(id2);
    return [
      ...upstreamNodes,
      ...upstreamNodes.flatMap((node2) => getUpstreamNodes(node2.id, visited))
    ].filter((node2, index, nodes) => nodes.findIndex((n) => n.id === node2.id) === index);
  }
  return {
    sortNodesByVerticalPosition,
    getIncomingNodes,
    getOutgoingNodes,
    getSiblingNodes,
    getDownstreamNodes,
    getUpstreamNodes
  };
}
const useKeybindings = (keymap, options) => {
  const activeElement = useActiveElement();
  const { isCtrlKeyPressed } = useDeviceSupport();
  const isDisabled = computed(() => unref(options?.disabled));
  const ignoreKeyPresses = computed(() => {
    if (!activeElement.value) return false;
    const active = activeElement.value;
    const isInput = ["INPUT", "TEXTAREA"].includes(active.tagName);
    const isContentEditable = active.closest("[contenteditable]") !== null;
    const isIgnoreClass = active.closest(".ignore-key-press-canvas") !== null;
    return isInput || isContentEditable || isIgnoreClass;
  });
  const normalizedKeymap = computed(
    () => Object.fromEntries(
      Object.entries(keymap.value).flatMap(([shortcut, handler]) => {
        const shortcuts = shortcut.split("|");
        return shortcuts.map((s) => [normalizeShortcutString(s), handler]);
      })
    )
  );
  function shortcutPartsToString(parts) {
    return parts.map((key) => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
  }
  function normalizeShortcutString(shortcut) {
    if (shortcut.length === 1) {
      return shortcut.toLowerCase();
    }
    const splitChars = ["+", "_", "-"];
    const splitCharsRegEx = splitChars.reduce((acc, char) => {
      if (shortcut.startsWith(char) || shortcut.endsWith(char)) {
        return acc;
      }
      return char + acc;
    }, "");
    return shortcutPartsToString(shortcut.split(new RegExp(`[${splitCharsRegEx}]`)));
  }
  function keyboardEventCodeToKey(code) {
    if (code.startsWith("Digit")) {
      return code.replace("Digit", "").toLowerCase();
    } else if (code.startsWith("Key")) {
      return code.replace("Key", "").toLowerCase();
    }
    return code.toLowerCase();
  }
  function toShortcutString(event) {
    const { shiftKey, altKey } = event;
    const ctrlKey = isCtrlKeyPressed(event);
    const keys = "key" in event ? [event.key] : [];
    const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
    const modifiers = [];
    if (shiftKey) {
      modifiers.push("shift");
    }
    if (ctrlKey) {
      modifiers.push("ctrl");
    }
    if (altKey) {
      modifiers.push("alt");
    }
    return {
      byKey: shortcutPartsToString([...modifiers, ...keys]),
      byCode: shortcutPartsToString([...modifiers, ...codes])
    };
  }
  function onKeyDown2(event) {
    if (ignoreKeyPresses.value || isDisabled.value) return;
    const { byKey, byCode } = toShortcutString(event);
    const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
    if (handler) {
      event.preventDefault();
      event.stopPropagation();
      handler(event);
    }
  }
  useEventListener$1(document, "keydown", onKeyDown2);
};
function useShortKeyPress(key, fn, {
  dedupe = true,
  threshold = 300,
  disabled: disabled2 = false
}) {
  const keyDownTime = ref(null);
  onKeyDown(
    key,
    () => {
      if (unref(disabled2)) return;
      keyDownTime.value = Date.now();
    },
    {
      dedupe
    }
  );
  onKeyUp(key, () => {
    if (unref(disabled2) || !keyDownTime.value) return;
    const isShortPress = Date.now() - keyDownTime.value < threshold;
    if (isShortPress) {
      fn();
    }
  });
}
var noop$1 = { value: () => {
} };
function dispatch$1() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch$1(_);
}
function Dispatch$1(_) {
  this._ = _;
}
function parseTypenames$1$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch$1.prototype = dispatch$1.prototype = {
  constructor: Dispatch$1,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch$1(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var xhtml$1 = "http://www.w3.org/1999/xhtml";
const namespaces$1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml$1,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace$1(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces$1.hasOwnProperty(prefix) ? { space: namespaces$1[prefix], local: name } : name;
}
function creatorInherit$1(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml$1 && document2.documentElement.namespaceURI === xhtml$1 ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed$1(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator$1(name) {
  var fullname = namespace$1(name);
  return (fullname.local ? creatorFixed$1 : creatorInherit$1)(fullname);
}
function none$1() {
}
function selector$1(selector2) {
  return selector2 == null ? none$1 : function() {
    return this.querySelector(selector2);
  };
}
function selection_select$1(select2) {
  if (typeof select2 !== "function") select2 = selector$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select2.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2) subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array$1(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty$1() {
  return [];
}
function selectorAll$1(selector2) {
  return selector2 == null ? empty$1 : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll$1(select2) {
  return function() {
    return array$1(select2.apply(this, arguments));
  };
}
function selection_selectAll$1(select2) {
  if (typeof select2 === "function") select2 = arrayAll$1(select2);
  else select2 = selectorAll$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        subgroups.push(select2.call(node2, node2.__data__, i, group));
        parents.push(node2);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher$1(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher$1(selector2) {
  return function(node2) {
    return node2.matches(selector2);
  };
}
var find$1 = Array.prototype.find;
function childFind$1(match) {
  return function() {
    return find$1.call(this.children, match);
  };
}
function childFirst$1() {
  return this.firstElementChild;
}
function selection_selectChild$1(match) {
  return this.select(match == null ? childFirst$1 : childFind$1(typeof match === "function" ? match : childMatcher$1(match)));
}
var filter$1 = Array.prototype.filter;
function children$1() {
  return Array.from(this.children);
}
function childrenFilter$1(match) {
  return function() {
    return filter$1.call(this.children, match);
  };
}
function selection_selectChildren$1(match) {
  return this.selectAll(match == null ? children$1 : childrenFilter$1(typeof match === "function" ? match : childMatcher$1(match)));
}
function selection_filter$1(match) {
  if (typeof match !== "function") match = matcher$1(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse$1(update) {
  return new Array(update.length);
}
function selection_enter$1() {
  return new Selection$1(this._enter || this._groups.map(sparse$1), this._parents);
}
function EnterNode$1(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode$1.prototype = {
  constructor: EnterNode$1,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$2(x) {
  return function() {
    return x;
  };
}
function bindIndex$1(parent, group, enter, update, exit, data) {
  var i = 0, node2, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node2 = group[i]) {
      node2.__data__ = data[i];
      update[i] = node2;
    } else {
      enter[i] = new EnterNode$1(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node2 = group[i]) {
      exit[i] = node2;
    }
  }
}
function bindKey$1(parent, group, enter, update, exit, data, key) {
  var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node2 = group[i]) {
      keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node2;
      } else {
        nodeByKeyValue.set(keyValue, node2);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node2 = nodeByKeyValue.get(keyValue)) {
      update[i] = node2;
      node2.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode$1(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node2 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
      exit[i] = node2;
    }
  }
}
function datum$1(node2) {
  return node2.__data__;
}
function selection_data$1(value, key) {
  if (!arguments.length) return Array.from(this, datum$1);
  var bind = key ? bindKey$1 : bindIndex$1, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant$2(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike$1(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike$1(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit$1() {
  return new Selection$1(this._exit || this._groups.map(sparse$1), this._parents);
}
function selection_join$1(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge$1(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order$1() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node2; --i >= 0; ) {
      if (node2 = group[i]) {
        if (next && node2.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node2, next);
        next = node2;
      }
    }
  }
  return this;
}
function selection_sort$1(compare) {
  if (!compare) compare = ascending$1;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        sortgroup[i] = node2;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call$1() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes$1() {
  return Array.from(this);
}
function selection_node$1() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node2 = group[i];
      if (node2) return node2;
    }
  }
  return null;
}
function selection_size$1() {
  let size = 0;
  for (const node2 of this) ++size;
  return size;
}
function selection_empty$1() {
  return !this.node();
}
function selection_each$1(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i]) callback.call(node2, node2.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr$1(name, value) {
  var fullname = namespace$1(name);
  if (arguments.length < 2) {
    var node2 = this.node();
    return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView$1(node2) {
  return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function selection_style$1(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue$1(this.node(), name);
}
function styleValue$1(node2, name) {
  return node2.style.getPropertyValue(name) || defaultView$1(node2).getComputedStyle(node2, null).getPropertyValue(name);
}
function propertyRemove$1(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant$1(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function selection_property$1(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove$1 : typeof value === "function" ? propertyFunction$1 : propertyConstant$1)(name, value)) : this.node()[name];
}
function classArray$1(string) {
  return string.trim().split(/^|\s+/);
}
function classList$1(node2) {
  return node2.classList || new ClassList$1(node2);
}
function ClassList$1(node2) {
  this._node = node2;
  this._names = classArray$1(node2.getAttribute("class") || "");
}
ClassList$1.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd$1(node2, names) {
  var list2 = classList$1(node2), i = -1, n = names.length;
  while (++i < n) list2.add(names[i]);
}
function classedRemove$1(node2, names) {
  var list2 = classList$1(node2), i = -1, n = names.length;
  while (++i < n) list2.remove(names[i]);
}
function classedTrue$1(names) {
  return function() {
    classedAdd$1(this, names);
  };
}
function classedFalse$1(names) {
  return function() {
    classedRemove$1(this, names);
  };
}
function classedFunction$1(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd$1 : classedRemove$1)(this, names);
  };
}
function selection_classed$1(name, value) {
  var names = classArray$1(name + "");
  if (arguments.length < 2) {
    var list2 = classList$1(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list2.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction$1 : value ? classedTrue$1 : classedFalse$1)(names, value));
}
function textRemove$1() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text$1(value) {
  return arguments.length ? this.each(value == null ? textRemove$1 : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove$1() {
  this.innerHTML = "";
}
function htmlConstant$1(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html$1(value) {
  return arguments.length ? this.each(value == null ? htmlRemove$1 : (typeof value === "function" ? htmlFunction$1 : htmlConstant$1)(value)) : this.node().innerHTML;
}
function raise$1() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function selection_raise$1() {
  return this.each(raise$1);
}
function lower$1() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower$1() {
  return this.each(lower$1);
}
function selection_append$1(name) {
  var create2 = typeof name === "function" ? name : creator$1(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull$1() {
  return null;
}
function selection_insert$1(name, before) {
  var create2 = typeof name === "function" ? name : creator$1(name), select2 = before == null ? constantNull$1 : typeof before === "function" ? before : selector$1(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove$1() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function selection_remove$1() {
  return this.each(remove$1);
}
function selection_cloneShallow$1() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep$1() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone$1(deep) {
  return this.select(deep ? selection_cloneDeep$1 : selection_cloneShallow$1);
}
function selection_datum$1(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener$1(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames$2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove$1(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd$1(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener$1(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function selection_on$1(typename, value, options) {
  var typenames = parseTypenames$2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd$1 : onRemove$1;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent$1(node2, type, params) {
  var window2 = defaultView$1(node2), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node2.dispatchEvent(event);
}
function dispatchConstant$1(type, params) {
  return function() {
    return dispatchEvent$1(this, type, params);
  };
}
function dispatchFunction$1(type, params) {
  return function() {
    return dispatchEvent$1(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch$1(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction$1 : dispatchConstant$1)(type, params));
}
function* selection_iterator$1() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i]) yield node2;
    }
  }
}
var root$1 = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root$1);
}
function selection_selection$1() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select$1,
  selectAll: selection_selectAll$1,
  selectChild: selection_selectChild$1,
  selectChildren: selection_selectChildren$1,
  filter: selection_filter$1,
  data: selection_data$1,
  enter: selection_enter$1,
  exit: selection_exit$1,
  join: selection_join$1,
  merge: selection_merge$1,
  selection: selection_selection$1,
  order: selection_order$1,
  sort: selection_sort$1,
  call: selection_call$1,
  nodes: selection_nodes$1,
  node: selection_node$1,
  size: selection_size$1,
  empty: selection_empty$1,
  each: selection_each$1,
  attr: selection_attr$1,
  style: selection_style$1,
  property: selection_property$1,
  classed: selection_classed$1,
  text: selection_text$1,
  html: selection_html$1,
  raise: selection_raise$1,
  lower: selection_lower$1,
  append: selection_append$1,
  insert: selection_insert$1,
  remove: selection_remove$1,
  clone: selection_clone$1,
  datum: selection_datum$1,
  on: selection_on$1,
  dispatch: selection_dispatch$1,
  [Symbol.iterator]: selection_iterator$1
};
function select$1(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root$1);
}
function sourceEvent$1(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent) event = sourceEvent2;
  return event;
}
function pointer$1(event, node2) {
  event = sourceEvent$1(event);
  if (node2 === void 0) node2 = event.currentTarget;
  if (node2) {
    var svg = node2.ownerSVGElement || node2;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node2.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node2.getBoundingClientRect) {
      var rect = node2.getBoundingClientRect();
      return [event.clientX - rect.left - node2.clientLeft, event.clientY - rect.top - node2.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
const nonpassivecapture$1 = { capture: true, passive: false };
function noevent$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable(view) {
  var root2 = view.document.documentElement, selection2 = select$1(view).on("dragstart.drag", noevent$1, nonpassivecapture$1);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent$1, nonpassivecapture$1);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag$1(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select$1(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent$1, nonpassivecapture$1);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color$1, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color$1(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color$1(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0) h2 = s = l = NaN;
  else if (l <= 0 || l >= 1) h2 = s = NaN;
  else if (s <= 0) h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color$1(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h2 = (g - b) / s + (g < b) * 6;
    else if (g === max) h2 = (b - r) / s + 2;
    else h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1$1 = (x) => () => x;
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1$1(isNaN(a) ? b : a);
}
const interpolateRgb = function rgbGamma2(y) {
  var color2 = gamma(y);
  function rgb$12(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$12.gamma = rgbGamma2;
  return rgb$12;
}(1);
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
var degrees = 180 / Math.PI;
var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const interpolateZoom = function zoomRho2(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho2(_1, _2, _4);
  };
  return zoom2;
}(Math.SQRT2, 2, 4);
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch$1("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node2, name, id2, index, group, timing) {
  var schedules = node2.__transition;
  if (!schedules) node2.__transition = {};
  else if (id2 in schedules) return;
  create(node2, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node2, id2) {
  var schedule2 = get$2(node2, id2);
  if (schedule2.state > CREATED) throw new Error("too late; already scheduled");
  return schedule2;
}
function set$2(node2, id2) {
  var schedule2 = get$2(node2, id2);
  if (schedule2.state > STARTED) throw new Error("too late; already running");
  return schedule2;
}
function get$2(node2, id2) {
  var schedule2 = node2.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2])) throw new Error("transition not found");
  return schedule2;
}
function create(node2, id2, self) {
  var schedules = node2.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule2, 0, self.time);
  function schedule2(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node2, node2.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node2, node2.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node2, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node2, node2.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node2.__transition;
  }
}
function interrupt(node2, name) {
  var schedules = node2.__transition, schedule2, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node2, node2.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2) delete node2.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set$2(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule2 = set$2(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get$2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule2 = set$2(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node2) {
    return get$2(node2, id2).value[name];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color$1 ? interpolateRgb : (c = color$1(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove$2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$2(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS$2(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction$2(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS$2(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace$1(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$2 : attrFunction$2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$2 : attrRemove$2)(fullname) : (fullname.local ? attrConstantNS$2 : attrConstant$2)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace$1(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get$2(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set$2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set$2(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get$2(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set$2(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get$2(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set$2(this, id2).ease = v;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function") match = matcher$1(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set$2;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get$2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function") select2 = selector$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select2.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2) subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get$2(node2, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function") select2 = selectorAll$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        for (var children2 = select2.call(node2, node2.__data__, i, group), child, inherit2 = get$2(node2, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node2);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection$2 = selection.prototype.constructor;
function transition_selection() {
  return new Selection$2(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$1(this, name), string1 = (this.style.removeProperty(name), styleValue$1(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove$2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$2(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue$1(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction$2(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$1(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue$1(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set$2(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove$2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove$2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction$2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant$2(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant$2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction$2(tweenValue(this, "text", value)) : textConstant$2(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        var inherit2 = get$2(node2, id0);
        schedule(node2, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule2 = set$2(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0) resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node2, id2) {
  var timing;
  while (!(timing = node2.__transition) || !(timing = timing[id2])) {
    if (!(node2 = node2.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        schedule(node2, name, id2, i, group, timing || inherit(node2, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
const constant$3 = (x) => () => x;
function ZoomEvent(type, {
  sourceEvent: sourceEvent2,
  target: target2,
  transform,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target2, enumerable: true, configurable: true },
    transform: { value: transform, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
Transform.prototype;
function nopropagation$1(event) {
  event.stopImmediatePropagation();
}
function noevent$2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function defaultFilter$1(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable$1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom() {
  var filter2 = defaultFilter$1, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable$1, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom, listeners = dispatch$1("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule2(collection, transform, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k, p, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom2.scaleTo = function(selection2, k, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom2.translateBy = function(selection2, x, y, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x, y, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }
  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule2(transition2, transform, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate2(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select$1(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer$1(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }
    noevent$2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select$1(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer$1(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    dragDisable(event.view);
    nopropagation$1(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();
    function mousemoved(event2) {
      noevent$2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer$1(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag$1(event2.view, g.moved);
      noevent$2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer$1(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent$2(event);
    if (duration > 0) select$1(this).transition().duration(duration).call(schedule2, t1, p0, event);
    else select$1(this).call(zoom2.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation$1(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$1(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent$2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$1(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation$1(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer$1(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select$1(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$3(+_), zoom2) : wheelDelta;
  };
  zoom2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$3(!!_), zoom2) : filter2;
  };
  zoom2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), zoom2) : touchable;
  };
  zoom2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$3([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom2) : constrain;
  };
  zoom2.duration = function(_) {
    return arguments.length ? (duration = +_, zoom2) : duration;
  };
  zoom2.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
  };
  return zoom2;
}
const Slots = Symbol("MiniMapSlots");
const _hoisted_1$1$1 = ["id", "x", "y", "rx", "ry", "width", "height", "fill", "stroke", "stroke-width", "shape-rendering"];
const __default__$1$1 = {
  name: "MiniMapNode",
  compatConfig: { MODE: 3 },
  inheritAttrs: false
};
const _sfc_main$1$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1$1,
  props: {
    id: {},
    type: {},
    selected: { type: Boolean },
    dragging: { type: Boolean },
    position: {},
    dimensions: {},
    borderRadius: {},
    color: {},
    shapeRendering: {},
    strokeColor: {},
    strokeWidth: {},
    hidden: { type: Boolean }
  },
  emits: ["click", "dblclick", "mouseenter", "mousemove", "mouseleave"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const miniMapSlots = inject(Slots);
    const attrs = useAttrs();
    const style = toRef(() => attrs.style ?? {});
    function onClick(event) {
      emits("click", event);
    }
    function onDblclick(event) {
      emits("dblclick", event);
    }
    function onMouseEnter(event) {
      emits("mouseenter", event);
    }
    function onMouseMove(event) {
      emits("mousemove", event);
    }
    function onMouseLeave(event) {
      emits("mouseleave", event);
    }
    return (_ctx, _cache) => {
      return !_ctx.hidden && _ctx.dimensions.width !== 0 && _ctx.dimensions.height !== 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        unref(miniMapSlots)[`node-${props.type}`] ? (openBlock(), createBlock(resolveDynamicComponent(unref(miniMapSlots)[`node-${props.type}`]), normalizeProps(mergeProps({ key: 0 }, { ...props, ..._ctx.$attrs })), null, 16)) : (openBlock(), createElementBlock("rect", mergeProps({
          key: 1,
          id: _ctx.id
        }, _ctx.$attrs, {
          class: ["vue-flow__minimap-node", { selected: _ctx.selected, dragging: _ctx.dragging }],
          x: _ctx.position.x,
          y: _ctx.position.y,
          rx: _ctx.borderRadius,
          ry: _ctx.borderRadius,
          width: _ctx.dimensions.width,
          height: _ctx.dimensions.height,
          fill: _ctx.color || style.value.background || style.value.backgroundColor,
          stroke: _ctx.strokeColor,
          "stroke-width": _ctx.strokeWidth,
          "shape-rendering": _ctx.shapeRendering,
          onClick,
          onDblclick,
          onMouseenter: onMouseEnter,
          onMousemove: onMouseMove,
          onMouseleave: onMouseLeave
        }), null, 16, _hoisted_1$1$1))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$a = ["width", "height", "viewBox", "aria-labelledby"];
const _hoisted_2$6 = ["id"];
const _hoisted_3$3 = ["d", "fill", "stroke", "stroke-width"];
const __default__$3 = {
  name: "MiniMap",
  compatConfig: { MODE: 3 }
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    nodeColor: { type: [String, Function], default: "#e2e2e2" },
    nodeStrokeColor: { type: [String, Function], default: "transparent" },
    nodeClassName: { type: [String, Function] },
    nodeBorderRadius: { default: 5 },
    nodeStrokeWidth: { default: 2 },
    maskColor: { default: "rgb(240, 240, 240, 0.6)" },
    maskStrokeColor: { default: "none" },
    maskStrokeWidth: { default: 1 },
    position: { default: "bottom-right" },
    pannable: { type: Boolean, default: false },
    zoomable: { type: Boolean, default: false },
    width: {},
    height: {},
    ariaLabel: { default: "Vue Flow mini map" },
    inversePan: { type: Boolean, default: false },
    zoomStep: { default: 10 },
    offsetScale: { default: 5 },
    maskBorderRadius: { default: 0 }
  },
  emits: ["click", "nodeClick", "nodeDblclick", "nodeMouseenter", "nodeMousemove", "nodeMouseleave"],
  setup(__props, { emit }) {
    const slots = useSlots();
    const attrs = useAttrs();
    const defaultWidth = 200;
    const defaultHeight = 150;
    const { id: id2, edges, viewport, translateExtent, dimensions, emits, d3Selection, d3Zoom, getNodesInitialized } = useVueFlow();
    const el = ref();
    provide(Slots, slots);
    const elementWidth = toRef(() => {
      var _a;
      return __props.width ?? ((_a = attrs.style) == null ? void 0 : _a.width) ?? defaultWidth;
    });
    const elementHeight = toRef(() => {
      var _a;
      return __props.height ?? ((_a = attrs.style) == null ? void 0 : _a.height) ?? defaultHeight;
    });
    const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
    const nodeColorFunc = computed(() => typeof __props.nodeColor === "string" ? () => __props.nodeColor : __props.nodeColor);
    const nodeStrokeColorFunc = computed(
      () => typeof __props.nodeStrokeColor === "string" ? () => __props.nodeStrokeColor : __props.nodeStrokeColor
    );
    const nodeClassNameFunc = computed(
      () => typeof __props.nodeClassName === "string" ? () => __props.nodeClassName : typeof __props.nodeClassName === "function" ? __props.nodeClassName : () => ""
    );
    const bb = computed(() => getRectOfNodes(getNodesInitialized.value));
    const viewBB = computed(() => ({
      x: -viewport.value.x / viewport.value.zoom,
      y: -viewport.value.y / viewport.value.zoom,
      width: dimensions.value.width / viewport.value.zoom,
      height: dimensions.value.height / viewport.value.zoom
    }));
    const boundingRect = computed(
      () => getNodesInitialized.value && getNodesInitialized.value.length ? getBoundsofRects(bb.value, viewBB.value) : viewBB.value
    );
    const viewScale = computed(() => {
      const scaledWidth = boundingRect.value.width / elementWidth.value;
      const scaledHeight = boundingRect.value.height / elementHeight.value;
      return Math.max(scaledWidth, scaledHeight);
    });
    const viewBox = computed(() => {
      const viewWidth = viewScale.value * elementWidth.value;
      const viewHeight = viewScale.value * elementHeight.value;
      const offset = __props.offsetScale * viewScale.value;
      return {
        offset,
        x: boundingRect.value.x - (viewWidth - boundingRect.value.width) / 2 - offset,
        y: boundingRect.value.y - (viewHeight - boundingRect.value.height) / 2 - offset,
        width: viewWidth + offset * 2,
        height: viewHeight + offset * 2
      };
    });
    const d = computed(() => {
      if (!viewBox.value.x || !viewBox.value.y) {
        return "";
      }
      return `
    M${viewBox.value.x - viewBox.value.offset},${viewBox.value.y - viewBox.value.offset}
    h${viewBox.value.width + viewBox.value.offset * 2}
    v${viewBox.value.height + viewBox.value.offset * 2}
    h${-viewBox.value.width - viewBox.value.offset * 2}z
    M${viewBB.value.x + __props.maskBorderRadius},${viewBB.value.y}
    h${viewBB.value.width - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},${__props.maskBorderRadius}
    v${viewBB.value.height - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},${__props.maskBorderRadius}
    h${-(viewBB.value.width - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},-${__props.maskBorderRadius}
    v${-(viewBB.value.height - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},-${__props.maskBorderRadius}z`;
    });
    watchEffect(
      (onCleanup) => {
        if (el.value) {
          const selection2 = select$1(el.value);
          const zoomHandler = (event) => {
            if (event.sourceEvent.type !== "wheel" || !d3Selection.value || !d3Zoom.value) {
              return;
            }
            const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? 0.05 : event.sourceEvent.deltaMode ? 1 : 2e-3) * __props.zoomStep;
            const zoom2 = viewport.value.zoom * 2 ** pinchDelta;
            d3Zoom.value.scaleTo(d3Selection.value, zoom2);
          };
          const panHandler = (event) => {
            if (event.sourceEvent.type !== "mousemove" || !d3Selection.value || !d3Zoom.value) {
              return;
            }
            const moveScale = viewScale.value * Math.max(1, viewport.value.zoom) * (__props.inversePan ? -1 : 1);
            const position2 = {
              x: viewport.value.x - event.sourceEvent.movementX * moveScale,
              y: viewport.value.y - event.sourceEvent.movementY * moveScale
            };
            const extent = [
              [0, 0],
              [dimensions.value.width, dimensions.value.height]
            ];
            const nextTransform = identity.translate(position2.x, position2.y).scale(viewport.value.zoom);
            const constrainedTransform = d3Zoom.value.constrain()(nextTransform, extent, translateExtent.value);
            d3Zoom.value.transform(d3Selection.value, constrainedTransform);
          };
          const zoomAndPanHandler = zoom().on("zoom", __props.pannable ? panHandler : () => {
          }).on("zoom.wheel", __props.zoomable ? zoomHandler : () => {
          });
          selection2.call(zoomAndPanHandler);
          onCleanup(() => {
            selection2.on("zoom", null);
          });
        }
      },
      { flush: "post" }
    );
    function onSvgClick(event) {
      const [x, y] = pointer$1(event);
      emit("click", { event, position: { x, y } });
    }
    function onNodeClick(event, node2) {
      const param = { event, node: node2, connectedEdges: getConnectedEdges([node2], edges.value) };
      emits.miniMapNodeClick(param);
      emit("nodeClick", param);
    }
    function onNodeDblClick(event, node2) {
      const param = { event, node: node2, connectedEdges: getConnectedEdges([node2], edges.value) };
      emits.miniMapNodeDoubleClick(param);
      emit("nodeDblclick", param);
    }
    function onNodeMouseEnter(event, node2) {
      const param = { event, node: node2, connectedEdges: getConnectedEdges([node2], edges.value) };
      emits.miniMapNodeMouseEnter(param);
      emit("nodeMouseenter", param);
    }
    function onNodeMouseMove(event, node2) {
      const param = { event, node: node2, connectedEdges: getConnectedEdges([node2], edges.value) };
      emits.miniMapNodeMouseMove(param);
      emit("nodeMousemove", param);
    }
    function onNodeMouseLeave(event, node2) {
      const param = { event, node: node2, connectedEdges: getConnectedEdges([node2], edges.value) };
      emits.miniMapNodeMouseLeave(param);
      emit("nodeMouseleave", param);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$y), {
        position: _ctx.position,
        class: normalizeClass(["vue-flow__minimap", { pannable: _ctx.pannable, zoomable: _ctx.zoomable }])
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", {
            ref_key: "el",
            ref: el,
            width: elementWidth.value,
            height: elementHeight.value,
            viewBox: [viewBox.value.x, viewBox.value.y, viewBox.value.width, viewBox.value.height].join(" "),
            role: "img",
            "aria-labelledby": `vue-flow__minimap-${unref(id2)}`,
            onClick: onSvgClick
          }, [
            _ctx.ariaLabel ? (openBlock(), createElementBlock("title", {
              key: 0,
              id: `vue-flow__minimap-${unref(id2)}`
            }, toDisplayString(_ctx.ariaLabel), 9, _hoisted_2$6)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getNodesInitialized), (node2) => {
              return openBlock(), createBlock(_sfc_main$1$2, {
                id: node2.id,
                key: node2.id,
                position: node2.computedPosition,
                dimensions: node2.dimensions,
                selected: node2.selected,
                dragging: node2.dragging,
                style: normalizeStyle(node2.style),
                class: normalizeClass(nodeClassNameFunc.value(node2)),
                color: nodeColorFunc.value(node2),
                "border-radius": _ctx.nodeBorderRadius,
                "stroke-color": nodeStrokeColorFunc.value(node2),
                "stroke-width": _ctx.nodeStrokeWidth,
                "shape-rendering": unref(shapeRendering),
                type: node2.type,
                hidden: node2.hidden,
                onClick: ($event) => onNodeClick($event, node2),
                onDblclick: ($event) => onNodeDblClick($event, node2),
                onMouseenter: ($event) => onNodeMouseEnter($event, node2),
                onMousemove: ($event) => onNodeMouseMove($event, node2),
                onMouseleave: ($event) => onNodeMouseLeave($event, node2)
              }, null, 8, ["id", "position", "dimensions", "selected", "dragging", "style", "class", "color", "border-radius", "stroke-color", "stroke-width", "shape-rendering", "type", "hidden", "onClick", "onDblclick", "onMouseenter", "onMousemove", "onMouseleave"]);
            }), 128)),
            createBaseVNode("path", {
              class: "vue-flow__minimap-mask",
              d: d.value,
              fill: _ctx.maskColor,
              stroke: _ctx.maskStrokeColor,
              "stroke-width": _ctx.maskStrokeWidth,
              "fill-rule": "evenodd"
            }, null, 8, _hoisted_3$3)
          ], 8, _hoisted_1$a))
        ]),
        _: 1
      }, 8, ["position", "class"]);
    };
  }
});
const _hoisted_1$9 = ["id", "x", "y", "width", "height", "patternTransform"];
const _hoisted_2$5 = ["d", "stroke-width"];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "CanvasBackgroundStripedPattern",
  props: {
    id: {},
    x: {},
    y: {},
    zoom: {}
  },
  setup(__props) {
    const props = __props;
    const scaledGap = computed(() => 20 * props.zoom || 1);
    const patternOffset = computed(() => scaledGap.value / 2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("pattern", {
        id: _ctx.id,
        patternUnits: "userSpaceOnUse",
        x: _ctx.x % scaledGap.value,
        y: _ctx.y % scaledGap.value,
        width: scaledGap.value,
        height: scaledGap.value,
        patternTransform: `rotate(135) translate(-${patternOffset.value},-${patternOffset.value})`
      }, [
        createBaseVNode("path", {
          d: `M0 ${scaledGap.value / 2} H${scaledGap.value}`,
          "stroke-width": scaledGap.value / 2
        }, null, 8, _hoisted_2$5)
      ], 8, _hoisted_1$9);
    };
  }
});
const CanvasBackgroundStripedPattern = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__scopeId", "data-v-161512f5"]]);
var BackgroundVariant = /* @__PURE__ */ ((BackgroundVariant2) => {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  return BackgroundVariant2;
})(BackgroundVariant || {});
const LinePattern = function({ dimensions, size, color: color2 }) {
  return h("path", {
    "stroke": color2,
    "stroke-width": size,
    "d": `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
  });
};
const DotPattern = function({ radius, color: color2 }) {
  return h("circle", { cx: radius, cy: radius, r: radius, fill: color2 });
};
({
  [BackgroundVariant.Lines]: LinePattern,
  [BackgroundVariant.Dots]: DotPattern
});
const DefaultBgColors = {
  [BackgroundVariant.Dots]: "#81818a",
  [BackgroundVariant.Lines]: "#eee"
};
const _hoisted_1$8 = ["id", "x", "y", "width", "height", "patternTransform"];
const _hoisted_2$4 = {
  key: 2,
  height: "100",
  width: "100"
};
const _hoisted_3$2 = ["fill"];
const _hoisted_4$1 = ["x", "y", "fill"];
const __default__$2 = {
  name: "Background",
  compatConfig: { MODE: 3 }
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    id: {},
    variant: { default: () => BackgroundVariant.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: {},
    color: {},
    bgColor: {},
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 0 }
  },
  setup(__props) {
    const { id: vueFlowId, viewport } = useVueFlow();
    const background = computed(() => {
      const zoom2 = viewport.value.zoom;
      const [gapX, gapY] = Array.isArray(__props.gap) ? __props.gap : [__props.gap, __props.gap];
      const scaledGap = [gapX * zoom2 || 1, gapY * zoom2 || 1];
      const scaledSize = __props.size * zoom2;
      const [offsetX, offsetY] = Array.isArray(__props.offset) ? __props.offset : [__props.offset, __props.offset];
      const scaledOffset = [offsetX * zoom2 || 1 + scaledGap[0] / 2, offsetY * zoom2 || 1 + scaledGap[1] / 2];
      return {
        scaledGap,
        offset: scaledOffset,
        size: scaledSize
      };
    });
    const patternId = toRef(() => `pattern-${vueFlowId}${__props.id ? `-${__props.id}` : ""}`);
    const patternColor = toRef(() => __props.color || __props.patternColor || DefaultBgColors[__props.variant || BackgroundVariant.Dots]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "vue-flow__background vue-flow__container",
        style: normalizeStyle({
          height: `${_ctx.height > 100 ? 100 : _ctx.height}%`,
          width: `${_ctx.width > 100 ? 100 : _ctx.width}%`
        })
      }, [
        renderSlot(_ctx.$slots, "pattern-container", { id: patternId.value }, () => [
          createBaseVNode("pattern", {
            id: patternId.value,
            x: unref(viewport).x % background.value.scaledGap[0],
            y: unref(viewport).y % background.value.scaledGap[1],
            width: background.value.scaledGap[0],
            height: background.value.scaledGap[1],
            patternTransform: `translate(-${background.value.offset[0]},-${background.value.offset[1]})`,
            patternUnits: "userSpaceOnUse"
          }, [
            renderSlot(_ctx.$slots, "pattern", {}, () => [
              _ctx.variant === unref(BackgroundVariant).Lines ? (openBlock(), createBlock(unref(LinePattern), {
                key: 0,
                size: _ctx.lineWidth,
                color: patternColor.value,
                dimensions: background.value.scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : _ctx.variant === unref(BackgroundVariant).Dots ? (openBlock(), createBlock(unref(DotPattern), {
                key: 1,
                color: patternColor.value,
                radius: background.value.size / 2
              }, null, 8, ["color", "radius"])) : createCommentVNode("", true),
              _ctx.bgColor ? (openBlock(), createElementBlock("svg", _hoisted_2$4, [
                createBaseVNode("rect", {
                  width: "100%",
                  height: "100%",
                  fill: _ctx.bgColor
                }, null, 8, _hoisted_3$2)
              ])) : createCommentVNode("", true)
            ])
          ], 8, _hoisted_1$8)
        ]),
        createBaseVNode("rect", {
          x: _ctx.x,
          y: _ctx.y,
          width: "100%",
          height: "100%",
          fill: `url(#${patternId.value})`
        }, null, 8, _hoisted_4$1),
        renderSlot(_ctx.$slots, "default", { id: patternId.value })
      ], 4);
    };
  }
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "CanvasBackground",
  props: {
    striped: { type: Boolean },
    viewport: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$r), {
        "data-test-id": "canvas-background",
        "pattern-color": "#aaa",
        gap: unref(GRID_SIZE)
      }, createSlots({ _: 2 }, [
        _ctx.striped ? {
          name: "pattern-container",
          fn: withCtx((patternProps) => [
            createVNode(CanvasBackgroundStripedPattern, {
              id: patternProps.id,
              "data-test-id": "canvas-background-striped-pattern",
              x: _ctx.viewport.x,
              y: _ctx.viewport.y,
              zoom: _ctx.viewport.zoom
            }, null, 8, ["id", "x", "y", "zoom"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["gap"]);
    };
  }
});
const _hoisted_1$7 = ["id"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "CanvasArrowHeadMarker",
  props: {
    id: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", null, [
        createBaseVNode("defs", null, [
          createBaseVNode("marker", {
            id: _ctx.id,
            viewBox: "-10 -10 20 20",
            refX: "0",
            refY: "0",
            markerWidth: "12.5",
            markerHeight: "12.5",
            markerUnits: "strokeWidth",
            orient: "auto-start-reverse"
          }, _cache[0] || (_cache[0] = [
            createBaseVNode("polyline", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              points: "-5,-4 0,0 -5,4 -5,-4",
              "stroke-width": "2",
              stroke: "context-stroke",
              fill: "context-stroke"
            }, null, -1)
          ]), 8, _hoisted_1$7)
        ])
      ]);
    };
  }
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "CanvasEdgeToolbar",
  props: {
    type: {}
  },
  emits: ["add", "delete"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const $style = useCssModule();
    const i18n = useI18n();
    const classes = computed(() => ({
      [$style.canvasEdgeToolbar]: true
    }));
    const isAddButtonVisible = computed(() => props.type === NodeConnectionTypes.Main);
    function onAdd2() {
      emit("add");
    }
    function onDelete() {
      emit("delete");
    }
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value),
        "data-test-id": "canvas-edge-toolbar"
      }, [
        isAddButtonVisible.value ? (openBlock(), createBlock(_component_N8nIconButton, {
          key: 0,
          class: "canvas-edge-toolbar-button",
          "data-test-id": "add-connection-button",
          type: "tertiary",
          size: "small",
          icon: "plus",
          title: unref(i18n).baseText("node.add"),
          onClick: onAdd2
        }, null, 8, ["title"])) : createCommentVNode("", true),
        createVNode(_component_N8nIconButton, {
          "data-test-id": "delete-connection-button",
          class: "canvas-edge-toolbar-button",
          type: "tertiary",
          size: "small",
          icon: "trash",
          title: unref(i18n).baseText("node.delete"),
          onClick: onDelete
        }, null, 8, ["title"])
      ], 2);
    };
  }
});
const canvasEdgeToolbar = "_canvasEdgeToolbar_1d3yh_123";
const style0$m = {
  canvasEdgeToolbar
};
const cssModules$m = {
  "$style": style0$m
};
const CanvasEdgeToolbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__cssModules", cssModules$m]]);
const _hoisted_1$6 = ["data-source-node-name", "data-target-node-name"];
const _hoisted_2$3 = ["data-source-node-name", "data-target-node-name", "data-edge-status"];
const delayedHoveredTimeout = 600;
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "CanvasEdge",
  props: {
    id: {},
    sourceNode: {},
    targetNode: {},
    source: {},
    target: {},
    type: {},
    label: {},
    style: {},
    selected: { type: Boolean },
    sourcePosition: {},
    targetPosition: {},
    sourceHandleId: {},
    targetHandleId: {},
    animated: { type: Boolean },
    updatable: { type: Boolean },
    markerStart: {},
    markerEnd: {},
    curvature: {},
    interactionWidth: {},
    data: {},
    events: {},
    labelStyle: {},
    labelShowBg: { type: Boolean },
    labelBgStyle: {},
    labelBgPadding: {},
    labelBgBorderRadius: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    readOnly: { type: Boolean },
    hovered: { type: Boolean },
    bringToFront: { type: Boolean }
  },
  emits: ["add", "delete", "update:label:hovered"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const data = toRef(props, "data");
    const $style = useCssModule();
    const connectionType = computed(
      () => isValidNodeConnectionType(props.data.source.type) ? props.data.source.type : NodeConnectionTypes.Main
    );
    const delayedHovered = ref(props.hovered);
    const delayedHoveredSetTimeoutRef = ref(null);
    watch(
      () => props.hovered,
      (isHovered) => {
        if (isHovered) {
          if (delayedHoveredSetTimeoutRef.value) clearTimeout(delayedHoveredSetTimeoutRef.value);
          delayedHovered.value = true;
        } else {
          delayedHoveredSetTimeoutRef.value = setTimeout(() => {
            delayedHovered.value = false;
          }, delayedHoveredTimeout);
        }
      },
      { immediate: true }
    );
    const renderToolbar = computed(() => (props.selected || delayedHovered.value) && !props.readOnly);
    const isMainConnection = computed(() => data.value.source.type === NodeConnectionTypes.Main);
    const status2 = computed(() => props.data.status);
    const edgeColor = computed(() => {
      if (status2.value === "success") {
        return "var(--color-success)";
      } else if (status2.value === "pinned") {
        return "var(--color-secondary)";
      } else if (!isMainConnection.value) {
        return "var(--node-type-supplemental-color)";
      } else if (props.selected) {
        return "var(--color-background-dark)";
      } else {
        return "var(--color-foreground-xdark)";
      }
    });
    const edgeStyle = computed(() => ({
      ...props.style,
      ...isMainConnection.value ? {} : { strokeDasharray: "8,8" },
      strokeWidth: 2,
      stroke: delayedHovered.value ? "var(--color-primary)" : edgeColor.value
    }));
    const edgeClasses = computed(() => ({
      [$style.edge]: true,
      hovered: delayedHovered.value,
      "bring-to-front": props.bringToFront
    }));
    const edgeLabelStyle = computed(() => ({
      transform: `translate(0, ${isConnectorStraight.value ? "-100%" : "0%"})`,
      color: "var(--color-text-base)"
    }));
    const isConnectorStraight = computed(() => renderData.value.isConnectorStraight);
    const edgeToolbarStyle = computed(() => ({
      transform: `translate(-50%, -50%) translate(${labelPosition.value[0]}px, ${labelPosition.value[1]}px)`,
      ...delayedHovered.value ? { zIndex: 1 } : {}
    }));
    const edgeToolbarClasses = computed(() => ({
      [$style.edgeLabelWrapper]: true,
      "vue-flow__edge-label": true,
      selected: props.selected
    }));
    const renderData = computed(
      () => getEdgeRenderData(props, {
        connectionType: connectionType.value
      })
    );
    const segments = computed(() => renderData.value.segments);
    const labelPosition = computed(() => renderData.value.labelPosition);
    const connection = computed(() => ({
      source: props.source,
      target: props.target,
      sourceHandle: props.sourceHandleId,
      targetHandle: props.targetHandleId
    }));
    function onAdd2() {
      emit("add", connection.value);
    }
    function onDelete() {
      emit("delete", connection.value);
    }
    function onEdgeLabelMouseEnter() {
      emit("update:label:hovered", true);
    }
    function onEdgeLabelMouseLeave() {
      emit("update:label:hovered", false);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("g", {
          "data-test-id": "edge",
          "data-source-node-name": data.value.source?.node,
          "data-target-node-name": data.value.target?.node
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (segment, index) => {
            return openBlock(), createBlock(unref(_sfc_main$d$1), {
              id: `${_ctx.id}-${index}`,
              key: segment[0],
              class: normalizeClass(edgeClasses.value),
              style: normalizeStyle(edgeStyle.value),
              path: segment[0],
              "marker-end": _ctx.markerEnd,
              "interaction-width": 40
            }, null, 8, ["id", "class", "style", "path", "marker-end"]);
          }), 128))
        ], 8, _hoisted_1$6),
        createVNode(unref(_sfc_main$3$1), null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              "data-test-id": "edge-label",
              "data-source-node-name": data.value.source?.node,
              "data-target-node-name": data.value.target?.node,
              "data-edge-status": status2.value,
              style: normalizeStyle(edgeToolbarStyle.value),
              class: normalizeClass(edgeToolbarClasses.value),
              onMouseenter: onEdgeLabelMouseEnter,
              onMouseleave: onEdgeLabelMouseLeave
            }, [
              renderToolbar.value ? (openBlock(), createBlock(CanvasEdgeToolbar, {
                key: 0,
                type: connectionType.value,
                onAdd: onAdd2,
                onDelete
              }, null, 8, ["type"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                style: normalizeStyle(edgeLabelStyle.value),
                class: normalizeClass(unref($style).edgeLabel)
              }, toDisplayString(_ctx.label), 7))
            ], 46, _hoisted_2$3)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const edge = "_edge_fyzmo_123";
const edgeLabelWrapper = "_edgeLabelWrapper_fyzmo_127";
const edgeLabel = "_edgeLabel_fyzmo_127";
const style0$l = {
  edge,
  edgeLabelWrapper,
  edgeLabel
};
const cssModules$l = {
  "$style": style0$l
};
const Edge = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__cssModules", cssModules$l]]);
function useCanvasNode() {
  const node2 = inject(CanvasNodeKey);
  const data = computed(
    () => node2?.data.value ?? {
      id: "",
      name: "",
      subtitle: "",
      type: "",
      typeVersion: 1,
      disabled: false,
      inputs: [],
      outputs: [],
      connections: { [CanvasConnectionMode.Input]: {}, [CanvasConnectionMode.Output]: {} },
      issues: { items: [], visible: false },
      pinnedData: { count: 0, visible: false },
      execution: {
        running: false
      },
      runData: { iterations: 0, outputMap: {}, visible: false },
      render: {
        type: CanvasNodeRenderType.Default,
        options: {}
      }
    }
  );
  const id2 = computed(() => node2?.id.value ?? "");
  const label2 = computed(() => node2?.label.value ?? "");
  const subtitle2 = computed(() => data.value.subtitle);
  const name = computed(() => data.value.name);
  const inputs2 = computed(() => data.value.inputs);
  const outputs = computed(() => data.value.outputs);
  const connections = computed(() => data.value.connections);
  const isDisabled = computed(() => data.value.disabled);
  const isReadOnly = computed(() => node2?.readOnly.value);
  const isSelected = computed(() => node2?.selected.value);
  const pinnedDataCount = computed(() => data.value.pinnedData.count);
  const hasPinnedData = computed(() => data.value.pinnedData.count > 0);
  const issues2 = computed(() => data.value.issues.items ?? []);
  const hasIssues = computed(() => data.value.issues.visible);
  const executionStatus = computed(() => data.value.execution.status);
  const executionWaiting = computed(() => data.value.execution.waiting);
  const executionRunning = computed(() => data.value.execution.running);
  const runDataOutputMap = computed(() => data.value.runData.outputMap);
  const runDataIterations = computed(() => data.value.runData.iterations);
  const hasRunData = computed(() => data.value.runData.visible);
  const render2 = computed(() => data.value.render);
  const eventBus = computed(() => node2?.eventBus.value);
  return {
    node: node2,
    id: id2,
    name,
    label: label2,
    subtitle: subtitle2,
    inputs: inputs2,
    outputs,
    connections,
    isDisabled,
    isReadOnly,
    isSelected,
    pinnedDataCount,
    hasPinnedData,
    runDataIterations,
    runDataOutputMap,
    hasRunData,
    issues: issues2,
    hasIssues,
    executionStatus,
    executionWaiting,
    executionRunning,
    render: render2,
    eventBus
  };
}
const _hoisted_1$5 = ["title"];
const _hoisted_2$2 = ["onClick"];
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeStickyColorSelector",
  props: {
    "visible": { type: Boolean },
    "visibleModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["update"], ["update:visible"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const { render: render2, eventBus } = useCanvasNode();
    const renderOptions = computed(() => render2.value.options);
    const autoHideTimeout = ref(null);
    const colors = computed(() => Array.from({ length: 7 }).map((_, index) => index + 1));
    const isPopoverVisible = useModel(__props, "visible");
    function hidePopover() {
      isPopoverVisible.value = false;
    }
    function showPopover() {
      isPopoverVisible.value = true;
    }
    function changeColor(index) {
      emit("update", index);
      hidePopover();
    }
    function onMouseEnter() {
      if (autoHideTimeout.value) {
        clearTimeout(autoHideTimeout.value);
        autoHideTimeout.value = null;
      }
    }
    function onMouseLeave() {
      autoHideTimeout.value = setTimeout(() => {
        hidePopover();
      }, 1e3);
    }
    onMounted(() => {
      eventBus.value?.on("update:sticky:color", showPopover);
    });
    onBeforeUnmount(() => {
      eventBus.value?.off("update:sticky:color", showPopover);
    });
    return (_ctx, _cache) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      const _component_N8nPopover = resolveComponent("N8nPopover");
      return openBlock(), createBlock(_component_N8nPopover, {
        visible: isPopoverVisible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isPopoverVisible.value = $event),
        effect: "dark",
        trigger: "click",
        placement: "top",
        "popper-class": _ctx.$style.popover,
        "popper-style": { width: "208px" },
        teleported: true,
        onBeforeEnter: onMouseEnter,
        onAfterLeave: onMouseLeave
      }, {
        reference: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.option),
            "data-test-id": "change-sticky-color",
            title: unref(i18n).baseText("node.changeColor")
          }, [
            createVNode(_component_FontAwesomeIcon, { icon: "palette" })
          ], 10, _hoisted_1$5)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(colors.value, (color2) => {
              return openBlock(), createElementBlock("div", {
                key: color2,
                "data-test-id": "color",
                class: normalizeClass([
                  _ctx.$style.color,
                  _ctx.$style[`sticky-color-${color2}`],
                  renderOptions.value.color === color2 ? _ctx.$style.selected : ""
                ]),
                onClick: ($event) => changeColor(color2)
              }, null, 10, _hoisted_2$2);
            }), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["visible", "popper-class"]);
    };
  }
});
const popover = "_popover_3lp7u_123";
const content = "_content_3lp7u_129";
const color = "_color_3lp7u_136";
const selected$2 = "_selected_3lp7u_148";
const option = "_option_3lp7u_173";
const style0$k = {
  popover,
  content,
  color,
  selected: selected$2,
  "sticky-color-1": "_sticky-color-1_3lp7u_151",
  "sticky-color-2": "_sticky-color-2_3lp7u_154",
  "sticky-color-3": "_sticky-color-3_3lp7u_157",
  "sticky-color-4": "_sticky-color-4_3lp7u_160",
  "sticky-color-5": "_sticky-color-5_3lp7u_163",
  "sticky-color-6": "_sticky-color-6_3lp7u_166",
  "sticky-color-7": "_sticky-color-7_3lp7u_169",
  option
};
const cssModules$k = {
  "$style": style0$k
};
const __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__cssModules", cssModules$k]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeToolbar",
  props: {
    readOnly: { type: Boolean }
  },
  emits: ["delete", "toggle", "run", "update", "open:contextmenu"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const $style = useCssModule();
    const i18n = useI18n();
    const { isExecuting } = useCanvas();
    const { isDisabled, render: render2, name } = useCanvasNode();
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const node2 = computed(() => !!name.value && workflowsStore.getNodeByName(name.value));
    const isToolNode = computed(() => !!node2.value && nodeTypesStore.isToolNode(node2.value.type));
    const nodeDisabledTitle = computed(() => {
      return isDisabled.value ? i18n.baseText("node.enable") : i18n.baseText("node.disable");
    });
    const isStickyColorSelectorOpen = ref(false);
    const isHovered = ref(false);
    const classes = computed(() => ({
      [$style.canvasNodeToolbar]: true,
      [$style.readOnly]: props.readOnly,
      [$style.forceVisible]: isHovered.value || isStickyColorSelectorOpen.value
    }));
    const isExecuteNodeVisible = computed(() => {
      return !props.readOnly && render2.value.type === CanvasNodeRenderType.Default && "configuration" in render2.value.options && (!render2.value.options.configuration || isToolNode.value);
    });
    const isDisableNodeVisible = computed(() => {
      return !props.readOnly && render2.value.type === CanvasNodeRenderType.Default;
    });
    const isDeleteNodeVisible = computed(() => !props.readOnly);
    const isStickyNoteChangeColorVisible = computed(
      () => !props.readOnly && render2.value.type === CanvasNodeRenderType.StickyNote
    );
    function executeNode() {
      emit("run");
    }
    function onToggleNode() {
      emit("toggle");
    }
    function onDeleteNode() {
      emit("delete");
    }
    function onChangeStickyColor(color2) {
      emit("update", {
        color: color2
      });
    }
    function onOpenContextMenu(event) {
      emit("open:contextmenu", event);
    }
    function onMouseEnter() {
      isHovered.value = true;
    }
    function onMouseLeave() {
      isHovered.value = false;
    }
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      const _component_CanvasNodeStickyColorSelector = __unplugin_components_0$4;
      return openBlock(), createElementBlock("div", {
        "data-test-id": "canvas-node-toolbar",
        class: normalizeClass(classes.value),
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).canvasNodeToolbarItems)
        }, [
          createVNode(_component_N8nTooltip, {
            placement: "top",
            disabled: !unref(isDisabled),
            content: unref(i18n).baseText("ndv.execute.deactivated")
          }, {
            default: withCtx(() => [
              isExecuteNodeVisible.value ? (openBlock(), createBlock(_component_N8nIconButton, {
                key: 0,
                "data-test-id": "execute-node-button",
                type: "tertiary",
                text: "",
                size: "small",
                icon: "play",
                disabled: unref(isExecuting) || unref(isDisabled),
                title: unref(i18n).baseText("node.testStep"),
                onClick: executeNode
              }, null, 8, ["disabled", "title"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["disabled", "content"]),
          isDisableNodeVisible.value ? (openBlock(), createBlock(_component_N8nIconButton, {
            key: 0,
            "data-test-id": "disable-node-button",
            type: "tertiary",
            text: "",
            size: "small",
            icon: "power-off",
            title: nodeDisabledTitle.value,
            onClick: onToggleNode
          }, null, 8, ["title"])) : createCommentVNode("", true),
          isDeleteNodeVisible.value ? (openBlock(), createBlock(_component_N8nIconButton, {
            key: 1,
            "data-test-id": "delete-node-button",
            type: "tertiary",
            size: "small",
            text: "",
            icon: "trash",
            title: unref(i18n).baseText("node.delete"),
            onClick: onDeleteNode
          }, null, 8, ["title"])) : createCommentVNode("", true),
          isStickyNoteChangeColorVisible.value ? (openBlock(), createBlock(_component_CanvasNodeStickyColorSelector, {
            key: 2,
            visible: isStickyColorSelectorOpen.value,
            "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isStickyColorSelectorOpen.value = $event),
            onUpdate: onChangeStickyColor
          }, null, 8, ["visible"])) : createCommentVNode("", true),
          createVNode(_component_N8nIconButton, {
            "data-test-id": "overflow-node-button",
            type: "tertiary",
            size: "small",
            text: "",
            icon: "ellipsis-h",
            onClick: onOpenContextMenu
          })
        ], 2)
      ], 34);
    };
  }
});
const canvasNodeToolbar$1 = "_canvasNodeToolbar_104hp_123";
const canvasNodeToolbarItems = "_canvasNodeToolbarItems_104hp_130";
const forceVisible = "_forceVisible_104hp_141";
const style0$j = {
  canvasNodeToolbar: canvasNodeToolbar$1,
  canvasNodeToolbarItems,
  forceVisible
};
const cssModules$j = {
  "$style": style0$j
};
const CanvasNodeToolbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__cssModules", cssModules$j]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeDisabledStrikeThrough",
  setup(__props) {
    const $style = useCssModule();
    const { hasRunData, render: render2 } = useCanvasNode();
    const classes = computed(() => {
      return {
        [$style.disabledStrikeThrough]: true,
        [$style.success]: hasRunData.value,
        [$style.warning]: render2.value.type === CanvasNodeRenderType.Default && render2.value.options.dirtiness !== void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value)
      }, null, 2);
    };
  }
});
const disabledStrikeThrough = "_disabledStrikeThrough_nl2g7_123";
const success$2 = "_success_nl2g7_132";
const warning$2 = "_warning_nl2g7_136";
const style0$i = {
  disabledStrikeThrough,
  success: success$2,
  warning: warning$2
};
const cssModules$i = {
  "$style": style0$i
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__cssModules", cssModules$i]]);
const _hoisted_1$4 = { key: 1 };
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = { key: 2 };
const _hoisted_4 = { key: 5 };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeStatusIcons",
  setup(__props) {
    const nodeHelpers = useNodeHelpers();
    const i18n = useI18n();
    const {
      hasPinnedData,
      issues: issues2,
      hasIssues,
      executionStatus,
      executionWaiting,
      executionRunning,
      hasRunData,
      runDataIterations,
      isDisabled,
      render: render2
    } = useCanvasNode();
    const hideNodeIssues = computed(() => false);
    const dirtiness = computed(
      () => render2.value.type === CanvasNodeRenderType.Default ? render2.value.options.dirtiness : void 0
    );
    return (_ctx, _cache) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      return unref(hasIssues) && !hideNodeIssues.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([_ctx.$style.status, _ctx.$style.issues]),
        "data-test-id": "node-issues"
      }, [
        createVNode(unref(N8nTooltip), {
          "show-after": 500,
          placement: "bottom"
        }, {
          content: withCtx(() => [
            createVNode(TitledList, {
              title: `${unref(i18n).baseText("node.issues")}:`,
              items: unref(issues2)
            }, null, 8, ["title", "items"])
          ]),
          default: withCtx(() => [
            createVNode(_component_FontAwesomeIcon, { icon: "exclamation-triangle" })
          ]),
          _: 1
        })
      ], 2)) : unref(executionWaiting) || unref(executionStatus) === "waiting" ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass([_ctx.$style.status, _ctx.$style.waiting])
        }, [
          createVNode(unref(N8nTooltip), { placement: "bottom" }, {
            content: withCtx(() => [
              createBaseVNode("div", {
                textContent: toDisplayString(unref(executionWaiting))
              }, null, 8, _hoisted_2$1)
            ]),
            default: withCtx(() => [
              createVNode(_component_FontAwesomeIcon, { icon: "clock" })
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass([_ctx.$style.status, _ctx.$style["node-waiting-spinner"]])
        }, [
          createVNode(_component_FontAwesomeIcon, {
            icon: "sync-alt",
            spin: ""
          })
        ], 2)
      ])) : unref(executionStatus) === "unknown" ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : unref(executionRunning) || unref(executionStatus) === "running" ? (openBlock(), createElementBlock("div", {
        key: 3,
        "data-test-id": "canvas-node-status-running",
        class: normalizeClass([_ctx.$style.status, _ctx.$style.running])
      }, [
        createVNode(_component_FontAwesomeIcon, {
          icon: "sync-alt",
          spin: ""
        })
      ], 2)) : unref(hasPinnedData) && !unref(nodeHelpers).isProductionExecutionPreview.value && !unref(isDisabled) ? (openBlock(), createElementBlock("div", {
        key: 4,
        "data-test-id": "canvas-node-status-pinned",
        class: normalizeClass([_ctx.$style.status, _ctx.$style.pinnedData])
      }, [
        createVNode(_component_FontAwesomeIcon, { icon: "thumbtack" })
      ], 2)) : dirtiness.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createVNode(unref(N8nTooltip), {
          "show-after": 500,
          placement: "bottom"
        }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText(
              dirtiness.value === unref(CanvasNodeDirtiness).PARAMETERS_UPDATED ? "node.dirty" : "node.subjectToChange"
            )), 1)
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              "data-test-id": "canvas-node-status-warning",
              class: normalizeClass([_ctx.$style.status, _ctx.$style.warning])
            }, [
              createVNode(_component_FontAwesomeIcon, { icon: "triangle" }),
              unref(runDataIterations) > 1 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.count)
              }, toDisplayString(unref(runDataIterations)), 3)) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        })
      ])) : unref(hasRunData) ? (openBlock(), createElementBlock("div", {
        key: 6,
        "data-test-id": "canvas-node-status-success",
        class: normalizeClass([_ctx.$style.status, _ctx.$style.runData])
      }, [
        createVNode(_component_FontAwesomeIcon, { icon: "check" }),
        unref(runDataIterations) > 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(_ctx.$style.count)
        }, toDisplayString(unref(runDataIterations)), 3)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const status = "_status_93vv6_123";
const runData = "_runData_93vv6_130";
const waiting$1 = "_waiting_93vv6_134";
const pinnedData = "_pinnedData_93vv6_138";
const running$1 = "_running_93vv6_142";
const issues = "_issues_93vv6_165";
const count = "_count_93vv6_170";
const warning$1 = "_warning_93vv6_174";
const style0$h = {
  status,
  runData,
  waiting: waiting$1,
  pinnedData,
  running: running$1,
  "node-waiting-spinner": "_node-waiting-spinner_93vv6_152",
  issues,
  count,
  warning: warning$1
};
const cssModules$h = {
  "$style": style0$h
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__cssModules", cssModules$h]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeTooltip",
  props: {
    visible: { type: Boolean }
  },
  setup(__props) {
    const { render: render2 } = useCanvasNode();
    const renderOptions = computed(() => render2.value.options);
    const popperOptions = {
      modifiers: [
        { name: "flip", enabled: false }
        // show tooltip always above the node
      ]
    };
    return (_ctx, _cache) => {
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return openBlock(), createBlock(_component_N8nTooltip, {
        placement: "top",
        "show-after": 500,
        visible: true,
        teleported: false,
        "popper-class": _ctx.$style.popper,
        "popper-options": popperOptions
      }, {
        content: withCtx(() => [
          createTextVNode(toDisplayString(renderOptions.value.tooltip), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.tooltipTrigger)
          }, null, 2)
        ]),
        _: 1
      }, 8, ["popper-class"]);
    };
  }
});
const tooltipTrigger = "_tooltipTrigger_dauyi_123";
const popper = "_popper_dauyi_131";
const style0$g = {
  tooltipTrigger,
  popper
};
const cssModules$g = {
  "$style": style0$g
};
const __unplugin_components_0$3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__cssModules", cssModules$g]]);
function useNodeConnections({
  inputs: inputs2,
  outputs,
  connections
}) {
  const mainInputs = computed(
    () => unref(inputs2).filter((input) => input.type === NodeConnectionTypes.Main)
  );
  const nonMainInputs = computed(
    () => unref(inputs2).filter((input) => input.type !== NodeConnectionTypes.Main)
  );
  const requiredNonMainInputs = computed(
    () => nonMainInputs.value.filter((input) => input.required)
  );
  const mainInputConnections = computed(
    () => unref(connections)[CanvasConnectionMode.Input][NodeConnectionTypes.Main] ?? []
  );
  const mainOutputs = computed(
    () => unref(outputs).filter((output) => output.type === NodeConnectionTypes.Main)
  );
  const nonMainOutputs = computed(
    () => unref(outputs).filter((output) => output.type !== NodeConnectionTypes.Main)
  );
  const mainOutputConnections = computed(
    () => unref(connections)[CanvasConnectionMode.Output][NodeConnectionTypes.Main] ?? []
  );
  function isValidConnection(connection) {
    const { type: sourceType, mode: sourceMode } = parseCanvasConnectionHandleString(
      connection.sourceHandle
    );
    const { type: targetType, mode: targetMode } = parseCanvasConnectionHandleString(
      connection.targetHandle
    );
    const isSameMode = sourceMode === targetMode;
    const isSameType = sourceType === targetType;
    return !isSameMode && isSameType;
  }
  return {
    mainInputs,
    nonMainInputs,
    requiredNonMainInputs,
    mainInputConnections,
    mainOutputs,
    nonMainOutputs,
    mainOutputConnections,
    isValidConnection
  };
}
const _hoisted_1$3 = ["data-test-id"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeDefault",
  emits: ["open:contextmenu", "activate"],
  setup(__props, { emit: __emit }) {
    const $style = useCssModule();
    const i18n = useI18n();
    const emit = __emit;
    const { initialized, viewport } = useCanvas();
    const {
      id: id2,
      label: label2,
      subtitle: subtitle2,
      inputs: inputs2,
      outputs,
      connections,
      isDisabled,
      isSelected,
      hasPinnedData,
      executionStatus,
      executionWaiting,
      executionRunning,
      hasRunData,
      hasIssues,
      render: render2
    } = useCanvasNode();
    const {
      mainOutputs,
      mainOutputConnections,
      mainInputs,
      mainInputConnections,
      nonMainInputs
    } = useNodeConnections({
      inputs: inputs2,
      outputs,
      connections
    });
    const renderOptions = computed(() => render2.value.options);
    const classes = computed(() => {
      return {
        [$style.node]: true,
        [$style.selected]: isSelected.value,
        [$style.disabled]: isDisabled.value,
        [$style.success]: hasRunData.value,
        [$style.error]: hasIssues.value,
        [$style.pinned]: hasPinnedData.value,
        [$style.waiting]: executionWaiting.value ?? executionStatus.value === "waiting",
        [$style.running]: executionRunning.value,
        [$style.configurable]: renderOptions.value.configurable,
        [$style.configuration]: renderOptions.value.configuration,
        [$style.trigger]: renderOptions.value.trigger,
        [$style.warning]: renderOptions.value.dirtiness !== void 0
      };
    });
    const styles = computed(() => {
      const stylesObject = {};
      if (renderOptions.value.configurable) {
        let spacerCount = 0;
        stylesObject["--configurable-node--input-count"] = nonMainInputs.value.length + spacerCount;
      }
      stylesObject["--canvas-node--main-input-count"] = mainInputs.value.length;
      stylesObject["--canvas-node--main-output-count"] = mainOutputs.value.length;
      return stylesObject;
    });
    const dataTestId = computed(() => {
      let type = "default";
      if (renderOptions.value.configurable) {
        type = "configurable";
      } else if (renderOptions.value.configuration) {
        type = "configuration";
      } else if (renderOptions.value.trigger) {
        type = "trigger";
      }
      return `canvas-${type}-node`;
    });
    const isStrikethroughVisible = computed(() => {
      const isSingleMainInputNode = mainInputs.value.length === 1 && mainInputConnections.value.length <= 1;
      const isSingleMainOutputNode = mainOutputs.value.length === 1 && mainOutputConnections.value.length <= 1;
      return isDisabled.value && isSingleMainInputNode && isSingleMainOutputNode;
    });
    const iconSize = computed(() => renderOptions.value.configuration ? 30 : 40);
    const iconSource = computed(() => renderOptions.value.icon);
    const showTooltip = ref(false);
    watch(initialized, () => {
      if (initialized.value) {
        showTooltip.value = true;
      }
    });
    watch(viewport, () => {
      showTooltip.value = false;
      setTimeout(() => {
        showTooltip.value = true;
      }, 0);
    });
    function openContextMenu(event) {
      emit("open:contextmenu", event);
    }
    function onActivate(event) {
      emit("activate", id2.value, event);
    }
    return (_ctx, _cache) => {
      const _component_CanvasNodeTooltip = __unplugin_components_0$3;
      const _component_NodeIcon = _sfc_main$A;
      const _component_CanvasNodeStatusIcons = __unplugin_components_2;
      const _component_CanvasNodeDisabledStrikeThrough = __unplugin_components_3;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(styles.value),
        "data-test-id": dataTestId.value,
        onContextmenu: openContextMenu,
        onDblclick: withModifiers(onActivate, ["stop"])
      }, [
        renderOptions.value.tooltip ? (openBlock(), createBlock(_component_CanvasNodeTooltip, {
          key: 0,
          visible: showTooltip.value
        }, null, 8, ["visible"])) : createCommentVNode("", true),
        createVNode(_component_NodeIcon, {
          "icon-source": iconSource.value,
          size: iconSize.value,
          shrink: false,
          disabled: unref(isDisabled)
        }, null, 8, ["icon-source", "size", "disabled"]),
        !unref(isDisabled) ? (openBlock(), createBlock(_component_CanvasNodeStatusIcons, {
          key: 1,
          class: normalizeClass(unref($style).statusIcons)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        isStrikethroughVisible.value ? (openBlock(), createBlock(_component_CanvasNodeDisabledStrikeThrough, { key: 2 })) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(unref($style).description)
        }, [
          unref(label2) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref($style).label)
          }, toDisplayString(unref(label2)), 3)) : createCommentVNode("", true),
          unref(isDisabled) ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref($style).disabledLabel)
          }, " (" + toDisplayString(unref(i18n).baseText("node.disabled")) + ") ", 3)) : createCommentVNode("", true),
          unref(subtitle2) ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(unref($style).subtitle)
          }, toDisplayString(unref(subtitle2)), 3)) : createCommentVNode("", true)
        ], 2)
      ], 46, _hoisted_1$3);
    };
  }
});
const node = "_node_1d2zc_123";
const trigger$1 = "_trigger_1d2zc_156";
const configuration = "_configuration_1d2zc_159";
const statusIcons = "_statusIcons_1d2zc_166";
const configurable = "_configurable_1d2zc_169";
const description = "_description_1d2zc_180";
const label$5 = "_label_1d2zc_190";
const subtitle = "_subtitle_1d2zc_193";
const selected$1 = "_selected_1d2zc_203";
const success$1 = "_success_1d2zc_206";
const warning = "_warning_1d2zc_209";
const error = "_error_1d2zc_212";
const pinned = "_pinned_1d2zc_215";
const disabled = "_disabled_1d2zc_218";
const running = "_running_1d2zc_221";
const waiting = "_waiting_1d2zc_225";
const disabledLabel = "_disabledLabel_1d2zc_242";
const style0$f = {
  node,
  trigger: trigger$1,
  configuration,
  statusIcons,
  configurable,
  description,
  label: label$5,
  subtitle,
  selected: selected$1,
  success: success$1,
  warning,
  error,
  pinned,
  disabled,
  running,
  waiting,
  disabledLabel
};
const cssModules$f = {
  "$style": style0$f
};
const CanvasNodeDefault = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__cssModules", cssModules$f]]);
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select2.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        subgroups.push(select2.call(node2, node2.__data__, i, group));
        parents.push(node2);
      }
    }
  }
  return new Selection(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node2) {
    return node2.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$1(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node2, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node2 = group[i]) {
      node2.__data__ = data[i];
      update[i] = node2;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node2 = group[i]) {
      exit[i] = node2;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node2 = group[i]) {
      keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node2;
      } else {
        nodeByKeyValue.set(keyValue, node2);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node2 = nodeByKeyValue.get(keyValue)) {
      update[i] = node2;
      node2.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node2 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
      exit[i] = node2;
    }
  }
}
function datum(node2) {
  return node2.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$1(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node2; --i >= 0; ) {
      if (node2 = group[i]) {
        if (next && node2.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node2, next);
        next = node2;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        sortgroup[i] = node2;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node2 = group[i];
      if (node2)
        return node2;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node2 of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        callback.call(node2, node2.__data__, i, group);
    }
  }
  return this;
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node2 = this.node();
    return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
function defaultView(node2) {
  return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node2, name) {
  return node2.style.getPropertyValue(name) || defaultView(node2).getComputedStyle(node2, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node2) {
  return node2.classList || new ClassList(node2);
}
function ClassList(node2) {
  this._node = node2;
  this._names = classArray(node2.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node2, names) {
  var list2 = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list2.add(names[i]);
}
function classedRemove(node2, names) {
  var list2 = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list2.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list2 = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list2.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node2, type, params) {
  var window2 = defaultView(node2), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node2.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        yield node2;
    }
  }
}
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection_selection() {
  return this;
}
Selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection([[document.querySelector(selector2)]], [document.documentElement]) : new Selection([[selector2]], root);
}
function sourceEvent(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent)
    event = sourceEvent2;
  return event;
}
function pointer(event, node2) {
  event = sourceEvent(event);
  if (node2 === void 0)
    node2 = event.currentTarget;
  if (node2) {
    var svg = node2.ownerSVGElement || node2;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node2.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node2.getBoundingClientRect) {
      var rect = node2.getBoundingClientRect();
      return [event.clientX - rect.left - node2.clientLeft, event.clientY - rect.top - node2.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _)
      copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
const nonpassive = { passive: false };
const nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function nodrag(view) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
const constant = (x) => () => x;
function DragEvent(type, {
  sourceEvent: sourceEvent2,
  subject,
  target: target2,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target2, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag() {
  var filter2 = defaultFilter, container2 = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container2.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container2.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container22, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer(touch || event, container22), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer(touch2 || event2, container22), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag2,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant(!!_), drag2) : filter2;
  };
  drag2.container = function(_) {
    return arguments.length ? (container2 = typeof _ === "function" ? _ : constant(_), drag2) : container2;
  };
  drag2.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag2) : subject;
  };
  drag2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
var ResizeControlVariant = /* @__PURE__ */ ((ResizeControlVariant2) => {
  ResizeControlVariant2["Line"] = "line";
  ResizeControlVariant2["Handle"] = "handle";
  return ResizeControlVariant2;
})(ResizeControlVariant || {});
function getDirection({ width, prevWidth, height, prevHeight, invertX, invertY }) {
  const deltaWidth = width - prevWidth;
  const deltaHeight = height - prevHeight;
  const direction = [deltaWidth > 0 ? 1 : deltaWidth < 0 ? -1 : 0, deltaHeight > 0 ? 1 : deltaHeight < 0 ? -1 : 0];
  if (deltaWidth && invertX) {
    direction[0] = direction[0] * -1;
  }
  if (deltaHeight && invertY) {
    direction[1] = direction[1] * -1;
  }
  return direction;
}
const DefaultPositions = {
  [ResizeControlVariant.Line]: "right",
  [ResizeControlVariant.Handle]: "bottom-right"
};
const StylingProperty = {
  [ResizeControlVariant.Line]: "borderColor",
  [ResizeControlVariant.Handle]: "backgroundColor"
};
const __default__$1 = {
  name: "ResizeControl",
  compatConfig: { MODE: 3 }
};
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    nodeId: {},
    color: {},
    minWidth: { default: 10 },
    minHeight: { default: 10 },
    maxWidth: { default: Number.MAX_VALUE },
    maxHeight: { default: Number.MAX_VALUE },
    position: {},
    variant: { default: "handle" },
    shouldResize: {},
    keepAspectRatio: { type: [Boolean, Number], default: false }
  },
  emits: ["resizeStart", "resize", "resizeEnd"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const initPrevValues = { width: 0, height: 0, x: 0, y: 0 };
    const initStartValues = {
      ...initPrevValues,
      pointerX: 0,
      pointerY: 0,
      aspectRatio: 1
    };
    const { findNode, emits: triggerEmits } = useVueFlow();
    const getPointerPosition = useGetPointerPosition();
    const resizeControlRef = ref();
    let startValues = initStartValues;
    let prevValues = initPrevValues;
    const controlPosition = toRef(() => props.position ?? DefaultPositions[props.variant]);
    const positionClassNames = toRef(() => controlPosition.value.split("-"));
    const controlStyle = toRef(() => props.color ? { [StylingProperty[props.variant]]: props.color } : {});
    watchEffect((onCleanup) => {
      if (!resizeControlRef.value || !props.nodeId) {
        return;
      }
      const selection2 = select(resizeControlRef.value);
      const enableX = controlPosition.value.includes("right") || controlPosition.value.includes("left");
      const enableY = controlPosition.value.includes("bottom") || controlPosition.value.includes("top");
      const invertX = controlPosition.value.includes("left");
      const invertY = controlPosition.value.includes("top");
      const dragHandler = drag().on("start", (event) => {
        const node2 = findNode(props.nodeId);
        const { xSnapped, ySnapped } = getPointerPosition(event);
        prevValues = {
          width: (node2 == null ? void 0 : node2.dimensions.width) ?? 0,
          height: (node2 == null ? void 0 : node2.dimensions.height) ?? 0,
          x: (node2 == null ? void 0 : node2.position.x) ?? 0,
          y: (node2 == null ? void 0 : node2.position.y) ?? 0
        };
        startValues = {
          ...prevValues,
          pointerX: xSnapped,
          pointerY: ySnapped,
          aspectRatio: prevValues.width / prevValues.height
        };
        emits("resizeStart", { event, params: prevValues });
      }).on("drag", (event) => {
        var _a;
        const { xSnapped, ySnapped } = getPointerPosition(event);
        const node2 = findNode(props.nodeId);
        if (node2) {
          const changes = [];
          const {
            pointerX: startX,
            pointerY: startY,
            width: startWidth,
            height: startHeight,
            x: startNodeX,
            y: startNodeY,
            aspectRatio: startAspectRatio
          } = startValues;
          const { x: prevX, y: prevY, width: prevWidth, height: prevHeight } = prevValues;
          const distX = Math.floor(enableX ? xSnapped - startX : 0);
          const distY = Math.floor(enableY ? ySnapped - startY : 0);
          let width = clamp(startWidth + (invertX ? -distX : distX), props.minWidth, props.maxWidth);
          let height = clamp(startHeight + (invertY ? -distY : distY), props.minHeight, props.maxHeight);
          if (props.keepAspectRatio) {
            const nextAspectRatio = width / height;
            let aspectRatio = startAspectRatio;
            if (typeof props.keepAspectRatio === "number" && nextAspectRatio !== props.keepAspectRatio) {
              aspectRatio = props.keepAspectRatio;
            }
            const isDiagonal = enableX && enableY;
            const isHorizontal = enableX && !enableY;
            const isVertical = enableY && !enableX;
            width = nextAspectRatio <= aspectRatio && isDiagonal || isVertical ? height * aspectRatio : width;
            height = nextAspectRatio > aspectRatio && isDiagonal || isHorizontal ? width / aspectRatio : height;
            if (width >= props.maxWidth) {
              width = props.maxWidth;
              height = props.maxWidth / aspectRatio;
            } else if (width <= props.minWidth) {
              width = props.minWidth;
              height = props.minWidth / aspectRatio;
            }
            if (height >= props.maxHeight) {
              height = props.maxHeight;
              width = props.maxHeight * aspectRatio;
            } else if (height <= props.minHeight) {
              height = props.minHeight;
              width = props.minHeight * aspectRatio;
            }
          }
          const isWidthChange = width !== prevWidth;
          const isHeightChange = height !== prevHeight;
          if (invertX || invertY) {
            const x = invertX ? startNodeX - (width - startWidth) : startNodeX;
            const y = invertY ? startNodeY - (height - startHeight) : startNodeY;
            const isXPosChange = x !== prevX && isWidthChange;
            const isYPosChange = y !== prevY && isHeightChange;
            if (isXPosChange || isYPosChange) {
              const positionChange = {
                id: node2.id,
                type: "position",
                from: node2.position,
                position: {
                  x: isXPosChange ? x : prevX,
                  y: isYPosChange ? y : prevY
                }
              };
              changes.push(positionChange);
              prevValues.x = positionChange.position.x;
              prevValues.y = positionChange.position.y;
            }
          }
          if (props.nodeId && (isWidthChange || isHeightChange)) {
            const dimensionChange = {
              id: props.nodeId,
              type: "dimensions",
              updateStyle: true,
              resizing: true,
              dimensions: {
                width,
                height
              }
            };
            changes.push(dimensionChange);
            prevValues.width = width;
            prevValues.height = height;
          }
          if (changes.length === 0) {
            return;
          }
          const direction = getDirection({
            width: prevValues.width,
            prevWidth,
            height: prevValues.height,
            prevHeight,
            invertX,
            invertY
          });
          const nextValues = { ...prevValues, direction };
          const callResize = (_a = props.shouldResize) == null ? void 0 : _a.call(props, event, nextValues);
          if (callResize === false) {
            return;
          }
          emits("resize", { event, params: nextValues });
          triggerEmits.nodesChange(changes);
        }
      }).on("end", (event) => {
        if (props.nodeId) {
          const dimensionChange = {
            id: props.nodeId,
            type: "dimensions",
            resizing: false
          };
          emits("resizeEnd", { event, params: prevValues });
          triggerEmits.nodesChange([dimensionChange]);
        }
      });
      selection2.call(dragHandler);
      onCleanup(() => {
        selection2.on(".drag", null);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "resizeControlRef",
        ref: resizeControlRef,
        class: normalizeClass(["vue-flow__resize-control nodrag", [...positionClassNames.value, _ctx.variant]]),
        style: normalizeStyle(controlStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const __default__ = {
  name: "NodeResizer",
  compatConfig: { MODE: 3 },
  inheritAttrs: false
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    nodeId: {},
    color: {},
    handleClassName: {},
    handleStyle: {},
    lineClassName: {},
    lineStyle: {},
    isVisible: { type: Boolean, default: true },
    minWidth: {},
    minHeight: {},
    maxWidth: {},
    maxHeight: {},
    shouldResize: {},
    keepAspectRatio: { type: [Boolean, Number] }
  },
  emits: ["resizeStart", "resize", "resizeEnd"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { findNode, emits: triggerEmits } = useVueFlow();
    const handleControls = ["top-left", "top-right", "bottom-left", "bottom-right"];
    const lineControls = ["top", "right", "bottom", "left"];
    const contextNodeId = inject(NodeId, null);
    const nodeId = toRef(() => typeof props.nodeId === "string" ? props.nodeId : contextNodeId);
    const node2 = computed(() => findNode(nodeId.value));
    watch(
      [
        () => props.minWidth,
        () => props.minHeight,
        () => props.maxWidth,
        () => props.maxHeight,
        () => {
          var _a;
          return !!((_a = node2.value) == null ? void 0 : _a.dimensions.width) && !!node2.value.dimensions.height;
        }
      ],
      ([minWidth, minHeight, maxWidth, maxHeight, isInitialized]) => {
        const n = node2.value;
        if (n && isInitialized) {
          const dimensionChange = {
            id: n.id,
            type: "dimensions",
            updateStyle: true,
            dimensions: {
              width: n.dimensions.width,
              height: n.dimensions.height
            }
          };
          if (minWidth && n.dimensions.width < minWidth) {
            dimensionChange.dimensions.width = minWidth;
          }
          if (minHeight && n.dimensions.height < minHeight) {
            dimensionChange.dimensions.height = minHeight;
          }
          if (maxWidth && n.dimensions.width > maxWidth) {
            dimensionChange.dimensions.width = maxWidth;
          }
          if (maxHeight && n.dimensions.height > maxHeight) {
            dimensionChange.dimensions.height = maxHeight;
          }
          if (dimensionChange.dimensions.width !== n.dimensions.width || dimensionChange.dimensions.height !== n.dimensions.height) {
            triggerEmits.nodesChange([dimensionChange]);
          }
        }
      },
      { flush: "post", immediate: true }
    );
    return (_ctx, _cache) => {
      return _ctx.isVisible ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(lineControls, (c) => {
          return createVNode(_sfc_main$1$1, {
            key: c,
            class: normalizeClass(_ctx.lineClassName),
            style: normalizeStyle(_ctx.lineStyle),
            "node-id": nodeId.value,
            position: c,
            variant: unref(ResizeControlVariant).Line,
            "keep-aspect-ratio": _ctx.keepAspectRatio,
            color: _ctx.color,
            "min-width": _ctx.minWidth,
            "min-height": _ctx.minHeight,
            "max-width": _ctx.maxWidth,
            "max-height": _ctx.maxHeight,
            "should-resize": _ctx.shouldResize,
            onResizeStart: _cache[0] || (_cache[0] = ($event) => emits("resizeStart", $event)),
            onResize: _cache[1] || (_cache[1] = ($event) => emits("resize", $event)),
            onResizeEnd: _cache[2] || (_cache[2] = ($event) => emits("resizeEnd", $event))
          }, null, 8, ["class", "style", "node-id", "position", "variant", "keep-aspect-ratio", "color", "min-width", "min-height", "max-width", "max-height", "should-resize"]);
        }), 64)),
        (openBlock(), createElementBlock(Fragment, null, renderList(handleControls, (c) => {
          return createVNode(_sfc_main$1$1, {
            key: c,
            class: normalizeClass(_ctx.handleClassName),
            style: normalizeStyle(_ctx.handleStyle),
            "node-id": nodeId.value,
            position: c,
            color: _ctx.color,
            "min-width": _ctx.minWidth,
            "min-height": _ctx.minHeight,
            "max-width": _ctx.maxWidth,
            "max-height": _ctx.maxHeight,
            "should-resize": _ctx.shouldResize,
            "keep-aspect-ratio": _ctx.keepAspectRatio,
            onResizeStart: _cache[3] || (_cache[3] = ($event) => emits("resizeStart", $event)),
            onResize: _cache[4] || (_cache[4] = ($event) => emits("resize", $event)),
            onResizeEnd: _cache[5] || (_cache[5] = ($event) => emits("resizeEnd", $event))
          }, null, 8, ["class", "style", "node-id", "position", "color", "min-width", "min-height", "max-width", "max-height", "should-resize", "keep-aspect-ratio"]);
        }), 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CanvasNodeStickyNote",
  emits: ["update", "move", "activate", "deactivate", "open:contextmenu"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const $style = useCssModule();
    const { id: id2, isSelected, isReadOnly, render: render2, eventBus } = useCanvasNode();
    const renderOptions = computed(() => render2.value.options);
    const classes = computed(() => ({
      [$style.sticky]: true,
      [$style.selected]: isSelected.value,
      ["sticky--active"]: isActive.value
      // Used to increase the z-index of the sticky note when editing
    }));
    function onResize(event) {
      emit("move", {
        x: event.params.x,
        y: event.params.y
      });
      emit("update", {
        ...event.params.width ? { width: event.params.width } : {},
        ...event.params.height ? { height: event.params.height } : {}
      });
    }
    const isActive = ref(false);
    function onInputChange(value) {
      emit("update", {
        content: value
      });
    }
    function onSetActive(value) {
      if (isActive.value === value) return;
      isActive.value = value;
      if (value) {
        emit("activate", id2.value);
      } else {
        emit("deactivate", id2.value);
      }
    }
    function onActivate() {
      onSetActive(true);
    }
    function openContextMenu(event) {
      emit("open:contextmenu", event);
    }
    onMounted(() => {
      eventBus.value?.on("update:node:activated", onActivate);
    });
    onBeforeUnmount(() => {
      eventBus.value?.off("update:node:activated", onActivate);
    });
    return (_ctx, _cache) => {
      const _component_N8nSticky = resolveComponent("N8nSticky");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$g), {
          "min-height": 80,
          "min-width": 150,
          height: renderOptions.value.height,
          width: renderOptions.value.width,
          "is-visible": !unref(isReadOnly),
          onResize
        }, null, 8, ["height", "width", "is-visible"]),
        createVNode(_component_N8nSticky, mergeProps(_ctx.$attrs, {
          id: unref(id2),
          class: classes.value,
          "data-test-id": "sticky",
          height: renderOptions.value.height,
          width: renderOptions.value.width,
          "model-value": renderOptions.value.content,
          "background-color": renderOptions.value.color,
          "edit-mode": isActive.value,
          "read-only": unref(isReadOnly),
          onEdit: onSetActive,
          onDblclick: withModifiers(onActivate, ["stop"]),
          "onUpdate:modelValue": onInputChange,
          onContextmenu: openContextMenu
        }), null, 16, ["id", "class", "height", "width", "model-value", "background-color", "edit-mode", "read-only"])
      ], 64);
    };
  }
});
const sticky = "_sticky_1jyj2_123";
const selected = "_selected_1jyj2_130";
const style0$e = {
  sticky,
  selected
};
const cssModules$e = {
  "$style": style0$e
};
const CanvasNodeStickyNote = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__cssModules", cssModules$e]]);
const _hoisted_1$2 = ["textContent"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeAddNodes",
  setup(__props) {
    const nodeCreatorStore = useNodeCreatorStore();
    const i18n = useI18n();
    const isTooltipVisible = ref(false);
    onMounted(() => {
      nodeViewEventBus.on("runWorkflowButton:mouseenter", onShowTooltip);
      nodeViewEventBus.on("runWorkflowButton:mouseleave", onHideTooltip);
    });
    onBeforeUnmount(() => {
      nodeViewEventBus.off("runWorkflowButton:mouseenter", onShowTooltip);
      nodeViewEventBus.off("runWorkflowButton:mouseleave", onHideTooltip);
    });
    function onShowTooltip() {
      isTooltipVisible.value = true;
    }
    function onHideTooltip() {
      isTooltipVisible.value = false;
    }
    function onClick() {
      nodeCreatorStore.openNodeCreatorForTriggerNodes(
        NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON
      );
    }
    return (_ctx, _cache) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return openBlock(), createElementBlock("div", {
        ref: "container",
        class: normalizeClass(_ctx.$style.addNodes),
        "data-test-id": "canvas-add-button"
      }, [
        createVNode(_component_N8nTooltip, {
          placement: "top",
          visible: isTooltipVisible.value,
          disabled: unref(nodeCreatorStore).showScrim,
          "popper-class": _ctx.$style.tooltip,
          "show-after": 700
        }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.canvasAddButton.addATriggerNodeBeforeExecuting")), 1)
          ]),
          default: withCtx(() => [
            createBaseVNode("button", {
              class: normalizeClass(_ctx.$style.button),
              "data-test-id": "canvas-plus-button",
              onClick: withModifiers(onClick, ["stop"])
            }, [
              createVNode(_component_FontAwesomeIcon, {
                icon: "plus",
                size: "lg"
              })
            ], 2)
          ]),
          _: 1
        }, 8, ["visible", "disabled", "popper-class"]),
        createBaseVNode("p", {
          class: normalizeClass(_ctx.$style.label),
          textContent: toDisplayString(unref(i18n).baseText("nodeView.canvasAddButton.addFirstStep"))
        }, null, 10, _hoisted_1$2)
      ], 2);
    };
  }
});
const addNodes = "_addNodes_1qfrq_123";
const button = "_button_1qfrq_131";
const label$4 = "_label_1qfrq_152";
const style0$d = {
  addNodes,
  button,
  label: label$4
};
const cssModules$d = {
  "$style": style0$d
};
const CanvasNodeAddNodes = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__cssModules", cssModules$d]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeAIPrompt",
  emits: ["delete"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const { id: id2 } = useCanvasNode();
    const builderStore = useBuilderStore();
    const isPromptVisible = ref(true);
    const isFocused = ref(false);
    const prompt = ref("");
    const hasContent = computed(() => prompt.value.trim().length > 0);
    async function onSubmit() {
      builderStore.openChat();
      emit("delete", id2.value);
      await builderStore.initBuilderChat(prompt.value, "canvas");
      isPromptVisible.value = false;
    }
    return (_ctx, _cache) => {
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_n8n_button = resolveComponent("n8n-button");
      return isPromptVisible.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "canvas-ai-prompt"
      }, [
        createBaseVNode("div", {
          class: normalizeClass([_ctx.$style.promptContainer, { [_ctx.$style.focused]: isFocused.value }])
        }, [
          createBaseVNode("form", {
            class: normalizeClass(_ctx.$style.form),
            onSubmit: withModifiers(onSubmit, ["prevent"])
          }, [
            createVNode(_component_n8n_input, {
              modelValue: prompt.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => prompt.value = $event),
              class: normalizeClass(_ctx.$style.form_textarea),
              type: "textarea",
              disabled: unref(builderStore).streaming,
              placeholder: unref(i18n).baseText("aiAssistant.builder.placeholder"),
              "read-only": false,
              rows: 15,
              onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true),
              onBlur: _cache[2] || (_cache[2] = ($event) => isFocused.value = false),
              onKeydown: withKeys(withModifiers(onSubmit, ["meta", "stop"]), ["enter"])
            }, null, 8, ["modelValue", "class", "disabled", "placeholder", "onKeydown"]),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.form_footer)
            }, [
              createVNode(_component_n8n_button, {
                "native-type": "submit",
                disabled: !hasContent.value || unref(builderStore).streaming,
                onKeydown: withKeys(onSubmit, ["enter"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.buildWorkflow")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ], 34)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.or)
        }, [
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.or_text)
          }, "or", 2)
        ], 2)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$1 = "_container_145fr_123";
const promptContainer = "_promptContainer_145fr_128";
const focused = "_focused_145fr_142";
const form = "_form_145fr_146";
const form_textarea = "_form_textarea_145fr_153";
const form_footer = "_form_footer_145fr_170";
const or = "_or_145fr_176";
const or_text = "_or_text_145fr_185";
const style0$c = {
  container: container$1,
  promptContainer,
  focused,
  form,
  form_textarea,
  form_footer,
  or,
  or_text
};
const cssModules$c = {
  "$style": style0$c
};
const CanvasNodeAIPrompt = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__cssModules", cssModules$c]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeRenderer",
  setup(__props) {
    const node2 = inject(CanvasNodeKey);
    const Render = () => {
      const renderType2 = node2?.data.value.render.type ?? CanvasNodeRenderType.Default;
      let Component;
      switch (renderType2) {
        case CanvasNodeRenderType.StickyNote:
          Component = CanvasNodeStickyNote;
          break;
        case CanvasNodeRenderType.AddNodes:
          Component = CanvasNodeAddNodes;
          break;
        case CanvasNodeRenderType.AIPrompt:
          Component = CanvasNodeAIPrompt;
          break;
        default:
          Component = CanvasNodeDefault;
      }
      return h(Component, {
        "data-canvas-node-render-type": renderType2
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Render);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleRectangle",
  props: {
    handleClasses: { default: void 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.rectangle, _ctx.handleClasses])
      }, null, 2);
    };
  }
});
const rectangle = "_rectangle_rd2w6_123";
const style0$b = {
  rectangle
};
const cssModules$b = {
  "$style": style0$b
};
const __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__cssModules", cssModules$b]]);
function useCanvasNodeHandle() {
  const handle2 = inject(CanvasNodeHandleKey);
  const label2 = computed(() => handle2?.label.value ?? "");
  const isConnected = computed(() => handle2?.isConnected.value ?? false);
  const isConnecting = computed(() => handle2?.isConnecting.value ?? false);
  const isReadOnly = computed(() => handle2?.isReadOnly.value);
  const isRequired = computed(() => handle2?.isRequired.value);
  const maxConnections = computed(() => handle2?.maxConnections.value);
  const type = computed(() => handle2?.type.value ?? NodeConnectionTypes.Main);
  const mode = computed(() => handle2?.mode.value ?? CanvasConnectionMode.Input);
  const index = computed(() => handle2?.index.value ?? 0);
  const runData2 = computed(() => handle2?.runData.value);
  return {
    label: label2,
    isConnected,
    isConnecting,
    isReadOnly,
    isRequired,
    maxConnections,
    type,
    mode,
    index,
    runData: runData2
  };
}
const handleClasses$3 = "target";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleMainInput",
  setup(__props) {
    const $style = useCssModule();
    const { label: label2, isRequired } = useCanvasNodeHandle();
    const classes = computed(() => ({
      "canvas-node-handle-main-input": true,
      [$style.handle]: true,
      [$style.required]: isRequired.value
    }));
    return (_ctx, _cache) => {
      const _component_CanvasHandleRectangle = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref($style).label])
        }, toDisplayString(unref(label2)), 3),
        createVNode(_component_CanvasHandleRectangle, { "handle-classes": handleClasses$3 })
      ], 2);
    };
  }
});
const handle$4 = "_handle_1v80z_123";
const label$3 = "_label_1v80z_130";
const required$3 = "_required_1v80z_143";
const style0$a = {
  handle: handle$4,
  label: label$3,
  required: required$3
};
const cssModules$a = {
  "$style": style0$a
};
const CanvasHandleMainInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__cssModules", cssModules$a]]);
const _hoisted_1$1 = ["viewBox"];
const _hoisted_2 = ["x1", "y1", "x2", "y2"];
const _hoisted_3 = ["transform"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandlePlus",
  props: {
    position: { default: "right" },
    handleClasses: { default: void 0 },
    plusSize: { default: 24 },
    lineSize: { default: 46 },
    type: { default: "default" }
  },
  emits: ["click:plus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const style = useCssModule();
    const classes = computed(() => [
      style.wrapper,
      style[props.position],
      style[props.type],
      props.handleClasses
    ]);
    const viewBox = computed(() => {
      switch (props.position) {
        case "bottom":
        case "top":
          return {
            width: props.plusSize,
            height: props.lineSize + props.plusSize
          };
        default:
          return {
            width: props.lineSize + props.plusSize,
            height: props.plusSize
          };
      }
    });
    const styles = computed(() => ({
      width: `${viewBox.value.width}px`,
      height: `${viewBox.value.height}px`
    }));
    const linePosition = computed(() => {
      switch (props.position) {
        case "top":
          return [
            [viewBox.value.width / 2, viewBox.value.height - props.lineSize + 1],
            [viewBox.value.width / 2, viewBox.value.height]
          ];
        case "bottom":
          return [
            [viewBox.value.width / 2, 0],
            [viewBox.value.width / 2, props.lineSize + 1]
          ];
        case "left":
          return [
            [viewBox.value.width - props.lineSize - 1, viewBox.value.height / 2],
            [viewBox.value.width, viewBox.value.height / 2]
          ];
        default:
          return [
            [0, viewBox.value.height / 2],
            [props.lineSize + 1, viewBox.value.height / 2]
          ];
      }
    });
    const plusPosition = computed(() => {
      switch (props.position) {
        case "bottom":
          return [0, viewBox.value.height - props.plusSize];
        case "top":
          return [0, 0];
        case "left":
          return [0, 0];
        default:
          return [viewBox.value.width - props.plusSize, 0];
      }
    });
    function onClick(event) {
      emit("click:plus", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        "data-test-id": "canvas-handle-plus-wrapper",
        class: normalizeClass(classes.value),
        viewBox: `0 0 ${viewBox.value.width} ${viewBox.value.height}`,
        style: normalizeStyle(styles.value)
      }, [
        createBaseVNode("line", {
          class: normalizeClass([_ctx.handleClasses, _ctx.$style.line]),
          x1: linePosition.value[0][0],
          y1: linePosition.value[0][1],
          x2: linePosition.value[1][0],
          y2: linePosition.value[1][1],
          stroke: "var(--color-foreground-xdark)",
          "stroke-width": "2"
        }, null, 10, _hoisted_2),
        createBaseVNode("g", {
          "data-test-id": "canvas-handle-plus",
          class: normalizeClass([_ctx.$style.plus, _ctx.handleClasses, "clickable"]),
          transform: `translate(${plusPosition.value[0]}, ${plusPosition.value[1]})`,
          onClick: withModifiers(onClick, ["stop"])
        }, [
          createBaseVNode("rect", {
            class: normalizeClass([_ctx.handleClasses, "clickable"]),
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            stroke: "var(--color-foreground-xdark)",
            "stroke-width": "2",
            rx: "4",
            fill: "var(--color-foreground-xlight)"
          }, null, 2),
          createBaseVNode("path", {
            class: normalizeClass([_ctx.handleClasses, "clickable"]),
            fill: "var(--color-foreground-xdark)",
            d: "m16.40655,10.89837l-3.30491,0l0,-3.30491c0,-0.40555 -0.32889,-0.73443 -0.73443,-0.73443l-0.73443,0c-0.40554,0 -0.73442,0.32888 -0.73442,0.73443l0,3.30491l-3.30491,0c-0.40555,0 -0.73443,0.32888 -0.73443,0.73442l0,0.73443c0,0.40554 0.32888,0.73443 0.73443,0.73443l3.30491,0l0,3.30491c0,0.40554 0.32888,0.73442 0.73442,0.73442l0.73443,0c0.40554,0 0.73443,-0.32888 0.73443,-0.73442l0,-3.30491l3.30491,0c0.40554,0 0.73442,-0.32889 0.73442,-0.73443l0,-0.73443c0,-0.40554 -0.32888,-0.73442 -0.73442,-0.73442z"
          }, null, 2)
        ], 10, _hoisted_3)
      ], 14, _hoisted_1$1);
    };
  }
});
const wrapper = "_wrapper_hyidj_123";
const secondary = "_secondary_hyidj_126";
const line = "_line_hyidj_126";
const plus$1 = "_plus_hyidj_129";
const success = "_success_hyidj_135";
const style0$9 = {
  wrapper,
  secondary,
  line,
  plus: plus$1,
  success
};
const cssModules$9 = {
  "$style": style0$9
};
const CanvasHandlePlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__cssModules", cssModules$9]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleDot",
  props: {
    handleClasses: { default: void 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.dot, _ctx.handleClasses])
      }, null, 2);
    };
  }
});
const dot = "_dot_gdjps_123";
const style0$8 = {
  dot
};
const cssModules$8 = {
  "$style": style0$8
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__cssModules", cssModules$8]]);
const handleClasses$2 = "source";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleMainOutput",
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const $style = useCssModule();
    const i18n = useI18n();
    const { render: render2 } = useCanvasNode();
    const { label: label2, isConnected, isConnecting, isReadOnly, isRequired, runData: runData2 } = useCanvasNodeHandle();
    const classes = computed(() => ({
      "canvas-node-handle-main-output": true,
      [$style.handle]: true,
      [$style.connected]: isConnected.value,
      [$style.required]: isRequired.value
    }));
    const isHovered = ref(false);
    const renderOptions = computed(() => render2.value.options);
    const runDataTotal = computed(() => runData2.value?.total ?? 0);
    const runDataLabel2 = computed(
      () => !isConnected.value && runData2.value && runData2.value.total > 0 ? i18n.baseText("ndv.output.items", {
        adjustToNumber: runData2.value.total,
        interpolate: { count: String(runData2.value.total) }
      }) : ""
    );
    const isHandlePlusVisible = computed(() => !isConnecting.value || isHovered.value);
    const plusType = computed(() => runDataTotal.value > 0 ? "success" : "default");
    const plusLineSize = computed(
      () => ({
        small: 46,
        medium: 66,
        large: 80
      })[(runDataTotal.value > 0 ? "large" : renderOptions.value.outputs?.labelSize) ?? "small"]
    );
    const outputLabelClasses = computed(() => ({
      [$style.label]: true,
      [$style.outputLabel]: true
    }));
    const runDataLabelClasses = computed(() => ({
      [$style.label]: true,
      [$style.runDataLabel]: true
    }));
    function onMouseEnter() {
      isHovered.value = true;
    }
    function onMouseLeave() {
      isHovered.value = false;
    }
    function onClickAdd() {
      emit("add");
    }
    return (_ctx, _cache) => {
      const _component_CanvasHandleDot = __unplugin_components_0$1;
      const _component_CanvasHandlePlus = CanvasHandlePlus;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value)
      }, [
        unref(label2) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(outputLabelClasses.value)
        }, toDisplayString(unref(label2)), 3)) : createCommentVNode("", true),
        unref(runData2) ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(runDataLabelClasses.value)
        }, toDisplayString(runDataLabel2.value), 3)) : createCommentVNode("", true),
        createVNode(_component_CanvasHandleDot, { "handle-classes": handleClasses$2 }),
        createVNode(Transition$2, { name: "canvas-node-handle-main-output" }, {
          default: withCtx(() => [
            !unref(isConnected) && !unref(isReadOnly) ? withDirectives((openBlock(), createBlock(_component_CanvasHandlePlus, {
              key: 0,
              "data-plus-type": plusType.value,
              "line-size": plusLineSize.value,
              "handle-classes": handleClasses$2,
              type: plusType.value,
              onMouseenter: onMouseEnter,
              onMouseleave: onMouseLeave,
              "onClick:plus": onClickAdd
            }, null, 8, ["data-plus-type", "line-size", "type"])), [
              [vShow, isHandlePlusVisible.value]
            ]) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const handle$3 = "_handle_1u904_123";
const connected = "_connected_1u904_129";
const label$2 = "_label_1u904_129";
const required$2 = "_required_1u904_143";
const outputLabel = "_outputLabel_1u904_148";
const runDataLabel = "_runDataLabel_1u904_156";
const style0$7 = {
  handle: handle$3,
  connected,
  label: label$2,
  required: required$2,
  outputLabel,
  runDataLabel
};
const cssModules$7 = {
  "$style": style0$7
};
const CanvasHandleMainOutput = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__cssModules", cssModules$7]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleDiamond",
  props: {
    handleClasses: { default: void 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.diamond, _ctx.handleClasses])
      }, null, 2);
    };
  }
});
const diamond = "_diamond_kuwdo_123";
const style0$6 = {
  diamond
};
const cssModules$6 = {
  "$style": style0$6
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__cssModules", cssModules$6]]);
const handleClasses$1 = "target";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleNonMainInput",
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const $style = useCssModule();
    const { label: label2, isConnected, isConnecting, isRequired, maxConnections } = useCanvasNodeHandle();
    const classes = computed(() => ({
      "canvas-node-handle-non-main-input": true,
      [$style.handle]: true,
      [$style.required]: isRequired.value
    }));
    const isHandlePlusAvailable = computed(
      () => !isConnected.value || !maxConnections.value || maxConnections.value > 1
    );
    const isHandlePlusVisible = computed(
      () => !isConnecting.value || isHovered.value || !maxConnections.value || maxConnections.value > 1
    );
    const isHovered = ref(false);
    function onMouseEnter() {
      isHovered.value = true;
    }
    function onMouseLeave() {
      isHovered.value = false;
    }
    function onClickAdd() {
      emit("add");
    }
    return (_ctx, _cache) => {
      const _component_CanvasHandleDiamond = __unplugin_components_0;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref($style).label])
        }, toDisplayString(unref(label2)), 3),
        createVNode(_component_CanvasHandleDiamond, { "handle-classes": handleClasses$1 }),
        createVNode(Transition$2, { name: "canvas-node-handle-non-main-input" }, {
          default: withCtx(() => [
            isHandlePlusAvailable.value ? withDirectives((openBlock(), createBlock(CanvasHandlePlus, {
              key: 0,
              "handle-classes": handleClasses$1,
              type: "secondary",
              position: "bottom",
              onMouseenter: onMouseEnter,
              onMouseleave: onMouseLeave,
              "onClick:plus": onClickAdd
            }, null, 512)), [
              [vShow, isHandlePlusVisible.value]
            ]) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const handle$2 = "_handle_3v1rt_123";
const label$1 = "_label_3v1rt_130";
const required$1 = "_required_3v1rt_143";
const style0$5 = {
  handle: handle$2,
  label: label$1,
  required: required$1
};
const cssModules$5 = {
  "$style": style0$5
};
const CanvasHandleNonMainInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__cssModules", cssModules$5]]);
const handleClasses = "source";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CanvasHandleNonMainOutput",
  setup(__props) {
    const $style = useCssModule();
    const { label: label2, isRequired } = useCanvasNodeHandle();
    const classes = computed(() => ({
      "canvas-node-handle-non-main-output": true,
      [$style.handle]: true,
      [$style.required]: isRequired.value
    }));
    return (_ctx, _cache) => {
      const _component_CanvasHandleDiamond = __unplugin_components_0;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).label)
        }, toDisplayString(unref(label2)), 3),
        createVNode(_component_CanvasHandleDiamond, { "handle-classes": handleClasses })
      ], 2);
    };
  }
});
const handle$1 = "_handle_1x1ua_123";
const label = "_label_1x1ua_130";
const required = "_required_1x1ua_142";
const plus = "_plus_1x1ua_147";
const style0$4 = {
  handle: handle$1,
  label,
  required,
  plus
};
const cssModules$4 = {
  "$style": style0$4
};
const CanvasHandleNonMainOutput = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CanvasHandleRenderer",
  props: {
    handleId: {},
    connectionsCount: {},
    isConnecting: { type: Boolean },
    position: {},
    offset: {},
    node: {},
    type: {},
    index: {},
    required: { type: Boolean },
    maxConnections: {},
    label: {},
    mode: {},
    isReadOnly: { type: Boolean },
    isValidConnection: { type: Function }
  },
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const style = useCssModule();
    const handleType = computed(
      () => props.mode === CanvasConnectionMode.Input ? "target" : "source"
    );
    const handleClasses2 = computed(() => [style.handle, style[props.type], style[props.mode]]);
    const connectionsLimitReached = computed(() => {
      return props.maxConnections && props.connectionsCount >= props.maxConnections;
    });
    const isConnectableStart = computed(() => {
      if (connectionsLimitReached.value) return false;
      return props.mode === CanvasConnectionMode.Output || props.type !== NodeConnectionTypes.Main;
    });
    const isConnectableEnd = computed(() => {
      if (connectionsLimitReached.value) return false;
      return props.mode === CanvasConnectionMode.Input || props.type !== NodeConnectionTypes.Main;
    });
    const isConnected = computed(() => props.connectionsCount > 0);
    const { runDataOutputMap } = useCanvasNode();
    const runData2 = computed(
      () => props.mode === CanvasConnectionMode.Output ? runDataOutputMap.value[props.type]?.[props.index] : void 0
    );
    const renderTypeClasses = computed(() => [style.renderType, style[props.position]]);
    const RenderType = () => {
      let Component;
      if (props.mode === CanvasConnectionMode.Output) {
        if (props.type === NodeConnectionTypes.Main) {
          Component = CanvasHandleMainOutput;
        } else {
          Component = CanvasHandleNonMainOutput;
        }
      } else {
        if (props.type === NodeConnectionTypes.Main) {
          Component = CanvasHandleMainInput;
        } else {
          Component = CanvasHandleNonMainInput;
        }
      }
      return Component ? h(Component) : null;
    };
    function onAdd2() {
      emit("add", props.handleId);
    }
    const label2 = toRef(props, "label");
    const isConnecting = toRef(props, "isConnecting");
    const isReadOnly = toRef(props, "isReadOnly");
    const mode = toRef(props, "mode");
    const type = toRef(props, "type");
    const index = toRef(props, "index");
    const isRequired = toRef(props, "required");
    const maxConnections = toRef(props, "maxConnections");
    provide(CanvasNodeHandleKey, {
      label: label2,
      mode,
      type,
      index,
      runData: runData2,
      isRequired,
      isConnected,
      isConnecting,
      isReadOnly,
      maxConnections
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$f$1), mergeProps(_ctx.$attrs, {
        id: _ctx.handleId,
        class: handleClasses2.value,
        type: handleType.value,
        position: _ctx.position,
        style: _ctx.offset,
        "connectable-start": isConnectableStart.value,
        "connectable-end": isConnectableEnd.value,
        "is-valid-connection": _ctx.isValidConnection
      }), {
        default: withCtx(() => [
          createVNode(RenderType, {
            class: normalizeClass(renderTypeClasses.value),
            "is-connected": isConnected.value,
            "max-connections": maxConnections.value,
            style: normalizeStyle(_ctx.offset),
            label: label2.value,
            onAdd: onAdd2
          }, null, 8, ["class", "is-connected", "max-connections", "style", "label"])
        ]),
        _: 1
      }, 16, ["id", "class", "type", "position", "style", "connectable-start", "connectable-end", "is-valid-connection"]);
    };
  }
});
const handle = "_handle_5ceyz_123";
const inputs = "_inputs_5ceyz_136";
const main = "_main_5ceyz_136";
const renderType = "_renderType_5ceyz_140";
const top = "_top_5ceyz_140";
const right = "_right_5ceyz_144";
const left = "_left_5ceyz_148";
const bottom = "_bottom_5ceyz_152";
const style0$3 = {
  handle,
  inputs,
  main,
  renderType,
  top,
  right,
  left,
  bottom
};
const cssModules$3 = {
  "$style": style0$3
};
const CanvasHandleRenderer = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CanvasNodeTrigger",
  props: {
    name: {},
    type: {},
    hovered: { type: Boolean },
    disabled: { type: Boolean },
    readOnly: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const style = useCssModule();
    const containerClass = computed(() => ({
      [__props.class ?? ""]: true,
      [style.container]: true,
      [style.interactive]: !__props.disabled && !__props.readOnly,
      [style.hovered]: !!__props.hovered
    }));
    const router = useRouter();
    const i18n = useI18n();
    const workflowsStore = useWorkflowsStore();
    const { runEntireWorkflow } = useRunWorkflow({ router });
    const { toggleChatOpen } = useCanvasOperations({ router });
    const isChatOpen = computed(() => workflowsStore.logsPanelState !== LOGS_PANEL_STATE.CLOSED);
    const isExecuting = computed(() => workflowsStore.isWorkflowRunning);
    const testId = computed(() => `execute-workflow-button-${__props.name}`);
    return (_ctx, _cache) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      const _component_N8nButton = resolveComponent("N8nButton");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClass.value),
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["stop", "prevent"])),
        onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["stop", "prevent"]))
      }, [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.bolt)
          }, [
            createVNode(_component_FontAwesomeIcon, {
              icon: "bolt",
              size: "lg"
            })
          ], 2),
          !_ctx.readOnly ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.type === unref(CHAT_TRIGGER_NODE_TYPE) ? (openBlock(), createBlock(_component_N8nButton, {
              key: 0,
              type: isChatOpen.value ? "secondary" : "primary",
              size: "large",
              disabled: isExecuting.value,
              "data-test-id": testId.value,
              label: isChatOpen.value ? unref(i18n).baseText("chat.hide") : unref(i18n).baseText("chat.open"),
              onClickCapture: _cache[0] || (_cache[0] = ($event) => unref(toggleChatOpen)("node"))
            }, null, 8, ["type", "disabled", "data-test-id", "label"])) : (openBlock(), createBlock(_component_N8nButton, {
              key: 1,
              type: "primary",
              size: "large",
              disabled: isExecuting.value,
              "data-test-id": testId.value,
              label: unref(i18n).baseText("nodeView.runButtonText.executeWorkflow"),
              onClickCapture: _cache[1] || (_cache[1] = ($event) => unref(runEntireWorkflow)("node", _ctx.name))
            }, null, 8, ["disabled", "data-test-id", "label"]))
          ], 64)) : createCommentVNode("", true)
        ])
      ], 34);
    };
  }
});
const container = "_container_ze6b9_123";
const interactive = "_interactive_ze6b9_144";
const hovered = "_hovered_ze6b9_144";
const bolt = "_bolt_ze6b9_150";
const style0$2 = {
  container,
  interactive,
  hovered,
  bolt
};
const cssModules$2 = {
  "$style": style0$2
};
const CanvasNodeTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1 = ["data-test-id", "data-node-name", "data-node-type"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CanvasNode",
  props: {
    id: {},
    type: {},
    selected: { type: Boolean },
    connectable: { type: [Boolean, Number, String, Function] },
    position: {},
    dimensions: {},
    label: {},
    isValidTargetPos: { type: Function },
    isValidSourcePos: { type: Function },
    parent: {},
    parentNodeId: {},
    dragging: { type: Boolean },
    resizing: { type: Boolean },
    zIndex: {},
    targetPosition: {},
    sourcePosition: {},
    dragHandle: {},
    data: {},
    events: {},
    readOnly: { type: Boolean },
    eventBus: {},
    hovered: { type: Boolean },
    nearbyHovered: { type: Boolean }
  },
  emits: ["add", "delete", "run", "select", "toggle", "activate", "deactivate", "open:contextmenu", "update", "update:inputs", "update:outputs", "move"],
  setup(__props, { emit: __emit }) {
    const slots = useSlots();
    const emit = __emit;
    const style = useCssModule();
    const props = __props;
    const contextMenu2 = useContextMenu();
    const { connectingHandle } = useCanvas();
    const nodeClasses = ref([]);
    const inputs2 = computed(() => props.data.inputs);
    const outputs = computed(() => props.data.outputs);
    const connections = computed(() => props.data.connections);
    const {
      mainInputs,
      nonMainInputs,
      requiredNonMainInputs,
      mainOutputs,
      nonMainOutputs,
      isValidConnection
    } = useNodeConnections({
      inputs: inputs2,
      outputs,
      connections
    });
    const isDisabled = computed(() => props.data.disabled);
    const classes = computed(() => ({
      [style.canvasNode]: true,
      [style.showToolbar]: showToolbar2.value,
      hovered: props.hovered,
      selected: props.selected,
      ...Object.fromEntries([...nodeClasses.value].map((c) => [c, true]))
    }));
    const renderType2 = computed(() => props.data.render.type);
    const dataTestId = computed(
      () => [CanvasNodeRenderType.StickyNote, CanvasNodeRenderType.AddNodes].includes(renderType2.value) ? void 0 : "canvas-node"
    );
    const canvasNodeEventBus = ref(createEventBus());
    function emitCanvasNodeEvent(event) {
      if (event.ids.includes(props.id) && canvasNodeEventBus.value) {
        canvasNodeEventBus.value.emit(event.action, event.payload);
      }
    }
    const nonMainInputsWithSpacer = computed(
      () => insertSpacersBetweenEndpoints(nonMainInputs.value, requiredNonMainInputs.value.length)
    );
    const mappedInputs = computed(() => {
      return [
        ...mainInputs.value.map(mainInputsMappingFn),
        ...nonMainInputsWithSpacer.value.map(nonMainInputsMappingFn)
      ].filter((endpoint) => !!endpoint);
    });
    const mappedOutputs = computed(() => {
      return [
        ...mainOutputs.value.map(mainOutputsMappingFn),
        ...nonMainOutputs.value.map(nonMainOutputsMappingFn)
      ].filter((endpoint) => !!endpoint);
    });
    const createEndpointMappingFn = ({
      mode,
      position: position2,
      offsetAxis
    }) => (endpoint, index, endpoints) => {
      if (!endpoint) {
        return;
      }
      const handleId = createCanvasConnectionHandleString({
        mode,
        type: endpoint.type,
        index: endpoint.index
      });
      const handleType = mode === CanvasConnectionMode.Input ? "target" : "source";
      const connectionsCount = connections.value[mode][endpoint.type]?.[endpoint.index]?.length ?? 0;
      const isConnecting = connectingHandle.value?.nodeId === props.id && connectingHandle.value?.handleType === handleType && connectingHandle.value?.handleId === handleId;
      return {
        ...endpoint,
        handleId,
        connectionsCount,
        isConnecting,
        position: position2,
        offset: {
          [offsetAxis]: `${100 / (endpoints.length + 1) * (index + 1)}%`
        }
      };
    };
    const mainInputsMappingFn = createEndpointMappingFn({
      mode: CanvasConnectionMode.Input,
      position: Position.Left,
      offsetAxis: "top"
    });
    const nonMainInputsMappingFn = createEndpointMappingFn({
      mode: CanvasConnectionMode.Input,
      position: Position.Bottom,
      offsetAxis: "left"
    });
    const mainOutputsMappingFn = createEndpointMappingFn({
      mode: CanvasConnectionMode.Output,
      position: Position.Right,
      offsetAxis: "top"
    });
    const nonMainOutputsMappingFn = createEndpointMappingFn({
      mode: CanvasConnectionMode.Output,
      position: Position.Top,
      offsetAxis: "left"
    });
    function onAdd2(handle2) {
      emit("add", props.id, handle2);
    }
    function onDelete() {
      emit("delete", props.id);
    }
    function onRun() {
      emit("run", props.id);
    }
    function onDisabledToggle() {
      emit("toggle", props.id);
    }
    function onActivate(id22, event) {
      emit("activate", id22, event);
    }
    function onDeactivate() {
      emit("deactivate", props.id);
    }
    function onOpenContextMenuFromToolbar(event) {
      emit("open:contextmenu", props.id, event, "node-button");
    }
    function onOpenContextMenuFromNode(event) {
      emit("open:contextmenu", props.id, event, "node-right-click");
    }
    function onUpdate(parameters) {
      emit("update", props.id, parameters);
    }
    function onMove(position2) {
      emit("move", props.id, position2);
    }
    function onUpdateClass({ className, add = true }) {
      nodeClasses.value = add ? [.../* @__PURE__ */ new Set([...nodeClasses.value, className])] : nodeClasses.value.filter((c) => c !== className);
    }
    const id2 = toRef(props, "id");
    const data = toRef(props, "data");
    const label2 = toRef(props, "label");
    const selected2 = toRef(props, "selected");
    const readOnly = toRef(props, "readOnly");
    provide(CanvasNodeKey, {
      id: id2,
      data,
      label: label2,
      selected: selected2,
      readOnly,
      eventBus: canvasNodeEventBus
    });
    const hasToolbar = computed(
      () => ![CanvasNodeRenderType.AddNodes, CanvasNodeRenderType.AIPrompt].includes(renderType2.value)
    );
    const showToolbar2 = computed(() => {
      const target2 = contextMenu2.target.value;
      return contextMenu2.isOpen && target2?.source === "node-button" && target2.nodeId === id2.value;
    });
    watch(
      () => props.selected,
      (value) => {
        emit("select", props.id, value);
      }
    );
    watch(inputs2, (newValue, oldValue) => {
      if (!isEqual(newValue, oldValue)) {
        emit("update:inputs", props.id);
      }
    });
    watch(outputs, (newValue, oldValue) => {
      if (!isEqual(newValue, oldValue)) {
        emit("update:outputs", props.id);
      }
    });
    onMounted(() => {
      props.eventBus?.on("nodes:action", emitCanvasNodeEvent);
      canvasNodeEventBus.value?.on("update:node:class", onUpdateClass);
    });
    onBeforeUnmount(() => {
      props.eventBus?.off("nodes:action", emitCanvasNodeEvent);
      canvasNodeEventBus.value?.off("update:node:class", onUpdateClass);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value),
        "data-test-id": dataTestId.value,
        "data-node-name": data.value.name,
        "data-node-type": data.value.type
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(mappedOutputs.value, (source) => {
          return openBlock(), createBlock(CanvasHandleRenderer, mergeProps({
            key: `${source.handleId}(${source.index + 1}/${mappedOutputs.value.length})`,
            ref_for: true
          }, source, {
            mode: unref(CanvasConnectionMode).Output,
            "is-read-only": readOnly.value,
            "is-valid-connection": unref(isValidConnection),
            "data-node-name": data.value.name,
            "data-test-id": "canvas-node-output-handle",
            "data-index": source.index,
            "data-connection-type": source.type,
            onAdd: onAdd2
          }), null, 16, ["mode", "is-read-only", "is-valid-connection", "data-node-name", "data-index", "data-connection-type"]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(mappedInputs.value, (target2) => {
          return openBlock(), createBlock(CanvasHandleRenderer, mergeProps({
            key: `${target2.handleId}(${target2.index + 1}/${mappedInputs.value.length})`,
            ref_for: true
          }, target2, {
            mode: unref(CanvasConnectionMode).Input,
            "is-read-only": readOnly.value,
            "is-valid-connection": unref(isValidConnection),
            "data-test-id": "canvas-node-input-handle",
            "data-index": target2.index,
            "data-connection-type": target2.type,
            "data-node-name": data.value.name,
            onAdd: onAdd2
          }), null, 16, ["mode", "is-read-only", "is-valid-connection", "data-index", "data-connection-type", "data-node-name"]);
        }), 128)),
        slots.toolbar ? renderSlot(_ctx.$slots, "toolbar", {
          key: 0,
          inputs: unref(mainInputs),
          outputs: unref(mainOutputs),
          data: data.value
        }) : hasToolbar.value ? (openBlock(), createBlock(CanvasNodeToolbar, {
          key: 1,
          "data-test-id": "canvas-node-toolbar",
          "read-only": readOnly.value,
          class: normalizeClass(_ctx.$style.canvasNodeToolbar),
          onDelete,
          onToggle: onDisabledToggle,
          onRun,
          onUpdate,
          "onOpen:contextmenu": onOpenContextMenuFromToolbar
        }, null, 8, ["read-only", "class"])) : createCommentVNode("", true),
        createVNode(_sfc_main$c, {
          onActivate,
          onDeactivate,
          onMove,
          onUpdate,
          "onOpen:contextmenu": onOpenContextMenuFromNode,
          onDelete
        }),
        props.data.render.type === unref(CanvasNodeRenderType).Default && props.data.render.options.trigger ? (openBlock(), createBlock(CanvasNodeTrigger, {
          key: 2,
          name: data.value.name,
          type: data.value.type,
          hovered: _ctx.nearbyHovered,
          disabled: isDisabled.value,
          "read-only": readOnly.value,
          class: normalizeClass(_ctx.$style.trigger)
        }, null, 8, ["name", "type", "hovered", "disabled", "read-only", "class"])) : createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
const canvasNode = "_canvasNode_1ftik_123";
const trigger = "_trigger_1ftik_123";
const canvasNodeToolbar = "_canvasNodeToolbar_1ftik_123";
const showToolbar = "_showToolbar_1ftik_123";
const style0$1 = {
  canvasNode,
  trigger,
  canvasNodeToolbar,
  showToolbar
};
const cssModules$1 = {
  "$style": style0$1
};
const CanvasNode = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__cssModules", cssModules$1]]);
function useViewportAutoAdjust(viewportRef, viewport, setViewport) {
  const settingsStore = useSettingsStore();
  if (settingsStore.isNewLogsEnabled) {
    const canvasRect = ref();
    watch(
      viewportRef,
      (vp, _, onCleanUp) => {
        if (!vp) {
          return;
        }
        const resizeObserver = new ResizeObserver((entries) => {
          const entry = entries[0];
          if (entry) {
            canvasRect.value = entry.contentRect;
          }
        });
        canvasRect.value = {
          x: vp.offsetLeft,
          y: vp.offsetTop,
          width: vp.offsetWidth,
          height: vp.offsetHeight
        };
        resizeObserver.observe(vp);
        onCleanUp(() => resizeObserver.disconnect());
      },
      { immediate: true }
    );
    watch(canvasRect, async (newRect, oldRect) => {
      if (!newRect || !oldRect) {
        return;
      }
      await setViewport({
        x: viewport.value.x + (newRect.width - oldRect.width) / 2,
        y: viewport.value.y + (newRect.height - oldRect.height) / 2,
        zoom: viewport.value.zoom
      });
    });
  }
}
const renameKeyCode = " ";
const defaultZoom = 1;
const minimapVisibilityDelay = 1e3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Canvas",
  props: {
    id: { default: "canvas" },
    nodes: { default: () => [] },
    connections: { default: () => [] },
    controlsPosition: { default: PanelPosition.BottomLeft },
    eventBus: { default: () => createEventBus() },
    readOnly: { type: Boolean, default: false },
    executing: { type: Boolean, default: false },
    keyBindings: { type: Boolean, default: true },
    loading: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:node:position", "update:nodes:position", "update:node:activated", "update:node:deactivated", "update:node:enabled", "update:node:selected", "update:node:name", "update:node:parameters", "update:node:inputs", "update:node:outputs", "click:node", "click:node:add", "run:node", "delete:node", "create:node", "create:sticky", "delete:nodes", "update:nodes:enabled", "copy:nodes", "duplicate:nodes", "update:nodes:pin", "cut:nodes", "delete:connection", "create:connection:start", "create:connection", "create:connection:end", "create:connection:cancelled", "click:connection:add", "click:pane", "run:workflow", "save:workflow", "create:workflow", "drag-and-drop", "tidy-up", "open:sub-workflow"],
  setup(__props, { emit: __emit }) {
    const $style = useCssModule();
    const emit = __emit;
    const props = __props;
    const { isMobileDevice, controlKeyCode } = useDeviceSupport();
    const vueFlow = useVueFlow({ id: props.id, deleteKeyCode: null });
    const {
      getSelectedNodes: selectedNodes,
      addSelectedNodes,
      removeSelectedNodes,
      viewportRef,
      fitView,
      zoomIn,
      zoomOut,
      zoomTo,
      setInteractive,
      elementsSelectable,
      project,
      nodes: graphNodes,
      onPaneReady,
      onNodesInitialized,
      findNode,
      viewport,
      nodesSelectionActive,
      setViewport,
      onEdgeMouseLeave,
      onEdgeMouseEnter,
      onEdgeMouseMove,
      onNodeMouseEnter,
      onNodeMouseLeave
    } = vueFlow;
    const {
      getIncomingNodes,
      getOutgoingNodes,
      getSiblingNodes,
      getDownstreamNodes,
      getUpstreamNodes
    } = useCanvasTraversal(vueFlow);
    const { layout } = useCanvasLayout({ id: props.id });
    const isPaneReady = ref(false);
    const classes = computed(() => ({
      [$style.canvas]: true,
      [$style.ready]: !props.loading && isPaneReady.value
    }));
    const panningKeyCode = ref(isMobileDevice ? true : [" ", controlKeyCode]);
    const panningMouseButton = ref(isMobileDevice ? true : [1]);
    const selectionKeyCode = ref(isMobileDevice ? "Shift" : true);
    function switchToPanningMode() {
      selectionKeyCode.value = null;
      panningMouseButton.value = [0, 1];
    }
    function switchToSelectionMode() {
      selectionKeyCode.value = true;
      panningMouseButton.value = [1];
    }
    onKeyDown(panningKeyCode.value, switchToPanningMode, {
      dedupe: true
    });
    onKeyUp(panningKeyCode.value, switchToSelectionMode);
    useShortKeyPress(
      renameKeyCode,
      () => {
        if (lastSelectedNode.value && lastSelectedNode.value.id !== CanvasNodeRenderType.AIPrompt) {
          emit("update:node:name", lastSelectedNode.value.id);
        }
      },
      {
        disabled: toRef(props, "readOnly")
      }
    );
    const disableKeyBindings = computed(() => !props.keyBindings);
    function selectLeftNode(id2) {
      const incomingNodes = getIncomingNodes(id2);
      const previousNode = incomingNodes[0];
      if (previousNode) {
        onSelectNodes({ ids: [previousNode.id] });
      }
    }
    function selectRightNode(id2) {
      const outgoingNodes = getOutgoingNodes(id2);
      const nextNode = outgoingNodes[0];
      if (nextNode) {
        onSelectNodes({ ids: [nextNode.id] });
      }
    }
    function selectLowerSiblingNode(id2) {
      const siblingNodes = getSiblingNodes(id2);
      const index = siblingNodes.findIndex((n) => n.id === id2);
      const nextNode = siblingNodes[index + 1] ?? siblingNodes[0];
      if (nextNode) {
        onSelectNodes({
          ids: [nextNode.id]
        });
      }
    }
    function selectUpperSiblingNode(id2) {
      const siblingNodes = getSiblingNodes(id2);
      const index = siblingNodes.findIndex((n) => n.id === id2);
      const previousNode = siblingNodes[index - 1] ?? siblingNodes[siblingNodes.length - 1];
      if (previousNode) {
        onSelectNodes({
          ids: [previousNode.id]
        });
      }
    }
    function selectDownstreamNodes(id2) {
      const downstreamNodes = getDownstreamNodes(id2);
      onSelectNodes({ ids: [...downstreamNodes.map((node2) => node2.id), id2] });
    }
    function selectUpstreamNodes(id2) {
      const upstreamNodes = getUpstreamNodes(id2);
      onSelectNodes({ ids: [...upstreamNodes.map((node2) => node2.id), id2] });
    }
    const keyMap = computed(() => {
      const readOnlyKeymap = {
        ctrl_shift_o: emitWithLastSelectedNode((id2) => emit("open:sub-workflow", id2)),
        ctrl_c: emitWithSelectedNodes((ids) => emit("copy:nodes", ids)),
        enter: emitWithLastSelectedNode((id2) => onSetNodeActivated(id2)),
        ctrl_a: () => addSelectedNodes(graphNodes.value),
        // Support both key and code for zooming in and out
        "shift_+|+|=|shift_Equal|Equal": async () => await onZoomIn(),
        "shift+_|-|_|shift_Minus|Minus": async () => await onZoomOut(),
        0: async () => await onResetZoom(),
        1: async () => await onFitView(),
        ArrowUp: emitWithLastSelectedNode(selectUpperSiblingNode),
        ArrowDown: emitWithLastSelectedNode(selectLowerSiblingNode),
        ArrowLeft: emitWithLastSelectedNode(selectLeftNode),
        ArrowRight: emitWithLastSelectedNode(selectRightNode),
        shift_ArrowLeft: emitWithLastSelectedNode(selectUpstreamNodes),
        shift_ArrowRight: emitWithLastSelectedNode(selectDownstreamNodes)
      };
      if (props.readOnly) return readOnlyKeymap;
      const fullKeymap = {
        ...readOnlyKeymap,
        ctrl_x: emitWithSelectedNodes((ids) => emit("cut:nodes", ids)),
        "delete|backspace": emitWithSelectedNodes((ids) => emit("delete:nodes", ids)),
        ctrl_d: emitWithSelectedNodes((ids) => emit("duplicate:nodes", ids)),
        d: emitWithSelectedNodes((ids) => emit("update:nodes:enabled", ids)),
        p: emitWithSelectedNodes((ids) => emit("update:nodes:pin", ids, "keyboard-shortcut")),
        f2: emitWithLastSelectedNode((id2) => emit("update:node:name", id2)),
        tab: () => emit("create:node", "tab"),
        shift_s: () => emit("create:sticky"),
        ctrl_alt_n: () => emit("create:workflow"),
        ctrl_enter: () => emit("run:workflow"),
        ctrl_s: () => emit("save:workflow"),
        shift_alt_t: async () => await onTidyUp({ source: "keyboard-shortcut" })
      };
      return fullKeymap;
    });
    useKeybindings(keyMap, { disabled: disableKeyBindings });
    const hasSelection = computed(() => selectedNodes.value.length > 0);
    const selectedNodeIds = computed(() => selectedNodes.value.map((node2) => node2.id));
    const lastSelectedNode = ref();
    const triggerNodes = computed(
      () => props.nodes.filter(
        (node2) => node2.data?.render.type === CanvasNodeRenderType.Default && node2.data.render.options.trigger
      )
    );
    const hoveredTriggerNode = useCanvasNodeHover(triggerNodes, vueFlow, (nodeRect) => ({
      x: nodeRect.x - nodeRect.width * 2,
      // should cover the width of trigger button
      y: nodeRect.y - nodeRect.height,
      width: nodeRect.width * 4,
      height: nodeRect.height * 3
    }));
    watch(selectedNodes, (nodes) => {
      if (!lastSelectedNode.value || !nodes.find((node2) => node2.id === lastSelectedNode.value?.id)) {
        lastSelectedNode.value = nodes[nodes.length - 1];
      }
    });
    function onClickNodeAdd(id2, handle2) {
      emit("click:node:add", id2, handle2);
    }
    function onUpdateNodesPosition(events) {
      emit("update:nodes:position", events);
    }
    function onUpdateNodePosition(id2, position2) {
      emit("update:node:position", id2, position2);
    }
    function onNodeDragStop(event) {
      onUpdateNodesPosition(event.nodes.map(({ id: id2, position: position2 }) => ({ id: id2, position: position2 })));
    }
    function onNodeClick({ event, node: node2 }) {
      emit("click:node", node2.id);
      if (event.ctrlKey || event.metaKey || selectedNodes.value.length < 2) {
        return;
      }
      onSelectNodes({ ids: [node2.id] });
    }
    function onSelectionDragStop(event) {
      onUpdateNodesPosition(event.nodes.map(({ id: id2, position: position2 }) => ({ id: id2, position: position2 })));
    }
    function onSelectionEnd() {
      if (selectedNodes.value.length === 1) {
        nodesSelectionActive.value = false;
      }
    }
    function onSetNodeActivated(id2, event) {
      props.eventBus.emit("nodes:action", { ids: [id2], action: "update:node:activated" });
      emit("update:node:activated", id2, event);
    }
    function onSetNodeDeactivated(id2) {
      emit("update:node:deactivated", id2);
    }
    function clearSelectedNodes() {
      removeSelectedNodes(selectedNodes.value);
    }
    function onSelectNode() {
      emit("update:node:selected", lastSelectedNode.value?.id);
    }
    function onSelectNodes({ ids }) {
      clearSelectedNodes();
      addSelectedNodes(ids.map(findNode).filter(isPresent));
    }
    function onToggleNodeEnabled(id2) {
      emit("update:node:enabled", id2);
    }
    function onDeleteNode(id2) {
      emit("delete:node", id2);
    }
    function onUpdateNodeParameters(id2, parameters) {
      emit("update:node:parameters", id2, parameters);
    }
    function onUpdateNodeInputs(id2) {
      emit("update:node:inputs", id2);
    }
    function onUpdateNodeOutputs(id2) {
      emit("update:node:outputs", id2);
    }
    const connectionCreated = ref(false);
    const connectingHandle = ref();
    const connectedHandle = ref();
    function onConnectStart(handle2) {
      emit("create:connection:start", handle2);
      connectingHandle.value = handle2;
      connectionCreated.value = false;
    }
    function onConnect(connection) {
      emit("create:connection", connection);
      connectedHandle.value = connection;
      connectionCreated.value = true;
    }
    function onConnectEnd(event) {
      if (connectedHandle.value) {
        emit("create:connection:end", connectedHandle.value, event);
      } else if (connectingHandle.value) {
        emit("create:connection:cancelled", connectingHandle.value, getProjectedPosition(event), event);
      }
      connectedHandle.value = void 0;
      connectingHandle.value = void 0;
    }
    function onDeleteConnection(connection) {
      emit("delete:connection", connection);
    }
    function onClickConnectionAdd(connection) {
      emit("click:connection:add", connection);
    }
    const arrowHeadMarkerId = ref("custom-arrow-head");
    const edgesHoveredById = ref({});
    const edgesBringToFrontById = ref({});
    onEdgeMouseEnter(({ edge: edge2 }) => {
      edgesBringToFrontById.value = { [edge2.id]: true };
      edgesHoveredById.value = { [edge2.id]: true };
    });
    onEdgeMouseMove(
      useThrottleFn(({ edge: edge2, event }) => {
        const type = edge2.data.source.type;
        if (type !== NodeConnectionTypes.AiTool) {
          return;
        }
        if (!edge2.data.maxConnections || edge2.data.maxConnections > 1) {
          const projectedPosition = getProjectedPosition(event);
          const yDiff = projectedPosition.y - edge2.targetY;
          if (yDiff < 4 * GRID_SIZE) {
            edgesBringToFrontById.value = { [edge2.id]: false };
          } else {
            edgesBringToFrontById.value = { [edge2.id]: true };
          }
        }
      }, 100)
    );
    onEdgeMouseLeave(({ edge: edge2 }) => {
      edgesBringToFrontById.value = { [edge2.id]: false };
      edgesHoveredById.value = { [edge2.id]: false };
    });
    function onUpdateEdgeLabelHovered(id2, hovered2) {
      edgesBringToFrontById.value = { [id2]: true };
      edgesHoveredById.value[id2] = hovered2;
    }
    const nodesHoveredById = ref({});
    onNodeMouseEnter(({ node: node2 }) => {
      nodesHoveredById.value = { [node2.id]: true };
    });
    onNodeMouseLeave(({ node: node2 }) => {
      nodesHoveredById.value = { [node2.id]: false };
    });
    function onRunNode(id2) {
      emit("run:node", id2);
    }
    function emitWithSelectedNodes(emitFn) {
      return () => {
        if (hasSelection.value) {
          emitFn(selectedNodeIds.value);
        }
      };
    }
    function emitWithLastSelectedNode(emitFn) {
      return () => {
        if (lastSelectedNode.value) {
          emitFn(lastSelectedNode.value.id);
        }
      };
    }
    const isPaneMoving = ref(false);
    useViewportAutoAdjust(viewportRef, viewport, setViewport);
    function getProjectedPosition(event) {
      const bounds = viewportRef.value?.getBoundingClientRect() ?? { left: 0, top: 0 };
      const offsetX = event?.clientX ?? 0;
      const offsetY = event?.clientY ?? 0;
      return project({
        x: offsetX - bounds.left,
        y: offsetY - bounds.top
      });
    }
    function onClickPane(event) {
      emit("click:pane", getProjectedPosition(event));
    }
    async function onFitView() {
      await fitView({ maxZoom: defaultZoom, padding: 0.2 });
    }
    async function onZoomTo(zoomLevel) {
      await zoomTo(zoomLevel);
    }
    async function onZoomIn() {
      await zoomIn();
    }
    async function onZoomOut() {
      await zoomOut();
    }
    async function onResetZoom() {
      await onZoomTo(defaultZoom);
    }
    function setReadonly(value) {
      setInteractive(!value);
      elementsSelectable.value = true;
    }
    function onPaneMoveStart() {
      isPaneMoving.value = true;
    }
    function onPaneMoveEnd() {
      isPaneMoving.value = false;
    }
    const nodeDataById = computed(() => {
      return props.nodes.reduce((acc, node2) => {
        acc[node2.id] = node2.data;
        return acc;
      }, {});
    });
    const contextMenu2 = useContextMenu();
    function onOpenContextMenu(event, target2) {
      contextMenu2.open(event, {
        source: "canvas",
        nodeIds: selectedNodeIds.value,
        ...target2
      });
    }
    function onOpenSelectionContextMenu({ event }) {
      onOpenContextMenu(event);
    }
    function onOpenNodeContextMenu(id2, event, source) {
      if (source === "node-button") {
        contextMenu2.open(event, { source, nodeId: id2 });
      } else if (selectedNodeIds.value.length > 1 && selectedNodeIds.value.includes(id2)) {
        onOpenContextMenu(event, { nodeId: id2 });
      } else {
        onSelectNodes({ ids: [id2] });
        contextMenu2.open(event, { source, nodeId: id2 });
      }
    }
    async function onContextMenuAction(action, nodeIds) {
      switch (action) {
        case "add_node":
          return emit("create:node", "context_menu");
        case "add_sticky":
          return emit("create:sticky");
        case "copy":
          return emit("copy:nodes", nodeIds);
        case "delete":
          return emit("delete:nodes", nodeIds);
        case "select_all":
          return addSelectedNodes(graphNodes.value);
        case "deselect_all":
          return clearSelectedNodes();
        case "duplicate":
          return emit("duplicate:nodes", nodeIds);
        case "toggle_pin":
          return emit("update:nodes:pin", nodeIds, "context-menu");
        case "execute":
          return emit("run:node", nodeIds[0]);
        case "toggle_activation":
          return emit("update:nodes:enabled", nodeIds);
        case "open":
          return onSetNodeActivated(nodeIds[0]);
        case "rename":
          return emit("update:node:name", nodeIds[0]);
        case "change_color":
          return props.eventBus.emit("nodes:action", { ids: nodeIds, action: "update:sticky:color" });
        case "tidy_up":
          return await onTidyUp({ source: "context-menu" });
        case "open_sub_workflow": {
          return emit("open:sub-workflow", nodeIds[0]);
        }
      }
    }
    async function onTidyUp(payload) {
      const applyOnSelection = selectedNodes.value.length > 1;
      const target2 = applyOnSelection ? "selection" : "all";
      const result = layout(target2);
      emit("tidy-up", { result, target: target2, source: payload.source });
      if (!applyOnSelection) {
        await nextTick();
        await onFitView();
      }
    }
    function onDragOver(event) {
      event.preventDefault();
    }
    function onDrop(event) {
      const position2 = getProjectedPosition(event);
      emit("drag-and-drop", position2, event);
    }
    const minimapHideTimeout = ref(null);
    const isMinimapVisible = ref(false);
    function minimapNodeClassnameFn(node2) {
      return `minimap-node-${node2.data?.render.type.replace(/\./g, "-") ?? "default"}`;
    }
    watch(isPaneMoving, (value) => {
      if (value) {
        showMinimap();
      } else {
        hideMinimap();
      }
    });
    function showMinimap() {
      if (minimapHideTimeout.value) {
        clearTimeout(minimapHideTimeout.value);
        minimapHideTimeout.value = null;
      }
      isMinimapVisible.value = true;
    }
    function hideMinimap() {
      minimapHideTimeout.value = setTimeout(() => {
        isMinimapVisible.value = false;
      }, minimapVisibilityDelay);
    }
    function onMinimapMouseEnter() {
      showMinimap();
    }
    function onMinimapMouseLeave() {
      hideMinimap();
    }
    function onWindowBlur() {
      switchToSelectionMode();
    }
    const initialized = ref(false);
    onMounted(() => {
      props.eventBus.on("fitView", onFitView);
      props.eventBus.on("nodes:select", onSelectNodes);
      props.eventBus.on("tidyUp", onTidyUp);
      window.addEventListener("blur", onWindowBlur);
    });
    onUnmounted(() => {
      props.eventBus.off("fitView", onFitView);
      props.eventBus.off("nodes:select", onSelectNodes);
      props.eventBus.off("tidyUp", onTidyUp);
      window.removeEventListener("blur", onWindowBlur);
    });
    onPaneReady(async () => {
      await onFitView();
      isPaneReady.value = true;
    });
    onNodesInitialized(() => {
      initialized.value = true;
    });
    watch(() => props.readOnly, setReadonly, {
      immediate: true
    });
    const isExecuting = toRef(props, "executing");
    provide(CanvasKey, {
      connectingHandle,
      isExecuting,
      initialized,
      viewport
    });
    return (_ctx, _cache) => {
      const _component_CanvasConnectionLine = __unplugin_components_0$5;
      const _component_CanvasControlButtons = __unplugin_components_1;
      return openBlock(), createBlock(unref(_sfc_main$1$4), {
        id: _ctx.id,
        nodes: _ctx.nodes,
        edges: _ctx.connections,
        class: normalizeClass(classes.value),
        "apply-changes": false,
        "connection-line-options": { markerEnd: unref(MarkerType).ArrowClosed },
        "connection-radius": 60,
        "pan-on-drag": panningMouseButton.value,
        "pan-on-scroll": "",
        "snap-to-grid": "",
        "snap-grid": [unref(GRID_SIZE), unref(GRID_SIZE)],
        "min-zoom": 0,
        "max-zoom": 4,
        "selection-key-code": selectionKeyCode.value,
        "zoom-activation-key-code": panningKeyCode.value,
        "pan-activation-key-code": panningKeyCode.value,
        "disable-keyboard-a11y": true,
        "data-test-id": "canvas",
        onConnectStart,
        onConnect,
        onConnectEnd,
        onPaneClick: onClickPane,
        onPaneContextMenu: onOpenContextMenu,
        onMoveStart: onPaneMoveStart,
        onMoveEnd: onPaneMoveEnd,
        onNodeDragStop,
        onNodeClick,
        onSelectionDragStop,
        onSelectionEnd,
        onSelectionContextMenu: onOpenSelectionContextMenu,
        onDragover: onDragOver,
        onDrop
      }, {
        "node-canvas-node": withCtx((nodeProps) => [
          renderSlot(_ctx.$slots, "node", normalizeProps(guardReactiveProps({ nodeProps })), () => [
            createVNode(CanvasNode, mergeProps(nodeProps, {
              data: nodeDataById.value[nodeProps.id],
              "read-only": _ctx.readOnly,
              "event-bus": _ctx.eventBus,
              hovered: nodesHoveredById.value[nodeProps.id],
              "nearby-hovered": nodeProps.id === unref(hoveredTriggerNode).id.value,
              onDelete: onDeleteNode,
              onRun: onRunNode,
              onSelect: onSelectNode,
              onToggle: onToggleNodeEnabled,
              onActivate: onSetNodeActivated,
              onDeactivate: onSetNodeDeactivated,
              "onOpen:contextmenu": onOpenNodeContextMenu,
              onUpdate: onUpdateNodeParameters,
              "onUpdate:inputs": onUpdateNodeInputs,
              "onUpdate:outputs": onUpdateNodeOutputs,
              onMove: onUpdateNodePosition,
              onAdd: onClickNodeAdd
            }), createSlots({ _: 2 }, [
              _ctx.$slots.nodeToolbar ? {
                name: "toolbar",
                fn: withCtx((toolbarProps) => [
                  renderSlot(_ctx.$slots, "nodeToolbar", normalizeProps(guardReactiveProps(toolbarProps)), void 0, true)
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["data", "read-only", "event-bus", "hovered", "nearby-hovered"])
          ], true)
        ]),
        "edge-canvas-edge": withCtx((edgeProps) => [
          createVNode(Edge, mergeProps(edgeProps, {
            "marker-end": `url(#${arrowHeadMarkerId.value})`,
            "read-only": _ctx.readOnly,
            hovered: edgesHoveredById.value[edgeProps.id],
            "bring-to-front": edgesBringToFrontById.value[edgeProps.id],
            onAdd: onClickConnectionAdd,
            onDelete: onDeleteConnection,
            "onUpdate:label:hovered": ($event) => onUpdateEdgeLabelHovered(edgeProps.id, $event)
          }), null, 16, ["marker-end", "read-only", "hovered", "bring-to-front", "onUpdate:label:hovered"])
        ]),
        "connection-line": withCtx((connectionLineProps) => [
          createVNode(_component_CanvasConnectionLine, normalizeProps(guardReactiveProps(connectionLineProps)), null, 16)
        ]),
        default: withCtx(() => [
          createVNode(_sfc_main$p, { id: arrowHeadMarkerId.value }, null, 8, ["id"]),
          createVNode(_sfc_main$q, {
            viewport: unref(viewport),
            striped: _ctx.readOnly
          }, null, 8, ["viewport", "striped"]),
          createVNode(Transition$2, { name: "minimap" }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(_sfc_main$t), {
                "data-test-id": "canvas-minimap",
                "aria-label": "n8n Minimap",
                height: 120,
                width: 200,
                position: unref(PanelPosition).BottomLeft,
                pannable: "",
                zoomable: "",
                "node-class-name": minimapNodeClassnameFn,
                "node-border-radius": 16,
                onMouseenter: onMinimapMouseEnter,
                onMouseleave: onMinimapMouseLeave
              }, null, 8, ["position"]), [
                [vShow, isMinimapVisible.value]
              ])
            ]),
            _: 1
          }),
          createVNode(_component_CanvasControlButtons, {
            "data-test-id": "canvas-controls",
            class: normalizeClass(unref($style).canvasControls),
            position: _ctx.controlsPosition,
            "show-interactive": false,
            zoom: unref(viewport).zoom,
            "read-only": _ctx.readOnly,
            onZoomToFit: onFitView,
            onZoomIn,
            onZoomOut,
            onResetZoom,
            onTidyUp: _cache[0] || (_cache[0] = ($event) => onTidyUp({ source: "canvas-button" }))
          }, null, 8, ["class", "position", "zoom", "read-only"]),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode(ContextMenu, { onAction: onContextMenuAction })
            ]),
            _: 1
          }))
        ]),
        _: 3
      }, 8, ["id", "nodes", "edges", "class", "connection-line-options", "pan-on-drag", "snap-grid", "selection-key-code", "zoom-activation-key-code", "pan-activation-key-code"]);
    };
  }
});
const canvas = "_canvas_1fjji_123";
const ready = "_ready_1fjji_129";
const style0 = {
  canvas,
  ready
};
const cssModules = {
  "$style": style0
};
const Canvas = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-d4a7c14c"]]);
function useCanvasMapping({
  nodes,
  connections,
  workflowObject
}) {
  const i18n = useI18n();
  const workflowsStore = useWorkflowsStore();
  const nodeTypesStore = useNodeTypesStore();
  const nodeHelpers = useNodeHelpers();
  const { dirtinessByName } = useNodeDirtiness();
  function createStickyNoteRenderType(node2) {
    return {
      type: CanvasNodeRenderType.StickyNote,
      options: {
        width: node2.parameters.width,
        height: node2.parameters.height,
        color: node2.parameters.color,
        content: node2.parameters.content
      }
    };
  }
  function createAddNodesRenderType() {
    return {
      type: CanvasNodeRenderType.AddNodes,
      options: {}
    };
  }
  function createAIPromptRenderType() {
    return {
      type: CanvasNodeRenderType.AIPrompt,
      options: {}
    };
  }
  function createDefaultNodeRenderType(node2) {
    const nodeType = nodeTypeDescriptionByNodeId.value[node2.id];
    const icon = getNodeIconSource(
      simulatedNodeTypeDescriptionByNodeId.value[node2.id] ? simulatedNodeTypeDescriptionByNodeId.value[node2.id] : nodeType
    );
    return {
      type: CanvasNodeRenderType.Default,
      options: {
        trigger: isTriggerNodeById.value[node2.id],
        configuration: nodeTypesStore.isConfigNode(workflowObject.value, node2, node2.type),
        configurable: nodeTypesStore.isConfigurableNode(workflowObject.value, node2, node2.type),
        inputs: {
          labelSize: nodeInputLabelSizeById.value[node2.id]
        },
        outputs: {
          labelSize: nodeOutputLabelSizeById.value[node2.id]
        },
        tooltip: nodeTooltipById.value[node2.id],
        dirtiness: dirtinessByName.value[node2.name],
        icon
      }
    };
  }
  const renderTypeByNodeId = computed(
    () => nodes.value.reduce((acc, node2) => {
      switch (node2.type) {
        case `${CanvasNodeRenderType.StickyNote}`:
          acc[node2.id] = createStickyNoteRenderType(node2);
          break;
        case `${CanvasNodeRenderType.AddNodes}`:
          acc[node2.id] = createAddNodesRenderType();
          break;
        case `${CanvasNodeRenderType.AIPrompt}`:
          acc[node2.id] = createAIPromptRenderType();
          break;
        default:
          acc[node2.id] = createDefaultNodeRenderType(node2);
      }
      return acc;
    }, {}) ?? {}
  );
  const nodeTypeDescriptionByNodeId = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
      return acc;
    }, {})
  );
  const isTriggerNodeById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = nodeTypesStore.isTriggerNode(node2.type);
      return acc;
    }, {})
  );
  const nodeSubtitleById = computed(() => {
    return nodes.value.reduce((acc, node2) => {
      try {
        const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node2.id];
        if (!nodeTypeDescription) {
          return acc;
        }
        const nodeSubtitle = nodeHelpers.getNodeSubtitle(node2, nodeTypeDescription, workflowObject.value) ?? "";
        if (nodeSubtitle.includes(CUSTOM_API_CALL_KEY)) {
          return acc;
        }
        acc[node2.id] = nodeSubtitle;
      } catch (e) {
      }
      return acc;
    }, {});
  });
  const nodeInputsById = computed(
    () => nodes.value.reduce((acc, node2) => {
      const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node2.id];
      const workflowObjectNode = workflowObject.value.getNode(node2.name);
      acc[node2.id] = workflowObjectNode && nodeTypeDescription ? mapLegacyEndpointsToCanvasConnectionPort(
        getNodeInputs(
          workflowObject.value,
          workflowObjectNode,
          nodeTypeDescription
        ),
        nodeTypeDescription.inputNames ?? []
      ) : [];
      return acc;
    }, {})
  );
  function getLabelSize(label2 = "") {
    if (label2.length <= 2) {
      return 0;
    } else if (label2.length <= 6) {
      return 1;
    } else {
      return 2;
    }
  }
  function getMaxNodePortsLabelSize(ports) {
    const labelSizes = ["small", "medium", "large"];
    const labelSizeIndexes = ports.reduce(
      (sizeAcc, input) => {
        if (input.type === NodeConnectionTypes.Main) {
          sizeAcc.push(getLabelSize(input.label ?? ""));
        }
        return sizeAcc;
      },
      [0]
    );
    return labelSizes[Math.max(...labelSizeIndexes)];
  }
  const nodeInputLabelSizeById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = getMaxNodePortsLabelSize(nodeInputsById.value[node2.id]);
      return acc;
    }, {})
  );
  const nodeOutputLabelSizeById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = getMaxNodePortsLabelSize(nodeOutputsById.value[node2.id]);
      return acc;
    }, {})
  );
  const nodeOutputsById = computed(
    () => nodes.value.reduce((acc, node2) => {
      const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node2.id];
      const workflowObjectNode = workflowObject.value.getNode(node2.name);
      acc[node2.id] = workflowObjectNode && nodeTypeDescription ? mapLegacyEndpointsToCanvasConnectionPort(
        getNodeOutputs(
          workflowObject.value,
          workflowObjectNode,
          nodeTypeDescription
        ),
        nodeTypeDescription.outputNames ?? []
      ) : [];
      return acc;
    }, {})
  );
  const nodePinnedDataById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = workflowsStore.pinDataByNodeName(node2.name);
      return acc;
    }, {})
  );
  const nodeTooltipById = computed(() => {
    if (!workflowsStore.isWorkflowRunning) {
      return {};
    }
    const activeTriggerNodeCount = nodes.value.filter(
      (node2) => isTriggerNodeById.value[node2.id] && !node2.disabled
    ).length;
    const triggerNodeName = workflowsStore.getWorkflowExecution?.triggerNode;
    if (triggerNodeName === void 0 && activeTriggerNodeCount !== 1) {
      return {};
    }
    return nodes.value.reduce((acc, node2) => {
      const nodeTypeDescription = nodeTypeDescriptionByNodeId.value[node2.id];
      if (nodeTypeDescription && isTriggerNodeById.value[node2.id]) {
        if (!!node2.disabled || triggerNodeName !== void 0 && triggerNodeName !== node2.name || !["new", "unknown", "waiting"].includes(nodeExecutionStatusById.value[node2.id])) {
          return acc;
        }
        if ("eventTriggerDescription" in nodeTypeDescription) {
          const nodeName = i18n.shortNodeType(nodeTypeDescription.name);
          const { eventTriggerDescription } = nodeTypeDescription;
          acc[node2.id] = i18n.nodeText().eventTriggerDescription(nodeName, eventTriggerDescription ?? "");
        } else {
          acc[node2.id] = i18n.baseText("node.waitingForYouToCreateAnEventIn", {
            interpolate: {
              nodeType: nodeTypeDescription ? getTriggerNodeServiceName(nodeTypeDescription) : ""
            }
          });
        }
      }
      return acc;
    }, {});
  });
  const nodeExecutionRunningById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = workflowsStore.isNodeExecuting(node2.name);
      return acc;
    }, {})
  );
  const nodeExecutionStatusById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = workflowsStore.getWorkflowRunData?.[node2.name]?.filter(Boolean)[0]?.executionStatus ?? "new";
      return acc;
    }, {})
  );
  const nodeExecutionRunDataById = computed(
    () => nodes.value.reduce((acc, node2) => {
      acc[node2.id] = workflowsStore.getWorkflowResultDataByNodeName(node2.name);
      return acc;
    }, {})
  );
  const nodeExecutionRunDataOutputMapById = computed(
    () => Object.keys(nodeExecutionRunDataById.value).reduce(
      (acc, nodeId) => {
        acc[nodeId] = {};
        const outputData = { iterations: 0, total: 0 };
        for (const runIteration of nodeExecutionRunDataById.value[nodeId] ?? []) {
          const data = runIteration.data ?? {};
          for (const connectionType of Object.keys(data)) {
            const connectionTypeData = data[connectionType] ?? {};
            acc[nodeId][connectionType] = acc[nodeId][connectionType] ?? {};
            for (const outputIndex of Object.keys(connectionTypeData)) {
              const parsedOutputIndex = parseInt(outputIndex, 10);
              const connectionTypeOutputIndexData = connectionTypeData[parsedOutputIndex] ?? [];
              acc[nodeId][connectionType][outputIndex] = acc[nodeId][connectionType][outputIndex] ?? { ...outputData };
              acc[nodeId][connectionType][outputIndex].iterations += 1;
              acc[nodeId][connectionType][outputIndex].total += connectionTypeOutputIndexData.length;
            }
          }
        }
        return acc;
      },
      {}
    )
  );
  const nodeIssuesById = computed(
    () => nodes.value.reduce((acc, node2) => {
      const issues2 = [];
      const nodeExecutionRunData = workflowsStore.getWorkflowRunData?.[node2.name];
      if (nodeExecutionRunData) {
        nodeExecutionRunData.forEach((executionRunData) => {
          if (executionRunData?.error) {
            const { message, description: description2 } = executionRunData.error;
            const issue = `${message}${description2 ? ` (${description2})` : ""}`;
            issues2.push(sanitizeHtml(issue));
          }
        });
      }
      if (node2?.issues !== void 0) {
        issues2.push(...nodeHelpers.nodeIssuesToString(node2.issues, node2));
      }
      acc[node2.id] = issues2;
      return acc;
    }, {})
  );
  const nodeHasIssuesById = computed(
    () => nodes.value.reduce((acc, node2) => {
      if (["crashed", "error"].includes(nodeExecutionStatusById.value[node2.id])) {
        acc[node2.id] = true;
      } else if (nodePinnedDataById.value[node2.id]) {
        acc[node2.id] = false;
      } else {
        acc[node2.id] = nodeIssuesById.value[node2.id].length > 0;
      }
      return acc;
    }, {})
  );
  const nodeExecutionWaitingById = computed(
    () => nodes.value.reduce((acc, node2) => {
      const isExecutionSummary = (execution) => "waitTill" in execution;
      const workflowExecution = workflowsStore.getWorkflowExecution;
      const lastNodeExecuted = workflowExecution?.data?.resultData?.lastNodeExecuted;
      if (workflowExecution && lastNodeExecuted && isExecutionSummary(workflowExecution)) {
        if (node2.name === workflowExecution.data?.resultData?.lastNodeExecuted && workflowExecution?.waitTill && !workflowExecution?.finished) {
          if (node2 && node2.type === WAIT_NODE_TYPE && ["webhook", "form"].includes(node2.parameters.resume)) {
            acc[node2.id] = node2.parameters.resume === "webhook" ? i18n.baseText("node.theNodeIsWaitingWebhookCall") : i18n.baseText("node.theNodeIsWaitingFormCall");
            return acc;
          }
          if (node2?.parameters.operation === SEND_AND_WAIT_OPERATION) {
            acc[node2.id] = i18n.baseText("node.theNodeIsWaitingUserInput");
            return acc;
          }
          if (node2?.type === FORM_NODE_TYPE) {
            acc[node2.id] = i18n.baseText("node.theNodeIsWaitingFormCall");
            return acc;
          }
          const waitDate = new Date(workflowExecution.waitTill);
          if (waitDate.getTime() === WAIT_INDEFINITELY.getTime()) {
            acc[node2.id] = i18n.baseText(
              "node.theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall"
            );
          }
          acc[node2.id] = i18n.baseText("node.nodeIsWaitingTill", {
            interpolate: {
              date: waitDate.toLocaleDateString(),
              time: waitDate.toLocaleTimeString()
            }
          });
        }
      }
      return acc;
    }, {})
  );
  const additionalNodePropertiesById = computed(() => {
    const stickyNodeBaseZIndex = -100;
    const stickyNodeBoundingBoxes = nodes.value.reduce((acc, node2) => {
      if (node2.type === STICKY_NODE_TYPE) {
        const x = node2.position[0];
        const y = node2.position[1];
        const width = node2.parameters.width;
        const height = node2.parameters.height;
        acc.push({
          id: node2.id,
          x,
          y,
          width,
          height,
          area: width * height,
          zIndex: stickyNodeBaseZIndex
        });
      }
      return acc;
    }, []);
    const sortedStickyNodeBoundingBoxes = stickyNodeBoundingBoxes.sort((a, b) => b.area - a.area);
    sortedStickyNodeBoundingBoxes.forEach((node2, index) => {
      node2.zIndex = stickyNodeBaseZIndex + index;
    });
    for (let i = 0; i < sortedStickyNodeBoundingBoxes.length; i++) {
      const node1 = sortedStickyNodeBoundingBoxes[i];
      for (let j = i + 1; j < sortedStickyNodeBoundingBoxes.length; j++) {
        const node2 = sortedStickyNodeBoundingBoxes[j];
        if (checkOverlap(node1, node2)) {
          if (node1.area < node2.area && node1.zIndex <= node2.zIndex) {
            node1.zIndex = node2.zIndex + 1;
          } else if (node2.area < node1.area && node2.zIndex <= node1.zIndex) {
            node2.zIndex = node1.zIndex + 1;
          }
        }
      }
    }
    return sortedStickyNodeBoundingBoxes.reduce(
      (acc, node2) => {
        acc[node2.id] = {
          style: {
            zIndex: node2.zIndex
          }
        };
        return acc;
      },
      {}
    );
  });
  const simulatedNodeTypeDescriptionByNodeId = computed(() => {
    return nodes.value.reduce((acc, node2) => {
      if ([SIMULATE_NODE_TYPE, SIMULATE_TRIGGER_NODE_TYPE].includes(node2.type)) {
        const icon = node2.parameters?.icon;
        const iconValue = workflowObject.value.expression.getSimpleParameterValue(
          node2,
          icon,
          "internal",
          {}
        );
        if (iconValue && typeof iconValue === "string") {
          acc[node2.id] = nodeTypesStore.getNodeType(iconValue);
        }
      }
      return acc;
    }, {});
  });
  const mappedNodes = computed(() => [
    ...nodes.value.map((node2) => {
      const inputConnections = workflowObject.value.connectionsByDestinationNode[node2.name] ?? {};
      const outputConnections = workflowObject.value.connectionsBySourceNode[node2.name] ?? {};
      const data = {
        id: node2.id,
        name: node2.name,
        subtitle: nodeSubtitleById.value[node2.id] ?? "",
        type: node2.type,
        typeVersion: node2.typeVersion,
        disabled: node2.disabled,
        inputs: nodeInputsById.value[node2.id] ?? [],
        outputs: nodeOutputsById.value[node2.id] ?? [],
        connections: {
          [CanvasConnectionMode.Input]: inputConnections,
          [CanvasConnectionMode.Output]: outputConnections
        },
        issues: {
          items: nodeIssuesById.value[node2.id],
          visible: nodeHasIssuesById.value[node2.id]
        },
        pinnedData: {
          count: nodePinnedDataById.value[node2.id]?.length ?? 0,
          visible: !!nodePinnedDataById.value[node2.id]
        },
        execution: {
          status: nodeExecutionStatusById.value[node2.id],
          waiting: nodeExecutionWaitingById.value[node2.id],
          running: nodeExecutionRunningById.value[node2.id]
        },
        runData: {
          outputMap: nodeExecutionRunDataOutputMapById.value[node2.id],
          iterations: nodeExecutionRunDataById.value[node2.id]?.length ?? 0,
          visible: !!nodeExecutionRunDataById.value[node2.id]
        },
        render: renderTypeByNodeId.value[node2.id] ?? { type: "default", options: {} }
      };
      return {
        id: node2.id,
        label: node2.name,
        type: "canvas-node",
        position: { x: node2.position[0], y: node2.position[1] },
        data,
        ...additionalNodePropertiesById.value[node2.id]
      };
    })
  ]);
  const mappedConnections = computed(() => {
    return mapLegacyConnectionsToCanvasConnections(connections.value ?? [], nodes.value ?? []).map(
      (connection) => {
        const type = getConnectionType();
        const label2 = getConnectionLabel(connection);
        const data = getConnectionData(connection);
        return {
          ...connection,
          data,
          type,
          label: label2,
          markerEnd: MarkerType.ArrowClosed
        };
      }
    );
  });
  function getConnectionData(connection) {
    const { type, index } = parseCanvasConnectionHandleString(connection.sourceHandle);
    const runDataTotal = nodeExecutionRunDataOutputMapById.value[connection.source]?.[type]?.[index]?.total ?? 0;
    let status2;
    if (nodeExecutionRunningById.value[connection.source]) {
      status2 = "running";
    } else if (nodePinnedDataById.value[connection.source] && nodeExecutionRunDataById.value[connection.source]) {
      status2 = "pinned";
    } else if (nodeHasIssuesById.value[connection.source]) {
      status2 = "error";
    } else if (runDataTotal > 0) {
      status2 = "success";
    }
    const maxConnections = [
      ...nodeInputsById.value[connection.source],
      ...nodeInputsById.value[connection.target]
    ].filter((port) => port.type === type).reduce((acc, port) => {
      if (port.maxConnections === void 0) {
        return acc;
      }
      return Math.min(acc ?? Infinity, port.maxConnections);
    }, void 0);
    return {
      ...connection.data,
      ...maxConnections ? { maxConnections } : {},
      status: status2
    };
  }
  function getConnectionType(_) {
    return "canvas-edge";
  }
  function getConnectionLabel(connection) {
    const fromNode = nodes.value.find((node2) => node2.name === connection.data?.source.node);
    if (!fromNode) {
      return "";
    }
    if (nodePinnedDataById.value[fromNode.id]) {
      const pinnedDataCount = nodePinnedDataById.value[fromNode.id]?.length ?? 0;
      return pinnedDataCount > 0 ? i18n.baseText("ndv.output.items", {
        adjustToNumber: pinnedDataCount,
        interpolate: { count: String(pinnedDataCount) }
      }) : "";
    } else if (nodeExecutionRunDataById.value[fromNode.id]) {
      const { type, index } = parseCanvasConnectionHandleString(connection.sourceHandle);
      const runDataTotal = nodeExecutionRunDataOutputMapById.value[fromNode.id]?.[type]?.[index]?.total ?? 0;
      return runDataTotal > 0 ? i18n.baseText("ndv.output.items", {
        adjustToNumber: runDataTotal,
        interpolate: { count: String(runDataTotal) }
      }) : "";
    }
    return "";
  }
  return {
    additionalNodePropertiesById,
    nodeExecutionRunDataOutputMapById,
    nodeIssuesById,
    nodeHasIssuesById,
    connections: mappedConnections,
    nodes: mappedNodes
  };
}
export {
  Canvas as C,
  useCanvasMapping as a,
  CanvasNode as b,
  useVueFlow as u
};
