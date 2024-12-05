import { jsx as c, jsxs as y, Fragment as ie } from "react/jsx-runtime";
import S, { createContext as J, useState as M, useEffect as B, useContext as L, useRef as R, useCallback as N, useMemo as F, createElement as ce } from "react";
const de = {
  unit: "rem"
}, ue = [
  {
    name: "margin",
    type: "range",
    property: "margin",
    direction: [
      "",
      "-top",
      "-right",
      "-bottom",
      "-left"
    ],
    val: 1,
    min: 0,
    max: 3,
    step: 0.1
  },
  {
    name: "padding",
    type: "range",
    property: "padding",
    direction: [
      "",
      "-top",
      "-right",
      "-bottom",
      "-left"
    ],
    val: 1,
    min: 0,
    max: 3,
    step: 0.1
  },
  {
    name: "border-width",
    type: "range",
    property: "border-width",
    direction: [
      ""
    ],
    val: 0.1,
    min: 0,
    max: 1,
    step: 0.01
  },
  {
    name: "border-radius",
    type: "range",
    property: "border-radius",
    direction: [
      ""
    ],
    val: 0.1,
    min: 0,
    max: 3,
    step: 0.01
  },
  {
    name: "background-color-primary",
    type: "color",
    property: "background-color",
    val: "black"
  },
  {
    name: "background-color-success",
    type: "color",
    property: "background-color",
    val: "blue"
  },
  {
    name: "background-color-danger",
    type: "color",
    property: "background-color",
    val: "red"
  },
  {
    name: "border-color",
    type: "color",
    property: "border-color",
    val: "black"
  },
  {
    name: "text-color-primary",
    type: "color",
    property: "color",
    val: "black"
  },
  {
    name: "text-color-success",
    type: "color",
    property: "color",
    val: "blue"
  },
  {
    name: "text-color-danger",
    type: "color",
    property: "color",
    val: "red"
  }
], U = J(void 0), pe = ({
  children: e
}) => {
  const o = () => {
    const n = localStorage.getItem("oo-settings");
    return n ? JSON.parse(n) : ue;
  }, [r, a] = M(o);
  B(() => {
    const n = document.documentElement.style;
    r.map(({ name: l, val: u, type: i }) => n.setProperty(`--oo-${l}`, u + (i === "range" ? de.unit : "")));
  }, [r]);
  const s = () => localStorage.setItem("oo-settings", JSON.stringify(r)), t = (n, l) => a(
    (u) => u.map(
      (i) => i.name === n ? { ...i, val: l } : i
    )
  );
  return /* @__PURE__ */ c(
    U.Provider,
    {
      value: { classes: r, updateClasses: t, saveClasses: s },
      children: e
    }
  );
}, T = () => {
  const e = L(U);
  if (!e)
    throw new Error("useClassesContext must be used within a ClassesProvider");
  return e;
}, W = J(void 0), he = ({
  children: e
}) => {
  const [o, r] = M(!1), a = () => r(!o);
  return /* @__PURE__ */ c(
    W.Provider,
    {
      value: { isHidden: o, togglePopover: a },
      children: e
    }
  );
}, H = () => {
  const e = L(W);
  if (!e)
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  return e;
};
function p() {
  return p = Object.assign ? Object.assign.bind() : function(e) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, p.apply(null, arguments);
}
function C(e, o) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (o.includes(a)) continue;
    r[a] = e[a];
  }
  return r;
}
var k = 255, m = 100, ve = (e) => {
  var {
    r: o,
    g: r,
    b: a,
    a: s
  } = e, t = Math.max(o, r, a), n = t - Math.min(o, r, a), l = n ? t === o ? (r - a) / n : t === r ? 2 + (a - o) / n : 4 + (o - r) / n : 0;
  return {
    h: 60 * (l < 0 ? l + 6 : l),
    s: t ? n / t * m : 0,
    v: t / k * m,
    a: s
  };
}, Q = (e) => {
  var {
    h: o,
    s: r,
    l: a,
    a: s
  } = V(e);
  return "hsla(" + o + ", " + r + "%, " + a + "%, " + s + ")";
}, V = (e) => {
  var {
    h: o,
    s: r,
    v: a,
    a: s
  } = e, t = (200 - r) * a / m;
  return {
    h: o,
    s: t > 0 && t < 200 ? r * a / m / (t <= m ? t : 200 - t) * m : 0,
    l: t / 2,
    a: s
  };
}, K = (e) => {
  var {
    r: o,
    g: r,
    b: a
  } = e, s = o << 16 | r << 8 | a;
  return "#" + ((t) => new Array(7 - t.length).join("0") + t)(s.toString(16));
}, ge = (e) => {
  var {
    r: o,
    g: r,
    b: a,
    a: s
  } = e, t = typeof s == "number" && (s * 255 | 256).toString(16).slice(1);
  return "" + K({
    r: o,
    g: r,
    b: a,
    a: s
  }) + (t || "");
}, Z = (e) => ve(be(e)), be = (e) => {
  var o = e.replace("#", "");
  /^#?/.test(e) && o.length === 3 && (e = "#" + o.charAt(0) + o.charAt(0) + o.charAt(1) + o.charAt(1) + o.charAt(2) + o.charAt(2));
  var r = new RegExp("[A-Za-z0-9]{2}", "g"), [a, s, t = 0, n] = e.match(r).map((l) => parseInt(l, 16));
  return {
    r: a,
    g: s,
    b: t,
    a: (n ?? 255) / k
  };
}, z = (e) => {
  var {
    h: o,
    s: r,
    v: a,
    a: s
  } = e, t = o / 60, n = r / m, l = a / m, u = Math.floor(t) % 6, i = t - Math.floor(t), v = k * l * (1 - n), h = k * l * (1 - n * i), g = k * l * (1 - n * (1 - i));
  l *= k;
  var d = {};
  switch (u) {
    case 0:
      d.r = l, d.g = g, d.b = v;
      break;
    case 1:
      d.r = h, d.g = l, d.b = v;
      break;
    case 2:
      d.r = v, d.g = l, d.b = g;
      break;
    case 3:
      d.r = v, d.g = h, d.b = l;
      break;
    case 4:
      d.r = g, d.g = v, d.b = l;
      break;
    case 5:
      d.r = l, d.g = v, d.b = h;
      break;
  }
  return d.r = Math.round(d.r), d.g = Math.round(d.g), d.b = Math.round(d.b), p({}, d, {
    a: s
  });
}, fe = (e) => {
  var {
    r: o,
    g: r,
    b: a,
    a: s
  } = z(e);
  return "rgba(" + o + ", " + r + ", " + a + ", " + s + ")";
}, me = (e) => {
  var {
    r: o,
    g: r,
    b: a
  } = e;
  return {
    r: o,
    g: r,
    b: a
  };
}, ye = (e) => {
  var {
    h: o,
    s: r,
    l: a
  } = e;
  return {
    h: o,
    s: r,
    l: a
  };
}, q = (e) => K(z(e)), xe = (e) => {
  var {
    h: o,
    s: r,
    v: a
  } = e;
  return {
    h: o,
    s: r,
    v: a
  };
}, Ce = (e) => {
  var {
    r: o,
    g: r,
    b: a
  } = e, s = function(v) {
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }, t = s(o / 255), n = s(r / 255), l = s(a / 255), u = {};
  return u.x = t * 0.4124 + n * 0.3576 + l * 0.1805, u.y = t * 0.2126 + n * 0.7152 + l * 0.0722, u.bri = t * 0.0193 + n * 0.1192 + l * 0.9505, u;
}, we = (e) => {
  var o, r, a, s, t, n, l, u, i;
  return typeof e == "string" && ee(e) ? (n = Z(e), u = e) : typeof e != "string" && (n = e), n && (a = xe(n), t = V(n), s = z(n), i = ge(s), u = q(n), r = ye(t), o = me(s), l = Ce(o)), {
    rgb: o,
    hsl: r,
    hsv: a,
    rgba: s,
    hsla: t,
    hsva: n,
    hex: u,
    hexa: i,
    xy: l
  };
}, ee = (e) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e);
function $(e) {
  var o = R(e);
  return B(() => {
    o.current = e;
  }), N((r, a) => o.current && o.current(r, a), []);
}
var P = (e) => "touches" in e, Y = (e) => {
  !P(e) && e.preventDefault && e.preventDefault();
}, G = function(o, r, a) {
  return r === void 0 && (r = 0), a === void 0 && (a = 1), o > a ? a : o < r ? r : o;
}, X = (e, o) => {
  var r = e.getBoundingClientRect(), a = P(o) ? o.touches[0] : o;
  return {
    left: G((a.pageX - (r.left + window.pageXOffset)) / r.width),
    top: G((a.pageY - (r.top + window.pageYOffset)) / r.height),
    width: r.width,
    height: r.height,
    x: a.pageX - (r.left + window.pageXOffset),
    y: a.pageY - (r.top + window.pageYOffset)
  };
}, _e = ["prefixCls", "className", "onMove", "onDown"], I = /* @__PURE__ */ S.forwardRef((e, o) => {
  var {
    prefixCls: r = "w-color-interactive",
    className: a,
    onMove: s,
    onDown: t
  } = e, n = C(e, _e), l = R(null), u = R(!1), [i, v] = M(!1), h = $(s), g = $(t), d = (b) => u.current && !P(b) ? !1 : (u.current = P(b), !0), x = N((b) => {
    Y(b);
    var _ = P(b) ? b.touches.length > 0 : b.buttons > 0;
    _ && l.current ? h && h(X(l.current, b), b) : v(!1);
  }, [h]), f = N(() => v(!1), []), w = N((b) => {
    var _ = b ? window.addEventListener : window.removeEventListener;
    _(u.current ? "touchmove" : "mousemove", x), _(u.current ? "touchend" : "mouseup", f);
  }, []);
  B(() => (w(i), () => {
    i && w(!1);
  }), [i, w]);
  var A = N((b) => {
    Y(b.nativeEvent), d(b.nativeEvent) && (g && g(X(l.current, b.nativeEvent), b.nativeEvent), v(!0));
  }, [g]);
  return /* @__PURE__ */ c("div", p({}, n, {
    className: [r, a || ""].filter(Boolean).join(" "),
    style: p({}, n.style, {
      touchAction: "none"
    }),
    ref: l,
    tabIndex: 0,
    onMouseDown: A,
    onTouchStart: A
  }));
});
I.displayName = "Interactive";
var ke = ["className", "prefixCls", "left", "top", "style", "fillProps"], Ae = (e) => {
  var {
    className: o,
    prefixCls: r,
    left: a,
    top: s,
    style: t,
    fillProps: n
  } = e, l = C(e, ke), u = p({}, t, {
    position: "absolute",
    left: a,
    top: s
  }), i = p({
    width: 18,
    height: 18,
    boxShadow: "var(--alpha-pointer-box-shadow)",
    borderRadius: "50%",
    backgroundColor: "var(--alpha-pointer-background-color)"
  }, n == null ? void 0 : n.style, {
    transform: a ? "translate(-9px, -1px)" : "translate(-1px, -9px)"
  });
  return /* @__PURE__ */ c("div", p({
    className: r + "-pointer " + (o || ""),
    style: u
  }, l, {
    children: /* @__PURE__ */ c("div", p({
      className: r + "-fill"
    }, n, {
      style: i
    }))
  }));
}, Ne = ["prefixCls", "className", "hsva", "background", "bgProps", "innerProps", "pointerProps", "radius", "width", "height", "direction", "style", "onChange", "pointer"], re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==", j = /* @__PURE__ */ S.forwardRef((e, o) => {
  var {
    prefixCls: r = "w-color-alpha",
    className: a,
    hsva: s,
    background: t,
    bgProps: n = {},
    innerProps: l = {},
    pointerProps: u = {},
    radius: i = 0,
    width: v,
    height: h = 16,
    direction: g = "horizontal",
    style: d,
    onChange: x,
    pointer: f
  } = e, w = C(e, Ne), A = (O) => {
    x && x(p({}, s, {
      a: g === "horizontal" ? O.left : O.top
    }), O);
  }, b = Q(Object.assign({}, s, {
    a: 1
  })), _ = "linear-gradient(to " + (g === "horizontal" ? "right" : "bottom") + ", rgba(244, 67, 54, 0) 0%, " + b + " 100%)", E = {};
  g === "horizontal" ? E.left = s.a * 100 + "%" : E.top = s.a * 100 + "%";
  var se = p({
    "--alpha-background-color": "#fff",
    "--alpha-pointer-background-color": "rgb(248, 248, 248)",
    "--alpha-pointer-box-shadow": "rgb(0 0 0 / 37%) 0px 1px 4px 0px",
    borderRadius: i,
    background: "url(" + re + ") left center",
    backgroundColor: "var(--alpha-background-color)"
  }, {
    width: v,
    height: h
  }, d, {
    position: "relative"
  }), le = f && typeof f == "function" ? f(p({
    prefixCls: r
  }, u, E)) : /* @__PURE__ */ c(Ae, p({}, u, {
    prefixCls: r
  }, E));
  return /* @__PURE__ */ y("div", p({}, w, {
    className: [r, r + "-" + g, a || ""].filter(Boolean).join(" "),
    style: se,
    ref: o,
    children: [/* @__PURE__ */ c("div", p({}, n, {
      style: p({
        inset: 0,
        position: "absolute",
        background: t || _,
        borderRadius: i
      }, n.style)
    })), /* @__PURE__ */ c(I, p({}, l, {
      style: p({}, l.style, {
        inset: 0,
        zIndex: 1,
        position: "absolute"
      }),
      onMove: A,
      onDown: A,
      children: le
    }))]
  }));
});
j.displayName = "Alpha";
var Pe = (e) => {
  var {
    className: o,
    color: r,
    left: a,
    top: s,
    prefixCls: t
  } = e, n = {
    position: "absolute",
    top: s,
    left: a
  }, l = {
    "--saturation-pointer-box-shadow": "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",
    width: 6,
    height: 6,
    transform: "translate(-3px, -3px)",
    boxShadow: "var(--saturation-pointer-box-shadow)",
    borderRadius: "50%",
    backgroundColor: r
  };
  return F(() => /* @__PURE__ */ c("div", {
    className: t + "-pointer " + (o || ""),
    style: n,
    children: /* @__PURE__ */ c("div", {
      className: t + "-fill",
      style: l
    })
  }), [s, a, r, o, t]);
}, Re = ["prefixCls", "radius", "pointer", "className", "hue", "style", "hsva", "onChange"], oe = /* @__PURE__ */ S.forwardRef((e, o) => {
  var r, {
    prefixCls: a = "w-color-saturation",
    radius: s = 0,
    pointer: t,
    className: n,
    hue: l = 0,
    style: u,
    hsva: i,
    onChange: v
  } = e, h = C(e, Re), g = p({
    width: 200,
    height: 200,
    borderRadius: s
  }, u, {
    position: "relative"
  }), d = (f, w) => {
    v && i && v({
      h: i.h,
      s: f.left * 100,
      v: (1 - f.top) * 100,
      a: i.a
      // source: 'hsv',
    });
  }, x = F(() => {
    if (!i) return null;
    var f = {
      top: 100 - i.v + "%",
      left: i.s + "%",
      color: Q(i)
    };
    return t && typeof t == "function" ? t(p({
      prefixCls: a
    }, f)) : /* @__PURE__ */ c(Pe, p({
      prefixCls: a
    }, f));
  }, [i, t, a]);
  return /* @__PURE__ */ c(I, p({
    className: [a, n || ""].filter(Boolean).join(" ")
  }, h, {
    style: p({
      position: "absolute",
      inset: 0,
      cursor: "crosshair",
      backgroundImage: "linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(" + ((r = i == null ? void 0 : i.h) != null ? r : l) + ", 100%, 50%))"
    }, g),
    ref: o,
    onMove: d,
    onDown: d,
    children: x
  }));
});
oe.displayName = "Saturation";
var Se = ["prefixCls", "className", "hue", "onChange", "direction"], ae = /* @__PURE__ */ S.forwardRef((e, o) => {
  var {
    prefixCls: r = "w-color-hue",
    className: a,
    hue: s = 0,
    onChange: t,
    direction: n = "horizontal"
  } = e, l = C(e, Se);
  return /* @__PURE__ */ c(j, p({
    ref: o,
    className: r + " " + (a || "")
  }, l, {
    direction: n,
    background: "linear-gradient(to " + (n === "horizontal" ? "right" : "bottom") + ", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",
    hsva: {
      h: s,
      s: 100,
      v: 100,
      a: s / 360
    },
    onChange: (u, i) => {
      t && t({
        h: n === "horizontal" ? 360 * i.left : 360 * i.top
      });
    }
  }));
});
ae.displayName = "Hue";
var Te = ["style", "color"], Ee = ["prefixCls", "className", "onChange", "color", "style", "disableAlpha"], D = (e) => {
  var {
    style: o,
    color: r
  } = e, a = C(e, Te), s = p({
    "--colorful-pointer-background-color": "#fff",
    "--colorful-pointer-border": "2px solid #fff",
    height: 28,
    width: 28,
    position: "absolute",
    transform: "translate(-14px, -4px)",
    boxShadow: "0 2px 4px rgb(0 0 0 / 20%)",
    borderRadius: "50%",
    background: "url(" + re + ")",
    backgroundColor: "var(--colorful-pointer-background-color)",
    border: "var(--colorful-pointer-border)",
    zIndex: 1
  }, o);
  return /* @__PURE__ */ c("div", p({}, a, {
    style: s,
    children: /* @__PURE__ */ c("div", {
      style: {
        backgroundColor: r,
        borderRadius: "50%",
        height: " 100%",
        width: "100%"
      }
    })
  }));
}, te = /* @__PURE__ */ S.forwardRef((e, o) => {
  var {
    prefixCls: r = "w-color-colorful",
    className: a,
    onChange: s,
    color: t,
    style: n,
    disableAlpha: l
  } = e, u = C(e, Ee), i = typeof t == "string" && ee(t) ? Z(t) : t || {}, v = (h) => s && s(we(h));
  return /* @__PURE__ */ y("div", p({
    ref: o,
    style: p({
      width: 200,
      position: "relative"
    }, n)
  }, u, {
    className: r + " " + (a || ""),
    children: [/* @__PURE__ */ c(oe, {
      hsva: i,
      className: r,
      radius: "8px 8px 0 0",
      style: {
        width: "auto",
        height: 150,
        minWidth: 120,
        borderBottom: "12px solid #000"
      },
      pointer: (h) => {
        var {
          left: g,
          top: d,
          color: x
        } = h;
        return /* @__PURE__ */ c(D, {
          style: {
            left: g,
            top: d,
            transform: "translate(-16px, -16px)"
          },
          color: q(i)
        });
      },
      onChange: (h) => v(p({}, i, h))
    }), /* @__PURE__ */ c(ae, {
      hue: i.h,
      height: 24,
      radius: l ? "0 0 8px 8px" : 0,
      className: r,
      onChange: (h) => v(p({}, i, h)),
      pointer: (h) => {
        var {
          left: g
        } = h;
        return /* @__PURE__ */ c(D, {
          style: {
            left: g
          },
          color: "hsl(" + (i.h || 0) + "deg 100% 50%)"
        });
      }
    }), !l && /* @__PURE__ */ c(j, {
      hsva: i,
      height: 24,
      className: r,
      radius: "0 0 8px 8px",
      pointer: (h) => {
        var {
          left: g
        } = h;
        return /* @__PURE__ */ c(D, {
          style: {
            left: g
          },
          color: fe(i)
        });
      },
      onChange: (h) => v(p({}, i, h))
    })]
  }));
});
te.displayName = "Colorful";
const ne = ({ name: e }) => /* @__PURE__ */ c("span", { className: "ee-text-transform_capitalize", children: e.replace(/-/g, " ") });
function Me(e, o) {
  B(() => {
    function r(a) {
      e.current && !e.current.contains(a.target) && o();
    }
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [e]);
}
function Be(e) {
  const o = R(null);
  return Me(o, e.callback), /* @__PURE__ */ c("div", { ref: o, children: e.children });
}
const Oe = ({
  name: e,
  val: o
}) => {
  const { updateClasses: r } = T(), [a, s] = M(!1), t = (n) => {
    r(e, n.hex);
  };
  return /* @__PURE__ */ y("div", { className: "ee-display_flex ee-justify-content_space-between oo-padding ee-align-items_center", children: [
    /* @__PURE__ */ c(ne, { name: e }),
    /* @__PURE__ */ c("div", { children: a && /* @__PURE__ */ c(Be, { callback: () => s(!1), children: /* @__PURE__ */ c("div", { className: "ee-position_fixed", style: {
      transform: "translate3d(-50%, -50%, 0px)",
      left: "50%",
      top: "50%"
    }, children: /* @__PURE__ */ c(te, { className: "ee-width_10", color: o.toString(), onChange: t }) }) }) }),
    /* @__PURE__ */ c("div", { className: "ee-width_2 ee-height_2 oo-border-radius ee-border-style_solid ee-border-width", style: { backgroundColor: o.toString() }, onClick: () => s(!a) })
  ] });
}, De = ({
  name: e,
  min: o,
  max: r,
  step: a,
  val: s
}) => {
  const { updateClasses: t } = T();
  return /* @__PURE__ */ y("div", { className: "ee-display_flex ee-justify-content_space-between oo-padding", children: [
    /* @__PURE__ */ c(ne, { name: e }),
    /* @__PURE__ */ c("input", { type: "range", onChange: (n) => t(e, n.target.valueAsNumber), name: e, id: e, step: a, min: o, max: r, value: s })
  ] });
}, He = () => {
  const { classes: e } = T();
  return /* @__PURE__ */ c("div", { className: "", children: e.map((o, r) => {
    if (o.type === "range")
      return /* @__PURE__ */ c(De, { ...o }, r);
    if (o.type === "color")
      return /* @__PURE__ */ ce(Oe, { ...o, key: r });
  }) });
};
function ze() {
  const { updateClasses: e } = T(), o = R(null);
  return /* @__PURE__ */ y("div", { className: "ee-display_flex", children: [
    /* @__PURE__ */ c("input", { type: "file", id: "file", onChange: (a) => {
      var t;
      const s = (t = a.target.files) == null ? void 0 : t[0];
      if (s) {
        const n = new FileReader();
        n.onload = (l) => {
          var i;
          const u = JSON.parse((i = l.target) == null ? void 0 : i.result);
          u && u.map(({ name: v, val: h }) => e(v, h));
        }, n.onerror = () => {
          console.error("File reading has failed");
        }, n.readAsText(s);
      }
    }, ref: o, style: { display: "none" } }),
    /* @__PURE__ */ c("label", { htmlFor: "file", className: "oo-border-width oo-padding ee-cursor_pointer  oo-background-color-primary oo-text-color-primary ee-border-style_solid oo-border-color  oo-border-radius", children: "Load JSON" })
  ] });
}
function Ie() {
  const { saveClasses: e } = T(), { togglePopover: o } = H();
  return /* @__PURE__ */ c(
    "button",
    {
      className: "oo-padding ee-cursor_pointer  oo-border-width oo-background-color-success oo-text-color-success  oo-border-color ee-border-style_solid oo-border-radius",
      onClick: () => {
        e(), o();
      },
      children: "Save"
    }
  );
}
const je = () => /* @__PURE__ */ y("div", { className: "ee-display_flex ee-justify-content_space-between", children: [
  /* @__PURE__ */ c(Ie, {}),
  /* @__PURE__ */ c(ze, {})
] }), $e = () => {
  const { isHidden: e } = H();
  return /* @__PURE__ */ y("div", { className: (e ? "ee-opacity_1 " : "ee-opacity_0 ") + "oo-background-color-primary oo-border-color oo-border-radius ee-border-style_solid ee-width_22 oo-padding ee-position_fixed ee-bottom_6 ee-right_2", children: [
    /* @__PURE__ */ c("div", { className: "ee-background-color_white ee-height_auto ee-overflow_auto ee-height_18 oo-border-color oo-border-weight ee-border-style_solid oo-border-radius", children: /* @__PURE__ */ c(He, {}) }),
    /* @__PURE__ */ c("div", { className: "oo-padding ee-padding-left_0 ee-padding-right_0 ee-padding-bottom_0", children: /* @__PURE__ */ c(je, {}) })
  ] });
}, Ye = () => {
  const { togglePopover: e } = H();
  return /* @__PURE__ */ c("button", { className: "ee-width_2 ee-height_2 ee-background-color_black ee-position_fixed ee-bottom_2 ee-right_2 ee-border-style_solid oo-border-color oo-border-radius oo-border-weight", onClick: () => e() });
}, Je = () => /* @__PURE__ */ c(ie, { children: /* @__PURE__ */ c(he, { children: /* @__PURE__ */ c(pe, { children: /* @__PURE__ */ y("div", { className: "ee-font-family_monospace", children: [
  /* @__PURE__ */ c($e, {}),
  /* @__PURE__ */ c(Ye, {})
] }) }) }) });
export {
  Je as ThemeBuilder
};
