import { u as useTestDefinitionForm } from "./useTestDefinitionForm-BEzHwGZB.js";
import { _ as _export_sfc, i as createElementBlock, g as openBlock, k as createBaseVNode, n as normalizeClass, d as defineComponent, r as ref, Y as useCssModule, q as computed, h as resolveComponent, m as unref, j as createVNode, f as createCommentVNode, aR as N8nTooltip, w as withCtx, e as createBlock, be as N8nText, x as renderSlot, F as Fragment, l as createTextVNode, t as toDisplayString, dk as InfoTip, c as useI18n, gK as ne, Q as useWorkflowsStore, bz as useNodeTypesStore, R as useRoute, b as useRouter, g9 as useModel, o as onMounted, d3 as N8nHeading, ea as _sfc_main$9, b7 as mergeProps, bg as N8nButton, ag as useTelemetry, a1 as useProjectsStore, gL as SAMPLE_EVALUATION_WORKFLOW, aS as N8nLink, gM as __unplugin_components_0, V as VIEWS, g8 as mergeModels, gN as Tag, gO as NODE_PINNING_MODAL_KEY, gP as __unplugin_components_0$1, ai as useMessage, gQ as useCssVar, fL as dateFormat, a_ as watchEffect, D as renderList, gR as TestTableBase, bE as N8nIcon, G as useDebounce, a as useToast, gH as useTestDefinitionStore, gm as useAnnotationTagsStore, H as useUIStore, W as useDocumentVisibility, X as watch, d7 as orderBy, aT as _sfc_main$a, gS as InlineNameEdit } from "./index-LGUZBtYa.js";
import { u as useVueFlow, a as useCanvasMapping, C as Canvas, b as CanvasNode } from "./useCanvasMapping-DTQPQbmV.js";
import { b as useCanvasOperations } from "./useCanvasOperations-D9yzH8Pf.js";
import { L as Line } from "./index-CO1lozy7.js";
import { _ as __unplugin_components_0$2 } from "./AnimatedSpinner-DQHAR8vC.js";
import { c as convertToDisplayDate } from "./dateFormatter-Dev12ulQ.js";
const blockArrow = "_blockArrow_hbkir_123";
const stalk = "_stalk_hbkir_129";
const arrowHead = "_arrowHead_hbkir_136";
const style0$7 = {
  blockArrow,
  stalk,
  arrowHead
};
const _sfc_main$8 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.blockArrow)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$style.stalk)
    }, null, 2),
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$style.arrowHead)
    }, null, 2)
  ], 2);
}
const cssModules$7 = {
  "$style": style0$7
};
const BlockArrow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__cssModules", cssModules$7]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "EvaluationStep",
  props: {
    title: { default: "" },
    warning: { type: Boolean, default: false },
    expanded: { type: Boolean, default: false },
    description: { default: "" },
    issues: { default: () => [] },
    showIssues: { type: Boolean, default: true },
    tooltip: {},
    externalTooltip: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const isExpanded = ref(props.expanded);
    const $style = useCssModule();
    const hasIssues = computed(() => props.issues.length > 0);
    const containerClass = computed(() => {
      return {
        [$style.evaluationStep]: true,
        [$style["has-issues"]]: true
      };
    });
    const toggleExpand = () => isExpanded.value = !isExpanded.value;
    const renderIssues = computed(() => props.showIssues && props.issues.length);
    const issuesList = computed(() => props.issues.map((issue) => issue.message).join(", "));
    const resizeModifier = {
      name: "resize",
      enabled: true,
      phase: "beforeWrite",
      requires: ["preventOverflow"],
      fn({ state }) {
        const overflow = ne(state);
        const MARGIN_RIGHT = 15;
        const maxWidth = state.rects.popper.width - overflow.right - MARGIN_RIGHT;
        state.styles.popper.width = `${maxWidth}px`;
      }
    };
    const popperModifiers = [
      resizeModifier,
      { name: "preventOverflow", options: { boundary: "document" } },
      { name: "flip", enabled: false }
      // prevent the tooltip from flipping
    ];
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClass.value),
        "data-test-id": "evaluation-step"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).content)
        }, [
          createVNode(unref(N8nTooltip), {
            placement: "right",
            disabled: !_ctx.externalTooltip,
            "show-arrow": false,
            "popper-class": unref($style).evaluationTooltip,
            "popper-options": { modifiers: popperModifiers },
            content: _ctx.tooltip
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(unref($style).header),
                onClick: toggleExpand
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(unref($style).label)
                }, [
                  createVNode(unref(N8nText), { bold: "" }, {
                    default: withCtx(() => [
                      _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ], 64))
                    ]),
                    _: 3
                  }),
                  !_ctx.externalTooltip ? (openBlock(), createBlock(unref(InfoTip), {
                    key: 0,
                    class: normalizeClass(unref($style).infoTip),
                    bold: true,
                    type: "tooltip",
                    theme: "info",
                    "tooltip-placement": "top",
                    enterable: false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.tooltip), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(unref($style).actions)
                }, [
                  renderIssues.value ? (openBlock(), createBlock(unref(InfoTip), {
                    key: 0,
                    bold: true,
                    type: "tooltip",
                    theme: "warning",
                    "tooltip-placement": "top",
                    enterable: false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(issuesList.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  _ctx.$slots.cardContent ? (openBlock(), createBlock(unref(N8nText), {
                    key: 1,
                    "data-test-id": "evaluation-step-collapse-button",
                    size: "xsmall",
                    color: hasIssues.value ? "primary" : "text-base",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isExpanded.value ? unref(locale).baseText("testDefinition.edit.step.collapse") : unref(locale).baseText("testDefinition.edit.step.configure")) + " ", 1),
                      createVNode(_component_font_awesome_icon, {
                        icon: isExpanded.value ? "angle-up" : "angle-down",
                        size: "lg"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["color"])) : createCommentVNode("", true)
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 8, ["disabled", "popper-class", "popper-options", "content"]),
          _ctx.$slots.cardContent && isExpanded.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref($style).cardContentWrapper)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref($style).cardContent),
              "data-test-id": "evaluation-step-content"
            }, [
              _ctx.description ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.description), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "cardContent")
            ], 2)
          ], 2)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const evaluationStep = "_evaluationStep_1h8fm_123";
