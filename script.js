const translations = {
    ar: {
        welcome: "مرحباً بك عزيزي المحقق النووي",
        start: "ابدأ الرحلة",
        mythsTitle: "الخرافات",
        mythsSubtitle: "اختر الخرافة لكشف الحقيقة",
        levelsTitle: "المستويات",
        startLevel: "ابدأ",
        langBtn: "تغيير اللغة",
        themeBtn: "تبديل الوضع",
        naturalLabel: "اليورانيوم الطبيعي",
        enrichedLabel: "اليورانيوم المخصب",
        selectPrompt: "اختر النسبة",
        waitingUsage: "يرجى اختيار نسبة التخصيب",
        runBtn: "تشغيل",
        alertEmpty: "عزيزي، يرجى إدخل نسبة التخصيب أولاً.",
        successMsg: "تهانينا! أكملت المرحلة 1. استعد للمرحلة التالية واكتشف المزيد.",
        btnRestart: "إعادة",
        btnNext: "التالي",
        usageCivil: "المفاعلات النووية المدينة",
        usageResearch: "المفاعلات البحثية",
        usageWeapons: "الأسلحة النووية",
        mythNames: ["المفاعل النووي = قنبلة ذرية", "قريباً ⏳", "قريباً ⏳"],
        levelNames: ["المستوى الأول 🔓", "المستوى الثاني 🔓", "المستوى الثالث 🔓", "المستوى الرابع 🔓", "المستوى الخامس 🔓"],
        lvl1: "المستوى الأول",
        lvl2: "المستوى الثاني",
        lvl3: "المستوى الثالث",
        lvl4: "المستوى الرابع",
        lvl5: "المستوى الخامس",
        levelContent: [
            "اليورانيوم الطبيعي يتكون أساسًا من اليورانيوم-238 بنسبة تقارب 99.3%، واليورانيوم-235 بنسبة تقارب 0.7%.\nعملية التخصيب هي زيادة نسبة نظير U-235 في اليورانيوم مقارنةً بوفـرته الطبيعية.",
            "الانشطار النووي هو انقسام نواة ذرية ثقيلة إلى نواتين أصغر، ويصاحبه إطلاق طاقة ونيوترونات.",
            "التفاعل المتسلسل النووي هو سلسلة من الانشطارات النووية، حيث يؤدي انشطار نواة ثقيلة إلى إطلاق نيوترونات تحفز انشطارات أخرى. يستمر هذا التفاعل تلقائيًا فقط إذا كانت الكتلة الانشطارية مساوية أو أكبر من الكتلة الحرجة.",
            "الكتلة الحرجة: أقل كمية من المادة الانشطارية المطلوبة للحفاظ على تفاعل متسلسل مستمر دون توقف.\nالتفاعل المتحكم فيه: تفاعل متسلسل يحدث عند الكتلة الحرجة أو بالقرب منها، ويخضع للسيطرة لمنع تضاعف الانشطارات بسرعة كبيرة وإطلاق طاقة هائلة.\nالتفاعل غير المتحكم فيه: تفاعل متسلسل يحدث عند الكتلة فوق الحرجة، ولا يخضع للسيطرة، مما يؤدي إلى تضاعف الانشطارات بسرعة كبيرة وإطلاق طاقة هائلة.",
            "حقيقة علمية: انفجار المفاعل النووي مثل القنبلة الذرية مستحيل فيزيائيًا، لأن وقوده منخفض التخصيب (3–5%) ويعمل ضمن تفاعل مُتحكم فيه يمنع أي انفجار نووي. القنبلة الذرية تتطلب وقودًا عالي التخصيب (≥90%) وتعمل بتفاعل غير متحكم فيه ينتج انفجارات هائلة خلال لحظات. المفاعل قد يتعرض لأعطال خطيرة مثل فقدان التبريد أو الانصهار الجزئي، مما قد يؤدي إلى تسرب إشعاعي أو انفجارات محدودة بسبب الضغط والحرارة، لكنها تبقى مختلفة تمامًا عن الانفجار النووي للقنبلة الذرية"
        ],
        fissionNote: "الانشطار النووي عملية احتمالية؛ لذلك يمكن أن تنتج نوى مختلفة. وتمثل الكرات الزرقاء والخضراء هذه النواتج المحتملة.",
        understood: "فهمت",
        fissionSuccess: "تهانينا! أكملت المرحلة 2. استعد للمرحلة التالية واكتشف المزيد.",
        belowTitle: "تحت الكتلة الحرجة",
        atTitle: "عند الكتلة الحرجة",
        aboveTitle: "فوق الكتلة الحرجة",
        noteTitle: "ملاحظة",
        noteBody: " التفاعل المتحكم فيه ← المفاعل النووي\nالتفاعل الغير متحكم فيه← القنبلة الذرية",
        finalSuccessChain: "تهانينا! أكملت المرحلة 3. استعد للمرحلة التالية واكتشف المزيد.",
        finalSuccessCritical: "تهانينا! أكملت المرحلة 4. استعد للمرحلة التالية واكتشف المزيد.",
        q1: "كون مفاعل نووي وفقاً للفيزياء",
        q2: "كون قنبلة ذرية وفقاً للفيزياء",
        selectEnrich: "اختيار نسبة التخصيب",
        selectReact: "اختيار نوع التفاعل",
        reactControlled: "متحكم فيه",
        reactUncontrolled: "غير متحكم فيه",
        formBtn: "كون",
        errorPhysical: "هذا مستحيل فيزيائيًا، حاول مرة أخرى.",
        errorSelect: "اختَر أولًا نسبة التخصيب ونوع التفاعل.",
        retryBtn: "إعادة المحاولة",
        congrats: "عزيزي المحقق النووي، لقد كان أداؤك رائعًا جدًا.",
        suggestPrompt: "الآن دورك أيها المحقق النووي 🕵️‍♂️ لتترك بصمتك في كشف الحقيقة! شاركنا اقتراحك للخرافة القادمة واجعلها مغامرة علمية مليئة بالإثارة والاكتشاف.",
        suggestBtn: "إرسال الاقتراح",
        pity: "عزيزي المحقق النووي، لا تيأس، يمكنك إعادة المحاولة والحصول على تقييم أفضل.",
        formUri: "https://forms.gle/mUCtjr1zSXsRSVE38",
        mythHeaderText: "خرافة: المفاعلات النووية يمكن أن تنفجر مثل القنبلة الذرية",
        mythFooterText: "سيتم تفنيد الخرافة من ناحية فيزيائية فقط"
    },
    en: {
        welcome: "Welcome, Nuclear Detective",
        start: "Start Mission",
        mythsTitle: "Myths",
        mythsSubtitle: "Choose a myth to uncover the truth",
        levelsTitle: "Levels",
        startLevel: "Start",
        langBtn: "Change Language",
        themeBtn: "Toggle Theme",
        naturalLabel: "Natural Uranium",
        enrichedLabel: "Enriched Uranium",
        selectPrompt: "Select %",
        waitingUsage: "Please select enrichment %",
        runBtn: "Run",
        alertEmpty: "Dear, please enter the enrichment percentage first.",
        successMsg: "Congratulations! You completed level 1. Get ready for the next stage and discover more.",
        btnRestart: "Restart",
        btnNext: "Next",
        usageCivil: "Civil nuclear reactors",
        usageResearch: "Research reactors",
        usageWeapons: "Nuclear weapons",
        mythNames: ["Nuclear reactor = Atomic bomb", "Soon ⏳", "Soon ⏳"],
        levelNames: ["Level 1 🔓", "Level 2 🔓", "Level 3 🔓", "Level 4 🔓", "Level 5 🔓"],
        lvl1: "Level 1",
        lvl2: "Level 2",
        lvl3: "Level 3",
        lvl4: "Level 4",
        lvl5: "Level 5",
        levelContent: [
            "Natural uranium consists primarily of uranium-238 at approximately 99.3% and uranium-235 at approximately 0.7%.\nEnrichment is the process of increasing the proportion of the U-235 isotope in uranium relative to its natural abundance.",
            "Nuclear fission is the splitting of a heavy atomic nucleus into two smaller nuclei, accompanied by the release of energy and neutrons.",
            "Nuclear chain reaction is a series of nuclear fissions, where the fission of a heavy nucleus releases neutrons that induce further fissions. This reaction continues automatically only if the fissile mass is equal to or greater than the critical mass.",
            "Critical Mass: The minimum amount of fissile material required to maintain a continuous chain reaction without stopping.\nControlled Reaction: A chain reaction that occurs at or near the critical mass and is controlled to prevent rapid multiplication of fissions and the release of excessive energy.\nUncontrolled Reaction: A chain reaction that occurs above the critical mass and is not controlled, leading to rapid multiplication of fissions and the release of massive energy.",
            "Scientific fact: A nuclear reactor exploding like an atomic bomb is physically impossible because its fuel is low-enriched (3–5%) and operates under a controlled reaction that prevents any nuclear explosion. An atomic bomb requires highly enriched fuel (≥90%) and functions through an uncontrolled reaction that produces massive explosions within moments. A reactor may experience serious malfunctions such as loss of cooling or partial meltdown, which can lead to radiation release or localized pressure- and heat-driven explosions, but these are entirely different from a nuclear explosion caused by an atomic bomb."
        ],
        fissionNote: "Nuclear fission is a probabilistic process; therefore, different nuclei can be produced. The blue and green spheres represent these possible outcomes.",
        understood: "Understood",
        fissionSuccess: "Congratulations! You completed level 2. Get ready for the next stage and discover more.",
        belowTitle: "Below Critical Mass",
        atTitle: "At Critical Mass",
        aboveTitle: "Above Critical Mass",
        noteTitle: "Note",
        noteBody: " Controlled reaction ← Nuclear reactor\nUncontrolled reaction ← Atomic bomb ",
        finalSuccessChain: "Congratulations! You completed level 3. Get ready for the next stage and discover more.",
        finalSuccessCritical: "Congratulations! You completed level 4. Get ready for the next stage and discover more.",
        q1: "Form a nuclear reactor according to physics",
        q2: "Form an atomic bomb according to physics",
        selectEnrich: "Select the enrichment level",
        selectReact: "Select reaction type",
        reactControlled: "Controlled",
        reactUncontrolled: "Uncontrolled",
        formBtn: "Form",
        errorPhysical: "This is physically Impossible, try again.",
        errorSelect: "First, choose the enrichment percentage and the type of reaction.",
        retryBtn: "Try Again",
        congrats: "Dear nuclear investigator, your performance has been excellent.",
        suggestPrompt: "Now it's your turn, nuclear detective 🕵️‍♀️, to leave your mark in uncovering the truth! Share your idea for the next myth and turn it into an exciting scientific adventure.",
        suggestBtn: "Suggest Myth",
        pity: "Dear nuclear investigator, don't be discouraged; you can try again and get a better score.",
        formUri: "https://forms.gle/yzHMHziVsYwq1Kv88",
        mythHeaderText: "Myth: Nuclear power plants can explode like an atomic bomb.",
        mythFooterText: "The myth will be debunked from a physical perspective only."
    }
};

