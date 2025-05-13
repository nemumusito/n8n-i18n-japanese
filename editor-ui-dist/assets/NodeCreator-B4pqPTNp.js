import { eo as createCompounder, iu as memoize, dj as i18n, fb as HTTP_REQUEST_NODE_TYPE, iv as getCredentialOnlyNodeType, eK as AI_CATEGORY_TOOLS, fm as AI_CATEGORY_ROOT_NODES, fs as CUSTOM_API_CALL_KEY, bs as AI_SUBCATEGORY, d as defineComponent, bQ as reactive, o as onMounted, aP as useExternalHooks, y as onBeforeUnmount, b3 as toRefs, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, f as createCommentVNode, j as createVNode, _ as _export_sfc, dU as useNodeType, r as ref, q as computed, ev as DEFAULT_SUBCATEGORY, iw as CREDENTIAL_ONLY_NODE_PREFIX, c as useI18n, fe as HITL_SUBCATEGORY, dO as isCommunityPackageName, ch as resolveDirective, e as createBlock, aV as createSlots, w as withCtx, aA as withDirectives, aB as vShow, B as normalizeStyle, bC as _sfc_main$h, b2 as withModifiers, m as unref, cJ as COMMUNITY_NODES_INSTALLATION_DOCS_URL, cb as DRAG_EVENT_DATA_KEY, ag as useTelemetry, b7 as mergeProps, t as toDisplayString, fc as WEBHOOK_NODE_TYPE, fv as getNewNodePosition, fI as NODE_SIZE, x as renderSlot, Q as useWorkflowsStore, X as watch, b4 as normalizeProps, b5 as guardReactiveProps, bb as onUnmounted, F as Fragment, D as renderList, fg as REGULAR_NODE_CREATOR_VIEW, u as useUsersStore, ff as TRIGGER_NODE_CREATOR_VIEW, hE as OPEN_AI_NODE_TYPE, hD as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, ix as withMemo, gT as createStaticVNode, l as createTextVNode, iy as REQUEST_NODE_FORM_URL, gk as getNodeIconSource, eA as SEND_AND_WAIT_OPERATION, eO as AI_OTHERS_NODE_CREATOR_VIEW, eP as AI_NODE_CREATOR_VIEW, G as useDebounce, gd as Transition, eN as AI_UNCATEGORIZED_CATEGORY, H as useUIStore, dr as useAssistantStore, bV as useBuilderStore, aT as _sfc_main$i, iz as SlideTransition, bz as useNodeTypesStore, bR as useCredentialsStore } from "./index-LGUZBtYa.js";
import { u as upperFirst, g as formatTriggerActionName, a as useNodeCreatorStore, h as useViewStacks, j as camelCase, k as useKeyboardNavigation, t as transformNodeType, A as AINodesView, l as AIView, R as RegularView, T as TriggerView, n as flattenCreateElements } from "./useCanvasOperations-D9yzH8Pf.js";
import { u as useActions } from "./NodeCreation-CT0UJ5KX.js";
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? " " : "") + upperFirst(word);
});
const PLACEHOLDER_RECOMMENDED_ACTION_KEY = "placeholder_recommended";
function translate(...args) {
  return i18n.baseText(...args);
}
const cachedBaseText = memoize(translate, (...args) => JSON.stringify(args));
const customNodeActionsParsers = {
  ["n8n-nodes-base.hubspotTrigger"]: (matchedProperty, nodeTypeDescription) => {
    const collection = matchedProperty?.options?.[0];
    return collection?.values[0]?.options?.map(
      (categoryItem) => ({
        ...getNodeTypeBase(nodeTypeDescription),
        actionKey: categoryItem.value,
        displayName: cachedBaseText("nodeCreator.actionsCategory.onEvent", {
          interpolate: { event: startCase(categoryItem.name) }
        }),
        description: categoryItem.description ?? "",
        displayOptions: matchedProperty.displayOptions,
        values: { eventsUi: { eventValues: [{ name: categoryItem.value }] } }
      })
    );
  }
};
function getNodeTypeBase(nodeTypeDescription, label2) {
  const isTrigger = nodeTypeDescription.group.includes("trigger");
  const category2 = isTrigger ? cachedBaseText("nodeCreator.actionsCategory.triggers") : cachedBaseText("nodeCreator.actionsCategory.actions");
  return {
    name: nodeTypeDescription.name,
    group: nodeTypeDescription.group,
    codex: {
      label: label2 ?? "",
      categories: [category2]
    },
    iconUrl: nodeTypeDescription.iconUrl,
    iconColor: nodeTypeDescription.iconColor,
    outputs: nodeTypeDescription.outputs,
    icon: nodeTypeDescription.icon,
    defaults: nodeTypeDescription.defaults
  };
}
function operationsCategory(nodeTypeDescription) {
  if (!!nodeTypeDescription.properties.find((property) => property.name === "resource")) return [];
  const matchedProperty = nodeTypeDescription.properties.find(
    (property) => property.name?.toLowerCase() === "operation"
  );
  if (!matchedProperty?.options) return [];
  const filteredOutItems = matchedProperty.options.filter(
    (categoryItem) => !["*", "", " "].includes(categoryItem.name)
  );
  const items2 = filteredOutItems.map((item) => ({
    ...getNodeTypeBase(nodeTypeDescription),
    actionKey: item.value,
    displayName: item.action ?? startCase(item.name),
    description: item.description ?? "",
    displayOptions: matchedProperty.displayOptions,
    outputConnectionType: item.outputConnectionType,
    values: {
      [matchedProperty.name]: matchedProperty.type === "multiOptions" ? [item.value] : item.value
    }
  }));
  if (items2.length === 0) return [];
  return items2;
}
function modeCategory(nodeTypeDescription) {
  const isAINode = nodeTypeDescription.codex?.categories?.includes(AI_SUBCATEGORY);
  if (!isAINode) return [];
  const matchedProperty = nodeTypeDescription.properties.find(
    (property) => property.name?.toLowerCase() === "mode"
  );
  if (!matchedProperty?.options) return [];
  const modeOptions = matchedProperty.options;
  const items2 = modeOptions.map((item) => ({
    ...getNodeTypeBase(nodeTypeDescription),
    actionKey: item.value,
    displayName: item.action ?? startCase(item.name),
    description: item.description ?? "",
    displayOptions: matchedProperty.displayOptions,
    outputConnectionType: item.outputConnectionType,
    values: {
      [matchedProperty.name]: item.value
    }
  }));
  if (items2.length === 0) return [];
  return items2;
}
function triggersCategory(nodeTypeDescription) {
  const matchingKeys = ["event", "events", "trigger on"];
  const isTrigger = nodeTypeDescription.displayName?.toLowerCase().includes("trigger");
  const matchedProperty = nodeTypeDescription.properties.find(
    (property) => matchingKeys.includes(property.displayName?.toLowerCase())
  );
  if (!isTrigger) return [];
  if (!matchedProperty?.options) {
    return [
      {
        ...getNodeTypeBase(nodeTypeDescription),
        actionKey: PLACEHOLDER_RECOMMENDED_ACTION_KEY,
        displayName: cachedBaseText("nodeCreator.actionsCategory.onNewEvent", {
          interpolate: { event: nodeTypeDescription.displayName.replace("Trigger", "").trimEnd() }
        }),
        description: ""
      }
    ];
  }
  const filteredOutItems = matchedProperty.options.filter(
    (categoryItem) => !["*", "", " "].includes(categoryItem.name)
  );
  const customParsedItem = customNodeActionsParsers[nodeTypeDescription.name]?.(
    matchedProperty,
    nodeTypeDescription
  );
  const items2 = customParsedItem ?? filteredOutItems.map((categoryItem) => ({
    ...getNodeTypeBase(nodeTypeDescription),
    actionKey: categoryItem.value,
    displayName: categoryItem.action ?? cachedBaseText("nodeCreator.actionsCategory.onEvent", {
      interpolate: { event: formatTriggerActionName(categoryItem.name) }
    }),
    description: categoryItem.description ?? "",
    displayOptions: matchedProperty.displayOptions,
    values: {
      [matchedProperty.name]: matchedProperty.type === "multiOptions" ? [categoryItem.value] : categoryItem.value
    }
  }));
  return items2;
}
function resourceCategories(nodeTypeDescription) {
  const transformedNodes = [];
  const matchedProperties = nodeTypeDescription.properties.filter(
    (property) => property.displayName?.toLowerCase() === "resource"
  );
  matchedProperties.forEach((property) => {
    (property.options || []).filter((option) => option.value !== CUSTOM_API_CALL_KEY).forEach((resourceOption, _i, options) => {
      const isSingleResource = options.length === 1;
      const operations = nodeTypeDescription.properties.find((operation) => {
        const isOperation = operation.name === "operation";
        const isMatchingResource = operation.displayOptions?.show?.resource?.includes(resourceOption.value) ?? isSingleResource;
        const operationVersions = operation.displayOptions?.show?.["@version"];
        const nodeTypeVersions = Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version : [nodeTypeDescription.version];
        const isMatchingVersion = operationVersions ? operationVersions.some(
          (version) => typeof version === "number" && nodeTypeVersions.includes(version)
        ) : true;
        return isOperation && isMatchingResource && isMatchingVersion;
      });
      if (!operations?.options) return;
      const items2 = (operations.options || []).map(
        (operationOption) => {
          const displayName = operationOption.action ?? `${resourceOption.name} ${startCase(operationOption.name)}`;
          const displayOptions = isSingleResource ? { show: { resource: [options[0]?.value] } } : operations?.displayOptions;
          return {
            ...getNodeTypeBase(
              nodeTypeDescription,
              `${resourceOption.name} ${cachedBaseText("nodeCreator.actionsCategory.actions")}`
            ),
            actionKey: operationOption.value,
            description: operationOption?.description ?? "",
            displayOptions,
            values: {
              operation: operations?.type === "multiOptions" ? [operationOption.value] : operationOption.value
            },
            displayName,
            group: ["trigger"]
          };
        }
      );
      transformedNodes.push(...items2);
    });
  });
  return transformedNodes;
}
function useActionsGenerator() {
  function generateNodeActions(node) {
    if (!node) return [];
    if (node.codex?.subcategories?.AI?.includes(AI_CATEGORY_TOOLS) && !node.codex?.subcategories?.AI?.includes(AI_CATEGORY_ROOT_NODES))
      return [];
    return [
      ...triggersCategory(node),
      ...operationsCategory(node),
      ...resourceCategories(node),
      ...modeCategory(node)
    ];
  }
  function filterActions(actions) {
    if (actions.length <= 1) return [];
    return actions.filter(
      (action2, _, arr) => {
        const isApiCall = action2.actionKey === CUSTOM_API_CALL_KEY;
        if (isApiCall) return false;
        const isPlaceholderTriggerAction = action2.actionKey === PLACEHOLDER_RECOMMENDED_ACTION_KEY;
        return !isPlaceholderTriggerAction || isPlaceholderTriggerAction && arr.length > 1;
      }
    );
  }
  function getSimplifiedNodeType(node) {
    const {
      displayName,
      defaults,
      description,
      name: name2,
      group,
      icon: icon2,
      iconUrl,
      iconColor,
      badgeIconUrl,
      outputs,
      codex
    } = node;
    return {
      displayName,
      defaults,
      description,
      name: name2,
      group,
      icon: icon2,
      iconColor,
      iconUrl,
      badgeIconUrl,
      outputs,
      codex
    };
  }
  function generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials) {
    const visibleNodeTypes = [...nodeTypes];
    const actions = {};
    const mergedNodes = [];
    visibleNodeTypes.filter((node) => !node.group.includes("trigger")).forEach((app) => {
      const appActions = generateNodeActions(app);
      actions[app.name] = appActions;
      if (app.name === HTTP_REQUEST_NODE_TYPE) {
        const credentialOnlyNodes = httpOnlyCredentials.map((credentialType) => {
          const credsOnlyNode = getCredentialOnlyNodeType(app, credentialType);
          if (credsOnlyNode) return getSimplifiedNodeType(credsOnlyNode);
          return null;
        });
        const filteredNodes = credentialOnlyNodes.filter(
          (node) => node !== null
        );
        mergedNodes.push(...filteredNodes);
      }
      mergedNodes.push(getSimplifiedNodeType(app));
    });
    visibleNodeTypes.filter((node) => node.group.includes("trigger")).forEach((trigger) => {
      const normalizedName = trigger.name.replace("Trigger", "");
      const triggerActions = generateNodeActions(trigger);
      const appActions = actions?.[normalizedName] || [];
      const app = mergedNodes.find((node) => node.name === normalizedName);
      if (app && appActions?.length > 0) {
        const mergedActions = filterActions([...appActions, ...triggerActions]);
        actions[normalizedName] = mergedActions;
        app.description = trigger.description;
      } else {
        actions[trigger.name] = filterActions(triggerActions);
        mergedNodes.push(getSimplifiedNodeType(trigger));
      }
    });
    return {
      actions,
      mergedNodes
    };
  }
  return {
    generateMergedNodesAndActions
  };
}
const _hoisted_1$7 = ["placeholder", "value"];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  props: {
    placeholder: { default: "" },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const state = reactive({
      inputRef: null
    });
    const externalHooks = useExternalHooks();
    function focus() {
      state.inputRef?.focus();
    }
    function onInput(event) {
      const input = event.target;
      emit("update:modelValue", input.value.trim());
    }
    function clear2() {
      emit("update:modelValue", "");
    }
    onMounted(() => {
      void externalHooks.run("nodeCreatorSearchBar.mount", { inputRef: state.inputRef });
      setTimeout(focus, 0);
    });
    onBeforeUnmount(() => {
      state.inputRef?.remove();
    });
    const { inputRef } = toRefs(state);
    __expose({
      focus
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.searchContainer),
        "data-test-id": "search-bar"
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.prefix]: true, [_ctx.$style.active]: _ctx.modelValue.length > 0 })
        }, [
          createVNode(_component_font_awesome_icon, {
            icon: "search",
            size: "sm"
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.text)
        }, [
          createBaseVNode("input", {
            ref_key: "inputRef",
            ref: inputRef,
            placeholder: _ctx.placeholder,
            value: _ctx.modelValue,
            class: normalizeClass(_ctx.$style.input),
            autofocus: "",
            "data-test-id": "node-creator-search-bar",
            tabindex: "0",
            onInput
          }, null, 42, _hoisted_1$7)
        ], 2),
        _ctx.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.suffix),
          onClick: clear2
        }, [
          createBaseVNode("button", {
            class: normalizeClass([_ctx.$style.clear, _ctx.$style.clickable])
          }, [
            createVNode(_component_font_awesome_icon, { icon: "times-circle" })
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const searchContainer = "_searchContainer_1knv8_123";
const prefix = "_prefix_1knv8_139";
const active$3 = "_active_1knv8_144";
const text = "_text_1knv8_148";
const suffix = "_suffix_1knv8_164";
const clear = "_clear_1knv8_170";
const style0$e = {
  searchContainer,
  prefix,
  active: active$3,
  text,
  suffix,
  clear
};
const cssModules$e = {
  "$style": style0$e
};
const SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__cssModules", cssModules$e]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NodeItem",
  props: {
    nodeType: {},
    subcategory: { default: void 0 },
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const i18n2 = useI18n();
    const telemetry = useTelemetry();
    const { actions } = useNodeCreatorStore();
    const { getAddedNodesAndConnections } = useActions();
    const { activeViewStack } = useViewStacks();
    const { isSubNodeType } = useNodeType({
      nodeType: props.nodeType
    });
    const dragging = ref(false);
    const draggablePosition = ref({ x: -100, y: -100 });
    const draggableDataTransfer2 = ref(null);
    const description = computed(() => {
      if (isSendAndWaitCategory.value) {
        return "";
      }
      if (props.subcategory === DEFAULT_SUBCATEGORY && !props.nodeType.name.startsWith(CREDENTIAL_ONLY_NODE_PREFIX)) {
        return "";
      }
      return i18n2.headerText({
        key: `headers.${shortNodeType.value}.description`,
        fallback: props.nodeType.description
      });
    });
    const showActionArrow = computed(() => hasActions.value && !isSendAndWaitCategory.value);
    const isSendAndWaitCategory = computed(() => activeViewStack.subcategory === HITL_SUBCATEGORY);
    const dataTestId = computed(
      () => hasActions.value ? "node-creator-action-item" : "node-creator-node-item"
    );
    const hasActions = computed(() => {
      return nodeActions.value.length > 1 && !activeViewStack.hideActions;
    });
    const nodeActions = computed(() => {
      return actions[props.nodeType.name] || [];
    });
    const shortNodeType = computed(() => i18n2.shortNodeType(props.nodeType.name) || "");
    const draggableStyle = computed(() => ({
      top: `${draggablePosition.value.y}px`,
      left: `${draggablePosition.value.x}px`
    }));
    const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
    const displayName = computed(() => {
      const trimmedDisplayName = props.nodeType.displayName.trimEnd();
      return i18n2.headerText({
        key: `headers.${shortNodeType.value}.displayName`,
        fallback: hasActions.value ? trimmedDisplayName.replace("Trigger", "") : trimmedDisplayName
      });
    });
    const isTrigger = computed(() => {
      return props.nodeType.group.includes("trigger") && !hasActions.value;
    });
    function onDragStart(event) {
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.dropEffect = "copy";
        event.dataTransfer.setDragImage(draggableDataTransfer2.value, 0, 0);
        event.dataTransfer.setData(
          DRAG_EVENT_DATA_KEY,
          JSON.stringify(getAddedNodesAndConnections([{ type: props.nodeType.name }]))
        );
      }
      dragging.value = true;
    }
    function onDragEnd() {
      dragging.value = false;
      setTimeout(() => {
        draggablePosition.value = { x: -100, y: -100 };
      }, 300);
    }
    function onCommunityNodeTooltipClick(event) {
      if (event.target.localName === "a") {
        telemetry.track("user clicked cnr docs link", { source: "nodes panel node" });
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nNodeCreatorNode = resolveComponent("N8nNodeCreatorNode");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(_component_N8nNodeCreatorNode, {
        draggable: !showActionArrow.value,
        class: normalizeClass(_ctx.$style.nodeItem),
        description: description.value,
        title: displayName.value,
        "show-action-arrow": showActionArrow.value,
        "is-trigger": isTrigger.value,
        "data-test-id": dataTestId.value,
        tag: _ctx.nodeType.tag,
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, createSlots({
        icon: withCtx(() => [
          unref(isSubNodeType) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.subNodeBackground)
          }, null, 2)) : createCommentVNode("", true),
          createVNode(_sfc_main$h, {
            class: normalizeClass(_ctx.$style.nodeIcon),
            "node-type": _ctx.nodeType
          }, null, 8, ["class", "node-type"])
        ]),
        dragContent: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            ref_key: "draggableDataTransfer",
            ref: draggableDataTransfer2,
            class: normalizeClass(_ctx.$style.draggable),
            style: normalizeStyle(draggableStyle.value)
          }, [
            createVNode(_sfc_main$h, {
              "node-type": _ctx.nodeType,
              size: 40,
              shrink: false,
              onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["node-type"])
          ], 6), [
            [vShow, dragging.value]
          ])
        ]),
        _: 2
      }, [
        isCommunityNode.value ? {
          name: "tooltip",
          fn: withCtx(() => [
            withDirectives(createBaseVNode("p", {
              class: normalizeClass(_ctx.$style.communityNodeIcon),
              onClick: onCommunityNodeTooltipClick
            }, null, 2), [
              [
                _directive_n8n_html,
                unref(i18n2).baseText("generic.communityNode.tooltip", {
                  interpolate: {
                    packageName: _ctx.nodeType.name.split(".")[0],
                    docURL: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL)
                  }
                })
              ]
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["draggable", "class", "description", "title", "show-action-arrow", "is-trigger", "data-test-id", "tag"]);
    };
  }
});
const nodeItem = "_nodeItem_1107w_123";
const nodeIcon$2 = "_nodeIcon_1107w_131";
const subNodeBackground = "_subNodeBackground_1107w_135";
const communityNodeIcon = "_communityNodeIcon_1107w_145";
const draggable$1 = "_draggable_1107w_149";
const draggableDataTransfer$1 = "_draggableDataTransfer_1107w_163";
const style0$d = {
  nodeItem,
  nodeIcon: nodeIcon$2,
  subNodeBackground,
  communityNodeIcon,
  draggable: draggable$1,
  draggableDataTransfer: draggableDataTransfer$1
};
const cssModules$d = {
  "$style": style0$d
};
const NodeItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__cssModules", cssModules$d]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SubcategoryItem",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const i18n2 = useI18n();
    const subcategoryName = computed(() => camelCase(props.item.subcategory || props.item.title));
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = resolveComponent("n8n-node-icon");
      const _component_n8n_node_creator_node = resolveComponent("n8n-node-creator-node");
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.subCategory),
        title: unref(i18n2).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
        "is-trigger": false,
        description: unref(i18n2).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, mergeProps({
            type: "icon",
            name: _ctx.item.icon,
            circle: false,
            "show-tooltip": false
          }, _ctx.item.iconProps), null, 16, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "description"]);
    };
  }
});
const subCategory = "_subCategory_1x5a1_123";
const style0$c = {
  subCategory
};
const cssModules$c = {
  "$style": style0$c
};
const SubcategoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__cssModules", cssModules$c]]);
const _hoisted_1$6 = ["textContent"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "LabelItem",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.label)
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.$style.name),
          textContent: toDisplayString(_ctx.item.key)
        }, null, 10, _hoisted_1$6)
      ], 2);
    };
  }
});
const label$1 = "_label_p81gr_123";
const style0$b = {
  label: label$1
};
const cssModules$b = {
  "$style": style0$b
};
const LabelItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__cssModules", cssModules$b]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ActionItem",
  props: {
    nodeType: {},
    action: {}
  },
  setup(__props) {
    const props = __props;
    const telemetry = useTelemetry();
    const { getActionData, getAddedNodesAndConnections, setAddedNodeActionParameters } = useActions();
    const { activeViewStack } = useViewStacks();
    const state = reactive({
      dragging: false,
      draggablePosition: {
        x: -100,
        y: -100
      },
      storeWatcher: null,
      draggableDataTransfer: null
    });
    const draggableStyle = computed(() => ({
      top: `${state.draggablePosition.y}px`,
      left: `${state.draggablePosition.x}px`
    }));
    const actionData = computed(() => getActionData(props.action));
    const isTriggerAction = (action2) => action2.name?.toLowerCase().includes("trigger") || action2.name === WEBHOOK_NODE_TYPE;
    function onDragStart(event) {
      document.body.addEventListener("dragover", onDragOver);
      const { pageX: x, pageY: y } = event;
      if (event.dataTransfer && actionData.value.key) {
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.dropEffect = "copy";
        event.dataTransfer.setDragImage(state.draggableDataTransfer, 0, 0);
        event.dataTransfer.setData(
          DRAG_EVENT_DATA_KEY,
          JSON.stringify(getAddedNodesAndConnections([{ type: actionData.value.key }]))
        );
        if (telemetry) {
          state.storeWatcher = setAddedNodeActionParameters(
            actionData.value,
            telemetry,
            activeViewStack.rootView
          );
        }
        document.body.addEventListener("dragend", onDragEnd);
      }
      state.dragging = true;
      state.draggablePosition = { x, y };
    }
    function onDragOver(event) {
      if (!state.dragging || event.pageX === 0 && event.pageY === 0) {
        return;
      }
      const [x, y] = getNewNodePosition([], [event.pageX - NODE_SIZE / 2, event.pageY - NODE_SIZE / 2]);
      state.draggablePosition = { x, y };
    }
    function onDragEnd() {
      if (state.storeWatcher) state.storeWatcher();
      document.body.removeEventListener("dragend", onDragEnd);
      document.body.removeEventListener("dragover", onDragOver);
      state.dragging = false;
      setTimeout(() => {
        state.draggablePosition = { x: -100, y: -100 };
      }, 300);
    }
    const { draggableDataTransfer: draggableDataTransfer2, dragging } = toRefs(state);
    return (_ctx, _cache) => {
      const _component_n8n_node_creator_node = resolveComponent("n8n-node-creator-node");
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        draggable: "",
        class: normalizeClass(_ctx.$style.action),
        title: _ctx.action.displayName,
        "is-trigger": isTriggerAction(_ctx.action),
        "data-keyboard-nav": "true",
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, {
        dragContent: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "draggableDataTransfer",
            ref: draggableDataTransfer2,
            class: normalizeClass(_ctx.$style.draggableDataTransfer)
          }, null, 2),
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.draggable),
            style: normalizeStyle(draggableStyle.value)
          }, [
            createVNode(_sfc_main$h, {
              "node-type": _ctx.nodeType,
              size: 40,
              shrink: false,
              onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["node-type"])
          ], 6), [
            [vShow, unref(dragging)]
          ])
        ]),
        icon: withCtx(() => [
          createVNode(_sfc_main$h, { "node-type": _ctx.action }, null, 8, ["node-type"])
        ]),
        _: 1
      }, 8, ["class", "title", "is-trigger"]);
    };
  }
});
const action$1 = "_action_1owvg_123";
const nodeIcon$1 = "_nodeIcon_1owvg_135";
const draggable = "_draggable_1owvg_139";
const draggableDataTransfer = "_draggableDataTransfer_1owvg_153";
const style0$a = {
  action: action$1,
  nodeIcon: nodeIcon$1,
  draggable,
  draggableDataTransfer
};
const cssModules$a = {
  "$style": style0$a
};
const ActionItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$a]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ViewItem",
  props: {
    view: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = resolveComponent("n8n-node-icon");
      const _component_n8n_node_creator_node = resolveComponent("n8n-node-creator-node");
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.view),
        title: _ctx.view.title,
        tag: _ctx.view.tag,
        "is-trigger": false,
        description: _ctx.view.description,
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, {
            type: "icon",
            name: _ctx.view.icon,
            circle: false,
            "show-tooltip": false
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "tag", "description"]);
    };
  }
});
const view$1 = "_view_17lj9_123";
const style0$9 = {
  view: view$1
};
const cssModules$9 = {
  "$style": style0$9
};
const ViewItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$9]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "LinkItem",
  props: {
    link: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = resolveComponent("n8n-node-icon");
      const _component_n8n_node_creator_node = resolveComponent("n8n-node-creator-node");
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.creatorLink),
        title: _ctx.link.title,
        "is-trigger": false,
        description: _ctx.link.description,
        tag: _ctx.link.tag,
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, {
            type: "icon",
            name: _ctx.link.icon,
            circle: false,
            "show-tooltip": false
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "description", "tag"]);
    };
  }
});
const creatorLink = "_creatorLink_cptk0_123";
const style0$8 = {
  creatorLink
};
const cssModules$8 = {
  "$style": style0$8
};
const LinkItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$8]]);
const _hoisted_1$5 = ["textContent"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CategoryItem",
  props: {
    expanded: { type: Boolean, default: true },
    active: { type: Boolean },
    count: {},
    name: {},
    isTrigger: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const categoryName = computed(() => {
      const itemsCount = props.count || 0;
      return itemsCount > 0 ? `${props.name} (${itemsCount})` : props.name;
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", mergeProps({
        class: _ctx.$style.categoryWrapper
      }, _ctx.$attrs, {
        "data-keyboard-nav": "true",
        "data-test-id": "node-creator-category-item"
      }), [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.category]: true, [_ctx.$style.active]: _ctx.active })
        }, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.name)
          }, [
            createBaseVNode("span", {
              textContent: toDisplayString(categoryName.value)
            }, null, 8, _hoisted_1$5),
            _ctx.isTrigger ? (openBlock(), createBlock(_component_font_awesome_icon, {
              key: 0,
              icon: "bolt",
              size: "xs",
              class: normalizeClass(_ctx.$style.triggerIcon)
            }, null, 8, ["class"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default")
          ], 2),
          _ctx.expanded ? (openBlock(), createBlock(_component_font_awesome_icon, {
            key: 0,
            icon: "chevron-down",
            class: normalizeClass(_ctx.$style.arrow)
          }, null, 8, ["class"])) : (openBlock(), createBlock(_component_font_awesome_icon, {
            key: 1,
            class: normalizeClass(_ctx.$style.arrow),
            icon: "chevron-up"
          }, null, 8, ["class"]))
        ], 2)
      ], 16);
    };
  }
});
const triggerIcon = "_triggerIcon_1rqhf_123";
const category$1 = "_category_1rqhf_128";
const active$2 = "_active_1rqhf_149";
const name = "_name_1rqhf_153";
const arrow = "_arrow_1rqhf_158";
const style0$7 = {
  triggerIcon,
  category: category$1,
  active: active$2,
  name,
  arrow
};
const cssModules$7 = {
  "$style": style0$7
};
const CategoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$7]]);
const _hoisted_1$4 = ["data-category-collapsed"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CategorizedItemsRenderer",
  props: {
    elements: { default: () => [] },
    category: {},
    disabled: { type: Boolean },
    activeIndex: {},
    isTriggerCategory: { type: Boolean },
    mouseOverTooltip: {},
    expanded: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { popViewStack } = useViewStacks();
    const { registerKeyHook } = useKeyboardNavigation();
    const { workflowId } = useWorkflowsStore();
    const nodeCreatorStore = useNodeCreatorStore();
    const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
    const actionCount = computed(() => props.elements.filter(({ type }) => type === "action").length);
    const expanded = ref(props.expanded ?? false);
    function toggleExpanded() {
      setExpanded(!expanded.value);
    }
    function setExpanded(isExpanded) {
      const prev = expanded.value;
      expanded.value = isExpanded;
      if (expanded.value && !prev) {
        nodeCreatorStore.onCategoryExpanded({
          category_name: props.category,
          workflow_id: workflowId
        });
      }
    }
    function arrowRight() {
      if (expanded.value) return;
      setExpanded(true);
    }
    function arrowLeft() {
      if (!expanded.value) {
        popViewStack();
        return;
      }
      setExpanded(false);
    }
    watch(
      () => props.elements,
      () => {
        setExpanded(true);
      }
    );
    registerKeyHook(`CategoryRight_${props.category}`, {
      keyboardKeys: ["ArrowRight"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: arrowRight
    });
    registerKeyHook(`CategoryToggle_${props.category}`, {
      keyboardKeys: ["Enter"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: toggleExpanded
    });
    registerKeyHook(`CategoryLeft_${props.category}`, {
      keyboardKeys: ["ArrowLeft"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: arrowLeft
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.categorizedItemsRenderer),
        "data-category-collapsed": !expanded.value
      }, [
        createVNode(CategoryItem, {
          class: normalizeClass(_ctx.$style.categoryItem),
          name: _ctx.category,
          disabled: _ctx.disabled,
          active: activeItemId.value === _ctx.category,
          count: actionCount.value,
          expanded: expanded.value,
          "is-trigger": _ctx.isTriggerCategory,
          "data-keyboard-nav-type": "category",
          "data-keyboard-nav-id": _ctx.category,
          onClick: toggleExpanded
        }, {
          default: withCtx(() => [
            _ctx.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.$style.mouseOverTooltip)
            }, [
              createVNode(_component_n8n_tooltip, {
                placement: "top",
                "popper-class": _ctx.$style.tooltipPopper
              }, {
                content: withCtx(() => [
                  withDirectives(createBaseVNode("div", null, null, 512), [
                    [_directive_n8n_html, _ctx.mouseOverTooltip]
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n8n_icon, {
                    icon: "question-circle",
                    size: "small"
                  })
                ]),
                _: 1
              }, 8, ["popper-class"])
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class", "name", "disabled", "active", "count", "expanded", "is-trigger", "data-keyboard-nav-id"]),
        expanded.value && actionCount.value > 0 && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.contentSlot)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("", true),
        expanded.value ? (openBlock(), createBlock(ItemsRenderer, mergeProps({ key: 1 }, _ctx.$attrs, {
          elements: _ctx.elements,
          "is-trigger": _ctx.isTriggerCategory
        }), {
          default: withCtx(() => _cache[0] || (_cache[0] = [])),
          empty: withCtx(() => [
            renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({ elements: _ctx.elements })))
          ]),
          _: 3
        }, 16, ["elements", "is-trigger"])) : createCommentVNode("", true)
      ], 10, _hoisted_1$4);
    };
  }
});
const mouseOverTooltip = "_mouseOverTooltip_5wyeb_123";
const categorizedItemsRenderer = "_categorizedItemsRenderer_5wyeb_131";
const tooltipPopper = "_tooltipPopper_5wyeb_135";
const contentSlot = "_contentSlot_5wyeb_139";
const style0$6 = {
  mouseOverTooltip,
  categorizedItemsRenderer,
  tooltipPopper,
  contentSlot
};
const cssModules$6 = {
  "$style": style0$6
};
const CategorizedItemsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$6]]);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = ["data-keyboard-nav-type", "data-keyboard-nav-id", "onClick"];
const LAZY_LOAD_THRESHOLD = 20;
const LAZY_LOAD_ITEMS_PER_TICK = 5;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ItemsRenderer",
  props: {
    elements: { default: () => [] },
    activeIndex: {},
    disabled: { type: Boolean },
    lazyRender: { type: Boolean, default: true }
  },
  emits: ["selected", "dragstart", "dragend"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const renderedItems2 = ref([]);
    const renderAnimationRequest = ref(0);
    const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
    function renderItems() {
      if (props.elements.length <= LAZY_LOAD_THRESHOLD || !props.lazyRender) {
        renderedItems2.value = props.elements;
        return;
      }
      if (renderedItems2.value.length < props.elements.length) {
        renderedItems2.value.push(
          ...props.elements.slice(
            renderedItems2.value.length,
            renderedItems2.value.length + LAZY_LOAD_ITEMS_PER_TICK
          )
        );
        renderAnimationRequest.value = window.requestAnimationFrame(renderItems);
      }
    }
    function wrappedEmit(event, element, $e) {
      if (props.disabled) return;
      switch (event) {
        case "dragstart":
        case "dragend":
        case "selected":
          emit("selected", element, $e);
          break;
        default:
          emit(event, element, $e);
      }
    }
    function beforeEnter(el) {
      el.style.height = "0";
    }
    function enter(el) {
      el.style.height = `${el.scrollHeight}px`;
    }
    function beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`;
    }
    function leave(el) {
      el.style.height = "0";
    }
    onMounted(() => {
      renderItems();
    });
    onUnmounted(() => {
      window.cancelAnimationFrame(renderAnimationRequest.value);
      renderedItems2.value = [];
    });
    watch(
      () => props.elements,
      () => {
        window.cancelAnimationFrame(renderAnimationRequest.value);
        renderedItems2.value = [];
        renderItems();
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_loading = resolveComponent("n8n-loading");
      return _ctx.elements.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.itemsRenderer),
        name: "accordion",
        onBeforeEnter: beforeEnter,
        onEnter: enter,
        onBeforeLeave: beforeLeave,
        onLeave: leave
      }, [
        renderSlot(_ctx.$slots, "default"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.elements, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.uuid
          }, [
            renderedItems2.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
              item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer, {
                key: 0,
                elements: item.children,
                expanded: "",
                category: item.title,
                onSelected: _cache[0] || (_cache[0] = (child) => wrappedEmit("selected", child))
              }, null, 8, ["elements", "category"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                ref_for: true,
                ref: "iteratorItems",
                class: normalizeClass({
                  clickable: !_ctx.disabled,
                  [_ctx.$style.active]: activeItemId.value === item.uuid,
                  [_ctx.$style.iteratorItem]: true,
                  [_ctx.$style[item.type]]: true,
                  // Borderless is only applied to views
                  [_ctx.$style.borderless]: item.type === "view" && item.properties.borderless === true
                }),
                "data-test-id": "item-iterator-item",
                "data-keyboard-nav-type": item.type !== "label" ? item.type : void 0,
                "data-keyboard-nav-id": item.uuid,
                onClick: ($event) => wrappedEmit("selected", item)
              }, [
                item.type === "label" ? (openBlock(), createBlock(LabelItem, {
                  key: 0,
                  item
                }, null, 8, ["item"])) : createCommentVNode("", true),
                item.type === "subcategory" ? (openBlock(), createBlock(SubcategoryItem, {
                  key: 1,
                  item: item.properties
                }, null, 8, ["item"])) : createCommentVNode("", true),
                item.type === "node" ? (openBlock(), createBlock(NodeItem, {
                  key: 2,
                  "node-type": item.properties,
                  active: true,
                  subcategory: item.subcategory
                }, null, 8, ["node-type", "subcategory"])) : createCommentVNode("", true),
                item.type === "action" ? (openBlock(), createBlock(ActionItem, {
                  key: 3,
                  "node-type": item.properties,
                  action: item.properties,
                  active: true
                }, null, 8, ["node-type", "action"])) : item.type === "view" ? (openBlock(), createBlock(ViewItem, {
                  key: 4,
                  view: item.properties,
                  class: normalizeClass(_ctx.$style.viewItem)
                }, null, 8, ["view", "class"])) : item.type === "link" ? (openBlock(), createBlock(LinkItem, {
                  key: 5,
                  link: item.properties,
                  class: normalizeClass(_ctx.$style.linkItem)
                }, null, 8, ["link", "class"])) : createCommentVNode("", true)
              ], 10, _hoisted_2$2))
            ])) : (openBlock(), createBlock(_component_n8n_loading, {
              key: 1,
              loading: true,
              rows: 1,
              variant: "p",
              class: normalizeClass(_ctx.$style.itemSkeleton)
            }, null, 8, ["class"]))
          ]);
        }), 128))
      ], 34)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.empty)
      }, [
        renderSlot(_ctx.$slots, "empty")
      ], 2));
    };
  }
});
const itemSkeleton = "_itemSkeleton_e346c_123";
const iteratorItem = "_iteratorItem_e346c_127";
const label = "_label_e346c_139";
const category = "_category_e346c_139";
const active$1 = "_active_e346c_142";
const empty = "_empty_e346c_146";
const itemsRenderer = "_itemsRenderer_e346c_150";
const view = "_view_e346c_159";
const link = "_link_e346c_177";
const borderless = "_borderless_e346c_195";
const style0$5 = {
  itemSkeleton,
  iteratorItem,
  label,
  category,
  active: active$1,
  empty,
  itemsRenderer,
  view,
  link,
  borderless
};
const cssModules$5 = {
  "$style": style0$5
};
const ItemsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$5]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "OrderSwitcher",
  props: {
    rootView: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          renderSlot(_ctx.$slots, "actions"),
          renderSlot(_ctx.$slots, "triggers")
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          renderSlot(_ctx.$slots, "triggers"),
          renderSlot(_ctx.$slots, "actions")
        ], 64))
      ]);
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ActionsMode",
  emits: ["nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const telemetry = useTelemetry();
    const i18n2 = useI18n();
    const { userActivated } = useUsersStore();
    const { popViewStack, updateCurrentViewStack } = useViewStacks();
    const { registerKeyHook } = useKeyboardNavigation();
    const {
      setAddedNodeActionParameters,
      getActionData,
      getPlaceholderTriggerActions,
      parseCategoryActions,
      actionsCategoryLocales
    } = useActions();
    const nodeCreatorStore = useNodeCreatorStore();
    const parsedTriggerActions = computed(
      () => parseActions(actions.value, actionsCategoryLocales.value.triggers, false)
    );
    const parsedActionActions = computed(
      () => parseActions(actions.value, actionsCategoryLocales.value.actions, !search.value)
    );
    const parsedTriggerActionsBaseline = computed(
      () => parseActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.triggers,
        false
      )
    );
    const parsedActionActionsBaseline = computed(
      () => parseActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.actions,
        !search.value
      )
    );
    const triggerCategoryName = computed(
      () => parsedTriggerActions.value.length || search.value ? actionsCategoryLocales.value.triggers : `${actionsCategoryLocales.value.triggers} (${placeholderTriggerActions.length})`
    );
    const actions = computed(() => {
      return (useViewStacks().activeViewStack.items || []).filter(
        (p) => p.properties.actionKey !== CUSTOM_API_CALL_KEY
      );
    });
    const search = computed(() => useViewStacks().activeViewStack.search);
    const subcategory = computed(() => useViewStacks().activeViewStack.subcategory);
    const rootView = computed(() => useViewStacks().activeViewStack.rootView);
    const placeholderTriggerActions = getPlaceholderTriggerActions(subcategory.value || "");
    const hasNoTriggerActions = computed(
      () => parseCategoryActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.triggers,
        !search.value
      ).length === 0
    );
    const containsAPIAction = computed(() => {
      const actions2 = useViewStacks().activeViewStack.baselineItems || [];
      const result = actions2.some((p) => {
        return (p.properties.actionKey ?? "") === CUSTOM_API_CALL_KEY;
      });
      return result;
    });
    const isTriggerRootView = computed(() => rootView.value === TRIGGER_NODE_CREATOR_VIEW);
    registerKeyHook("ActionsKeyRight", {
      keyboardKeys: ["ArrowRight", "Enter"],
      condition: (type) => type === "action",
      handler: onKeySelect
    });
    registerKeyHook("ActionsKeyLeft", {
      keyboardKeys: ["ArrowLeft"],
      condition: (type) => type === "action",
      handler: arrowLeft
    });
    function parseActions(base, locale, withLabels = false) {
      return parseCategoryActions(base, locale, withLabels);
    }
    function arrowLeft() {
      popViewStack();
    }
    function onKeySelect(activeItemId) {
      const mergedActions = [...actions.value, ...placeholderTriggerActions];
      const activeAction = mergedActions.find((a) => a.uuid === activeItemId);
      if (activeAction) onSelected(activeAction);
    }
    function onSelected(actionCreateElement) {
      if (actionCreateElement.type !== "action") return;
      const actionData = getActionData(actionCreateElement.properties);
      const isPlaceholderTriggerAction = placeholderTriggerActions.some(
        (p) => p.key === actionCreateElement.key
      );
      if (isPlaceholderTriggerAction && isTriggerRootView.value) {
        const actionNode = actions.value[0]?.key;
        if (actionNode) emit("nodeTypeSelected", [actionData.key, actionNode]);
      } else if (actionData?.key === OPEN_AI_NODE_TYPE && actionData?.value?.resource === "assistant" && actionData?.value?.operation === "message") {
        emit("nodeTypeSelected", [OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE]);
      } else {
        emit("nodeTypeSelected", [actionData.key]);
      }
      if (telemetry) setAddedNodeActionParameters(actionData, telemetry, rootView.value);
    }
    function trackActionsView() {
      const activeViewStack = useViewStacks().activeViewStack;
      const trigger_action_count = (activeViewStack.baselineItems || [])?.filter(
        (action2) => action2.key.toLowerCase().includes("trigger")
      ).length;
      const appIdentifier = [...actions.value, ...placeholderTriggerActions][0].key;
      const trackingPayload = {
        app_identifier: appIdentifier,
        actions: (activeViewStack.baselineItems || [])?.map(
          (action2) => action2.properties.displayName
        ),
        regular_action_count: (activeViewStack.baselineItems || [])?.length - trigger_action_count,
        trigger_action_count
      };
      void useExternalHooks().run("nodeCreateList.onViewActions", trackingPayload);
      nodeCreatorStore.onViewActions(trackingPayload);
    }
    function resetSearch2() {
      updateCurrentViewStack({ search: "" });
    }
    function addHttpNode() {
      const updateData = {
        name: "",
        key: HTTP_REQUEST_NODE_TYPE,
        value: {
          authentication: "predefinedCredentialType"
        }
      };
      emit("nodeTypeSelected", [HTTP_REQUEST_NODE_TYPE]);
      if (telemetry) setAddedNodeActionParameters(updateData);
      const app_identifier = actions.value[0]?.key;
      if (!app_identifier) return;
      void useExternalHooks().run("nodeCreateList.onActionsCustmAPIClicked", {
        app_identifier
      });
      nodeCreatorStore.onActionsCustomAPIClicked({ app_identifier });
    }
    onMounted(() => {
      trackActionsView();
    });
    return (_ctx, _cache) => {
      const _component_n8n_callout = resolveComponent("n8n-callout");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        rootView.value ? (openBlock(), createBlock(_sfc_main$6, {
          key: 0,
          "root-view": rootView.value
        }, createSlots({ _: 2 }, [
          isTriggerRootView.value || parsedTriggerActionsBaseline.value.length !== 0 ? {
            name: "triggers",
            fn: withCtx(() => [
              withMemo([search.value], () => createVNode(CategorizedItemsRenderer, {
                elements: parsedTriggerActions.value,
                category: triggerCategoryName.value,
                "mouse-over-tooltip": unref(i18n2).baseText("nodeCreator.actionsTooltip.triggersStartWorkflow"),
                "is-trigger-category": "",
                expanded: isTriggerRootView.value || parsedActionActions.value.length === 0,
                onSelected
              }, createSlots({ _: 2 }, [
                hasNoTriggerActions.value ? {
                  name: "empty",
                  fn: withCtx(() => [
                    hasNoTriggerActions.value ? (openBlock(), createBlock(_component_n8n_callout, {
                      key: 0,
                      theme: "info",
                      iconless: "",
                      slim: "",
                      "data-test-id": "actions-panel-no-triggers-callout"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("span", null, null, 512), [
                          [
                            _directive_n8n_html,
                            unref(i18n2).baseText("nodeCreator.actionsCallout.noTriggerItems", {
                              interpolate: { nodeName: subcategory.value ?? "" }
                            })
                          ]
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(ItemsRenderer, {
                      elements: unref(placeholderTriggerActions),
                      onSelected
                    }, null, 8, ["elements"])
                  ]),
                  key: "0"
                } : {
                  name: "empty",
                  fn: withCtx(() => [
                    withDirectives(createBaseVNode("p", {
                      class: normalizeClass(_ctx.$style.resetSearch),
                      onClick: resetSearch2
                    }, null, 2), [
                      [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCategory.noMatchingTriggers")]
                    ])
                  ]),
                  key: "1"
                }
              ]), 1032, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 0)
            ]),
            key: "0"
          } : void 0,
          !isTriggerRootView.value || parsedActionActionsBaseline.value.length !== 0 ? {
            name: "actions",
            fn: withCtx(() => [
              withMemo([search.value], () => createVNode(CategorizedItemsRenderer, {
                elements: parsedActionActions.value,
                category: unref(actionsCategoryLocales).actions,
                "mouse-over-tooltip": unref(i18n2).baseText("nodeCreator.actionsTooltip.actionsPerformStep"),
                expanded: !isTriggerRootView.value || parsedTriggerActions.value.length === 0,
                onSelected
              }, {
                empty: withCtx(() => [
                  !search.value ? (openBlock(), createBlock(_component_n8n_info_tip, {
                    key: 0,
                    theme: "info",
                    type: "note",
                    class: normalizeClass(_ctx.$style.actionsEmpty)
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("span", null, null, 512), [
                        [
                          _directive_n8n_html,
                          unref(i18n2).baseText("nodeCreator.actionsCallout.noActionItems", {
                            interpolate: { nodeName: subcategory.value ?? "" }
                          })
                        ]
                      ])
                    ]),
                    _: 1
                  }, 8, ["class"])) : withDirectives((openBlock(), createElementBlock("p", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.resetSearch),
                    "data-test-id": "actions-panel-no-matching-actions",
                    onClick: resetSearch2
                  }, null, 2)), [
                    [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCategory.noMatchingActions")]
                  ])
                ]),
                default: withCtx(() => [
                  !unref(userActivated) && isTriggerRootView.value ? (openBlock(), createBlock(_component_n8n_callout, {
                    key: 0,
                    theme: "info",
                    iconless: "",
                    slim: "",
                    "data-test-id": "actions-panel-activation-callout"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("span", null, null, 512), [
                        [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCallout.triggersStartWorkflow")]
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 1)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["root-view"])) : createCommentVNode("", true),
        containsAPIAction.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.apiHint)
        }, [
          withDirectives(createBaseVNode("span", {
            onClick: withModifiers(addHttpNode, ["prevent"])
          }, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n2).baseText("nodeCreator.actionsList.apiCall", {
                interpolate: { node: subcategory.value ?? "" }
              })
            ]
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_169mw_123";
const resetSearch = "_resetSearch_169mw_129";
const actionsEmpty = "_actionsEmpty_169mw_143";
const apiHint = "_apiHint_169mw_151";
const style0$4 = {
  container,
  resetSearch,
  actionsEmpty,
  apiHint
};
const cssModules$4 = {
  "$style": style0$4
};
const ActionsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _sfc_main$4 = {};
const _hoisted_1$2 = {
  width: "75px",
  height: "75px",
  viewBox: "0 0 75 75",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<title>no-nodes-keyart</title><g id="Nodes-panel-prototype-V2.1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="nodes-panel-(component)" transform="translate(-2085.000000, -352.000000)"><g id="nodes_panel" transform="translate(1880.000000, 151.000000)"><g id="Panel" transform="translate(50.000000, 0.000000)"><g id="Group-3" transform="translate(105.000000, 171.000000)"><g id="no-nodes-keyart" transform="translate(50.000000, 30.000000)"><rect id="Rectangle" x="0" y="0" width="75" height="75"></rect><g id="Group" transform="translate(6.562500, 8.164062)" fill="#C4C8D1" fill-rule="nonzero"><polygon id="Rectangle" transform="translate(49.192016, 45.302553) rotate(-45.000000) translate(-49.192016, -45.302553) " points="44.5045606 32.0526802 53.8794707 32.0526802 53.8794707 58.5524261 44.5045606 58.5524261"></polygon><path id="Path" d="M48.125,23.0859375 C54.15625,23.0859375 59.0625,18.1796875 59.0625,12.1484375 C59.0625,10.3359375 58.5625,8.6484375 57.78125,7.1484375 L49.34375,15.5859375 L44.6875,10.9296875 L53.125,2.4921875 C51.625,1.7109375 49.9375,1.2109375 48.125,1.2109375 C42.09375,1.2109375 37.1875,6.1171875 37.1875,12.1484375 C37.1875,13.4296875 37.4375,14.6484375 37.84375,15.7734375 L32.0625,21.5546875 L26.5,15.9921875 L28.71875,13.7734375 L24.3125,9.3671875 L30.9375,2.7421875 C27.28125,-0.9140625 21.34375,-0.9140625 17.6875,2.7421875 L6.625,13.8046875 L11.03125,18.2109375 L2.21875,18.2109375 L1.38777878e-15,20.4296875 L11.0625,31.4921875 L13.28125,29.2734375 L13.28125,20.4296875 L17.6875,24.8359375 L19.90625,22.6171875 L25.46875,28.1796875 L2.3125,51.3359375 L8.9375,57.9609375 L44.5,22.4296875 C45.625,22.8359375 46.84375,23.0859375 48.125,23.0859375 Z"></path></g></g></g></g></g></g></g>', 2)
  ]));
}
const NoResultsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
const _hoisted_1$1 = ["textContent"];
const _hoisted_2$1 = ["textContent"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NoResults",
  props: {
    showIcon: { type: Boolean },
    showRequest: { type: Boolean },
    rootView: {}
  },
  setup(__props) {
    const i18n2 = useI18n();
    return (_ctx, _cache) => {
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style.noResults]: true, [_ctx.$style.iconless]: !_ctx.showIcon }),
        "data-test-id": "node-creator-no-results"
      }, [
        _ctx.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.icon)
        }, [
          createVNode(NoResultsIcon)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.title)
        }, [
          renderSlot(_ctx.$slots, "title"),
          createBaseVNode("p", {
            textContent: toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.weDidntMakeThatYet"))
          }, null, 8, _hoisted_1$1),
          _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) || _ctx.rootView === unref(TRIGGER_NODE_CREATOR_VIEW) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.action)
          }, [
            createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe")) + " ", 1),
            _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_n8n_link, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("addHttpNode"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.httpRequest")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.rootView === unref(TRIGGER_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_n8n_link, {
              key: 1,
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("addWebhookNode"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.webhook")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.node")), 1)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        _ctx.showRequest ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.request)
        }, [
          createBaseVNode("p", {
            textContent: toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.wantUsToMakeItFaster"))
          }, null, 8, _hoisted_2$1),
          createBaseVNode("div", null, [
            createVNode(_component_n8n_link, { to: unref(REQUEST_NODE_FORM_URL) }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.requestTheNode")), 1),
                _cache[2] || (_cache[2] = createTextVNode("  ")),
                createBaseVNode("span", null, [
                  createVNode(_component_font_awesome_icon, {
                    class: normalizeClass(_ctx.$style.external),
                    icon: "external-link-alt",
                    title: unref(i18n2).baseText("nodeCreator.noResults.requestTheNode")
                  }, null, 8, ["class", "title"])
                ])
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const noResults = "_noResults_17xen_123";
const title$1 = "_title_17xen_136";
const action = "_action_17xen_145";
const request = "_request_17xen_146";
const icon = "_icon_17xen_162";
const external = "_external_17xen_168";
const style0$3 = {
  noResults,
  title: title$1,
  action,
  request,
  icon,
  external
};
const cssModules$3 = {
  "$style": style0$3
};
const NoResults = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NodesMode",
  emits: ["nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n2 = useI18n();
    const { mergedNodes, actions, onSubcategorySelected } = useNodeCreatorStore();
    const { pushViewStack, popViewStack } = useViewStacks();
    const { setAddedNodeActionParameters } = useActions();
    const { registerKeyHook } = useKeyboardNavigation();
    const activeViewStack = computed(() => useViewStacks().activeViewStack);
    const globalSearchItemsDiff = computed(() => useViewStacks().globalSearchItemsDiff);
    function getFilteredActions(node) {
      const nodeActions = actions?.[node.key] || [];
      if (activeViewStack.value.subcategory === HITL_SUBCATEGORY) {
        return getHumanInTheLoopActions(nodeActions);
      }
      if (activeViewStack.value.actionsFilter) {
        return activeViewStack.value.actionsFilter(nodeActions);
      }
      return nodeActions;
    }
    function getHumanInTheLoopActions(nodeActions) {
      return nodeActions.filter((action2) => action2.actionKey === SEND_AND_WAIT_OPERATION);
    }
    function selectNodeType(nodeTypes) {
      emit("nodeTypeSelected", nodeTypes);
    }
    function onSelected(item) {
      if (item.type === "subcategory") {
        const subcategoryKey = camelCase(item.properties.title);
        const title2 = i18n2.baseText(`nodeCreator.subcategoryNames.${subcategoryKey}`);
        const infoKey = `nodeCreator.subcategoryInfos.${subcategoryKey}`;
        const info2 = i18n2.baseText(infoKey);
        const extendedInfo = info2 !== infoKey ? { info: info2 } : {};
        const nodeIcon2 = item.properties.icon ? { type: "icon", name: item.properties.icon } : void 0;
        pushViewStack({
          subcategory: item.key,
          mode: "nodes",
          title: title2,
          nodeIcon: nodeIcon2,
          ...extendedInfo,
          ...item.properties.panelClass ? { panelClass: item.properties.panelClass } : {},
          rootView: activeViewStack.value.rootView,
          forceIncludeNodes: item.properties.forceIncludeNodes,
          baseFilter: baseSubcategoriesFilter,
          itemsMapper: subcategoriesMapper,
          sections: item.properties.sections
        });
        onSubcategorySelected({
          subcategory: item.key
        });
      }
      if (item.type === "node") {
        const nodeActions = getFilteredActions(item);
        if (nodeActions.length === 1) {
          selectNodeType([item.key]);
          setAddedNodeActionParameters({
            name: nodeActions[0].defaults.name ?? item.properties.displayName,
            key: item.key,
            value: nodeActions[0].values
          });
          return;
        }
        if (nodeActions.length === 0 || activeViewStack.value.hideActions) {
          selectNodeType([item.key]);
          return;
        }
        const transformedActions = nodeActions?.map(
          (a) => transformNodeType(a, item.properties.displayName, "action")
        );
        pushViewStack({
          subcategory: item.properties.displayName,
          title: item.properties.displayName,
          nodeIcon: getNodeIconSource(item.properties),
          rootView: activeViewStack.value.rootView,
          hasSearch: true,
          mode: "actions",
          items: transformedActions
        });
      }
      if (item.type === "view") {
        const views = {
          [TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
          [REGULAR_NODE_CREATOR_VIEW]: RegularView,
          [AI_NODE_CREATOR_VIEW]: AIView,
          [AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView
        };
        const itemKey = item.key;
        const matchedView = views[itemKey];
        if (!matchedView) {
          console.warn(`No view found for ${itemKey}`);
          return;
        }
        const view2 = matchedView(mergedNodes);
        pushViewStack({
          title: view2.title,
          subtitle: view2?.subtitle ?? "",
          info: view2?.info ?? "",
          items: view2.items,
          hasSearch: true,
          rootView: view2.value,
          mode: "nodes",
          // Root search should include all nodes
          searchItems: mergedNodes
        });
      }
      if (item.type === "link") {
        window.open(item.properties.url, "_blank");
      }
    }
    function subcategoriesMapper(item) {
      if (item.type !== "node") return item;
      const hasTriggerGroup = item.properties.group.includes("trigger");
      const nodeActions = getFilteredActions(item);
      const hasActions = nodeActions.length > 0;
      if (hasTriggerGroup && hasActions) {
        if (item.properties?.codex) {
          item.properties.codex.alias = [
            ...item.properties.codex?.alias || [],
            item.properties.displayName
          ];
        }
        item.properties.displayName = item.properties.displayName.replace(" Trigger", "");
      }
      return item;
    }
    function baseSubcategoriesFilter(item) {
      if (item.type === "section") return true;
      if (item.type !== "node") return false;
      const hasTriggerGroup = item.properties.group.includes("trigger");
      const nodeActions = getFilteredActions(item);
      const hasActions = nodeActions.length > 0;
      const isTriggerRootView = activeViewStack.value.rootView === TRIGGER_NODE_CREATOR_VIEW;
      if (isTriggerRootView) {
        return hasActions || hasTriggerGroup;
      }
      return hasActions || !hasTriggerGroup;
    }
    function arrowLeft() {
      popViewStack();
    }
    function onKeySelect(activeItemId) {
      const mergedItems = flattenCreateElements([
        ...activeViewStack.value.items ?? [],
        ...globalSearchItemsDiff.value ?? []
      ]);
      const item = mergedItems.find((i) => i.uuid === activeItemId);
      if (!item) return;
      onSelected(item);
    }
    registerKeyHook("MainViewArrowRight", {
      keyboardKeys: ["ArrowRight", "Enter"],
      condition: (type) => ["subcategory", "node", "link", "view"].includes(type),
      handler: onKeySelect
    });
    registerKeyHook("MainViewArrowLeft", {
      keyboardKeys: ["ArrowLeft"],
      condition: (type) => ["subcategory", "node", "link", "view"].includes(type),
      handler: arrowLeft
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        withMemo([activeViewStack.value.search], () => createVNode(ItemsRenderer, {
          elements: activeViewStack.value.items,
          class: normalizeClass(_ctx.$style.items),
          onSelected
        }, createSlots({ _: 2 }, [
          (activeViewStack.value.items || []).length === 0 && globalSearchItemsDiff.value.length === 0 ? {
            name: "empty",
            fn: withCtx(() => [
              createVNode(NoResults, {
                "root-view": activeViewStack.value.rootView,
                "show-icon": "",
                "show-request": "",
                onAddWebhookNode: _cache[0] || (_cache[0] = ($event) => selectNodeType([unref(WEBHOOK_NODE_TYPE)])),
                onAddHttpNode: _cache[1] || (_cache[1] = ($event) => selectNodeType([unref(HTTP_REQUEST_NODE_TYPE)]))
              }, null, 8, ["root-view"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["elements", "class"]), _cache, 2),
        globalSearchItemsDiff.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer, {
          key: 0,
          elements: globalSearchItemsDiff.value,
          category: unref(i18n2).baseText("nodeCreator.categoryNames.otherCategories"),
          onSelected
        }, null, 8, ["elements", "category"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const items = "_items_1i9xd_123";
const style0$2 = {
  items
};
const cssModules$2 = {
  "$style": style0$2
};
const NodesRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1 = ["textContent"];
const _hoisted_2 = ["textContent"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NodesListPanel",
  setup(__props) {
    const i18n2 = useI18n();
    const { callDebounced } = useDebounce();
    const { mergedNodes } = useNodeCreatorStore();
    const { pushViewStack, popViewStack, updateCurrentViewStack } = useViewStacks();
    const { setActiveItemIndex, attachKeydownEvent, detachKeydownEvent } = useKeyboardNavigation();
    const nodeCreatorStore = useNodeCreatorStore();
    const activeViewStack = computed(() => useViewStacks().activeViewStack);
    const viewStacks = computed(() => useViewStacks().viewStacks);
    const isActionsMode = computed(() => useViewStacks().activeViewStackMode === "actions");
    const searchPlaceholder = computed(
      () => isActionsMode.value ? i18n2.baseText("nodeCreator.actionsCategory.searchActions", {
        interpolate: { node: activeViewStack.value.title }
      }) : i18n2.baseText("nodeCreator.searchBar.searchNodes")
    );
    const nodeCreatorView = computed(() => useNodeCreatorStore().selectedView);
    function getDefaultActiveIndex(search = "") {
      if (activeViewStack.value.mode === "actions") {
        return 1;
      } else if (activeViewStack.value.sections) {
        return search ? 0 : 1;
      }
      return 0;
    }
    function onSearch(value) {
      if (activeViewStack.value.uuid) {
        updateCurrentViewStack({ search: value });
        void setActiveItemIndex(getDefaultActiveIndex(value));
        if (value.length) {
          callDebounced(
            nodeCreatorStore.onNodeFilterChanged,
            { trailing: true, debounceTime: 2e3 },
            {
              newValue: value,
              filteredNodes: activeViewStack.value.items ?? [],
              filterMode: activeViewStack.value.rootView ?? "Regular",
              subcategory: activeViewStack.value.subcategory,
              title: activeViewStack.value.title
            }
          );
        }
      }
    }
    function onTransitionEnd() {
      void setActiveItemIndex(getDefaultActiveIndex());
    }
    onMounted(() => {
      attachKeydownEvent();
      void setActiveItemIndex(getDefaultActiveIndex());
    });
    onUnmounted(() => {
      detachKeydownEvent();
    });
    watch(
      () => nodeCreatorView.value,
      (selectedView) => {
        const views = {
          [TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
          [REGULAR_NODE_CREATOR_VIEW]: RegularView,
          [AI_NODE_CREATOR_VIEW]: AIView,
          [AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView,
          [AI_UNCATEGORIZED_CATEGORY]: AINodesView
        };
        const itemKey = selectedView;
        const matchedView = views[itemKey];
        if (!matchedView) {
          console.warn(`No view found for ${itemKey}`);
          return;
        }
        const view2 = matchedView(mergedNodes);
        pushViewStack({
          title: view2.title,
          subtitle: view2?.subtitle ?? "",
          items: view2.items,
          info: view2.info,
          hasSearch: true,
          mode: "nodes",
          rootView: selectedView,
          // Root search should include all nodes
          searchItems: mergedNodes
        });
      },
      { immediate: true }
    );
    function onBackButton() {
      popViewStack();
    }
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_notice = resolveComponent("n8n-notice");
      return viewStacks.value.length > 0 ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: `panel-slide-${activeViewStack.value.transitionDirection}`,
        onAfterLeave: onTransitionEnd
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("aside", {
            key: `${activeViewStack.value.uuid}`,
            class: normalizeClass([_ctx.$style.nodesListPanel, activeViewStack.value.panelClass]),
            onKeydownCapture: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createBaseVNode("header", {
              class: normalizeClass({
                [_ctx.$style.header]: true,
                [_ctx.$style.hasBg]: !activeViewStack.value.subtitle,
                "nodes-list-panel-header": true
              }),
              "data-test-id": "nodes-list-header"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.top)
              }, [
                viewStacks.value.length > 1 && !activeViewStack.value.preventBack ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.backButton),
                  onClick: onBackButton
                }, [
                  createVNode(_component_font_awesome_icon, {
                    class: normalizeClass(_ctx.$style.backButtonIcon),
                    icon: "arrow-left",
                    size: "2x"
                  }, null, 8, ["class"])
                ], 2)) : createCommentVNode("", true),
                activeViewStack.value.nodeIcon ? (openBlock(), createBlock(_sfc_main$h, {
                  key: 1,
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "icon-source": activeViewStack.value.nodeIcon,
                  circle: false,
                  "show-tooltip": false,
                  size: 20
                }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
                activeViewStack.value.title ? (openBlock(), createElementBlock("p", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.title),
                  textContent: toDisplayString(activeViewStack.value.title)
                }, null, 10, _hoisted_1)) : createCommentVNode("", true)
              ], 2),
              activeViewStack.value.subtitle ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass({ [_ctx.$style.subtitle]: true, [_ctx.$style.offsetSubtitle]: viewStacks.value.length > 1 }),
                textContent: toDisplayString(activeViewStack.value.subtitle)
              }, null, 10, _hoisted_2)) : createCommentVNode("", true)
            ], 2),
            activeViewStack.value.hasSearch ? (openBlock(), createBlock(SearchBar, {
              key: 0,
              class: normalizeClass(_ctx.$style.searchBar),
              placeholder: searchPlaceholder.value ? searchPlaceholder.value : unref(i18n2).baseText("nodeCreator.searchBar.searchNodes"),
              "model-value": activeViewStack.value.search,
              "onUpdate:modelValue": onSearch
            }, null, 8, ["class", "placeholder", "model-value"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.renderedItems)
            }, [
              activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(_component_n8n_notice, {
                key: 0,
                class: normalizeClass(_ctx.$style.info),
                content: activeViewStack.value.info,
                theme: "warning"
              }, null, 8, ["class", "content"])) : createCommentVNode("", true),
              isActionsMode.value && activeViewStack.value.subcategory ? (openBlock(), createBlock(ActionsRenderer, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(NodesRenderer, mergeProps({
                key: 2,
                "root-view": nodeCreatorView.value
              }, _ctx.$attrs), null, 16, ["root-view"]))
            ], 2)
          ], 34))
        ]),
        _: 1
      }, 8, ["name"])) : createCommentVNode("", true);
    };
  }
});
const info = "_info_16r9i_145";
const backButton = "_backButton_16r9i_149";
const backButtonIcon = "_backButtonIcon_16r9i_156";
const nodeIcon = "_nodeIcon_16r9i_162";
const renderedItems = "_renderedItems_16r9i_167";
const searchBar = "_searchBar_16r9i_179";
const nodesListPanel = "_nodesListPanel_16r9i_183";
const footer = "_footer_16r9i_201";
const top = "_top_16r9i_212";
const header = "_header_16r9i_217";
const hasBg = "_hasBg_16r9i_223";
const title = "_title_16r9i_228";
const subtitle = "_subtitle_16r9i_239";
const offsetSubtitle = "_offsetSubtitle_16r9i_247";
const style0$1 = {
  info,
  backButton,
  backButtonIcon,
  nodeIcon,
  renderedItems,
  searchBar,
  nodesListPanel,
  footer,
  top,
  header,
  hasBg,
  title,
  subtitle,
  offsetSubtitle
};
const cssModules$1 = {
  "$style": style0$1
};
const NodesListPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeCreator",
  props: {
    active: { type: Boolean },
    onNodeTypeSelected: { type: Function }
  },
  emits: ["closeNodeCreator", "nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { resetViewStacks } = useViewStacks();
    const { registerKeyHook } = useKeyboardNavigation();
    const emit = __emit;
    const uiStore = useUIStore();
    const assistantStore = useAssistantStore();
    const builderStore = useBuilderStore();
    const { setShowScrim, setActions, setMergeNodes } = useNodeCreatorStore();
    const { generateMergedNodesAndActions } = useActionsGenerator();
    const state = reactive({
      nodeCreator: null,
      mousedownInsideEvent: null
    });
    const showScrim = computed(() => useNodeCreatorStore().showScrim);
    const viewStacksLength = computed(() => useViewStacks().viewStacks.length);
    const nodeCreatorInlineStyle = computed(() => {
      const rightPosition = getRightOffset();
      return { top: `${uiStore.bannersHeight + uiStore.headerHeight}px`, right: `${rightPosition}px` };
    });
    function getRightOffset() {
      if (assistantStore.isAssistantOpen) {
        return assistantStore.chatWidth;
      }
      if (builderStore.isAssistantOpen) {
        return builderStore.chatWidth;
      }
      return 0;
    }
    function onMouseUpOutside() {
      if (state.mousedownInsideEvent) {
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        });
        state.mousedownInsideEvent.target?.dispatchEvent(clickEvent);
        state.mousedownInsideEvent = null;
        unBindOnMouseUpOutside();
      }
    }
    function unBindOnMouseUpOutside() {
      document.removeEventListener("mouseup", onMouseUpOutside);
      document.removeEventListener("touchstart", onMouseUpOutside);
    }
    function onMouseUp() {
      state.mousedownInsideEvent = null;
      unBindOnMouseUpOutside();
    }
    function onMouseDown(event) {
      state.mousedownInsideEvent = event;
      document.addEventListener("mouseup", onMouseUpOutside);
      document.addEventListener("touchstart", onMouseUpOutside);
    }
    function onDragOver(event) {
      event.preventDefault();
    }
    function onDrop(event) {
      if (!event.dataTransfer) {
        return;
      }
      const dragData = event.dataTransfer.getData(DRAG_EVENT_DATA_KEY);
      const nodeCreatorBoundingRect = state.nodeCreator.getBoundingClientRect();
      if (dragData && event.pageX >= nodeCreatorBoundingRect.x && event.pageY >= nodeCreatorBoundingRect.y) {
        event.stopPropagation();
      }
    }
    watch(
      () => props.active,
      (isActive) => {
        if (!isActive) {
          setShowScrim(false);
          resetViewStacks();
        }
      }
    );
    watch(viewStacksLength, (value) => {
      if (value === 0) {
        emit("closeNodeCreator");
        setShowScrim(false);
      }
    });
    registerKeyHook("NodeCreatorCloseEscape", {
      keyboardKeys: ["Escape"],
      handler: () => emit("closeNodeCreator")
    });
    registerKeyHook("NodeCreatorCloseTab", {
      keyboardKeys: ["Tab"],
      handler: () => emit("closeNodeCreator")
    });
    watch(
      () => ({
        httpOnlyCredentials: useCredentialsStore().httpOnlyCredentialTypes,
        nodeTypes: useNodeTypesStore().visibleNodeTypes
      }),
      ({ nodeTypes, httpOnlyCredentials }) => {
        const { actions, mergedNodes } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
        setActions(actions);
        setMergeNodes(mergedNodes);
      },
      { immediate: true }
    );
    const { nodeCreator: nodeCreator2 } = toRefs(state);
    onBeforeUnmount(() => {
      unBindOnMouseUpOutside();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("aside", {
          class: normalizeClass({
            [_ctx.$style.nodeCreatorScrim]: true,
            [_ctx.$style.active]: showScrim.value
          })
        }, null, 2),
        _ctx.active ? (openBlock(), createBlock(_sfc_main$i, {
          key: 0,
          class: normalizeClass(_ctx.$style.close),
          type: "secondary",
          icon: "times",
          "aria-label": "Close Node Creator",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("closeNodeCreator"))
        }, null, 8, ["class"])) : createCommentVNode("", true),
        createVNode(SlideTransition, null, {
          default: withCtx(() => [
            _ctx.active ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "nodeCreator",
              ref: nodeCreator2,
              class: normalizeClass({ [_ctx.$style.nodeCreator]: true }),
              style: normalizeStyle(nodeCreatorInlineStyle.value),
              "data-test-id": "node-creator",
              onDragover: onDragOver,
              onDrop,
              onMousedown: onMouseDown,
              onMouseup: onMouseUp
            }, [
              createVNode(NodesListPanel, { onNodeTypeSelected: _ctx.onNodeTypeSelected }, null, 8, ["onNodeTypeSelected"])
            ], 38)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const nodeCreator = "_nodeCreator_xjjfv_127";
const nodeCreatorScrim = "_nodeCreatorScrim_xjjfv_139";
const active = "_active_xjjfv_151";
const close = "_close_xjjfv_155";
const style0 = {
  nodeCreator,
  nodeCreatorScrim,
  active,
  close
};
const cssModules = {
  "$style": style0
};
const NodeCreator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeCreator as default
};
