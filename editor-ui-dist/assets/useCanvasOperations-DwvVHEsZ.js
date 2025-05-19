import { bF as upperFirst, et as toString, eu as createCompounder, ev as SetCache, ew as arrayIncludes, ex as cacheHas, ey as baseRest, ez as isArrayLikeObject, eA as baseFlatten, eB as AI_CATEGORY_DOCUMENT_LOADERS, eC as AI_CATEGORY_LANGUAGE_MODELS, eD as AI_CATEGORY_MEMORY, eE as AI_CATEGORY_OUTPUTPARSER, eF as AI_CATEGORY_RETRIEVERS, eG as AI_CATEGORY_TEXT_SPLITTERS, eH as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, eI as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, c as useI18n, eJ as AI_CATEGORY_TOOLS, e4 as CORE_NODES_CATEGORY, eK as AI_CATEGORY_EMBEDDING, eL as AI_CATEGORY_VECTOR_STORES, eM as AI_UNCATEGORIZED_CATEGORY, eN as AI_OTHERS_NODE_CREATOR_VIEW, bm as NodeConnectionTypes, bz as useNodeTypesStore, aN as useTemplatesStore, p as useSettingsStore, eO as AI_TRANSFORM_NODE_TYPE, eP as AI_NODE_CREATOR_VIEW, eQ as RSS_READ_NODE_TYPE, eR as EMAIL_SEND_NODE_TYPE, eS as DEFAULT_SUBCATEGORY, eT as SET_NODE_TYPE, eU as CODE_NODE_TYPE, eV as DATETIME_NODE_TYPE, eW as FILTER_NODE_TYPE, eX as REMOVE_DUPLICATES_NODE_TYPE, eY as SPLIT_OUT_NODE_TYPE, eZ as LIMIT_NODE_TYPE, e_ as SUMMARIZE_NODE_TYPE, e$ as AGGREGATE_NODE_TYPE, f0 as MERGE_NODE_TYPE, ec as HTML_NODE_TYPE, f1 as MARKDOWN_NODE_TYPE, f2 as XML_NODE_TYPE, f3 as CRYPTO_NODE_TYPE, f4 as EXTRACT_FROM_FILE_NODE_TYPE, f5 as CONVERT_TO_FILE_NODE_TYPE, f6 as COMPRESSION_NODE_TYPE, f7 as EDIT_IMAGE_NODE_TYPE, f8 as TRANSFORM_DATA_SUBCATEGORY, f9 as IF_NODE_TYPE, fa as SPLIT_IN_BATCHES_NODE_TYPE, fb as FLOWS_CONTROL_SUBCATEGORY, fc as HTTP_REQUEST_NODE_TYPE, fd as WEBHOOK_NODE_TYPE, fe as HELPERS_SUBCATEGORY, ff as HITL_SUBCATEGORY, fg as HUMAN_IN_THE_LOOP_CATEGORY, bs as AI_SUBCATEGORY, fh as TRIGGER_NODE_CREATOR_VIEW, fi as REGULAR_NODE_CREATOR_VIEW, fj as MANUAL_TRIGGER_NODE_TYPE, fk as EMAIL_IMAP_NODE_TYPE, fl as SCHEDULE_TRIGGER_NODE_TYPE, fm as FORM_TRIGGER_NODE_TYPE, dK as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, bk as CHAT_TRIGGER_NODE_TYPE, fn as OTHER_TRIGGER_NODES_SUBCATEGORY, bt as AI_CATEGORY_AGENTS, bu as AI_CATEGORY_CHAINS, O as defineStore, r as ref, q as computed, fo as extendItemsWithUUID, $ as useCanvasStore, fp as flattenCreateElements, fq as searchNodes, fr as transformNodeType, fs as subcategorizeItems, ft as isAINode, fu as AI_CATEGORY_ROOT_NODES, fv as AI_CATEGORY_MCP_NODES, fw as groupItemsInSections, z as nextTick, fx as getThemedValue, H as useUIStore, bn as v4, bv as AI_CODE_NODE_TYPE, fy as AI_TRANSFORM_NODE_TYPE$1, fz as sortNodeCreateElements, fA as isValidCanvasConnectionMode, c9 as CanvasConnectionMode, c8 as isValidNodeConnectionType, Q as useWorkflowsStore, as as useNDVStore, aP as useExternalHooks, fB as isVueFlowConnection, bw as getNodeInputs, fC as CUSTOM_API_CALL_KEY, T as STORES, cc as NODE_CREATOR_OPEN_SOURCES, ag as useTelemetry, Z as useRootStore, bS as useCredentialsStore, bV as useHistoryStore, E as useTagsStore, at as useExecutionsStore, a1 as useProjectsStore, a as useToast, a5 as useWorkflowHelpers, bA as useNodeHelpers, bf as useClipboard, fD as getSubworkflowId, fE as MCP_TRIGGER_NODE_TYPE, fF as UPDATE_WEBHOOK_ID_NODE_TYPES, dA as generateNodesGraph, fG as getNewNodePosition, fH as AddConnectionCommand, ay as STICKY_NODE_TYPE, by as getNodeOutputs, fI as RemoveConnectionCommand, aa as EnterpriseEditionFeature, cn as deepCopy, el as isPresent, fJ as RemoveNodeCommand, fK as RenameNodeCommand, bq as usePinnedData, fL as useDataSchema, fM as MoveNodeCommand, fN as DEFAULT_NODE_SIZE, fO as CONFIGURATION_NODE_SIZE, bx as getConnectionTypes, fP as generateOffsets, fQ as CONFIGURABLE_NODE_SIZE, fR as PUSH_NODES_OFFSET, fS as AddNodeCommand, fT as NODE_SIZE, fU as GRID_SIZE, fV as getNodeParameters } from "./index-2X4RXSdq.js";
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed2 = value;
      value = value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed2) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed2, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