let currentLang = localStorage.getItem("lang") || "ar";
let highestLevel = 1;
let activeLevel = 0;
let typewriterTimer = null;
let criticalShots = 0;
let constStep = 1; 
let totalAttempts = 0;

const tubeDay = "https://i.top4top.io/p_37284vtjh1.jpg";
const tubeNight = "https://h.top4top.io/p_37289uw8h1.jpg";

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'explosion') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'hit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now); osc.stop(now + 0.2);
    } else if (type === 'launch') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.3);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now); osc.stop(now + 0.4);
    } else if (type === 'error') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    }
}

window.onload = () => {
    applyTheme(localStorage.getItem("theme") || "day");
    initSelectOptions();
    updateUI();
    setTimeout(() => { document.getElementById("splash").classList.add("hide"); showScreen("app"); }, 1500);
    initFissionGame();
    initChainControl();
    initCriticalControl();
    initConstructionLogic();
    
    document.getElementById("enrichmentSelect").addEventListener("change", (e) => {
        const val = parseFloat(e.target.value);
        const display = document.getElementById("usageDisplay");
        if (!val) {
            display.textContent = translations[currentLang].waitingUsage;
            return;
        }
        if (val >= 3 && val <= 5) display.textContent = translations[currentLang].usageCivil;
        else if (val == 20) display.textContent = translations[currentLang].usageResearch;
        else if (val >= 90) display.textContent = translations[currentLang].usageWeapons;
    });

    document.addEventListener('click', (e) => {
        if(e.target.closest('button') || e.target.closest('.box') || e.target.closest('select')) {
            playSound('click');
        }
    });
};

