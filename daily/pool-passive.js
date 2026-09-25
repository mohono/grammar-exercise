/* ═══ مخزن جمله‌ها — مجهول (۱۳ ساختار × ۱۰) ═══ */
window.POOL = (window.POOL || []).concat([

/* ── مجهول حال ساده ────────────────────── */
{ id:"p-ps-1", slot:"p-ps",
  fa:"این پنیر در ایتالیا تولید می‌شود.",
  en:"This cheese is made in Italy.",
  why:["کننده (کارخانه یا کارگر) مهم نیست؛ خودِ پنیر موضوع جمله است. واقعیت کلی، پس مجهول حال ساده: <en>is + V3</en>.",
       "«تولید می‌شود» در فارسی یک فعل است؛ در انگلیسی دو جزء لازم است: <en>is</en> + <en>made</en>. جا انداختن <en>is</en> رایج‌ترین خطای مجهول است."],
  misses:[
    { en:"This cheese makes in Italy.", why:"معلوم بدون مفعول: یعنی خود پنیر در ایتالیا چیزی می‌سازد." },
    { en:"This cheese is make in Italy.", why:"بعد از <en>is</en> در مجهول قسمت سوم فعل: <en>made</en>." }
  ],
  alt:"<en>This cheese is produced in Italy.</en> — رسمی‌تر؛ <en>made</en> در گفت‌وگوی روزمره طبیعی‌تر است."},
{ id:"p-ps-2", slot:"p-ps",
  fa:"زباله‌ها سه‌شنبه‌ها جمع‌آوری می‌شوند.",
  en:"The rubbish is collected on Tuesdays.",
  why:["کار روتین که کننده‌اش (شهرداری) بدیهی است: مجهول حال ساده.",
       "<en>rubbish</en> (آمریکایی: <en>trash / garbage</en>) غیرقابل‌شمارش است، پس فعل مفرد: <en>is collected</en>. فارسی «زباله‌ها» را جمع بسته و به <x>are</x> می‌کشاند."],
  misses:[
    { en:"The rubbish are collected on Tuesdays.", why:"اسم غیرقابل‌شمارش فعل مفرد می‌گیرد، هرچند فارسی جمعش بسته." },
    { en:"The rubbish collects on Tuesdays.", why:"معلوم: یعنی زباله خودش سه‌شنبه‌ها چیزی جمع می‌کند." }
  ]},
{ id:"p-ps-3", slot:"p-ps",
  fa:"در این رستوران به مشتری‌ها آب مجانی داده می‌شود.",
  en:"Customers are given free water in this restaurant.",
  why:["<en>give</en> دو مفعول دارد (به کسی، چیزی). در انگلیسی معمولاً شخص فاعلِ مجهول می‌شود: <en>Customers are given…</en>",
       "<en>water</en> غیرقابل‌شمارش است: <en>free water</en>، بدون <en>a</en>."],
  misses:[
    { en:"To customers is given free water in this restaurant.", why:"ترجمهٔ ترتیب فارسی؛ فاعل انگلیسی نمی‌تواند با حرف اضافه شروع شود." },
    { en:"Customers are given a free water in this restaurant.", why:"<en>water</en> <en>a</en> نمی‌گیرد (مگر به معنای «یک بطری/لیوان آب» در سفارش)." }
  ],
  alt:"<en>Free water is given to customers in this restaurant.</en> — دستوری است، ولی شکلی که شخص فاعل است طبیعی‌تر است."},
{ id:"p-ps-4", slot:"p-ps",
  fa:"اینجا سیگار کشیدن مجاز نیست.",
  en:"Smoking isn't allowed here.",
  why:["«مجاز نیست» = اجازه داده نمی‌شود: مجهول حال سادهٔ <en>allow</en>. فاعل خودِ کار است، به شکل <en>-ing</en>: <en>Smoking</en>.",
       "برای شخص: <en>You aren't allowed to smoke here.</en> — مجهول با شخص به‌عنوان فاعل."],
  misses:[
    { en:"Here is not allowed smoking.", why:"ترتیب فارسی؛ <en>here</en> فاعل نمی‌شود." },
    { en:"It doesn't allow to smoke here.", why:"معلوم با فاعل خالی، و <en>allow</en> مستقیماً مصدر نمی‌گیرد (<en>allow someone to…</en>)." }
  ],
  alt:"<en>You're not allowed to smoke here.</en> — با شخص؛ مستقیم‌تر و گفتاری‌تر."},
{ id:"p-ps-5", slot:"p-ps",
  fa:"به این جور ماشین‌ها چه می‌گویند؟",
  en:"What are these kinds of cars called?",
  why:["«چه می‌گویند» = نام نهاده می‌شود: <en>be called</en>. فاعل واقعی (مردم) مهم نیست.",
       "کلمهٔ پرسشی <en>What</en> است نه <en>How</en>، چون جوابش اسم است: <en>They're called SUVs.</en>"],
  misses:[
    { en:"How are these kinds of cars called?", why:"تلهٔ فارسی («چطور می‌گویند»)؛ جوابِ این سؤال اسم است، پس <en>What</en>." },
    { en:"What do call these kinds of cars?", why:"فاعل ندارد؛ یا <en>What do people call…</en> یا مجهول." }
  ]},

/* ── مجهول حال استمراری ────────────────── */
{ id:"p-pc-1", slot:"p-pc",
  fa:"آشپزخانه‌مان دارد بازسازی می‌شود، برای همین بیرون غذا می‌خوریم.",
  en:"Our kitchen is being renovated, so we're eating out.",
  why:["کاری که این روزها روی آشپزخانه انجام می‌شود و هنوز تمام نشده: <en>is being + V3</en>.",
       "<en>is renovated</en> بدون <en>being</en> یعنی یا کار تمام شده (حالت)، یا به‌طور عادی بازسازی می‌شود."],
  misses:[
    { en:"Our kitchen is renovating, so we're eating out.", why:"معلوم: آشپزخانه دارد چیزی را بازسازی می‌کند." },
    { en:"Our kitchen is renovated, so we're eating out.", why:"یعنی بازسازی‌اش تمام شده — پس چرا بیرون غذا می‌خورید؟" }
  ]},
{ id:"p-pc-2", slot:"p-pc",
  fa:"نگران نباشید؛ دارد به درخواستتان رسیدگی می‌شود.",
  en:"Don't worry — your request is being processed.",
  why:["در همین بازه در جریان است و کننده (کارمند یا سیستم) مهم نیست: مجهول حال استمراری.",
       "«رسیدگی کردن به درخواست» = <en>process a request</en>."],
  misses:[
    { en:"Don't worry — your request is processing.", why:"در زبان نرم‌افزار دیده می‌شود ولی در انگلیسی معیار درخواست خودش پردازش نمی‌کند." },
    { en:"Don't worry — your request is processed.", why:"یعنی به‌طور کلی پردازش می‌شود، یا تمام شده؛ نه «الان در جریان است»." }
  ]},
{ id:"p-pc-3", slot:"p-pc",
  fa:"جادهٔ اصلی این هفته در حال تعمیر است؛ از راه دیگری برو.",
  en:"The main road is being repaired this week, so take another route.",
  why:["«در حال تعمیر است» = دارد تعمیر می‌شود: مجهول حال استمراری. فارسی با «در حال … است» ساختار صفتی ساخته؛ انگلیسی فعل مجهول می‌خواهد.",
       "<en>is under repair</en> هم معادل خوبی است."],
  misses:[
    { en:"The main road is repairing this week.", why:"جاده خودش را تعمیر نمی‌کند." },
    { en:"The main road has been repaired this week.", why:"یعنی تمام شده — پس دلیلی برای راه دیگر نیست." }
  ],
  alt:"<en>The main road is under repair this week.</en>"},
{ id:"p-pc-4", slot:"p-pc",
  fa:"حس می‌کنم دارند تعقیبم می‌کنند.",
  en:"I feel like I'm being followed.",
  why:["«دارند» فاعل نامعلوم دارد؛ مهم این است که چه اتفاقی برای من در جریان است: <en>I'm being followed</en>.",
       "فارسی سوم‌شخص جمعِ بی‌مرجع را برای مجهول به کار می‌برد؛ انگلیسی <en>they</en>ی بی‌مرجع را کمتر می‌پسندد."],
  misses:[
    { en:"I feel like I'm following.", why:"معلوم: یعنی من دارم دنبال کسی می‌روم." },
    { en:"I feel like they follow me.", why:"حال ساده یعنی عادتاً تعقیبم می‌کنند؛ و <en>they</en> مرجع ندارد." }
  ]},
{ id:"p-pc-5", slot:"p-pc",
  fa:"اتاقتان الان دارد تمیز می‌شود؛ لطفاً چند دقیقه در لابی منتظر بمانید.",
  en:"Your room is being cleaned at the moment, so please wait in the lobby for a few minutes.",
  why:["در همین لحظه در جریان است و کننده مهم نیست: <en>is being cleaned</en>.",
       "«منتظر ماندن» = <en>wait</en>؛ <en>stay waiting</en> نه."],
  misses:[
    { en:"Your room is cleaning at the moment.", why:"اتاق خودش تمیزکاری نمی‌کند." },
    { en:"Your room is cleaned now.", why:"یعنی الان تمیز است (کار تمام شده) — پس چرا منتظر بمانیم؟" }
  ]},

/* ── مجهول گذشتهٔ ساده ─────────────────── */
{ id:"p-pas-1", slot:"p-pas",
  fa:"این خانه سال ۱۳۴۰ ساخته شد.",
  en:"This house was built in 1961.",
  why:["سازنده مهم نیست؛ خانه و زمانش مهم است. زمان گذشتهٔ مشخص: <en>was + V3</en>.",
       "سال با <en>in</en>. در انگلیسی سال شمسی را به میلادی برگردان (۱۳۴۰ ≈ ۱۹۶۱)."],
  misses:[
    { en:"This house built in 1961.", why:"<en>was</en> جا افتاده؛ یعنی خانه در ۱۹۶۱ چیزی ساخت." },
    { en:"This house has been built in 1961.", why:"حال کامل با سال مشخص ممنوع است." }
  ]},
{ id:"p-pas-2", slot:"p-pas",
  fa:"دیروز گوشی‌ام در مترو دزدیده شد.",
  en:"My phone was stolen on the metro yesterday.",
  why:["دزد نامعلوم است و اهمیتی ندارد: مجهول گذشتهٔ ساده.",
       "<en>steal</en> مفعولش چیز دزدیده‌شده است، <en>rob</en> مفعولش شخص یا مکان: <en>I was robbed</en>. <x>I was stolen</x> یعنی خودم را دزدیدند."],
  misses:[
    { en:"My phone stole on the metro yesterday.", why:"معلوم: گوشی خودش دزدی کرد." },
    { en:"I was stolen my phone on the metro yesterday.", why:"<en>steal</en> شخص را مفعول نمی‌گیرد. یا <en>My phone was stolen</en> یا <en>I had my phone stolen</en>." }
  ],
  alt:"<en>I had my phone stolen on the metro yesterday.</en> — سببیِ «اتفاق ناخوشایند»."},
{ id:"p-pas-3", slot:"p-pas",
  fa:"به من گفته شد که فردا برگردم.",
  en:"I was told to come back the next day.",
  why:["<en>tell</en> شخص را مستقیم مفعول می‌کند، پس مجهولش با شخص ساخته می‌شود: <en>I was told</en>. بعدش <en>to</en> + فعل برای دستور.",
       "«به من گفته شد» را نباید کلمه‌به‌کلمه (<x>It was told to me</x>) ترجمه کرد."],
  misses:[
    { en:"It was told me to come back the next day.", why:"ترجمهٔ کلمه‌به‌کلمه؛ <en>tell</en> با شخص مجهول می‌شود، نه با <en>it</en>." },
    { en:"I was said to come back the next day.", why:"<en>say</en> شخص را مفعول نمی‌گیرد؛ <x>I was said</x> یعنی خودم گفته شدم." }
  ]},
{ id:"p-pas-4", slot:"p-pas",
  fa:"در تصادف کسی آسیب ندید.",
  en:"No one was hurt in the accident.",
  why:["«آسیب دیدن» در فارسی فعل معلوم است، ولی در انگلیسی آسیب را کسی یا چیزی وارد می‌کند: <en>be hurt / be injured</en>.",
       "<en>damage</en> برای اشیاست (<en>The car was damaged</en>)؛ برای آدم <en>hurt / injured</en>."],
  misses:[
    { en:"No one hurt in the accident.", why:"<en>was</en> جا افتاده؛ یعنی کسی به کسی آسیب نزد." },
    { en:"No one was damaged in the accident.", why:"<en>damage</en> برای آدم به کار نمی‌رود." }
  ],
  alt:"<en>No one got hurt in the accident.</en> — get-passive، گفتاری‌تر."},
{ id:"p-pas-5", slot:"p-pas",
  fa:"جلسه به خاطر برف به هفتهٔ بعد موکول شد.",
  en:"The meeting was postponed until the following week because of the snow.",
  why:["کسی که جلسه را عقب انداخت مهم نیست: مجهول گذشتهٔ ساده.",
       "<en>because of</en> + اسم؛ <en>because</en> + جمله. «به خاطر برف» اسم است."],
  misses:[
    { en:"The meeting postponed until the following week because of the snow.", why:"جلسه خودش چیزی را عقب نینداخت." },
    { en:"The meeting was postponed to the next week because the snow.", why:"<en>because</en> بدون <en>of</en> جمله می‌خواهد." }
  ],
  alt:"<en>The meeting was put off until the following week…</en> — گفتاری‌تر."},

/* ── مجهول گذشتهٔ استمراری ─────────────── */
{ id:"p-pac-1", slot:"p-pac",
  fa:"وقتی رسیدیم، سالن هنوز داشت تزئین می‌شد.",
  en:"When we arrived, the hall was still being decorated.",
  why:["کاری روی سالن در جریان بود وقتی کار کوتاه‌تری (رسیدن) رخ داد: <en>was being + V3</en>.",
       "<en>was decorated</en> بدون <en>being</en> یعنی تزئین تمام شده بود (حالت)."],
  misses:[
    { en:"When we arrived, the hall was still decorating.", why:"سالن خودش تزئین نمی‌کرد." },
    { en:"When we arrived, the hall was still decorated.", why:"یعنی هنوز تزئین‌ها سر جایشان بود — معنای دیگری!" }
  ]},
{ id:"p-pac-2", slot:"p-pac",
  fa:"ماشینم داشت تعمیر می‌شد، برای همین با تاکسی رفتم.",
  en:"My car was being repaired, so I took a taxi.",
  why:["پس‌زمینه در گذشته، در جریان، و کننده مهم نیست: مجهول گذشتهٔ استمراری.",
       "«با تاکسی رفتن» = <en>take a taxi</en>."],
  misses:[
    { en:"My car was repairing, so I took a taxi.", why:"ماشین خودش تعمیر نمی‌کرد." },
    { en:"My car was repaired, so I took a taxi.", why:"یعنی تعمیر شد — پس چرا تاکسی؟ منطق جمله برعکس می‌شود." }
  ]},
{ id:"p-pac-3", slot:"p-pac",
  fa:"حس کردم کسی دارد نگاهم می‌کند.",
  en:"I felt I was being watched.",
  why:["«کسی» نامعلوم است و محور جمله منم: <en>I was being watched</en>. فعل اصلی گذشته است (<en>felt</en>)، پس فعل دوم هم گذشته.",
       "<en>watch</en> برای نگاه کردنِ ممتد، <en>look at</en> برای لحظه."],
  misses:[
    { en:"I felt I was watching.", why:"معلوم: یعنی من داشتم تماشا می‌کردم." },
    { en:"I felt someone watches me.", why:"هم زمان جلو نرفته (backshift)، هم حال ساده برای کارِ در جریان." }
  ],
  alt:"<en>I felt someone was watching me.</en> — معلوم هم درست است، چون «کسی» در فارسی آمده."},
{ id:"p-pac-4", slot:"p-pac",
  fa:"دیروز ساعت سه، بیمار داشت عمل می‌شد.",
  en:"At three o'clock yesterday, the patient was being operated on.",
  why:["عمل جراحی در لحظه‌ای از گذشته در جریان بود: <en>was being + V3</en>.",
       "<en>operate on someone</en> فعل حرف‌اضافه‌ای است؛ در مجهول، <en>on</en> سر جایش می‌ماند: <en>was being operated on</en>."],
  misses:[
    { en:"At three o'clock yesterday, the patient was being operated.", why:"<en>on</en> جا افتاده؛ در مجهولِ فعل‌های حرف‌اضافه‌ای، حرف اضافه حذف نمی‌شود." },
    { en:"At three o'clock yesterday, the patient was operating.", why:"یعنی خود بیمار داشت جراحی می‌کرد!" }
  ]},
{ id:"p-pac-5", slot:"p-pac",
  fa:"وقتی برق رفت، فایل‌ها داشتند ذخیره می‌شدند.",
  en:"When the power went off, the files were being saved.",
  why:["کاری در جریان (ذخیره) و قطع شدنش با رویداد کوتاه (رفتن برق): <en>were being saved</en>.",
       "«برق رفت» = <en>the power went off / went out</en>، یا <en>there was a power cut</en>."],
  misses:[
    { en:"When the power went off, the files were saving.", why:"فایل‌ها خودشان چیزی ذخیره نمی‌کنند." },
    { en:"When the electricity went, the files were saved.", why:"یعنی ذخیره شدند (کامل)؛ «داشتند» گم شد." }
  ]},

/* ── مجهول حال کامل ────────────────────── */
{ id:"p-pp-1", slot:"p-pp",
  fa:"پروازمان لغو شده؛ باید تا فردا صبر کنیم.",
  en:"Our flight has been cancelled, so we have to wait until tomorrow.",
  why:["اتفاقی در گذشته با نتیجه‌ای در حال (باید صبر کنیم)، و کننده (شرکت هواپیمایی) مهم نیست: <en>has been + V3</en>.",
       "<en>until</en> اینجا درست است: صبر کردن مدام تا فردا."],
  misses:[
    { en:"Our flight has cancelled, so we have to wait until tomorrow.", why:"معلوم: پرواز خودش چیزی را لغو کرده." },
    { en:"Our flight is cancelled, so we have to wait until tomorrow.", why:"قابل قبول (حالتِ لغو)، ولی خبرِ تازه با حال کامل طبیعی‌تر است." }
  ]},
{ id:"p-pp-2", slot:"p-pp",
  fa:"هنوز حقوق این ماه را به من نداده‌اند.",
  en:"I haven't been paid for this month yet.",
  why:["«نداده‌اند» سوم‌شخص بی‌مرجع است: مجهول. <en>pay</en> شخص را مفعول می‌گیرد، پس <en>I haven't been paid</en>.",
       "«هنوز» + ماضی نقلی منفی = حال کامل با <en>yet</en>."],
  misses:[
    { en:"I haven't paid for this month yet.", why:"معلوم: یعنی من هنوز پول این ماه را (به کسی) نداده‌ام." },
    { en:"My salary hasn't paid yet.", why:"<en>been</en> جا افتاده؛ حقوق خودش چیزی را پرداخت نکرده." }
  ],
  alt:"<en>My salary for this month hasn't been paid yet.</en>"},
{ id:"p-pp-3", slot:"p-pp",
  fa:"این پل از پارسال تا حالا دو بار تعمیر شده.",
  en:"This bridge has been repaired twice since last year.",
  why:["«از پارسال تا حالا» بازهٔ باز است، و «دو بار» شمارش در همان بازه: حال کامل مجهول.",
       "<en>since</en> + نقطهٔ شروع (<en>last year</en>)."],
  misses:[
    { en:"This bridge was repaired twice since last year.", why:"<en>since</en> بازه را تا حال باز نگه می‌دارد و گذشتهٔ ساده با آن نمی‌آید." },
    { en:"This bridge has repaired twice since last year.", why:"<en>been</en> جا افتاده." }
  ]},
{ id:"p-pp-4", slot:"p-pp",
  fa:"به همهٔ کارمندها ایمیل زده شده.",
  en:"All the staff have been emailed.",
  why:["خبر با نتیجهٔ فعلی (همه مطلع‌اند) و کننده مهم نیست: حال کامل مجهول. <en>email</en> در انگلیسی فعل هم هست و شخص را مستقیم می‌گیرد.",
       "<en>staff</en> در بریتانیایی معمولاً با فعل جمع می‌آید."],
  misses:[
    { en:"To all the staff has been emailed.", why:"ترتیب فارسی؛ فاعل انگلیسی حرف اضافه ندارد." },
    { en:"All the staff has emailed.", why:"<en>been</en> جا افتاده، پس معلوم شد: کارمندها ایمیل زده‌اند." }
  ],
  alt:"<en>An email has been sent to all the staff.</en>"},
{ id:"p-pp-5", slot:"p-pp",
  fa:"تا حالا ازت دزدی شده؟",
  en:"Have you ever been robbed?",
  why:["تجربه تا حالا (<en>ever</en>) و کننده مهم نیست: <en>Have you ever been + V3?</en>",
       "شخص دزدی‌زده: <en>rob</en>. <en>steal</en> مفعولش چیز است: <x>Have you ever been stolen?</x> یعنی تا حالا خودت را دزدیده‌اند؟"],
  misses:[
    { en:"Have you ever been stolen?", why:"یعنی تو را ربوده‌اند — <en>steal</en> مفعول شخص نمی‌گیرد." },
    { en:"Did anyone ever rob from you?", why:"<en>rob</en> بدون <en>from</en>؛ و حال کامل برای تجربه طبیعی‌تر است." }
  ],
  alt:"<en>Have you ever had anything stolen?</en> — سببیِ ناخوشایند."},

/* ── مجهول گذشتهٔ کامل ─────────────────── */
{ id:"p-pap-1", slot:"p-pap",
  fa:"وقتی رسیدیم، همهٔ بلیت‌ها فروخته شده بود.",
  en:"When we got there, all the tickets had been sold.",
  why:["فروش قبل از رسیدن ما تمام شده بود، و فروشنده مهم نیست: <en>had been + V3</en>.",
       "<en>were sold</en> مبهم است: یا وقتی رسیدیم فروخته شدند، یا حالت «فروخته‌شده بودن»."],
  misses:[
    { en:"When we got there, all the tickets had sold.", why:"<en>been</en> جا افتاده. (<en>tickets had sold out</en> درست است، با <en>out</en>.)" },
    { en:"When we got there, all the tickets were sold.", why:"ترتیب مبهم می‌شود؛ ممکن است یعنی همان لحظه فروخته شدند." }
  ],
  alt:"<en>When we got there, the tickets had sold out.</en> — <en>sell out</en> معلوم است ولی معنای مجهول دارد."},
{ id:"p-pap-2", slot:"p-pap",
  fa:"وقتی برگشتم، دیدم ماشینم را با جرثقیل برده‌اند.",
  en:"When I got back, I found that my car had been towed away.",
  why:["بردن ماشین قبل از برگشتن من بوده، و بَرنده مهم نیست: گذشتهٔ کامل مجهول.",
       "فارسی «برده‌اند» (ماضی نقلی) گفته؛ ولی در داستانِ گذشته، رویدادِ عقب‌تر یک پله عقب می‌رود: <en>had been</en>."],
  misses:[
    { en:"When I got back, I found that they have towed my car.", why:"زمان عقب نرفته، و <en>they</en> بی‌مرجع." },
    { en:"When I got back, I found that my car was towed away.", why:"ترتیب مبهم؛ انگار همان لحظه داشتند می‌بردند." }
  ]},
{ id:"p-pap-3", slot:"p-pap",
  fa:"به ما نگفته بودند که جلسه لغو شده.",
  en:"We hadn't been told that the meeting had been cancelled.",
  why:["دو مجهول: «نگفته بودند» (شخص فاعل: <en>We hadn't been told</en>) و «لغو شده» که قبل از آن نقطه بوده (<en>had been cancelled</en>).",
       "در گفتار <en>We weren't told the meeting was cancelled</en> هم شنیده می‌شود؛ شکل بالا دقیق‌تر است."],
  misses:[
    { en:"It hadn't been said to us that the meeting has been cancelled.", why:"<en>say</en> با شخص مجهول نمی‌شود، و <en>has</en> یک پله عقب نرفته." },
    { en:"We hadn't told that the meeting had been cancelled.", why:"<en>been</en> جا افتاده؛ یعنی ما به کسی نگفته بودیم." }
  ]},
{ id:"p-pap-4", slot:"p-pap",
  fa:"خانه تازه رنگ شده بود و بوی رنگ می‌داد.",
  en:"The house had just been painted and smelled of paint.",
  why:["رنگ‌کاری کمی قبل از نقطه‌ای در گذشته تمام شده بود: <en>had just been painted</en>. <en>just</en> بعد از <en>had</en>.",
       "«بوی چیزی دادن» = <en>smell of something</en>."],
  misses:[
    { en:"The house had just painted and smelled of paint.", why:"<en>been</en> جا افتاده؛ خانه خودش رنگ‌کاری کرده بود." },
    { en:"The house had just been painted and smelled paint.", why:"<en>smell paint</en> یعنی خانه بوی رنگ را استشمام کرد! <en>smell of</en>." }
  ]},
{ id:"p-pap-5", slot:"p-pap",
  fa:"تا ما برسیم، غذا سرو شده بود.",
  en:"By the time we arrived, the food had already been served.",
  why:["<en>By the time</en> + گذشتهٔ ساده، و کار تمام‌شده قبل از آن: گذشتهٔ کامل مجهول.",
       "<en>already</en> بعد از <en>had</en>."],
  misses:[
    { en:"By the time we arrived, the food had already served.", why:"غذا خودش چیزی سرو نکرده بود." },
    { en:"By the time we arrived, the food has already been served.", why:"حال کامل با داستانِ گذشته جور نیست." }
  ]},

/* ── مجهول آینده ───────────────────────── */
{ id:"p-fw-1", slot:"p-fw",
  fa:"نتایج هفتهٔ بعد اعلام می‌شود.",
  en:"The results will be announced next week.",
  why:["آینده و کننده نامهم: <en>will be + V3</en>. فارسی با فعل حال (اعلام می‌شود) آینده را می‌گوید؛ انگلیسی <en>will</en> می‌خواهد.",
       "<en>results</en> جمع است؛ فارسی «نتایج» را با فعل مفرد آورده، که در انگلیسی نمی‌شود."],
  misses:[
    { en:"The results announce next week.", why:"معلوم و بدون <en>will</en>؛ یعنی نتایج چیزی اعلام می‌کنند." },
    { en:"The results is announced next week.", why:"فعل مفرد برای فاعل جمع، و آینده بدون <en>will</en>." }
  ]},
{ id:"p-fw-2", slot:"p-fw",
  fa:"سفارشتان ظرف دو روز ارسال خواهد شد.",
  en:"Your order will be delivered within two days.",
  why:["مجهول آینده. «ظرف دو روز» = <en>within two days</en> (در طول این بازه).",
       "<en>in two days</en> یعنی دو روز بعد از الان (نه زودتر) — معنای دیگری است."],
  misses:[
    { en:"Your order will deliver within two days.", why:"سفارش خودش چیزی را تحویل نمی‌دهد." },
    { en:"Your order will be delivered in two days.", why:"یعنی دقیقاً دو روز دیگر؛ «ظرف» را نمی‌رساند." }
  ]},
{ id:"p-fw-3", slot:"p-fw",
  fa:"نگران نباش، بهت خبر می‌دهند.",
  en:"Don't worry — you'll be informed.",
  why:["«خبر می‌دهند» سوم‌شخص بی‌مرجع است: مجهول. <en>inform</en> و <en>tell</en> شخص را مفعول می‌گیرند، پس <en>you'll be informed / told</en>.",
       "آینده: <en>will be + V3</en>."],
  misses:[
    { en:"Don't worry — you will inform.", why:"یعنی تو به دیگران خبر خواهی داد." },
    { en:"Don't worry — it will be informed to you.", why:"ترجمهٔ کلمه‌به‌کلمه؛ <en>inform</en> با شخص مجهول می‌شود." }
  ],
  alt:"<en>Don't worry — they'll let you know.</en> — معلوم با <en>they</en>ی عمومی؛ محاوره‌ای."},
{ id:"p-fw-4", slot:"p-fw",
  fa:"این ساختمان را قرار است خراب کنند و جایش پارکینگ بسازند.",
  en:"This building is going to be demolished and replaced with a car park.",
  why:["برنامهٔ از پیش تعیین‌شده برای آینده، مجهول: <en>is going to be + V3</en>. همان <en>going to</en>ِ نیت، با <en>be + V3</en>.",
       "<en>demolish</en> برای خراب کردن عمدی ساختمان؛ <en>destroy</en> برای ویرانی (جنگ، زلزله)."],
  misses:[
    { en:"This building is going to demolish.", why:"ساختمان خودش چیزی را خراب نمی‌کند." },
    { en:"This building will be destroyed and a parking will be built.", why:"<en>destroy</en> حس فاجعه دارد، و «پارکینگ» در انگلیسی <en>car park / parking lot</en> است؛ <en>parking</en> تنها قابل‌شمارش نیست." }
  ]},
{ id:"p-fw-5", slot:"p-fw",
  fa:"مهمانی در حیاط برگزار خواهد شد.",
  en:"The party will be held in the garden.",
  why:["«برگزار شدن» = <en>be held</en>، مجهولِ <en>hold</en>.",
       "<en>take place</en> هم «برگزار شدن» است ولی لازم است و مجهول نمی‌شود: <en>will take place</en>، نه <x>will be taken place</x>."],
  misses:[
    { en:"The party will hold in the garden.", why:"معلوم: مهمانی چیزی را برگزار می‌کند." },
    { en:"The party will be taken place in the garden.", why:"<en>take place</en> لازم است و مجهول ندارد." }
  ],
  alt:"<en>The party will take place in the garden.</en>"},

/* ── مجهول آیندهٔ کامل ─────────────────── */
{ id:"p-fp-1", slot:"p-fp",
  fa:"تا تو برگردی، همه‌چیز مرتب شده است.",
  en:"By the time you get back, everything will have been tidied up.",
  why:["کاری که تا نقطه‌ای در آینده تمام شده خواهد بود و کننده مهم نیست: <en>will have been + V3</en>.",
       "در بند <en>By the time</en> حال ساده: <en>you get back</en>."],
  misses:[
    { en:"By the time you get back, everything will have tidied up.", why:"<en>been</en> جا افتاده؛ همه‌چیز خودش را مرتب کرده." },
    { en:"By the time you will get back, everything has been tidied up.", why:"<en>will</en> در بند زمانی، و حال کامل به جای آیندهٔ کامل." }
  ]},
{ id:"p-fp-2", slot:"p-fp",
  fa:"تا آخر سال بعد، خط جدید مترو تکمیل شده است.",
  en:"The new metro line will have been completed by the end of next year.",
  why:["تمام شدن تا ضرب‌الاجل آینده (<en>by</en>)، مجهول: آیندهٔ کامل مجهول.",
       "فارسی ماضی نقلی (تکمیل شده است) گذاشته؛ انگلیسی باید <en>will</en> را اضافه کند."],
  misses:[
    { en:"The new metro line will have completed by the end of next year.", why:"<en>been</en> جا افتاده." },
    { en:"The new metro line has been completed until the end of next year.", why:"حال کامل برای آینده، و <en>until</en> به جای <en>by</en>." }
  ]},
{ id:"p-fp-3", slot:"p-fp",
  fa:"فردا همین موقع، تصمیم گرفته شده است.",
  en:"By this time tomorrow, a decision will have been made.",
  why:["تا نقطه‌ای در آینده، کار تمام خواهد بود: <en>will have been made</en>.",
       "«تصمیم گرفتن» = <en>make a decision</en>؛ مجهولش <en>a decision is made</en>. (<en>take a decision</en> هم در بریتانیایی هست.)"],
  misses:[
    { en:"By this time tomorrow, a decision will be made.", why:"یعنی آن موقع گرفته می‌شود، نه اینکه تا آن موقع گرفته شده." },
    { en:"By this time tomorrow, a decision will have made.", why:"<en>been</en> جا افتاده." }
  ]},
{ id:"p-fp-4", slot:"p-fp",
  fa:"تا ظهر، همهٔ مهمان‌ها از فرودگاه آورده شده‌اند.",
  en:"By noon, all the guests will have been picked up from the airport.",
  why:["آیندهٔ کامل مجهول با <en>by</en>.",
       "«از فرودگاه آوردن کسی» = <en>pick someone up from the airport</en>؛ در مجهول ذره (<en>up</en>) کنار فعل می‌ماند: <en>been picked up</en>."],
  misses:[
    { en:"By noon, all the guests will have been brought from the airport.", why:"دستوری است ولی <en>pick up</en> برای «رفتن و آوردن کسی» طبیعی است." },
    { en:"By noon, all the guests will have picked up from the airport.", why:"<en>been</en> جا افتاده؛ مهمان‌ها کسی را آورده‌اند." }
  ]},
{ id:"p-fp-5", slot:"p-fp",
  fa:"تا نامه به دستت برسد، پول به حسابت واریز شده است.",
  en:"By the time you get the letter, the money will have been paid into your account.",
  why:["آیندهٔ کامل مجهول؛ در بند <en>by the time</en> حال ساده.",
       "«واریز به حساب» = <en>pay into / transfer to an account</en>."],
  misses:[
    { en:"By the time you will get the letter, the money will have been paid into your account.", why:"<en>will</en> در بند زمانی." },
    { en:"By the time you get the letter, the money has been deposited to your account.", why:"حال کامل برای آینده، و <en>deposit into</en> نه <x>to</x>." }
  ]},

/* ── مجهول با modal ────────────────────── */
{ id:"p-mod-1", slot:"p-mod",
  fa:"این فرم باید با خودکار آبی پر شود.",
  en:"This form must be filled in with a blue pen.",
  why:["modal + <en>be</en> + V3. کسی که پر می‌کند مهم نیست؛ قاعده مهم است.",
       "«پر کردن فرم» = <en>fill in</en> (بریتانیایی) یا <en>fill out</en> (آمریکایی). ابزار با <en>with</en>."],
  misses:[
    { en:"This form must fill in with a blue pen.", why:"<en>be</en> جا افتاده؛ فرم خودش چیزی را پر می‌کند." },
    { en:"This form must be fill in with a blue pen.", why:"بعد از <en>be</en> قسمت سوم: <en>filled</en>." }
  ]},
{ id:"p-mod-2", slot:"p-mod",
  fa:"این دارو را نباید با معدهٔ خالی خورد.",
  en:"This medicine shouldn't be taken on an empty stomach.",
  why:["فارسی با مصدرِ بی‌فاعل («نباید خورد») مجهول می‌سازد؛ انگلیسی: <en>shouldn't be + V3</en>.",
       "دارو را <en>take</en> می‌کنند، نه <en>eat</en>. «با معدهٔ خالی» = <en>on an empty stomach</en>."],
  misses:[
    { en:"This medicine shouldn't be eaten with an empty stomach.", why:"<en>eat</en> برای دارو غیرطبیعی است، و حرف اضافه <en>on</en> است." },
    { en:"This medicine shouldn't take on an empty stomach.", why:"یعنی خود دارو نباید چیزی بخورد." }
  ]},
{ id:"p-mod-3", slot:"p-mod",
  fa:"این پیراهن را می‌شود در ماشین لباسشویی شست؟",
  en:"Can this shirt be washed in the washing machine?",
  why:["«می‌شود … شست» = امکان، بدون فاعل: <en>Can + S + be + V3?</en> در سؤال <en>can</en> جلو می‌آید.",
       "بعد از modal، <en>be</en> ساده (نه <en>is</en>)."],
  misses:[
    { en:"Can this shirt wash in the washing machine?", why:"در محاوره گاهی شنیده می‌شود (<en>it washes well</en>)، ولی سؤالِ قاعده‌ای مجهول است." },
    { en:"Can be washed this shirt in the washing machine?", why:"ترتیب سؤال: فاعل بعد از <en>can</en> و قبل از <en>be</en>." }
  ]},
{ id:"p-mod-4", slot:"p-mod",
  fa:"بلیت‌ها را می‌شود آنلاین خرید.",
  en:"Tickets can be bought online.",
  why:["امکان + کننده نامهم: <en>can be + V3</en>.",
       "<en>bought</en> قسمت سوم <en>buy</en> است. <en>online</en> قید است و حرف اضافه نمی‌خواهد."],
  misses:[
    { en:"Tickets can buy online.", why:"بلیت‌ها خودشان چیزی را آنلاین می‌خرند." },
    { en:"Tickets can be buy in online.", why:"قسمت سوم فعل، و <en>online</en> حرف اضافه نمی‌گیرد." }
  ],
  alt:"<en>You can buy tickets online.</en> — با <en>you</en>ی عمومی، گفتاری‌تر."},
{ id:"p-mod-5", slot:"p-mod",
  fa:"این مشکل باید هرچه زودتر حل شود.",
  en:"This problem needs to be solved as soon as possible.",
  why:["الزام + مجهول: <en>must / should / needs to + be + V3</en>. همه درست‌اند؛ <en>needs to be</en> خنثی‌ترین است.",
       "«هرچه زودتر» = <en>as soon as possible</en>."],
  misses:[
    { en:"This problem must solve as soon as possible.", why:"مشکل خودش چیزی را حل نمی‌کند." },
    { en:"This problem should be solve as soon as possible.", why:"قسمت سوم: <en>solved</en>." }
  ],
  alt:"<en>This problem needs solving as soon as possible.</en> — <en>need + -ing</en> معنای مجهول دارد."},

/* ── مجهول modal گذشته ─────────────────── */
{ id:"p-modp-1", slot:"p-modp",
  fa:"این نامه باید هفتهٔ پیش فرستاده می‌شد.",
  en:"This letter should have been sent last week.",
  why:["کاری که در گذشته لازم بود و انجام نشد: <en>should have been + V3</en>.",
       "<en>must have been sent</en> یعنی «حتماً فرستاده شده» (استنتاج) — معنای برعکس!"],
  misses:[
    { en:"This letter should be sent last week.", why:"<en>should be</en> حال یا آینده است؛ با <en>last week</en> جور نیست." },
    { en:"This letter must have been sent last week.", why:"یعنی مطمئنم که فرستاده شده — نه اینکه باید فرستاده می‌شد." }
  ]},
{ id:"p-modp-2", slot:"p-modp",
  fa:"کیفم حتماً در مترو دزدیده شده.",
  en:"My bag must have been stolen on the metro.",
  why:["استنتاج دربارهٔ گذشته («حتماً … شده») + مجهول: <en>must have been + V3</en>.",
       "<en>must be stolen</en> یعنی الان باید دزدیده شود (الزام)."],
  misses:[
    { en:"My bag must be stolen on the metro.", why:"یعنی باید دزدیده شود — الزام، نه استنتاج." },
    { en:"My bag should have been stolen on the metro.", why:"یعنی باید دزدیده می‌شد و نشد — عجیب!" }
  ]},
{ id:"p-modp-3", slot:"p-modp",
  fa:"ممکن است ایمیلم اشتباهی پاک شده باشد.",
  en:"My email might have been deleted by mistake.",
  why:["احتمال دربارهٔ گذشته + مجهول: <en>might / may / could have been + V3</en>.",
       "«اشتباهی» = <en>by mistake</en>."],
  misses:[
    { en:"My email might be deleted by mistake.", why:"یعنی ممکن است (در آینده) پاک شود." },
    { en:"My email may have deleted by mistake.", why:"<en>been</en> جا افتاده؛ ایمیل خودش چیزی را پاک کرده." }
  ]},
{ id:"p-modp-4", slot:"p-modp",
  fa:"می‌شد از این تصادف جلوگیری کرد.",
  en:"This accident could have been prevented.",
  why:["امکانی در گذشته که عملی نشد، مجهول: <en>could have been + V3</en>.",
       "«جلوگیری کردن از» = <en>prevent</en> (بدون حرف اضافه)."],
  misses:[
    { en:"This accident could be prevented.", why:"یعنی الان یا در آینده می‌شود جلویش را گرفت — ولی تصادف رخ داده." },
    { en:"This accident could have prevented.", why:"معلوم: تصادف می‌توانست جلوی چیزی را بگیرد." }
  ]},
{ id:"p-modp-5", slot:"p-modp",
  fa:"امکان ندارد این کیک در خانه پخته شده باشد؛ خیلی حرفه‌ای است.",
  en:"This cake can't have been baked at home — it looks too professional.",
  why:["استنتاجِ منفی دربارهٔ گذشته: <en>can't have been + V3</en>. نقطهٔ مقابل <en>must have been</en>.",
       "<en>mustn't have been</en> در بریتانیایی برای استنتاج منفی به کار نمی‌رود."],
  misses:[
    { en:"This cake mustn't have been baked at home.", why:"برای استنتاج منفی <en>can't</en> یا <en>couldn't</en>." },
    { en:"This cake can't be baked at home.", why:"یعنی امکان ندارد در خانه بپزی‌اش (کلی)؛ نه استنتاج دربارهٔ این کیک." }
  ]},

/* ── مصدر و اسم‌مصدر مجهول ─────────────── */
{ id:"p-nf-1", slot:"p-nf",
  fa:"دوست دارم به مهمانی دعوت شوم.",
  en:"I'd like to be invited to the party.",
  why:["<en>would like</en> مصدر می‌خواهد؛ و من دعوت‌شونده‌ام، پس مصدر مجهول: <en>to be + V3</en>.",
       "<en>I'd like to invite</en> یعنی من دعوت کنم."],
  misses:[
    { en:"I'd like to invite to the party.", why:"معلوم: من دعوت کنم — آن هم بی‌مفعول." },
    { en:"I'd like being invited to the party.", why:"<en>would like</en> با مصدر می‌آید، نه <en>-ing</en>." }
  ]},
{ id:"p-nf-2", slot:"p-nf",
  fa:"از اینکه منتظرم بگذارند متنفرم.",
  en:"I hate being kept waiting.",
  why:["<en>hate</en> + <en>-ing</en>، و من منتظرگذاشته‌شده‌ام: اسم‌مصدر مجهول <en>being + V3</en>.",
       "«منتظر گذاشتن کسی» = <en>keep someone waiting</en>؛ مجهولش <en>be kept waiting</en>."],
  misses:[
    { en:"I hate keeping waiting.", why:"معلوم: من دیگران را منتظر می‌گذارم (و مفعول ندارد)." },
    { en:"I hate being kept wait.", why:"<en>keep someone waiting</en> با <en>-ing</en>." }
  ],
  alt:"<en>I hate to be kept waiting.</en> — با مصدر هم قابل قبول است."},
{ id:"p-nf-3", slot:"p-nf",
  fa:"نوجوان‌ها دوست ندارند با آن‌ها مثل بچه‌ها رفتار شود.",
  en:"Teenagers don't like being treated like children.",
  why:["<en>like</en> + <en>-ing</en>، و نوجوان‌ها رفتارشونده‌اند: <en>being treated</en>.",
       "فارسی با «با آن‌ها … رفتار شود» ساختار را طولانی کرده؛ انگلیسی با یک اسم‌مصدر مجهول جمعش می‌کند."],
  misses:[
    { en:"Teenagers don't like treating like children.", why:"معلوم: نوجوان‌ها با دیگران مثل بچه رفتار نمی‌کنند." },
    { en:"Teenagers don't like that people treat with them like children.", why:"<en>treat</en> مفعول مستقیم می‌گیرد (نه <x>with</x>)، و ساختار سنگین است." }
  ],
  alt:"<en>Teenagers don't like to be treated like children.</en>"},
{ id:"p-nf-4", slot:"p-nf",
  fa:"این لباس‌ها باید اتو شوند.",
  en:"These clothes need to be ironed.",
  why:["<en>need</en> + مصدر مجهول (<en>to be + V3</en>)، یا <en>need + -ing</en> که خودش معنای مجهول دارد: <en>need ironing</en>.",
       "<en>need to iron</en> یعنی لباس‌ها باید چیزی را اتو کنند."],
  misses:[
    { en:"These clothes need to iron.", why:"معلوم: لباس‌ها باید اتو بکشند!" },
    { en:"These clothes need ironed.", why:"در لهجه‌هایی شنیده می‌شود ولی در انگلیسی معیار <en>to be</en> یا <en>-ing</en> لازم است." }
  ],
  alt:"<en>These clothes need ironing.</en>"},
{ id:"p-nf-5", slot:"p-nf",
  fa:"انتظار داشتم بعد از آن همه کار ترفیع بگیرم.",
  en:"I expected to be promoted after all that hard work.",
  why:["«ترفیع گرفتن» در فارسی معلوم است، ولی در انگلیسی ترفیع را دیگری می‌دهد: <en>be promoted</en>. بعد از <en>expect</en> مصدر، پس <en>to be promoted</en>.",
       "<en>get promoted</en> هم خیلی رایج است."],
  misses:[
    { en:"I expected to promote after all that hard work.", why:"یعنی انتظار داشتم کسی را ترفیع بدهم." },
    { en:"I expected being promoted after all that hard work.", why:"<en>expect</en> با مصدر می‌آید، نه <en>-ing</en>." }
  ],
  alt:"<en>I expected to get promoted…</en> — get-passive، گفتاری‌تر."},

/* ── مجهول غیرشخصی ─────────────────────── */
{ id:"p-imp-1", slot:"p-imp",
  fa:"می‌گویند این رستوران بهترین کباب شهر را دارد.",
  en:"This restaurant is said to have the best kebabs in town.",
  why:["«می‌گویند» بی‌مرجع: مجهول غیرشخصی. دو الگو: <en>It is said that + جمله</en> یا <en>S + is said to + فعل</en>.",
       "در الگوی دوم فاعلِ جملهٔ پیرو (رستوران) فاعل کل جمله می‌شود و فعلش به مصدر تبدیل می‌شود."],
  misses:[
    { en:"This restaurant is said that it has the best kebabs in town.", why:"دو الگو قاطی شده: یا <en>It is said that…</en> یا <en>is said to have</en>." },
    { en:"It is said this restaurant to have the best kebabs in town.", why:"باز قاطی: با <en>It</en>، جمله با <en>that</en> می‌آید، نه مصدر." }
  ],
  alt:"<en>It is said that this restaurant has the best kebabs in town.</en> / گفتاری: <en>They say this restaurant…</en>"},
{ id:"p-imp-2", slot:"p-imp",
  fa:"گفته می‌شود قیمت بنزین سال بعد بالا می‌رود.",
  en:"It is said that petrol prices will go up next year.",
  why:["الگوی <en>It is said that</en>: جملهٔ پیرو دست‌نخورده می‌ماند، با زمان خودش (<en>will go up</en>).",
       "در الگوی دیگر: <en>Petrol prices are expected to go up next year</en> — برای آینده <en>expected</en> طبیعی‌تر از <en>said</en> است."],
  misses:[
    { en:"It says that petrol prices will go up next year.", why:"<en>It says</en> یعنی متنی یا تابلویی می‌گوید؛ مجهول نیست." },
    { en:"Petrol prices are said to will go up next year.", why:"بعد از <en>to</en> فعل ساده: <en>to go up</en>؛ <en>will</en> جا ندارد." }
  ],
  alt:"<en>Petrol prices are expected to go up next year.</en>"},
{ id:"p-imp-3", slot:"p-imp",
  fa:"گمان می‌رود آتش‌سوزی از آشپزخانه شروع شده باشد.",
  en:"The fire is thought to have started in the kitchen.",
  why:["اتفاق (شروع آتش) قبل از زمانِ گمان بوده، پس مصدر کامل: <en>to have + V3</en>.",
       "<en>is thought to start</en> یعنی به‌طور عادی شروع می‌شود یا در آینده شروع خواهد شد."],
  misses:[
    { en:"The fire is thought to start in the kitchen.", why:"مصدر ساده برای رویداد گذشته؛ ترتیب زمانی گم می‌شود." },
    { en:"It is thought the fire to have started in the kitchen.", why:"دو الگو قاطی: با <en>It</en> باید <en>that the fire started</en>." }
  ],
  alt:"<en>It is thought that the fire started in the kitchen.</en>"},
{ id:"p-imp-4", slot:"p-imp",
  fa:"معتقدند این خانه صد سال قدمت دارد.",
  en:"This house is believed to be a hundred years old.",
  why:["<en>S + is believed to be</en>. «قدمت داشتن» در انگلیسی با صفت سن ساخته می‌شود: <en>be a hundred years old</en>.",
       "زمان هم‌زمان (الان صدساله است): مصدر ساده <en>to be</en>."],
  misses:[
    { en:"This house is believed that it is a hundred years old.", why:"الگوها قاطی شده‌اند." },
    { en:"This house is believed to have a hundred years.", why:"ترجمهٔ «قدمت دارد»؛ سن در انگلیسی با <en>be … old</en>." }
  ]},
{ id:"p-imp-5", slot:"p-imp",
  fa:"انتظار می‌رود قطار یک ساعت تأخیر داشته باشد.",
  en:"The train is expected to arrive an hour late.",
  why:["«انتظار می‌رود» = <en>is expected to</en>. فاعل جملهٔ پیرو (قطار) فاعل کل جمله می‌شود.",
       "«تأخیر داشتن» = <en>be late</en> / <en>arrive late</en> / <en>be delayed</en>."],
  misses:[
    { en:"It is expected the train to arrive an hour late.", why:"با <en>It</en> باید <en>that the train will arrive…</en>." },
    { en:"The train is expected arriving an hour late.", why:"<en>expected</en> با مصدر می‌آید." }
  ],
  alt:"<en>The train is expected to be an hour late.</en> / <en>It is expected that the train will be an hour late.</en>"},

/* ── سببی و get-passive ────────────────── */
{ id:"p-caus-1", slot:"p-caus",
  fa:"فردا می‌روم موهایم را کوتاه کنم.",
  en:"I'm getting my hair cut tomorrow.",
  why:["فارسی می‌گوید «کوتاه کنم» ولی منظور این است که آرایشگر کوتاه می‌کند. کاری که دیگری برایمان انجام می‌دهد: <en>have / get + مفعول + V3</en>.",
       "<en>I'm cutting my hair</en> یعنی خودم قیچی دست می‌گیرم."],
  misses:[
    { en:"I'm cutting my hair tomorrow.", why:"یعنی خودم موهایم را کوتاه می‌کنم — تلهٔ فارسی." },
    { en:"I'm having cut my hair tomorrow.", why:"ترتیب: مفعول قبل از V3: <en>have my hair cut</en>." }
  ],
  alt:"<en>I'm having my hair cut tomorrow.</en> — <en>have</en> کمی رسمی‌تر از <en>get</en>."},
{ id:"p-caus-2", slot:"p-caus",
  fa:"باید ماشینم را ببرم سرویس؛ صدای عجیبی می‌دهد.",
  en:"I need to get my car serviced — it's making a strange noise.",
  why:["مکانیک سرویس می‌کند، نه من: سببی <en>get + my car + serviced</en>.",
       "«صدا دادن» = <en>make a noise</en>؛ و چون الان در جریان است: <en>it's making</en>."],
  misses:[
    { en:"I need to service my car — it's making a strange noise.", why:"یعنی خودم سرویسش می‌کنم." },
    { en:"I need to get serviced my car — it gives a strange sound.", why:"مفعول قبل از V3، و «صدا دادن» <en>make a noise</en> است." }
  ]},
{ id:"p-caus-3", slot:"p-caus",
  fa:"دیشب گوشی‌ام را دزدیدند.",
  en:"I had my phone stolen last night.",
  why:["سببیِ «اتفاق ناخوشایند»: <en>have + something + V3</en> وقتی چیزی برخلاف میل ما سرمان آمده. ساختار سببی است ولی معنایش «سرم آمد»، نه «دادم انجام دهند».",
       "<en>My phone was stolen last night</en> هم کاملاً درست است."],
  misses:[
    { en:"I had stolen my phone last night.", why:"گذشتهٔ کامل: یعنی من گوشی‌ام را دزدیده بودم!" },
    { en:"I was stolen my phone last night.", why:"<en>steal</en> مفعول شخص نمی‌گیرد." }
  ],
  alt:"<en>My phone was stolen last night.</en>"},
{ id:"p-caus-4", slot:"p-caus",
  fa:"دیروز سر کار دعوایم کردند، چون دیر رسیده بودم.",
  en:"I got told off at work yesterday for being late.",
  why:["get-passive: <en>get + V3</en> برای اتفاقی (معمولاً ناخوشایند) که برای فاعل رخ می‌دهد، در گفتار. «دعوا کردن کسی» (سرزنش) = <en>tell someone off</en>.",
       "<en>for being late</en>: دلیلِ سرزنش با <en>for + -ing</en>."],
  misses:[
    { en:"They fought with me at work yesterday because I was late.", why:"<en>fight</en> یعنی دعوای فیزیکی یا مشاجرهٔ دوطرفه، نه سرزنش." },
    { en:"I got tell off at work yesterday.", why:"بعد از <en>got</en> قسمت سوم: <en>told</en>." }
  ],
  alt:"<en>I was told off at work yesterday…</en> — be-passive، کمی رسمی‌تر."},
{ id:"p-caus-5", slot:"p-caus",
  fa:"مواظب باش، با این سرعت جریمه می‌شوی.",
  en:"Careful — you'll get fined at this speed.",
  why:["get-passive برای پیامدی که سرِ فاعل می‌آید: <en>get fined / caught / hurt</en>. گفتاری و طبیعی.",
       "<en>at this speed</en> — سرعت با <en>at</en>."],
  misses:[
    { en:"Careful — you'll fine at this speed.", why:"معلوم: یعنی تو کسی را جریمه می‌کنی." },
    { en:"Careful — you'll get fine with this speed.", why:"<en>fine</en> صفت است (خوب)! و سرعت با <en>at</en>." }
  ],
  alt:"<en>Careful — you'll be fined at this speed.</en>"},

/* ══ دور دوم: جمله‌های ۶ تا ۱۰ ══ */

/* ── مجهول حال ساده ────────────────────── */
{ id:"p-ps-6", slot:"p-ps",
  fa:"در این مدرسه از کلاس اول به بچه‌ها انگلیسی یاد داده می‌شود.",
  en:"Children at this school are taught English from Year 1.",
  why:["<en>teach</en> دو مفعول دارد؛ شخص فاعل مجهول می‌شود: <en>Children are taught English</en>.",
       "قسمت سوم <en>teach</en> بی‌قاعده است: <en>taught</en>."],
  misses:[
    { en:"To children is taught English from Year 1.", why:"ترتیب فارسی؛ فاعل انگلیسی حرف اضافه نمی‌گیرد." },
    { en:"Children at this school are teached English.", why:"<x>teached</x> وجود ندارد: <en>taught</en>." }
  ],
  alt:"<en>English is taught to children from Year 1.</en>"},
{ id:"p-ps-7", slot:"p-ps",
  fa:"این پیراهن از پنبه است.",
  en:"This shirt is made of cotton.",
  why:["جنس چیزی را انگلیسی با مجهول <en>be made of</en> می‌گوید. فارسی فقط «است» گفته — فعلی نیست که مجهول به نظر برسد.",
       "<en>made of</en> وقتی جنس دیده می‌شود؛ <en>made from</en> وقتی ماده تغییر کرده (کاغذ از چوب)."],
  misses:[
    { en:"This shirt is from cotton.", why:"ترجمهٔ «از پنبه است»؛ یعنی از پنبه آمده!" },
    { en:"This shirt made of cotton.", why:"<en>is</en> جا افتاده." }
  ]},
{ id:"p-ps-8", slot:"p-ps",
  fa:"کارمندان این شرکت ماهی یک بار حقوق می‌گیرند.",
  en:"Employees at this company are paid once a month.",
  why:["«حقوق گرفتن» در فارسی معلوم است، ولی در انگلیسی کارفرما پول می‌دهد: <en>be paid</en>.",
       "«ماهی یک بار» = <en>once a month</en>."],
  misses:[
    { en:"Employees at this company take salary once a month.", why:"ترجمهٔ «حقوق می‌گیرند»؛ <en>get paid / are paid</en>." },
    { en:"Employees at this company are paying once a month.", why:"یعنی کارمندان دارند پول می‌پردازند." }
  ],
  alt:"<en>…get paid once a month.</en>"},
{ id:"p-ps-9", slot:"p-ps",
  fa:"هر سال میلیون‌ها تن غذا دور ریخته می‌شود.",
  en:"Millions of tonnes of food are thrown away every year.",
  why:["واقعیت کلی، کننده نامهم: مجهول حال ساده.",
       "فاعل واقعی <en>millions of tonnes</en> (جمع) است، پس <en>are</en>. فارسی فعل مفرد گذاشته."],
  misses:[
    { en:"Millions of tonnes of food is thrown away every year.", why:"فعل با هستهٔ جمع (<en>millions</en>) هماهنگ است، نه با <en>food</en>." },
    { en:"Millions of tonnes of food throw away every year.", why:"غذا خودش چیزی را دور نمی‌ریزد." }
  ]},
{ id:"p-ps-10", slot:"p-ps",
  fa:"این کلمه چطور تلفظ می‌شود؟",
  en:"How is this word pronounced?",
  why:["سؤالِ مجهول: <en>How is + S + V3?</en>",
       "«تلفظ شدن» مجهول <en>pronounce</en> است؛ کلمه خودش را تلفظ نمی‌کند."],
  misses:[
    { en:"How does this word pronounce?", why:"معلوم: کلمه چیزی را تلفظ می‌کند." },
    { en:"How this word is pronounced?", why:"ترتیب سؤال: <en>is</en> قبل از فاعل." }
  ],
  alt:"<en>How do you pronounce this word?</en>"},

/* ── مجهول حال استمراری ────────────────── */
{ id:"p-pc-6", slot:"p-pc",
  fa:"بیمار را الان دارند به اتاق عمل می‌برند.",
  en:"The patient is being taken to the operating theatre now.",
  why:["«دارند می‌برند» با فاعل نامعلوم: مجهول حال استمراری.",
       "اتاق عمل = <en>operating theatre</en> (آمریکایی: <en>operating room</en>)."],
  misses:[
    { en:"The patient is taking to the operating theatre now.", why:"بیمار خودش دارد چیزی را می‌برد." },
    { en:"They are taking the patient to the operation room.", why:"معلوم با <en>they</en> بی‌مرجع، و «اتاق عمل» اصطلاح خودش را دارد." }
  ]},
{ id:"p-pc-7", slot:"p-pc",
  fa:"ساختمان روبه‌رو را دارند خراب می‌کنند و همه‌جا خاک است.",
  en:"The building opposite is being knocked down, and there's dust everywhere.",
  why:["کار در جریان، کننده نامهم: <en>is being knocked down</en>.",
       "<en>opposite</en> بعد از اسم می‌آید: <en>the building opposite</en>."],
  misses:[
    { en:"The building opposite is knocking down.", why:"ساختمان خودش چیزی را خراب می‌کند." },
    { en:"The opposite building is knocked down.", why:"یعنی خراب شده (تمام)." }
  ]},
{ id:"p-pc-8", slot:"p-pc",
  fa:"این روزها کلی درخت در شهر قطع می‌شود.",
  en:"A lot of trees in the city are being cut down these days.",
  why:["«این روزها» روند فعلی است: مجهول حال استمراری.",
       "«قطع کردن درخت» = <en>cut down</en>."],
  misses:[
    { en:"A lot of trees in the city are cut down these days.", why:"قابل قبول است ولی حس روندِ جاری ضعیف‌تر است." },
    { en:"A lot of trees in the city are cutting these days.", why:"درخت‌ها خودشان چیزی را قطع می‌کنند." }
  ]},
{ id:"p-pc-9", slot:"p-pc",
  fa:"مطمئنم آن دوربین الان دارد از ما فیلم می‌گیرد.",
  en:"I'm sure we're being filmed by that camera right now.",
  why:["تمرکز روی ما (کسانی که فیلم گرفته می‌شوند): مجهول حال استمراری. کنندهٔ مشخص با <en>by</en>.",
       "معلوم (<en>that camera is filming us</en>) هم درست است؛ مجهول «ما» را جلو می‌آورد."],
  misses:[
    { en:"I'm sure we're filming by that camera right now.", why:"یعنی ما داریم با آن دوربین فیلم می‌گیریم." },
    { en:"I'm sure we are filmed by that camera now.", why:"حال ساده عادت است؛ «الان» استمراری می‌خواهد." }
  ],
  alt:"<en>I'm sure that camera is filming us right now.</en>"},
{ id:"p-pc-10", slot:"p-pc",
  fa:"سفارشتان در حال آماده شدن است.",
  en:"Your order is being prepared.",
  why:["«در حال … شدن» = مجهول حال استمراری.",
       "<en>is prepared</en> یعنی آماده است (تمام)."],
  misses:[
    { en:"Your order is preparing.", why:"سفارش خودش چیزی آماده نمی‌کند." },
    { en:"Your order is in preparing.", why:"ترجمهٔ «در حال»؛ <en>in preparation</en> یا <en>being prepared</en>." }
  ]},

/* ── مجهول گذشتهٔ ساده ─────────────────── */
{ id:"p-pas-6", slot:"p-pas",
  fa:"کجا به دنیا آمدی؟",
  en:"Where were you born?",
  why:["<en>be born</en> همیشه مجهول است. «به دنیا آمدی» در فارسی معلوم است؛ در انگلیسی <en>were you born</en>.",
       "برای کسی که زنده است: <en>was / were born</en>، نه <x>are born</x>."],
  misses:[
    { en:"Where did you born?", why:"<en>born</en> فعل معلوم نیست؛ <en>were you born</en>." },
    { en:"Where are you born?", why:"زمان حال؛ تولد در گذشته بوده." }
  ]},
{ id:"p-pas-7", slot:"p-pas",
  fa:"پنجره‌ها دیروز تمیز شدند.",
  en:"The windows were cleaned yesterday.",
  why:["کننده نامهم، زمان گذشته: <en>were + V3</en>.",
       "فاعل جمع: <en>were</en>."],
  misses:[
    { en:"The windows cleaned yesterday.", why:"پنجره‌ها خودشان چیزی را تمیز کردند." },
    { en:"The windows have been cleaned yesterday.", why:"حال کامل با <en>yesterday</en>." }
  ]},
{ id:"p-pas-8", slot:"p-pas",
  fa:"این عکس کی گرفته شد؟",
  en:"When was this photo taken?",
  why:["سؤالِ مجهول گذشته: <en>When was + S + V3?</en>",
       "«عکس گرفتن» = <en>take a photo</en>."],
  misses:[
    { en:"When did this photo take?", why:"معلوم: عکس کی چیزی گرفت؟" },
    { en:"When this photo was taken?", why:"ترتیب سؤال." }
  ]},
{ id:"p-pas-9", slot:"p-pas",
  fa:"کیف پولم پیدا شد و به پلیس تحویل داده شد.",
  en:"My wallet was found and handed in to the police.",
  why:["دو مجهول گذشته، کننده نامعلوم. <en>was</en> دوم را می‌شود حذف کرد: <en>was found and handed in</en>.",
       "«تحویل دادن» (چیز گمشده به مقام رسمی) = <en>hand in</en>."],
  misses:[
    { en:"My wallet found and handed to the police.", why:"<en>was</en> جا افتاده." },
    { en:"My wallet was found and delivered to police.", why:"<en>deliver</en> برای رساندن بسته است؛ و <en>the police</en>." }
  ]},
{ id:"p-pas-10", slot:"p-pas",
  fa:"از من خواستند یک فرم دیگر پر کنم.",
  en:"I was asked to fill in another form.",
  why:["«خواستند» با فاعل نامعلوم: مجهول. <en>ask</en> شخص را مستقیم می‌گیرد: <en>I was asked to…</en>",
       "«خواستن از کسی» ترجمهٔ <en>ask someone</en> است، نه <x>want from</x>."],
  misses:[
    { en:"It was asked from me to fill in another form.", why:"ترجمهٔ «از من خواسته شد»." },
    { en:"I was wanted to fill in another form.", why:"<en>want</en> این ساختار مجهول را ندارد." }
  ]},

/* ── مجهول گذشتهٔ استمراری ─────────────── */
{ id:"p-pac-6", slot:"p-pac",
  fa:"وقتی رسیدم، داشتند ماشینم را با جرثقیل می‌بردند.",
  en:"When I got there, my car was being towed away.",
  why:["کاری در جریان هنگام رسیدن من، فاعل نامعلوم: <en>was being + V3</en>.",
       "«با جرثقیل بردن» = <en>tow away</en>."],
  misses:[
    { en:"When I got there, my car was towed away.", why:"یعنی به محض رسیدنم برده شد، یا قبلاً برده شده بود — مبهم." },
    { en:"When I got there, they were towing my car.", why:"دستوری است، ولی <en>they</en> بی‌مرجع؛ مجهول تمرکز را روی ماشین می‌گذارد." }
  ]},
{ id:"p-pac-7", slot:"p-pac",
  fa:"هفتهٔ پیش که آمدی، خانه داشت رنگ می‌شد.",
  en:"When you came last week, the house was being painted.",
  why:["پس‌زمینهٔ در جریان، مجهول: <en>was being painted</en>.",
       "<en>was painted</en> یعنی یا رنگ‌شده بود، یا همان موقع رنگ شد."],
  misses:[
    { en:"When you came last week, the house was painting.", why:"خانه خودش رنگ‌کاری می‌کرد." },
    { en:"When you came last week, the house was painted.", why:"معنای «در جریان» گم می‌شود." }
  ]},
{ id:"p-pac-8", slot:"p-pac",
  fa:"آن سال‌ها این محله داشت بازسازی می‌شد.",
  en:"In those years, this neighbourhood was being redeveloped.",
  why:["فرایندی طولانی در گذشته، مجهول: گذشتهٔ استمراری مجهول.",
       "«بازسازی شهری» = <en>redevelop</en>."],
  misses:[
    { en:"In those years, this neighbourhood was redeveloping.", why:"معلوم بدون مفعول." },
    { en:"In those years, this neighbourhood has been redeveloped.", why:"حال کامل با «آن سال‌ها»." }
  ]},
{ id:"p-pac-9", slot:"p-pac",
  fa:"در جلسه حس می‌کردم نادیده گرفته می‌شوم.",
  en:"I felt I was being ignored in the meeting.",
  why:["حالتی در جریان در گذشته، من گیرنده: <en>was being ignored</en>.",
       "بعد از <en>felt</en> زمان جملهٔ پیرو هم گذشته است."],
  misses:[
    { en:"I felt I am ignored in the meeting.", why:"زمان عقب نرفته." },
    { en:"I felt I was ignoring in the meeting.", why:"یعنی من کسی را نادیده می‌گرفتم." }
  ]},
{ id:"p-pac-10", slot:"p-pac",
  fa:"وقتی زنگ زدم، سفارشم هنوز داشت بسته‌بندی می‌شد.",
  en:"When I called, my order was still being packed.",
  why:["در جریان در لحظهٔ تماس: <en>was still being packed</en>. <en>still</en> بعد از <en>was</en>.",
       "«بسته‌بندی کردن» = <en>pack</en>."],
  misses:[
    { en:"When I called, my order was still packing.", why:"سفارش خودش چیزی بسته‌بندی می‌کرد." },
    { en:"When I called, my order still was being packed.", why:"جای قید: بعد از <en>was</en>." }
  ]},

/* ── مجهول حال کامل ────────────────────── */
{ id:"p-pp-6", slot:"p-pp",
  fa:"کیف پولم پیدا شده!",
  en:"My wallet has been found!",
  why:["خبر تازه با نتیجهٔ فعلی: <en>has been + V3</en>.",
       "<en>My wallet is found</en> در انگلیسی طبیعی نیست."],
  misses:[
    { en:"My wallet has found!", why:"کیف پول چیزی پیدا کرده." },
    { en:"My wallet is found!", why:"غیرطبیعی؛ برای خبر تازه حال کامل." }
  ]},
{ id:"p-pp-7", slot:"p-pp",
  fa:"همهٔ ما واکسن زده‌ایم.",
  en:"All of us have been vaccinated.",
  why:["«واکسن زدن» در فارسی معلوم است، ولی کسی به ما واکسن می‌زند: <en>be vaccinated</en>.",
       "حال کامل: وضعیت فعلی (واکسینه هستیم)."],
  misses:[
    { en:"All of us have vaccinated.", why:"یعنی ما به دیگران واکسن زده‌ایم." },
    { en:"All of us have hit the vaccine.", why:"ترجمهٔ «واکسن زدن»؛ <en>get / be vaccinated</en>." }
  ],
  alt:"<en>We've all had the vaccine.</en> / <en>We've all been vaccinated.</en>"},
{ id:"p-pp-8", slot:"p-pp",
  fa:"چند ساختمان در این خیابان خراب شده تا جایش برج بسازند.",
  en:"Several buildings on this street have been knocked down to make way for tower blocks.",
  why:["نتیجهٔ فعلی (دیگر نیستند)، کننده نامهم: حال کامل مجهول.",
       "«جا باز کردن برای» = <en>make way for</en>. خیابان با <en>on</en>."],
  misses:[
    { en:"Several buildings in this street have knocked down.", why:"<en>been</en> جا افتاده." },
    { en:"Several buildings on this street were destroyed for building towers.", why:"<en>destroy</en> حس ویرانی تصادفی دارد؛ و ساختار هدف ناجور است." }
  ]},
{ id:"p-pp-9", slot:"p-pp",
  fa:"تا حالا بهت پیشنهاد کار از خارج شده؟",
  en:"Have you ever been offered a job abroad?",
  why:["<en>offer</en> دو مفعول دارد؛ شخص فاعلِ مجهول: <en>you have been offered a job</en>. تجربه تا الان با <en>ever</en>.",
       "<en>abroad</en> قید است و حرف اضافه نمی‌گیرد."],
  misses:[
    { en:"Has a job from abroad ever been offered to you?", why:"دستوری است ولی سنگین؛ شخص فاعل طبیعی‌تر است." },
    { en:"Have you ever offered a job abroad?", why:"یعنی تو به کسی کار پیشنهاد داده‌ای." }
  ]},
{ id:"p-pp-10", slot:"p-pp",
  fa:"جلسهٔ فردا عقب افتاده؛ به همه خبر بده.",
  en:"Tomorrow's meeting has been put off, so let everyone know.",
  why:["«عقب افتاده» یعنی کسی عقبش انداخته: مجهول. نتیجه الان مهم است: حال کامل.",
       "<en>put off</en> در مجهول: <en>has been put off</en>."],
  misses:[
    { en:"Tomorrow's meeting has put off.", why:"<en>been</en> جا افتاده." },
    { en:"Tomorrow's meeting has fallen back.", why:"ترجمهٔ «عقب افتاده»؛ <en>be put off / postponed</en>." }
  ]},

/* ── مجهول گذشتهٔ کامل ─────────────────── */
{ id:"p-pap-6", slot:"p-pap",
  fa:"وقتی به فرودگاه رسیدیم، پروازمان لغو شده بود.",
  en:"When we got to the airport, our flight had been cancelled.",
  why:["لغو قبل از رسیدن ما: <en>had been + V3</en>.",
       "<en>was cancelled</en> ترتیب را مبهم می‌کند."],
  misses:[
    { en:"When we got to the airport, our flight has been cancelled.", why:"حال کامل در داستان گذشته." },
    { en:"When we got to the airport, our flight had cancelled.", why:"<en>been</en> جا افتاده." }
  ]},
{ id:"p-pap-7", slot:"p-pap",
  fa:"به من گفته بودند ساعت نه بیایم، ولی کسی آنجا نبود.",
  en:"I had been told to come at nine, but nobody was there.",
  why:["گفتن قبل از رسیدن و خالی دیدن آنجا: گذشتهٔ کامل مجهول. شخص فاعل: <en>I had been told</en>.",
       "دستور: <en>tell someone to + V</en>."],
  misses:[
    { en:"It had been said to me to come at nine.", why:"<en>say</en> با شخص مجهول نمی‌شود." },
    { en:"I had told to come at nine.", why:"<en>been</en> جا افتاده؛ یعنی من گفته بودم." }
  ]},
{ id:"p-pap-8", slot:"p-pap",
  fa:"فهمیدم که حسابم هک شده.",
  en:"I found out that my account had been hacked.",
  why:["هک قبل از فهمیدن: گذشتهٔ کامل مجهول. فارسی «هک شده» (ماضی نقلی) گفته.",
       "«فهمیدن» (خبردار شدن) = <en>find out</en>."],
  misses:[
    { en:"I found out that my account has been hacked.", why:"ترجمهٔ مستقیم؛ زمان عقب نرفته." },
    { en:"I found out that my account had hacked.", why:"حساب خودش هک کرده بود." }
  ]},
{ id:"p-pap-9", slot:"p-pap",
  fa:"خانه قبلاً فروخته شده بود، ولی آگهی هنوز روی سایت بود.",
  en:"The house had already been sold, but the ad was still on the website.",
  why:["فروش قبل از نقطه‌ای در گذشته: <en>had already been sold</en>.",
       "<en>already</en> بعد از <en>had</en>."],
  misses:[
    { en:"The house was already sold, but the ad was still on the website.", why:"قابل فهم (حالت)، ولی ترتیب را گذشتهٔ کامل روشن می‌کند." },
    { en:"The house had already sold, but the ad was still on the site.", why:"<en>sell</en> لازم هم هست (<en>houses sell fast</en>)، ولی اینجا مجهول دقیق‌تر است." }
  ]},
{ id:"p-pap-10", slot:"p-pap",
  fa:"مهمان‌ها گفتند که به آن‌ها نگفته بودند لباس رسمی بپوشند.",
  en:"The guests said they hadn't been told to dress formally.",
  why:["نقل قول در گذشته + مجهولِ قبل‌تر: <en>hadn't been told</en>.",
       "«لباس رسمی پوشیدن» = <en>dress formally</en>."],
  misses:[
    { en:"The guests said nobody told them to wear formal.", why:"<en>formal</en> صفت است: <en>wear formal clothes</en>؛ و ترتیب زمانی مبهم." },
    { en:"The guests said they haven't been told to dress formally.", why:"زمان عقب نرفته." }
  ]},

/* ── مجهول آینده ───────────────────────── */
{ id:"p-fw-6", slot:"p-fw",
  fa:"تا فردا به ایمیلتان پاسخ داده خواهد شد.",
  en:"Your email will be answered by tomorrow.",
  why:["آینده، کننده نامهم: <en>will be + V3</en>. «تا فردا» ضرب‌الاجل: <en>by</en>.",
       "<en>answer</en> مفعول مستقیم می‌گیرد، پس مجهولش ساده است."],
  misses:[
    { en:"Your email will answer until tomorrow.", why:"معلوم، و <en>until</en>." },
    { en:"To your email will be answered by tomorrow.", why:"ترجمهٔ «به ایمیلتان»." }
  ]},
{ id:"p-fw-7", slot:"p-fw",
  fa:"اسم برنده‌ها ساعت هشت خوانده می‌شود.",
  en:"The winners' names will be read out at eight.",
  why:["آیندهٔ مجهول. «بلند خواندن برای جمع» = <en>read out</en>.",
       "مالکیت جمع: <en>winners'</en>."],
  misses:[
    { en:"The winners' names will read out at eight.", why:"<en>be</en> جا افتاده." },
    { en:"The winners names are read at eight.", why:"آپوستروف جا افتاده، و آینده بدون <en>will</en>." }
  ]},
{ id:"p-fw-8", slot:"p-fw",
  fa:"این جاده قرار است سال بعد تعریض شود.",
  en:"This road is going to be widened next year.",
  why:["برنامهٔ از پیش تعیین‌شده، مجهول: <en>is going to be + V3</en>.",
       "«تعریض کردن» = <en>widen</en>."],
  misses:[
    { en:"This road is going to widen next year.", why:"یعنی جاده خودش پهن می‌شود (معلوم لازم)." },
    { en:"This road is supposed to widen next year.", why:"همان مشکل؛ <en>be widened</en>." }
  ]},
{ id:"p-fw-9", slot:"p-fw",
  fa:"اگر دیر بیایی، راهت نمی‌دهند.",
  en:"If you're late, you won't be let in.",
  why:["«راهت نمی‌دهند» فاعل نامعلوم دارد: مجهول آینده. <en>let in</en> → <en>be let in</en>.",
       "بند <en>if</en> حال ساده."],
  misses:[
    { en:"If you're late, you won't let in.", why:"یعنی تو کسی را راه نمی‌دهی." },
    { en:"If you will be late, they don't let you in.", why:"<en>will</en> در بند <en>if</en>، و نتیجه بدون <en>will</en>." }
  ],
  alt:"<en>…you won't be allowed in.</en>"},
{ id:"p-fw-10", slot:"p-fw",
  fa:"به‌زودی به همهٔ کارمندها لپ‌تاپ جدید داده می‌شود.",
  en:"All staff will soon be given new laptops.",
  why:["<en>give</en> دو مفعول؛ شخص فاعل: <en>will be given</en>. <en>soon</en> بعد از <en>will</en>.",
       "«کارمندها» جمعی = <en>staff</en>."],
  misses:[
    { en:"To all staff will soon be given new laptops.", why:"ترتیب فارسی." },
    { en:"All staff will soon give new laptops.", why:"<en>be</en> جا افتاده؛ کارمندان لپ‌تاپ می‌دهند." }
  ]},

/* ── مجهول آیندهٔ کامل ─────────────────── */
{ id:"p-fp-6", slot:"p-fp",
  fa:"تا تو بیدار شوی، صبحانه آماده شده است.",
  en:"By the time you wake up, breakfast will have been made.",
  why:["تمام شدن قبل از یک نقطهٔ آینده: <en>will have been + V3</en>.",
       "در بند زمانی حال ساده."],
  misses:[
    { en:"By the time you wake up, breakfast has been made.", why:"حال کامل برای آینده." },
    { en:"By the time you will wake up, breakfast will have made.", why:"<en>will</en> در بند زمانی و <en>been</en> جا افتاده." }
  ]},
{ id:"p-fp-7", slot:"p-fp",
  fa:"تا آخر هفته، همهٔ دعوت‌نامه‌ها فرستاده شده‌اند.",
  en:"All the invitations will have been sent out by the end of the week.",
  why:["ضرب‌الاجل آینده، مجهول: آیندهٔ کامل مجهول.",
       "«فرستادن برای جمع» = <en>send out</en>."],
  misses:[
    { en:"All the invitations have been sent out by the end of the week.", why:"<en>will</en> جا افتاده." },
    { en:"All the invitations will be sent out until the end of the week.", why:"<en>until</en>، و زمانِ انجام به جای «تا آن موقع تمام شده»." }
  ]},
{ id:"p-fp-8", slot:"p-fp",
  fa:"تا ساعت پنج، گزارش بررسی شده است.",
  en:"The report will have been checked by five.",
  why:["آیندهٔ کامل مجهول.",
       "فارسی ماضی نقلی گذاشته؛ انگلیسی <en>will</en> را اضافه می‌کند."],
  misses:[
    { en:"The report has been checked by five.", why:"حال کامل برای آینده." },
    { en:"The report will have checked by five.", why:"<en>been</en> جا افتاده." }
  ]},
{ id:"p-fp-9", slot:"p-fp",
  fa:"تا زمستان، پنجره‌های جدید نصب شده‌اند.",
  en:"The new windows will have been put in by winter.",
  why:["آیندهٔ کامل مجهول با <en>by</en>.",
       "«نصب کردن» = <en>put in / install</en>."],
  misses:[
    { en:"The new windows will be installed until winter.", why:"<en>until</en>، و زمانِ انجام به جای تمام شدن." },
    { en:"The new windows will have installed by winter.", why:"<en>been</en> جا افتاده." }
  ],
  alt:"<en>…will have been installed by winter.</en>"},
{ id:"p-fp-10", slot:"p-fp",
  fa:"تا تو به خانه برسی، کل کیک خورده شده!",
  en:"By the time you get home, all the cake will have been eaten!",
  why:["آیندهٔ کامل مجهول؛ خورنده‌ها مهم نیستند، نتیجه مهم است.",
       "<en>get home</en> بدون <en>to</en>."],
  misses:[
    { en:"By the time you get home, all the cake will have eaten!", why:"کیک خودش چیزی خورده!" },
    { en:"By the time you get to home, all the cake has been eaten!", why:"<x>to home</x>، و حال کامل برای آینده." }
  ]},

/* ── مجهول با modal ────────────────────── */
{ id:"p-mod-6", slot:"p-mod",
  fa:"گوشی‌ها باید در طول امتحان خاموش باشند.",
  en:"Mobile phones must be switched off during the exam.",
  why:["قانون + مجهول: <en>must be + V3</en>. «خاموش باشند» در انگلیسی یعنی خاموش شوند: <en>be switched off</en>.",
       "<en>during</en> + اسم (در طول)."],
  misses:[
    { en:"Mobile phones must switch off during the exam.", why:"گوشی‌ها خودشان را خاموش کنند." },
    { en:"Mobile phones must be off in the exam time.", why:"<en>must be off</en> قابل قبول است، ولی <x>in the exam time</x> نه: <en>during the exam</en>." }
  ],
  alt:"<en>Mobile phones must be turned off during the exam.</en>"},
{ id:"p-mod-7", slot:"p-mod",
  fa:"میوه را قبل از خوردن باید شست.",
  en:"Fruit should be washed before it's eaten.",
  why:["مصدر بی‌فاعل فارسی («باید شست») = modal مجهول انگلیسی.",
       "<en>fruit</en> به‌عنوان جنس، غیرقابل‌شمارش."],
  misses:[
    { en:"Fruit should wash before eating.", why:"میوه خودش را بشوید." },
    { en:"The fruits must be wash before eat.", why:"قسمت سوم، و <en>before eating</en>." }
  ],
  alt:"<en>Fruit should be washed before eating.</en>"},
{ id:"p-mod-8", slot:"p-mod",
  fa:"این کار تا فردا تمام نمی‌شود.",
  en:"This job can't be finished by tomorrow.",
  why:["«تمام نمی‌شود» اینجا یعنی امکانش نیست: <en>can't be + V3</en>.",
       "ضرب‌الاجل: <en>by</en>."],
  misses:[
    { en:"This job can't finish until tomorrow.", why:"معلوم لازم و <en>until</en>: یعنی تا فردا شروع به تمام شدن نمی‌کند." },
    { en:"This job isn't finished by tomorrow.", why:"امکان (<en>can't</en>) گم شده." }
  ]},
{ id:"p-mod-9", slot:"p-mod",
  fa:"ممکن است جلسه عقب بیفتد.",
  en:"The meeting might be postponed.",
  why:["احتمال + مجهول: <en>might / may be + V3</en>.",
       "«عقب افتادن» جلسه یعنی کسی عقبش می‌اندازد."],
  misses:[
    { en:"The meeting might postpone.", why:"جلسه خودش چیزی را عقب می‌اندازد." },
    { en:"It is possible the meeting postpones.", why:"باز معلوم؛ <en>is postponed</en>." }
  ]},
{ id:"p-mod-10", slot:"p-mod",
  fa:"بچه‌ها را نباید در ماشین تنها گذاشت.",
  en:"Children shouldn't be left alone in the car.",
  why:["«نباید گذاشت» بی‌فاعل: <en>shouldn't be + V3</en>. قسمت سوم <en>leave</en>: <en>left</en>.",
       "«تنها گذاشتن» = <en>leave alone</en>."],
  misses:[
    { en:"Children shouldn't leave alone in the car.", why:"یعنی بچه‌ها نباید تنها از ماشین بروند." },
    { en:"Children shouldn't be leave alone in the car.", why:"قسمت سوم: <en>left</en>." }
  ]},

/* ── مجهول modal گذشته ─────────────────── */
{ id:"p-modp-6", slot:"p-modp",
  fa:"در باید قفل می‌شد؛ چرا باز است؟",
  en:"The door should have been locked — why is it open?",
  why:["لازمی که در گذشته انجام نشد: <en>should have been + V3</en>.",
       "فارسی «باید قفل می‌شد» را دقیقاً همین ساختار ترجمه می‌کند."],
  misses:[
    { en:"The door should be locked — why is it open?", why:"یعنی الان باید قفل باشد — قابل قبول، ولی انتقاد از گذشته را نمی‌رساند." },
    { en:"The door must have been locked.", why:"یعنی حتماً قفل بوده — برعکس!" }
  ]},
{ id:"p-modp-7", slot:"p-modp",
  fa:"پیامم حتماً رسیده؛ دو تیک خورده.",
  en:"My message must have been delivered — it's got two ticks.",
  why:["استنتاج دربارهٔ گذشته بر اساس شاهد: <en>must have been + V3</en>.",
       "«رسیدن پیام» = <en>be delivered</en>."],
  misses:[
    { en:"My message must be delivered.", why:"الزام: باید تحویل شود." },
    { en:"My message must have arrived to him.", why:"<en>arrive to</en> غلط است؛ و «حتماً رسیده» را <en>delivered</en> بهتر می‌رساند." }
  ],
  alt:"<en>My message must have arrived.</en>"},
{ id:"p-modp-8", slot:"p-modp",
  fa:"ممکن است نامه اشتباهی به آدرس قبلی‌مان رفته باشد.",
  en:"The letter may have been sent to our old address by mistake.",
  why:["احتمال دربارهٔ گذشته + مجهول: <en>may have been + V3</en>.",
       "«رفته باشد» یعنی فرستاده شده باشد."],
  misses:[
    { en:"The letter may have gone to our last address.", why:"معلوم هم قابل قبول است، ولی <en>last address</en> یعنی آخرین آدرس؛ <en>old / previous</en>." },
    { en:"The letter may be sent to our old address by mistake.", why:"یعنی ممکن است (در آینده) فرستاده شود." }
  ]},
{ id:"p-modp-9", slot:"p-modp",
  fa:"این پول نباید خرج می‌شد.",
  en:"This money shouldn't have been spent.",
  why:["انتقاد از کاری در گذشته، مجهول: <en>shouldn't have been + V3</en>.",
       "قسمت سوم <en>spend</en>: <en>spent</en>."],
  misses:[
    { en:"This money shouldn't be spent.", why:"یعنی از حالا به بعد خرجش نکنید." },
    { en:"This money shouldn't have spent.", why:"<en>been</en> جا افتاده." }
  ]},
{ id:"p-modp-10", slot:"p-modp",
  fa:"امکان ندارد این نقاشی کار یک بچه باشد.",
  en:"This painting can't have been done by a child.",
  why:["استنتاج منفی دربارهٔ گذشته + کنندهٔ مهم با <en>by</en>: <en>can't have been done by</en>.",
       "فارسی «کار … باشد» گفته؛ انگلیسی فعل را مجهول می‌کند."],
  misses:[
    { en:"This painting mustn't have been done by a child.", why:"استنتاج منفی با <en>can't</en>." },
    { en:"This painting can't be a child's work.", why:"قابل قبول است، ولی دربارهٔ حال است نه کار گذشته." }
  ],
  alt:"<en>A child can't have painted this.</en>"},

/* ── مصدر و اسم‌مصدر مجهول ─────────────── */
{ id:"p-nf-6", slot:"p-nf",
  fa:"خوشم نمی‌آید کسی بهم بگوید چه کار کنم.",
  en:"I don't like being told what to do.",
  why:["<en>like</en> + <en>-ing</en>، و من گیرندهٔ دستورم: <en>being told</en>.",
       "«چه کار کنم» = <en>what to do</en>."],
  misses:[
    { en:"I don't like telling what to do.", why:"یعنی به دیگران نگویم چه کار کنند." },
    { en:"I don't like that someone tells me what I do.", why:"سنگین، و <en>what I do</en> یعنی کاری که الان می‌کنم." }
  ]},
{ id:"p-nf-7", slot:"p-nf",
  fa:"می‌خواهم در جریان باشم.",
  en:"I want to be kept informed.",
  why:["<en>want</en> + مصدر، و من گیرندهٔ خبرم: <en>to be kept informed</en>.",
       "«در جریان گذاشتن» = <en>keep someone informed / in the loop</en>."],
  misses:[
    { en:"I want to keep informed.", why:"یعنی خودم خودم را مطلع نگه دارم (قابل فهم ولی متفاوت)." },
    { en:"I want to be in the flow.", why:"ترجمهٔ «در جریان»؛ <en>in the loop</en>." }
  ],
  alt:"<en>I want to be kept in the loop.</en>"},
{ id:"p-nf-8", slot:"p-nf",
  fa:"امیدوارم برای مصاحبه دعوت شوم.",
  en:"I hope to be invited for an interview.",
  why:["<en>hope</en> + مصدر مجهول: <en>to be invited</en>.",
       "«برای مصاحبه» = <en>for an interview</en> یا <en>to an interview</en>."],
  misses:[
    { en:"I hope to invite for an interview.", why:"یعنی من کسی را دعوت کنم." },
    { en:"I hope being invited for an interview.", why:"<en>hope</en> با مصدر." }
  ],
  alt:"<en>I hope I'll be invited for an interview.</en>"},
{ id:"p-nf-9", slot:"p-nf",
  fa:"این پیشنهاد ارزش دارد جدی گرفته شود.",
  en:"This suggestion deserves to be taken seriously.",
  why:["«ارزش دارد که» = <en>deserves to</en>؛ و پیشنهاد گیرنده است: <en>to be taken</en>.",
       "«جدی گرفتن» = <en>take seriously</en>."],
  misses:[
    { en:"This suggestion deserves to take seriously.", why:"پیشنهاد خودش چیزی را جدی بگیرد." },
    { en:"This suggestion has value to be taken serious.", why:"ترجمهٔ «ارزش دارد»، و قید: <en>seriously</en>." }
  ],
  alt:"<en>This suggestion is worth taking seriously.</en>"},
{ id:"p-nf-10", slot:"p-nf",
  fa:"بی‌آنکه کسی متوجه شود، از اتاق بیرون رفتم.",
  en:"I left the room without being noticed.",
  why:["بعد از حرف اضافه (<en>without</en>) اسم‌مصدر؛ و من دیده‌نشده‌ام: <en>being noticed</en>.",
       "فارسی فاعل را «کسی» گذاشته؛ انگلیسی با مجهول حذفش می‌کند."],
  misses:[
    { en:"I left the room without noticing.", why:"یعنی من متوجه چیزی نشدم." },
    { en:"I left the room without anyone notice.", why:"<en>without anyone noticing</en> درست است؛ فعل ساده غلط." }
  ],
  alt:"<en>I left the room without anyone noticing.</en>"},

/* ── مجهول غیرشخصی ─────────────────────── */
{ id:"p-imp-6", slot:"p-imp",
  fa:"می‌گویند این پل قدیمی‌ترین پل شهر است.",
  en:"This bridge is said to be the oldest in the city.",
  why:["<en>S + is said to be</en>: فاعل جملهٔ پیرو جلو می‌آید.",
       "صفت عالی با <en>the</en> و «در شهر» = <en>in the city</en>."],
  misses:[
    { en:"This bridge is said that it is the oldest in the city.", why:"دو الگو قاطی." },
    { en:"It is said this bridge to be the oldest in the city.", why:"با <en>It</en>، جملهٔ <en>that</en>." }
  ],
  alt:"<en>It is said that this bridge is the oldest in the city.</en>"},
{ id:"p-imp-7", slot:"p-imp",
  fa:"گزارش شده که دو نفر در آتش‌سوزی زخمی شده‌اند.",
  en:"Two people are reported to have been injured in the fire.",
  why:["گزارشِ الان دربارهٔ اتفاقِ قبلی: <en>are reported</en> + مصدر کامل مجهول (<en>to have been injured</en>).",
       "زبان خبر: این ساختار در اخبار خیلی رایج است."],
  misses:[
    { en:"Two people are reported to be injured in the fire.", why:"قابل قبول (وضعیت فعلی)، ولی ترتیب زمانی آسیب را مصدر کامل روشن می‌کند." },
    { en:"It is reported two people to have been injured.", why:"با <en>It</en>، جملهٔ <en>that</en>." }
  ],
  alt:"<en>It has been reported that two people were injured in the fire.</en>"},
{ id:"p-imp-8", slot:"p-imp",
  fa:"می‌گویند صاحب قبلی این خانه نقاش معروفی بوده.",
  en:"The previous owner of this house is said to have been a famous painter.",
  why:["گفتنِ الان دربارهٔ گذشته: مصدر کامل <en>to have been</en>.",
       "«صاحب قبلی» = <en>previous owner</en>."],
  misses:[
    { en:"The previous owner of this house is said to be a famous painter.", why:"یعنی الان نقاش معروفی است." },
    { en:"The previous owner of this house is said that he was a famous painter.", why:"الگوها قاطی." }
  ]},
{ id:"p-imp-9", slot:"p-imp",
  fa:"انتظار می‌رود قیمت‌ها تا پاییز ثابت بماند.",
  en:"Prices are expected to stay stable until autumn.",
  why:["<en>S + are expected to + V</en>.",
       "اینجا <en>until</en> درست است: «ثابت ماندن» تا آن نقطه ادامه دارد."],
  misses:[
    { en:"It is expected prices to stay stable until autumn.", why:"با <en>It</en> جملهٔ <en>that</en>." },
    { en:"Prices are expected to stay stable by autumn.", why:"<en>by</en> برای ضرب‌الاجلِ تمام شدن است؛ ماندن ادامه‌دار <en>until</en> می‌خواهد." }
  ]},
{ id:"p-imp-10", slot:"p-imp",
  fa:"به نظر همه، مدیر جدید آدم سخت‌گیری است.",
  en:"The new manager is considered to be quite strict.",
  why:["«به نظر همه» = نظر عمومی: <en>is considered / thought to be</en>.",
       "<en>considered</en> بدون <en>to be</en> هم می‌آید: <en>is considered strict</en>."],
  misses:[
    { en:"The new manager is considered that he is strict.", why:"الگوها قاطی." },
    { en:"In everybody's opinion, the new manager is a hard-taking person.", why:"ترجمهٔ «سخت‌گیر»؛ <en>strict</en>." }
  ],
  alt:"<en>The new manager is thought to be quite strict.</en>"},

/* ── سببی و get-passive ────────────────── */
{ id:"p-caus-6", slot:"p-caus",
  fa:"باید چشم‌هایم را معاینه کنم.",
  en:"I need to have my eyes tested.",
  why:["معاینه را چشم‌پزشک انجام می‌دهد: سببی <en>have + my eyes + tested</en>. فارسی باز فاعل را «من» گذاشته.",
       "<en>test my eyes</en> یعنی خودم چشم‌هایم را آزمایش کنم."],
  misses:[
    { en:"I need to test my eyes.", why:"خودت چشم‌پزشکی؟" },
    { en:"I need to have tested my eyes.", why:"ترتیب: مفعول قبل از V3." }
  ],
  alt:"<en>I need to get my eyes checked.</en>"},
{ id:"p-caus-7", slot:"p-caus",
  fa:"دیروز لوله‌کش آوردیم که شیر آب را درست کند.",
  en:"We had a plumber fix the tap yesterday.",
  why:["سببیِ معلوم: <en>have + شخص + فعل ساده</en> (بدون <en>to</en>). وقتی کننده را نام می‌بری، این شکل.",
       "بدون کننده: <en>We had the tap fixed yesterday.</en>"],
  misses:[
    { en:"We had a plumber to fix the tap yesterday.", why:"بعد از <en>have</en> سببی، <en>to</en> نمی‌آید. (با <en>get</en> می‌آید: <en>got a plumber to fix</en>.)" },
    { en:"We brought a plumber to fix the tap.", why:"قابل فهم است، ولی <en>bring</en> حس «با خود آوردن» دارد." }
  ],
  alt:"<en>We had the tap fixed yesterday.</en> / <en>We got a plumber to fix the tap.</en>"},
{ id:"p-caus-8", slot:"p-caus",
  fa:"کتم را دادم خشکشویی.",
  en:"I got my coat dry-cleaned.",
  why:["کار را دیگری انجام داد: <en>get + مفعول + V3</en>.",
       "یا به‌سادگی: <en>I took my coat to the dry cleaner's.</en>"],
  misses:[
    { en:"I gave my coat to dry cleaning.", why:"ترجمهٔ «دادم خشکشویی»." },
    { en:"I dry-cleaned my coat.", why:"یعنی خودم خشکشویی کردم." }
  ],
  alt:"<en>I had my coat dry-cleaned.</en>"},
{ id:"p-caus-9", slot:"p-caus",
  fa:"مواظب باش گم نشوی.",
  en:"Be careful not to get lost.",
  why:["get-passive ثابت: <en>get lost</en> (گم شدن). مثل <en>get married, get dressed, get hurt</en>.",
       "منفیِ مصدر: <en>not to</en>."],
  misses:[
    { en:"Be careful not to lose.", why:"یعنی نبازی!" },
    { en:"Be careful to not get lose.", why:"<en>lost</en> (قسمت سوم)، و <en>not to</en> معیارتر است." }
  ]},
{ id:"p-caus-10", slot:"p-caus",
  fa:"دیروز پشت چراغ قرمز یکی زد به ماشینم.",
  en:"My car got hit at a red light yesterday.",
  why:["get-passive برای اتفاق ناخوشایند و ناگهانی: <en>got hit</en>. کننده (راننده‌ای) مهم نیست.",
       "«پشت چراغ قرمز» = <en>at a red light</en>."],
  misses:[
    { en:"My car hit at a red light yesterday.", why:"یعنی ماشین من به چیزی زد!" },
    { en:"Someone hit to my car behind the red light.", why:"<en>hit</en> حرف اضافه نمی‌گیرد، و «پشت چراغ» = <en>at</en>." }
  ],
  alt:"<en>My car was hit at a red light yesterday.</en>"}

]);
