import { L as LogsPanel } from "./LogsPanel-CcdFAdbD.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-2X4RXSdq.js";
import "./useClearExecutionButtonVisible-DhjDUWwp.js";
import "./useCanvasOperations-DwvVHEsZ.js";
import "./RunData-__nE0Zjf.js";
import "./FileSaver.min-Cu8e9kEJ.js";
import "./useExecutionHelpers-D-fGmVHp.js";
import "./dateFormatter-ClUs7OAW.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const { isNewLogsEnabled } = useSettingsStore();
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return unref(isNewLogsEnabled) && hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