function initSelectOptions() {
    const g1 = document.getElementById("group1");
    const g2 = document.getElementById("group2");
    if(!g1 || !g2) return;
    g1.innerHTML = ""; g2.innerHTML = "";
    for(let i=3.0; i<=5.0; i=(i+0.1)) {
        let opt = document.createElement("option");
        opt.value = i.toFixed(1); opt.textContent = i.toFixed(1) + "%";
        g1.appendChild(opt);
    }
    for(let i=90; i<=100; i++) {
        let opt = document.createElement("option");
        opt.value = i; opt.textContent = i + "%";
        g2.appendChild(opt);
    }
}

function showScreen(id) {
    document.querySelectorAll("#app, #mythsApp, #levelsApp, #levelView, #enrichmentLab, #fissionLab, #chainReactionLab, #criticalMassLab, #constructionLab, #evaluationLab").forEach(s => { 
        s.style.display = "none"; s.classList.remove("show"); 
    });
    const target = document.getElementById(id);
    if(target) { 
        target.style.display = "flex"; 
        setTimeout(() => target.classList.add("show"), 10); 
        if(id === "evaluationLab") {
            target.className = `evaluation-container ${document.body.classList.contains('day') ? 'day' : 'night'}`;
            if(totalAttempts === 0) playSound('success');
        }
    }
}

function updateUI() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    const levelView = document.getElementById("levelView");
    if(levelView && levelView.classList.contains("show")) {
        const labelEl = document.getElementById("levelLabelTop");
        if(labelEl) labelEl.textContent = translations[currentLang][`lvl${activeLevel + 1}`];
        startTypewriter(translations[currentLang].levelContent[activeLevel]);
    }

    const evalLab = document.getElementById("evaluationLab");
    if(evalLab && evalLab.classList.contains("show")) {
        showEvaluation();
    }

    renderMyths(); renderLevels();
    updateConstUI();
}

function renderMyths() {
    const list = document.getElementById("mythList");
    if(!list) return; list.innerHTML = "";
    translations[currentLang].mythNames.forEach((name, i) => {
        const div = document.createElement("div"); div.className = "box"; div.style.margin = "10px";
        div.textContent = name; div.onclick = () => i === 0 && showScreen('levelsApp');
        list.appendChild(div);
    });
}

function renderLevels() {
    const list = document.getElementById("levelList");
    if(!list) return; list.innerHTML = "";
    translations[currentLang].levelNames.forEach((name, i) => {
        const div = document.createElement("div");
        div.className = `box ${i + 1 > highestLevel ? 'locked' : ''}`;
        div.style.margin = "10px"; div.textContent = name;
        div.onclick = () => (i + 1 <= highestLevel) && openLevel(i);
        list.appendChild(div);
    });
}

