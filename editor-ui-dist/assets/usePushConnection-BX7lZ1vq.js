import { dq as makeRestApiRequest, O as defineStore, Z as useRootStore, d as defineComponent, ch as resolveDirective, i as createElementBlock, g as openBlock, aA as withDirectives, k as createBaseVNode, t as toDisplayString, m as unref, c as useI18n, a5 as useWorkflowHelpers, bA as useNodeHelpers, a as useToast, bR as useCredentialsStore, bz as useNodeTypesStore, P as usePushConnectionStore, p as useSettingsStore, H as useUIStore, Q as useWorkflowsStore, dr as useAssistantStore, r as ref, ds as clearPopupWindowState, ag as useTelemetry, dt as parse, du as hasTrimmedItem, dv as codeNodeEditorEventBus, ak as WORKFLOW_SETTINGS_MODAL_KEY, dw as generateNodesGraph, aq as h, dx as getTriggerNodeServiceName, dy as hasTrimmedData, aP as useExternalHooks, dz as useSchemaPreviewStore } from "./index-LGUZBtYa.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-BWbOUHwf.js";
import { g as getEasyAiWorkflowJson } from "./easyAiWorkflowUtils-D46KHIcU.js";
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
function usePushConnection({ router }) {
  const workflowHelpers = useWorkflowHelpers({ router });
  const nodeHelpers = useNodeHelpers();
  const toast = useToast();
  const i18n = useI18n();
  const telemetry = useTelemetry();
  const credentialsStore = useCredentialsStore();
  const nodeTypesStore = useNodeTypesStore();
  const orchestrationManagerStore = useOrchestrationStore();
  const pushStore = usePushConnectionStore();
  const settingsStore = useSettingsStore();
  const uiStore = useUIStore();
  const workflowsStore = useWorkflowsStore();
  const assistantStore = useAssistantStore();
  const retryTimeout = ref(null);
  const pushMessageQueue = ref([]);
  const removeEventListener = ref(null);
  function initialize() {
    removeEventListener.value = pushStore.addEventListener((message) => {
      void pushMessageReceived(message);
    });
  }
  function terminate() {
    if (typeof removeEventListener.value === "function") {
      removeEventListener.value();
    }
  }
  function queuePushMessage(event, retryAttempts) {
    pushMessageQueue.value.push({ message: event, retriesLeft: retryAttempts });
    if (retryTimeout.value === null) {
      retryTimeout.value = setTimeout(processWaitingPushMessages, 20);
    }
  }
  async function processWaitingPushMessages() {
    if (retryTimeout.value !== null) {
      clearTimeout(retryTimeout.value);
      retryTimeout.value = null;
    }
    const queueLength = pushMessageQueue.value.length;
    for (let i = 0; i < queueLength; i++) {
      const messageData = pushMessageQueue.value.shift();
      const result = await pushMessageReceived(messageData.message, true);
      if (!result) {
        messageData.retriesLeft -= 1;
        if (messageData.retriesLeft > 0) {
          pushMessageQueue.value.unshift(messageData);
        }
        break;
      }
    }
    if (pushMessageQueue.value.length !== 0 && retryTimeout.value === null) {
      retryTimeout.value = setTimeout(processWaitingPushMessages, 25);
    }
  }
  async function pushMessageReceived(receivedData, isRetry) {
    const retryAttempts = 5;
    if (receivedData.type === "sendWorkerStatusMessage") {
      const pushData = receivedData.data;
      orchestrationManagerStore.updateWorkerStatus(pushData.status);
      return true;
    }
    if (receivedData.type === "sendConsoleMessage") {
      const pushData = receivedData.data;
      console.log(pushData.source, ...pushData.messages);
      return true;
    }
    if (!["testWebhookReceived"].includes(receivedData.type) && isRetry !== true && pushMessageQueue.value.length) {
      queuePushMessage(receivedData, retryAttempts);
      return false;
    }
    if (receivedData.type === "executionStarted") {
      if (!workflowsStore.activeExecutionId) {
        workflowsStore.setActiveExecutionId(receivedData.data.executionId);
      }
    }
    if (receivedData.type === "nodeExecuteAfter" || receivedData.type === "nodeExecuteBefore" || receivedData.type === "executionStarted") {
      if (!uiStore.isActionActive.workflowRunning) {
        return false;
      }
      const pushData = receivedData.data;
      if (workflowsStore.activeExecutionId !== pushData.executionId) {
        if (isRetry !== true) {
          queuePushMessage(receivedData, retryAttempts);
        }
        return false;
      }
    }
    if (receivedData.type === "workflowFailedToActivate" && workflowsStore.workflowId === receivedData.data.workflowId) {
      workflowsStore.setWorkflowInactive(receivedData.data.workflowId);
      workflowsStore.setActive(false);
      toast.showError(
        new Error(receivedData.data.errorMessage),
        i18n.baseText("workflowActivator.showError.title", {
          interpolate: { newStateName: "activated" }
        }) + ":"
      );
      return true;
    }
    if (receivedData.type === "workflowActivated") {
      workflowsStore.setWorkflowActive(receivedData.data.workflowId);
      return true;
    }
    if (receivedData.type === "workflowDeactivated") {
      workflowsStore.setWorkflowInactive(receivedData.data.workflowId);
      return true;
    }
    if (receivedData.type === "executionFinished" || receivedData.type === "executionRecovered") {
      if (!uiStore.isActionActive.workflowRunning) {
        return false;
      }
      if (receivedData.type === "executionFinished") {
        clearPopupWindowState();
        const workflow2 = workflowsStore.getWorkflowById(receivedData.data.workflowId);
        if (workflow2?.meta?.templateId) {
          const easyAiWorkflowJson = getEasyAiWorkflowJson();
          const isEasyAIWorkflow = workflow2.meta.templateId === easyAiWorkflowJson.meta.templateId;
          if (isEasyAIWorkflow) {
            telemetry.track(
              "User executed test AI workflow",
              {
                status: receivedData.data.status
              },
              { withPostHog: true }
            );
          }
        }
      }
      const { executionId } = receivedData.data;
      if (executionId !== workflowsStore.activeExecutionId) {
        if (isRetry !== true) {
          queuePushMessage(receivedData, retryAttempts);
        }
        return false;
      }
      let showedSuccessToast = false;
      let executionData;
      if (receivedData.type === "executionFinished" && receivedData.data.rawData) {
        const { workflowId, status, rawData } = receivedData.data;
        executionData = {
          workflowId,
          workflowData: workflowsStore.workflow,
          data: parse(rawData),
          status,
          startedAt: workflowsStore.workflowExecutionData?.startedAt ?? /* @__PURE__ */ new Date(),
          stoppedAt: /* @__PURE__ */ new Date()
        };
      } else {
        uiStore.setProcessingExecutionResults(true);
        if (receivedData.type === "executionFinished" && receivedData.data.status === "success") {
          workflowHelpers.setDocumentTitle(
            workflowsStore.getWorkflowById(receivedData.data.workflowId)?.name,
            "IDLE"
          );
          uiStore.removeActiveAction("workflowRunning");
          toast.showMessage({
            title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
            type: "success"
          });
          showedSuccessToast = true;
        }
        let execution;
        try {
          execution = await workflowsStore.fetchExecutionDataById(executionId);
          if (!execution?.data) {
            uiStore.setProcessingExecutionResults(false);
            return false;
          }
          executionData = {
            workflowId: execution.workflowId,
            workflowData: workflowsStore.workflow,
            data: parse(execution.data),
            status: execution.status,
            startedAt: workflowsStore.workflowExecutionData?.startedAt,
            stoppedAt: receivedData.type === "executionFinished" ? /* @__PURE__ */ new Date() : void 0
          };
        } catch {
          uiStore.setProcessingExecutionResults(false);
          return false;
        }
      }
      const iRunExecutionData = {
        startData: executionData.data?.startData,
        resultData: executionData.data?.resultData ?? { runData: {} },
        executionData: executionData.data?.executionData
      };
      if (workflowsStore.workflowExecutionData?.workflowId === executionData.workflowId) {
        const activeRunData = workflowsStore.workflowExecutionData?.data?.resultData?.runData;
        if (activeRunData) {
          for (const key of Object.keys(activeRunData)) {
            if (hasTrimmedItem(activeRunData[key])) continue;
            iRunExecutionData.resultData.runData[key] = activeRunData[key];
          }
        }
      }
      uiStore.setProcessingExecutionResults(false);
      let runDataExecutedErrorMessage = getExecutionError(iRunExecutionData);
      if (executionData.status === "crashed") {
        runDataExecutedErrorMessage = i18n.baseText("pushConnection.executionFailed.message");
      } else if (executionData.status === "canceled") {
        runDataExecutedErrorMessage = i18n.baseText(
          "executionsList.showMessage.stopExecution.message",
          {
            interpolate: { activeExecutionId: workflowsStore.activeExecutionId }
          }
        );
      }
      const lineNumber = iRunExecutionData.resultData?.error?.lineNumber;
      codeNodeEditorEventBus.emit("highlightLine", lineNumber ?? "last");
      const workflow = workflowHelpers.getCurrentWorkflow();
      if (executionData.data?.waitTill !== void 0) {
        const workflowSettings = workflowsStore.workflowSettings;
        const saveManualExecutions = settingsStore.saveManualExecutions;
        const isSavingExecutions = workflowSettings.saveManualExecutions === void 0 ? saveManualExecutions : workflowSettings.saveManualExecutions;
        if (!isSavingExecutions) {
          globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
            key: "open-settings",
            action: async () => {
              if (workflowsStore.isNewWorkflow) await workflowHelpers.saveAsNewWorkflow();
              uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
            }
          });
        }
        workflowHelpers.setDocumentTitle(workflow.name, "IDLE");
      } else if (executionData.status === "error" || executionData.status === "canceled") {
        workflowHelpers.setDocumentTitle(workflow.name, "ERROR");
        if (iRunExecutionData.resultData.error?.name === "ExpressionError" && iRunExecutionData.resultData.error.functionality === "pairedItem") {
          const error = iRunExecutionData.resultData.error;
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
            if (error.context.nodeCause && ["paired_item_no_info", "paired_item_invalid_info"].includes(
              error.context.type
            )) {
              const node = workflow.getNode(error.context.nodeCause);
              if (node) {
                eventData.is_pinned = !!workflow.getPinDataOfNode(node.name);
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
        if (iRunExecutionData.resultData.error?.name === "SubworkflowOperationError") {
          const error = iRunExecutionData.resultData.error;
          workflowsStore.subWorkflowExecutionError = error;
          toast.showMessage({
            title: error.message,
            message: error.description,
            type: "error",
            duration: 0
          });
        } else if ((iRunExecutionData.resultData.error?.name === "NodeOperationError" || iRunExecutionData.resultData.error?.name === "NodeApiError") && iRunExecutionData.resultData.error.functionality === "configuration-node") {
          let title;
          const nodeError = iRunExecutionData.resultData.error;
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
          if (executionData.status === "canceled") {
            toast.showMessage({
              title: i18n.baseText("nodeView.showMessage.stopExecutionTry.title"),
              type: "success"
            });
          } else {
            let title;
            if (iRunExecutionData.resultData.lastNodeExecuted) {
              title = `Problem in node ‘${iRunExecutionData.resultData.lastNodeExecuted}‘`;
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
      } else {
        workflowHelpers.setDocumentTitle(workflow.name, "IDLE");
        const execution = workflowsStore.getWorkflowExecution;
        if (execution?.executedNode) {
          const node = workflowsStore.getNodeByName(execution.executedNode);
          const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
          const nodeOutput = execution && execution.executedNode && execution.data?.resultData?.runData?.[execution.executedNode];
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
        } else if (!showedSuccessToast) {
          toast.showMessage({
            title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
            type: "success"
          });
        }
      }
      if (workflowsStore.getWorkflowRunData && !hasTrimmedData(workflowsStore.getWorkflowRunData)) {
        iRunExecutionData.resultData.runData = workflowsStore.getWorkflowRunData;
      }
      workflowsStore.executingNode.length = 0;
      workflowsStore.setWorkflowExecutionData(executionData);
      uiStore.removeActiveAction("workflowRunning");
      nodeHelpers.updateNodesExecutionIssues();
      const lastNodeExecuted = iRunExecutionData.resultData.lastNodeExecuted;
      let itemsCount = 0;
      if (lastNodeExecuted && iRunExecutionData.resultData.runData[lastNodeExecuted] && !runDataExecutedErrorMessage) {
        itemsCount = iRunExecutionData.resultData.runData[lastNodeExecuted][0].data.main[0].length;
      }
      workflowsStore.setActiveExecutionId(null);
      void useExternalHooks().run("pushConnection.executionFinished", {
        itemsCount,
        nodeName: iRunExecutionData.resultData.lastNodeExecuted,
        errorMessage: runDataExecutedErrorMessage,
        runDataExecutedStartData: iRunExecutionData.startData,
        resultDataError: iRunExecutionData.resultData.error
      });
    } else if (receivedData.type === "executionWaiting") ;
    else if (receivedData.type === "executionStarted") {
      if (workflowsStore.workflowExecutionData?.data && receivedData.data.flattedRunData) {
        workflowsStore.workflowExecutionData.data.resultData.runData = parse(
          receivedData.data.flattedRunData
        );
      }
    } else if (receivedData.type === "nodeExecuteAfter") {
      const pushData = receivedData.data;
      if (pushData.itemCount && pushData.data?.data?.main && Array.isArray(pushData.data.data.main[0]) && pushData.data.data.main[0].length < pushData.itemCount) {
        pushData.data.data.main[0]?.push(...new Array(pushData.itemCount - 1).fill({ json: {} }));
      }
      workflowsStore.updateNodeExecutionData(pushData);
      void assistantStore.onNodeExecution(pushData);
      void useSchemaPreviewStore().trackSchemaPreviewExecution(pushData);
    } else if (receivedData.type === "nodeExecuteBefore") {
      workflowsStore.setNodeExecuting(receivedData.data);
    } else if (receivedData.type === "testWebhookDeleted") {
      const pushData = receivedData.data;
      if (pushData.workflowId === workflowsStore.workflowId) {
        workflowsStore.executionWaitingForWebhook = false;
        uiStore.removeActiveAction("workflowRunning");
      }
    } else if (receivedData.type === "testWebhookReceived") {
      const pushData = receivedData.data;
      if (pushData.workflowId === workflowsStore.workflowId) {
        workflowsStore.executionWaitingForWebhook = false;
        workflowsStore.setActiveExecutionId(pushData.executionId);
      }
      void processWaitingPushMessages();
    } else if (receivedData.type === "reloadNodeType") {
      await nodeTypesStore.getNodeTypes();
      await nodeTypesStore.getFullNodesProperties([receivedData.data]);
    } else if (receivedData.type === "removeNodeType") {
      const pushData = receivedData.data;
      const nodesToBeRemoved = [pushData];
      await credentialsStore.fetchCredentialTypes(false).then(() => {
        nodeTypesStore.removeNodeTypes(nodesToBeRemoved);
      });
    } else if (receivedData.type === "nodeDescriptionUpdated") {
      await nodeTypesStore.getNodeTypes();
      await credentialsStore.fetchCredentialTypes(true);
    }
    return true;
  }
  function getExecutionError(data) {
    const error = data.resultData.error;
    let errorMessage;
    if (data.resultData.lastNodeExecuted && error) {
      errorMessage = error.message || error.description;
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
  return {
    initialize,
    terminate,
    pushMessageReceived,
    queuePushMessage,
    processWaitingPushMessages,
    pushMessageQueue,
    retryTimeout
  };
}
export {
  WORKER_HISTORY_LENGTH as W,
  useOrchestrationStore as a,
  usePushConnection as u
};
