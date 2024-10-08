/*
 * Braze Web SDK v5.3.2
 * (c) Braze, Inc. 2024 - http://braze.com
 * License available at https://github.com/braze-inc/braze-web-sdk/blob/master/LICENSE
 * Compiled on 2024-07-10
 */
const h = {
    A: function(a) {
        if (void 0 !== a || void 0 === h.m) h.m = !!a;
        h.D || (h.D = !0)
    },
    M: function() {
        h.D = !1;
        h.m = void 0;
        h.j = void 0
    },
    O: function(a) {
        "function" !== typeof a ? h.info("Ignoring setLogger call since logger is not a function") : (h.A(), h.j = a)
    },
    P: function() {
        h.A();
        h.m ? (console.log("Disabling Braze logging"), h.m = !1) : (console.log("Enabled Braze logging"), h.m = !0)
    },
    info: function(a) {
        h.m && (a = "Braze: " + a, null != h.j ? h.j(a) : console.log(a))
    },
    warn: function(a) {
        h.m && (a = "Braze SDK Warning: " + a + " (v5.3.2)", null != h.j ?
            h.j(a) : console.warn(a))
    },
    error: function(a) {
        h.m && (a = "Braze SDK Error: " + a + " (v5.3.2)", null != h.j ? h.j(a) : console.error(a))
    }
};

function l() {
    const a = (c = !1) => {
        const e = (Math.random().toString(16) + "000000000").substr(2, 8);
        return c ? "-" + e.substr(0, 4) + "-" + e.substr(4, 4) : e
    };
    return a() + a(!0) + a(!0) + a()
};

function q(a) {
    if ("indexedDB" in a.parent) return a.parent.indexedDB
}

function r(a) {
    var c;
    try {
        if (null == q(a)) return !1;
        const e = null === (c = q(a)) || void 0 === c ? void 0 : c.open("Braze IndexedDB Support Test");
        e && (e.onupgradeneeded = () => e.result.close(), e.onsuccess = () => e.result.close());
        if ("undefined" !== typeof window) {
            c = window;
            const g = c.L || c.K || c.N;
            if (g && g.J && g.J.id) return a.j.info("Not using IndexedDB for storage because we are running inside an extension"), !1
        }
        return !0
    } catch (e) {
        return a.j.info("Not using IndexedDB for storage due to following error: " + e), !1
    }
}

function v(a, c, e) {
    var g;
    const d = null === (g = q(a)) || void 0 === g ? void 0 : g.open(a.h.l, a.h.VERSION);
    if (null == d) return "function" === typeof e && e(), !1;
    d.onupgradeneeded = f => {
        var b;
        a.j.info("Upgrading indexedDB " + a.h.l + " to v" + a.h.VERSION + "...");
        f = null === (b = f.target) || void 0 === b ? void 0 : b.result;
        for (const k in a.h.g) b = k, a.h.g.hasOwnProperty(k) && !f.objectStoreNames.contains(a.h.g[b]) && f.createObjectStore(a.h.g[b])
    };
    d.onsuccess = f => {
        var b;
        const k = null === (b = f.target) || void 0 === b ? void 0 : b.result;
        k.onversionchange = () => {
            k.close();
            "function" === typeof e && e();
            a.j.error("Needed to close the database unexpectedly because of an upgrade in another tab")
        };
        c(k)
    };
    d.onerror = f => {
        var b;
        a.j.info("Could not open indexedDB " + a.h.l + " v" + a.h.VERSION + ": " + (null === (b = f.target) || void 0 === b ? void 0 : b.errorCode));
        "function" === typeof e && e();
        return !0
    };
    return !0
}