function openLevel(index) {
    activeLevel = index;
    const actionBtn = document.getElementById("actionBtn");
    if(actionBtn) actionBtn.disabled = true;

    showScreen("levelView");
    const labelEl = document.getElementById("levelLabelTop");
    if(labelEl) labelEl.textContent = translations[currentLang][`lvl${index + 1}`];
    startTypewriter(translations[currentLang].levelContent[index]);
}

function startTypewriter(text) {
    const container = document.getElementById("typewriterText");
    const actionBtn = document.getElementById("actionBtn"); 
    
    if(!container) return;
    if(typewriterTimer) clearTimeout(typewriterTimer);
    
    if(actionBtn) {
        actionBtn.disabled = true;
    }

    container.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            container.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
            i++;
            typewriterTimer = setTimeout(type, 25);
        } else {
            if(actionBtn) {
                actionBtn.disabled = false;
            }
        }
    }
    type();
}

document.getElementById("actionBtn").onclick = () => {
    if(activeLevel === 0) showScreen("enrichmentLab");
    else if(activeLevel === 1) { resetFissionStage(); showScreen("fissionLab"); }
    else if(activeLevel === 2) { setupChainLevel(); showScreen("chainReactionLab"); }
    else if(activeLevel === 3) { setupCriticalLevel(); showScreen("criticalMassLab"); }
    else if(activeLevel === 4) { startConstructionLevel(); }
    else { highestLevel = Math.max(highestLevel, activeLevel + 2); showScreen('levelsApp'); }
};

document.getElementById("runBtn").onclick = () => {
    const val = document.getElementById("enrichmentSelect").value;
    if(!val) { showModal("alert", translations[currentLang].alertEmpty); return; }
    document.getElementById("runBtn").disabled = true;
    startEnrichmentAnimation(parseFloat(val));
};

function startEnrichmentAnimation(targetPercent) {
    const bar = document.getElementById("enrichedBar");
    const textVal = document.getElementById("currentEnrichedVal");
    let current = 0.7;
    bar.classList.add("shaking");
    const interval = setInterval(() => {
        current += (targetPercent / 50);
        if(current >= targetPercent) {
            current = targetPercent;
            clearInterval(interval);
            bar.classList.remove("shaking");
            highestLevel = Math.max(highestLevel, 2);
            setTimeout(() => { playSound('success'); showModal("success", translations[currentLang].successMsg); }, 2000); 
        }
        bar.style.height = current + "%";
        textVal.textContent = current.toFixed(1) + "%";
    }, 40);
}

function initFissionGame() {
    const proj = document.getElementById("projectileN");
    const barrel = document.getElementById("fissionBarrel");
    const target = document.getElementById("targetU235");
    setupLauncher(proj, barrel, target, triggerFission);
}

function initChainControl() {
    const proj = document.getElementById("chainProjectile");
    const barrel = document.getElementById("chainBarrel");
    setupLauncher(proj, barrel, null, (t) => startRealChain(t));
}

function initCriticalControl() {
    const proj = document.getElementById("criticalProjectile");
    const barrel = document.getElementById("criticalBarrel");
    setupLauncher(proj, barrel, null, (t) => handleCriticalLaunch(t));
}

function setupLauncher(projectile, barrel, staticTarget, onHitCallback) {
    let isActive = false;
    const handlePointer = (e) => {
        if (!isActive) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        const barrelRect = barrel.getBoundingClientRect();
        const pivotX = barrelRect.left + barrelRect.width / 2;
        const pivotY = barrelRect.bottom;
        const angleRad = Math.atan2(pivotX - clientX, pivotY - clientY);
        const angleDeg = angleRad * (180 / Math.PI);
        const clampedDeg = Math.max(-75, Math.min(75, angleDeg));
        barrel.style.transform = `translateX(-50%) rotate(${clampedDeg}deg)`;
    };
    const launch = () => {
        if (!isActive) return;
        isActive = false;
        const target = staticTarget || findTargetForLauncher(projectile.id);
        if (!target) return;
        playSound('launch');
        performGuidedFlight(projectile, target, () => onHitCallback(target));
    };
    projectile.onmousedown = projectile.ontouchstart = (e) => { e.preventDefault(); isActive = true; };
    window.addEventListener('mousemove', handlePointer);
    window.addEventListener('touchmove', handlePointer);
    window.addEventListener('mouseup', launch);
    window.addEventListener('touchend', launch);
}

function findTargetForLauncher(projId) {
    if(projId === "chainProjectile") return document.getElementById("firstTarget");
    if(projId === "criticalProjectile") return findCurrentCriticalTarget();
    return null;
}

