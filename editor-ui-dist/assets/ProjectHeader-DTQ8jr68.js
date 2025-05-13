import { d as defineComponent, R as useRoute, r as ref, q as computed, V as VIEWS, c as useI18n, X as watch, h as resolveComponent, e as createBlock, g as openBlock, i as createElementBlock, n as normalizeClass, x as renderSlot, j as createVNode, m as unref, gJ as N8nActionToggle, w as withCtx, aT as _sfc_main$3, _ as _export_sfc, bQ as reactive, b as useRouter, a1 as useProjectsStore, a0 as useSourceControlStore, p as useSettingsStore, ab as ProjectTypes, a7 as getResourcePermissions, k as createBaseVNode, f as createCommentVNode, dA as ProjectIcon, l as createTextVNode, t as toDisplayString, bg as N8nButton, b7 as mergeProps, aR as N8nTooltip } from "./index-LGUZBtYa.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectTabs",
  props: {
    showSettings: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const route = useRoute();
    const selectedTab = ref("");
    const options = computed(() => {
      const projectId = route?.params?.projectId;
      const to = projectId ? {
        workflows: {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId }
        },
        credentials: {
          name: VIEWS.PROJECTS_CREDENTIALS,
          params: { projectId }
        },
        executions: {
          name: VIEWS.PROJECTS_EXECUTIONS,
          params: { projectId }
        }
      } : {
        workflows: {
          name: VIEWS.WORKFLOWS
        },
        credentials: {
          name: VIEWS.CREDENTIALS
        },
        executions: {
          name: VIEWS.EXECUTIONS
        }
      };
      const tabs = [
        {
          label: locale.baseText("mainSidebar.workflows"),
          value: to.workflows.name,
          to: to.workflows
        },
        {
          label: locale.baseText("mainSidebar.credentials"),
          value: to.credentials.name,
          to: to.credentials
        },
        {
          label: locale.baseText("mainSidebar.executions"),
          value: to.executions.name,
          to: to.executions
        }
      ];
      if (props.showSettings) {
        tabs.push({
          label: locale.baseText("projects.settings"),
          value: VIEWS.PROJECT_SETTINGS,
          to: { name: VIEWS.PROJECT_SETTINGS, params: { projectId } }
        });
      }
      return tabs;
    });
    watch(
      () => route?.name,
      () => {
        selectedTab.value = route?.name;
        selectedTab.value = route.name === VIEWS.PROJECTS_FOLDERS ? VIEWS.PROJECTS_WORKFLOWS : route.name;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_N8nTabs = resolveComponent("N8nTabs");
      return openBlock(), createBlock(_component_N8nTabs, {
        modelValue: selectedTab.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event),
        options: options.value,
        "data-test-id": "project-tabs"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCreateResource",
  props: {
    actions: {},
    disabled: { type: Boolean },
    type: {}
  },
  emits: ["action"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const actionToggleRef = ref(null);
    __expose({
      openActionToggle: (isOpen) => actionToggleRef.value?.openActionToggle(isOpen)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.buttonGroup])
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(unref(N8nActionToggle), {
          ref_key: "actionToggleRef",
          ref: actionToggleRef,
          "data-test-id": "add-resource",
          actions: _ctx.actions,
          placement: "bottom-end",
          teleported: false,
          onAction: _cache[0] || (_cache[0] = ($event) => emit("action", $event))
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              disabled: _ctx.disabled,
              class: normalizeClass([_ctx.$style.buttonGroupDropdown]),
              icon: "angle-down",
              type: _ctx.type ?? "primary"
            }, null, 8, ["disabled", "class", "type"])
          ]),
          _: 1
        }, 8, ["actions"])
      ], 2);
    };
  }
});
const buttonGroup = "_buttonGroup_aulto_123";
const buttonGroupDropdown = "_buttonGroupDropdown_aulto_137";
const style0$1 = {
  buttonGroup,
  buttonGroupDropdown
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectCreateResource = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const useOverview = () => {
  const route = useRoute();
  const isOverviewSubPage = computed(
    () => route.name === VIEWS.WORKFLOWS || route.name === VIEWS.HOMEPAGE || route.name === VIEWS.CREDENTIALS || route.name === VIEWS.EXECUTIONS || route.name === VIEWS.FOLDERS
  );
  return reactive({
    isOverviewSubPage
  });
};
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectHeader",
  emits: ["createFolder"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const settingsStore = useSettingsStore();
    const overview = useOverview();
    const emit = __emit;
    const headerIcon = computed(() => {
      if (projectsStore.currentProject?.type === ProjectTypes.Personal) {
        return { type: "icon", value: "user" };
      } else if (projectsStore.currentProject?.name) {
        return projectsStore.currentProject.icon ?? { type: "icon", value: "layer-group" };
      } else {
        return { type: "icon", value: "home" };
      }
    });
    const projectName = computed(() => {
      if (!projectsStore.currentProject) {
        return i18n.baseText("projects.menu.overview");
      } else if (projectsStore.currentProject.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      } else {
        return projectsStore.currentProject.name;
      }
    });
    const projectPermissions = computed(
      () => getResourcePermissions(projectsStore.currentProject?.scopes).project
    );
    const showSettings = computed(
      () => !!route?.params?.projectId && !!projectPermissions.value.update && projectsStore.currentProject?.type === ProjectTypes.Team
    );
    const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
    const showFolders = computed(() => {
      return settingsStore.isFoldersFeatureEnabled && [VIEWS.PROJECTS_WORKFLOWS, VIEWS.PROJECTS_FOLDERS].includes(route.name);
    });
    const ACTION_TYPES = {
      WORKFLOW: "workflow",
      CREDENTIAL: "credential",
      FOLDER: "folder"
    };
    const createWorkflowButton = computed(() => ({
      value: ACTION_TYPES.WORKFLOW,
      label: i18n.baseText("projects.header.create.workflow"),
      icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
      size: "mini",
      disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
    }));
    const menu = computed(() => {
      const items = [
        {
          value: ACTION_TYPES.CREDENTIAL,
          label: i18n.baseText("projects.header.create.credential"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
        }
      ];
      if (showFolders.value) {
        items.push({
          value: ACTION_TYPES.FOLDER,
          label: i18n.baseText("projects.header.create.folder"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).folder.create
        });
      }
      return items;
    });
    const actions2 = {
      [ACTION_TYPES.WORKFLOW]: (projectId) => {
        void router.push({
          name: VIEWS.NEW_WORKFLOW,
          query: {
            projectId,
            parentFolderId: route.params.folderId
          }
        });
      },
      [ACTION_TYPES.CREDENTIAL]: (projectId) => {
        void router.push({
          name: VIEWS.PROJECTS_CREDENTIALS,
          params: {
            projectId,
            credentialId: "create"
          }
        });
      },
      [ACTION_TYPES.FOLDER]: async () => {
        emit("createFolder");
      }
    };
    const onSelect = (action) => {
      const executableAction = actions2[action];
      if (!homeProject.value) {
        return;
      }
      executableAction(homeProject.value.id);
    };
    return (_ctx, _cache) => {
      const _component_N8nHeading = resolveComponent("N8nHeading");
      const _component_N8nText = resolveComponent("N8nText");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.projectHeader)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.projectDetails)
          }, [
            !unref(overview).isOverviewSubPage ? (openBlock(), createBlock(ProjectIcon, {
              key: 0,
              icon: headerIcon.value,
              "border-less": true,
              size: "medium"
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.headerActions)
            }, [
              createVNode(_component_N8nHeading, {
                bold: "",
                tag: "h2",
                size: "xlarge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(projectName.value), 1)
                ]),
                _: 1
              }),
              createVNode(_component_N8nText, { color: "text-light" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "subtitle", {}, () => [
                    !unref(projectsStore).currentProject ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.header.subtitle")), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 3
              })
            ], 2)
          ], 2),
          unref(route).name !== unref(VIEWS).PROJECT_SETTINGS ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([_ctx.$style.headerActions])
          }, [
            createVNode(unref(N8nTooltip), {
              disabled: !unref(sourceControlStore).preferences.branchReadOnly,
              content: unref(i18n).baseText("readOnlyEnv.cantAdd.any")
            }, {
              default: withCtx(() => [
                createVNode(ProjectCreateResource, {
                  "data-test-id": "add-resource-buttons",
                  actions: menu.value,
                  disabled: unref(sourceControlStore).preferences.branchReadOnly,
                  onAction: onSelect
                }, {
                  default: withCtx(() => [
                    createVNode(unref(N8nButton), mergeProps({ "data-test-id": "add-resource-workflow" }, createWorkflowButton.value, {
                      onClick: _cache[0] || (_cache[0] = ($event) => onSelect(ACTION_TYPES.WORKFLOW))
                    }), null, 16)
                  ]),
                  _: 1
                }, 8, ["actions", "disabled"])
              ]),
              _: 1
            }, 8, ["disabled", "content"])
          ], 2)) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default"),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actions)
        }, [
          createVNode(_sfc_main$2, { "show-settings": showSettings.value }, null, 8, ["show-settings"])
        ], 2)
      ]);
    };
  }
});
const projectHeader = "_projectHeader_1cqsm_123";
const projectDescription = "_projectDescription_1cqsm_124";
const projectDetails = "_projectDetails_1cqsm_132";
const actions = "_actions_1cqsm_137";
const headerActions = "_headerActions_1cqsm_147";
const style0 = {
  projectHeader,
  projectDescription,
  projectDetails,
  actions,
  headerActions
};
const cssModules = {
  "$style": style0
};
const ProjectHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectHeader as P,
  useOverview as u
};
