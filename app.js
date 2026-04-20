'use strict';

// ========== LANGUAGE ==========
let lang = localStorage.getItem('byoki_lang') || 'ja';

const T = {
  ja: {
    appTitle: '受診サポートガイド',
    appSub: '病院に行くべきか判断をサポート',
    langBtn: 'EN',
    introTitle: '今の体調を教えてください',
    introText: '症状を選択すると、受診すべきか・何科へ行くべきかをお伝えします。',
    cprBtn: '🚨 意識なし・呼吸なし の場合はこちら',
    emergencyBanner: '⚠️ 緊急性の高い症状が含まれています。すぐに119番に電話するか、救急へ向かってください。',
    catGen: '🌡 全身系',
    catHead: '🧠 頭・顔・首',
    catChest: '🫀 胸・背中',
    catAbd: '🫃 お腹',
    catLimb: '🦴 手足・関節',
    catSkin: '🩹 皮膚・外傷',
    countNone: '症状を選択してください',
    countSome: '選択中: {n} 件',
    btnNext: '重症度を入力 →',
    btnBack: '← 戻る',
    severityLabel: '症状の強さ',
    sev0: '軽い（日常生活はできる）',
    sev1: '中程度（集中できない）',
    sev2: '強い（横になっていたい）',
    sev3: '我慢できないほど',
    durationLabel: 'いつから？',
    dur0: '今日から',
    dur1: '2〜3日前から',
    dur2: '1週間以上前から',
    contextLabel: '当てはまるものを選んでください（複数可）',
    ctx0: '持病あり・高齢者（65歳以上）',
    ctx1: '妊娠中',
    ctx2: '子ども（15歳以下）',
    btnResults: '判定結果を見る',
    resultTitle: '判定結果',
    timingTitle: '⏰ 今の時間帯のアドバイス',
    deptTitle: '🏥 おすすめの診療科',
    tipsTitle: '🏠 自宅療養のポイント',
    btnReset: 'もう一度確認する',
    btnShare: '結果をシェアする',
    shareText: '受診サポートガイドで体調チェックをしました。',
    shareCopied: 'クリップボードにコピーしました',
    tier0label: '今すぐ119番！',
    tier0sub: '命に関わる可能性があります。今すぐ119番に電話し、救急車を呼んでください。一人で動かないでください。',
    tier1label: '今すぐ救急へ',
    tier1sub: '緊急度が高い症状です。今すぐ救急病院を受診してください。',
    tier2label: '今日中に受診を',
    tier2sub: '本日中に病院を受診することをおすすめします。',
    tier3label: '数日内に受診を',
    tier3sub: '数日以内に医療機関を受診してください。悪化したらすぐ受診を。',
    tier4label: '自宅療養でOK',
    tier4sub: '今すぐ受診は不要ですが、症状が悪化した場合は受診してください。',
    timingClinic: '平日の診療時間内です。近くのクリニックや病院を受診しましょう。',
    timingEvening: '夕方〜夜間です。夜間救急外来や急患センターを探しましょう。',
    timingNight: '深夜・早朝です。救急病院か救急電話相談（#7119）を利用してください。',
    timingWeekend: '土日・祝日です。休日診療か救急外来を探しましょう。',
    timingNightUrgent: '深夜・早朝です。今すぐ119番または救急病院へ向かってください。一人で運転しないでください。',
    timingUrgent: '今すぐ119番または救急病院へ。一人で運転しないでください。',
    timingOffhours: '今は診療時間外です。症状が悪化したら夜間救急外来へ。明日の診療時間内に受診してください。',
    timingOffhoursWeekend: '今は休日です。症状が悪化したら休日診療・救急外来へ。平日の診療時間内に受診してください。',
    deptInternal: '内科',
    deptNeuro: '神経内科',
    deptNeurosurg: '脳神経外科',
    deptCardio: '循環器内科',
    deptResp: '呼吸器内科',
    deptGastro: '消化器内科',
    deptUro: '泌尿器科',
    deptOrtho: '整形外科',
    deptDerma: '皮膚科',
    deptSurgery: '外科',
    deptER: '救急（ER）',
    // CPR screen
    cprTitle: '心肺蘇生（CPR）',
    cprSub: '意識なし・呼吸なし',
    cprBackBtn: '← 戻る',
    cprS1num: 'STEP 1',
    cprS1title: '安全確認',
    cprS1text: '周囲に危険（車・火・感電など）がないか確認してから近づいてください。',
    cprS2num: 'STEP 2',
    cprS2title: '反応を確認する',
    cprS2text: '肩を軽く叩きながら、大きな声で「大丈夫ですか！」と呼びかけてください。反応がなければ次へ進んでください。',
    cprS3num: 'STEP 3',
    cprS3title: '大声で助けを呼ぶ',
    cprS3text: '「誰か来てください！ 119番を呼んでください！ AEDを持ってきてください！」と大声で叫んでください。',
    cprS4num: 'STEP 4',
    cprS4title: '119番に電話する',
    cprS4text: '電話しながら次のステップを続けることができます。',
    cprCall: '📞 今すぐ119番に電話',
    cprS5num: 'STEP 5',
    cprS5title: '呼吸を確認する（10秒以内）',
    cprS5text: '胸の動きを見て、呼吸をしているか確認します。普通の呼吸がなければ、すぐに胸骨圧迫を開始してください。',
    cprS6num: 'STEP 6',
    cprS6title: '胸骨圧迫（心臓マッサージ）',
    cprS6text: '両手を重ねて胸の真ん中（胸骨の下半分）に置き、肘を伸ばして真上から体重をかけて押してください。',
    cprDepth: '⬇️ 5〜6cm 押し込む　💪 肘を伸ばして押す',
    cprCountLabel: '回目',
    cprBtnStart: '▶ 圧迫を開始',
    cprBtnPause: '⏸ 一時停止',
    cprBtnMuteOn: '🔇 消音',
    cprBtnMuteOff: '🔊 音ON',
    cprCircleText: '押す！',
    cprS7num: 'STEP 7',
    cprS7title: 'AED到着時',
    cprS7text: 'AEDの電源を入れたら音声ガイダンスに従ってください。電気ショック中は傷病者から離れてください。ショック後はすぐに胸骨圧迫を再開してください。',
    cycleFlash: '⚡ 30回！そのまま続けてください！',
    muteWarning: '🔔 <strong>マナーモードをオフ</strong>にすると音声ガイドが使えます。音がなくてもアニメーションで圧迫リズムを確認できます。',
  },
  en: {
    appTitle: 'Medical Consultation Guide',
    appSub: 'Should you see a doctor?',
    langBtn: 'JP',
    introTitle: 'How are you feeling?',
    introText: 'Select your symptoms and we will help you decide whether to see a doctor and which department to visit.',
    cprBtn: '🚨 Unconscious / Not Breathing — Tap Here',
    emergencyBanner: '⚠️ You have selected critical symptoms. Call 119 immediately or go to the ER now.',
    catGen: '🌡 General',
    catHead: '🧠 Head / Face / Neck',
    catChest: '🫀 Chest / Back',
    catAbd: '🫃 Abdomen',
    catLimb: '🦴 Limbs / Joints',
    catSkin: '🩹 Skin / Injury',
    countNone: 'Please select symptoms',
    countSome: 'Selected: {n}',
    btnNext: 'Enter Severity →',
    btnBack: '← Back',
    severityLabel: 'How severe are your symptoms?',
    sev0: 'Mild (can do daily activities)',
    sev1: 'Moderate (hard to concentrate)',
    sev2: 'Severe (need to lie down)',
    sev3: 'Unbearable',
    durationLabel: 'How long have you had these symptoms?',
    dur0: 'Started today',
    dur1: '2–3 days ago',
    dur2: 'More than 1 week',
    contextLabel: 'Select all that apply',
    ctx0: 'Chronic illness / Elderly (65+)',
    ctx1: 'Pregnant',
    ctx2: 'Child (15 or under)',
    btnResults: 'See Results',
    resultTitle: 'Results',
    timingTitle: '⏰ Advice for Right Now',
    deptTitle: '🏥 Recommended Department',
    tipsTitle: '🏠 Home Care Tips',
    btnReset: 'Check Again',
    btnShare: 'Share Results',
    shareText: 'I checked my symptoms with the Medical Consultation Guide.',
    shareCopied: 'Copied to clipboard',
    tier0label: 'Call 119 Now!',
    tier0sub: 'This may be life-threatening. Call 119 immediately for an ambulance. Do not move on your own.',
    tier1label: 'Go to ER Now',
    tier1sub: 'This is urgent. Go to the nearest emergency room immediately.',
    tier2label: 'See a Doctor Today',
    tier2sub: 'You should visit a doctor or clinic today.',
    tier3label: 'See a Doctor Soon',
    tier3sub: 'Please see a doctor within a few days. Seek care sooner if symptoms worsen.',
    tier4label: 'Home Care is OK',
    tier4sub: 'No immediate visit needed, but see a doctor if symptoms worsen.',
    timingClinic: 'It\'s during clinic hours. Visit a nearby clinic or hospital.',
    timingEvening: 'It\'s evening. Look for a night-hours clinic or urgent care.',
    timingNight: 'It\'s late at night. Go to an ER or call the advice line (#7119).',
    timingWeekend: 'It\'s the weekend. Look for a weekend/holiday clinic or ER.',
    timingNightUrgent: 'It\'s the middle of the night. Call 119 or go to the ER now. Do not drive alone.',
    timingUrgent: 'Call 119 or go to the ER now. Do not drive alone.',
    timingOffhours: 'Clinics are closed now. Go to an after-hours clinic if symptoms worsen. Otherwise, visit a clinic tomorrow.',
    timingOffhoursWeekend: 'It\'s the weekend. See a weekend clinic if symptoms worsen. Otherwise, visit a clinic on a weekday.',
    deptInternal: 'Internal Medicine',
    deptNeuro: 'Neurology',
    deptNeurosurg: 'Neurosurgery',
    deptCardio: 'Cardiology',
    deptResp: 'Pulmonology',
    deptGastro: 'Gastroenterology',
    deptUro: 'Urology',
    deptOrtho: 'Orthopedics',
    deptDerma: 'Dermatology',
    deptSurgery: 'General Surgery',
    deptER: 'Emergency Room (ER)',
    // CPR screen
    cprTitle: 'CPR Guide',
    cprSub: 'Unconscious / Not Breathing',
    cprBackBtn: '← Back',
    cprS1num: 'STEP 1',
    cprS1title: 'Check for Safety',
    cprS1text: 'Make sure the area is safe (no traffic, fire, electrical hazard) before approaching.',
    cprS2num: 'STEP 2',
    cprS2title: 'Check for Response',
    cprS2text: 'Tap the shoulder firmly and shout "Are you OK?". If there is no response, proceed to the next step.',
    cprS3num: 'STEP 3',
    cprS3title: 'Call for Help',
    cprS3text: 'Shout: "Someone call 119! Bring an AED!"',
    cprS4num: 'STEP 4',
    cprS4title: 'Call 119',
    cprS4text: 'You can continue the steps while on the phone.',
    cprCall: '📞 Call 119 Now',
    cprS5num: 'STEP 5',
    cprS5title: 'Check for Breathing (within 10 seconds)',
    cprS5text: 'Look for chest rise. If no normal breathing, start chest compressions immediately.',
    cprS6num: 'STEP 6',
    cprS6title: 'Chest Compressions (CPR)',
    cprS6text: 'Place both hands on the lower half of the breastbone (sternum), 2–3 finger widths above the bottom tip (xiphoid). Keep elbows straight and push straight down.',
    cprDepth: '⬇️ Push down 5–6 cm　💪 Keep elbows straight',
    cprCountLabel: '',
    cprBtnStart: '▶ Start Compressions',
    cprBtnPause: '⏸ Pause',
    cprBtnMuteOn: '🔇 Mute',
    cprBtnMuteOff: '🔊 Sound On',
    cprCircleText: 'Push!',
    cprS7num: 'STEP 7',
    cprS7title: 'When AED Arrives',
    cprS7text: 'Turn on the AED and follow the voice instructions. Stand clear during the shock. Resume compressions immediately after.',
    cycleFlash: '⚡ 30 done! Keep going!',
    muteWarning: '🔔 Turn <strong>Silent Mode OFF</strong> to hear the audio guide. The animation works even without sound.',
  }
};