function performGuidedFlight(proj, target, callback) {
    const startRect = proj.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;
    const duration = 700; 
    const startTime = performance.now();

    document.body.appendChild(proj);
    proj.style.position = 'fixed';
    proj.style.left = startX + 'px';
    proj.style.top = startY + 'px';
    proj.style.transform = 'translate(-50%, -50%)';
    proj.style.pointerEvents = "none";
    proj.style.transition = "none";

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1);
        const x = startX + (endX - startX) * t;
        const y = startY + (endY - startY) * t - (Math.sin(t * Math.PI) * 60);
        proj.style.left = x + 'px';
        proj.style.top = y + 'px';
        if (t < 1) requestAnimationFrame(animate);
        else { proj.style.opacity = "0"; callback(); }
    }
    requestAnimationFrame(animate);
}

function setupCriticalLevel() {
    criticalShots = 0;
    const sections = ['areaBelow', 'areaAt', 'areaAbove'];
    
    sections.forEach((id) => {
        const area = document.getElementById(id);
        area.innerHTML = "";
        
        let count = 0;
        if(id === 'areaBelow') count = 5;
        else if(id === 'areaAt') count = 18;
        else count = 80;

        for(let i=0; i<count; i++) {
            const ball = document.createElement("div");
            ball.className = "critical-ball";
            ball.textContent = "U235";
            
            let posX, posY;

            if (id === 'areaBelow') {
                posX = Math.random() * 80 + 10;
                posY = Math.random() * 80 + 10;
            } else if (id === 'areaAt') {
                posX = 50 + (Math.random() - 0.5) * 60;
                posY = 50 + (Math.random() - 0.5) * 60;
            } else {
                posX = 20 + Math.random() * 60;
                posY = 20 + Math.random() * 60;
            }

            ball.style.left = posX + "%";
            ball.style.top = posY + "%";
            area.appendChild(ball);
        }
    });
    resetCriticalLauncher();
}

function resetCriticalLauncher() {
    const proj = document.getElementById("criticalProjectile");
    const barrel = document.getElementById("criticalBarrel");
    if(proj && barrel) {
        barrel.appendChild(proj);
        proj.style.opacity = "1"; proj.style.position = "absolute";
        proj.style.left = "50%"; proj.style.bottom = "80%"; proj.style.top = "auto";
        proj.style.transform = "translateX(-50%)"; proj.style.pointerEvents = "auto";
    }
}

function findCurrentCriticalTarget() {
    const areas = ['areaBelow', 'areaAt', 'areaAbove'];
    const currentArea = document.getElementById(areas[criticalShots]);
    return currentArea ? currentArea.querySelector(".critical-ball") : null;
}

function handleCriticalLaunch(target) {
    const areas = ['areaBelow', 'areaAt', 'areaAbove'];
    const currentArea = document.getElementById(areas[criticalShots]);
    let speed = 1.0; let dieProbability = 0; let chainLimit = 0;
    
    if (criticalShots === 0) { speed = 5.0; dieProbability = 1.0; chainLimit = 1; }
    else if (criticalShots === 1) { speed = 2.0; dieProbability = 0.1; }
    else if (criticalShots === 2) { speed = 0.05; dieProbability = 0; }

    triggerAdvancedChain(currentArea, target, speed, dieProbability, chainLimit);
    criticalShots++;
    
    if (criticalShots === 3) {
        setTimeout(() => {
            playSound('success'); 
            showModal("noteCritical", translations[currentLang].noteBody); 
        }, 1500);
    } else {
        setTimeout(() => { resetCriticalLauncher(); }, 1500);
    }
}

function triggerAdvancedChain(area, startNode, delayMult, dieProb, chainLimit = 0) {
    const balls = Array.from(area.querySelectorAll(".critical-ball"));
    function explode(node) {
        if(!node || node.dataset.hit) return;
        node.dataset.hit = "true";
        node.style.background = "white";
        node.style.transform = "scale(1.5)";
        playSound('hit');
        setTimeout(() => {
            node.style.opacity = "0";
            if (chainLimit === 1) return;
            const targets = balls.filter(b => !b.dataset.hit && !b.dataset.targeted).slice(0, 3);
            targets.forEach((t, i) => {
                if(Math.random() > dieProb) {
                    t.dataset.targeted = "true";
                    setTimeout(() => explode(t), (i + 1) * 200 * delayMult);
                }
            });
        }, 100 * delayMult);
    }
    explode(startNode);
}

function triggerFission() {
    const flash = document.getElementById("fissionFlash");
    const target = document.getElementById("targetU235");
    const canvas = document.getElementById("fissionCanvas");
    document.querySelectorAll(".fission-ball").forEach(b => b.remove());
    flash.style.opacity = "1"; flash.style.transform = "scale(60)";
    target.style.display = "none";
    playSound('explosion');
    setTimeout(() => {
        flash.style.opacity = "0"; flash.style.transform = "scale(1)";
        const fragments = [{ c: '#3498db', s: 60, x: -100, y: -80, txt: '' },{ c: '#2ecc71', s: 60, x: 100, y: -70, txt: '' },{ c: '#e74c3c', s: 25, x: -50, y: 120, txt: 'n' },{ c: '#e74c3c', s: 25, x: 50, y: 120, txt: 'n' },{ c: '#e74c3c', s: 25, x: 0, y: 150, txt: 'n' }];
        fragments.forEach(f => {
            const el = document.createElement("div"); el.className = "fission-ball"; el.style.width = el.style.height = f.s + "px"; el.style.backgroundColor = f.c; el.textContent = f.txt; el.style.left = "50%"; el.style.top = "50%"; canvas.appendChild(el);
            setTimeout(() => { el.style.transform = `translate(${f.x}px, ${f.y}px)`; }, 50);
        });
        setTimeout(() => { showModal("fissionNote", translations[currentLang].fissionNote); }, 2500); 
    }, 400);
}

