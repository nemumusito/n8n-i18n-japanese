import { gU as useTestDefinitionStore, r as ref, q as computed } from "./index-2X4RXSdq.js";
function useTestDefinitionForm() {
  const evaluationsStore = useTestDefinitionStore();
  const state = ref({
    name: {
      value: `My Test ${evaluationsStore.allTestDefinitions.length + 1}`,
      tempValue: "",
      isEditing: false
    },
    tags: {
      value: [],
      tempValue: [],
      isEditing: false
    },
    description: {
      value: "",
      tempValue: "",
      isEditing: false
    },
    evaluationWorkflow: {
      mode: "list",
      value: "",
      __rl: true
    },
    mockedNodes: []
  });
  const isSaving = ref(false);
  const fields = ref({});
  const editableFields = computed(() => ({
    name: state.value.name,
    tags: state.value.tags,
    description: state.value.description
  }));
  const loadTestData = async (testId, workflowId) => {
    try {
      await evaluationsStore.fetchAll({ force: true, workflowId });
      const testDefinition = evaluationsStore.testDefinitionsById[testId];
      if (testDefinition) {
        state.value.description = {
          value: testDefinition.description ?? "",
          isEditing: false,
          tempValue: ""
        };
        state.value.name = {
          value: testDefinition.name ?? "",
          isEditing: false,
          tempValue: ""
        };
        state.value.tags = {
          isEditing: false,
          value: testDefinition.annotationTagId ? [testDefinition.annotationTagId] : [],
          tempValue: []
        };
        state.value.evaluationWorkflow = {
          mode: "list",
          value: testDefinition.evaluationWorkflowId ?? "",
          __rl: true
        };
        state.value.mockedNodes = testDefinition.mockedNodes ?? [];
        evaluationsStore.updateRunFieldIssues(testDefinition.id);
      }
    } catch (error) {
      console.error("Failed to load test data", error);
    }
  };
  const createTest = async (workflowId) => {
    if (isSaving.value) return;
    isSaving.value = true;
    try {
      const params = {
        name: state.value.name.value,
        workflowId,
        description: state.value.description.value
      };
      return await evaluationsStore.create(params);
    } finally {
      isSaving.value = false;
    }
  };
  const updateTest = async (testId) => {
    if (isSaving.value) return;
    isSaving.value = true;
    try {
      if (!testId) {
        throw new Error("Test ID is required for updating a test");
      }
      const params = {
        name: state.value.name.value,
        description: state.value.description.value
      };
      if (state.value.evaluationWorkflow.value) {
        params.evaluationWorkflowId = state.value.evaluationWorkflow.value.toString();
      }
      const annotationTagId = state.value.tags.value[0];
      if (annotationTagId) {
        params.annotationTagId = annotationTagId;
      }
      params.mockedNodes = state.value.mockedNodes;
      const response = await evaluationsStore.update({ ...params, id: testId });
      return response;
    } finally {
      isSaving.value = false;
    }
  };
  function startEditing(field) {
    const fieldObj = editableFields.value[field];
    if (fieldObj.isEditing) {
      return;
    }
    if (Array.isArray(fieldObj.value)) {
      fieldObj.tempValue = [...fieldObj.value];
    } else {
      fieldObj.tempValue = fieldObj.value;
    }
    fieldObj.isEditing = true;
  }
  function saveChanges(field) {
    const fieldObj = editableFields.value[field];
    fieldObj.value = Array.isArray(fieldObj.tempValue) ? [...fieldObj.tempValue] : fieldObj.tempValue;
    fieldObj.isEditing = false;
  }
  function cancelEditing(field) {
    const fieldObj = editableFields.value[field];
    if (Array.isArray(fieldObj.value)) {
      fieldObj.tempValue = [...fieldObj.value];
    } else {
      fieldObj.tempValue = fieldObj.value;
    }
    fieldObj.isEditing = false;
  }
  function handleKeydown(event, field) {
    if (event.key === "Escape") {
      cancelEditing(field);
    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      saveChanges(field);
    }
  }
  return {
    state,
    fields,
    isSaving: computed(() => isSaving.value),
    loadTestData,
    createTest,
    updateTest,
    startEditing,
    saveChanges,
    cancelEditing,
    handleKeydown
  };
}
export {
  useTestDefinitionForm as u
};
