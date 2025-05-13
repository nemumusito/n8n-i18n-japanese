import { L as LogsPanel } from "./LogsPanel-COljWuh-.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-LGUZBtYa.js";
import "./useClearExecutionButtonVisible-TjlczoTE.js";
import "./useCanvasOperations-D9yzH8Pf.js";
import "./RunData-Bb8R6DnX.js";
import "./FileSaver.min-ZaABVw10.js";
import "./useExecutionHelpers-BJK3JcAo.js";
import "./dateFormatter-Dev12ulQ.js";
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