function resetFissionStage() {
    const target = document.getElementById("targetU235");
    const barrel = document.getElementById("fissionBarrel");
    const proj = document.getElementById("projectileN");
    if(target) target.style.display = "flex";
    if(proj && barrel) { 
        barrel.appendChild(proj);
        proj.style.opacity = "1"; proj.style.position = "absolute";
        proj.style.left = "50%"; proj.style.top = "auto"; proj.style.bottom = "80%";
        proj.style.transform = "translateX(-50%)"; proj.style.pointerEvents = "auto";
    }
    document.querySelectorAll(".fission-ball").forEach(b => b.remove());
}

function setupChainLevel() {
    const canvas = document.getElementById("chainCanvas");
    canvas.innerHTML = "";
    chainDone = false;
    const proj = document.getElementById("chainProjectile");
    const barrel = document.getElementById("chainBarrel");
    if(proj && barrel) {
        barrel.appendChild(proj);
        proj.style.opacity = "1"; proj.style.position = "absolute";
        proj.style.left = "50%"; proj.style.top = "auto"; proj.style.bottom = "80%";
        proj.style.transform = "translateX(-50%)"; proj.style.pointerEvents = "auto";
    }
    const positions = [
        { x: 50, y: 75, id: 'firstTarget' },
        { x: 35, y: 55 }, { x: 50, y: 55 }, { x: 65, y: 55 },
        { x: 10, y: 35 }, { x: 20, y: 35 }, { x: 30, y: 35 }, { x: 40, y: 35 }, { x: 50, y: 35 }, { x: 60, y: 35 }, { x: 70, y: 35 }, { x: 80, y: 35 }, { x: 90, y: 35 }
    ];
    positions.forEach((pos, i) => {
        const nuc = document.createElement("div");
        nuc.className = "chain-nucleus"; nuc.id = pos.id || `target-${i}`;
        nuc.textContent = "U235"; nuc.style.left = pos.x + "%"; nuc.style.top = pos.y + "%";
        nuc.style.transform = "translateX(-50%)"; 
        canvas.appendChild(nuc);
    });
}

function startRealChain(el) { hitNucleus(el); }
function hitNucleus(el) {
    if(!el || el.dataset.hit === "true") return;
    el.dataset.hit = "true"; el.style.transform = "translateX(-50%) scale(1.2)"; el.style.background = "white";
    playSound('hit');
    setTimeout(() => {
        el.style.opacity = "0";
        for(let i=0; i<3; i++) { setTimeout(() => createChainNeutron(el.offsetLeft + 22, el.offsetTop + 22), i * 50); }
    }, 200);
}

function createChainNeutron(startX, startY) {
    const canvas = document.getElementById("chainCanvas");
    const neu = document.createElement("div");
    neu.className = "chain-neutron"; neu.style.left = startX + "px"; neu.style.top = startY + "px";
    canvas.appendChild(neu);
    const targets = Array.from(document.querySelectorAll(".chain-nucleus")).filter(n => n.dataset.hit !== "true" && !n.dataset.targeted);
    if(targets.length > 0) {
        const target = targets[0]; target.dataset.targeted = "true";
        setTimeout(() => {
            neu.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            neu.style.left = (target.offsetLeft + 22) + "px"; neu.style.top = (target.offsetTop + 22) + "px";
            setTimeout(() => { neu.remove(); hitNucleus(target); checkChainEnd(); }, 600);
        }, 20);
    } else {
        const angle = -Math.PI/2 + (Math.random() * Math.PI - Math.PI/2); 
        setTimeout(() => {
            neu.style.transition = "all 0.8s linear";
            neu.style.left = (startX + Math.cos(angle) * 500) + "px"; neu.style.top = (startY + Math.sin(angle) * 500) + "px";
            neu.style.opacity = "0"; setTimeout(() => { neu.remove(); checkChainEnd(); }, 800);
        }, 20);
    }
}

let chainDone = false;
function checkChainEnd() {
    const remains = Array.from(document.querySelectorAll(".chain-nucleus")).filter(n => n.dataset.hit !== "true");
    const activeNeutrons = document.querySelectorAll(".chain-neutron").length;
    if(remains.length === 0 && activeNeutrons === 0 && !chainDone) {
        chainDone = true;
        setTimeout(() => { 
            highestLevel = Math.max(highestLevel, 3);
            playSound('success'); showModal("successChain", translations[currentLang].finalSuccessChain); 
        }, 1000);
    }
}

function startConstructionLevel() {
    constStep = 1; totalAttempts = 0;
    showScreen("constructionLab"); resetConstLab();
}