function w(a, c, e, g) {
    r(a) ? v(a, d => {
        if (d.objectStoreNames.contains(c)) {
            var f = d.transaction([c], "readonly");
            f.oncomplete = () => d.close();
            f = f.objectStore(c).openCursor(null, "prev");
            f.onerror = () => {
                a.j.error("Could not open cursor for " + c + " on indexedDB " + a.h.l);
                "function" === typeof g && g()
            };
            f.onsuccess = b => {
                var k;
                b = null === (k = b.target) || void 0 === k ? void 0 : k.result;
                null != b && null != b.value && null != b.key ? e(b.key, b.value) : "function" === typeof g && g()
            }
        } else a.j.error("Could not retrieve last record from " + c + " on indexedDB " +
            a.h.l + " - " + c + " is not a valid objectStore"), "function" === typeof g && g(), d.close()
    }, g) : "function" === typeof g && g()
}
class x {
    constructor() {
        var a = y,
            c = h;
        this.h = a;
        this.j = c;
        this.parent = "undefined" === typeof window ? self : window;
        this.h = a;
        this.j = c
    }
    setItem(a, c, e, g, d) {
        if (!r(this)) return "function" === typeof d && d(), !1;
        const f = this;
        return v(this, b => {
            if (b.objectStoreNames.contains(a)) {
                var k = b.transaction([a], "readwrite");
                k.oncomplete = () => b.close();
                k = k.objectStore(a).put(e, c);
                k.onerror = () => {
                    f.j.error("Could not store object " + c + " in " + a + " on indexedDB " + f.h.l);
                    "function" === typeof d && d()
                };
                k.onsuccess = () => {
                    "function" === typeof g &&
                        g()
                }
            } else f.j.error("Could not store object " + c + " in " + a + " on indexedDB " + f.h.l + " - " + a + " is not a valid objectStore"), "function" === typeof d && d(), b.close()
        }, d)
    }
    getItem(a, c, e) {
        if (!r(this)) return !1;
        const g = this;
        return v(this, d => {
            if (d.objectStoreNames.contains(a)) {
                var f = d.transaction([a], "readonly");
                f.oncomplete = () => d.close();
                f = f.objectStore(a).get(c);
                f.onerror = () => {
                    g.j.error("Could not retrieve object " + c + " in " + a + " on indexedDB " + g.h.l)
                };
                f.onsuccess = b => {
                    var k;
                    b = null === (k = b.target) || void 0 === k ? void 0 :
                        k.result;
                    null != b && e(b)
                }
            } else g.j.error("Could not retrieve object " + c + " in " + a + " on indexedDB " + g.h.l + " - " + a + " is not a valid objectStore"), d.close()
        })
    }
    clearData() {
        if (!r(this)) return !1;
        const a = [];
        for (const e in this.h.g) {
            const g = e;
            this.h.g.hasOwnProperty(e) && this.h.g[g] !== this.h.g.B && a.push(this.h.g[g])
        }
        const c = this;
        return v(this, function(e) {
            const g = e.transaction(a, "readwrite");
            g.oncomplete = () => e.close();
            for (let d = 0; d < a.length; d++) g.objectStore(a[d]).clear().onerror = function() {
                c.j.error("Could not clear " +
                    this.source.name + " on indexedDB " + c.h.l)
            };
            g.onerror = function() {
                c.j.error("Could not clear object stores on indexedDB " + c.h.l)
            }
        })
    }
}
var y = {
    l: "AppboyServiceWorkerAsyncStorage",
    VERSION: 6,
    g: {
        o: "data",
        H: "pushClicks",
        C: "pushSubscribed",
        v: "fallbackDevice",
        F: "cardUpdates",
        B: "optOut",
        G: "pendingData",
        I: "sdkAuthenticationSignature"
    },
    s: 1
};

function z() {
    return new Promise(function(a, c) {
        w(new x, y.g.B, c, a)
    })
};

function A() {
    return new Promise(a => {
        w(new x, y.g.I, (c, e) => {
            a(e)
        }, () => {
            a(null)
        })
    })
}

function C(a, c, e) {
    h.info(`${c} due to SDK Authentication failure with error code ${e.error_code}. The data will be logged on the user's next session start.`);
    (new x).setItem(y.g.G, l(), a)
};