function getNodeView(node) {
  return {
    key: node.name,
    type: "node",
    properties: {
      group: [],
      name: node.name,
      displayName: node.displayName,
      title: node.displayName,
      description: node.description,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      icon: node.icon,
      iconUrl: node.iconUrl
    }
  };
}
function getAiNodesBySubcategory(nodes, subcategory) {
  return nodes.filter(
    (node) => !node.hidden && node.codex?.subcategories?.[AI_SUBCATEGORY]?.includes(subcategory)
  ).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
}
function AIView(_nodes) {
  const i18n = useI18n();
  const nodeTypesStore = useNodeTypesStore();
  const templatesStore = useTemplatesStore();
  const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
  const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
  const websiteCategoryURLParams = templatesStore.websiteTemplateRepositoryParameters;
  websiteCategoryURLParams.append("utm_user_role", "AdvancedAI");
  const websiteCategoryURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams);
  const askAiEnabled = useSettingsStore().isAskAiEnabled;
  const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE);
  const transformNode = askAiEnabled && aiTransformNode ? [getNodeView(aiTransformNode)] : [];
  return {
    value: AI_NODE_CREATOR_VIEW,
    title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
    subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
    items: [
      {
        key: "ai_templates_root",
        type: "link",
        properties: {
          title: i18n.baseText("nodeCreator.aiPanel.linkItem.title"),
          icon: "box-open",
          description: i18n.baseText("nodeCreator.aiPanel.linkItem.description"),
          name: "ai_templates_root",
          url: websiteCategoryURL,
          tag: {
            type: "info",
            text: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerTag")
          }
        }
      },
      ...agentNodes,
      ...chainNodes,
      ...transformNode,
      {
        key: AI_OTHERS_NODE_CREATOR_VIEW,
        type: "view",
        properties: {
          title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
          icon: "robot",
          description: i18n.baseText("nodeCreator.aiPanel.aiOtherNodesDescription")
        }
      }
    ]
  };
}
function AINodesView(_nodes) {
  const i18n = useI18n();
  function getAISubcategoryProperties(nodeConnectionType) {
    return {
      connectionType: nodeConnectionType,
      iconProps: {
        color: `var(--node-type-${nodeConnectionType}-color)`
      },
      panelClass: `nodes-list-panel-${nodeConnectionType}`
    };
  }
  function getSubcategoryInfo(subcategory) {
    const localeKey = `nodeCreator.subcategoryInfos.${camelCase(subcategory)}`;
    const info = i18n.baseText(localeKey);
    if (info === localeKey) return void 0;
    return info;
  }
  return {
    value: AI_OTHERS_NODE_CREATOR_VIEW,
    title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
    subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
    items: [
      {
        key: AI_CATEGORY_DOCUMENT_LOADERS,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_DOCUMENT_LOADERS,
          info: getSubcategoryInfo(AI_CATEGORY_DOCUMENT_LOADERS),
          icon: "file-import",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiDocument)
        }
      },
      {
        key: AI_CATEGORY_LANGUAGE_MODELS,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_LANGUAGE_MODELS,
          info: getSubcategoryInfo(AI_CATEGORY_LANGUAGE_MODELS),
          icon: "language",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiLanguageModel)
        }
      },
      {
        key: AI_CATEGORY_MEMORY,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_MEMORY,
          info: getSubcategoryInfo(AI_CATEGORY_MEMORY),
          icon: "brain",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiMemory)
        }
      },
      {
        key: AI_CATEGORY_OUTPUTPARSER,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_OUTPUTPARSER,
          info: getSubcategoryInfo(AI_CATEGORY_OUTPUTPARSER),
          icon: "list",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiOutputParser)
        }
      },
      {
        key: AI_CATEGORY_RETRIEVERS,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_RETRIEVERS,
          info: getSubcategoryInfo(AI_CATEGORY_RETRIEVERS),
          icon: "search",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiRetriever)
        }
      },
      {
        key: AI_CATEGORY_TEXT_SPLITTERS,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_TEXT_SPLITTERS,
          info: getSubcategoryInfo(AI_CATEGORY_TEXT_SPLITTERS),
          icon: "grip-lines-vertical",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiTextSplitter)
        }
      },
      {
        type: "subcategory",
        key: AI_CATEGORY_TOOLS,
        category: CORE_NODES_CATEGORY,
        properties: {
          title: AI_CATEGORY_TOOLS,
          info: getSubcategoryInfo(AI_CATEGORY_TOOLS),
          icon: "tools",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiTool),
          sections: [
            {
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE]
            }
          ]
        }
      },
      {
        key: AI_CATEGORY_EMBEDDING,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_EMBEDDING,
          info: getSubcategoryInfo(AI_CATEGORY_EMBEDDING),
          icon: "vector-square",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiEmbedding)
        }
      },
      {
        key: AI_CATEGORY_VECTOR_STORES,
        type: "subcategory",
        properties: {
          title: AI_CATEGORY_VECTOR_STORES,
          info: getSubcategoryInfo(AI_CATEGORY_VECTOR_STORES),
          icon: "project-diagram",
          ...getAISubcategoryProperties(NodeConnectionTypes.AiVectorStore)
        }
      },
      {
        key: AI_UNCATEGORIZED_CATEGORY,
        type: "subcategory",
        properties: {
          title: AI_UNCATEGORIZED_CATEGORY,
          icon: "code"
        }
      }
    ]
  };
}
function TriggerView() {
  const i18n = useI18n();
  const view = {
    value: TRIGGER_NODE_CREATOR_VIEW,
    title: i18n.baseText("nodeCreator.triggerHelperPanel.selectATrigger"),
    subtitle: i18n.baseText("nodeCreator.triggerHelperPanel.selectATriggerDescription"),
    items: [
      {
        key: MANUAL_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: MANUAL_TRIGGER_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDescription"),
          icon: "fa:mouse-pointer"
        }
      },
      {
        key: DEFAULT_SUBCATEGORY,
        type: "subcategory",
        properties: {
          forceIncludeNodes: [WEBHOOK_NODE_TYPE, EMAIL_IMAP_NODE_TYPE],
          title: "App Trigger Nodes",
          icon: "satellite-dish"
        }
      },
      {
        key: SCHEDULE_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: SCHEDULE_TRIGGER_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDescription"),
          icon: "fa:clock"
        }
      },
      {
        key: WEBHOOK_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: WEBHOOK_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDescription"),
          iconData: {
            type: "file",
            fileBuffer: "/static/webhook-icon.svg"
          }
        }
      },
      {
        key: FORM_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: FORM_TRIGGER_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDescription"),
          iconData: {
            type: "file",
            fileBuffer: "/static/form-grey.svg"
          }
        }
      },
      {
        key: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDescription"),
          icon: "fa:sign-out-alt"
        }
      },
      {
        key: CHAT_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: CHAT_TRIGGER_NODE_TYPE,
          displayName: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDisplayName"),
          description: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDescription"),
          icon: "fa:comments"
        }
      },
      {
        type: "subcategory",
        key: OTHER_TRIGGER_NODES_SUBCATEGORY,
        category: CORE_NODES_CATEGORY,
        properties: {
          title: OTHER_TRIGGER_NODES_SUBCATEGORY,
          icon: "folder-open"
        }
      }
    ]
  };
  return view;
}
function RegularView(nodes) {
  const i18n = useI18n();
  const popularItemsSubcategory = [
    SET_NODE_TYPE,
    CODE_NODE_TYPE,
    DATETIME_NODE_TYPE,
    AI_TRANSFORM_NODE_TYPE
  ];
  const getSendAndWaitNodes = (nodes2) => {
    return (nodes2 ?? []).filter((node) => node.codex?.categories?.includes(HUMAN_IN_THE_LOOP_CATEGORY)).map((node) => node.name);
  };
  const view = {
    value: REGULAR_NODE_CREATOR_VIEW,
    title: i18n.baseText("nodeCreator.triggerHelperPanel.whatHappensNext"),
    items: [
      {
        key: DEFAULT_SUBCATEGORY,
        type: "subcategory",
        properties: {
          title: "App Regular Nodes",
          icon: "globe",
          forceIncludeNodes: [RSS_READ_NODE_TYPE, EMAIL_SEND_NODE_TYPE]
        }
      },
      {
        type: "subcategory",
        key: TRANSFORM_DATA_SUBCATEGORY,
        category: CORE_NODES_CATEGORY,
        properties: {
          title: TRANSFORM_DATA_SUBCATEGORY,
          icon: "pen",
          sections: [
            {
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: popularItemsSubcategory
            },
            {
              key: "addOrRemove",
              title: i18n.baseText("nodeCreator.sectionNames.transform.addOrRemove"),
              items: [
                FILTER_NODE_TYPE,
                REMOVE_DUPLICATES_NODE_TYPE,
                SPLIT_OUT_NODE_TYPE,
                LIMIT_NODE_TYPE
              ]
            },
            {
              key: "combine",
              title: i18n.baseText("nodeCreator.sectionNames.transform.combine"),
              items: [SUMMARIZE_NODE_TYPE, AGGREGATE_NODE_TYPE, MERGE_NODE_TYPE]
            },
            {
              key: "convert",
              title: i18n.baseText("nodeCreator.sectionNames.transform.convert"),
              items: [
                HTML_NODE_TYPE,
                MARKDOWN_NODE_TYPE,
                XML_NODE_TYPE,
                CRYPTO_NODE_TYPE,
                EXTRACT_FROM_FILE_NODE_TYPE,
                CONVERT_TO_FILE_NODE_TYPE,
                COMPRESSION_NODE_TYPE,
                EDIT_IMAGE_NODE_TYPE
              ]
            }
          ]
        }
      },
      {
        type: "subcategory",
        key: FLOWS_CONTROL_SUBCATEGORY,
        category: CORE_NODES_CATEGORY,
        properties: {
          title: FLOWS_CONTROL_SUBCATEGORY,
          icon: "code-branch",
          sections: [
            {
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [FILTER_NODE_TYPE, IF_NODE_TYPE, SPLIT_IN_BATCHES_NODE_TYPE, MERGE_NODE_TYPE]
            }
          ]
        }
      },
      {
        type: "subcategory",
        key: HELPERS_SUBCATEGORY,
        category: CORE_NODES_CATEGORY,
        properties: {
          title: HELPERS_SUBCATEGORY,
          icon: "toolbox",
          sections: [
            {
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [HTTP_REQUEST_NODE_TYPE, WEBHOOK_NODE_TYPE, CODE_NODE_TYPE]
            }
          ]
        }
      },
      // To add node to this subcategory:
      // - add "HITL" to the "categories" property of the node's codex
      // - add "HITL": ["Human in the Loop"] to the "subcategories" property of the node's codex
      // node has to have the "sendAndWait" operation, if a new operation needs to be included here:
      // - update getHumanInTheLoopActions in packages/frontend/editor-ui/src/components/Node/NodeCreator/Modes/NodesMode.vue
      {
        type: "subcategory",
        key: HITL_SUBCATEGORY,
        category: HUMAN_IN_THE_LOOP_CATEGORY,
        properties: {
          title: HITL_SUBCATEGORY,
          icon: "user-check",
          sections: [
            {
              key: "sendAndWait",
              title: i18n.baseText("nodeCreator.sectionNames.sendAndWait"),
              items: getSendAndWaitNodes(nodes)
            }
          ]
        }
      }
    ]
  };
  const hasAINodes = (nodes ?? []).some((node) => node.codex?.categories?.includes(AI_SUBCATEGORY));
  if (hasAINodes)
    view.items.unshift({
      key: AI_NODE_CREATOR_VIEW,
      type: "view",
      properties: {
        title: i18n.baseText("nodeCreator.aiPanel.langchainAiNodes"),
        icon: "robot",
        description: i18n.baseText("nodeCreator.aiPanel.nodesForAi"),
        borderless: true
      }
    });
  view.items.push({
    key: TRIGGER_NODE_CREATOR_VIEW,
    type: "view",
    properties: {
      title: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTrigger"),
      icon: "bolt",
      description: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTriggerDescription")
    }
  });
  return view;
}
const KEYBOARD_ID_ATTR = "data-keyboard-nav-id";
const WATCHED_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Enter",
  "Escape",
  "Tab"
];
const useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
  const selectableItems = ref([]);
  const activeItemId = ref(null);
  const keysHooks = ref({});
  function getItemType(element) {
    return element?.getAttribute("data-keyboard-nav-type");
  }
  function getElementId(element) {
    return element?.getAttribute(KEYBOARD_ID_ATTR) || void 0;
  }
  async function refreshSelectableItems() {
    return await new Promise((resolve) => {
      cleanupSelectableItems();
      setTimeout(() => {
        selectableItems.value = Array.from(
          document.querySelectorAll("[data-keyboard-nav-type]")
        ).map((el) => new WeakRef(el));
        resolve();
      }, 0);
    });
  }
  function executeKeyHooks(keyboardKey, activeItem) {
    const flatHooks = Object.values(keysHooks.value);
    const hooks = flatHooks.filter((hook) => hook.keyboardKeys.includes(keyboardKey));
    hooks.forEach((hook) => {
      if (!activeItemId.value) return;
      const conditionPassed = hook.condition === void 0 || hook.condition(getItemType(activeItem) || "", activeItemId.value);
      if (conditionPassed && activeItemId.value) {
        hook.handler(activeItemId.value, keyboardKey);
      }
    });
  }
  async function onKeyDown(e) {
    if (e.target instanceof Element && e.target.classList.contains("ignore-key-press-node-creator")) {
      return;
    }
    const pressedKey = e.key;
    if (!WATCHED_KEYS.includes(pressedKey)) return;
    e.preventDefault();
    e.stopPropagation();
    await refreshSelectableItems();
    const activeItemIndex = selectableItems.value.findIndex(
      (item) => getElementId(item?.deref()) === activeItemId.value
    );
    const activeItem = selectableItems.value[activeItemIndex]?.deref();
    const isArrowDown = pressedKey === "ArrowDown";
    const isArrowUp = pressedKey === "ArrowUp";
    if (!activeItem) return;
    if (isArrowDown) {
      const nextItemIndex = activeItemIndex < selectableItems.value.length - 1 ? activeItemIndex + 1 : 0;
      setActiveItem(selectableItems.value[nextItemIndex]?.deref());
    }
    if (isArrowUp) {
      const previousIndex = activeItemIndex > 0 ? activeItemIndex - 1 : selectableItems.value.length - 1;
      setActiveItem(selectableItems.value[previousIndex]?.deref());
    }
    executeKeyHooks(pressedKey, activeItem);
  }
  function setActiveItemId(id) {
    activeItemId.value = id;
  }
  function setActiveItem(item) {
    const itemId = getElementId(item);
    if (!itemId) return;
    setActiveItemId(itemId);
    if (item?.scrollIntoView) {
      item?.scrollIntoView({ block: "center" });
    }
  }
  async function setActiveItemIndex(index) {
    await refreshSelectableItems();
    setActiveItem(selectableItems.value[index]?.deref());
  }
  function attachKeydownEvent() {
    document.addEventListener("keydown", onKeyDown, { capture: true });
  }
  function detachKeydownEvent() {
    cleanupSelectableItems();
    document.removeEventListener("keydown", onKeyDown, { capture: true });
  }
  function registerKeyHook(name, hook) {
    hook.keyboardKeys.forEach((keyboardKey) => {
      if (WATCHED_KEYS.includes(keyboardKey)) {
        keysHooks.value = { ...keysHooks.value, [name]: hook };
      } else {
        throw new Error(`Key ${keyboardKey} is not supported`);
      }
    });
  }
  function cleanupSelectableItems() {
    selectableItems.value = [];
  }
  function getActiveItemIndex() {
    return selectableItems.value.findIndex(
      (item) => getElementId(item?.deref()) === activeItemId.value
    );
  }
  return {
    activeItemId,
    attachKeydownEvent,
    refreshSelectableItems,
    detachKeydownEvent,
    registerKeyHook,
    getActiveItemIndex,
    setActiveItemId,
    setActiveItemIndex
  };
});
const useViewStacks = defineStore("nodeCreatorViewStacks", () => {
  const nodeCreatorStore = useNodeCreatorStore();
  const { getActiveItemIndex } = useKeyboardNavigation();
  const i18n = useI18n();
  const settingsStore = useSettingsStore();
  const viewStacks = ref([]);
  const activeStackItems = computed(() => {
    const stack = getLastActiveStack();
    if (!stack?.baselineItems) {
      return stack.items ? extendItemsWithUUID(stack.items) : [];
    }
    if (stack.search && searchBaseItems.value) {
      let searchBase = searchBaseItems.value;
      const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
      if (searchBaseItems.value.length === 0) {
        searchBase = flattenCreateElements(stack.baselineItems ?? []);
      }
      if (
        // Filter-out AI sub-nodes if canvas has no AI nodes and the root view is not AI
        !(isAiRootView(stack) || canvasHasAINodes) || // or if the source is a plus endpoint or a node connection drop and the root view is not AI subcategory
        ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)
      ) {
        searchBase = filterOutAiNodes(searchBase);
      }
      const searchResults = extendItemsWithUUID(searchNodes(stack.search || "", searchBase));
      const groupedNodes = groupIfAiNodes(searchResults, false) ?? searchResults;
      stack.activeIndex = groupedNodes.some((node) => node.type === "section") ? 1 : 0;
      return groupedNodes;
    }
    return extendItemsWithUUID(groupIfAiNodes(stack.baselineItems, true));
  });
  const activeViewStack = computed(() => {
    const stack = getLastActiveStack();
    if (!stack) return {};
    const flatBaselineItems = flattenCreateElements(stack.baselineItems ?? []);
    return {
      ...stack,
      items: activeStackItems.value,
      hasSearch: flatBaselineItems.length > 8 || stack?.hasSearch
    };
  });
  const activeViewStackMode = computed(
    () => activeViewStack.value.mode || TRIGGER_NODE_CREATOR_VIEW
  );
  const searchBaseItems = computed(() => {
    const stack = getLastActiveStack();
    if (!stack?.searchItems) return [];
    return stack.searchItems.map((item) => transformNodeType(item, stack.subcategory));
  });
  function isAiSubcategoryView(stack) {
    return stack.rootView === AI_OTHERS_NODE_CREATOR_VIEW;
  }
  function getLastActiveStack() {
    return viewStacks.value[viewStacks.value.length - 1];
  }
  function getAllNodeCreateElements() {
    return nodeCreatorStore.mergedNodes.map(
      (item) => transformNodeType(item)
    );
  }
  const globalSearchItemsDiff = computed(() => {
    const stack = getLastActiveStack();
    if (!stack?.search || isAiSubcategoryView(stack)) return [];
    const allNodes = getAllNodeCreateElements();
    const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
    let globalSearchResult = extendItemsWithUUID(
      searchNodes(stack.search || "", filteredNodes)
    );
    if (isAiRootView(stack)) {
      globalSearchResult = groupIfAiNodes(globalSearchResult);
    }
    const filteredItems = globalSearchResult.filter((item) => {
      return !activeStackItems.value.find((activeItem) => {
        if (activeItem.type === "section") {
          const matchingSectionItem = activeItem.children.some(
            (sectionItem) => sectionItem.key === item.key
          );
          return matchingSectionItem;
        }
        return activeItem.key === item.key;
      });
    });
    const filteredSections = filteredItems.filter((item) => {
      if (item.type === "section") {
        const hasVisibleChildren = item.children.some(
          (child) => activeStackItems.value.some((filteredItem) => filteredItem.key === child.key)
        );
        return hasVisibleChildren;
      }
      return true;
    });
    return filteredSections;
  });
  const itemsBySubcategory = computed(() => subcategorizeItems(nodeCreatorStore.mergedNodes));
  function isAiRootView(stack) {
    return stack.rootView === AI_NODE_CREATOR_VIEW;
  }
  function filterAiRootNodes(items) {
    return items.filter((node) => {
      if (node.type !== "node") return false;
      const subcategories = node.properties.codex?.subcategories?.[AI_SUBCATEGORY] ?? [];
      return subcategories.includes(AI_CATEGORY_ROOT_NODES) && !subcategories?.includes(AI_CATEGORY_TOOLS);
    });
  }
  function groupIfAiNodes(items, sortAlphabetically = true) {
    const aiNodes = items.filter((node) => isAINode(node));
    const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
    if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()))) {
      const sectionsMap = /* @__PURE__ */ new Map();
      const aiRootNodes = filterAiRootNodes(aiNodes);
      const aiSubNodes = difference(aiNodes, aiRootNodes);
      aiSubNodes.forEach((node) => {
        const subcategories = node.properties.codex?.subcategories ?? {};
        const section = subcategories[AI_SUBCATEGORY]?.[0];
        if (section) {
          const subSection = subcategories[section]?.[0];
          const sectionKey = subSection ?? section;
          const currentItems = sectionsMap.get(sectionKey)?.items ?? [];
          const isSubnodesSection = !(subcategories[AI_SUBCATEGORY].includes(AI_CATEGORY_ROOT_NODES) || subcategories[AI_SUBCATEGORY].includes(AI_CATEGORY_MCP_NODES));
          let title = section;
          if (isSubnodesSection) {
            title = `${section} (${i18n.baseText("nodeCreator.subnodes")})`;
          }
          if (subSection) {
            title = subSection;
          }
          sectionsMap.set(sectionKey, {
            key: sectionKey,
            title,
            items: [...currentItems, node.key]
          });
        }
      });
      const nonAiNodes = difference(items, aiNodes);
      const sections = Array.from(sectionsMap.values());
      return [
        ...nonAiNodes,
        ...aiRootNodes,
        ...groupItemsInSections(aiSubNodes, sections, sortAlphabetically)
      ];
    }
    return items;
  }
  function filterOutAiNodes(items) {
    const filteredSearchBase = items.filter((item) => {
      if (item.type === "node") {
        const isAICategory = item.properties.codex?.categories?.includes(AI_SUBCATEGORY) === true;
        if (!isAICategory) return true;
        const isRootNodeSubcategory = item.properties.codex?.subcategories?.[AI_SUBCATEGORY]?.includes(AI_CATEGORY_ROOT_NODES);
        return isRootNodeSubcategory;
      }
      return true;
    });
    return filteredSearchBase;
  }
  async function gotoCompatibleConnectionView(connectionType, isOutput, filter) {
    let nodesByConnectionType;
    let relatedAIView;
    if (isOutput === true) {
      nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByInputConnectionTypeNames;
      relatedAIView = {
        properties: {
          title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
          icon: "robot"
        }
      };
    } else {
      nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByOutputConnectionTypeNames;
      relatedAIView = AINodesView().items.find(
        (item) => item.properties.connectionType === connectionType
      );
    }
    let extendedInfo = {};
    if (!filter?.nodes?.length && relatedAIView?.properties.info) {
      extendedInfo = { info: relatedAIView?.properties.info };
    }
    await nextTick();
    const iconName = getThemedValue(relatedAIView?.properties.icon, useUIStore().appliedTheme);
    pushViewStack(
      {
        title: relatedAIView?.properties.title,
        ...extendedInfo,
        rootView: AI_OTHERS_NODE_CREATOR_VIEW,
        mode: "nodes",
        items: nodeCreatorStore.allNodeCreatorNodes,
        nodeIcon: iconName ? {
          type: "icon",
          name: iconName,
          color: relatedAIView?.properties.iconProps?.color
        } : void 0,
        panelClass: relatedAIView?.properties.panelClass,
        baseFilter: (i) => {
          if (i.key === AI_CODE_NODE_TYPE) return false;
          const displayNode = nodesByConnectionType[connectionType].includes(i.key);
          if (displayNode && filter?.nodes?.length) {
            return filter.nodes.includes(i.key);
          }
          return displayNode;
        },
        itemsMapper(item) {
          return {
            ...item,
            subcategory: connectionType
          };
        },
        actionsFilter: (items) => {
          if (items.some((item) => item.outputConnectionType)) {
            return items.filter((item) => item.outputConnectionType === connectionType);
          }
          return items;
        },
        hideActions: true,
        preventBack: true
      },
      { resetStacks: true }
    );
  }
  function setStackBaselineItems() {
    const stack = getLastActiveStack();
    if (!stack || !activeViewStack.value.uuid) return;
    let stackItems = stack?.items ?? [];
    if (!stack?.items) {
      const subcategory = stack?.subcategory ?? DEFAULT_SUBCATEGORY;
      let itemsInSubcategory = itemsBySubcategory.value[subcategory];
      const isAskAiEnabled = settingsStore.isAskAiEnabled;
      if (!isAskAiEnabled) {
        itemsInSubcategory = itemsInSubcategory.filter(
          (item) => item.key !== AI_TRANSFORM_NODE_TYPE$1
        );
      }
      const sections = stack.sections;
      if (sections) {
        stackItems = groupItemsInSections(itemsInSubcategory, sections);
      } else {
        stackItems = itemsInSubcategory;
      }
    }
    if ((stack.forceIncludeNodes ?? []).length > 0) {
      const matchedNodes = nodeCreatorStore.mergedNodes.filter((item) => stack.forceIncludeNodes?.includes(item.name)).map((item) => transformNodeType(item, stack.subcategory));
      stackItems.push(...matchedNodes);
    }
    if (stack.baseFilter) {
      stackItems = stackItems.filter(stack.baseFilter);
    }
    if (stack.itemsMapper) {
      stackItems = stackItems.map(stack.itemsMapper);
    }
    if (!stack.items) {
      stackItems = sortNodeCreateElements(stackItems);
    }
    updateCurrentViewStack({ baselineItems: stackItems });
  }
  function pushViewStack(stack, options = {}) {
    if (options.resetStacks) {
      resetViewStacks();
    }
    if (activeViewStack.value.uuid) {
      updateCurrentViewStack({ activeIndex: getActiveItemIndex() });
    }
    const newStackUuid = v4();
    viewStacks.value.push({
      ...stack,
      uuid: newStackUuid,
      transitionDirection: options.transitionDirection ?? "in",
      activeIndex: 0
    });
    setStackBaselineItems();
  }
  function popViewStack() {
    if (activeViewStack.value.uuid) {
      viewStacks.value.pop();
      updateCurrentViewStack({ transitionDirection: "out" });
    }
  }
  function updateCurrentViewStack(stack) {
    const currentStack = getLastActiveStack();
    const matchedIndex = viewStacks.value.findIndex((s) => s.uuid === currentStack.uuid);
    if (!currentStack) return;
    Object.keys(stack).forEach((key) => {
      const typedKey = key;
      viewStacks.value[matchedIndex] = {
        ...viewStacks.value[matchedIndex],
        [key]: stack[typedKey]
      };
    });
  }
  function resetViewStacks() {
    viewStacks.value = [];
  }
  return {
    viewStacks,
    activeViewStack,
    activeViewStackMode,
    globalSearchItemsDiff,
    isAiSubcategoryView,
    gotoCompatibleConnectionView,
    resetViewStacks,
    updateCurrentViewStack,
    pushViewStack,
    popViewStack,
    getAllNodeCreateElements
  };
});
function mapLegacyConnectionsToCanvasConnections(legacyConnections, nodes) {
  const mappedConnections = [];
  Object.keys(legacyConnections).forEach((fromNodeName) => {
    const fromId = nodes.find((node) => node.name === fromNodeName)?.id ?? "";
    const fromConnectionTypes = Object.keys(
      legacyConnections[fromNodeName]
    );
    fromConnectionTypes.forEach((fromConnectionType) => {
      const fromPorts = legacyConnections[fromNodeName][fromConnectionType];
      fromPorts?.forEach((toPorts, fromIndex) => {
        toPorts?.forEach((toPort) => {
          const toNodeName = toPort.node;
          const toId = nodes.find((node) => node.name === toNodeName)?.id ?? "";
          const toConnectionType = toPort.type;
          const toIndex = toPort.index;
          const sourceHandle = createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Output,
            type: fromConnectionType,
            index: fromIndex
          });
          const targetHandle = createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Input,
            type: toConnectionType,
            index: toIndex
          });
          const connectionId = createCanvasConnectionId({
            source: fromId,
            sourceHandle,
            target: toId,
            targetHandle
          });
          if (fromId && toId) {
            mappedConnections.push({
              id: connectionId,
              source: fromId,
              target: toId,
              sourceHandle,
              targetHandle,
              data: {
                source: {
                  node: fromNodeName,
                  index: fromIndex,
                  type: fromConnectionType
                },
                target: {
                  node: toNodeName,
                  index: toIndex,
                  type: toConnectionType
                }
              }
            });
          }
        });
      });
    });
  });
  return mappedConnections;
}
function mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, legacyConnection) {
  const source = sourceNode.id;
  const sourceHandle = createCanvasConnectionHandleString({
    mode: CanvasConnectionMode.Output,
    type: legacyConnection[0].type,
    index: legacyConnection[0].index
  });
  const target = targetNode.id;
  const targetHandle = createCanvasConnectionHandleString({
    mode: CanvasConnectionMode.Input,
    type: legacyConnection[1].type,
    index: legacyConnection[1].index
  });
  return {
    source,
    sourceHandle,
    target,
    targetHandle
  };
}
function parseCanvasConnectionHandleString(handle) {
  const [mode, type, index] = (handle ?? "").split("/");
  const resolvedMode = isValidCanvasConnectionMode(mode) ? mode : CanvasConnectionMode.Output;
  const resolvedType = isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main;
  let resolvedIndex = parseInt(index, 10);
  if (isNaN(resolvedIndex)) {
    resolvedIndex = 0;
  }
  return {
    mode: resolvedMode,
    type: resolvedType,
    index: resolvedIndex
  };
}
function createCanvasConnectionHandleString({
  mode,
  type = NodeConnectionTypes.Main,
  index = 0
}) {
  return `${mode}/${type}/${index}`;
}
function createCanvasConnectionId(connection) {
  return `[${connection.source}/${connection.sourceHandle}][${connection.target}/${connection.targetHandle}]`;
}
function mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection) {
  const sourceNodeName = sourceNode?.name ?? "";
  const { type: sourceType, index: sourceIndex } = parseCanvasConnectionHandleString(
    connection.sourceHandle
  );
  const targetNodeName = targetNode?.name ?? "";
  const { type: targetType, index: targetIndex } = parseCanvasConnectionHandleString(
    connection.targetHandle
  );
  return [
    {
      node: sourceNodeName,
      type: sourceType,
      index: sourceIndex
    },
    {
      node: targetNodeName,
      type: targetType,
      index: targetIndex
    }
  ];
}
function mapLegacyEndpointsToCanvasConnectionPort(endpoints, endpointNames = []) {
  if (typeof endpoints === "string") {
    console.warn("Node endpoints have not been evaluated", endpoints);
    return [];
  }
  return endpoints.map((endpoint, endpointIndex) => {
    const typeValue = typeof endpoint === "string" ? endpoint : endpoint.type;
    const type = isValidNodeConnectionType(typeValue) ? typeValue : NodeConnectionTypes.Main;
    const label = typeof endpoint === "string" ? endpointNames[endpointIndex] : endpoint.displayName;
    const index = endpoints.slice(0, endpointIndex + 1).filter((e) => (typeof e === "string" ? e : e.type) === type).length - 1;
    const required = typeof endpoint === "string" ? false : endpoint.required;
    const maxConnections = typeof endpoint === "string" ? void 0 : endpoint.maxConnections;
    return {
      type,
      index,
      label,
      ...maxConnections ? { maxConnections } : {},
      ...required ? { required } : {}
    };
  });
}
function checkOverlap(node1, node2) {
  return !// node1 is completely to the left of node2
  (node1.x + node1.width <= node2.x || // node2 is completely to the left of node1
  node2.x + node2.width <= node1.x || // node1 is completely above node2
  node1.y + node1.height <= node2.y || // node2 is completely above node1
  node2.y + node2.height <= node1.y);
}
function insertSpacersBetweenEndpoints(endpoints, requiredEndpointsCount = 0, minEndpointsCount = 4) {
  const endpointsWithSpacers = [...endpoints];
  const optionalNonMainInputsCount = endpointsWithSpacers.length - requiredEndpointsCount;
  const spacerCount = minEndpointsCount - requiredEndpointsCount - optionalNonMainInputsCount;
  if (endpointsWithSpacers.length < minEndpointsCount) {
    for (let i = 0; i < spacerCount; i++) {
      endpointsWithSpacers.splice(requiredEndpointsCount + i, 0, null);
    }
  }
  return endpointsWithSpacers;
}
const useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
  const workflowsStore = useWorkflowsStore();
  const ndvStore = useNDVStore();
  const uiStore = useUIStore();
  const nodeTypesStore = useNodeTypesStore();
  const telemetry = useTelemetry();
  const externalHooks = useExternalHooks();
  const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
  const mergedNodes = ref([]);
  const actions = ref({});
  const showScrim = ref(false);
  const openSource = ref("");
  const isCreateNodeActive = ref(false);
  const nodePanelSessionId = ref("");
  const allNodeCreatorNodes = computed(
    () => Object.values(mergedNodes.value).map((i) => transformNodeType(i))
  );
  function setMergeNodes(nodes) {
    mergedNodes.value = nodes;
  }
  function removeNodeFromMergedNodes(nodeName) {
    mergedNodes.value = mergedNodes.value.filter((n) => n.name !== nodeName);
  }
  function setActions(nodes) {
    actions.value = nodes;
  }
  function setShowScrim(isVisible) {
    showScrim.value = isVisible;
  }
  function setSelectedView(view) {
    selectedView.value = view;
  }
  function setOpenSource(view) {
    openSource.value = view;
  }
  function openSelectiveNodeCreator({
    connectionType,
    node,
    creatorView
  }) {
    const nodeName = node ?? ndvStore.activeNodeName;
    const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
    ndvStore.activeNodeName = null;
    setTimeout(() => {
      if (creatorView) {
        setNodeCreatorState({
          createNodeActive: true,
          nodeCreatorView: creatorView
        });
      } else if (connectionType && nodeData) {
        openNodeCreatorForConnectingNode({
          connection: {
            source: nodeData.id,
            sourceHandle: createCanvasConnectionHandleString({
              mode: "inputs",
              type: connectionType,
              index: 0
            })
          },
          eventSource: NODE_CREATOR_OPEN_SOURCES.NOTICE_ERROR_MESSAGE
        });
      }
    });
  }
  function setNodeCreatorState({
    source,
    createNodeActive,
    nodeCreatorView
  }) {
    if (!nodeCreatorView) {
      nodeCreatorView = workflowsStore.workflowTriggerNodes.length > 0 ? REGULAR_NODE_CREATOR_VIEW : TRIGGER_NODE_CREATOR_VIEW;
    }
    setSelectedView(nodeCreatorView);
    isCreateNodeActive.value = createNodeActive;
    if (createNodeActive && source) {
      setOpenSource(source);
    }
    void externalHooks.run("nodeView.createNodeActiveChanged", {
      source,
      mode: getMode(nodeCreatorView),
      createNodeActive
    });
    if (createNodeActive) {
      onCreatorOpened({
        source,
        mode: getMode(nodeCreatorView),
        workflow_id: workflowsStore.workflowId
      });
    }
  }
  function openNodeCreatorForConnectingNode({
    connection,
    eventSource,
    nodeCreatorView
  }) {
    const sourceNode = workflowsStore.getNodeById(connection.source);
    if (!sourceNode) {
      return;
    }
    const { type, index, mode } = parseCanvasConnectionHandleString(connection.sourceHandle);
    uiStore.lastSelectedNode = sourceNode.name;
    uiStore.lastSelectedNodeEndpointUuid = connection.sourceHandle ?? null;
    uiStore.lastSelectedNodeOutputIndex = index;
    if (isVueFlowConnection(connection)) {
      uiStore.lastInteractedWithNodeConnection = connection;
    }
    uiStore.lastInteractedWithNodeHandle = connection.sourceHandle ?? null;
    uiStore.lastInteractedWithNodeId = sourceNode.id;
    const isOutput = mode === CanvasConnectionMode.Output;
    const isScopedConnection = type !== NodeConnectionTypes.Main;
    setNodeCreatorState({
      source: eventSource,
      createNodeActive: true,
      nodeCreatorView: isScopedConnection ? AI_UNCATEGORIZED_CATEGORY : nodeCreatorView
    });
    if (isScopedConnection) {
      useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type)).catch(() => {
      });
    }
  }
  function openNodeCreatorForTriggerNodes(source) {
    ndvStore.activeNodeName = null;
    setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
    setShowScrim(true);
    setNodeCreatorState({
      source,
      createNodeActive: true,
      nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
    });
  }
  function getNodeCreatorFilter(nodeName, outputType) {
    let filter;
    const workflow = workflowsStore.getCurrentWorkflow();
    const workflowNode = workflow.getNode(nodeName);
    if (!workflowNode) return { nodes: [] };
    const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion);
    if (nodeType) {
      const inputs = getNodeInputs(workflow, workflowNode, nodeType);
      const filterFound = inputs.filter((input) => {
        if (typeof input === "string" || input.type !== outputType || !input.filter) {
          return false;
        }
        return true;
      });
      if (filterFound.length) {
        filter = filterFound[0].filter;
      }
    }
    return filter;
  }
  function resetNodesPanelSession() {
    nodePanelSessionId.value = `nodes_panel_session_${(/* @__PURE__ */ new Date()).valueOf()}`;
  }
  function trackNodeCreatorEvent(event, properties = {}, withPostHog = false) {
    telemetry.track(
      event,
      {
        ...properties,
        nodes_panel_session_id: nodePanelSessionId.value
      },
      {
        withPostHog
      }
    );
  }
  function onCreatorOpened({
    source,
    mode,
    workflow_id
  }) {
    resetNodesPanelSession();
    trackNodeCreatorEvent("User opened nodes panel", {
      source,
      mode,
      workflow_id
    });
  }
  function onNodeFilterChanged({
    newValue,
    filteredNodes,
    filterMode,
    subcategory,
    title
  }) {
    if (!newValue.length) {
      return;
    }
    const { results_count, trigger_count, regular_count } = filteredNodes.reduce(
      (accu, node) => {
        if (!("properties" in node)) {
          return accu;
        }
        const isCustomAction = "actionKey" in node.properties && node.properties.actionKey === CUSTOM_API_CALL_KEY;
        if (isCustomAction) {
          return accu;
        }
        const isTrigger = node.key.includes("Trigger");
        return {
          results_count: accu.results_count + 1,
          trigger_count: accu.trigger_count + (isTrigger ? 1 : 0),
          regular_count: accu.regular_count + (isTrigger ? 0 : 1)
        };
      },
      {
        results_count: 0,
        trigger_count: 0,
        regular_count: 0
      }
    );
    trackNodeCreatorEvent("User entered nodes panel search term", {
      search_string: newValue,
      filter_mode: getMode(filterMode),
      category_name: subcategory,
      results_count,
      trigger_count,
      regular_count,
      title
    });
  }
  function onCategoryExpanded(properties) {
    trackNodeCreatorEvent("User viewed node category", { ...properties, is_subcategory: false });
  }
  function onViewActions(properties) {
    trackNodeCreatorEvent("User viewed node actions", properties);
  }
  function onActionsCustomAPIClicked(properties) {
    trackNodeCreatorEvent("User clicked custom API from node actions", properties);
  }
  function onAddActions(properties) {
    trackNodeCreatorEvent("User added action", properties);
  }
  function onSubcategorySelected(properties) {
    trackNodeCreatorEvent("User viewed node category", {
      category_name: properties.subcategory,
      is_subcategory: true
    });
  }
  function onNodeAddedToCanvas(properties) {
    trackNodeCreatorEvent("User added node to workflow canvas", properties, true);
  }
  function getMode(mode) {
    if (mode === AI_NODE_CREATOR_VIEW || mode === AI_OTHERS_NODE_CREATOR_VIEW) {
      return "ai";
    }
    if (mode === TRIGGER_NODE_CREATOR_VIEW) {
      return "trigger";
    }
    return "regular";
  }
  return {
    isCreateNodeActive,
    openSource,
    selectedView,
    showScrim,
    mergedNodes,
    actions,
    allNodeCreatorNodes,
    setShowScrim,
    setSelectedView,
    setOpenSource,
    setActions,
    setMergeNodes,
    removeNodeFromMergedNodes,
    setNodeCreatorState,
    openSelectiveNodeCreator,
    openNodeCreatorForConnectingNode,
    openNodeCreatorForTriggerNodes,
    onCreatorOpened,
    onNodeFilterChanged,
    onCategoryExpanded,
    onActionsCustomAPIClicked,
    onViewActions,
    onAddActions,
    onSubcategorySelected,
    onNodeAddedToCanvas
  };
});
function useUniqueNodeName() {
  function numberSuffixedNames() {
    return useNodeTypesStore().allNodeTypes.reduce((acc, nodeType) => {
      if (typeof nodeType.defaults.name !== "string") {
        throw new Error("Expected node name default to be a string");
      }
      if (/\d$/.test(nodeType.defaults.name)) acc.push(nodeType.defaults.name);
      return acc;
    }, []);
  }
  function uniqueNodeName(originalName, extraNames = []) {
    const { canvasNames } = useWorkflowsStore();
    const isUnique = !canvasNames.has(originalName) && !extraNames.includes(originalName);
    if (isUnique) return originalName;
    const nsn = numberSuffixedNames().find((nsn2) => originalName.startsWith(nsn2));
    if (nsn) {
      let unique2 = "";
      let index2 = 1;
      const remainder = originalName.split(nsn).pop();
      const lastChar = remainder?.[remainder.length - 1];
      if (lastChar && Number.isInteger(Number(lastChar))) {
        index2 = parseInt(lastChar, 10);
        originalName = originalName.slice(0, -1);
      }
      unique2 = originalName;
      while (canvasNames.has(unique2) || extraNames.includes(unique2)) {
        unique2 = originalName + index2++;
      }
      return unique2;
    }
    if (/^\d+-?\d*$/.test(originalName)) {
      let unique2 = "";
      let index2 = 1;
      const match2 = originalName.match(/(?<base>\d+)-?(?<suffix>\d*)/);
      if (!match2?.groups) {
        throw new Error("Failed to find match for unique name");
      }
      if (match2?.groups?.suffix !== "") {
        index2 = parseInt(match2.groups.suffix, 10);
      }
      unique2 = match2.groups.base;
      while (canvasNames.has(unique2) || extraNames.includes(unique2)) {
        unique2 = match2.groups.base + "-" + index2++;
      }
      return unique2;
    }
    let unique = "";
    let index = 1;
    const match = originalName.match(/(?<base>.*\D+)(?<suffix>\d*)/);
    if (!match?.groups) {
      throw new Error("Failed to find match for unique name");
    }
    if (match?.groups?.suffix !== "") {
      index = parseInt(match.groups.suffix, 10);
    }
    unique = match.groups.base;
    while (canvasNames.has(unique) || extraNames.includes(unique)) {
      unique = match.groups.base + index++;
    }
    return unique;
  }
  return { uniqueNodeName };
}
function useCanvasOperations({ router }) {
  const rootStore = useRootStore();
  const workflowsStore = useWorkflowsStore();
  const credentialsStore = useCredentialsStore();
  const historyStore = useHistoryStore();
  const uiStore = useUIStore();
  const ndvStore = useNDVStore();
  const nodeTypesStore = useNodeTypesStore();
  const canvasStore = useCanvasStore();
  const settingsStore = useSettingsStore();
  const tagsStore = useTagsStore();
  const nodeCreatorStore = useNodeCreatorStore();
  const executionsStore = useExecutionsStore();
  const projectsStore = useProjectsStore();
  const i18n = useI18n();
  const toast = useToast();
  const workflowHelpers = useWorkflowHelpers({ router });
  const nodeHelpers = useNodeHelpers();
  const telemetry = useTelemetry();
  const externalHooks = useExternalHooks();
  const clipboard = useClipboard();
  const { uniqueNodeName } = useUniqueNodeName();
  const lastClickPosition = ref([0, 0]);
  const preventOpeningNDV = !!localStorage.getItem("NodeView.preventOpeningNDV");
  const editableWorkflow = computed(() => workflowsStore.workflow);
  const editableWorkflowObject = computed(() => workflowsStore.getCurrentWorkflow());
  const triggerNodes = computed(() => {
    return workflowsStore.workflowTriggerNodes;
  });
  function tidyUp({ result, source, target }) {
    updateNodesPosition(
      result.nodes.map(({ id, x, y }) => ({ id, position: { x, y } })),
      { trackBulk: true, trackHistory: true }
    );
    trackTidyUp({ result, source, target });
  }
  function trackTidyUp({ result, source, target }) {
    telemetry.track(
      "User tidied up canvas",
      {
        source,
        target,
        nodes_count: result.nodes.length
      },
      { withPostHog: true }
    );
  }
  function updateNodesPosition(events, { trackHistory = false, trackBulk = true } = {}) {
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    events.forEach(({ id, position }) => {
      updateNodePosition(id, position, { trackHistory });
    });
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  function updateNodePosition(id, position, { trackHistory = false } = {}) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    const oldPosition = [...node.position];
    const newPosition = [position.x, position.y];
    workflowsStore.setNodePositionById(id, newPosition);
    if (trackHistory) {
      historyStore.pushCommandToUndo(
        new MoveNodeCommand(node.name, oldPosition, newPosition, Date.now())
      );
    }
  }
  function revertUpdateNodePosition(nodeName, position) {
    const node = workflowsStore.getNodeByName(nodeName);
    if (!node) {
      return;
    }
    updateNodePosition(node.id, position);
  }
  async function renameNode(currentName, newName, { trackHistory = false, trackBulk = true } = {}) {
    if (currentName === newName) {
      return;
    }
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    newName = uniqueNodeName(newName);
    const workflow = workflowsStore.getCurrentWorkflow(true);
    workflow.renameNode(currentName, newName);
    if (trackHistory) {
      historyStore.pushCommandToUndo(new RenameNodeCommand(currentName, newName, Date.now()));
    }
    workflowsStore.renameNodeSelectedAndExecution({ old: currentName, new: newName });
    workflowsStore.setNodes(Object.values(workflow.nodes));
    workflowsStore.setConnections(workflow.connectionsBySourceNode);
    const isRenamingActiveNode = ndvStore.activeNodeName === currentName;
    if (isRenamingActiveNode) {
      ndvStore.activeNodeName = newName;
    }
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  async function revertRenameNode(currentName, previousName) {
    await renameNode(currentName, previousName);
  }
  function connectAdjacentNodes(id, { trackHistory = false } = {}) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    const outputConnectionsByType = workflowsStore.outgoingConnectionsByNodeName(node.name);
    const incomingConnectionsByType = workflowsStore.incomingConnectionsByNodeName(node.name);
    for (const [type, incomingConnectionsByInputIndex] of Object.entries(
      incomingConnectionsByType
    )) {
      for (const incomingConnection of incomingConnectionsByInputIndex.at(0) ?? []) {
        const incomingNodeId = workflowsStore.getNodeByName(incomingConnection.node)?.id;
        if (!incomingNodeId) continue;
        for (const outgoingConnection of outputConnectionsByType[type]?.at(0) ?? []) {
          const outgoingNodeId = workflowsStore.getNodeByName(outgoingConnection.node)?.id;
          if (!outgoingNodeId) continue;
          if (trackHistory) {
            historyStore.pushCommandToUndo(
              new AddConnectionCommand(
                [
                  {
                    node: incomingConnection.node,
                    type,
                    index: incomingConnection.index
                  },
                  {
                    node: outgoingConnection.node,
                    type,
                    index: outgoingConnection.index
                  }
                ],
                Date.now()
              )
            );
          }
          createConnection({
            source: incomingNodeId,
            sourceHandle: createCanvasConnectionHandleString({
              mode: CanvasConnectionMode.Output,
              type,
              index: incomingConnection.index
            }),
            target: outgoingNodeId,
            targetHandle: createCanvasConnectionHandleString({
              mode: CanvasConnectionMode.Input,
              type,
              index: outgoingConnection.index
            })
          });
        }
      }
    }
  }
  function deleteNode(id, { trackHistory = false, trackBulk = true } = {}) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    if (uiStore.lastInteractedWithNodeId === id) {
      uiStore.lastInteractedWithNodeId = void 0;
    }
    connectAdjacentNodes(id, { trackHistory });
    deleteConnectionsByNodeId(id, { trackHistory, trackBulk: false });
    workflowsStore.removeNodeExecutionDataById(id);
    workflowsStore.removeNodeById(id);
    if (trackHistory) {
      historyStore.pushCommandToUndo(new RemoveNodeCommand(node, Date.now()));
      if (trackBulk) {
        historyStore.stopRecordingUndo();
      }
    }
    trackDeleteNode(id);
  }
  function deleteNodes(ids, { trackHistory = true, trackBulk = true } = {}) {
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    ids.forEach((id) => deleteNode(id, { trackHistory, trackBulk: false }));
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  function revertDeleteNode(node) {
    workflowsStore.addNode(node);
  }
  function trackDeleteNode(id) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    if (node.type === STICKY_NODE_TYPE) {
      telemetry.track("User deleted workflow note", {
        workflow_id: workflowsStore.workflowId
      });
    } else {
      void externalHooks.run("node.deleteNode", { node });
      telemetry.track("User deleted node", {
        node_type: node.type,
        workflow_id: workflowsStore.workflowId
      });
    }
  }
  function setNodeActive(id) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    workflowsStore.setNodePristine(node.name, false);
    setNodeActiveByName(node.name);
  }
  function setNodeActiveByName(name) {
    ndvStore.activeNodeName = name;
  }
  function clearNodeActive() {
    ndvStore.activeNodeName = null;
  }
  function setNodeParameters(id, parameters) {
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    workflowsStore.setNodeParameters(
      {
        name: node.name,
        value: parameters
      },
      true
    );
  }
  function setNodeSelected(id) {
    if (!id) {
      uiStore.lastInteractedWithNodeId = void 0;
      uiStore.lastSelectedNode = "";
      return;
    }
    const node = workflowsStore.getNodeById(id);
    if (!node) {
      return;
    }
    uiStore.lastInteractedWithNodeId = id;
    uiStore.lastSelectedNode = node.name;
  }
  function toggleNodesDisabled(ids, { trackHistory = true, trackBulk = true } = {}) {
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    const nodes = workflowsStore.getNodesByIds(ids);
    nodeHelpers.disableNodes(nodes, { trackHistory, trackBulk: false });
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  function revertToggleNodeDisabled(nodeName) {
    const node = workflowsStore.getNodeByName(nodeName);
    if (node) {
      nodeHelpers.disableNodes([node]);
    }
  }
  function toggleNodesPinned(ids, source, { trackHistory = true, trackBulk = true } = {}) {
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    const nodes = workflowsStore.getNodesByIds(ids);
    const nextStatePinned = nodes.some((node) => !workflowsStore.pinDataByNodeName(node.name));
    for (const node of nodes) {
      const pinnedDataForNode = usePinnedData(node);
      if (nextStatePinned) {
        const dataToPin = useDataSchema().getInputDataWithPinned(node);
        if (dataToPin.length !== 0) {
          pinnedDataForNode.setData(dataToPin, source);
        }
      } else {
        pinnedDataForNode.unsetData(source);
      }
    }
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  function requireNodeTypeDescription(type, version) {
    return nodeTypesStore.getNodeType(type, version) ?? {
      properties: [],
      displayName: type,
      name: type,
      group: [],
      description: "",
      version: version ?? 1,
      defaults: {},
      inputs: [],
      outputs: []
    };
  }
  async function addNodes(nodes, options = {}) {
    let insertPosition = options.position;
    let lastAddedNode;
    const addedNodes = [];
    const nodesWithTypeVersion = nodes.map((node) => {
      const typeVersion = node.typeVersion ?? resolveNodeVersion(requireNodeTypeDescription(node.type));
      return {
        ...node,
        typeVersion
      };
    });
    await loadNodeTypesProperties(nodesWithTypeVersion);
    if (options.trackHistory && options.trackBulk) {
      historyStore.startRecordingUndo();
    }
    for (const nodeAddData of nodesWithTypeVersion) {
      const { isAutoAdd, openDetail: openNDV, ...node } = nodeAddData;
      const position = node.position ?? insertPosition;
      const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
      try {
        const newNode = addNode(
          {
            ...node,
            position
          },
          nodeTypeDescription,
          {
            ...options,
            openNDV,
            isAutoAdd
          }
        );
        lastAddedNode = newNode;
        addedNodes.push(newNode);
      } catch (error) {
        toast.showError(error, i18n.baseText("error"));
        console.error(error);
        continue;
      }
      insertPosition = [
        lastAddedNode.position[0] + NODE_SIZE * 2 + GRID_SIZE,
        lastAddedNode.position[1]
      ];
    }
    if (lastAddedNode) {
      updatePositionForNodeWithMultipleInputs(lastAddedNode);
    }
    if (options.trackHistory && options.trackBulk) {
      historyStore.stopRecordingUndo();
    }
    if (!options.keepPristine) {
      uiStore.stateIsDirty = true;
    }
    return addedNodes;
  }
  function updatePositionForNodeWithMultipleInputs(node) {
    const inputNodes = editableWorkflowObject.value.getParentNodesByDepth(node.name, 1);
    if (inputNodes.length > 1) {
      inputNodes.slice(1).forEach((inputNode, index) => {
        const nodeUi = workflowsStore.getNodeByName(inputNode.name);
        if (!nodeUi) return;
        updateNodePosition(nodeUi.id, {
          x: nodeUi.position[0],
          y: nodeUi.position[1] + 100 * (index + 1)
        });
      });
    }
  }
  function checkMaxNodesOfTypeReached(nodeTypeDescription) {
    if (nodeTypeDescription.maxNodes !== void 0 && workflowHelpers.getNodeTypeCount(nodeTypeDescription.name) >= nodeTypeDescription.maxNodes) {
      throw new Error(
        i18n.baseText("nodeView.showMessage.showMaxNodeTypeError.message", {
          adjustToNumber: nodeTypeDescription.maxNodes,
          interpolate: { nodeTypeDataDisplayName: nodeTypeDescription.displayName }
        })
      );
    }
  }
  function addNode(node, nodeTypeDescription, options = {}) {
    checkMaxNodesOfTypeReached(nodeTypeDescription);
    const nodeData = resolveNodeData(node, nodeTypeDescription);
    if (!nodeData) {
      throw new Error(i18n.baseText("nodeViewV2.showError.failedToCreateNode"));
    }
    workflowsStore.addNode(nodeData);
    if (options.trackHistory) {
      historyStore.pushCommandToUndo(new AddNodeCommand(nodeData, Date.now()));
    }
    if (!options.isAutoAdd) {
      createConnectionToLastInteractedWithNode(nodeData, options);
    }
    void nextTick(() => {
      if (!options.keepPristine) {
        uiStore.stateIsDirty = true;
      }
      workflowsStore.setNodePristine(nodeData.name, true);
      nodeHelpers.matchCredentials(nodeData);
      nodeHelpers.updateNodeParameterIssues(nodeData);
      nodeHelpers.updateNodeCredentialIssues(nodeData);
      nodeHelpers.updateNodeInputIssues(nodeData);
      if (options.telemetry) {
        trackAddNode(nodeData, options);
      }
      if (nodeData.type !== STICKY_NODE_TYPE) {
        void externalHooks.run("nodeView.addNodeButton", { nodeTypeName: nodeData.type });
        if (options.openNDV && !preventOpeningNDV) {
          ndvStore.setActiveNodeName(nodeData.name);
        }
      }
    });
    return nodeData;
  }
  async function revertAddNode(nodeName) {
    const node = workflowsStore.getNodeByName(nodeName);
    if (!node) {
      return;
    }
    deleteNode(node.id);
  }
  function createConnectionToLastInteractedWithNode(node, options = {}) {
    const lastInteractedWithNode = uiStore.lastInteractedWithNode;
    if (!lastInteractedWithNode) {
      return;
    }
    const lastInteractedWithNodeId = lastInteractedWithNode.id;
    const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
    const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
    if (lastInteractedWithNodeHandle) {
      const { type: connectionType, mode } = parseCanvasConnectionHandleString(
        lastInteractedWithNodeHandle
      );
      const nodeId = node.id;
      const nodeHandle = createCanvasConnectionHandleString({
        mode: CanvasConnectionMode.Input,
        type: connectionType,
        index: 0
      });
      if (mode === CanvasConnectionMode.Input) {
        createConnection({
          source: nodeId,
          sourceHandle: nodeHandle,
          target: lastInteractedWithNodeId,
          targetHandle: lastInteractedWithNodeHandle
        });
      } else {
        createConnection({
          source: lastInteractedWithNodeId,
          sourceHandle: lastInteractedWithNodeHandle,
          target: nodeId,
          targetHandle: nodeHandle
        });
      }
    } else {
      createConnection({
        source: lastInteractedWithNodeId,
        sourceHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Output,
          type: NodeConnectionTypes.Main,
          index: 0
        }),
        target: node.id,
        targetHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Input,
          type: NodeConnectionTypes.Main,
          index: 0
        })
      });
    }
    if (lastInteractedWithNodeConnection) {
      deleteConnection(lastInteractedWithNodeConnection, { trackHistory: options.trackHistory });
      const targetNode = workflowsStore.getNodeById(lastInteractedWithNodeConnection.target);
      if (targetNode) {
        createConnection({
          source: node.id,
          sourceHandle: createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Input,
            type: NodeConnectionTypes.Main,
            index: 0
          }),
          target: lastInteractedWithNodeConnection.target,
          targetHandle: lastInteractedWithNodeConnection.targetHandle
        });
      }
    }
  }
  function trackAddNode(nodeData, options) {
    switch (nodeData.type) {
      case STICKY_NODE_TYPE:
        trackAddStickyNoteNode();
        break;
      default:
        trackAddDefaultNode(nodeData, options);
    }
  }
  function trackAddStickyNoteNode() {
    telemetry.track("User inserted workflow note", {
      workflow_id: workflowsStore.workflowId
    });
  }
  function trackAddDefaultNode(nodeData, options) {
    nodeCreatorStore.onNodeAddedToCanvas({
      node_id: nodeData.id,
      node_type: nodeData.type,
      node_version: nodeData.typeVersion,
      is_auto_add: options.isAutoAdd,
      workflow_id: workflowsStore.workflowId,
      drag_and_drop: options.dragAndDrop,
      input_node_type: uiStore.lastInteractedWithNode ? uiStore.lastInteractedWithNode.type : void 0
    });
  }
  function resolveNodeData(node, nodeTypeDescription) {
    const id = node.id ?? nodeHelpers.assignNodeId(node);
    const name = node.name ?? nodeTypeDescription.defaults.name;
    const type = nodeTypeDescription.name;
    const typeVersion = node.typeVersion;
    const position = resolveNodePosition(node, nodeTypeDescription);
    const disabled = node.disabled ?? false;
    const parameters = node.parameters ?? {};
    const nodeData = {
      ...node,
      id,
      name,
      type,
      typeVersion,
      position,
      disabled,
      parameters
    };
    resolveNodeName(nodeData);
    resolveNodeParameters(nodeData, nodeTypeDescription);
    resolveNodeWebhook(nodeData, nodeTypeDescription);
    return nodeData;
  }
  async function loadNodeTypesProperties(nodes) {
    const allNodeTypeDescriptions = nodeTypesStore.allNodeTypes;
    const nodesToBeFetched = [];
    allNodeTypeDescriptions.forEach((nodeTypeDescription) => {
      const nodeVersions = Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version : [nodeTypeDescription.version];
      if (!!nodes.find(
        (n) => n.type === nodeTypeDescription.name && nodeVersions.includes(n.typeVersion)
      ) && !nodeTypeDescription.hasOwnProperty("properties")) {
        nodesToBeFetched.push({
          name: nodeTypeDescription.name,
          version: Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version.slice(-1)[0] : nodeTypeDescription.version
        });
      }
    });
    if (nodesToBeFetched.length > 0) {
      await nodeTypesStore.getNodesInformation(nodesToBeFetched);
    }
  }
  function resolveNodeVersion(nodeTypeDescription) {
    let nodeVersion = nodeTypeDescription.defaultVersion;
    if (typeof nodeVersion === "undefined") {
      nodeVersion = Array.isArray(nodeTypeDescription.version) ? nodeTypeDescription.version.slice(-1)[0] : nodeTypeDescription.version;
    }
    return nodeVersion;
  }
  function resolveNodeParameters(node, nodeTypeDescription) {
    const nodeParameters = getNodeParameters(
      nodeTypeDescription?.properties ?? [],
      node.parameters,
      true,
      false,
      node,
      nodeTypeDescription
    );
    node.parameters = nodeParameters ?? {};
  }
  function resolveNodePosition(node, nodeTypeDescription) {
    let position = node.position;
    let pushOffsets = [40, 40];
    if (position) {
      return getNewNodePosition(workflowsStore.allNodes, position, pushOffsets);
    }
    const lastInteractedWithNode = uiStore.lastInteractedWithNode;
    const lastInteractedWithNodeConnection = uiStore.lastInteractedWithNodeConnection;
    const lastInteractedWithNodeHandle = uiStore.lastInteractedWithNodeHandle;
    const { type: connectionType, index: connectionIndex } = parseCanvasConnectionHandleString(
      lastInteractedWithNodeHandle ?? lastInteractedWithNodeConnection?.sourceHandle ?? ""
    );
    const nodeSize = connectionType === NodeConnectionTypes.Main ? DEFAULT_NODE_SIZE : CONFIGURATION_NODE_SIZE;
    if (lastInteractedWithNode) {
      const lastInteractedWithNodeTypeDescription = nodeTypesStore.getNodeType(
        lastInteractedWithNode.type,
        lastInteractedWithNode.typeVersion
      );
      const lastInteractedWithNodeObject = editableWorkflowObject.value.getNode(
        lastInteractedWithNode.name
      );
      const newNodeInsertPosition = uiStore.lastCancelledConnectionPosition;
      if (newNodeInsertPosition) {
        const xOffset = connectionType === NodeConnectionTypes.Main ? 0 : -nodeSize[0] / 2;
        const yOffset = connectionType === NodeConnectionTypes.Main ? -nodeSize[1] / 2 : 0;
        position = [newNodeInsertPosition[0] + xOffset, newNodeInsertPosition[1] + yOffset];
        uiStore.lastCancelledConnectionPosition = void 0;
      } else if (lastInteractedWithNodeTypeDescription && lastInteractedWithNodeObject) {
        const lastInteractedWithNodeInputs = getNodeInputs(
          editableWorkflowObject.value,
          lastInteractedWithNodeObject,
          lastInteractedWithNodeTypeDescription
        );
        const lastInteractedWithNodeInputTypes = getConnectionTypes(
          lastInteractedWithNodeInputs
        );
        const lastInteractedWithNodeScopedInputTypes = (lastInteractedWithNodeInputTypes || []).filter((input) => input !== NodeConnectionTypes.Main);
        const lastInteractedWithNodeOutputs = getNodeOutputs(
          editableWorkflowObject.value,
          lastInteractedWithNodeObject,
          lastInteractedWithNodeTypeDescription
        );
        const lastInteractedWithNodeOutputTypes = getConnectionTypes(
          lastInteractedWithNodeOutputs
        );
        const lastInteractedWithNodeMainOutputs = lastInteractedWithNodeOutputTypes.filter(
          (output) => output === NodeConnectionTypes.Main
        );
        let yOffset = 0;
        if (lastInteractedWithNodeConnection) {
          shiftDownstreamNodesPosition(lastInteractedWithNode.name, PUSH_NODES_OFFSET, {
            trackHistory: true
          });
        }
        if (lastInteractedWithNodeMainOutputs.length > 1) {
          const yOffsetValues = generateOffsets(
            lastInteractedWithNodeMainOutputs.length,
            NODE_SIZE,
            GRID_SIZE
          );
          yOffset = yOffsetValues[connectionIndex];
        }
        let outputs = [];
        try {
          outputs = getNodeOutputs(
            editableWorkflowObject.value,
            node,
            nodeTypeDescription
          );
        } catch (e) {
        }
        const outputTypes = getConnectionTypes(outputs);
        pushOffsets = [100, 0];
        if (outputTypes.length > 0 && outputTypes.every((outputName) => outputName !== NodeConnectionTypes.Main)) {
          const scopedConnectionIndex = lastInteractedWithNodeScopedInputTypes.findIndex(
            (inputType) => outputs[0] === inputType
          );
          const lastInteractedWithNodeWidthDivisions = Math.max(
            lastInteractedWithNodeScopedInputTypes.length + 1,
            1
          );
          position = [
            lastInteractedWithNode.position[0] + CONFIGURABLE_NODE_SIZE[0] / lastInteractedWithNodeWidthDivisions * (scopedConnectionIndex + 1) - nodeSize[0] / 2,
            lastInteractedWithNode.position[1] + PUSH_NODES_OFFSET
          ];
        } else {
          let pushOffset = PUSH_NODES_OFFSET;
          if (!!lastInteractedWithNodeInputTypes.find((input) => input !== NodeConnectionTypes.Main)) {
            pushOffset += 140;
          }
          position = [
            lastInteractedWithNode.position[0] + pushOffset,
            lastInteractedWithNode.position[1] + yOffset
          ];
        }
      }
    }
    if (!position) {
      if (nodeTypesStore.isTriggerNode(node.type) && triggerNodes.value.length === 0) {
        position = [0, 0];
      } else {
        position = lastClickPosition.value;
      }
    }
    return getNewNodePosition(workflowsStore.allNodes, position, pushOffsets);
  }
  function resolveNodeName(node) {
    const localizedName = i18n.localizeNodeName(node.name, node.type);
    node.name = uniqueNodeName(localizedName);
  }
  function resolveNodeWebhook(node, nodeTypeDescription) {
    if (nodeTypeDescription.webhooks?.length && !node.webhookId) {
      nodeHelpers.assignWebhookId(node);
    }
    if ([WEBHOOK_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, MCP_TRIGGER_NODE_TYPE].includes(node.type) && node.parameters.path === "") {
      node.parameters.path = node.webhookId;
    }
  }
  function shiftDownstreamNodesPosition(sourceNodeName, margin, { trackHistory = false }) {
    const sourceNode = workflowsStore.nodesByName[sourceNodeName];
    const checkNodes = workflowHelpers.getConnectedNodes(
      "downstream",
      editableWorkflowObject.value,
      sourceNodeName
    );
    for (const nodeName of checkNodes) {
      const node = workflowsStore.nodesByName[nodeName];
      if (node.position[0] < sourceNode.position[0]) {
        continue;
      }
      updateNodePosition(
        node.id,
        {
          x: node.position[0] + margin,
          y: node.position[1]
        },
        { trackHistory }
      );
    }
  }
  function createConnection(connection, { trackHistory = false, keepPristine = false } = {}) {
    const sourceNode = workflowsStore.getNodeById(connection.source);
    const targetNode = workflowsStore.getNodeById(connection.target);
    if (!sourceNode || !targetNode) {
      return;
    }
    if (trackHistory) {
      historyStore.pushCommandToUndo(
        new AddConnectionCommand(
          mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection),
          Date.now()
        )
      );
    }
    const mappedConnection = mapCanvasConnectionToLegacyConnection(
      sourceNode,
      targetNode,
      connection
    );
    if (!isConnectionAllowed(sourceNode, targetNode, mappedConnection[0], mappedConnection[1])) {
      return;
    }
    workflowsStore.addConnection({
      connection: mappedConnection
    });
    void nextTick(() => {
      nodeHelpers.updateNodeInputIssues(sourceNode);
      nodeHelpers.updateNodeInputIssues(targetNode);
    });
    if (!keepPristine) {
      uiStore.stateIsDirty = true;
    }
  }
  function revertCreateConnection(connection) {
    const sourceNodeName = connection[0].node;
    const sourceNode = workflowsStore.getNodeByName(sourceNodeName);
    const targetNodeName = connection[1].node;
    const targetNode = workflowsStore.getNodeByName(targetNodeName);
    if (!sourceNode || !targetNode) {
      return;
    }
    deleteConnection(mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, connection));
  }
  function deleteConnectionsByNodeId(targetNodeId, { trackHistory = false, trackBulk = true } = {}) {
    const targetNode = workflowsStore.getNodeById(targetNodeId);
    if (!targetNode) {
      return;
    }
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    const connections = workflowsStore.workflow.connections;
    for (const nodeName of Object.keys(connections)) {
      const node = workflowsStore.getNodeByName(nodeName);
      if (!node) {
        continue;
      }
      for (const type of Object.keys(connections[nodeName])) {
        for (const index of Object.keys(connections[nodeName][type])) {
          const connectionsToDelete = connections[nodeName][type][parseInt(index, 10)] ?? [];
          for (const connectionIndex of Object.keys(connectionsToDelete)) {
            const connectionData = connectionsToDelete[parseInt(connectionIndex, 10)];
            if (!connectionData) {
              continue;
            }
            const connectionDataNode = workflowsStore.getNodeByName(connectionData.node);
            if (connectionDataNode && (connectionDataNode.id === targetNode.id || node.name === targetNode.name)) {
              deleteConnection(
                {
                  source: node.id,
                  sourceHandle: createCanvasConnectionHandleString({
                    mode: CanvasConnectionMode.Output,
                    type,
                    index: parseInt(index, 10)
                  }),
                  target: connectionDataNode.id,
                  targetHandle: createCanvasConnectionHandleString({
                    mode: CanvasConnectionMode.Input,
                    type: connectionData.type,
                    index: connectionData.index
                  })
                },
                { trackHistory, trackBulk: false }
              );
            }
          }
        }
      }
    }
    delete workflowsStore.workflow.connections[targetNode.name];
    if (trackHistory && trackBulk) {
      historyStore.stopRecordingUndo();
    }
  }
  function deleteConnection(connection, { trackHistory = false, trackBulk = true } = {}) {
    const sourceNode = workflowsStore.getNodeById(connection.source);
    const targetNode = workflowsStore.getNodeById(connection.target);
    if (!sourceNode || !targetNode) {
      return;
    }
    const mappedConnection = mapCanvasConnectionToLegacyConnection(
      sourceNode,
      targetNode,
      connection
    );
    if (trackHistory && trackBulk) {
      historyStore.startRecordingUndo();
    }
    workflowsStore.removeConnection({
      connection: mappedConnection
    });
    if (trackHistory) {
      historyStore.pushCommandToUndo(new RemoveConnectionCommand(mappedConnection, Date.now()));
      if (trackBulk) {
        historyStore.stopRecordingUndo();
      }
    }
  }
  function revertDeleteConnection(connection) {
    workflowsStore.addConnection({
      connection
    });
  }
  function revalidateNodeConnections(id, connectionMode) {
    const node = workflowsStore.getNodeById(id);
    const isInput = connectionMode === CanvasConnectionMode.Input;
    if (!node) {
      return;
    }
    const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
    if (!nodeType) {
      return;
    }
    const connections = mapLegacyConnectionsToCanvasConnections(
      workflowsStore.workflow.connections,
      workflowsStore.workflow.nodes
    );
    connections.forEach((connection) => {
      const isRelevantConnection = isInput ? connection.target === id : connection.source === id;
      if (isRelevantConnection) {
        const otherNodeId = isInput ? connection.source : connection.target;
        const otherNode = workflowsStore.getNodeById(otherNodeId);
        if (!otherNode || !connection.data) {
          return;
        }
        const [firstNode, secondNode] = isInput ? [otherNode, node] : [node, otherNode];
        if (!isConnectionAllowed(
          firstNode,
          secondNode,
          connection.data.source,
          connection.data.target
        )) {
          void nextTick(() => deleteConnection(connection));
        }
      }
    });
  }
  function revalidateNodeInputConnections(id) {
    return revalidateNodeConnections(id, CanvasConnectionMode.Input);
  }
  function revalidateNodeOutputConnections(id) {
    return revalidateNodeConnections(id, CanvasConnectionMode.Output);
  }
  function isConnectionAllowed(sourceNode, targetNode, sourceConnection, targetConnection) {
    const blocklist = [STICKY_NODE_TYPE];
    if (sourceConnection.type !== targetConnection.type) {
      return false;
    }
    if (blocklist.includes(sourceNode.type) || blocklist.includes(targetNode.type)) {
      return false;
    }
    const sourceNodeType = nodeTypesStore.getNodeType(sourceNode.type, sourceNode.typeVersion);
    const sourceWorkflowNode = editableWorkflowObject.value.getNode(sourceNode.name);
    if (!sourceWorkflowNode) {
      return false;
    }
    let sourceNodeOutputs = [];
    if (sourceNodeType) {
      sourceNodeOutputs = getNodeOutputs(
        editableWorkflowObject.value,
        sourceWorkflowNode,
        sourceNodeType
      ) || [];
    }
    const sourceNodeHasOutputConnectionOfType = !!sourceNodeOutputs.find((output) => {
      const outputType = typeof output === "string" ? output : output.type;
      return outputType === sourceConnection.type;
    });
    const sourceNodeHasOutputConnectionPortOfType = sourceConnection.index < sourceNodeOutputs.length;
    if (!sourceNodeHasOutputConnectionOfType || !sourceNodeHasOutputConnectionPortOfType) {
      return false;
    }
    const targetNodeType = nodeTypesStore.getNodeType(targetNode.type, targetNode.typeVersion);
    const targetWorkflowNode = editableWorkflowObject.value.getNode(targetNode.name);
    if (!targetWorkflowNode) {
      return false;
    }
    let targetNodeInputs = [];
    if (targetNodeType) {
      targetNodeInputs = getNodeInputs(
        editableWorkflowObject.value,
        targetWorkflowNode,
        targetNodeType
      ) || [];
    }
    const targetNodeHasInputConnectionOfType = !!targetNodeInputs.find((input) => {
      const inputType = typeof input === "string" ? input : input.type;
      if (inputType !== targetConnection.type) return false;
      const filter = typeof input === "object" && "filter" in input ? input.filter : void 0;
      if (filter?.nodes.length && !filter.nodes.includes(sourceNode.type)) {
        toast.showToast({
          title: i18n.baseText("nodeView.showError.nodeNodeCompatible.title"),
          message: i18n.baseText("nodeView.showError.nodeNodeCompatible.message", {
            interpolate: { sourceNodeName: sourceNode.name, targetNodeName: targetNode.name }
          }),
          type: "error",
          duration: 5e3
        });
        return false;
      }
      return true;
    });
    const targetNodeHasInputConnectionPortOfType = targetConnection.index < targetNodeInputs.length;
    return targetNodeHasInputConnectionOfType && targetNodeHasInputConnectionPortOfType;
  }
  async function addConnections(connections, { trackBulk = true, trackHistory = false, keepPristine = false } = {}) {
    await nextTick();
    if (trackBulk && trackHistory) {
      historyStore.startRecordingUndo();
    }
    for (const connection of connections) {
      createConnection(connection, { trackHistory, keepPristine });
    }
    if (trackBulk && trackHistory) {
      historyStore.stopRecordingUndo();
    }
    if (!keepPristine) {
      uiStore.stateIsDirty = true;
    }
  }
  function resetWorkspace() {
    nodeCreatorStore.setNodeCreatorState({ createNodeActive: false });
    nodeCreatorStore.setShowScrim(false);
    if (workflowsStore.executionWaitingForWebhook) {
      try {
        void workflowsStore.removeTestWebhook(workflowsStore.workflowId);
      } catch (error) {
      }
    }
    workflowsStore.resetWorkflow();
    workflowsStore.resetState();
    workflowsStore.currentWorkflowExecutions = [];
    workflowsStore.setActiveExecutionId(void 0);
    uiStore.resetLastInteractedWith();
    uiStore.stateIsDirty = false;
    executionsStore.activeExecution = null;
    nodeHelpers.credentialsUpdated.value = false;
  }
  function initializeWorkspace(data) {
    workflowHelpers.initState(data);
    data.nodes.forEach((node) => {
      const nodeTypeDescription = requireNodeTypeDescription(node.type, node.typeVersion);
      nodeHelpers.matchCredentials(node);
      resolveNodeParameters(node, nodeTypeDescription);
      resolveNodeWebhook(node, nodeTypeDescription);
    });
    workflowsStore.setNodes(data.nodes);
    workflowsStore.setConnections(data.connections);
  }
  function removeUnknownCredentials(workflow) {
    if (!workflow?.nodes) return;
    for (const node of workflow.nodes) {
      if (!node.credentials) continue;
      for (const [name, credential] of Object.entries(node.credentials)) {
        if (typeof credential === "string" || credential.id === null) continue;
        if (!credentialsStore.getCredentialById(credential.id)) {
          delete node.credentials[name];
        }
      }
    }
  }
  async function addImportedNodesToWorkflow(data, { trackBulk = true, trackHistory = false } = {}) {
    const nodeNameTable = {};
    const newNodeNames = new Set((data.nodes ?? []).map((node) => node.name));
    if (!data.nodes) {
      throw new Error(i18n.baseText("nodeView.noNodesGivenToAdd"));
    }
    const nodeTypesCount = workflowHelpers.getNodeTypesMaxCount();
    let oldName;
    let newName;
    const createNodes = [];
    await nodeHelpers.loadNodesProperties(
      data.nodes.map((node) => ({ name: node.type, version: node.typeVersion }))
    );
    data.nodes.forEach((node) => {
      if (nodeTypesCount[node.type] !== void 0) {
        if (nodeTypesCount[node.type].exist >= nodeTypesCount[node.type].max) {
          nodeNameTable[node.name] = nodeTypesCount[node.type].nodeNames[0];
          return;
        } else {
          nodeTypesCount[node.type].exist += 1;
        }
      }
      oldName = node.name;
      const localized = i18n.localizeNodeName(node.name, node.type);
      newNodeNames.delete(oldName);
      newName = uniqueNodeName(localized, Array.from(newNodeNames));
      newNodeNames.add(newName);
      nodeNameTable[oldName] = newName;
      createNodes.push(node);
    });
    const newConnections = {};
    const currentConnections = data.connections ?? {};
    const createNodeNames = createNodes.map((node) => node.name);
    let sourceNode, type, sourceIndex, connectionIndex, connectionData;
    for (sourceNode of Object.keys(currentConnections)) {
      if (!createNodeNames.includes(sourceNode)) {
        continue;
      }
      const connection = {};
      for (type of Object.keys(currentConnections[sourceNode])) {
        connection[type] = [];
        for (sourceIndex = 0; sourceIndex < currentConnections[sourceNode][type].length; sourceIndex++) {
          const nodeSourceConnections = [];
          const connectionsToCheck = currentConnections[sourceNode][type][sourceIndex];
          if (connectionsToCheck) {
            for (connectionIndex = 0; connectionIndex < connectionsToCheck.length; connectionIndex++) {
              connectionData = connectionsToCheck[connectionIndex];
              if (!createNodeNames.includes(connectionData.node)) {
                continue;
              }
              nodeSourceConnections.push(connectionData);
            }
          }
          connection[type].push(nodeSourceConnections);
        }
      }
      newConnections[sourceNode] = connection;
    }
    const tempWorkflow = workflowsStore.getWorkflow(createNodes, newConnections);
    for (oldName in nodeNameTable) {
      if (oldName === nodeNameTable[oldName]) {
        continue;
      }
      tempWorkflow.renameNode(oldName, nodeNameTable[oldName]);
    }
    if (data.pinData) {
      let pinDataSuccess = true;
      for (const nodeName of Object.keys(data.pinData)) {
        if (!pinDataSuccess) {
          toast.showError(
            new Error(i18n.baseText("ndv.pinData.error.tooLarge.description")),
            i18n.baseText("ndv.pinData.error.tooLarge.title")
          );
          continue;
        }
        const node = tempWorkflow.nodes[nodeNameTable[nodeName]];
        try {
          const pinnedDataForNode = usePinnedData(node);
          pinnedDataForNode.setData(data.pinData[nodeName], "add-nodes");
          pinDataSuccess = true;
        } catch (error) {
          pinDataSuccess = false;
          console.error(error);
        }
      }
    }
    if (trackBulk && trackHistory) {
      historyStore.startRecordingUndo();
    }
    await addNodes(Object.values(tempWorkflow.nodes), { trackBulk: false, trackHistory });
    await addConnections(
      mapLegacyConnectionsToCanvasConnections(
        tempWorkflow.connectionsBySourceNode,
        Object.values(tempWorkflow.nodes)
      ),
      { trackBulk: false, trackHistory }
    );
    if (trackBulk && trackHistory) {
      historyStore.stopRecordingUndo();
    }
    uiStore.stateIsDirty = true;
    return {
      nodes: Object.values(tempWorkflow.nodes),
      connections: tempWorkflow.connectionsBySourceNode
    };
  }
  async function importWorkflowData(workflowData, source, importTags = true, { trackBulk = true, trackHistory = true } = {}) {
    uiStore.resetLastInteractedWith();
    if (!workflowData.hasOwnProperty("nodes") || !workflowData.hasOwnProperty("connections")) {
      return {};
    }
    try {
      const nodeIdMap = {};
      if (workflowData.nodes) {
        const nodeNames = new Set(workflowData.nodes.map((node) => node.name));
        workflowData.nodes.forEach((node) => {
          if (!node.name) {
            const nodeType = nodeTypesStore.getNodeType(node.type);
            const newName = uniqueNodeName(
              nodeType?.displayName ?? node.type,
              Array.from(nodeNames)
            );
            node.name = newName;
            nodeNames.add(newName);
          }
          if (node.webhookId && UPDATE_WEBHOOK_ID_NODE_TYPES.includes(node.type)) {
            const isDuplicate = Object.values(workflowHelpers.getCurrentWorkflow().nodes).some(
              (n) => n.webhookId === node.webhookId
            );
            if (isDuplicate) {
              nodeHelpers.assignWebhookId(node);
              if (node.parameters.path) {
                node.parameters.path = node.webhookId;
              } else if (node.parameters.options.path) {
                node.parameters.options.path = node.webhookId;
              }
            }
          }
          if (node.id) {
            const previousId = node.id;
            const newId = nodeHelpers.assignNodeId(node);
            nodeIdMap[newId] = previousId;
          } else {
            nodeHelpers.assignNodeId(node);
          }
        });
      }
      removeUnknownCredentials(workflowData);
      const nodeGraph = JSON.stringify(
        generateNodesGraph(
          workflowData,
          workflowHelpers.getNodeTypes(),
          {
            nodeIdMap,
            sourceInstanceId: workflowData.meta && workflowData.meta.instanceId !== rootStore.instanceId ? workflowData.meta.instanceId : "",
            isCloudDeployment: settingsStore.isCloudDeployment
          }
        ).nodeGraph
      );
      if (source === "paste") {
        telemetry.track("User pasted nodes", {
          workflow_id: workflowsStore.workflowId,
          node_graph_string: nodeGraph
        });
      } else if (source === "duplicate") {
        telemetry.track("User duplicated nodes", {
          workflow_id: workflowsStore.workflowId,
          node_graph_string: nodeGraph
        });
      } else {
        telemetry.track("User imported workflow", {
          source,
          workflow_id: workflowsStore.workflowId,
          node_graph_string: nodeGraph
        });
      }
      workflowHelpers.updateNodePositions(
        workflowData,
        getNewNodePosition(editableWorkflow.value.nodes, lastClickPosition.value)
      );
      await addImportedNodesToWorkflow(workflowData, { trackBulk, trackHistory });
      if (importTags && settingsStore.areTagsEnabled && Array.isArray(workflowData.tags)) {
        await importWorkflowTags(workflowData);
      }
      return workflowData;
    } catch (error) {
      toast.showError(error, i18n.baseText("nodeView.showError.importWorkflowData.title"));
      return {};
    }
  }
  async function importWorkflowTags(workflowData) {
    const allTags = await tagsStore.fetchAll();
    const tagNames = new Set(allTags.map((tag) => tag.name));
    const workflowTags = workflowData.tags;
    const notFound = workflowTags.filter((tag) => !tagNames.has(tag.name));
    const creatingTagPromises = [];
    for (const tag of notFound) {
      const creationPromise = tagsStore.create(tag.name).then((newTag) => {
        allTags.push(newTag);
        return newTag;
      });
      creatingTagPromises.push(creationPromise);
    }
    await Promise.all(creatingTagPromises);
    const tagIds = workflowTags.reduce((accu, imported) => {
      const tag = allTags.find((t) => t.name === imported.name);
      if (tag) {
        accu.push(tag.id);
      }
      return accu;
    }, []);
    workflowsStore.addWorkflowTagIds(tagIds);
  }
  async function fetchWorkflowDataFromUrl(url) {
    let workflowData;
    canvasStore.startLoading();
    try {
      workflowData = await workflowsStore.getWorkflowFromUrl(url);
    } catch (error) {
      toast.showError(error, i18n.baseText("nodeView.showError.getWorkflowDataFromUrl.title"));
      return;
    } finally {
      canvasStore.stopLoading();
    }
    return workflowData;
  }
  function getNodesToSave(nodes) {
    const data = {
      nodes: [],
      connections: {},
      pinData: {}
    };
    const exportedNodeNames = /* @__PURE__ */ new Set();
    for (const node of nodes) {
      const nodeSaveData = workflowHelpers.getNodeDataToSave(node);
      const pinDataForNode = workflowsStore.pinDataByNodeName(node.name);
      if (pinDataForNode) {
        data.pinData[node.name] = pinDataForNode;
      }
      if (nodeSaveData.credentials && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) {
        nodeSaveData.credentials = filterAllowedCredentials(
          nodeSaveData.credentials,
          workflowsStore.usedCredentials
        );
      }
      data.nodes.push(nodeSaveData);
      exportedNodeNames.add(node.name);
    }
    data.connections = getConnectionsForNodes(data.nodes, exportedNodeNames);
    workflowHelpers.removeForeignCredentialsFromWorkflow(data, credentialsStore.allCredentials);
    return data;
  }
  function filterAllowedCredentials(credentials, usedCredentials) {
    return Object.fromEntries(
      Object.entries(credentials).filter(([, credential]) => {
        return credential.id && (!usedCredentials[credential.id] || usedCredentials[credential.id]?.currentUserHasAccess);
      })
    );
  }
  function getConnectionsForNodes(nodes, includeNodeNames) {
    const connections = {};
    for (const node of nodes) {
      const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(node.name);
      if (!Object.keys(outgoingConnections).length) continue;
      const filteredConnections = filterConnectionsByNodes(outgoingConnections, includeNodeNames);
      if (Object.keys(filteredConnections).length) {
        connections[node.name] = filteredConnections;
      }
    }
    return connections;
  }
  function filterConnectionsByNodes(connections, includeNodeNames) {
    const filteredConnections = {};
    for (const [type, typeConnections] of Object.entries(connections)) {
      const validConnections = typeConnections.map(
        (sourceConnections) => (sourceConnections ?? []).filter((connection) => includeNodeNames.has(connection.node))
      );
      if (validConnections.length) {
        filteredConnections[type] = validConnections;
      }
    }
    return filteredConnections;
  }
  async function duplicateNodes(ids) {
    const workflowData = deepCopy(getNodesToSave(workflowsStore.getNodesByIds(ids)));
    const result = await importWorkflowData(workflowData, "duplicate", false);
    return result.nodes?.map((node) => node.id).filter(isPresent) ?? [];
  }
  async function copyNodes(ids) {
    const workflowData = deepCopy(getNodesToSave(workflowsStore.getNodesByIds(ids)));
    workflowData.meta = {
      ...workflowData.meta,
      ...workflowsStore.workflow.meta,
      instanceId: rootStore.instanceId
    };
    await clipboard.copy(JSON.stringify(workflowData, null, 2));
    telemetry.track("User copied nodes", {
      node_types: workflowData.nodes.map((node) => node.type),
      workflow_id: workflowsStore.workflowId
    });
  }
  async function cutNodes(ids) {
    await copyNodes(ids);
    deleteNodes(ids);
  }
  async function openExecution(executionId) {
    let data;
    try {
      data = await workflowsStore.getExecution(executionId);
    } catch (error) {
      toast.showError(error, i18n.baseText("nodeView.showError.openExecution.title"));
      return;
    }
    if (data === void 0) {
      throw new Error(`Execution with id "${executionId}" could not be found!`);
    }
    initializeWorkspace(data.workflowData);
    workflowsStore.setWorkflowExecutionData(data);
    if (!["manual", "evaluation"].includes(data.mode)) {
      workflowsStore.setWorkflowPinData({});
    }
    uiStore.stateIsDirty = false;
    return data;
  }
  async function toggleChatOpen(source, isOpen) {
    const workflow = workflowsStore.getCurrentWorkflow();
    workflowsStore.toggleLogsPanelOpen(isOpen);
    const payload = {
      workflow_id: workflow.id,
      button_type: source
    };
    void externalHooks.run("nodeView.onOpenChat", payload);
    telemetry.track("User clicked chat open button", payload);
  }
  async function importTemplate({
    id,
    name,
    workflow
  }) {
    const convertedNodes = workflow.nodes?.map(workflowsStore.convertTemplateNodeToNodeUi);
    if (workflow.connections) {
      workflowsStore.setConnections(workflow.connections);
    }
    await addNodes(convertedNodes ?? []);
    await workflowsStore.getNewWorkflowDataAndMakeShareable(name, projectsStore.currentProjectId);
    workflowsStore.addToWorkflowMetadata({ templateId: `${id}` });
  }
  function tryToOpenSubworkflowInNewTab(nodeId) {
    const node = workflowsStore.getNodeById(nodeId);
    if (!node) return false;
    const subWorkflowId = getSubworkflowId(node);
    if (!subWorkflowId) return false;
    window.open(`${rootStore.baseUrl}workflow/${subWorkflowId}`, "_blank");
    return true;
  }
  return {
    lastClickPosition,
    editableWorkflow,
    editableWorkflowObject,
    triggerNodes,
    requireNodeTypeDescription,
    addNodes,
    addNode,
    resolveNodePosition,
    revertAddNode,
    updateNodesPosition,
    updateNodePosition,
    tidyUp,
    revertUpdateNodePosition,
    setNodeActive,
    setNodeActiveByName,
    clearNodeActive,
    setNodeSelected,
    toggleNodesDisabled,
    revertToggleNodeDisabled,
    toggleNodesPinned,
    setNodeParameters,
    renameNode,
    revertRenameNode,
    deleteNode,
    deleteNodes,
    copyNodes,
    cutNodes,
    duplicateNodes,
    getNodesToSave,
    revertDeleteNode,
    addConnections,
    createConnection,
    revertCreateConnection,
    deleteConnection,
    revertDeleteConnection,
    deleteConnectionsByNodeId,
    revalidateNodeInputConnections,
    revalidateNodeOutputConnections,
    isConnectionAllowed,
    filterConnectionsByNodes,
    connectAdjacentNodes,
    importWorkflowData,
    fetchWorkflowDataFromUrl,
    resetWorkspace,
    initializeWorkspace,
    resolveNodeWebhook,
    openExecution,
    toggleChatOpen,
    importTemplate,
    tryToOpenSubworkflowInNewTab
  };
}
export {
  AINodesView as A,
  RegularView as R,
  TriggerView as T,
  useCanvasOperations as a,
  capitalize as b,
  createCanvasConnectionHandleString as c,
  checkOverlap as d,
  mapLegacyConnectionsToCanvasConnections as e,
  useViewStacks as f,
  camelCase as g,
  useKeyboardNavigation as h,
  insertSpacersBetweenEndpoints as i,
  AIView as j,
  mapLegacyEndpointsToCanvasConnectionPort as m,
  parseCanvasConnectionHandleString as p,
  useNodeCreatorStore as u
};