function initConstructionLogic() {
    const formBtn = document.getElementById("formBtn");
    const nextBtn = document.getElementById("constNextBtn");
    formBtn.onclick = () => {
        const enVal = document.getElementById("selectEnrichmentLevel").value;
        const reVal = document.getElementById("selectReactionType").value;
        if(!enVal || !reVal) { playSound('error'); showModal("alert", translations[currentLang].errorSelect); return; }
        let isCorrect = (constStep === 1) ? (parseFloat(enVal) <= 5.0 && reVal === "controlled") : (parseFloat(enVal) >= 90 && reVal === "uncontrolled");
        if(isCorrect) {
            formBtn.disabled = true;
            handleSuccessConst();
        }
        else { playSound('error'); totalAttempts++; showModal("retryConst", translations[currentLang].errorPhysical); }
    };
    nextBtn.onclick = () => { if(constStep === 1) { constStep = 2; resetConstLab(); } else showEvaluation(); };
}

function resetConstLab() {
    const isNight = document.body.classList.contains("night");
    const img = document.getElementById("constMainImg");
    img.src = isNight ? tubeNight : tubeDay;
    img.style.opacity = "1"; img.classList.remove("transform-active", "slide-active");
    img.style.display = "block"; // تأكيد ظهور الأنبوبة
    document.getElementById("constControls").style.display = "flex";
    document.getElementById("constNextBtn").style.display = "none";
    document.getElementById("formBtn").disabled = false;
    updateConstUI();
}

function updateConstUI() {
    const qText = document.getElementById("constQuestion");
    const enSelect = document.getElementById("selectEnrichmentLevel");
    const reSelect = document.getElementById("selectReactionType");
    if(!qText) return;
    qText.textContent = constStep === 1 ? translations[currentLang].q1 : translations[currentLang].q2;
    enSelect.innerHTML = `<option value="">${translations[currentLang].selectEnrich}</option>`;
    const g1 = document.createElement("optgroup"); g1.label = "3-5%";
    for(let i=3.0; i<=5.0; i=(i+0.1)) {
        let opt = document.createElement("option"); opt.value = i.toFixed(1); opt.textContent = i.toFixed(1) + "%";
        g1.appendChild(opt);
    }
    const g2 = document.createElement("optgroup"); g2.label = "≥ 90%";
    for(let i=90; i<=100; i++) {
        let opt = document.createElement("option"); opt.value = i; opt.textContent = i + "%";
        g2.appendChild(opt);
    }
    enSelect.appendChild(g1); enSelect.appendChild(g2);
    reSelect.innerHTML = `<option value="">${translations[currentLang].selectReact}</option><option value="controlled">${translations[currentLang].reactControlled}</option><option value="uncontrolled">${translations[currentLang].reactUncontrolled}</option>`;
}

function handleSuccessConst() {
    const img = document.getElementById("constMainImg");
    const isNight = document.body.classList.contains("night");
    img.classList.add("transform-active"); playSound('success');
    const seq = constStep === 1 ? [isNight ? "https://k.top4top.io/p_3728q4m551.jpg" : "https://e.top4top.io/p_37286id381.jpg", isNight ? "https://d.top4top.io/p_37286exmy1.jpg" : "https://l.top4top.io/p_3728n4tab1.jpg"] : [isNight ? "https://i.top4top.io/p_3728c1ktd1.jpg" : "https://k.top4top.io/p_3728uydrt1.jpg", isNight ? "https://a.top4top.io/p_3728izo4v1.jpg" : "https://b.top4top.io/p_3728odwg81.jpg"];
    
    img.style.opacity = "0"; 
    setTimeout(() => {
        img.src = seq[0]; 
        img.style.opacity = "1";
        img.classList.add("slide-active");
        setTimeout(() => {
            img.style.opacity = "0.7";
            setTimeout(() => { 
                img.src = seq[1]; 
                img.style.opacity = "1"; 
                finishConstStep(); 
            }, 800);
        }, 1200);
    }, 400);
}

function finishConstStep() {
    setTimeout(() => {
        document.getElementById("constMainImg").classList.remove("transform-active");
        document.getElementById("constControls").style.display = "none";
        document.getElementById("constNextBtn").style.display = "block";
    }, 1000);
}

function showEvaluation() {
    showScreen("evaluationLab");
    let score = totalAttempts === 0 ? 100 : Math.max(0, 100 - totalAttempts * 17);
    const circle = document.getElementById("scoreCircle");
    const valText = document.getElementById("scoreValue");
    const msg = document.getElementById("evalMessage");
    const sText = document.getElementById("suggestionText");
    const sBtn = document.getElementById("suggestionBtn");
    const rBtn = document.getElementById("retryLevelBtn");
    valText.textContent = score + "%";
    circle.style.strokeDashoffset = 283 - (283 * score) / 100;
    if(score >= 50) {
        msg.textContent = translations[currentLang].congrats + " 🥳✨";
        sText.textContent = translations[currentLang].suggestPrompt;
        sText.style.display = "block"; sBtn.style.display = "block"; rBtn.style.display = "none";
        sBtn.onclick = () => window.open(translations[currentLang].formUri, "_blank");
    } else {
        msg.textContent = translations[currentLang].pity + " 🥺💔";
        sText.style.display = "none"; sBtn.style.display = "none"; rBtn.style.display = "block";
        rBtn.onclick = () => startConstructionLevel();
    }
}

