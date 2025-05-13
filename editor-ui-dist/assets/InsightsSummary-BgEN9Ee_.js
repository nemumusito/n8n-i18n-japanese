import { d as defineComponent, R as useRoute, Y as useCssModule, q as computed, c as useI18n, V as VIEWS, h as resolveComponent, i as createElementBlock, g as openBlock, k as createBaseVNode, e as createBlock, n as normalizeClass, m as unref, F as Fragment, D as renderList, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, h4 as TIME_RANGE_LABELS, f as createCommentVNode, h5 as INSIGHT_IMPACT_TYPES, h6 as INSIGHTS_UNIT_IMPACT_MAPPING, ag as useTelemetry, _ as _export_sfc } from "./index-LGUZBtYa.js";
const smartDecimal = (value, decimals = 2) => {
  if (Number.isInteger(value)) {
    return value;
  }
  if (value.toString().split(".")[1].length <= decimals) {
    return value;
  }
  return Number(value.toFixed(decimals));
};
const _hoisted_1 = { "data-test-id": "insights-summary-tabs" };
const _hoisted_2 = ["data-test-id"];
const _hoisted_3 = { key: 2 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsSummary",
  props: {
    summary: {},
    timeRange: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const route = useRoute();
    const $style = useCssModule();
    const telemetry = useTelemetry();
    const summaryTitles = computed(() => ({
      total: i18n.baseText("insights.banner.title.total"),
      failed: i18n.baseText("insights.banner.title.failed"),
      failureRate: i18n.baseText("insights.banner.title.failureRate"),
      timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
      averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
    }));
    const summaryHasNoData = computed(() => {
      const summaryValues = Object.values(props.summary);
      return summaryValues.length > 0 && summaryValues.every((summary) => !summary.value);
    });
    const summaryWithRouteLocations = computed(
      () => props.summary.map((s) => ({
        ...s,
        to: { name: VIEWS.INSIGHTS, params: { insightType: s.id }, query: route.query }
      }))
    );
    const getImpactStyle = (id, value) => {
      const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
      if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) {
        return $style.neutral;
      }
      if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) {
        return value > 0 ? $style.positive : $style.negative;
      }
      if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) {
        return value < 0 ? $style.positive : $style.negative;
      }
      return $style.neutral;
    };
    const trackTabClick = (insightType) => {
      telemetry.track(`User clicked ${summaryTitles.value[insightType]}`, {
        referrer: route.name === VIEWS.INSIGHTS ? "Dashboard" : "Overview"
      });
    };
    return (_ctx, _cache) => {
      const _component_N8nLoading = resolveComponent("N8nLoading");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).insights)
      }, [
        createBaseVNode("ul", _hoisted_1, [
          _ctx.loading ? (openBlock(), createBlock(_component_N8nLoading, {
            key: 0,
            class: normalizeClass(unref($style).loading),
            cols: 5
          }, null, 8, ["class"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(summaryWithRouteLocations.value, ({ id, value, deviation, deviationUnit, unit, to }) => {
            return openBlock(), createElementBlock("li", {
              key: id,
              "data-test-id": `insights-summary-tab-${id}`
            }, [
              createVNode(_component_router_link, {
                to,
                "exact-active-class": unref($style).activeTab,
                onClick: ($event) => trackTabClick(id)
              }, {
                default: withCtx(() => [
                  createBaseVNode("strong", null, [
                    createVNode(_component_N8nTooltip, {
                      placement: "bottom",
                      disabled: id !== "timeSaved"
                    }, {
                      content: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title.timeSaved.tooltip")), 1)
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" " + toDisplayString(summaryTitles.value[id]), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled"])
                  ]),
                  createBaseVNode("small", {
                    class: normalizeClass(unref($style).days)
                  }, toDisplayString(unref(TIME_RANGE_LABELS)[_ctx.timeRange]), 3),
                  summaryHasNoData.value ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref($style).noData)
                  }, [
                    createVNode(_component_N8nTooltip, { placement: "bottom" }, {
                      content: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.noData.tooltip")), 1)
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("em", null, toDisplayString(unref(i18n).baseText("insights.banner.noData")), 1)
                      ]),
                      _: 1
                    })
                  ], 2)) : value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(unref($style).empty)
                  }, [
                    _cache[0] || (_cache[0] = createBaseVNode("em", null, "--", -1)),
                    createBaseVNode("small", null, [
                      createVNode(_component_N8nTooltip, { placement: "bottom" }, {
                        content: withCtx(() => [
                          createVNode(_component_i18n_t, { keypath: "insights.banner.timeSaved.tooltip" }, {
                            link: withCtx(() => [
                              createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_N8nIcon, {
                            class: normalizeClass(unref($style).icon),
                            icon: "info-circle"
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })
                    ])
                  ], 2)) : (openBlock(), createElementBlock("span", _hoisted_3, [
                    createBaseVNode("em", null, [
                      createTextVNode(toDisplayString(unref(smartDecimal)(value).toLocaleString("en-US")) + " ", 1),
                      createBaseVNode("i", null, toDisplayString(unit), 1)
                    ]),
                    deviation !== null ? (openBlock(), createElementBlock("small", {
                      key: 0,
                      class: normalizeClass(getImpactStyle(id, deviation))
                    }, [
                      createVNode(_component_N8nIcon, {
                        class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
                        icon: deviation === 0 ? "caret-right" : deviation > 0 ? "caret-up" : "caret-down"
                      }, null, 8, ["class", "icon"]),
                      createVNode(_component_N8nTooltip, {
                        placement: "bottom",
                        disabled: id !== "failureRate"
                      }, {
                        content: withCtx(() => [
                          createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.failureRate.deviation.tooltip")), 1)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" " + toDisplayString(unref(smartDecimal)(Math.abs(deviation)).toLocaleString("en-US")) + toDisplayString(deviationUnit), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled"])
                    ], 2)) : createCommentVNode("", true)
                  ]))
                ]),
                _: 2
              }, 1032, ["to", "exact-active-class", "onClick"])
            ], 8, _hoisted_2);
          }), 128))
        ])
      ], 2);
    };
  }
});
const insights = "_insights_syjwy_123";
const activeTab = "_activeTab_syjwy_161";
const days = "_days_syjwy_174";
const empty = "_empty_syjwy_185";
const icon = "_icon_syjwy_193";
const noData = "_noData_syjwy_225";
const positive = "_positive_syjwy_230";
const negative = "_negative_syjwy_234";
const neutral = "_neutral_syjwy_238";
const loading = "_loading_syjwy_253";
const style0 = {
  insights,
  activeTab,
  days,
  empty,
  icon,
  noData,
  positive,
  negative,
  neutral,
  loading
};
const cssModules = {
  "$style": style0
};
const InsightsSummary = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsSummary as I,
  smartDecimal as s
};