const evaluationTooltip = "_evaluationTooltip_1h8fm_133";
const icon = "_icon_1h8fm_141";
const warning = "_warning_1h8fm_150";
const content$1 = "_content_1h8fm_154";
const header$1 = "_header_1h8fm_158";
const label = "_label_1h8fm_166";
const infoTip = "_infoTip_1h8fm_172";
const actions = "_actions_1h8fm_180";
const cardContent = "_cardContent_1h8fm_186";
const cardContentWrapper = "_cardContentWrapper_1h8fm_192";
const style0$6 = {
  evaluationStep,
  evaluationTooltip,
  icon,
  warning,
  content: content$1,
  header: header$1,
  label,
  infoTip,
  actions,
  cardContent,
  cardContentWrapper,
  "has-issues": "_has-issues_1h8fm_196"
};
const cssModules$6 = {
  "$style": style0$6
};
const EvaluationStep = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NodesPinning",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const route = useRoute();
    const router = useRouter();
    const locale = useI18n();
    const telemetry = useTelemetry();
    const { resetWorkspace, initializeWorkspace } = useCanvasOperations({ router });
    const uuid = crypto.randomUUID();
    const model = useModel(__props, "modelValue");
    const isLoading = ref(false);
    const workflowId = computed(() => route.params.name);
    const testId = computed(() => route.params.testId);
    const workflow = computed(() => workflowsStore.getWorkflowById(workflowId.value));
    const workflowObject = computed(() => workflowsStore.getCurrentWorkflow(true));
    const canvasId = computed(() => `${uuid}-${testId.value}`);
    const { onNodesInitialized, fitView, zoomTo, onNodeClick, viewport } = useVueFlow({
      id: canvasId.value
    });
    const nodes = computed(() => workflow.value.nodes ?? []);
    const connections = computed(() => workflow.value.connections);
    const { nodes: mappedNodes, connections: mappedConnections } = useCanvasMapping({
      nodes,
      connections,
      workflowObject
    });
    async function loadData() {
      isLoading.value = true;
      workflowsStore.resetState();
      resetWorkspace();
      await Promise.all([
        nodeTypesStore.getNodeTypes(),
        workflowsStore.fetchWorkflow(workflowId.value)
      ]);
      workflow.value.pinData = {};
      initializeWorkspace(workflow.value);
    }
    function getNodeNameById(id) {
      return mappedNodes.value.find((node) => node.id === id)?.data?.name;
    }
    function isMocked(data) {
      return model.value.some((node) => node.id === data.id);
    }
    function canBeMocked(outputs, inputs) {
      return outputs.length === 1 && inputs.length >= 1;
    }
    function handleNodeClick(data) {
      const nodeName = getNodeNameById(data.id);
      if (!nodeName || !canBeMocked(data.outputs, data.inputs)) return;
      const mocked = isMocked(data);
      model.value = mocked ? model.value.filter((node) => node.id !== data.id) : model.value.concat({ name: nodeName, id: data.id });
      if (!mocked) {
        telemetry.track("User selected node to be mocked", {
          node_id: data.id,
          test_id: testId.value
        });
      }
    }
    function tooltipContent(data) {
      if (nodeTypesStore.isTriggerNode(data.type)) {
        return locale.baseText("testDefinition.edit.nodesPinning.triggerTooltip");
      }
      if (!canBeMocked(data.outputs, data.inputs)) {
        return;
      }
      if (isMocked(data)) {
        return locale.baseText("testDefinition.edit.nodesPinning.pinButtonTooltip.pinned");
      } else {
        return locale.baseText("testDefinition.edit.nodesPinning.pinButtonTooltip");
      }
    }
    function tooltipOffset(data) {
      if (nodeTypesStore.isTriggerNode(data.type)) return;
      return 45 * viewport.value.zoom;
    }
    function tooltipProps(data) {
      const content2 = tooltipContent(data);
      return {
        disabled: !content2,
        content: content2,
        offset: tooltipOffset(data)
      };
    }
    onNodeClick(({ node }) => handleNodeClick(node.data));
    onNodesInitialized(async () => {
      await fitView();
      await zoomTo(0.7);
      await new Promise((resolve) => setTimeout(resolve, 400));
      isLoading.value = false;
    });
    onMounted(loadData);
    return (_ctx, _cache) => {
      return unref(mappedNodes).length === 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.noNodes)
      }, [
        createVNode(unref(N8nHeading), {
          size: "large",
          bold: true,
          class: normalizeClass(_ctx.$style.noNodesTitle)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.pinNodes.noNodes.title")), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(unref(N8nText), null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.pinNodes.noNodes.description")), 1)
          ]),
          _: 1
        })
      ], 2)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.container)
      }, [
        isLoading.value ? (openBlock(), createBlock(unref(_sfc_main$9), {
          key: 0,
          size: "large",
          type: "dots",
          class: normalizeClass(_ctx.$style.spinner)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        createVNode(Canvas, {
          id: canvasId.value,
          loading: isLoading.value,
          nodes: unref(mappedNodes),
          connections: unref(mappedConnections),
          "show-bug-reporting-button": false,
          "read-only": true
        }, {
          node: withCtx(({ nodeProps }) => [
            createVNode(unref(N8nTooltip), mergeProps({ placement: "top" }, tooltipProps(nodeProps.data)), {
              default: withCtx(() => [
                createVNode(CanvasNode, mergeProps(nodeProps, {
                  class: {
                    [_ctx.$style.isTrigger]: unref(nodeTypesStore).isTriggerNode(nodeProps.data.type),
                    [_ctx.$style.mockNode]: true
                  }
                }), {
                  toolbar: withCtx(({ data, outputs, inputs }) => [
                    canBeMocked(outputs, inputs) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass({
                        [_ctx.$style.pinButtonContainer]: true,
                        [_ctx.$style.pinButtonContainerPinned]: isMocked(data)
                      })
                    }, [
                      createVNode(unref(N8nButton), {
                        icon: "thumbtack",
                        block: "",
                        type: "secondary",
                        class: normalizeClass({ [_ctx.$style.customSecondary]: isMocked(data) }),
                        "data-test-id": "node-pin-button"
                      }, {
                        default: withCtx(() => [
                          isMocked(data) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(unref(locale).baseText("contextMenu.unpin")), 1)
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(unref(locale).baseText("contextMenu.pin")), 1)
                          ], 64))
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1040, ["class"])
              ]),
              _: 2
            }, 1040)
          ]),
          _: 1
        }, 8, ["id", "loading", "nodes", "connections"])
      ], 2));
    };
  }
});
const mockNode = "_mockNode_7xdc7_123";
const isTrigger = "_isTrigger_7xdc7_127";
const container$1 = "_container_7xdc7_131";
const pinButtonContainer = "_pinButtonContainer_7xdc7_138";
const pinButtonContainerPinned = "_pinButtonContainerPinned_7xdc7_149";
const customSecondary = "_customSecondary_7xdc7_153";
const spinner = "_spinner_7xdc7_162";
const noNodes = "_noNodes_7xdc7_169";
const style0$5 = {
  mockNode,
  isTrigger,
  container: container$1,
  pinButtonContainer,
  pinButtonContainerPinned,
  customSecondary,
  spinner,
  noNodes
};
const cssModules$5 = {
  "$style": style0$5
};
const NodesPinning = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$5]]);
const _hoisted_1$3 = { class: "mt-xs" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowSelector",
  props: {
    modelValue: { default: () => ({
      mode: "id",
      value: "",
      __rl: true
    }) },
    examplePinnedData: { default: () => ({}) },
    sampleWorkflowName: { default: void 0 }
  },
  emits: ["update:modelValue", "workflowCreated"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const locale = useI18n();
    const projectStore = useProjectsStore();
    const workflowsStore = useWorkflowsStore();
    const router = useRouter();
    const subworkflowName = computed(() => {
      if (props.sampleWorkflowName) {
        return locale.baseText("testDefinition.workflowInput.subworkflowName", {
          interpolate: { name: props.sampleWorkflowName }
        });
      }
      return locale.baseText("testDefinition.workflowInput.subworkflowName.default");
    });
    const sampleWorkflow = computed(() => {
      return {
        ...SAMPLE_EVALUATION_WORKFLOW,
        name: subworkflowName.value,
        pinData: props.examplePinnedData
      };
    });
    const selectorVisible = ref(false);
    const updateModelValue = (value) => emit("update:modelValue", value);
    const handleDefineEvaluation = async () => {
      const projectId = projectStore.currentProjectId;
      const workflowName = sampleWorkflow.value.name ?? "My Sub-Workflow";
      const sampleSubWorkflows = workflowsStore.allWorkflows.filter(
        (w) => w.name && new RegExp(workflowName).test(w.name)
      );
      const workflow = {
        ...sampleWorkflow.value,
        name: `${workflowName} ${sampleSubWorkflows.length + 1}`
      };
      if (projectId) {
        workflow.projectId = projectId;
      }
      const newWorkflow = await workflowsStore.createNewWorkflow(workflow);
      const { href } = router.resolve({ name: VIEWS.WORKFLOW, params: { name: newWorkflow.id } });
      updateModelValue({
        ...props.modelValue,
        value: newWorkflow.id,
        cachedResultName: workflow.name
      });
      window.open(href, "_blank");
    };
    return (_ctx, _cache) => {
      const _component_WorkflowSelectorParameterInput = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        !_ctx.modelValue.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(N8nButton), {
            type: "secondary",
            class: "mb-xs",
            onClick: handleDefineEvaluation
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.workflow.createNew")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(N8nLink), {
            class: "mb-xs",
            style: { "display": "block" },
            onClick: _cache[0] || (_cache[0] = ($event) => selectorVisible.value = !selectorVisible.value)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.workflow.createNew.or")), 1)
            ]),
            _: 1
          })
        ], 64)) : createCommentVNode("", true),
        _ctx.modelValue.value || selectorVisible.value ? (openBlock(), createBlock(_component_WorkflowSelectorParameterInput, {
          key: 1,
          parameter: {
            displayName: unref(locale).baseText("testDefinition.edit.workflowSelectorDisplayName"),
            name: "workflowId",
            type: "workflowSelector",
            default: ""
          },
          "model-value": _ctx.modelValue,
          "display-title": unref(locale).baseText("testDefinition.edit.workflowSelectorTitle"),
          "is-value-expression": false,
          "expression-edit-dialog-visible": false,
          path: "workflows",
          "allow-new": false,
          "sample-workflow": sampleWorkflow.value,
          "new-resource-label": unref(locale).baseText("testDefinition.workflow.createNew"),
          "onUpdate:modelValue": updateModelValue,
          onWorkflowCreated: _cache[1] || (_cache[1] = ($event) => emit("workflowCreated", $event))
        }, null, 8, ["parameter", "model-value", "display-title", "sample-workflow", "new-resource-label"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$2 = { style: { "display": "flex", "flex-direction": "column" } };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConfigSection",
  props: /* @__PURE__ */ mergeModels({
    tagsById: {},
    isLoading: { type: Boolean },
    examplePinnedData: {},
    sampleWorkflowName: {},
    hasRuns: { type: Boolean },
    getFieldIssues: { type: Function },
    startEditing: { type: Function },
    saveChanges: { type: Function },
    cancelEditing: { type: Function }
  }, {
    "tags": { required: true },
    "tagsModifiers": {},
    "evaluationWorkflow": { required: true },
    "evaluationWorkflowModifiers": {},
    "mockedNodes": {
      required: true
    },
    "mockedNodesModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["openPinningModal", "openExecutionsViewForTag", "renameTag", "evaluationWorkflowCreated"], ["update:tags", "update:evaluationWorkflow", "update:mockedNodes"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const locale = useI18n();
    const tags = useModel(__props, "tags");
    const renameTag = async () => {
      const { prompt } = useMessage();
      const result = await prompt(locale.baseText("testDefinition.edit.step.tag.placeholder"), {
        inputValue: props.tagsById[tags.value.value[0]]?.name,
        inputPlaceholder: locale.baseText("testDefinition.edit.step.tag.placeholder"),
        inputValidator: (value) => {
          if (!value) {
            return locale.baseText("testDefinition.edit.step.tag.validation.required");
          }
          if (value.length > 21) {
            return locale.baseText("testDefinition.edit.step.tag.validation.tooLong");
          }
          return true;
        }
      });
      if (result?.action === "confirm") {
        emit("renameTag", result.value);
      }
    };
    const evaluationWorkflow = useModel(
      __props,
      "evaluationWorkflow"
    );
    const mockedNodes = useModel(__props, "mockedNodes");
    const selectedTag = computed(() => props.tagsById[tags.value.value[0]] ?? {});
    function openExecutionsView() {
      emit("openExecutionsViewForTag");
    }
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_Modal = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.editForm)
        }, [
          !_ctx.hasRuns ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(unref(N8nText), {
              tag: "div",
              color: "text-dark",
              size: "large",
              class: "text-center"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.step.intro")), 1)
              ]),
              _: 1
            }),
            createVNode(BlockArrow, { class: "mt-5xs mb-5xs" })
          ], 64)) : createCommentVNode("", true),
          createVNode(EvaluationStep, {
            issues: _ctx.getFieldIssues("tags"),
            tooltip: unref(locale).baseText("testDefinition.edit.step.executions.tooltip"),
            "external-tooltip": !_ctx.hasRuns
          }, {
            title: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.step.executions", {
                adjustToNumber: selectedTag.value?.usageCount ?? 0
              })), 1)
            ]),
            cardContent: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tagInputTag)
              }, [
                createVNode(_component_i18n_t, { keypath: "testDefinition.edit.step.tag" }, {
                  tag: withCtx(() => [
                    createVNode(unref(Tag), {
                      text: selectedTag.value.name,
                      clickable: true,
                      onClick: renameTag
                    }, {
                      tag: withCtx(() => [
                        createTextVNode(toDisplayString(selectedTag.value.name) + " ", 1),
                        createVNode(_component_font_awesome_icon, {
                          icon: "pen",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  _: 1
                })
              ], 2),
              createVNode(unref(N8nButton), {
                label: "Select executions",
                type: "tertiary",
                size: "small",
                onClick: openExecutionsView
              })
            ]),
            _: 1
          }, 8, ["issues", "tooltip", "external-tooltip"]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.nestedSteps)
          }, [
            createVNode(BlockArrow, { class: "mt-5xs mb-5xs" }),
            createBaseVNode("div", _hoisted_1$2, [
              createVNode(BlockArrow, { class: "mt-5xs mb-5xs ml-auto mr-2xl" }),
              createVNode(EvaluationStep, {
                issues: _ctx.getFieldIssues("mockedNodes"),
                tooltip: unref(locale).baseText("testDefinition.edit.step.nodes.tooltip"),
                "external-tooltip": !_ctx.hasRuns
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.step.mockedNodes", {
                    adjustToNumber: mockedNodes.value?.length ?? 0
                  })) + " ", 1),
                  createVNode(unref(N8nText), null, {
                    default: withCtx(() => [
                      createTextVNode("(" + toDisplayString(unref(locale).baseText("generic.optional")) + ")", 1)
                    ]),
                    _: 1
                  })
                ]),
                cardContent: withCtx(() => [
                  createVNode(unref(N8nButton), {
                    size: "small",
                    "data-test-id": "select-nodes-button",
                    label: unref(locale).baseText("testDefinition.edit.selectNodes"),
                    type: "tertiary",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("openPinningModal"))
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["issues", "tooltip", "external-tooltip"]),
              createVNode(BlockArrow, { class: "mt-5xs mb-5xs ml-auto mr-2xl" }),
              createVNode(EvaluationStep, {
                title: unref(locale).baseText("testDefinition.edit.step.reRunExecutions"),
                tooltip: unref(locale).baseText("testDefinition.edit.step.reRunExecutions.tooltip"),
                "external-tooltip": !_ctx.hasRuns
              }, null, 8, ["title", "tooltip", "external-tooltip"]),
              createVNode(BlockArrow, { class: "mt-5xs mb-5xs ml-auto mr-2xl" })
            ])
          ], 2),
          createVNode(EvaluationStep, {
            title: unref(locale).baseText("testDefinition.edit.step.compareExecutions"),
            description: unref(locale).baseText("testDefinition.edit.workflowSelectorLabel"),
            issues: _ctx.getFieldIssues("evaluationWorkflow"),
            tooltip: unref(locale).baseText("testDefinition.edit.step.compareExecutions.tooltip"),
            "external-tooltip": !_ctx.hasRuns
          }, {
            cardContent: withCtx(() => [
              createVNode(_sfc_main$5, {
                modelValue: evaluationWorkflow.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => evaluationWorkflow.value = $event),
                "example-pinned-data": _ctx.examplePinnedData,
                class: normalizeClass({ "has-issues": _ctx.getFieldIssues("evaluationWorkflow").length > 0 }),
                "sample-workflow-name": _ctx.sampleWorkflowName,
                onWorkflowCreated: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("evaluationWorkflowCreated", $event))
              }, null, 8, ["modelValue", "example-pinned-data", "class", "sample-workflow-name"])
            ]),
            _: 1
          }, 8, ["title", "description", "issues", "tooltip", "external-tooltip"])
        ], 2),
        createVNode(_component_Modal, {
          width: "calc(100% - (48px * 2))",
          height: "calc(100% - (48px * 2))",
          "custom-class": _ctx.$style.pinnigModal,
          name: unref(NODE_PINNING_MODAL_KEY)
        }, {
          header: withCtx(() => [
            createVNode(unref(N8nHeading), {
              tag: "h3",
              size: "xlarge",
              color: "text-dark",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.selectNodes")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.modal.description")), 1)
              ]),
              _: 1
            })
          ]),
          content: withCtx(() => [
            createVNode(NodesPinning, {
              modelValue: mockedNodes.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => mockedNodes.value = $event),
              "data-test-id": "nodes-pinning-modal"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["custom-class", "name"])
      ]);
    };
  }
});
const pinnigModal = "_pinnigModal_1qbos_123";
const nestedSteps = "_nestedSteps_1qbos_128";
const tagInputTag = "_tagInputTag_1qbos_133";
const style0$4 = {
  pinnigModal,
  nestedSteps,
  tagInputTag
};
const cssModules$4 = {
  "$style": style0$4
};
const ConfigSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
function useMetricsChart() {
  const colors = {
    primary: useCssVar("--color-primary", document.body).value,
    textBase: useCssVar("--color-text-base", document.body).value,
    backgroundXLight: useCssVar("--color-background-xlight", document.body).value,
    foregroundLight: useCssVar("--color-foreground-light", document.body).value,
    foregroundBase: useCssVar("--color-foreground-base", document.body).value,
    foregroundDark: useCssVar("--color-foreground-dark", document.body).value
  };
  function generateChartData(runs2, metric) {
    const data = {
      datasets: [
        {
          data: runs2,
          parsing: {
            xAxisKey: "id",
            yAxisKey: `metrics.${metric}`
          },
          borderColor: colors.primary,
          backgroundColor: colors.backgroundXLight,
          borderWidth: 1,
          pointRadius: 2,
          pointHoverRadius: 4,
          pointBackgroundColor: colors.backgroundXLight,
          pointHoverBackgroundColor: colors.backgroundXLight
        }
      ]
    };
    return data;
  }
  function generateChartOptions({
    metric,
    data
  }) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      devicePixelRatio: 2,
      interaction: {
        mode: "index",
        intersect: false
      },
      scales: {
        y: {
          border: {
            display: false
          },
          grid: {
            color: colors.foregroundBase
          },
          ticks: {
            padding: 8,
            color: colors.textBase
          }
        },
        x: {
          border: {
            display: false
          },
          grid: {
            display: false
          },
          ticks: {
            color: colors.textBase,
            // eslint-disable-next-line id-denylist
            callback(_tickValue, index) {
              return `#${data[index].index}`;
            }
          }
        }
      },
      plugins: {
        tooltip: {
          backgroundColor: colors.backgroundXLight,
          titleColor: colors.textBase,
          titleFont: {
            weight: "600"
          },
          bodyColor: colors.textBase,
          bodySpacing: 4,
          padding: 12,
          borderColor: colors.foregroundBase,
          borderWidth: 1,
          displayColors: true,
          callbacks: {
            title: (tooltipItems) => {
              return dateFormat(tooltipItems[0].raw.runAt, "yyyy-mm-dd HH:MM");
            },
            label: (context) => `${metric}: ${context.parsed.y.toFixed(2)}`,
            labelColor() {
              return {
                borderColor: "rgba(29, 21, 21, 0)",
                backgroundColor: colors.primary,
                borderWidth: 0,
                borderRadius: 5
              };
            }
          }
        },
        legend: {
          display: false
        }
      }
    };
  }
  return {
    generateChartData,
    generateChartOptions
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MetricsChart",
  props: {
    selectedMetric: {},
    runs: {}
  },
  emits: ["update:selectedMetric"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const metricsChart = useMetricsChart();
    const availableMetrics = computed(() => {
      return props.runs.reduce((acc, run) => {
        const metricKeys = Object.keys(run.metrics ?? {});
        return [.../* @__PURE__ */ new Set([...acc, ...metricKeys])];
      }, []);
    });
    const filteredRuns = computed(
      () => props.runs.filter((run) => run.metrics?.[props.selectedMetric] !== void 0)
    );
    const chartData = computed(
      () => metricsChart.generateChartData(filteredRuns.value, props.selectedMetric)
    );
    const chartOptions = computed(
      () => metricsChart.generateChartOptions({
        metric: props.selectedMetric,
        data: filteredRuns.value
      })
    );
    watchEffect(() => {
      if (props.runs.length > 0 && !props.selectedMetric) {
        emit("update:selectedMetric", availableMetrics.value[0]);
      }
    });
    return (_ctx, _cache) => {
      const _component_N8nOption = resolveComponent("N8nOption");
      const _component_N8nSelect = resolveComponent("N8nSelect");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.metricsChartContainer)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.chartHeader)
        }, [
          createVNode(_component_N8nSelect, {
            "model-value": _ctx.selectedMetric,
            class: normalizeClass(_ctx.$style.metricSelect),
            placeholder: "Select metric",
            size: "small",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:selectedMetric", $event))
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(availableMetrics.value, (metric) => {
                return openBlock(), createBlock(_component_N8nOption, {
                  key: metric,
                  label: metric,
                  value: metric
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["model-value", "class"])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.chartWrapper)
        }, [
          (openBlock(), createBlock(unref(Line), {
            key: _ctx.selectedMetric,
            data: chartData.value,
            options: chartOptions.value,
            class: normalizeClass(_ctx.$style.metricsChart)
          }, null, 8, ["data", "options", "class"]))
        ], 2)
      ], 2);
    };
  }
});
const metricsChartContainer = "_metricsChartContainer_1xhz2_123";
const chartHeader = "_chartHeader_1xhz2_128";
const chartTitle = "_chartTitle_1xhz2_131";
const metricSelect = "_metricSelect_1xhz2_136";
const chartWrapper = "_chartWrapper_1xhz2_139";
const style0$3 = {
  metricsChartContainer,
  chartHeader,
  chartTitle,
  metricSelect,
  chartWrapper
};
const cssModules$3 = {
  "$style": style0$3
};
const MetricsChart = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$1 = { style: { "display": "inline-flex", "gap": "8px", "text-transform": "capitalize", "align-items": "center" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TestRunsTable",
  props: {
    runs: {},
    columns: {}
  },
  emits: ["rowClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const statusDictionary = {
      new: {
        icon: "status-new",
        color: "foreground-xdark"
      },
      running: {
        icon: "spinner",
        color: "secondary"
      },
      completed: {
        icon: "status-completed",
        color: "success"
      },
      error: {
        icon: "status-error",
        color: "danger"
      },
      cancelled: {
        icon: "status-canceled",
        color: "foreground-xdark"
      },
      warning: {
        icon: "status-warning",
        color: "warning"
      },
      success: {
        icon: "status-completed",
        color: "success"
      }
    };
    const locale = useI18n();
    const runSummaries = computed(() => {
      return props.runs.map(({ status, finalResult, ...run }) => {
        if (status === "completed" && finalResult) {
          return { ...run, status: finalResult };
        }
        return { ...run, status };
      });
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = resolveComponent("N8nHeading");
      const _component_AnimatedSpinner = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_N8nHeading, {
          size: "large",
          bold: true,
          class: normalizeClass(_ctx.$style.runsTableHeading),
          color: "text-base"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.edit.pastRuns.total", { adjustToNumber: _ctx.runs.length })) + " ", 1),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(" (" + toDisplayString(_ctx.runs.length) + ") ", 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(TestTableBase, {
          data: runSummaries.value,
          columns: _ctx.columns,
          "default-sort": { prop: "runAt", order: "descending" },
          onRowClick: _cache[0] || (_cache[0] = (row) => emit("rowClick", row))
        }, {
          id: withCtx(({ row }) => [
            createTextVNode("#" + toDisplayString(row.index), 1)
          ]),
          status: withCtx(({ row }) => [
            createBaseVNode("div", _hoisted_1$1, [
              row.status === "running" ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                color: "secondary",
                class: "mr-2xs"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AnimatedSpinner)
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nIcon), {
                key: 1,
                icon: statusDictionary[row.status].icon,
                color: statusDictionary[row.status].color,
                class: "mr-2xs"
              }, null, 8, ["icon", "color"])),
              row.status === "error" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createTextVNode(toDisplayString(row.failedCases) + " " + toDisplayString(row.status), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createTextVNode(toDisplayString(row.status), 1)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["data", "columns"])
      ], 2);
    };
  }
});
const container = "_container_1rjad_123";
const style0$2 = {
  container
};
const cssModules$2 = {
  "$style": style0$2
};
const TestRunsTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RunsSection",
  props: /* @__PURE__ */ mergeModels({
    runs: {},
    testId: {}
  }, {
    "selectedMetric": { required: true },
    "selectedMetricModifiers": {}
  }),
  emits: ["update:selectedMetric"],
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const router = useRouter();
    const selectedMetric = useModel(__props, "selectedMetric");
    const metrics = computed(() => {
      const metricKeys = props.runs.reduce((acc, run) => {
        Object.keys(run.metrics ?? {}).forEach((metric) => acc.add(metric));
        return acc;
      }, /* @__PURE__ */ new Set());
      return [...metricKeys];
    });
    const metricColumns = computed(
      () => metrics.value.map((metric) => ({
        prop: `metrics.${metric}`,
        label: metric,
        sortable: true,
        showHeaderTooltip: true,
        sortMethod: (a, b) => (a.metrics?.[metric] ?? 0) - (b.metrics?.[metric] ?? 0),
        formatter: (row) => row.metrics?.[metric] !== void 0 ? (row.metrics?.[metric]).toFixed(2) : ""
      }))
    );
    const columns = computed(() => [
      {
        prop: "id",
        label: locale.baseText("testDefinition.listRuns.runNumber"),
        showOverflowTooltip: true
      },
      {
        prop: "runAt",
        label: "Run at",
        sortable: true,
        showOverflowTooltip: true,
        formatter: (row) => {
          const { date, time } = convertToDisplayDate(row.runAt);
          return [date, time].join(", ");
        },
        sortMethod: (a, b) => new Date(a.runAt ?? a.createdAt).getTime() - new Date(b.runAt ?? b.createdAt).getTime()
      },
      {
        prop: "status",
        label: locale.baseText("testDefinition.listRuns.status"),
        sortable: true
      },
      ...metricColumns.value
    ]);
    const handleRowClick = (row) => {
      void router.push({
        name: VIEWS.TEST_DEFINITION_RUNS_DETAIL,
        params: { testId: row.testDefinitionId, runId: row.id }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.runs)
      }, [
        createVNode(MetricsChart, {
          selectedMetric: selectedMetric.value,
          "onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
          runs: _ctx.runs
        }, null, 8, ["selectedMetric", "runs"]),
        createVNode(TestRunsTable, {
          class: normalizeClass(_ctx.$style.runsTable),
          runs: _ctx.runs,
          columns: columns.value,
          selectable: true,
          "data-test-id": "past-runs-table",
          onRowClick: handleRowClick
        }, null, 8, ["class", "runs", "columns"])
      ], 2);
    };
  }
});
const runs = "_runs_37xaf_123";
const style0$1 = {
  runs
};
const cssModules$1 = {
  "$style": style0$1
};
const RunsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "gap": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestDefinitionEditView",
  props: {
    testId: {},
    name: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const locale = useI18n();
    const { debounce } = useDebounce();
    const toast = useToast();
    const testDefinitionStore = useTestDefinitionStore();
    const tagsStore = useAnnotationTagsStore();
    const uiStore = useUIStore();
    const workflowStore = useWorkflowsStore();
    const telemetry = useTelemetry();
    const visibility = useDocumentVisibility();
    watch(visibility, async () => {
      if (visibility.value !== "visible") return;
      await tagsStore.fetchAll({ force: true, withUsageCount: true });
      await getExamplePinnedDataForTags();
      testDefinitionStore.updateRunFieldIssues(props.testId);
    });
    const { state, isSaving, cancelEditing, loadTestData, updateTest, startEditing, saveChanges } = useTestDefinitionForm();
    const isLoading = computed(() => tagsStore.isLoading);
    const tagsById = computed(() => tagsStore.tagsById);
    const currentWorkflowId = computed(() => props.name);
    const workflowName = computed(() => workflowStore.workflow.name);
    const hasRuns = computed(() => runs2.value.length > 0);
    const fieldsIssues = computed(() => testDefinitionStore.getFieldIssues(props.testId) ?? []);
    const showConfig = ref(true);
    const selectedMetric = ref("");
    const examplePinnedData = ref({});
    void loadTestData(props.testId, props.name);
    const handleUpdateTest = async () => {
      try {
        await updateTest(props.testId);
      } catch (e) {
        toast.showError(e, locale.baseText("testDefinition.edit.testSaveFailed"));
      }
    };
    const handleUpdateTestDebounced = debounce(handleUpdateTest, { debounceTime: 400, trailing: true });
    function getFieldIssues(key) {
      return fieldsIssues.value.filter((issue) => issue.field === key);
    }
    async function openPinningModal() {
      uiStore.openModal(NODE_PINNING_MODAL_KEY);
    }
    async function runTest() {
      await testDefinitionStore.startTestRun(props.testId);
      await testDefinitionStore.fetchTestRuns(props.testId);
    }
    async function openExecutionsViewForTag() {
      const executionsRoute = router.resolve({
        name: VIEWS.WORKFLOW_EXECUTIONS,
        params: { name: currentWorkflowId.value },
        query: { tag: state.value.tags.value[0], testId: props.testId }
      });
      window.open(executionsRoute.href, "_blank");
    }
    const runs2 = computed(() => {
      const testRuns = Object.values(testDefinitionStore.testRunsById ?? {}).filter(
        ({ testDefinitionId }) => testDefinitionId === props.testId
      );
      return orderBy(testRuns, (record) => new Date(record.runAt), ["asc"]).map(
        (record, index) => Object.assign(record, { index: index + 1 })
      );
    });
    const isRunning = computed(() => runs2.value.some((run) => run.status === "running"));
    const isRunTestEnabled = computed(() => fieldsIssues.value.length === 0 && !isRunning.value);
    async function renameTag(newName) {
      await tagsStore.rename({ id: state.value.tags.value[0], name: newName });
    }
    async function getExamplePinnedDataForTags() {
      const exampleInput = await testDefinitionStore.fetchExampleEvaluationInput(
        props.testId,
        state.value.tags.value[0]
      );
      if (exampleInput !== null) {
        examplePinnedData.value = {
          "When called by a test run": [
            {
              json: exampleInput
            }
          ]
        };
      }
    }
    watch(() => state.value.tags, getExamplePinnedDataForTags);
    const updateName = (value) => {
      state.value.name.value = value;
      void handleUpdateTestDebounced();
    };
    const updateDescription = (value) => {
      state.value.description.value = value;
      void handleUpdateTestDebounced();
    };
    function onEvaluationWorkflowCreated(workflowId) {
      telemetry.track("User created evaluation workflow from test", {
        test_id: props.testId,
        subworkflow_id: workflowId
      });
    }
    return (_ctx, _cache) => {
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return !isLoading.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([_ctx.$style.container])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(_sfc_main$a), {
              icon: "arrow-left",
              type: "tertiary",
              text: "",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push({ name: unref(VIEWS).TEST_DEFINITION, params: { testId: _ctx.testId } }))
            }),
            createVNode(InlineNameEdit, {
              "model-value": unref(state).name.value,
              "max-height": "none",
              type: "Test name",
              "onUpdate:modelValue": updateName
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nText), {
                  bold: "",
                  size: "xlarge",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(state).name.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model-value"])
          ]),
          createBaseVNode("div", _hoisted_2, [
            hasRuns.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              color: "text-light",
              size: "small"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(isSaving) ? unref(locale).baseText("testDefinition.edit.saving") : unref(locale).baseText("testDefinition.edit.saved")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_N8nTooltip, {
              disabled: isRunTestEnabled.value,
              placement: "left"
            }, {
              content: withCtx(() => [
                fieldsIssues.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", null, toDisplayString(unref(locale).baseText("testDefinition.completeConfig")), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(fieldsIssues.value, (issue) => {
                    return openBlock(), createElementBlock("div", {
                      key: issue.field
                    }, "- " + toDisplayString(issue.message), 1);
                  }), 128))
                ], 64)) : createCommentVNode("", true),
                isRunning.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.testIsRunning")), 1)
                ], 64)) : createCommentVNode("", true)
              ]),
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  disabled: !isRunTestEnabled.value,
                  class: normalizeClass(_ctx.$style.runTestButton),
                  size: "small",
                  "data-test-id": "run-test-button",
                  label: unref(locale).baseText("testDefinition.runTest"),
                  type: "primary",
                  onClick: runTest
                }, null, 8, ["disabled", "class", "label"])
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.wrapper)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.description)
          }, [
            createVNode(InlineNameEdit, {
              "model-value": unref(state).description.value,
              placeholder: "Add a description...",
              required: false,
              autosize: { minRows: 1, maxRows: 3 },
              "input-type": "textarea",
              maxlength: 260,
              "max-height": "none",
              type: "Test description",
              "onUpdate:modelValue": updateDescription
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nText), {
                  size: "medium",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(state).description.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model-value"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.content]: true, [_ctx.$style.contentWithRuns]: hasRuns.value })
          }, [
            hasRuns.value ? (openBlock(), createBlock(RunsSection, {
              key: 0,
              selectedMetric: selectedMetric.value,
              "onUpdate:selectedMetric": _cache[1] || (_cache[1] = ($event) => selectedMetric.value = $event),
              class: normalizeClass(_ctx.$style.runs),
              runs: runs2.value,
              "test-id": _ctx.testId
            }, null, 8, ["selectedMetric", "class", "runs", "test-id"])) : createCommentVNode("", true),
            showConfig.value ? (openBlock(), createBlock(ConfigSection, {
              key: 1,
              tags: unref(state).tags,
              "onUpdate:tags": _cache[2] || (_cache[2] = ($event) => unref(state).tags = $event),
              evaluationWorkflow: unref(state).evaluationWorkflow,
              "onUpdate:evaluationWorkflow": [
                _cache[3] || (_cache[3] = ($event) => unref(state).evaluationWorkflow = $event),
                unref(handleUpdateTestDebounced)
              ],
              mockedNodes: unref(state).mockedNodes,
              "onUpdate:mockedNodes": [
                _cache[4] || (_cache[4] = ($event) => unref(state).mockedNodes = $event),
                unref(handleUpdateTestDebounced)
              ],
              class: normalizeClass(_ctx.$style.config),
              "cancel-editing": unref(cancelEditing),
              "tags-by-id": tagsById.value,
              "is-loading": isLoading.value,
              "get-field-issues": getFieldIssues,
              "start-editing": unref(startEditing),
              "save-changes": unref(saveChanges),
              "has-runs": hasRuns.value,
              "example-pinned-data": examplePinnedData.value,
              "sample-workflow-name": workflowName.value,
              onRenameTag: renameTag,
              onOpenPinningModal: openPinningModal,
              onOpenExecutionsViewForTag: openExecutionsViewForTag,
              onEvaluationWorkflowCreated: _cache[5] || (_cache[5] = ($event) => onEvaluationWorkflowCreated($event))
            }, null, 8, ["tags", "evaluationWorkflow", "mockedNodes", "class", "cancel-editing", "tags-by-id", "is-loading", "start-editing", "save-changes", "has-runs", "example-pinned-data", "sample-workflow-name", "onUpdate:evaluationWorkflow", "onUpdate:mockedNodes"])) : createCommentVNode("", true)
          ], 2)
        ], 2)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const content = "_content_1o8sl_123";
const config = "_config_1o8sl_130";
const contentWithRuns = "_contentWithRuns_1o8sl_133";
const header = "_header_1o8sl_137";
const wrapper = "_wrapper_1o8sl_151";
const description = "_description_1o8sl_156";
const arrowBack = "_arrowBack_1o8sl_161";
const style0 = {
  content,
  config,
  contentWithRuns,
  header,
  wrapper,
  description,
  arrowBack
};
const cssModules = {
  "$style": style0
};
const TestDefinitionEditView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TestDefinitionEditView as default
};
