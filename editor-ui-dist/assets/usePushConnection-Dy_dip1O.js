import { d as defineComponent, co as resolveDirective, i as createElementBlock, g as openBlock, aA as withDirectives, k as createBaseVNode, t as toDisplayString, m as unref, c as useI18n, Q as useWorkflowsStore, H as useUIStore, dx as clearPopupWindowState, ag as useTelemetry, dy as parse, dz as hasTrimmedItem, p as useSettingsStore, a5 as useWorkflowHelpers, ak as WORKFLOW_SETTINGS_MODAL_KEY, a as useToast, dA as generateNodesGraph, aq as h, bz as useNodeTypesStore, dB as getTriggerNodeServiceName, bA as useNodeHelpers, dC as hasTrimmedData, aP as useExternalHooks, dD as codeNodeEditorEventBus, bS as useCredentialsStore, dE as useAssistantStore, dF as useSchemaPreviewStore, dG as isCommunityPackageName, dH as makeRestApiRequest, O as defineStore, Z as useRootStore, P as usePushConnectionStore, r as ref } from "./index-2X4RXSdq.js";
import { g as getEasyAiWorkflowJson } from "./easyAiWorkflowUtils-BWAoWBV7.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-D3H4mtsi.js";
const _hoisted_1 = { "data-test-id": "sanitized-error-message" };
const _hoisted_2 = ["data-action-parameter-node"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeExecutionErrorMessage",
  props: {
    nodeName: {},
    errorMessage: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", null, [
        withDirectives(createBaseVNode("span", _hoisted_1, null, 512), [
          [_directive_n8n_html, _ctx.errorMessage]
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createBaseVNode("a", {
          "data-action": "openNodeDetail",
          "data-action-parameter-node": _ctx.nodeName
        }, toDisplayString(unref(i18n).baseText("node.executionError.openNode")), 9, _hoisted_2)
      ]);
    };
  }
});
async function executionFinished({ data }, options) {
  const workflowsStore = useWorkflowsStore();
  const uiStore = useUIStore();
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  }
  const telemetry = useTelemetry();
  clearPopupWindowState();
  const workflow = workflowsStore.getWorkflowById(data.workflowId);
  if (workflow?.meta?.templateId) {
    const easyAiWorkflowJson = getEasyAiWorkflowJson();
    const isEasyAIWorkflow = workflow.meta.templateId === easyAiWorkflowJson.meta.templateId;
    if (isEasyAIWorkflow) {
      telemetry.track(
        "User executed test AI workflow",
        {
          status: data.status
        },
        { withPostHog: true }
      );
    }
  }
  uiStore.setProcessingExecutionResults(true);
  let successToastAlreadyShown = false;
  let execution;
  if (data.rawData) {
    const { executionId, workflowId, status, rawData } = data;
    execution = {
      id: executionId,
      workflowId,
      workflowData: workflowsStore.workflow,
      data: parse(rawData),
      status,
      startedAt: workflowsStore.workflowExecutionData?.startedAt ?? /* @__PURE__ */ new Date(),
      stoppedAt: /* @__PURE__ */ new Date()
    };
  } else {
    if (data.status === "success") {
      handleExecutionFinishedSuccessfully(data.workflowId, options);
      successToastAlreadyShown = true;
    }
    execution = await fetchExecutionData(data.executionId);
    if (!execution) {
      uiStore.setProcessingExecutionResults(false);
      return;
    }
  }
  const runExecutionData = getRunExecutionData(execution);
  uiStore.setProcessingExecutionResults(false);
  if (execution.data?.waitTill !== void 0) {
    handleExecutionFinishedWithWaitTill(options);
  } else if (execution.status === "error" || execution.status === "canceled") {
    handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, options);
  } else {
    handleExecutionFinishedWithOther(successToastAlreadyShown, options);
  }
  setRunExecutionData(execution, runExecutionData);
}
async function fetchExecutionData(executionId) {
  const workflowsStore = useWorkflowsStore();
  try {
    const executionResponse = await workflowsStore.fetchExecutionDataById(executionId);
    if (!executionResponse?.data) {
      return;
    }
    return {
      id: executionId,
      workflowId: executionResponse.workflowId,
      workflowData: workflowsStore.workflow,
      data: parse(executionResponse.data),
      status: executionResponse.status,
      startedAt: workflowsStore.workflowExecutionData?.startedAt,
      stoppedAt: /* @__PURE__ */ new Date()
    };
  } catch {
    return;
  }
}
function getRunExecutionData(execution) {
  const workflowsStore = useWorkflowsStore();
  const runExecutionData = {
    startData: execution.data?.startData,
    resultData: execution.data?.resultData ?? { runData: {} },
    executionData: execution.data?.executionData
  };
  if (workflowsStore.workflowExecutionData?.workflowId === execution.workflowId) {
    const activeRunData = workflowsStore.workflowExecutionData?.data?.resultData?.runData;
    if (activeRunData) {
      for (const key of Object.keys(activeRunData)) {
        if (hasTrimmedItem(activeRunData[key])) continue;
        runExecutionData.resultData.runData[key] = activeRunData[key];
      }
    }
  }
  return runExecutionData;
}
function getExecutionError(execution) {
  const error = execution.data?.resultData.error;
  const i18n = useI18n();
  let errorMessage;
  if (execution.data?.resultData.lastNodeExecuted && error) {
    errorMessage = error.message ?? error.description ?? "";
  } else {
    errorMessage = i18n.baseText("pushConnection.executionError", {
      interpolate: { error: "!" }
    });
    if (error?.message) {
      let nodeName;
      if ("node" in error) {
        nodeName = typeof error.node === "string" ? error.node : error.node.name;
      }
      const receivedError = nodeName ? `${nodeName}: ${error.message}` : error.message;
      errorMessage = i18n.baseText("pushConnection.executionError", {
        interpolate: {
          error: `.${i18n.baseText("pushConnection.executionError.details", {
            interpolate: {
              details: receivedError
            }
          })}`
        }
      });
    }
  }
  return errorMessage;
}
function getRunDataExecutedErrorMessage(execution) {
  const i18n = useI18n();
  if (execution.status === "crashed") {
    return i18n.baseText("pushConnection.executionFailed.message");
  } else if (execution.status === "canceled") {
    const workflowsStore = useWorkflowsStore();
    return i18n.baseText("executionsList.showMessage.stopExecution.message", {
      interpolate: { activeExecutionId: workflowsStore.activeExecutionId ?? "" }
    });
  }
  return getExecutionError(execution);
}
function handleExecutionFinishedWithWaitTill(options) {
  const workflowsStore = useWorkflowsStore();
  const settingsStore = useSettingsStore();
  const workflowHelpers = useWorkflowHelpers(options);
  const workflowObject = workflowsStore.getCurrentWorkflow();
  const workflowSettings = workflowsStore.workflowSettings;
  const saveManualExecutions = workflowSettings.saveManualExecutions ?? settingsStore.saveManualExecutions;
  if (!saveManualExecutions) {
    const uiStore = useUIStore();
    globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
      key: "open-settings",
      action: async () => {
        if (workflowsStore.isNewWorkflow) await workflowHelpers.saveAsNewWorkflow();
        uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
      }
    });
  }
  workflowHelpers.setDocumentTitle(workflowObject.name, "IDLE");
}
function handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, options) {
  const toast = useToast();
  const i18n = useI18n();
  const telemetry = useTelemetry();
  const workflowsStore = useWorkflowsStore();
  const workflowHelpers = useWorkflowHelpers(options);
  const workflowObject = workflowsStore.getCurrentWorkflow();
  const runDataExecutedErrorMessage = getRunDataExecutedErrorMessage(execution);
  workflowHelpers.setDocumentTitle(workflowObject.name, "ERROR");
  if (runExecutionData.resultData.error?.name === "ExpressionError" && runExecutionData.resultData.error.functionality === "pairedItem") {
    const error = runExecutionData.resultData.error;
    void workflowHelpers.getWorkflowDataToSave().then((workflowData) => {
      const eventData = {
        caused_by_credential: false,
        error_message: error.description,
        error_title: error.message,
        error_type: error.context.type,
        node_graph_string: JSON.stringify(
          generateNodesGraph(
            workflowData,
            workflowHelpers.getNodeTypes()
          ).nodeGraph
        ),
        workflow_id: workflowsStore.workflowId
      };
      if (error.context.nodeCause && ["paired_item_no_info", "paired_item_invalid_info"].includes(error.context.type)) {
        const node = workflowObject.getNode(error.context.nodeCause);
        if (node) {
          eventData.is_pinned = !!workflowObject.getPinDataOfNode(node.name);
          eventData.mode = node.parameters.mode;
          eventData.node_type = node.type;
          eventData.operation = node.parameters.operation;
          eventData.resource = node.parameters.resource;
        }
      }
      telemetry.track("Instance FE emitted paired item error", eventData, {
        withPostHog: true
      });
    });
  }
  if (runExecutionData.resultData.error?.name === "SubworkflowOperationError") {
    const error = runExecutionData.resultData.error;
    workflowsStore.subWorkflowExecutionError = error;
    toast.showMessage({
      title: error.message,
      message: error.description,
      type: "error",
      duration: 0
    });
  } else if ((runExecutionData.resultData.error?.name === "NodeOperationError" || runExecutionData.resultData.error?.name === "NodeApiError") && runExecutionData.resultData.error.functionality === "configuration-node") {
    let title;
    const nodeError = runExecutionData.resultData.error;
    if (nodeError.node.name) {
      title = `Error in sub-node ‘${nodeError.node.name}‘`;
    } else {
      title = "Problem executing workflow";
    }
    toast.showMessage({
      title,
      message: h(_sfc_main, {
        errorMessage: nodeError?.description ?? runDataExecutedErrorMessage,
        nodeName: nodeError.node.name
      }),
      type: "error",
      duration: 0
    });
  } else {
    if (execution.status === "canceled") {
      toast.showMessage({
        title: i18n.baseText("nodeView.showMessage.stopExecutionTry.title"),
        type: "success"
      });
    } else {
      let title;
      if (runExecutionData.resultData.lastNodeExecuted) {
        title = `Problem in node ‘${runExecutionData.resultData.lastNodeExecuted}‘`;
      } else {
        title = "Problem executing workflow";
      }
      toast.showMessage({
        title,
        message: runDataExecutedErrorMessage,
        type: "error",
        duration: 0
      });
    }
  }
}
function handleExecutionFinishedSuccessfully(workflowId, options) {
  const workflowsStore = useWorkflowsStore();
  const workflowHelpers = useWorkflowHelpers(options);
  const toast = useToast();
  const i18n = useI18n();
  workflowHelpers.setDocumentTitle(workflowsStore.getWorkflowById(workflowId)?.name, "IDLE");
  workflowsStore.setActiveExecutionId(void 0);
  toast.showMessage({
    title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
    type: "success"
  });
}
function handleExecutionFinishedWithOther(successToastAlreadyShown, options) {
  const workflowsStore = useWorkflowsStore();
  const toast = useToast();
  const i18n = useI18n();
  const workflowHelpers = useWorkflowHelpers(options);
  const nodeTypesStore = useNodeTypesStore();
  const workflowObject = workflowsStore.getCurrentWorkflow();
  workflowHelpers.setDocumentTitle(workflowObject.name, "IDLE");
  const workflowExecution = workflowsStore.getWorkflowExecution;
  if (workflowExecution?.executedNode) {
    const node = workflowsStore.getNodeByName(workflowExecution.executedNode);
    const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
    const nodeOutput = workflowExecution?.executedNode && workflowExecution.data?.resultData?.runData?.[workflowExecution.executedNode];
    if (nodeType?.polling && !nodeOutput) {
      toast.showMessage({
        title: i18n.baseText("pushConnection.pollingNode.dataNotFound", {
          interpolate: {
            service: getTriggerNodeServiceName(nodeType)
          }
        }),
        message: i18n.baseText("pushConnection.pollingNode.dataNotFound.message", {
          interpolate: {
            service: getTriggerNodeServiceName(nodeType)
          }
        }),
        type: "success"
      });
    } else {
      toast.showMessage({
        title: i18n.baseText("pushConnection.nodeExecutedSuccessfully"),
        type: "success"
      });
    }
  } else if (!successToastAlreadyShown) {
    toast.showMessage({
      title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
      type: "success"
    });
  }
}
function setRunExecutionData(execution, runExecutionData) {
  const workflowsStore = useWorkflowsStore();
  const nodeHelpers = useNodeHelpers();
  const runDataExecutedErrorMessage = getRunDataExecutedErrorMessage(execution);
  const workflowExecution = workflowsStore.getWorkflowExecution;
  if (workflowsStore.getWorkflowRunData && !hasTrimmedData(workflowsStore.getWorkflowRunData)) {
    runExecutionData.resultData.runData = workflowsStore.getWorkflowRunData;
  }
  removeRunningTaskData(runExecutionData.resultData.runData);
  workflowsStore.executingNode.length = 0;
  workflowsStore.setWorkflowExecutionData({
    ...workflowExecution,
    status: execution.status,
    id: execution.id,
    stoppedAt: execution.stoppedAt
  });
  workflowsStore.setWorkflowExecutionRunData(runExecutionData);
  workflowsStore.setActiveExecutionId(void 0);
  nodeHelpers.updateNodesExecutionIssues();
  const lastNodeExecuted = runExecutionData.resultData.lastNodeExecuted;
  let itemsCount = 0;
  if (lastNodeExecuted && runExecutionData.resultData.runData[lastNodeExecuted] && !runDataExecutedErrorMessage) {
    itemsCount = runExecutionData.resultData.runData[lastNodeExecuted][0].data?.main[0]?.length ?? 0;
  }
  workflowsStore.setActiveExecutionId(void 0);
  void useExternalHooks().run("pushConnection.executionFinished", {
    itemsCount,
    nodeName: runExecutionData.resultData.lastNodeExecuted,
    errorMessage: runDataExecutedErrorMessage,
    runDataExecutedStartData: runExecutionData.startData,
    resultDataError: runExecutionData.resultData.error
  });
  const lineNumber = runExecutionData.resultData?.error?.lineNumber;
  codeNodeEditorEventBus.emit("highlightLine", lineNumber ?? "last");
}
function removeRunningTaskData(runData) {
  for (const [nodeName, taskItems] of Object.entries(runData)) {
    if (taskItems.some((item) => item.executionStatus === "running")) {
      runData[nodeName] = taskItems.filter((item) => item.executionStatus !== "running");
    }
  }
}
async function executionRecovered({ data }, options) {
  const workflowsStore = useWorkflowsStore();
  const uiStore = useUIStore();
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  }
  uiStore.setProcessingExecutionResults(true);
  const execution = await fetchExecutionData(data.executionId);
  if (!execution) {
    uiStore.setProcessingExecutionResults(false);
    return;
  }
  const runExecutionData = getRunExecutionData(execution);
  uiStore.setProcessingExecutionResults(false);
  if (execution.data?.waitTill !== void 0) {
    handleExecutionFinishedWithWaitTill(options);
  } else if (execution.status === "error" || execution.status === "canceled") {
    handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, options);
  } else {
    handleExecutionFinishedWithOther(false, options);
  }
  setRunExecutionData(execution, runExecutionData);
}
async function executionStarted({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  } else if (workflowsStore.activeExecutionId === null) {
    workflowsStore.setActiveExecutionId(data.executionId);
  }
  if (workflowsStore.workflowExecutionData?.data && data.flattedRunData) {
    workflowsStore.workflowExecutionData.data.resultData.runData = parse(data.flattedRunData);
  }
}
async function nodeDescriptionUpdated(_event) {
  const nodeTypesStore = useNodeTypesStore();
  const credentialsStore = useCredentialsStore();
  await nodeTypesStore.getNodeTypes();
  await credentialsStore.fetchCredentialTypes(true);
}
async function nodeExecuteAfter({ data: pushData }) {
  const workflowsStore = useWorkflowsStore();
  const assistantStore = useAssistantStore();
  const schemaPreviewStore = useSchemaPreviewStore();
  if (pushData.itemCount && pushData.data?.data?.main && Array.isArray(pushData.data.data.main[0]) && pushData.data.data.main[0].length < pushData.itemCount) {
    pushData.data.data.main[0]?.push(...new Array(pushData.itemCount - 1).fill({ json: {} }));
  }
  workflowsStore.updateNodeExecutionData(pushData);
  setTimeout(() => {
    workflowsStore.removeExecutingNode(pushData.nodeName);
  }, 50);
  void assistantStore.onNodeExecution(pushData);
  void schemaPreviewStore.trackSchemaPreviewExecution(pushData);
}
async function nodeExecuteBefore({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.addExecutingNode(data.nodeName);
  workflowsStore.addNodeExecutionData(data);
}
async function reloadNodeType({ data }) {
  const nodeTypesStore = useNodeTypesStore();
  await nodeTypesStore.getNodeTypes();
  const isCommunityNode = isCommunityPackageName(data.name);
  await nodeTypesStore.getFullNodesProperties([data], !isCommunityNode);
}
async function removeNodeType({ data }) {
  const nodeTypesStore = useNodeTypesStore();
  const credentialsStore = useCredentialsStore();
  const nodesToBeRemoved = [data];
  await credentialsStore.fetchCredentialTypes(false).then(() => {
    nodeTypesStore.removeNodeTypes(nodesToBeRemoved);
  });
}
async function sendConsoleMessage({ data }) {
  console.log(data.source, ...data.messages);
}
const GET_STATUS_ENDPOINT = "/orchestration/worker/status";
const sendGetWorkerStatus = async (context) => {
  await makeRestApiRequest(context, "POST", GET_STATUS_ENDPOINT);
};
const WORKER_HISTORY_LENGTH = 100;
const STALE_SECONDS = 120 * 1e3;
const useOrchestrationStore = defineStore("orchestrationManager", {
  state: () => ({
    initialStatusReceived: false,
    workers: {},
    workersHistory: {},
    workersLastUpdated: {},
    statusInterval: null
  }),
  actions: {
    updateWorkerStatus(data) {
      this.workers[data.senderId] = data;
      if (!this.workersHistory[data.senderId]) {
        this.workersHistory[data.senderId] = [];
      }
      this.workersHistory[data.senderId].push({ data, timestamp: Date.now() });
      if (this.workersHistory[data.senderId].length > WORKER_HISTORY_LENGTH) {
        this.workersHistory[data.senderId].shift();
      }
      this.workersLastUpdated[data.senderId] = Date.now();
      this.initialStatusReceived = true;
    },
    removeStaleWorkers() {
      for (const id in this.workersLastUpdated) {
        if (this.workersLastUpdated[id] + STALE_SECONDS < Date.now()) {
          delete this.workers[id];
          delete this.workersHistory[id];
          delete this.workersLastUpdated[id];
        }
      }
    },
    startWorkerStatusPolling() {
      const rootStore = useRootStore();
      if (!this.statusInterval) {
        this.statusInterval = setInterval(async () => {
          await sendGetWorkerStatus(rootStore.restApiContext);
          this.removeStaleWorkers();
        }, 1e3);
      }
    },
    stopWorkerStatusPolling() {
      if (this.statusInterval) {
        clearInterval(this.statusInterval);
        this.statusInterval = null;
      }
    },
    getWorkerLastUpdated(workerId) {
      return this.workersLastUpdated[workerId] ?? 0;
    },
    getWorkerStatus(workerId) {
      return this.workers[workerId];
    },
    getWorkerStatusHistory(workerId) {
      return this.workersHistory[workerId] ?? [];
    }
  }
});
async function sendWorkerStatusMessage({ data }) {
  const orchestrationStore = useOrchestrationStore();
  orchestrationStore.updateWorkerStatus(data.status);
}
async function testWebhookDeleted({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (data.workflowId === workflowsStore.workflowId) {
    workflowsStore.executionWaitingForWebhook = false;
    workflowsStore.setActiveExecutionId(void 0);
  }
}
async function testWebhookReceived({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (data.workflowId === workflowsStore.workflowId) {
    workflowsStore.executionWaitingForWebhook = false;
    workflowsStore.setActiveExecutionId(data.executionId ?? null);
  }
}
async function workflowActivated({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.setWorkflowActive(data.workflowId);
}
async function workflowDeactivated({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.setWorkflowInactive(data.workflowId);
}
async function workflowFailedToActivate({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (workflowsStore.workflowId !== data.workflowId) {
    return;
  }
  workflowsStore.setWorkflowInactive(data.workflowId);
  workflowsStore.setActive(false);
  const toast = useToast();
  const i18n = useI18n();
  toast.showError(
    new Error(data.errorMessage),
    i18n.baseText("workflowActivator.showError.title", {
      interpolate: { newStateName: "activated" }
    }) + ":"
  );
}
function createEventQueue(processEvent) {
  const queue = [];
  let processing = false;
  async function processNext() {
    if (processing || queue.length === 0) {
      return;
    }
    processing = true;
    const currentEvent = queue.shift();
    if (currentEvent !== void 0) {
      try {
        await processEvent(currentEvent);
      } catch (error) {
        console.error("Error processing event:", error);
      }
    }
    processing = false;
    await processNext();
  }
  function enqueue(event) {
    queue.push(event);
    void processNext();
  }
  return { enqueue };
}
function usePushConnection(options) {
  const pushStore = usePushConnectionStore();
  const { enqueue } = createEventQueue(processEvent);
  const removeEventListener = ref(null);
  function initialize() {
    removeEventListener.value = pushStore.addEventListener((message) => {
      enqueue(message);
    });
  }
  function terminate() {
    if (typeof removeEventListener.value === "function") {
      removeEventListener.value();
    }
  }
  async function processEvent(event) {
    switch (event.type) {
      case "testWebhookDeleted":
        return await testWebhookDeleted(event);
      case "testWebhookReceived":
        return await testWebhookReceived(event);
      case "reloadNodeType":
        return await reloadNodeType(event);
      case "removeNodeType":
        return await removeNodeType(event);
      case "nodeDescriptionUpdated":
        return await nodeDescriptionUpdated();
      case "nodeExecuteBefore":
        return await nodeExecuteBefore(event);
      case "nodeExecuteAfter":
        return await nodeExecuteAfter(event);
      case "executionStarted":
        return await executionStarted(event);
      case "sendWorkerStatusMessage":
        return await sendWorkerStatusMessage(event);
      case "sendConsoleMessage":
        return await sendConsoleMessage(event);
      case "workflowFailedToActivate":
        return await workflowFailedToActivate(event);
      case "executionFinished":
        return await executionFinished(event, options);
      case "executionRecovered":
        return await executionRecovered(event, options);
      case "workflowActivated":
        return await workflowActivated(event);
      case "workflowDeactivated":
        return await workflowDeactivated(event);
    }
  }
  return {
    initialize,
    terminate
  };
}
export {
  WORKER_HISTORY_LENGTH as W,
  useOrchestrationStore as a,
  usePushConnection as u
};