// ========== SYMPTOMS DATA ==========
const SYMPTOMS = [
  // 全身系
  {id:'gen01', cat:'gen', emergency:false, ja:'発熱', en:'Fever'},
  {id:'gen02', cat:'gen', emergency:false, ja:'強い倦怠感・だるさ', en:'Severe fatigue / malaise'},
  {id:'gen03', cat:'gen', emergency:true,  ja:'意識がおかしい・ぼんやりする', en:'Altered consciousness / confusion'},
  {id:'gen04', cat:'gen', emergency:false, ja:'急激な体重減少', en:'Rapid unexplained weight loss'},
  // 頭・顔・首
  {id:'head01', cat:'head', emergency:false, ja:'頭痛', en:'Headache'},
  {id:'head02', cat:'head', emergency:false, ja:'めまい・立ちくらみ', en:'Dizziness / vertigo'},
  {id:'head03', cat:'head', emergency:true,  ja:'突然の激しい頭痛（今まで最悪）', en:'Sudden severe headache (worst ever)'},
  {id:'head04', cat:'head', emergency:true,  ja:'顔の歪み・片側の麻痺', en:'Facial drooping / one-sided paralysis'},
  {id:'head05', cat:'head', emergency:false, ja:'目のかすみ・急な視力変化', en:'Blurred vision / sudden vision change'},
  // 胸・背中
  {id:'chest01', cat:'chest', emergency:true,  ja:'胸の痛み・締め付け感', en:'Chest pain / tightness'},
  {id:'chest02', cat:'chest', emergency:true,  ja:'息苦しさ・呼吸困難', en:'Difficulty breathing'},
  {id:'chest03', cat:'chest', emergency:false, ja:'動悸・脈の乱れ', en:'Palpitations / irregular heartbeat'},
  {id:'chest04', cat:'chest', emergency:false, ja:'背中の強い痛み', en:'Severe back pain'},
  {id:'chest05', cat:'chest', emergency:true,  ja:'血を吐く・血が混じった痰', en:'Coughing up blood'},
  // お腹
  {id:'abd01', cat:'abd', emergency:false, ja:'腹痛', en:'Abdominal pain'},
  {id:'abd02', cat:'abd', emergency:false, ja:'吐き気・嘔吐', en:'Nausea / vomiting'},
  {id:'abd03', cat:'abd', emergency:false, ja:'下痢・血便', en:'Diarrhea / bloody stool'},
  {id:'abd04', cat:'abd', emergency:false, ja:'尿が出ない・血尿', en:'Unable to urinate / blood in urine'},
  {id:'abd05', cat:'abd', emergency:true,  ja:'激しい腹痛（動けない）', en:'Severe abdominal pain (can\'t move)'},
  // 手足・関節
  {id:'limb01', cat:'limb', emergency:false, ja:'関節の腫れ・痛み', en:'Joint swelling / pain'},
  {id:'limb02', cat:'limb', emergency:false, ja:'手足のしびれ・脱力', en:'Numbness or weakness in limbs'},
  {id:'limb03', cat:'limb', emergency:true,  ja:'突然の片麻痺（腕・脚）', en:'Sudden one-sided weakness (arm/leg)'},
  {id:'limb04', cat:'limb', emergency:false, ja:'骨折・脱臼の疑い', en:'Suspected fracture / dislocation'},
  // 皮膚・外傷
  {id:'skin01', cat:'skin', emergency:false, ja:'発疹・じんましん', en:'Rash / hives'},
  {id:'skin02', cat:'skin', emergency:true,  ja:'顔・のどの急な腫れ（アレルギー）', en:'Sudden face or throat swelling (allergy)'},
  {id:'skin03', cat:'skin', emergency:true,  ja:'出血が止まらない', en:'Uncontrollable bleeding'},
];

