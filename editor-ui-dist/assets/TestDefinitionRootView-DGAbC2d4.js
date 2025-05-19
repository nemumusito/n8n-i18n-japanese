import { d as defineComponent, b as useRouter, a5 as useWorkflowHelpers, Q as useWorkflowsStore, dj as useAsyncState, h as resolveComponent, i as createElementBlock, g as openBlock, e as createBlock, f as createCommentVNode, m as unref, n as normalizeClass, _ as _export_sfc } from "./index-2X4RXSdq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestDefinitionRootView",
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const workflowHelpers = useWorkflowHelpers({ router });
    const workflowStore = useWorkflowsStore();
    const { isReady } = useAsyncState(async () => {
      const workflowId = props.name;
      const isAlreadyInitialized = workflowStore.workflow.id === workflowId;
      if (isAlreadyInitialized) return;
      const workflow = await workflowStore.fetchWorkflow(workflowId);
      workflowHelpers.initState(workflow);
    }, void 0);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.evaluationsView)
      }, [
        unref(isReady) ? (openBlock(), createBlock(_component_router_view, { key: 0 })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const evaluationsView = "_evaluationsView_12a5u_123";
const style0 = {
  evaluationsView
};
const cssModules = {
  "$style": style0
};
const TestDefinitionRootView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TestDefinitionRootView as default
};
