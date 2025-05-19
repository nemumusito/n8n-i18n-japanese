import { d as defineComponent, q as computed, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, j as createVNode, w as withCtx, l as createTextVNode, m as unref, dl as N8nBadge, e as createBlock, f as createCommentVNode, t as toDisplayString, c as useI18n, be as N8nText, bg as N8nButton, F as Fragment, _ as _export_sfc, x as renderSlot, b7 as mergeProps, bE as N8nIcon, d5 as _sfc_main$3, D as renderList, b as useRouter, gU as useTestDefinitionStore, a as useToast, dj as useAsyncState, de as orderBy, gV as N8nLoading, da as N8nHeading, b2 as withModifiers, gW as N8nActionToggle, aR as N8nTooltip, aT as _sfc_main$4, aq as h, cp as RouterLink, V as VIEWS, ai as useMessage, aj as MODAL_CONFIRM } from "./index-2X4RXSdq.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EmptyState",
  emits: ["create-test"],
  setup(__props) {
    const locale = useI18n();
    const canCreateEvaluations = computed(() => true);
    const isRegisteredCommunity = computed(() => false);
    const isNotRegisteredCommunity = computed(() => false);
    const hasReachedLimit = computed(() => false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.card]: true, [_ctx.$style.cardActive]: true })
        }, [
          createVNode(unref(N8nBadge), {
            theme: "warning",
            size: "small"
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("New")
            ])),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardContent)
          }, [
            createVNode(unref(N8nText), {
              tag: "h2",
              size: "xlarge",
              color: "text-base",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.evaluations")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              tag: "div",
              color: "text-base",
              class: "mb-s ml-s mr-s"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionDescription")), 1)
              ]),
              _: 1
            }),
            canCreateEvaluations.value ? (openBlock(), createBlock(unref(N8nButton), {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("create-test"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionButton")), 1)
              ]),
              _: 1
            })) : isRegisteredCommunity.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(unref(N8nButton), {
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("create-test"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionButton")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), {
                tag: "div",
                color: "text-light",
                size: "small",
                class: "mt-2xs"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionDescription.registered")), 1)
                ]),
                _: 1
              })
            ], 64)) : isNotRegisteredCommunity.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.divider, "mb-s"])
              }, null, 2),
              createVNode(unref(N8nText), {
                tag: "div",
                color: "text-light",
                size: "small",
                class: "mb-s"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionDescription.unregistered")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nButton), null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionButton.unregistered")), 1)
                ]),
                _: 1
              })
            ], 64)) : hasReachedLimit.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.divider, "mb-s"])
              }, null, 2),
              createVNode(unref(N8nText), {
                tag: "div",
                color: "text-light",
                size: "small",
                class: "mb-s"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.actionDescription.atLimit")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nButton), null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("generic.upgrade")), 1)
                ]),
                _: 1
              })
            ], 64)) : createCommentVNode("", true)
          ], 2)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.card]: true, [_ctx.$style.cardInActive]: true })
        }, [
          createVNode(unref(N8nBadge), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.unitTests.badge")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardContent)
          }, [
            createVNode(unref(N8nText), {
              tag: "h2",
              size: "xlarge",
              color: "text-base",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.unitTests.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              tag: "div",
              color: "text-base",
              class: "mb-s"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.unitTests.description")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nButton), { type: "secondary" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.unitTests.cta")), 1)
              ]),
              _: 1
            })
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const container$1 = "_container_q6l48_123";
const card = "_card_q6l48_131";
const cardContent = "_cardContent_q6l48_143";
const cardActive = "_cardActive_q6l48_147";
const cardInActive = "_cardInActive_q6l48_152";
const divider = "_divider_q6l48_156";
const style0$2 = {
  container: container$1,
  card,
  cardContent,
  cardActive,
  cardInActive,
  divider
};
const cssModules$2 = {
  "$style": style0$2
};
const EmptyState = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestItem",
  props: {
    name: {},
    testCases: {},
    execution: {},
    errors: {}
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const statusesColorDictionary = {
      new: {
        icon: "circle",
        color: "foreground-dark"
      },
      running: {
        icon: "spinner",
        color: "secondary",
        spin: true
      },
      completed: {
        icon: "exclamation-circle",
        color: "success"
      },
      error: {
        icon: "exclamation-triangle",
        color: "danger"
      },
      cancelled: {
        icon: "minus-circle",
        color: "foreground-xdark"
      },
      warning: {
        icon: "exclamation-circle",
        color: "warning"
      },
      success: {
        icon: "circle-check",
        color: "success"
      }
    };
    const statusRender = computed(() => {
      if (props.errors?.length) {
        return {
          icon: "adjust",
          color: "foreground-dark",
          label: "Incomplete"
        };
      }
      if (!props.execution) {
        return {
          icon: "circle",
          color: "foreground-dark",
          label: "Never ran"
        };
      }
      return {
        ...statusesColorDictionary[props.execution.status],
        label: props.execution.status
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.testCard)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.testCardContent)
        }, [
          createBaseVNode("div", null, [
            createVNode(unref(N8nText), {
              bold: "",
              tag: "div",
              class: normalizeClass(_ctx.$style.name)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.name), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(unref(N8nText), {
              tag: "div",
              color: "text-base",
              size: "small"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.item.tests", {
                  adjustToNumber: _ctx.testCases
                })), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.status)
            }, [
              createVNode(unref(N8nIcon), mergeProps(statusRender.value, { size: "small" }), null, 16),
              createVNode(unref(N8nText), {
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(statusRender.value.label), 1)
                ]),
                _: 1
              })
            ], 2),
            _ctx.errors?.length ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              tag: "div",
              color: "text-base",
              size: "small",
              class: "ml-m"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.item.missingFields", {
                  adjustToNumber: _ctx.errors.length
                })), 1)
              ]),
              _: 1
            })) : _ctx.execution ? (openBlock(), createBlock(unref(N8nText), {
              key: 1,
              tag: "div",
              color: "text-base",
              size: "small",
              class: "ml-m"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$3, {
                  date: _ctx.execution.updatedAt
                }, null, 8, ["date"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.metrics)
          }, [
            _ctx.execution?.metrics ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.entries(_ctx.execution.metrics), ([key, value]) => {
              return openBlock(), createElementBlock(Fragment, { key }, [
                createVNode(unref(N8nText), {
                  color: "text-base",
                  size: "small",
                  style: { "overflow": "hidden", "text-overflow": "ellipsis" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(key), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(N8nText), {
                  color: "text-base",
                  size: "small",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(Math.round((value + Number.EPSILON) * 100) / 100), 1)
                  ]),
                  _: 2
                }, 1024)
              ], 64);
            }), 128)) : createCommentVNode("", true)
          ], 2)
        ], 2),
        renderSlot(_ctx.$slots, "prepend"),
        renderSlot(_ctx.$slots, "append")
      ], 2);
    };
  }
});
const testCard = "_testCard_72820_123";
const name = "_name_72820_144";
const status = "_status_72820_148";
const testCardContent = "_testCardContent_72820_155";
const metrics = "_metrics_72820_163";
const style0$1 = {
  testCard,
  name,
  status,
  testCardContent,
  metrics
};
const cssModules$1 = {
  "$style": style0$1
};
const TestItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestDefinitionListView",
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const testDefinitionStore = useTestDefinitionStore();
    const toast = useToast();
    const locale = useI18n();
    const { confirm } = useMessage();
    const { isLoading } = useAsyncState(
      async () => {
        await testDefinitionStore.fetchAll({ workflowId: props.name });
        const response = testDefinitionStore.allTestDefinitionsByWorkflowId[props.name] ?? [];
        response.forEach((test) => testDefinitionStore.updateRunFieldIssues(test.id));
        return [];
      },
      [],
      {
        onError: (error) => toast.showError(error, locale.baseText("testDefinition.list.loadError")),
        shallow: false
      }
    );
    const tests = computed(() => testDefinitionStore.allTestDefinitionsByWorkflowId[props.name]);
    const listItems = computed(
      () => orderBy(tests.value, [(test) => new Date(test.updatedAt ?? test.createdAt)], ["desc"]).map(
        (test) => ({
          ...test,
          testCases: (testDefinitionStore.testRunsByTestId[test.id] || []).length,
          lastExecution: testDefinitionStore.lastRunByTestId[test.id] ?? void 0,
          isTestRunning: isTestRunning(test.id),
          setupErrors: testDefinitionStore.getFieldIssues(test.id) ?? []
        })
      )
    );
    const commands = {
      delete: onDeleteTest
    };
    const actions = computed(() => [
      {
        label: "Delete",
        value: "delete",
        disabled: false
      }
    ]);
    const handleAction = async (action, testId) => await commands[action](testId);
    function isTestRunning(testId) {
      return testDefinitionStore.lastRunByTestId[testId]?.status === "running";
    }
    function onCreateTest() {
      void router.push({ name: VIEWS.NEW_TEST_DEFINITION });
    }
    async function onRunTest(testId) {
      try {
        const result = await testDefinitionStore.startTestRun(testId);
        if (result.success) {
          toast.showMessage({
            title: locale.baseText("testDefinition.list.testStarted"),
            type: "success",
            message: h(
              RouterLink,
              { to: { name: VIEWS.TEST_DEFINITION_EDIT, params: { testId } } },
              () => "Go to runs"
            )
          });
          await testDefinitionStore.fetchTestRuns(testId);
        } else {
          throw new Error("Test run failed to start");
        }
      } catch (error) {
        toast.showError(error, locale.baseText("testDefinition.list.testStartError"));
      }
    }
    async function onCancelTestRun(testId) {
      try {
        const testRunId = testDefinitionStore.lastRunByTestId[testId]?.id;
        if (!testRunId) {
          throw new Error("Failed to cancel test run");
        }
        const result = await testDefinitionStore.cancelTestRun(testId, testRunId);
        if (result.success) {
          toast.showMessage({
            title: locale.baseText("testDefinition.list.testCancelled"),
            type: "success"
          });
          await testDefinitionStore.fetchTestRuns(testId);
        } else {
          throw new Error("Failed to cancel test run");
        }
      } catch (error) {
        toast.showError(error, locale.baseText("testDefinition.list.testStartError"));
      }
    }
    function onEditTest(testId) {
      void router.push({ name: VIEWS.TEST_DEFINITION_EDIT, params: { testId } });
    }
    async function onDeleteTest(testId) {
      const deleteConfirmed = await confirm(
        locale.baseText("testDefinition.deleteTest.warning"),
        locale.baseText("testDefinition.deleteTest"),
        {
          type: "warning",
          confirmButtonText: locale.baseText("generic.delete"),
          cancelButtonText: locale.baseText("generic.cancel"),
          closeOnClickModal: true
        }
      );
      if (deleteConfirmed !== MODAL_CONFIRM) {
        return;
      }
      await testDefinitionStore.deleteById(testId);
      toast.showMessage({
        title: locale.baseText("testDefinition.list.testDeleted"),
        type: "success"
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading), {
          key: 0,
          loading: "",
          rows: 3,
          "data-test-id": "test-definition-loader"
        })) : !listItems.value.length ? (openBlock(), createBlock(EmptyState, {
          key: 1,
          "data-test-id": "test-definition-empty-state",
          onCreateTest
        })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            createVNode(unref(N8nHeading), {
              size: "xlarge",
              color: "text-dark",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("testDefinition.list.tests")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", null, [
              createVNode(unref(N8nButton), {
                label: unref(locale).baseText("testDefinition.list.createNew"),
                class: "mr-xs",
                onClick: onCreateTest
              }, null, 8, ["label"]),
              createVNode(unref(N8nButton), {
                label: unref(locale).baseText("testDefinition.list.runAll"),
                disabled: "",
                type: "secondary"
              }, null, 8, ["label"])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.testList),
            "data-test-id": "test-definition-list"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(listItems.value, (item) => {
              return openBlock(), createBlock(TestItem, {
                key: item.id,
                name: item.name,
                "test-cases": item.testCases,
                execution: item.lastExecution,
                errors: item.setupErrors,
                "data-test-id": `test-item-${item.id}`,
                onClick: ($event) => onEditTest(item.id)
              }, {
                prepend: withCtx(() => [
                  createBaseVNode("div", {
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                    }, ["stop"]))
                  }, [
                    item.isTestRunning ? (openBlock(), createBlock(unref(N8nTooltip), {
                      key: 0,
                      content: "Cancel test run",
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          icon: "stop",
                          type: "secondary",
                          size: "mini",
                          onClick: ($event) => onCancelTestRun(item.id)
                        }, null, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(), createBlock(unref(N8nTooltip), {
                      key: 1,
                      disabled: !Boolean(item.setupErrors.length),
                      placement: "top",
                      teleported: ""
                    }, {
                      content: withCtx(() => [
                        createBaseVNode("div", null, toDisplayString(unref(locale).baseText("testDefinition.completeConfig")), 1),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.setupErrors, (issue) => {
                          return openBlock(), createElementBlock("div", {
                            key: issue.field
                          }, " - " + toDisplayString(issue.message), 1);
                        }), 128))
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          icon: "play",
                          type: "secondary",
                          size: "mini",
                          disabled: Boolean(item.setupErrors.length),
                          "data-test-id": `run-test-${item.id}`,
                          onClick: ($event) => onRunTest(item.id)
                        }, null, 8, ["disabled", "data-test-id", "onClick"])
                      ]),
                      _: 2
                    }, 1032, ["disabled"]))
                  ])
                ]),
                append: withCtx(() => [
                  createBaseVNode("div", {
                    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["stop"]))
                  }, [
                    createVNode(unref(N8nActionToggle), {
                      actions: actions.value,
                      "data-test-id": `test-actions-${item.id}`,
                      "icon-orientation": "horizontal",
                      onAction: (action) => handleAction(action, item.id)
                    }, null, 8, ["actions", "data-test-id", "onAction"])
                  ])
                ]),
                _: 2
              }, 1032, ["name", "test-cases", "execution", "errors", "data-test-id", "onClick"]);
            }), 128))
          ], 2)
        ], 64))
      ], 2);
    };
  }
});
const container = "_container_nrp6n_123";
const loading = "_loading_nrp6n_131";
const testList = "_testList_nrp6n_138";
const header = "_header_nrp6n_145";
const style0 = {
  container,
  loading,
  testList,
  header
};
const cssModules = {
  "$style": style0
};
const TestDefinitionListView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TestDefinitionListView as default
};