// ========== HOME CARE TIPS ==========
const TIPS = {
  gen: {
    ja: ['横になって安静にし、こまめに水分を補給しましょう。','発熱時は市販の解熱剤（アセトアミノフェンなど）を用量通りに使用できます。','部屋の温度・湿度を適切に保ち、体を冷やしすぎないようにしましょう。','食欲がなくても、経口補水液やスポーツドリンクで水分・塩分は補給してください。','症状が3日以上続く場合や悪化する場合は受診してください。'],
    en: ['Rest and drink fluids frequently.','Fever-reducing medication (e.g. acetaminophen) can be used as directed.','Keep room temperature and humidity comfortable.','Even if you lack appetite, stay hydrated with electrolyte drinks.','See a doctor if symptoms last more than 3 days or worsen.']
  },
  head: {
    ja: ['静かな暗い部屋で目を閉じて横になりましょう。','こめかみや首筋を冷たいタオルで軽く冷やすと楽になることがあります。','市販の鎮痛剤（イブプロフェン・アセトアミノフェン）を用量通りに使用できます。','スマートフォン・パソコンの使用を控え、目を休めましょう。','カフェイン摂取量を減らし、水分を十分に摂りましょう。'],
    en: ['Lie down in a quiet, dark room with eyes closed.','A cool towel on the temples or neck may ease headaches.','OTC pain relievers (ibuprofen, acetaminophen) can be used as directed.','Reduce screen time and rest your eyes.','Cut back on caffeine and stay well hydrated.']
  },
  chest: {
    ja: ['ゆっくり座るか横になり、深くゆっくり呼吸してください（4秒吸って8秒で吐く）。','締め付けるような衣服はゆるめ、楽な姿勢を保ちましょう。','カフェイン・アルコールは控えてください。','ストレスや過労後であれば、まず十分な休息をとりましょう。','息苦しさが続く・悪化する場合はすぐに受診してください。'],
    en: ['Sit or lie down and breathe slowly and deeply (4 sec in, 8 sec out).','Loosen any tight clothing and maintain a comfortable position.','Avoid caffeine and alcohol.','If stress or fatigue triggered symptoms, rest thoroughly first.','Seek care immediately if breathing difficulty persists or worsens.']
  },
  abd: {
    ja: ['食事を一時控え、経口補水液で水分・電解質を補給しましょう。','下痢・嘔吐が続く場合は脱水に注意してください。','腹部を温めると（湯たんぽなど）腹痛が和らぐことがあります（激痛時は不可）。','刺激物・油物・乳製品を一時的に避けましょう。','血便・黒色便がある場合は必ず受診してください。'],
    en: ['Avoid solid food temporarily and replenish fluids with oral rehydration solution.','Watch for signs of dehydration if vomiting or diarrhea continue.','Applying gentle warmth to the abdomen may relieve pain (not for severe pain).','Temporarily avoid spicy foods, fatty foods, and dairy.','See a doctor immediately if you have bloody or black stools.']
  },
  limb: {
    ja: ['患部を安静にし、無理に動かさないようにしましょう。','急性の腫れ・痛みには冷却（15〜20分）が有効です。慢性の場合は温熱が効果的。','足首・膝は心臓より高く挙上して腫れを軽減しましょう。','市販の消炎鎮痛剤（外用・内服）を用量通りに使用できます。','骨折・脱臼の疑いがある場合は動かさず、固定して受診してください。'],
    en: ['Rest the affected area and avoid moving it unnecessarily.','Apply ice (15–20 min) for acute swelling. Use heat for chronic pain.','Elevate ankle or knee above heart level to reduce swelling.','OTC anti-inflammatory medication (topical or oral) can be used as directed.','If fracture or dislocation is suspected, immobilize and see a doctor.']
  },
  skin: {
    ja: ['傷口は流水で十分に洗い流し、清潔なガーゼで保護しましょう。','軽いやけどは流水で15分以上冷やしてください。氷・氷水は直接当てないでください。','じんましん・かゆみには市販の抗ヒスタミン薬が使えます。','発疹が広がる・発熱を伴う場合はすぐに受診してください。','やけどが広範囲・深い場合は必ず受診してください。'],
    en: ['Rinse wounds thoroughly with running water and cover with clean gauze.','For minor burns, cool with running water for at least 15 minutes. Do not apply ice.','OTC antihistamines can relieve hives and itching.','See a doctor if the rash spreads or is accompanied by fever.','See a doctor for extensive or deep burns.']
  }
};