function D(a, c, e) {
    return new Promise(function(g, d) {
        const f = {};
        f.time = Math.floor((new Date).valueOf() / 1E3);
        f.device_id = e;
        f.api_key = a;
        f.sdk_version = "5.3.2";
        f.sdk_flavor = "amp";
        f.respond_with = {
            config: {
                config_time: 0
            }
        };
        fetch(c + "/data/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-Braze-Api-Key": a,
                "X-Braze-Last-Req-Ms-Ago": 72E5,
                "X-Braze-Req-Attempt": 1
            },
            body: JSON.stringify(f)
        }).then(function(b) {
            b.ok || h.error("Unable to get config: " + b.status);
            return b.json()
        }).then(function(b) {
            b.error &&
                (h.error("Unable to get config: " + b.error), d());
            b.auth_error && (h.error("Unable to get config due to authentication error. SDK Authentication does not support AMP pages."), d());
            if (!b.error && !b.auth_error) {
                b = b.config.vapid_public_key;
                var k = "=".repeat((4 - b.length % 4) % 4);
                b = (b + k).replace(/\-/g, "+").replace(/_/g, "/");
                b = atob(b);
                k = new Uint8Array(b.length);
                for (let m = 0; m < b.length; ++m) k[m] = b.charCodeAt(m);
                g({
                    userVisibleOnly: !0,
                    applicationServerKey: k
                })
            }
        }).catch(function(b) {
            h.error("Unable to get config: " + b);
            d()
        })
    })
}

function E(a, c, e, g, d, f, b, k, m) {
    return A().then(p => new Promise(function(O, B) {
        const t = {};
        t.device_id = e;
        t.api_key = a;
        t.sdk_version = "5.3.2";
        null != f && (t.sdk_flavor = f);
        var u = null;
        let H = null,
            I = null;
        d && (I = d.endpoint, d.getKey && (u = btoa(String.fromCharCode.apply(null, new Uint8Array(d.getKey("p256dh")))), H = btoa(String.fromCharCode.apply(null, new Uint8Array(d.getKey("auth"))))));
        t.time = Math.floor((new Date).valueOf() / 1E3);
        t.attributes = [{
            user_id: g,
            push_token: I,
            custom_push_public_key: u,
            custom_push_user_auth: H
        }];
        u = {
            "Content-type": "application/json",
            "X-Braze-Api-Key": t.api_key,
            "X-Braze-Last-Req-Ms-Ago": 72E5,
            "X-Braze-Req-Attempt": 1
        };
        p && m && (u["X-Braze-Auth-Signature"] = p);
        fetch(c + "/data/", {
            method: "POST",
            headers: u,
            body: JSON.stringify(t)
        }).then(function(n) {
            n.ok || h.error(k + " " + n.status);
            return n.json()
        }).then(function(n) {
            n.error && (h.error(k + " " + n.error), B());
            n.auth_error && (C(t, k, n.auth_error), B());
            n.error || n.auth_error || (h.info(b), O())
        }).catch(function(n) {
            h.error(k + " " + n);
            B()
        })
    }))
}

function F(a, c) {
    return z().then(function() {
        return A()
    }).then(function(e) {
        w(new x, y.g.o, function(g, d) {
            g = Math.floor((new Date).valueOf() / 1E3);
            const f = d.data;
            f.time = g;
            a.time = g;
            a.user_id = d.userId;
            f.events = [a];
            f.sdk_version = "5.3.2";
            g = {
                "Content-Type": "application/json",
                "X-Braze-Api-Key": f.api_key,
                "X-Braze-Last-Req-Ms-Ago": 72E5,
                "X-Braze-Req-Attempt": 1
            };
            e && d.sdkAuthEnabled && (g["X-Braze-Auth-Signature"] = e);
            fetch(d.baseUrl + "/data/", {
                method: "POST",
                headers: g,
                body: JSON.stringify(f)
            }).then(function(b) {
                b.ok ||
                    h.error("Unable to log " + c + ": " + b.status);
                return b.json()
            }).then(function(b) {
                b.error && h.error("Unable to log " + c + ":", b.error);
                b.auth_error && C(f, "Unable to log " + c, b.auth_error);
                b.error || b.auth_error || h.info("Successfully logged " + c);
                return Promise.resolve()
            }).catch(function(b) {
                h.error("Unable to log " + c + ":", b);
                return Promise.resolve()
            })
        })
    }).catch(function() {
        return Promise.reject("Not sending data to Braze backend due to opt-out.")
    })
};

function G() {
    const a = self.location.search.match(/apiKey=([^&]+)/i);
    if (a) return a[1];
    h.error("Missing API key in query params.");
    return null
}

function J() {
    const a = self.location.search.match(/baseUrl=([^&]+)/i);
    if (a) return a[1];
    h.error("Missing base URL in query params.");
    return null
};

