/* Rooted — presentation logic.
   Reads the study from window.ROOTED (content.js) and displays it.
   No dependencies, no network calls. */
(function () {
  "use strict";

  var R = window.ROOTED;
  var study = R.study, weeks = R.weeks, sessions = R.sessions;
  var app = document.getElementById("app");

  var STAGES = [
    { key: "read", label: "Read" },
    { key: "understand", label: "Understand" },
    { key: "remember", label: "Remember" },
    { key: "respond", label: "Respond" },
    { key: "pray", label: "Pray" }
  ];

  /* ---------- Storage (optional; everything works without it) ---------- */
  var store = (function () {
    var ok = false;
    try { localStorage.setItem("rooted.test", "1"); localStorage.removeItem("rooted.test"); ok = true; } catch (e) {}
    return {
      ok: ok,
      get: function (key, fallback) {
        if (!ok) return fallback;
        try { var v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
      },
      set: function (key, value) {
        if (!ok) return;
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
      }
    };
  })();

  /* place = where she is in the study: { id, stage, done } */
  var place = store.get("rooted.place", null);
  if (!place || !byId(place.id)) place = null;
  var notes = store.get("rooted.notes", {}) || {};
  var finishedJustNow = false;   // true after "Finish for today", until the app is reopened
  var firstPaint = true;
  var answers = {};              // in-memory state of the Remember interactions
  var current = { name: "home" };

  /* ---------- Small helpers ---------- */
  function byId(id) { for (var i = 0; i < sessions.length; i++) if (sessions[i].id === id) return sessions[i]; return null; }
  function weekOf(s) { for (var i = 0; i < weeks.length; i++) if (weeks[i].number === s.week) return weeks[i]; return weeks[0]; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* Turns the light markup used in content.js into HTML. */
  function fmt(s) {
    return esc(s)
      .replace(/\[\[(.+?)\]\]/g, '“<span class="q">$1</span>”')
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/'/g, "’");
  }
  function plain(s) { return String(s).replace(/\[\[|\]\]|\*/g, "").replace(/'/g, "’"); }

  function bibleLink(s) {
    return study.bibleUrl
      .replace("{passage}", encodeURIComponent(s.search || s.passage))
      .replace("{translation}", encodeURIComponent(study.translation));
  }

  /* The session the Continue button opens, and at which step. */
  function upNext() {
    if (!place) return { session: sessions[0], stage: 0, state: "new" };
    if (place.done) {
      var next = byId(place.id + 1);
      if (!next) return { session: byId(place.id), stage: 0, state: "complete" };
      return { session: next, stage: 0, state: "next" };
    }
    return { session: byId(place.id), stage: place.stage || 0, state: place.stage ? "midway" : "next" };
  }

  /* ---------- Navigation ---------- */
  function hashFor(v) { return v.name === "home" ? "#home" : "#s" + v.id + "-" + STAGES[v.stage].key; }
  function parseHash() {
    var m = /^#s(\d+)-([a-z]+)$/.exec(location.hash || "");
    if (m) {
      var s = byId(Number(m[1])), st = -1;
      for (var i = 0; i < STAGES.length; i++) if (STAGES[i].key === m[2]) st = i;
      if (s && st >= 0) return { name: "session", id: s.id, stage: st };
    }
    return { name: "home" };
  }
  function same(a, b) { return a.name === b.name && a.id === b.id && a.stage === b.stage; }

  function go(v, replace) {
    show(v);
    var h = hashFor(v);
    if (location.hash !== h) {
      try { if (replace) location.replace(h); else location.hash = h; } catch (e) {}
    }
  }
  window.addEventListener("hashchange", function () {
    var v = parseHash();
    if (!same(v, current)) show(v);
  });

  function show(v) {
    current = v;
    if (v.name === "session") {
      rememberPlace(v);
      renderSession(v);
    } else {
      renderHome();
    }
    window.scrollTo(0, 0);
    var head = app.querySelector("[data-focus]");
    if (head && !firstPaint) { try { head.focus({ preventScroll: true }); } catch (e) { head.focus(); } }
    firstPaint = false;
  }

  /* Opening an earlier session to revisit it does not move her place in the study. */
  function rememberPlace(v) {
    var here = place ? (place.done ? place.id + 1 : place.id) : 1;
    if (v.id < here) return;
    if (place && place.done && place.id === v.id) return;
    place = { id: v.id, stage: v.stage, done: false };
    store.set("rooted.place", place);
    finishedJustNow = false;
  }

  function finish(id) {
    var here = place ? (place.done ? place.id + 1 : place.id) : 1;
    if (id >= here) {
      place = { id: id, stage: 0, done: true };
      store.set("rooted.place", place);
    }
    finishedJustNow = true;
    go({ name: "home" });
  }

  /* ---------- Home ---------- */
  var SPRIG =
    '<svg class="sprig" viewBox="0 0 160 186" aria-hidden="true" focusable="false">' +
    '<path class="ground" d="M44 112 H116"/>' +
    '<path class="root draw d2" pathLength="1" d="M80 112 C81 130 78 148 80 170"/>' +
    '<path class="root draw d2" pathLength="1" d="M80 119 C71 125 62 134 53 150"/>' +
    '<path class="root draw d2" pathLength="1" d="M80 117 C91 123 100 133 109 146"/>' +
    '<path class="root draw d2" pathLength="1" d="M79 136 C73 144 68 152 65 163"/>' +
    '<path class="root draw d2" pathLength="1" d="M80 133 C87 141 93 150 97 160"/>' +
    '<path class="root draw d2" pathLength="1" d="M62 135 C57 137 51 138 45 137"/>' +
    '<path class="root draw d2" pathLength="1" d="M100 133 C105 134 111 134 117 131"/>' +
    '<path class="stem draw" pathLength="1" d="M80 112 C78 90 83 62 80 24"/>' +
    '<path class="leaf l1" transform="translate(79.5 96) rotate(-28) scale(.95)" d="M0 0 C9 -11 27 -13 38 -2 C27 9 9 9 0 0 Z"/>' +
    '<path class="leaf l2" transform="translate(80 82) rotate(-152) scale(.9)" d="M0 0 C9 -9 27 -9 38 2 C27 13 9 11 0 0 Z"/>' +
    '<path class="leaf l3" transform="translate(81 66) rotate(-32) scale(.8)" d="M0 0 C9 -11 27 -13 38 -2 C27 9 9 9 0 0 Z"/>' +
    '<path class="leaf l4" transform="translate(81.5 52) rotate(-148) scale(.7)" d="M0 0 C9 -9 27 -9 38 2 C27 13 9 11 0 0 Z"/>' +
    '<path class="leaf l5" transform="translate(81 39) rotate(-38) scale(.55)" d="M0 0 C9 -11 27 -13 38 -2 C27 9 9 9 0 0 Z"/>' +
    '<path class="bud" transform="translate(80 26) rotate(-90) scale(.42)" d="M0 0 C9 -12 27 -12 38 0 C27 12 9 12 0 0 Z"/>' +
    "</svg>";

  var LEAFMARK =
    '<svg class="leafmark" viewBox="0 0 64 24" aria-hidden="true" focusable="false">' +
    '<path d="M2 12 H62" stroke="#e2d9c4" stroke-width="1.5" stroke-linecap="round"/>' +
    '<path d="M32 12 C36 5 45 4 50 10 C45 15 37 16 32 12 Z" fill="#e6ecdf" stroke="#50644c" stroke-width="1.2" stroke-linejoin="round"/>' +
    '<path d="M32 12 C28 19 19 20 14 14 C19 9 27 8 32 12 Z" fill="#f4e6e2" stroke="#8f5f5d" stroke-width="1.2" stroke-linejoin="round"/>' +
    "</svg>";

  function renderHome() {
    var up = upNext(), s = up.session, w = weekOf(s);
    var card;

    if (up.state === "complete") {
      card =
        '<p class="kicker">The study is complete</p>' +
        '<h2 id="today-h" tabindex="-1" data-focus>You have read the Gospel of Mark.</h2>' +
        '<p class="rest">All eighteen sessions stay open below whenever you want to return to one.</p>';
    } else if (finishedJustNow) {
      card =
        '<p class="kicker">That is all for today</p>' +
        '<h2 id="today-h" tabindex="-1" data-focus>Go in peace.</h2>' +
        '<p class="rest">Next time: session ' + s.id + ", " + esc(s.title) + " (" + esc(s.passage) + ").</p>" +
        '<button class="btn-text" data-act="continue" style="align-self:flex-start">Begin it now</button>';
    } else {
      var kicker = up.state === "new" ? "Begin here"
        : up.state === "midway" ? "You stopped at " + STAGES[up.stage].label
        : "Up next";
      card =
        '<p class="kicker">' + kicker + "</p>" +
        '<h2 id="today-h" tabindex="-1" data-focus>' + esc(s.title) + "</h2>" +
        '<p class="ref">' + esc(s.passage) + "</p>" +
        '<p class="where">Session ' + s.id + " of " + sessions.length + ", week " + w.number + "</p>" +
        '<button class="btn btn-primary btn-block" data-act="continue">' +
        (up.state === "new" ? "Begin the study" : "Continue studying") + "</button>";
    }

    var hereId = up.state === "complete" ? null : s.id;
    var list = weeks.map(function (wk) {
      var rows = sessions.filter(function (x) { return x.week === wk.number; }).map(function (x) {
        var here = x.id === hereId;
        return '<li><button class="row' + (here ? " is-here" : "") + '" data-act="open" data-id="' + x.id + '">' +
          '<span class="num" aria-hidden="true">' + x.id + "</span>" +
          '<span><span class="sr-only">Session ' + x.id + ": </span>" +
          '<span class="row-title">' + esc(x.title) + '</span><span class="row-ref">' + esc(x.passage) + "</span></span>" +
          (here ? '<span class="here">You are here</span>' : "<span></span>") +
          "</button></li>";
      }).join("");
      return '<details class="week"' + (wk.number === w.number ? " open" : "") + ">" +
        '<summary><span class="wk-num">Week ' + wk.number + "</span>" +
        '<span class="wk-title">' + esc(wk.title) + '</span><span class="wk-range">' + esc(wk.range) + "</span></summary>" +
        '<p class="wk-sum">' + fmt(wk.summary) + '</p><ol class="rows">' + rows + "</ol></details>";
    }).join("");

    var about = study.about.map(function (a) {
      return "<div><h3>" + esc(a.heading) + "</h3><p>" + fmt(a.text) + "</p></div>";
    }).join("");

    app.innerHTML =
      '<main class="home wrap' + (firstPaint ? " intro" : "") + '">' +
      '<header class="title-page">' + SPRIG +
      "<h1>" + esc(study.title) + "</h1>" +
      '<p class="sub">' + esc(study.subtitle) + "</p>" +
      '<p class="book">' + esc(study.book) + "</p></header>" +
      '<section class="today" aria-labelledby="today-h">' + card + "</section>" +
      '<section class="weeks" aria-labelledby="weeks-h"><h2 id="weeks-h">The six weeks</h2>' + list + "</section>" +
      '<details class="about"><summary>About this study</summary><div class="about-body">' + about + "</div></details>" +
      "</main>";
  }

  /* ---------- Session ---------- */
  function renderSession(v) {
    var s = byId(v.id), st = v.stage;

    var steps = STAGES.map(function (x, i) {
      return '<li><button class="step' + (i < st ? " is-past" : "") + '" data-act="stage" data-stage="' + i + '"' +
        (i === st ? ' aria-current="step"' : "") + '><span class="leaf" aria-hidden="true"></span>' + x.label + "</button></li>";
    }).join("");

    var body = [stageRead, stageUnderstand, stageRemember, stageRespond, stagePray][st](s);

    var nextLabel = st === 0 ? "I have read the passage"
      : st === STAGES.length - 1 ? "Finish for today"
      : "Next: " + STAGES[st + 1].label;
    var foot =
      (st > 0 ? '<button class="btn btn-quiet" data-act="prev">Back</button>' : "") +
      '<button class="btn btn-primary" data-act="' + (st === STAGES.length - 1 ? "finish" : "next") + '">' + nextLabel + "</button>";

    app.innerHTML =
      '<div class="session">' +
      '<header class="bar"><div class="wrap">' +
      '<div class="bar-top"><button class="home-link" data-act="home">Home</button>' +
      '<span class="bar-ref">' + esc(s.passage) + "</span></div>" +
      '<nav aria-label="Steps in this session"><ol class="steps">' + steps + "</ol></nav>" +
      "</div></header>" +
      '<main class="stage wrap" id="stage">' + body + "</main>" +
      '<div class="foot"><div class="wrap foot-in">' + foot + "</div></div>" +
      "</div>";
  }

  function stageRead(s) {
    var w = weekOf(s);
    return '<div class="stage-head"><p class="count">Session ' + s.id + ", week " + w.number + ": " + esc(w.title) + "</p>" +
      '<h1 tabindex="-1" data-focus>' + esc(s.title) + "</h1></div>" +
      (s.read.context ? '<p class="aside">' + fmt(s.read.context) + "</p>" : "") +
      "<p>" + fmt(s.read.intro) + "</p>" +
      '<div class="watch"><p class="label">As you read, notice</p><p class="ask">' + fmt(s.read.watchFor) + "</p></div>" +
      '<div class="read-actions"><p class="passage">' + esc(s.passage) + "</p>" +
      '<a class="btn btn-quiet" href="' + esc(bibleLink(s)) + '" target="_blank" rel="noopener">Open the passage in the ' + esc(study.translation) + "</a>" +
      '<p class="small">The link opens BibleGateway in a new tab. Your own Bible works just as well. Come back here when you have read it.</p></div>';
  }

  function stageUnderstand(s) {
    return '<div class="stage-head"><h2 tabindex="-1" data-focus>Understand</h2>' +
      '<p class="lede">' + esc(s.passage) + "</p></div>" +
      s.understand.map(function (u) {
        return '<section class="u u-' + u.kind + '"><h3>' + esc(study.labels[u.kind] || "") + "</h3><p>" + fmt(u.text) + "</p></section>";
      }).join("");
  }

  function stageRemember(s) {
    return '<div class="stage-head"><h2 tabindex="-1" data-focus>Remember</h2>' +
      '<p class="lede">Try each one from memory before you check. Nothing is scored.</p></div>' +
      s.remember.map(function (_, i) { return '<div data-ix="' + i + '">' + interaction(s, i) + "</div>"; }).join("");
  }

  function stageRespond(s) {
    var note = "";
    if (store.ok) {
      var val = notes[s.id] || "";
      note = '<details class="note"' + (val ? " open" : "") + "><summary>Keep a one-line note (optional)</summary>" +
        '<label class="sr-only" for="note-' + s.id + '">A short note for this session</label>' +
        '<textarea id="note-' + s.id + '" rows="2" maxlength="200" data-note="' + s.id + '" placeholder="One thing to remember">' + esc(val) + "</textarea>" +
        '<p class="small"><span>Kept only on this device.</span><span id="note-state" aria-live="polite"></span></p></details>';
    }
    return '<div class="stage-head"><h2 tabindex="-1" data-focus>Respond</h2>' +
      '<p class="lede">Think it over quietly, or answer aloud.</p></div>' +
      '<p class="reflect">' + fmt(s.respond.reflect) + "</p>" +
      '<div class="carry"><p class="label">To carry into the week</p><p>' + fmt(s.respond.practice) + "</p></div>" + note;
  }

  function stagePray(s) {
    return '<div class="stage-head"><h2 tabindex="-1" data-focus>Pray</h2></div>' +
      '<p class="prayer">' + fmt(s.prayer) + "</p>" + LEAFMARK +
      '<p class="after-prayer">Stay as long as you like and keep praying in your own words.</p>';
  }

  /* ---------- Remember interactions ---------- */
  function key(s, i) { return s.id + ":" + i; }

  function lookBack(item) {
    if (!item.review) return "";
    var b = byId(item.review);
    return '<p class="back">Looking back to session ' + item.review + (b ? ", " + esc(b.passage) : "") + "</p>";
  }

  /* A fixed shuffle, so the order is the same every time a session is opened. */
  function shuffled(n) {
    var known = { 3: [2, 0, 1], 4: [2, 0, 3, 1], 5: [3, 0, 4, 1, 2] };
    if (known[n]) return known[n];
    var out = []; for (var i = n - 1; i >= 0; i--) out.push(i); return out;
  }

  function interaction(s, i) {
    var item = s.remember[i], a = answers[key(s, i)] || {}, html = lookBack(item);

    if (item.type === "recall") {
      html += '<p class="prompt">' + fmt(item.prompt) + "</p>";
      html += a.open
        ? '<div class="reveal" tabindex="-1" data-refocus><span class="label">Answer</span>' + fmt(item.answer) + "</div>"
        : '<p class="hint">Answer in your head or aloud first.</p><button class="btn btn-quiet" data-act="reveal" data-i="' + i + '">Show the answer</button>';
    }

    else if (item.type === "compare") {
      html += '<div class="pair"><div><h4>' + fmt(item.a.label) + "</h4><p>" + fmt(item.a.text) + "</p></div>" +
        "<div><h4>" + fmt(item.b.label) + "</h4><p>" + fmt(item.b.text) + "</p></div></div>" +
        '<p class="prompt">' + fmt(item.question) + "</p>";
      html += a.open
        ? '<div class="reveal" tabindex="-1" data-refocus><span class="label">One way to put it</span>' + fmt(item.answer) + "</div>"
        : '<p class="hint">Decide what you would say first.</p><button class="btn btn-quiet" data-act="reveal" data-i="' + i + '">Show an answer</button>';
    }

    else if (item.type === "choice") {
      html += '<p class="prompt">' + fmt(item.prompt) + '</p><p class="hint">Choose the reading you think the passage supports best. You can try the others afterward.</p><ul class="opts">';
      item.options.forEach(function (o, j) {
        var on = a.picked === j;
        html += '<li><button class="opt' + (on && !o.best ? " is-other" : "") + '" aria-pressed="' + (on ? "true" : "false") + '" data-act="pick" data-i="' + i + '" data-j="' + j + '"' +
          (on ? " data-refocus" : "") + ">" + fmt(o.text) + "</button>";
        if (on) {
          html += '<div class="opt-note' + (o.best ? "" : " is-other") + '" role="status"><span class="label">' +
            (o.best ? "Best supported by the passage." : "Worth a second look.") + "</span> " + fmt(o.note) + "</div>";
        }
        html += "</li>";
      });
      html += "</ul>";
    }

    else if (item.type === "sequence") {
      var order = a.order || [], n = item.items.length;
      html += '<p class="prompt">' + fmt(item.prompt) + "</p>";
      if (a.shown) {
        html += '<ol class="seq" data-refocus tabindex="-1">' + item.items.map(function (t, k) {
          return '<li class="seq-item is-placed is-right"><span class="badge">' + (k + 1) + "</span><span>" + fmt(t) + "</span></li>";
        }).join("") + '</ol><div class="reveal"><span class="label">The order in Mark</span>' + fmt(item.explain) + "</div>";
      } else {
        html += '<p class="hint">Tap them in order, first to last. Tap again to take one back.</p><ul class="seq">';
        shuffled(n).forEach(function (k) {
          var pos = order.indexOf(k), cls = "seq-item";
          if (pos >= 0) cls += " is-placed";
          if (a.checked && pos >= 0) cls += pos === k ? " is-right" : " is-moved";
          html += '<li><button class="' + cls + '" data-act="place" data-i="' + i + '" data-k="' + k + '"' +
            ' aria-label="' + esc(plain(item.items[k])) + (pos >= 0 ? ", placed " + (pos + 1) : ", not placed") + '">' +
            '<span class="badge" aria-hidden="true">' + (pos >= 0 ? pos + 1 : "") + "</span><span>" + fmt(item.items[k]) + "</span></button></li>";
        });
        html += "</ul>";
        var all = order.length === n;
        var right = all && order.every(function (k, p) { return k === p; });
        html += '<div class="seq-actions">';
        if (a.checked && right) {
          html += '<p class="seq-status" role="status">That is the order Mark gives.</p>' +
            '<button class="btn btn-quiet" data-act="seq-show" data-i="' + i + '" data-refocus>See why it matters</button>';
        } else if (a.checked) {
          html += '<p class="seq-status" role="status">Some are in a different place from Mark’s order (marked in rose). Move them, or see the order.</p>' +
            '<button class="btn btn-quiet" data-act="seq-show" data-i="' + i + '" data-refocus>Show the order</button>';
        } else if (all) {
          html += '<button class="btn btn-quiet" data-act="seq-check" data-i="' + i + '" data-refocus>Check the order</button>';
        } else {
          html += '<button class="btn-text" data-act="seq-show" data-i="' + i + '">Show the order</button>';
        }
        html += "</div>";
      }
    }

    return '<section class="ix">' + html + "</section>";
  }

  function updateInteraction(i, focusSelector) {
    var s = byId(current.id), holder = app.querySelector('[data-ix="' + i + '"]');
    if (!holder) return;
    holder.innerHTML = interaction(s, i);
    var target = holder.querySelector(focusSelector || "[data-refocus]");
    if (target) { try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); } }
  }

  /* ---------- Events ---------- */
  app.addEventListener("click", function (ev) {
    var el = ev.target.closest ? ev.target.closest("[data-act]") : null;
    if (!el) return;
    var act = el.getAttribute("data-act");
    var i = Number(el.getAttribute("data-i"));
    var s = current.name === "session" ? byId(current.id) : null;
    var a = s ? (answers[key(s, i)] = answers[key(s, i)] || {}) : null;

    switch (act) {
      case "continue": { var up = upNext(); go({ name: "session", id: up.session.id, stage: up.stage }); break; }
      case "open": {
        var id = Number(el.getAttribute("data-id")), up2 = upNext();
        go({ name: "session", id: id, stage: (up2.state !== "complete" && up2.session.id === id) ? up2.stage : 0 });
        break;
      }
      case "home": go({ name: "home" }); break;
      case "stage": go({ name: "session", id: current.id, stage: Number(el.getAttribute("data-stage")) }, true); break;
      case "next": go({ name: "session", id: current.id, stage: Math.min(current.stage + 1, STAGES.length - 1) }, true); break;
      case "prev": go({ name: "session", id: current.id, stage: Math.max(current.stage - 1, 0) }, true); break;
      case "finish": finish(current.id); break;

      case "reveal": a.open = true; updateInteraction(i); break;
      case "pick": a.picked = Number(el.getAttribute("data-j")); updateInteraction(i); break;
      case "place": {
        var k = Number(el.getAttribute("data-k"));
        a.order = a.order || [];
        var pos = a.order.indexOf(k);
        if (pos >= 0) a.order.splice(pos, 1); else a.order.push(k);
        a.checked = false;
        updateInteraction(i, '[data-k="' + k + '"]');
        break;
      }
      case "seq-check": a.checked = true; updateInteraction(i); break;
      case "seq-show": a.shown = true; updateInteraction(i); break;
    }
  });

  var noteTimer = null;
  app.addEventListener("input", function (ev) {
    var id = ev.target.getAttribute && ev.target.getAttribute("data-note");
    if (!id) return;
    var text = ev.target.value.replace(/\s+/g, " ").slice(0, 200);
    if (text.trim()) notes[id] = text; else delete notes[id];
    store.set("rooted.notes", notes);
    var state = document.getElementById("note-state");
    if (state) {
      state.textContent = "Saved";
      clearTimeout(noteTimer);
      noteTimer = setTimeout(function () { state.textContent = ""; }, 1500);
    }
  });

  /* ---------- Start ---------- */
  show(parseHash());

  /* Offline support when the app is hosted on its own site (see README). */
  if ("serviceWorker" in navigator && document.querySelector('link[rel="manifest"]') && location.protocol === "https:") {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