// ========== STATE ==========
let selectedSymptoms = [];
let selectedSeverity = null;
let selectedDuration = null;
let selectedContext = {chronic: false, pregnant: false, child: false};

// ========== URGENCY CALCULATION ==========
function calculateUrgency() {
  const hasEmergency = selectedSymptoms.some(id => {
    const s = SYMPTOMS.find(x => x.id === id);
    return s && s.emergency;
  });
  if (hasEmergency) return 0;

  const sevScore = {mild:1, moderate:3, strong:6, unbearable:9};
  const durScore = {today:0, days23:1, week:2};
  let score = sevScore[selectedSeverity] || 1;
  score += durScore[selectedDuration] || 0;
  if (selectedContext.chronic || selectedContext.pregnant || selectedContext.child) score += 2;
  if (selectedSymptoms.length >= 5) score += 2;
  else if (selectedSymptoms.length >= 3) score += 1;

  if (score >= 8) return 1;
  if (score >= 5) return 2;
  if (score >= 3) return 3;
  return 4;
}

// ========== DEPARTMENTS ==========
function getDepartments(tier) {
  const catMap = {
    gen:   [{key:'deptInternal', er:false}],
    head:  [{key:'deptNeuro', er:false}, {key:'deptNeurosurg', er:false}],
    chest: [{key:'deptCardio', er:false}, {key:'deptResp', er:false}],
    abd:   [{key:'deptGastro', er:false}],
    limb:  [{key:'deptOrtho', er:false}],
    skin:  [{key:'deptDerma', er:false}, {key:'deptSurgery', er:false}],
  };
  // 症状ごとの個別マッピング（カテゴリ一括マップより優先）
  const special = {
    abd04:  'deptUro',      // 血尿・尿が出ない → 泌尿器科
    head05: 'deptInternal', // 急な視力変化 → 内科（眼科への橋渡し）
    skin02: 'deptInternal', // アナフィラキシー → 内科（ERは tier で既に追加済み）
    skin03: 'deptSurgery',  // 出血が止まらない → 外科
  };
  // カテゴリマップを使わない症状（個別マッピングで十分なもの）
  const skipCatMap = new Set(['skin02', 'skin03']);

  const seen = new Set();
  const result = [];

  if (tier <= 1) {
    result.push({key:'deptER', er:true});
    seen.add('deptER');
  }

  const cats = [...new Set(selectedSymptoms
    .filter(id => !skipCatMap.has(id))
    .map(id => { const s = SYMPTOMS.find(x => x.id === id); return s ? s.cat : null; })
    .filter(Boolean))];

  for (const id of selectedSymptoms) {
    if (special[id]) {
      const k = special[id];
      if (!seen.has(k)) { result.push({key:k, er:false}); seen.add(k); }
    }
  }
  for (const cat of cats) {
    if (!catMap[cat]) continue;
    for (const dept of catMap[cat]) {
      if (!seen.has(dept.key) && result.length < 3) {
        result.push(dept);
        seen.add(dept.key);
      }
    }
  }
  if (result.length === 0) result.push({key:'deptInternal', er:false});
  return result;
}