function K(a, c) {
    self.clients.matchAll().then(function(e) {
        for (let g = 0; g < e.length; g++) e[g].postMessage({
            command: a,
            payload: c
        })
    })
}

function L(a, c, e, g, d) {
    return D(a, c, e).then(function(f) {
        return self.registration.pushManager.subscribe(f)
    }).then(function(f) {
        K("amp-web-push-subscribe", null);
        return E(a, c, e, g, f, "amp", "Successfully sent AMP push subscription to Braze backend.", "Unable to send AMP push subscription to Braze backend.", d)
    }).catch(function() {
        h.error("Failed to subscribe for AMP push.");
        return Promise.reject()
    })
}

function M() {
    self.registration.pushManager.getSubscription().then(function(a) {
        return a ? self.registration.pushManager.permissionState(a.options) : null
    }).then(function(a) {
        K("amp-web-push-subscription-state", "granted" === a)
    })
}

function N() {
    const a = new x;
    return (new Promise(function(c, e) {
        w(a, y.g.o, function(g, d) {
            L(d.data.api_key, d.baseUrl, d.data.device_id, d.userId, d.sdkAuthEnabled).then(function() {
                c()
            }).catch(function() {
                e()
            })
        }, function() {
            const g = G(),
                d = J();
            w(a, y.g.v, function(f, b) {
                L(g, d, b, null).then(function() {
                    c()
                }).catch(function() {
                    e()
                })
            }, function() {
                const f = l();
                (new Promise(function(b, k) {
                    a.setItem(y.g.v, y.s, f, b, k)
                })).then(function() {
                    return L(g, d, f, null)
                }).then(function() {
                    c()
                }).catch(function() {
                    e()
                })
            })
        })
    })).then(function() {
        return new Promise(function(c,
            e) {
            a.setItem(y.g.C, y.s, !0, c, e)
        })
    })
}

function P() {
    return self.registration.pushManager.getSubscription().then(function(a) {
        return a.unsubscribe()
    }).then(function() {
        K("amp-web-push-unsubscribe", null);
        const a = new x;
        return (new Promise(function(c, e) {
            w(a, y.g.o, function(g, d) {
                E(d.data.api_key, d.baseUrl, d.data.device_id, d.userId, null, "amp", "Successfully sent AMP push unsubscription to Braze backend.", "Unable to send AMP push unsubscription to Braze backend.", d.sdkAuthEnabled).then(function() {
                    c()
                }).catch(function() {
                    e()
                })
            }, function() {
                w(a, y.g.v,
                    function(g, d) {
                        g = G();
                        const f = J();
                        E(g, f, d, null, null, "amp", "Successfully sent AMP push unsubscription to Braze backend.", "Unable to send AMP push unsubscription to Braze backend.", null).then(function() {
                            c()
                        }).catch(function() {
                            e()
                        })
                    },
                    function() {
                        h.error("No device found during unsubscription.");
                        e()
                    })
            })
        })).then(function() {
            return new Promise(function(c, e) {
                a.setItem(y.g.C, y.s, !1, c, e)
            })
        })
    }).catch(function() {
        h.error("Failed to unsubscribe for AMP push.");
        return Promise.reject()
    })
};

function Q(a, c) {
    a.waitUntil(c.catch(function(e) {
        e && h.info(e)
    }))
};
h.A(!0);

