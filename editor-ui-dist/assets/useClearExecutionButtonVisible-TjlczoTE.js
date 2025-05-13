import { R as useRoute, a0 as useSourceControlStore, Q as useWorkflowsStore, q as computed, b as useRouter, bz as useNodeTypesStore, bX as START_NODE_TYPE } from "./index-LGUZBtYa.js";
import { b as useCanvasOperations } from "./useCanvasOperations-D9yzH8Pf.js";
function useClearExecutionButtonVisible() {
  const route = useRoute();
  const sourceControlStore = useSourceControlStore();
  const workflowsStore = useWorkflowsStore();
  const workflowExecutionData = computed(() => workflowsStore.workflowExecutionData);
  const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
  const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
  const router = useRouter();
  const { editableWorkflow } = useCanvasOperations({ router });
  const nodeTypesStore = useNodeTypesStore();
  const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
  const allTriggerNodesDisabled = computed(
    () => editableWorkflow.value.nodes.filter((node) => node.type === START_NODE_TYPE || nodeTypesStore.isTriggerNode(node.type)).every((node) => node.disabled)
  );
  return computed(
    () => !isReadOnlyRoute.value && !isReadOnlyEnvironment.value && !isWorkflowRunning.value && !allTriggerNodesDisabled.value && workflowExecutionData.value
  );
}
export {
  useClearExecutionButtonVisible as u
};