// ========== TIMING ADVICE ==========
function getTimingAdvice(tier) {
  const now = new Date();
  const hour = now.getHours();
  const dow = now.getDay();
  const isWeekend = (dow === 0 || dow === 6);
  const isNight   = (hour >= 22 || hour < 6);
  const isEvening = (hour >= 18 && hour < 22);
  const isClinicHours = (hour >= 9 && hour < 18) && !isWeekend;

  // Tier 0・1: 今すぐ救急
  if (tier <= 1) {
    return isNight ? T[lang].timingNightUrgent : T[lang].timingUrgent;
  }
  // Tier 2: 今日中に受診
  if (tier === 2) {
    if (isClinicHours)  return T[lang].timingClinic;
    if (isNight)        return T[lang].timingNight;
    if (isWeekend)      return T[lang].timingWeekend;
    return T[lang].timingEvening;   // 夕方（18〜22時・平日）
  }
  // Tier 3・4: 数日内 / 自宅療養
  if (isClinicHours)  return T[lang].timingClinic;
  if (isWeekend)      return T[lang].timingOffhoursWeekend;
  return T[lang].timingOffhours;    // 夜間・夕方（診療時間外）
}

// ========== HOME CARE TIPS ==========
function getHomeTips() {
  const cats = [...new Set(selectedSymptoms.map(id => {
    const s = SYMPTOMS.find(x => x.id === id);
    return s ? s.cat : null;
  }).filter(Boolean))];
  const tips = [];
  for (const cat of cats) {
    if (TIPS[cat]) {
      const arr = TIPS[cat][lang];
      for (const t of arr) {
        if (!tips.includes(t) && tips.length < 5) tips.push(t);
      }
    }
  }
  return tips;
}