function showModal(type, msg) {
    const modal = document.getElementById("customAlert");
    const body = document.getElementById("modalBody");
    const footer = document.getElementById("modalFooter");
    const title = document.getElementById("modalTitle");
    body.innerHTML = msg.replace(/\n/g, "<br>"); footer.innerHTML = "";
    if(type === "retryConst") {
        title.textContent = "⚠";
        const btn = document.createElement("button"); btn.className = "modal-btn btn-sky"; btn.textContent = translations[currentLang].retryBtn;
        btn.onclick = () => closeModal('customAlert'); footer.appendChild(btn);
    } else if(type === "fissionNote") {
        title.textContent = "!";
        const btn = document.createElement("button"); btn.className = "modal-btn btn-sky"; btn.style.width = "100%"; btn.textContent = translations[currentLang].understood;
        btn.onclick = () => { closeModal('customAlert'); setTimeout(() => showModal("successFission", translations[currentLang].fissionSuccess), 400); };
        footer.appendChild(btn);
    } else if(type === "noteCritical") {
        title.textContent = translations[currentLang].noteTitle;
        const btn = document.createElement("button"); btn.className = "modal-btn btn-sky"; btn.style.width = "100%"; btn.textContent = translations[currentLang].understood;
        btn.onclick = () => { closeModal('customAlert'); setTimeout(() => showModal("successCritical", translations[currentLang].finalSuccessCritical), 400); };
        footer.appendChild(btn);
    } else if(type === "success" || type === "successFission" || type === "successCritical" || type === "successChain") {
        title.textContent = "✓";
        const btnRestart = document.createElement("button"); btnRestart.className = "modal-btn btn-sky"; btnRestart.textContent = translations[currentLang].btnRestart;
        btnRestart.onclick = () => { if(activeLevel === 1) resetFissionStage(); else if(activeLevel === 2) setupChainLevel(); else if(activeLevel === 3) setupCriticalLevel(); else resetLab(); closeModal('customAlert'); };
        const btnNext = document.createElement("button"); btnNext.className = "modal-btn btn-sky"; btnNext.textContent = translations[currentLang].btnNext;
        btnNext.onclick = () => { 
            highestLevel = Math.max(highestLevel, activeLevel + 2); 
            closeModal('customAlert');
            if (activeLevel < 4) openLevel(activeLevel + 1); 
            else showScreen('levelsApp');
        };
        footer.appendChild(btnRestart); footer.appendChild(btnNext);
    } else title.textContent = "⚠";
    modal.style.display = "flex";
}

function closeModal(id) { document.getElementById(id).style.display = "none"; }
function resetLab() { 
    document.getElementById("runBtn").disabled = false;
    document.getElementById("enrichedBar").style.height = "0.7%"; 
    document.getElementById("currentEnrichedVal").textContent = "0.7%"; 
    document.getElementById("enrichmentSelect").value = ""; 
    document.getElementById("usageDisplay").textContent = translations[currentLang].waitingUsage; 
}

document.querySelectorAll(".back-to-home").forEach(el => el.onclick = () => showScreen("app"));
document.querySelectorAll(".back-to-myths").forEach(el => el.onclick = () => showScreen("mythsApp"));
document.querySelectorAll(".back-to-view").forEach(el => el.onclick = () => showScreen("levelView"));
document.querySelectorAll(".close-level").forEach(el => el.onclick = () => showScreen("levelsApp"));

document.getElementById("mainThemeBtn").onclick = () => toggleTheme();
document.querySelectorAll(".theme-toggle-btn").forEach(btn => btn.onclick = () => { toggleTheme(); closeAllMenus(); });
document.querySelectorAll(".lang-toggle-btn").forEach(btn => btn.onclick = () => { currentLang = (currentLang === "ar" ? "en" : "ar"); localStorage.setItem("lang", currentLang); updateUI(); closeAllMenus(); });
document.getElementById("lang").onchange = (e) => { currentLang = e.target.value; localStorage.setItem("lang", currentLang); updateUI(); };
function toggleTheme() { applyTheme(document.body.classList.contains("day") ? "night" : "day"); if(activeLevel === 4) resetConstLab(); if(document.getElementById("evaluationLab").style.display === "flex") showScreen("evaluationLab"); }
function applyTheme(theme) { document.body.className = theme; localStorage.setItem("theme", theme); const icon = document.getElementById("themeIcon"); if(icon) icon.textContent = (theme === "night") ? "🌙" : "☀️"; }
document.querySelectorAll(".box[id*='SettingsBtn']").forEach(btn => { btn.onclick = (e) => { e.stopPropagation(); const menu = document.getElementById(btn.id.replace("Btn", "")); if(menu) { const isVis = menu.style.display === "flex"; closeAllMenus(); menu.style.display = isVis ? "none" : "flex"; } }; });
function closeAllMenus() { document.querySelectorAll(".settings-menu").forEach(m => m.style.display = "none"); }
window.onclick = () => closeAllMenus();
document.getElementById("start").onclick = () => showScreen("mythsApp");