function R(a) {
    if (null == a || 0 === Object.keys(a).length) return Promise.reject("Server has no pending push message for this registration. Ignoring push event.");
    const c = a.t,
        e = a.a,
        g = a.i,
        d = a.img,
        f = {
            url: a.u,
            ab_ids: {
                cid: a.cid
            },
            extra: a.e
        },
        b = a.ri;
    a.ab_push_fetch_test_triggers_key && (h.info("Service worker 5.3.2 found trigger fetch key in push payload."), f.fetchTriggers = !0);
    var k = a.ab_cd;
    null != k && (new x).setItem(y.g.F, (new Date).valueOf(), {
        userId: a.ab_cd_uid,
        card: k
    });
    a = a.pab || [];
    k = {};
    for (let m = 0; m < a.length; m++)
        if (null !=
            a[m] && null != a[m].action) {
            let p;
            switch (a[m].a) {
                case "ab_none":
                    p = null;
                    break;
                case "ab_uri":
                    if (p = a[m].u, null == p || "" === p) p = "/"
            }
            k[a[m].action] = p
        }
    f.actionTargets = k;
    h.info("Displaying push notification!");
    return self.registration.showNotification(c, {
        body: e,
        icon: g,
        image: d,
        data: f,
        actions: a,
        requireInteraction: b
    }).catch(function(m) {
        h.info(m)
    })
}
self.addEventListener("install", function(a) {
    a.waitUntil(self.skipWaiting())
});
self.addEventListener("activate", function() {
    return self.clients.claim()
});
self.addEventListener("push", function(a) {
    h.info("Service worker 5.3.2 received push");
    null != a.data && null != a.data.json ? Q(a, R(a.data.json())) : Q(a, new Promise(function(c, e) {
        w(new x, y.g.o, function(g, d) {
            const f = d.data;
            z().then(function() {
                return fetch(d.baseUrl + "/web_push/", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "X-Braze-Api-Key": f.api_key
                    },
                    body: JSON.stringify(f)
                })
            }).then(function(b) {
                return b.ok ? b.json() : (h.error("Unable to retrieve push payload from server: " + b.status), Promise.reject())
            }).then(function(b) {
                h.info("Retrieved push payload from server");
                c(R(b))
            }).catch(function(b) {
                e("Unable to retrieve push payload from server or user has opt-out: " + b)
            })
        })
    }))
});
self.addEventListener("notificationclick", function(a) {
    if (a && a.notification && (a.notification.close(), null != Notification && Notification.prototype.hasOwnProperty("data") && a.notification.data && a.notification.data.ab_ids)) {
        var c = null != a.action && "" !== a.action;
        var e = c ? F({
            name: "ca",
            data: {
                cid: a.notification.data.ab_ids.cid,
                a: a.action
            }
        }, "push button click") : F({
            name: "pc",
            data: {
                cid: a.notification.data.ab_ids.cid
            }
        }, "push click");
        if (!c) {
            const b = {
                lastClick: (new Date).valueOf(),
                trackingString: a.notification.data.ab_ids.cid
            };
            a.notification.data.fetchTriggers && (b.fetchTriggers = !0);
            const k = new x;
            var g = e.then(function() {
                return new Promise(function(m, p) {
                    k.setItem(y.g.H, y.s, b, m, p)
                })
            }).catch(function() {
                h.info("Not storing push click due to no click event being created.");
                return Promise.resolve()
            })
        }
        if (c) var d = a.notification.data.actionTargets[a.action];
        else if (d = a.notification.data.url, null == d || "" === d) d = "/";
        var f;
        null != d && "" !== d && (f = clients.matchAll({
            type: "window"
        }).then(function() {
            if (clients.openWindow) return clients.openWindow(d)
        }));
        Q(a, Promise.all([f, g]))
    }
});
self.addEventListener("pushsubscriptionchange", function(a) {
    Q(a, z().then(function() {
        let c = {
            userVisibleOnly: !0
        };
        null != a.oldSubscription && (c = a.oldSubscription.options);
        return self.registration.pushManager.subscribe(c)
    }).then(function(c) {
        return new Promise(function(e, g) {
            w(new x, y.g.o, function(d, f) {
                E(f.data.api_key, f.baseUrl, f.data.device_id, f.userId, c, null, "Successfully resubscribed user after expiration", "Unable to resubscribe user", f.sdkAuthEnabled).then(function() {
                    e()
                }).catch(function() {
                    g()
                })
            })
        })
    }).catch(function() {
        return Promise.reject("Not resubscribing user for push due to opt-out.")
    }))
});
self.addEventListener("message", function(a) {
    a.waitUntil && a.data.command && a.waitUntil(z().then(function() {
        switch (a.data.command) {
            case "amp-web-push-subscription-state":
                return M(), Promise.resolve();
            case "amp-web-push-subscribe":
                return N();
            case "amp-web-push-unsubscribe":
                return P();
            default:
                return Promise.resolve()
        }
    }).catch(function() {
        h.info("Ignoring message from amp-web-push due to opt-out.");
        return Promise.resolve()
    }))
});