// ========== SCREEN NAVIGATION ==========
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) { target.classList.add('active'); target.scrollTop = 0; }
}

// ========== APPLY LANGUAGE ==========
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });
  document.querySelectorAll('.symptom-card[data-id]').forEach(el => {
    const id = el.getAttribute('data-id');
    const s = SYMPTOMS.find(x => x.id === id);
    if (s) el.querySelector('.sym-label').textContent = s[lang];
  });
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.textContent = T[lang].langBtn;
  });
  updateCountDisplay();
}

function toggleLang() {
  lang = (lang === 'ja') ? 'en' : 'ja';
  localStorage.setItem('byoki_lang', lang);
  applyLang();
}

// ========== SYMPTOM SELECTION ==========
function buildSymptomGrids() {
  const cats = [
    {key:'gen',   label:'catGen'},
    {key:'head',  label:'catHead'},
    {key:'chest', label:'catChest'},
    {key:'abd',   label:'catAbd'},
    {key:'limb',  label:'catLimb'},
    {key:'skin',  label:'catSkin'},
  ];
  const container = document.getElementById('symptom-categories');
  container.innerHTML = '';
  cats.forEach(cat => {
    const syms = SYMPTOMS.filter(s => s.cat === cat.key);
    const section = document.createElement('div');
    section.className = 'symptom-category';
    const labelEl = document.createElement('div');
    labelEl.className = 'category-label';
    labelEl.setAttribute('data-i18n', cat.label);
    labelEl.textContent = T[lang][cat.label];
    section.appendChild(labelEl);
    const grid = document.createElement('div');
    grid.className = 'symptom-grid';
    syms.forEach(s => {
      const card = document.createElement('div');
      card.className = 'symptom-card' + (s.emergency ? ' emergency-symptom' : '');
      card.setAttribute('data-id', s.id);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      if (s.emergency) {
        const mark = document.createElement('span');
        mark.className = 'emerg-mark';
        mark.textContent = '🚨';
        card.appendChild(mark);
      }
      const lbl = document.createElement('span');
      lbl.className = 'sym-label';
      lbl.textContent = s[lang];
      card.appendChild(lbl);
      card.addEventListener('click', () => toggleSymptom(s.id, card));
      section.appendChild(grid);
      grid.appendChild(card);
    });
    container.appendChild(section);
  });
}

function toggleSymptom(id, cardEl) {
  const idx = selectedSymptoms.indexOf(id);
  if (idx === -1) selectedSymptoms.push(id);
  else selectedSymptoms.splice(idx, 1);
  cardEl.classList.toggle('selected', selectedSymptoms.includes(id));
  updateCountDisplay();
  checkEmergencyBanner();
  document.getElementById('btn-to-screen2').disabled = selectedSymptoms.length === 0;
}

