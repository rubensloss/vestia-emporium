/* ==========================================================================
   Emporium · Moda Feminina · Smooth Single-Figure 360° Fitting Engine
   ========================================================================== */

(() => {
  'use strict';

  const EMPORIUM_WHATSAPP = '5527981512375';
  const CUTOUT_VER = '?v=8';

  const LOOKS = [
    {
      id: 'v1',
      name: 'Vestido Longo Terracota',
      shortName: 'Vestido Terracota',
      cat: 'vestidos',
      price: 289.90,
      thumb: 'img/p01.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/v1_000.webp' + CUTOUT_VER },
        { deg: 45, label: '3/4 Dir.', src: 'img/cutouts/v1_045.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/v1_090.webp' + CUTOUT_VER },
        { deg: 135, label: 'Costas Dir.', src: 'img/cutouts/v1_135.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/v1_180.webp' + CUTOUT_VER },
        { deg: 225, label: 'Costas Esq.', src: 'img/cutouts/v1_225.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/v1_270.webp' + CUTOUT_VER },
        { deg: 315, label: '3/4 Esq.', src: 'img/cutouts/v1_315.webp' + CUTOUT_VER }
      ],
      colorName: 'Terracota',
      colorHex: '#B5683B',
      aura: 'rgba(181, 104, 59, 0.24)',
      sizes: { P: 1, M: 1, G: 0, GG: 1 },
      tag: 'Novidade',
      fitType: 'fluido',
      fitDetails: {
        short: 'barra alongada — ideal com salto bloco ou sandália de 6 cm.',
        mid: 'caimento fluido na altura do tornozelo com movimento leve.',
        tall: 'comprimento midi-longo elegante destacando o colo.'
      }
    },
    {
      id: 'v2',
      name: 'Vestido Tricô Marinho',
      shortName: 'Tricô Marinho',
      cat: 'vestidos',
      price: 259.90,
      thumb: 'img/p04.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/v2_000.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/v2_090.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/v2_180.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/v2_270.webp' + CUTOUT_VER }
      ],
      colorName: 'Azul Marinho',
      colorHex: '#24304F',
      aura: 'rgba(54, 78, 134, 0.26)',
      sizes: { P: 1, M: 1, G: 1, GG: 0 },
      tag: 'Novidade',
      fitType: 'ajustado',
      fitDetails: {
        short: 'trama estruturada que alonga a silhueta e marca a cintura.',
        mid: 'modelagem em tricô com elasticidade confortável e barrado vazado.',
        tall: 'caimento impecável com barrado vazado na altura da panturrilha.'
      }
    },
    {
      id: 'c1',
      name: 'Conjunto Vermelho Saia Longa',
      shortName: 'Conjunto Vermelho',
      cat: 'conjuntos',
      price: 339.90,
      thumb: 'img/p06.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/c1_000.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/c1_090.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/c1_180.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/c1_270.webp' + CUTOUT_VER }
      ],
      colorName: 'Vermelho Carmim',
      colorHex: '#C8262B',
      aura: 'rgba(188, 44, 50, 0.24)',
      sizes: { P: 1, M: 1, G: 1, GG: 0 },
      tag: 'Destaque',
      fitType: 'estruturado',
      fitDetails: {
        short: 'cintura alta que valoriza a proporção e alonga as pernas.',
        mid: 'top estruturado tomara-que-caia com saia evasê de caimento nobre.',
        tall: 'caimento de gala leve — combina perfeitamente com sandália fina.'
      }
    },
    {
      id: 'c2',
      name: 'Macacão Pantalona Rosé',
      shortName: 'Macacão Rosé',
      cat: 'conjuntos',
      price: 249.90,
      thumb: 'img/p05_front.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/c2_000.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/c2_090.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/c2_180.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/c2_270.webp' + CUTOUT_VER }
      ],
      colorName: 'Rosé',
      colorHex: '#E9B9C0',
      aura: 'rgba(214, 152, 162, 0.24)',
      sizes: { P: 0, M: 1, G: 1, GG: 0 },
      tag: 'Fluido',
      fitType: 'fluido',
      fitDetails: {
        short: 'lastex no busto com alças reguláveis para ajustar a altura ideal.',
        mid: 'pantalona leve com ajuste no tornozelo e conforto o dia todo.',
        tall: 'silhueta leve com elástico na barra que adapta perfeitamente.'
      }
    },
    {
      id: 'l1',
      name: 'Calça Jeans Wide Leg',
      shortName: 'Jeans Wide Leg',
      cat: 'calcas',
      price: 229.90,
      thumb: 'img/p03.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/l1_000.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/l1_090.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/l1_180.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/l1_270.webp' + CUTOUT_VER }
      ],
      colorName: 'Jeans Claro',
      colorHex: '#9DB5D3',
      aura: 'rgba(122, 155, 196, 0.24)',
      sizes: { P: 1, M: 1, G: 1, GG: 1 },
      tag: 'Clássico',
      fitType: 'estruturado',
      fitDetails: {
        short: 'cintura alta bem desenhada — pode pedir ajuste de 2 cm na barra.',
        mid: 'perna ampla reta que entrega elegância imediata com salto ou tênis.',
        tall: 'comprimento generoso que cobre o peito do pé sem encurtar.'
      }
    },
    {
      id: 'l2',
      name: 'Calça Renda Café',
      shortName: 'Calça Renda Café',
      cat: 'calcas',
      price: 219.90,
      thumb: 'img/p11.jpg',
      angles: [
        { deg: 0, label: 'Frente', src: 'img/cutouts/l2_000.webp' + CUTOUT_VER },
        { deg: 90, label: 'Lateral', src: 'img/cutouts/l2_090.webp' + CUTOUT_VER },
        { deg: 180, label: 'Costas', src: 'img/cutouts/l2_180.webp' + CUTOUT_VER },
        { deg: 270, label: 'Lateral', src: 'img/cutouts/l2_270.webp' + CUTOUT_VER }
      ],
      colorName: 'Café',
      colorHex: '#4A3426',
      aura: 'rgba(138, 95, 68, 0.26)',
      sizes: { P: 0, M: 1, G: 1, GG: 1 },
      tag: 'Exclusivo',
      fitType: 'fluido',
      fitDetails: {
        short: 'amarração delicada no tornozelo permite regular a altura facilmente.',
        mid: 'renda texturizada com hot pant embutida e caimento sofisticado.',
        tall: 'transparência equilibrada com amarração moderna na barra.'
      }
    }
  ];

  // Application State
  const state = {
    category: 'all',
    activeId: LOOKS[0].id,
    currentDeg: 0,
    targetDeg: 0,
    renderedIndex: 0,
    autoMode: 'idle', // 'idle' | 'cw' | 'pause' | 'ccw'
    autoNextDir: 'cw',
    autoProgress: 0,
    autoPauseUntil: 0,
    autoPinned: false, // true when explicitly toggled via button/click
    isHoveringStage: false,
    isDragging: false,
    dragPointerId: null,
    dragStartX: 0,
    dragLastX: 0,
    dragVelocity: 0,
    dragMoved: false,
    lastFrameTime: 0,
    selectedSize: 'M',
    heightCm: 166,
    manequim: 'M',
    manequimNum: '40',
    biotype: 'modelo',
    favorites: new Set()
  };

  // DOM References
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const dom = {
    modelStage: $('#modelStage'),
    modelCutoutWrap: $('#modelCutoutWrap'),
    atelierFlash: $('#atelierFlash'),
    biotypeBanner: $('#biotypeBanner'),
    biotypeBannerText: $('#biotypeBannerText'),
    compassArc: $('#compassArc'),
    angleDegText: $('#angleDegText'),
    turntableHint: $('#turntableHint'),
    btnSpinBidirectional: $('#btnSpinBidirectional'),
    btnTurnCCW: $('#btnTurnCCW'),
    btnTurnCW: $('#btnTurnCW'),
    wardrobeGrid: $('#wardrobeGrid'),
    wardrobeCount: $('#wardrobeCount'),
    mobileLookStrip: $('#mobileLookStrip'),
    inspThumb: $('#inspThumb'),
    inspName: $('#inspName'),
    inspPrice: $('#inspPrice'),
    inspInstallment: $('#inspInstallment'),
    inspSwatch: $('#inspSwatch'),
    inspColorName: $('#inspColorName'),
    inspRecTag: $('#inspRecTag'),
    inspSizes: $('#inspSizes'),
    btnWhatsapp: $('#btnWhatsapp'),
    btnHeartActive: $('#btnHeartActive'),
    favCount: $('#favCount'),
    heightSlider: $('#heightSlider'),
    heightValue: $('#heightValue'),
    manequimNum: $('#manequimNum'),
    fitRecBadge: $('#fitRecBadge'),
    fitNoteText: $('#fitNoteText'),
    topFitSummary: $('#topFitSummary'),
    panelProfile: $('#panelProfile'),
    drawerScrim: $('#drawerScrim'),
    railProfile: $('#railProfile'),
    railSpin: $('#railSpin'),
    photoModal: $('#photoModal'),
    guideModal: $('#guideModal'),
    lgpdCheck: $('#lgpdCheck'),
    uploadZone: $('#uploadZone'),
    userPhotoInput: $('#userPhotoInput'),
    uploadPlaceholder: $('#uploadPlaceholder'),
    uploadPreview: $('#uploadPreview'),
    uploadHint: $('#uploadHint'),
    userPreviewImg: $('#userPreviewImg'),
    modalActiveGarment: $('#modalActiveGarment'),
    tryonProgress: $('#tryonProgress'),
    progressFill: $('#progressFill'),
    progressLabel: $('#progressLabel'),
    tryonDemoResult: $('#tryonDemoResult'),
    toast: $('#toast')
  };

  let toastTimer = null;
  let activeFrameNodes = [];
  const decodedCache = new Map();

  // Corpo Curvy / Plus: mesmos ângulos, gerados com IA (arquivos *p_*)
  LOOKS.forEach((l) => {
    l.anglesBase = l.angles;
    l.anglesPlus = l.angles.map((a) => ({
      ...a,
      src: a.src.replace(/cutouts\/([a-z]\d)_/, 'cutouts/$1p_')
    }));
  });

  function setBodySet(curvy) {
    LOOKS.forEach((l) => {
      l.angles = curvy ? l.anglesPlus : l.anglesBase;
    });
    mountLookFrames(getActiveLook());
  }

  // Helpers
  const formatBRL = (v) => 'R$ ' + Number(v).toFixed(2).replace('.', ',');
  const formatHeight = (cm) => (cm / 100).toFixed(2).replace('.', ',') + ' m';
  const normDeg = (d) => ((d % 360) + 360) % 360;
  const getVisibleLooks = () =>
    state.category === 'all' ? LOOKS : LOOKS.filter((l) => l.cat === state.category);
  const getActiveLook = () => LOOKS.find((l) => l.id === state.activeId) || LOOKS[0];

  function preloadAllCutouts() {
    LOOKS.forEach((look) => {
      [...look.anglesBase, ...look.anglesPlus].forEach((a) => {
        if (decodedCache.has(a.src)) return;
        const img = new Image();
        img.src = a.src;
        if (img.decode) {
          img.decode().catch(() => {});
        }
        decodedCache.set(a.src, img);
      });
    });
  }

  function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.remove('is-show'), 2400);
  }

  function defaultHintText() {
    return window.innerWidth <= 960
      ? 'Arraste devagar sobre a modelo ou toque para girar 360°'
      : 'Passe o mouse para giro 360° · Arraste para controlar';
  }

  // ========================================================================
  // Single-Figure 360° Smooth Bidirectional Turnaround (ZERO Ghosting!)
  // ========================================================================

  function getClosestAngleIndex(look, deg) {
    const d = normDeg(deg);
    const n = look.angles.length;
    const step = 360 / n;
    return Math.round(d / step) % n;
  }

  function mountLookFrames(look) {
    activeFrameNodes.forEach((n) => n.remove());
    activeFrameNodes = look.angles.map((a, i) => {
      const img = document.createElement('img');
      img.className = 'model-cutout' + (i === 0 ? ' is-current' : '');
      img.src = a.src;
      img.alt = `Modelo Emporium vestindo ${look.name} — ${a.label}`;
      img.decoding = 'sync';
      dom.modelCutoutWrap.appendChild(img);
      return img;
    });
    state.renderedIndex = 0;
  }

  function applySingleFigureFrame(look, idx) {
    if (!activeFrameNodes[idx]) return;
    state.renderedIndex = idx;
    activeFrameNodes.forEach((node, i) => {
      node.classList.toggle('is-current', i === idx);
    });
  }

  function updateTurntableVisuals(look, deg, angleIdx) {
    const dNorm = Math.round(normDeg(deg));
    const angleObj = look.angles[angleIdx] || look.angles[0];
    dom.angleDegText.textContent = `${dNorm}° · ${angleObj.label}`;

    // Elliptical floor ring arc (perimeter ~936)
    const frac = dNorm === 0 ? 0.12 : dNorm / 360;
    const offset = Math.round(936 * (1 - frac));
    dom.compassArc.style.strokeDashoffset = String(offset);
  }

  function applyKinetic3D(look, deg, idx) {
    const activeNode = activeFrameNodes[idx];
    if (!activeNode) return;
    const n = look.angles.length;
    const step = 360 / n;
    const slotCenter = idx * step;
    let delta = normDeg(deg) - slotCenter;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    const t = Math.max(-1, Math.min(1, delta / (step * 0.5)));
    const maxTilt = n >= 8 ? 8.5 : 11.0;
    const rotY = (-t * maxTilt).toFixed(2);
    const scaleX = (1 - Math.abs(t) * 0.012).toFixed(4);
    activeNode.style.transform = `rotateY(${rotY}deg) scaleX(${scaleX})`;
  }

  function startBidirectionalShowcase({ pinned = false } = {}) {
    state.autoMode = 'cw';
    state.autoNextDir = 'ccw';
    state.autoProgress = 0;
    state.autoPinned = pinned;
    state.dragVelocity = 0;
    dom.btnSpinBidirectional.classList.add('is-active');
    dom.railSpin.classList.add('is-active');
    dom.turntableHint.textContent = 'Girando 360° suave · Arraste para controlar';
  }

  function stopBidirectionalShowcase() {
    state.autoMode = 'idle';
    state.autoPinned = false;
    dom.btnSpinBidirectional.classList.remove('is-active');
    dom.railSpin.classList.remove('is-active');
    dom.turntableHint.textContent = defaultHintText();
  }

  function tickTurntable(now) {
    const dt = state.lastFrameTime ? Math.min(48, now - state.lastFrameTime) : 16.67;
    state.lastFrameTime = now;
    const look = getActiveLook();

    // Calm, slower, natural luxury runway pace (~7.5s per full 360° turn on 8-angle hero)
    const rad = (normDeg(state.currentDeg) * Math.PI) / 180;
    const organicPace = 0.72 + 0.44 * Math.abs(Math.sin(rad));
    const baseSpeed = look.angles.length >= 8 ? 46 : 36;
    const autoSpeed = (baseSpeed * organicPace * dt) / 1000;

    if (state.autoMode === 'cw') {
      state.targetDeg += autoSpeed;
      state.autoProgress += autoSpeed;
      if (state.autoProgress >= 360) {
        state.autoProgress = 0;
        state.autoNextDir = 'ccw';
        state.autoMode = 'pause';
        state.autoPauseUntil = now + 850;
      }
    } else if (state.autoMode === 'pause') {
      if (now >= state.autoPauseUntil) {
        state.autoMode = state.autoNextDir;
        state.autoProgress = 0;
      }
    } else if (state.autoMode === 'ccw') {
      state.targetDeg -= autoSpeed;
      state.autoProgress += autoSpeed;
      if (state.autoProgress >= 360) {
        state.autoProgress = 0;
        state.autoNextDir = 'cw';
        state.autoMode = 'pause';
        state.autoPauseUntil = now + 850;
      }
    } else if (!state.isDragging && Math.abs(state.dragVelocity) > 0.02) {
      // Silky inertial coast after releasing finger/mouse drag
      state.targetDeg += state.dragVelocity * (dt / 16.67);
      state.dragVelocity *= Math.pow(0.92, dt / 16.67);
      if (Math.abs(state.dragVelocity) <= 0.02) state.dragVelocity = 0;
    }

    // Extra-smooth gentle spring follow
    const diff = state.targetDeg - state.currentDeg;
    if (Math.abs(diff) > 0.02) {
      state.currentDeg += diff * (state.isDragging ? 0.24 : 0.105);
    } else {
      state.currentDeg = state.targetDeg;
    }

    const idx = getClosestAngleIndex(look, state.currentDeg);
    if (idx !== state.renderedIndex) {
      applySingleFigureFrame(look, idx);
    }

    applyKinetic3D(look, state.currentDeg, idx);
    updateTurntableVisuals(look, state.currentDeg, idx);
    requestAnimationFrame(tickTurntable);
  }

  // ========================================================================
  // Gentle Hover Auto-360° + Zero-Friction Mobile Touch Drag with Inertia
  // ========================================================================

  function initModelInteraction() {
    const stage = dom.modelStage;

    // Desktop: resting the mouse over the model smoothly starts organic 360° CW ↔ CCW spin
    stage.addEventListener('mouseenter', (e) => {
      if (e.pointerType === 'touch') return;
      state.isHoveringStage = true;
      if (!state.isDragging && state.autoMode === 'idle') {
        startBidirectionalShowcase({ pinned: false });
      }
    });

    stage.addEventListener('mouseleave', () => {
      state.isHoveringStage = false;
      if (!state.autoPinned && state.autoMode !== 'idle') {
        stopBidirectionalShowcase();
      }
    });

    // Zero-friction pointer capture on Mobile & Desktop so the very first drag pixel responds smoothly!
    stage.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.turntable-controls')) return;
      state.isDragging = true;
      state.dragPointerId = e.pointerId;
      state.dragStartX = e.clientX;
      state.dragLastX = e.clientX;
      state.dragVelocity = 0;
      state.dragMoved = false;
      try {
        stage.setPointerCapture(e.pointerId);
      } catch (_) {}
    });

    stage.addEventListener('pointermove', (e) => {
      if (!state.isDragging || e.pointerId !== state.dragPointerId) return;
      const dx = e.clientX - state.dragLastX;
      state.dragLastX = e.clientX;

      if (!state.dragMoved && Math.abs(e.clientX - state.dragStartX) > 3) {
        state.dragMoved = true;
        if (state.autoMode !== 'idle') {
          stopBidirectionalShowcase();
        }
      }

      if (state.dragMoved) {
        const degPerPx = e.pointerType === 'touch' ? 0.68 : 0.45;
        const deltaDeg = dx * degPerPx;
        state.targetDeg += deltaDeg;
        state.dragVelocity = state.dragVelocity * 0.4 + deltaDeg * 0.6;
      }
    });

    const endDrag = (e) => {
      if (!state.isDragging || e.pointerId !== state.dragPointerId) return;
      state.isDragging = false;
      state.dragPointerId = null;
      try {
        stage.releasePointerCapture(e.pointerId);
      } catch (_) {}
    };

    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    // Tapping directly on the model toggles organic 360° CW ↔ CCW showcase
    stage.addEventListener('click', (e) => {
      if (e.target.closest('.turntable-controls')) return;
      if (state.dragMoved) {
        state.dragMoved = false;
        return;
      }
      if (state.autoMode === 'idle') {
        startBidirectionalShowcase({ pinned: true });
      } else {
        stopBidirectionalShowcase();
      }
    });

    // Turntable micro-controls
    dom.btnSpinBidirectional.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.autoMode === 'idle') {
        startBidirectionalShowcase({ pinned: true });
      } else {
        stopBidirectionalShowcase();
      }
    });

    dom.btnTurnCW.addEventListener('click', (e) => {
      e.stopPropagation();
      stopBidirectionalShowcase();
      const step = 360 / getActiveLook().angles.length;
      state.targetDeg += step;
    });

    dom.btnTurnCCW.addEventListener('click', (e) => {
      e.stopPropagation();
      stopBidirectionalShowcase();
      const step = 360 / getActiveLook().angles.length;
      state.targetDeg -= step;
    });
  }

  // ========================================================================
  // Fit Intelligence Engine
  // ========================================================================

  function computeRecommendedSize(look) {
    const order = ['P', 'M', 'G', 'GG'];
    let ideal = state.manequim === 'PP' ? 'P' : state.manequim;

    if (state.heightCm >= 176 && look.fitType === 'estruturado' && ideal === 'P') {
      ideal = 'M';
    }

    if (look.sizes[ideal]) {
      return { size: ideal, exact: true };
    }
    const idx = order.indexOf(ideal);
    for (let offset = 1; offset < order.length; offset++) {
      if (order[idx + offset] && look.sizes[order[idx + offset]]) {
        return { size: order[idx + offset], exact: false };
      }
      if (order[idx - offset] && look.sizes[order[idx - offset]]) {
        return { size: order[idx - offset], exact: false };
      }
    }
    return { size: 'M', exact: false };
  }

  function updateFitIntelligence() {
    const look = getActiveLook();
    const rec = computeRecommendedSize(look);

    if (!look.sizes[state.selectedSize]) {
      state.selectedSize = rec.size;
    }

    const hBand = state.heightCm <= 160 ? 'short' : state.heightCm >= 172 ? 'tall' : 'mid';
    const fitLine = look.fitDetails[hBand];

    dom.heightValue.textContent = formatHeight(state.heightCm);
    dom.manequimNum.textContent = `Tam. ${state.manequimNum}`;
    dom.topFitSummary.textContent = `${(state.heightCm / 100).toFixed(2).replace('.', ',')}m · ${rec.size}`;

    if (rec.exact) {
      dom.fitRecBadge.textContent = `Tamanho ideal: ${rec.size}`;
      dom.inspRecTag.textContent = `Sugerido: ${rec.size}`;
      dom.fitNoteText.textContent = `Para ${formatHeight(state.heightCm)} e manequim ${state.manequimNum}, o ${rec.size} oferece ${fitLine}`;
    } else {
      dom.fitRecBadge.textContent = `Alternativa disponível: ${rec.size}`;
      dom.inspRecTag.textContent = `Disponível: ${rec.size}`;
      dom.fitNoteText.textContent = `Seu manequim habitual (${state.manequim}) está esgotado nesta peça. O ${rec.size} é a opção mais próxima — ${fitLine}`;
    }

    $$('.size-table tbody tr').forEach((tr) => {
      tr.classList.toggle('is-highlighted', tr.dataset.row === state.manequim);
    });

    renderInspectorSizes(look, rec.size);
    updateWhatsAppLink(look, rec.size);
  }

  // ========================================================================
  // Look Selection & Wardrobe Rendering (Desktop Panel + Mobile Strip)
  // ========================================================================

  function selectLook(id) {
    const nextLook = LOOKS.find((l) => l.id === id);
    if (!nextLook) return;

    if (state.activeId === id) {
      startBidirectionalShowcase({ pinned: true });
      return;
    }

    stopBidirectionalShowcase();
    state.activeId = id;
    state.currentDeg = 0;
    state.targetDeg = 0;
    state.renderedIndex = 0;

    document.documentElement.style.setProperty('--accent-aura', nextLook.aura);

    // Clean GPU-premounted look swap with subtle champagne halo pulse
    dom.modelCutoutWrap.classList.add('is-swapping-look');
    dom.atelierFlash.classList.remove('is-flashing');
    void dom.atelierFlash.offsetWidth;
    dom.atelierFlash.classList.add('is-flashing');

    setTimeout(() => {
      mountLookFrames(nextLook);
      requestAnimationFrame(() => {
        dom.modelCutoutWrap.classList.remove('is-swapping-look');
      });
    }, 100);

    // Update Bottom Inspector Bar
    dom.inspThumb.src = nextLook.thumb;
    dom.inspName.textContent = nextLook.name;
    dom.inspPrice.textContent = formatBRL(nextLook.price);
    dom.inspInstallment.textContent = `ou 3x de ${formatBRL(nextLook.price / 3)}`;
    dom.inspSwatch.style.background = nextLook.colorHex;
    dom.inspColorName.textContent = nextLook.colorName;
    dom.modalActiveGarment.textContent = nextLook.name;

    const rec = computeRecommendedSize(nextLook);
    state.selectedSize = rec.size;

    updateFitIntelligence();
    syncActiveHighlights();
  }

  function renderInspectorSizes(look, recSize) {
    const order = ['P', 'M', 'G', 'GG'];
    dom.inspSizes.innerHTML = order
      .map((sz) => {
        const available = !!look.sizes[sz];
        const isActive = state.selectedSize === sz && available;
        const isRec = sz === recSize && available;
        return `
          <button
            class="insp-size-btn ${isActive ? 'is-active' : ''} ${isRec ? 'is-rec' : ''}"
            data-size="${sz}"
            ${available ? '' : 'disabled title="Esgotado"'}
          >${sz}</button>
        `;
      })
      .join('');

    dom.inspSizes.querySelectorAll('.insp-size-btn:not(:disabled)').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedSize = btn.dataset.size;
        renderInspectorSizes(look, recSize);
        updateWhatsAppLink(look, recSize);
      });
    });
  }

  function updateWhatsAppLink(look, recSize) {
    const msg =
      `Oi, Jhullia! Provei o *${look.name}* (${look.colorName} · ${formatBRL(look.price)}) no provador virtual 360° da Emporium.\n` +
      `• Tamanho escolhido: *${state.selectedSize}* (sugerido: ${recSize})\n` +
      `• Minhas medidas: ${formatHeight(state.heightCm)} · manequim ${state.manequim} (${state.manequimNum})\n` +
      `Ele ainda está disponível?`;
    dom.btnWhatsapp.href = `https://wa.me/${EMPORIUM_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  function syncActiveHighlights() {
    const activeId = state.activeId;
    $$('.wardrobe-item, .m-look-chip').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.id === activeId);
    });
    const loved = state.favorites.has(activeId);
    dom.btnHeartActive.classList.toggle('is-loved', loved);
    dom.favCount.textContent = state.favorites.size;
    dom.favCount.hidden = state.favorites.size === 0;
  }

  function renderWardrobes() {
    const list = getVisibleLooks();
    dom.wardrobeCount.textContent = `${list.length} ${list.length === 1 ? 'look' : 'looks'}`;

    dom.wardrobeGrid.innerHTML = list
      .map(
        (item) => `
      <button class="wardrobe-item ${item.id === state.activeId ? 'is-active' : ''}" data-id="${item.id}">
        <div class="wardrobe-item__img">
          <img src="${item.thumb}" alt="${item.name}" loading="eager" />
          <span class="wardrobe-item__360">360°</span>
          <span class="wardrobe-item__tag">${item.tag}</span>
        </div>
        <div class="wardrobe-item__info">
          <span class="wardrobe-item__title">${item.shortName}</span>
          <span class="wardrobe-item__price">
            <span>${formatBRL(item.price)}</span>
            <i class="orbit-card__dot" style="background:${item.colorHex}"></i>
          </span>
        </div>
      </button>
    `
      )
      .join('');

    dom.wardrobeGrid.querySelectorAll('.wardrobe-item').forEach((btn) => {
      btn.addEventListener('click', () => selectLook(btn.dataset.id));
    });

    dom.mobileLookStrip.innerHTML = list
      .map(
        (item) => `
      <button class="m-look-chip ${item.id === state.activeId ? 'is-active' : ''}" data-id="${item.id}">
        <div class="m-look-chip__img">
          <img src="${item.thumb}" alt="${item.name}" />
        </div>
        <div class="m-look-chip__txt">
          <strong>${item.shortName}</strong>
          <span>${formatBRL(item.price)}</span>
        </div>
      </button>
    `
      )
      .join('');

    dom.mobileLookStrip.querySelectorAll('.m-look-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectLook(btn.dataset.id);
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });
  }

  // ========================================================================
  // Controls, Mobile Drawer & Modals Wiring
  // ========================================================================

  function setProfileDrawer(open) {
    dom.panelProfile.classList.toggle('is-drawer-open', open);
    dom.drawerScrim.hidden = !open;
  }

  function initControls() {
    $$('.cat-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.cat-btn').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.category = btn.dataset.cat;

        const visible = getVisibleLooks();
        renderWardrobes();
        if (!visible.some((l) => l.id === state.activeId) && visible.length) {
          selectLook(visible[0].id);
        } else {
          syncActiveHighlights();
        }
      });
    });

    dom.railSpin.addEventListener('click', () => {
      if (state.autoMode === 'idle') startBidirectionalShowcase({ pinned: true });
      else stopBidirectionalShowcase();
    });

    dom.heightSlider.addEventListener('input', (e) => {
      state.heightCm = Number(e.target.value);
      updateFitIntelligence();
    });

    $$('#manequimPills button').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('#manequimPills button').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.manequim = btn.dataset.size;
        state.manequimNum = btn.dataset.num;
        updateFitIntelligence();
      });
    });

    $$('#biotypeList .biotype-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('#biotypeList .biotype-opt').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.biotype = btn.dataset.bio;

        dom.modelCutoutWrap.classList.remove('bio-petite', 'bio-curvy');
        setBodySet(state.biotype === 'curvy');
        if (state.biotype === 'petite') {
          dom.modelCutoutWrap.classList.add('bio-petite');
          dom.biotypeBannerText.textContent =
            'Corpo Petite · 1,55 m · peças longas ficam mais compridas nela';
          dom.biotypeBanner.hidden = false;
        } else if (state.biotype === 'curvy') {
          dom.modelCutoutWrap.classList.add('bio-curvy');
          dom.biotypeBannerText.textContent =
            'Corpo Curvy / Plus · G – GG · simulação com IA';
          dom.biotypeBanner.hidden = false;
        } else {
          dom.biotypeBanner.hidden = true;
        }
      });
    });

    dom.btnHeartActive.addEventListener('click', () => {
      const look = getActiveLook();
      if (state.favorites.has(look.id)) {
        state.favorites.delete(look.id);
        showToast(`${look.shortName} removido dos favoritos`);
      } else {
        state.favorites.add(look.id);
        showToast(`${look.shortName} salvo nos seus favoritos`);
      }
      syncActiveHighlights();
    });

    $('#btnFavorites').addEventListener('click', () => {
      if (!state.favorites.size) {
        showToast('Toque no coração da peça para salvar seus looks favoritos');
        return;
      }
      const names = LOOKS.filter((l) => state.favorites.has(l.id))
        .map((l) => l.shortName)
        .join(', ');
      showToast(`Favoritos (${state.favorites.size}): ${names}`);
    });

    $('#btnTopMeasures').addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        const isOpen = dom.panelProfile.classList.contains('is-drawer-open');
        setProfileDrawer(!isOpen);
      } else {
        showToast('Ajuste sua altura e manequim no painel à esquerda');
      }
    });
    $('#closeProfileMobile').addEventListener('click', () => setProfileDrawer(false));
    dom.drawerScrim.addEventListener('click', () => setProfileDrawer(false));

    const openModal = (el) => {
      setProfileDrawer(false);
      el.hidden = false;
    };
    const closeModal = (el) => { el.hidden = true; };

    $('#btnOpenPhotoModal').addEventListener('click', () => openModal(dom.photoModal));
    $('#btnTopPhoto').addEventListener('click', () => openModal(dom.photoModal));
    $('#railPhoto').addEventListener('click', () => openModal(dom.photoModal));
    $('#openSizeGuide').addEventListener('click', () => openModal(dom.guideModal));
    $('#railGuide').addEventListener('click', () => openModal(dom.guideModal));

    $$('[data-close]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.close)));
    });
    [dom.photoModal, dom.guideModal].forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal(backdrop);
      });
    });

    const stepLook = (dir) => {
      const list = getVisibleLooks();
      const idx = list.findIndex((l) => l.id === state.activeId);
      const next = list[(idx + dir + list.length) % list.length];
      if (next) selectLook(next.id);
    };

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(dom.photoModal);
        closeModal(dom.guideModal);
        setProfileDrawer(false);
      } else if (e.key === 'ArrowRight' && dom.photoModal.hidden && dom.guideModal.hidden) {
        stepLook(1);
      } else if (e.key === 'ArrowLeft' && dom.photoModal.hidden && dom.guideModal.hidden) {
        stepLook(-1);
      }
    });

    dom.lgpdCheck.addEventListener('change', () => {
      const ok = dom.lgpdCheck.checked;
      dom.uploadZone.classList.toggle('is-locked', !ok);
      dom.userPhotoInput.disabled = !ok;
      dom.uploadHint.textContent = ok
        ? 'Clique para escolher uma foto (JPG ou PNG) do seu aparelho'
        : 'Marque o aceite LGPD acima para liberar o envio';
    });

    dom.uploadZone.addEventListener('click', (e) => {
      if (!dom.lgpdCheck.checked) {
        showToast('Marque o aceite de privacidade LGPD antes de enviar a foto');
        return;
      }
      if (e.target.closest('button')) return;
      dom.userPhotoInput.click();
    });

    dom.userPhotoInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        dom.userPreviewImg.src = ev.target.result;
        dom.uploadPlaceholder.hidden = true;
        dom.uploadPreview.hidden = false;
        dom.tryonDemoResult.hidden = true;
      };
      reader.readAsDataURL(file);
    });

    $('#btnClearPhoto').addEventListener('click', () => {
      dom.userPhotoInput.value = '';
      dom.userPreviewImg.src = 'img/p01.jpg';
      dom.uploadPreview.hidden = true;
      dom.uploadPlaceholder.hidden = false;
      dom.tryonProgress.hidden = true;
      dom.tryonDemoResult.hidden = true;
      showToast('Foto removida imediatamente da sessão');
    });

    $('#btnSimulateUserTryOn').addEventListener('click', () => {
      dom.tryonProgress.hidden = false;
      dom.tryonDemoResult.hidden = true;
      dom.progressFill.style.width = '18%';
      dom.progressLabel.textContent = 'Mapeando silhueta e iluminação da loja...';

      setTimeout(() => {
        dom.progressFill.style.width = '64%';
        dom.progressLabel.textContent = 'Ajustando caimento do tecido via Google Virtual Try-On...';
      }, 700);

      setTimeout(() => {
        dom.progressFill.style.width = '100%';
        dom.progressLabel.textContent = 'Finalizando e apagando foto temporária (LGPD)...';
      }, 1500);

      setTimeout(() => {
        dom.tryonProgress.hidden = true;
        dom.tryonDemoResult.hidden = false;
      }, 2200);
    });

    window.addEventListener('resize', () => {
      if (state.autoMode === 'idle') {
        dom.turntableHint.textContent = defaultHintText();
      }
    });
  }

  // ========================================================================
  // Boot
  // ========================================================================

  function init() {
    preloadAllCutouts();
    renderWardrobes();
    initModelInteraction();
    initControls();

    const initial = LOOKS[0];
    document.documentElement.style.setProperty('--accent-aura', initial.aura);
    mountLookFrames(initial);
    dom.inspThumb.src = initial.thumb;
    dom.inspName.textContent = initial.name;
    dom.inspPrice.textContent = formatBRL(initial.price);
    dom.inspInstallment.textContent = `ou 3x de ${formatBRL(initial.price / 3)}`;
    dom.inspSwatch.style.background = initial.colorHex;
    dom.inspColorName.textContent = initial.colorName;
    dom.modalActiveGarment.textContent = initial.name;
    dom.turntableHint.textContent = defaultHintText();

    updateFitIntelligence();
    syncActiveHighlights();
    requestAnimationFrame(tickTurntable);
  }

  init();
})();