function updateCountDisplay() {
  const el = document.getElementById('selected-count-text');
  if (!el) return;
  if (selectedSymptoms.length === 0) {
    el.textContent = T[lang].countNone;
  } else {
    el.textContent = T[lang].countSome.replace('{n}', selectedSymptoms.length);
  }
}

function checkEmergencyBanner() {
  const banner = document.getElementById('emergency-banner');
  const hasEmerg = selectedSymptoms.some(id => {
    const s = SYMPTOMS.find(x => x.id === id);
    return s && s.emergency;
  });
  banner.classList.toggle('hidden', !hasEmerg);
}

// ========== SCREEN 2 ==========
function goToScreen2() {
  if (selectedSymptoms.length === 0) return;
  showScreen('screen-context');
}

function setSeverity(val) {
  selectedSeverity = val;
  document.querySelectorAll('.sev-btn').forEach(b => b.classList.toggle('selected', b.dataset.val === val));
  updateResultsBtn();
}

function setDuration(val) {
  selectedDuration = val;
  document.querySelectorAll('.dur-btn').forEach(b => b.classList.toggle('selected', b.dataset.val === val));
  updateResultsBtn();
}

function toggleContext(key, el) {
  selectedContext[key] = !selectedContext[key];
  el.classList.toggle('selected', selectedContext[key]);
}

function updateResultsBtn() {
  const btn = document.getElementById('btn-results');
  if (btn) btn.disabled = !(selectedSeverity && selectedDuration);
}

// ========== RENDER RESULTS ==========
function goToResults() {
  const tier = calculateUrgency();
  const tierLabels = ['tier0label','tier1label','tier2label','tier3label','tier4label'];
  const tierSubs   = ['tier0sub',  'tier1sub',  'tier2sub',  'tier3sub',  'tier4sub'];
  const tierEmojis = ['🚨','🔴','🟡','🟢','💚'];

  const card = document.getElementById('urgency-card');
  card.className = 'urgency-card tier-' + tier;
  card.querySelector('.tier-emoji').textContent = tierEmojis[tier];
  card.querySelector('.tier-label').textContent = T[lang][tierLabels[tier]];
  card.querySelector('.tier-sub').textContent   = T[lang][tierSubs[tier]];

  document.getElementById('timing-text').textContent = getTimingAdvice(tier);

  const depts = getDepartments(tier);
  const pillsEl = document.getElementById('dept-pills');
  pillsEl.innerHTML = '';
  depts.forEach(d => {
    const pill = document.createElement('div');
    pill.className = 'dept-pill' + (d.er ? ' er' : '');
    pill.textContent = T[lang][d.key];
    pillsEl.appendChild(pill);
  });

  const homeSec = document.getElementById('homecare-section');
  if (tier <= 1) {
    homeSec.classList.add('hidden');
  } else {
    homeSec.classList.remove('hidden');
    const tips = getHomeTips();
    const ul = document.getElementById('tips-list');
    ul.innerHTML = '';
    tips.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });
  }

  showScreen('screen-results');
}

// ========== RESET ==========
function resetApp() {
  selectedSymptoms = [];
  selectedSeverity = null;
  selectedDuration = null;
  selectedContext = {chronic: false, pregnant: false, child: false};
  document.querySelectorAll('.symptom-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.sev-btn,.dur-btn,.ctx-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('emergency-banner').classList.add('hidden');
  updateCountDisplay();
  document.getElementById('btn-to-screen2').disabled = true;
  updateResultsBtn();
  showScreen('screen-symptoms');
}

// ========== SHARE ==========
function shareResults() {
  const tier = calculateUrgency();
  const tierLabels = ['tier0label','tier1label','tier2label','tier3label','tier4label'];
  const text = T[lang].shareText + ' ' + T[lang][tierLabels[tier]];
  if (navigator.share) {
    navigator.share({title: T[lang].appTitle, text}).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => showToast(T[lang].shareCopied)).catch(() => {});
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ========== CPR SCREEN ==========
let cprAudioCtx = null;
let cprInterval = null;
let cprCount = 0;
let cprRunning = false;
let cprMuted = false;
let cprCycleCount = 0;
let cprFlashTimer = null;

// ========== CPR CIRCLE POSITIONING ==========
// Grok画像(856×1146px)内の赤枠中心座標:
//   X: 427px = 49.9%  Y: 662px = 57.8%
const CPR_RED_PCT_X = 0.499;
const CPR_RED_PCT_Y = 0.578;

function positionCompressionCircle() {
  const img    = document.querySelector('.cpr-guide-img');
  const circle = document.getElementById('compress-circle');
  if (!img || !circle) return;
  // img.offsetLeft/Top は .cpr-img-wrap(position:relative)基準の座標
  circle.style.left = (img.offsetLeft + img.offsetWidth  * CPR_RED_PCT_X) + 'px';
  circle.style.top  = (img.offsetTop  + img.offsetHeight * CPR_RED_PCT_Y) + 'px';
}

function showCPR() {
  stopCPR();
  cprCount = 0;
  cprCycleCount = 0;
  updateCPRCounter();
  const flash = document.getElementById('cycle-flash');
  if (flash) flash.classList.add('hidden');
  document.getElementById('btn-start-cpr').setAttribute('data-i18n', 'cprBtnStart');
  document.getElementById('btn-start-cpr').textContent = T[lang].cprBtnStart;
  document.getElementById('compress-circle').classList.remove('beating');
  showScreen('screen-cpr');
  // 画面表示後に位置を確定（レイアウト完了後に実行）
  requestAnimationFrame(positionCompressionCircle);
}

function startCPR() {
  if (cprRunning) { stopCPR(); return; }
  cprRunning = true;
  const btn = document.getElementById('btn-start-cpr');
  btn.textContent = T[lang].cprBtnPause;
  document.getElementById('compress-circle').classList.add('beating');
  if (!cprMuted) initAudioCtx();
  cprInterval = setInterval(compressionTick, 545);
}

function stopCPR() {
  cprRunning = false;
  clearInterval(cprInterval);
  cprInterval = null;
  document.getElementById('compress-circle').classList.remove('beating');
  const btn = document.getElementById('btn-start-cpr');
  if (btn) btn.textContent = T[lang].cprBtnStart;
}

function compressionTick() {
  cprCount++;
  cprCycleCount++;
  updateCPRCounter();
  if (!cprMuted) beep();
  if (cprCycleCount >= 30) {
    cprCycleCount = 0;
    showCycleFlash();
  }
}

function updateCPRCounter() {
  const el = document.getElementById('cpr-count');
  if (el) el.textContent = cprCount;
}

function showCycleFlash() {
  const flash = document.getElementById('cycle-flash');
  if (!flash) return;
  flash.textContent = T[lang].cycleFlash;
  flash.classList.remove('hidden');
  clearTimeout(cprFlashTimer);
  cprFlashTimer = setTimeout(() => flash.classList.add('hidden'), 2000);
}

function initAudioCtx() {
  if (!cprAudioCtx) {
    try { cprAudioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  if (cprAudioCtx && cprAudioCtx.state === 'suspended') cprAudioCtx.resume();
}

function beep() {
  if (!cprAudioCtx) return;
  try {
    const osc = cprAudioCtx.createOscillator();
    const gain = cprAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(cprAudioCtx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, cprAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, cprAudioCtx.currentTime + 0.12);
    osc.start();
    osc.stop(cprAudioCtx.currentTime + 0.12);
  } catch(e) {}
}

function toggleMute() {
  cprMuted = !cprMuted;
  if (!cprMuted) initAudioCtx();
  const btn = document.getElementById('btn-mute');
  if (btn) btn.textContent = cprMuted ? T[lang].cprBtnMuteOff : T[lang].cprBtnMuteOn;
}


// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  buildSymptomGrids();
  applyLang();

  // Language toggles
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

  // Screen 1
  document.getElementById('btn-cpr-main').addEventListener('click', showCPR);
  document.getElementById('btn-to-screen2').addEventListener('click', goToScreen2);
  document.getElementById('btn-to-screen2').disabled = true;

  // Screen 2
  document.getElementById('btn-back-s2').addEventListener('click', () => showScreen('screen-symptoms'));
  document.querySelectorAll('.sev-btn').forEach(b => b.addEventListener('click', () => setSeverity(b.dataset.val)));
  document.querySelectorAll('.dur-btn').forEach(b => b.addEventListener('click', () => setDuration(b.dataset.val)));
  document.querySelectorAll('.ctx-btn').forEach(b => b.addEventListener('click', () => toggleContext(b.dataset.ctx, b)));
  document.getElementById('btn-results').addEventListener('click', goToResults);
  updateResultsBtn();

  // Screen 3
  document.getElementById('btn-back-results').addEventListener('click', () => showScreen('screen-context'));
  document.getElementById('btn-reset').addEventListener('click', resetApp);
  document.getElementById('btn-share').addEventListener('click', shareResults);

  // CPR screen
  document.getElementById('btn-back-cpr').addEventListener('click', () => { stopCPR(); showScreen('screen-symptoms'); });
  document.getElementById('btn-start-cpr').addEventListener('click', startCPR);
  document.getElementById('btn-mute').addEventListener('click', toggleMute);

  // CPR circle: reposition on image load and window resize
  const cprImg = document.querySelector('.cpr-guide-img');
  if (cprImg) {
    cprImg.addEventListener('load', positionCompressionCircle);
    if (cprImg.complete) positionCompressionCircle();
  }
  window.addEventListener('resize', positionCompressionCircle);

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
