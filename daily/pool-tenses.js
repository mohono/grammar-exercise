/* ═══ مخزن جمله‌ها — زمان‌ها (۱۴ ساختار × ۱۰) ═══ */
window.POOL = (window.POOL || []).concat([

/* ── حال ساده ─────────────────────────── */
{ id:"t-ps-1", slot:"t-ps",
  fa:"برادرم هر روز صبح با مترو سر کار می‌رود.",
  en:"My brother goes to work by metro every morning.",
  why:["«هر روز صبح» عادت است، و عادت یعنی حال ساده. فعل فارسیِ «می‌رود» همان شکلی است که برای «الان دارد می‌رود» هم به کار می‌رود — تمایز را فقط قید زمان نشان می‌دهد.",
       "فاعل سوم‌شخص مفرد است، پس <en>goes</en> با <en>-es</en>. وسیلهٔ نقلیه با <en>by</en> و بدون حرف تعریف: <en>by metro</en>، <en>by bus</en>."],
  misses:[
    { en:"My brother is going to work by metro every morning.", why:"استمراری یعنی همین حالا یا یک دورهٔ موقت؛ با «هر روز» دو پیام متناقض می‌دهی." },
    { en:"My brother go to work with metro every morning.", why:"<x>go</x> بدون <en>-es</en> برای سوم‌شخص غلط است، و <x>with metro</x> ترجمهٔ «با»ی فارسی است؛ انگلیسی <en>by metro</en> می‌گوید." }
  ]},
{ id:"t-ps-2", slot:"t-ps",
  fa:"این فروشگاه یکشنبه‌ها ساعت هشت شب تعطیل می‌کند.",
  en:"This shop closes at 8 p.m. on Sundays.",
  why:["«یکشنبه‌ها» (جمع) یعنی هر یکشنبه — برنامهٔ ثابت. حال ساده برای برنامه‌ها و ساعت‌های همیشگی است.",
       "ساعت با <en>at</en>، روز با <en>on</en>. <en>on Sundays</en> خودش «هر یکشنبه» را می‌رساند."],
  misses:[
    { en:"This shop is closing at 8 p.m. on Sundays.", why:"<en>is closing</en> یعنی همین امشب قرار است ببندد (یک برنامهٔ خاص)، نه عادت هفتگی." },
    { en:"This shop closes in 8 p.m. in Sundays.", why:"حرف اضافه‌ها: ساعت <en>at</en>، روز <en>on</en>." }
  ]},
{ id:"t-ps-3", slot:"t-ps",
  fa:"مادرم قهوه نمی‌خورد؛ فقط چای می‌نوشد.",
  en:"My mother doesn't drink coffee; she only drinks tea.",
  why:["سلیقه و عادت کلی، نه اتفاقِ همین لحظه — حال ساده.",
       "منفیِ حال ساده با <en>doesn't</en> ساخته می‌شود و بعد از آن فعل ساده می‌آید: <en>doesn't drink</en>، نه <x>doesn't drinks</x>. <en>-s</en> فقط یک بار می‌آید، روی <en>does</en>."],
  misses:[
    { en:"My mother doesn't drinks coffee; she only drinks tea.", why:"<en>-s</en> دو بار آمده؛ بعد از <en>doesn't</en> فعل ساده است." },
    { en:"My mother isn't drinking coffee; she's only drinking tea.", why:"یعنی این روزها موقتاً قهوه نمی‌خورد (مثلاً رژیم دارد) — نه اینکه اهلش نیست." }
  ]},
{ id:"t-ps-4", slot:"t-ps",
  fa:"قطار فردا صبح ساعت شش و نیم حرکت می‌کند؛ دیر نکن.",
  en:"The train leaves at 6:30 tomorrow morning, so don't be late.",
  why:["آینده است، ولی آینده‌ای که جدول زمانی تعیینش کرده، نه تصمیم یا پیش‌بینی ما. برای جدول‌ها (قطار، پرواز، کلاس، فیلم) انگلیسی حال ساده به کار می‌برد.",
       "<en>don't be late</en>: امری منفی با <en>be</en>. «دیر نکن» فعل ندارد که مستقیم ترجمه شود."],
  misses:[
    { en:"The train is going to leave at 6:30 tomorrow morning.", why:"<en>be going to</en> بوی پیش‌بینی یا نیت می‌دهد، انگار قطار تصمیم گرفته. برای جدول زمانی طبیعی نیست." },
    { en:"The train leave at 6:30 tomorrow morning, so don't late.", why:"<en>-s</en> سوم‌شخص جا افتاده، و <x>don't late</x> فعل ندارد؛ <en>late</en> صفت است و <en>be</en> می‌خواهد." }
  ],
  alt:"<en>The train will leave at 6:30</en> غلط نیست، ولی لحن اعلامیه دارد؛ در گفت‌وگوی روزمره حال ساده طبیعی‌تر است."},
{ id:"t-ps-5", slot:"t-ps",
  fa:"معمولاً ساعت چند به محل کارت می‌رسی؟",
  en:"What time do you usually get to work?",
  why:["«معمولاً» علامت عادت است — حال ساده. سؤالِ حال ساده <en>do/does</en> می‌خواهد و فعل اصلی ساده می‌ماند.",
       "قید تکرار (<en>usually</en>) بین فاعل و فعل اصلی می‌نشیند: <en>do you usually get</en>. «رسیدن به محل کار» = <en>get to work</en>، بدون <en>the</en>."],
  misses:[
    { en:"What time you usually get to work?", why:"سؤال بدون <en>do</en>؛ فارسی با لحن سؤال می‌سازد، انگلیسی با فعل کمکی." },
    { en:"What time do you usually arrive to work?", why:"<en>arrive</en> با <en>at</en> یا <en>in</en> می‌آید، نه <x>to</x>: <en>arrive at work</en>." }
  ]},

/* ── حال استمراری ──────────────────────── */
{ id:"t-pc-1", slot:"t-pc",
  fa:"الان نمی‌توانم حرف بزنم؛ دارم رانندگی می‌کنم.",
  en:"I can't talk right now — I'm driving.",
  why:["«دارم … می‌کنم» و «الان» هر دو می‌گویند کار در همین لحظه در جریان است: حال استمراری.",
       "<en>I drive</en> چیز دیگری می‌گوید: رانندگی بلدم یا عادتم است."],
  misses:[
    { en:"I can't talk right now — I drive.", why:"یعنی «من راننده‌ام / اهل رانندگی‌ام» — ربطی به همین لحظه ندارد." },
    { en:"I can't talk right now — I am drive.", why:"<en>am</en> بدون <en>-ing</en>؛ استمراری دو جزء لازم دارد." }
  ]},
{ id:"t-pc-2", slot:"t-pc",
  fa:"این روزها چون ماشینم در تعمیرگاه است، با اتوبوس سر کار می‌روم.",
  en:"I'm taking the bus to work these days because my car is at the garage.",
  why:["«این روزها» + دلیل موقت (ماشین در تعمیرگاه است) = وضعیت موقت. حال استمراری فقط «همین لحظه» نیست؛ دورهٔ موقت دور و بر حالا را هم می‌گیرد.",
       "حال ساده (<en>I take the bus</en>) یعنی عادت همیشگی‌ام است — و آن‌وقت دلیل «ماشینم در تعمیرگاه است» بی‌معنی می‌شود."],
  misses:[
    { en:"I take the bus to work these days because my car is at the garage.", why:"حال ساده عادت دائمی می‌سازد؛ موقتی بودن از دست می‌رود." },
    { en:"I'm going to work with bus these days because my car is in the repair.", why:"<x>with bus</x> و <x>in the repair</x> ترجمهٔ کلمه‌به‌کلمه‌اند؛ <en>take the bus</en> یا <en>by bus</en>، و <en>at the garage</en> یا <en>being repaired</en>." }
  ]},
{ id:"t-pc-3", slot:"t-pc",
  fa:"فردا شب با همکارهایم شام بیرون می‌خورم؛ میز را رزرو کرده‌ایم.",
  en:"I'm having dinner out with my colleagues tomorrow night — we've booked a table.",
  why:["آینده‌ای که قرارش گذاشته شده (میز رزرو شده، آدم‌ها هماهنگ‌اند) در انگلیسی با حال استمراری گفته می‌شود. این «قرار شخصی» است.",
       "<en>will</en> اینجا حس تصمیم لحظه‌ای یا پیش‌بینی می‌دهد و آن رزرو را بی‌اثر می‌کند."],
  misses:[
    { en:"I will have dinner out with my colleagues tomorrow night.", why:"شبیه تصمیمی است که همین الان گرفتی، نه قراری که از قبل گذاشته شده." },
    { en:"I have dinner out with my colleagues tomorrow night.", why:"حال ساده برای آینده فقط برای جدول‌های رسمی است، نه قرار شخصی." }
  ]},
{ id:"t-pc-4", slot:"t-pc",
  fa:"اجاره‌خانه در این محله دارد سریع بالا می‌رود.",
  en:"Rents in this neighbourhood are rising fast.",
  why:["«دارد بالا می‌رود» یک روند در حال تغییر است. برای تغییرِ در جریان (<en>rising</en>، <en>getting worse</en>، <en>improving</en>) حال استمراری می‌آید.",
       "<en>rise</en> لازم است (خودش بالا می‌رود)، <en>raise</en> متعدی است (چیزی را بالا می‌برند)."],
  misses:[
    { en:"Rents in this neighbourhood rise fast.", why:"یعنی به طور کلی همیشه سریع بالا می‌روند — یک واقعیت ثابت، نه روند فعلی." },
    { en:"Rents in this neighbourhood are raising fast.", why:"<x>raise</x> مفعول می‌خواهد: <en>landlords are raising rents</en>. اجاره خودش <en>rises</en>." }
  ]},
{ id:"t-pc-5", slot:"t-pc",
  fa:"ببخشید، منتظر کسی هستید؟ — بله، منتظر دوستم هستم.",
  en:"Excuse me, are you waiting for someone? — Yes, I'm waiting for a friend.",
  why:["«منتظر هستم» در فارسی ساختار ایستا دارد (صفت + بودن)، ولی در انگلیسی <en>wait</en> یک فعل کُنشی است که الان در جریان است — پس استمراری.",
       "<en>wait</en> همیشه با <en>for</en> مفعول می‌گیرد."],
  misses:[
    { en:"Excuse me, do you wait for someone? — Yes, I wait for my friend.", why:"فارسیِ «هستید» تو را به حال ساده می‌کشد؛ ولی <en>do you wait</en> یعنی «عادتاً منتظر کسی می‌مانید؟»." },
    { en:"Excuse me, are you waiting someone? — Yes, I'm waiting my friend.", why:"<en>for</en> جا افتاده؛ <x>wait someone</x> در انگلیسی معیار غلط است." }
  ]},

/* ── حال کامل ──────────────────────────── */
{ id:"t-pp-1", slot:"t-pp",
  fa:"کلیدهایم را گم کرده‌ام و نمی‌توانم وارد خانه شوم.",
  en:"I've lost my keys, so I can't get into the house.",
  why:["اتفاق در گذشته افتاده، ولی نتیجه‌اش همین حالا جلوی ماست (نمی‌توانم وارد شوم). حال کامل پلِ گذشته به حال است.",
       "گذشتهٔ ساده (<en>I lost</en>) ماجرا را در گذشته می‌بندد و هیچ ربطی به الان نمی‌زند — ممکن است بعداً پیدایشان کرده باشی."],
  misses:[
    { en:"I lost my keys, so I can't get into the house.", why:"در انگلیسی آمریکایی محاوره قابل قبول است، ولی در بریتانیایی و نوشتار، ربط به حال با حال کامل ساخته می‌شود." },
    { en:"I have lose my keys, so I can't enter to the house.", why:"بعد از <en>have</en> قسمت سوم فعل: <en>lost</en>. و <en>enter</en> حرف اضافه نمی‌گیرد: <en>enter the house</en>." }
  ]},
{ id:"t-pp-2", slot:"t-pp",
  fa:"تا حالا سوشی خورده‌ای؟",
  en:"Have you ever eaten sushi?",
  why:["«تا حالا» = در کل زندگی تا این لحظه. تجربه بدون زمان مشخص یعنی حال کامل، معمولاً با <en>ever</en> در سؤال و <en>never</en> در منفی.",
       "قسمت سوم <en>eat</en> می‌شود <en>eaten</en>."],
  misses:[
    { en:"Did you ever eat sushi?", why:"گذشتهٔ ساده دوره‌ای بسته را فرض می‌کند (مثلاً «وقتی ژاپن بودی»). برای کل زندگیِ تا حالا، حال کامل." },
    { en:"Have you ever ate sushi?", why:"<x>ate</x> گذشتهٔ ساده است؛ بعد از <en>have</en> باید <en>eaten</en> بیاید." }
  ]},
{ id:"t-pp-3", slot:"t-pp",
  fa:"پنج سال است که همدیگر را می‌شناسیم.",
  en:"We've known each other for five years.",
  why:["«پنج سال است که…» بازه‌ای است از گذشته تا حالا. فارسی فعل را حال می‌گذارد (می‌شناسیم)، ولی انگلیسی برای بازهٔ باز حال کامل می‌خواهد.",
       "<en>know</en> فعل حالت (stative) است و استمراری نمی‌گیرد؛ پس حال کامل ساده، نه کامل استمراری."],
  misses:[
    { en:"We know each other for five years.", why:"تلهٔ فارسی: فعل حال + بازه. در انگلیسی حال ساده بازهٔ از گذشته را نمی‌پوشاند." },
    { en:"We've been knowing each other since five years.", why:"<en>know</en> استمراری نمی‌گیرد، و طول بازه با <en>for</en> می‌آید؛ <en>since</en> نقطهٔ شروع می‌خواهد." }
  ]},
{ id:"t-pp-4", slot:"t-pp",
  fa:"امروز صبح سه فنجان قهوه خورده‌ام و هنوز خسته‌ام.",
  en:"I've had three cups of coffee this morning, and I'm still tired.",
  why:["«امروز صبح» هنوز تمام نشده و گوینده در همان بازه است؛ برای دوره‌ای که هنوز باز است حال کامل می‌آید.",
       "اگر عصر بود و صبح تمام شده بود، <en>I had three cups this morning</en> درست می‌شد. خودِ کلمهٔ «امروز صبح» تصمیم نمی‌گیرد؛ باز یا بسته بودنش تصمیم می‌گیرد."],
  misses:[
    { en:"I drank three cups of coffee this morning, and I'm still tired.", why:"این یعنی صبح تمام شده؛ اگر هنوز صبح است، بازه را زودتر از موقع بسته‌ای." },
    { en:"I have drunk three cup of coffee this morning.", why:"<en>have drunk</en> دستوری است ولی <en>have had</en> برای خوردن و نوشیدن طبیعی‌تر است؛ و <x>three cup</x> جمع نشده." }
  ]},
{ id:"t-pp-5", slot:"t-pp",
  fa:"مدیرم هنوز جواب ایمیلم را نداده.",
  en:"My manager hasn't replied to my email yet.",
  why:["«هنوز … نداده» یعنی انتظار تا همین حالا ادامه دارد — حال کامل منفی با <en>yet</en> در آخر جمله.",
       "<en>reply</en> حرف اضافهٔ <en>to</en> می‌خواهد؛ <en>answer</en> نمی‌خواهد: <en>hasn't answered my email</en>."],
  misses:[
    { en:"My manager didn't reply to my email yet.", why:"در محاورهٔ آمریکایی شنیده می‌شود، ولی در انگلیسی معیار <en>yet</en> با حال کامل می‌آید." },
    { en:"My manager still hasn't replied my email.", why:"<en>still hasn't</en> خوب است (با ناراحتی بیشتر)، ولی <en>to</en> بعد از <en>replied</en> جا افتاده." }
  ]},

/* ── حال کامل استمراری ─────────────────── */
{ id:"t-ppc-1", slot:"t-ppc",
  fa:"دو ساعت است منتظرت هستم!",
  en:"I've been waiting for you for two hours!",
  why:["کاری که دو ساعت پیش شروع شده و همین حالا هم ادامه دارد، با تأکید روی طول آن: حال کامل استمراری.",
       "فارسی می‌گوید «هستم» (حال). همین تله است: حال ساده یا استمراری در انگلیسی بازه‌ای را که از گذشته آمده نمی‌پوشاند."],
  misses:[
    { en:"I'm waiting for you for two hours!", why:"ترجمهٔ مستقیم فارسی. <en>I'm waiting</en> فقط به همین لحظه اشاره دارد، نه دو ساعت گذشته." },
    { en:"I've been waiting for you since two hours!", why:"<en>since</en> برای نقطهٔ شروع است (<en>since six</en>)؛ برای طول، <en>for</en>." }
  ]},
{ id:"t-ppc-2", slot:"t-ppc",
  fa:"چرا چشم‌هایت قرمز است؟ گریه کرده‌ای؟",
  en:"Why are your eyes red? Have you been crying?",
  why:["فعالیتی که تازه تمام شده یا نزدیک تمام شدن است و ردش الان پیداست (چشم قرمز، دست رنگی، نفس‌نفس) با حال کامل استمراری پرسیده می‌شود.",
       "حال کامل ساده (<en>Have you cried?</en>) بیشتر حس نتیجه یا تجربه می‌دهد و اینجا غریب است."],
  misses:[
    { en:"Why are your eyes red? Did you cry?", why:"ممکن است شنیده شود، ولی اتفاق را از الان جدا می‌کند؛ پل بین ردِ فعلی و فعالیت اخیر گم می‌شود." },
    { en:"Why are your eyes red? Were you crying?", why:"یعنی در یک لحظهٔ مشخص در گذشته در حال گریه بودی — گوینده به لحظه‌ای خاص اشاره نکرده." }
  ]},
{ id:"t-ppc-3", slot:"t-ppc",
  fa:"از دی‌ماه دارم برای امتحان رانندگی تمرین می‌کنم.",
  en:"I've been practising for my driving test since January.",
  why:["از نقطه‌ای در گذشته (دی‌ماه) تا حالا، و هنوز ادامه دارد: حال کامل استمراری با <en>since</en>.",
       "«دارم … می‌کنم» فارسی شکل حال استمراری دارد؛ ولی بازهٔ «از دی‌ماه» زمان فعل انگلیسی را عوض می‌کند."],
  misses:[
    { en:"I'm practising for my driving test since January.", why:"حال استمراری + <en>since</en> غلط است؛ <en>since</en> همیشه حال کامل (ساده یا استمراری) می‌خواهد." },
    { en:"I've been practising for my driving test for January.", why:"<en>for</en> طول می‌گیرد (<en>for three months</en>)، <en>since</en> نقطهٔ شروع." }
  ]},
{ id:"t-ppc-4", slot:"t-ppc",
  fa:"همسایه‌ها از صبح دارند دیوار را سوراخ می‌کنند و سرم درد گرفته.",
  en:"The neighbours have been drilling since this morning, and I've got a headache.",
  why:["سروصدایی که از صبح شروع شده و هنوز قطع نشده؛ تأکید روی ادامه‌دار بودنِ کار است، نه نتیجه‌اش: حال کامل استمراری.",
       "«سرم درد گرفته» نتیجهٔ فعلی است: <en>I've got a headache</en> یا <en>I have a headache</en>."],
  misses:[
    { en:"The neighbours are drilling since this morning.", why:"باز تلهٔ حال + بازه؛ <en>since</en> حال کامل می‌خواهد." },
    { en:"The neighbours have drilled since this morning.", why:"حال کامل ساده روی کارِ انجام‌شده تمرکز دارد (مثلاً <en>have drilled five holes</en>)؛ برای فعالیت ممتد و آزاردهنده استمراری طبیعی است." }
  ]},
{ id:"t-ppc-5", slot:"t-ppc",
  fa:"چند وقت است که داری انگلیسی یاد می‌گیری؟",
  en:"How long have you been learning English?",
  why:["<en>How long</en> دربارهٔ کاری که از گذشته شروع شده و هنوز ادامه دارد، حال کامل استمراری می‌خواهد.",
       "<en>How long are you learning English?</en> اگر اصلاً درک شود، یعنی «چه مدت قرار است یاد بگیری؟» — دربارهٔ آینده."],
  misses:[
    { en:"How long are you learning English?", why:"ترجمهٔ «داری یاد می‌گیری». معنایش به سمت برنامهٔ آینده می‌رود." },
    { en:"How long do you learn English?", why:"حال ساده بازهٔ از گذشته را نمی‌گیرد؛ این جمله در انگلیسی معنای روشنی ندارد." }
  ]},

/* ── گذشتهٔ ساده ───────────────────────── */
{ id:"t-pas-1", slot:"t-pas",
  fa:"دیشب ساعت یازده خوابیدم.",
  en:"I went to bed at eleven last night.",
  why:["«دیشب» زمان تمام‌شده است، پس گذشتهٔ ساده. هر وقت زمان گذشتهٔ مشخص در جمله باشد، حال کامل ممنوع است.",
       "«خوابیدم» اینجا یعنی به رختخواب رفتن: <en>went to bed</en>. <en>I slept at eleven</en> یعنی ساعت یازده خواب بودم، نه اینکه آن موقع رفتم بخوابم. <en>fell asleep</en> هم یعنی خوابم برد."],
  misses:[
    { en:"I have gone to bed at eleven last night.", why:"حال کامل با زمان گذشتهٔ مشخص (<en>last night</en>) هیچ‌وقت نمی‌آید." },
    { en:"I slept at eleven last night.", why:"یعنی ساعت یازده خواب بودم — لحظهٔ رفتن به رختخواب را نمی‌رساند." }
  ]},
{ id:"t-pas-2", slot:"t-pas",
  fa:"تابستان پارسال با خانواده‌ام به شمال رفتم.",
  en:"I went up north with my family last summer.",
  why:["«تابستان پارسال» بازهٔ بسته است؛ گذشتهٔ ساده.",
       "«شمال» به‌عنوان منطقه: <en>the north</en> با <en>the</en>، یا در محاوره <en>up north</en>. <x>to north</x> بدون حرف تعریف غلط است."],
  misses:[
    { en:"I have gone to the north with my family last summer.", why:"حال کامل با <en>last summer</en> ممنوع است." },
    { en:"I went to north with my family in last summer.", why:"<en>the</en> جا افتاده، و قبل از <en>last</en> حرف اضافه نمی‌آید: <en>last summer</en>، نه <x>in last summer</x>." }
  ]},
{ id:"t-pas-3", slot:"t-pas",
  fa:"این گوشی را کی خریدی؟",
  en:"When did you buy this phone?",
  why:["<en>When</en> همیشه دنبال زمان مشخص در گذشته است، پس با حال کامل نمی‌آید: <en>When did…?</en>",
       "در سؤالِ گذشتهٔ ساده <en>did</en> نشانهٔ گذشته را می‌گیرد و فعل اصلی ساده می‌ماند: <en>did you buy</en>، نه <x>did you bought</x>."],
  misses:[
    { en:"When have you bought this phone?", why:"<en>When</en> و حال کامل با هم جمع نمی‌شوند؛ یکی زمان مشخص می‌خواهد، دیگری زمان را باز می‌گذارد." },
    { en:"When you bought this phone?", why:"سؤال بدون <en>did</en>؛ فارسی با لحن سؤال می‌سازد، انگلیسی با فعل کمکی." }
  ]},
{ id:"t-pas-4", slot:"t-pas",
  fa:"وقتی بچه بودم، خیلی از سگ‌ها می‌ترسیدم.",
  en:"When I was a child, I was really scared of dogs.",
  why:["«می‌ترسیدم» در فارسی شکل استمراری دارد، ولی اینجا یک حالتِ طولانی در گذشته است، نه کاری در حال انجام. حالت‌ها (ترس، دوست داشتن، دانستن) در انگلیسی گذشتهٔ ساده می‌گیرند.",
       "<en>used to be scared of</en> هم عالی است و تأکید می‌کند که دیگر نمی‌ترسی."],
  misses:[
    { en:"When I was a child, I was fearing dogs.", why:"فعل حالت (<en>fear</en>) استمراری نمی‌گیرد؛ «می‌ترسیدم» فارسی را نباید با <en>-ing</en> ترجمه کرد." },
    { en:"When I was child, I was very afraid from dogs.", why:"<en>a child</en> حرف تعریف می‌خواهد، و <en>afraid</en> با <en>of</en> می‌آید، نه <x>from</x> (ترجمهٔ «از»)." }
  ],
  alt:"<en>When I was a child, I used to be really scared of dogs.</en> — <en>used to</en> تضاد با حال را برجسته می‌کند."},
{ id:"t-pas-5", slot:"t-pas",
  fa:"جلسه ساعت ده شروع شد و تا ظهر طول کشید.",
  en:"The meeting started at ten and went on until noon.",
  why:["دو اتفاقِ کامل و تمام‌شده، پشت سر هم: گذشتهٔ ساده.",
       "«طول کشید تا ظهر» = <en>went on / lasted until noon</en>. <en>take</en> برای «مقدار زمان» است: <en>It took two hours</en>."],
  misses:[
    { en:"The meeting was starting at ten and was lasting until noon.", why:"استمراری برای کاری است که پس‌زمینهٔ کار دیگری است؛ اینجا خود رویدادها را گزارش می‌کنی." },
    { en:"The meeting has started at ten and took until noon.", why:"حال کامل با ساعت مشخص ممنوع، و <en>take</en> با <en>until</en> نمی‌آید." }
  ]},

/* ── گذشتهٔ استمراری ───────────────────── */
{ id:"t-pac-1", slot:"t-pac",
  fa:"وقتی زنگ زدی، داشتم دوش می‌گرفتم.",
  en:"I was having a shower when you called.",
  why:["یک کارِ در حال انجام (دوش) که کار کوتاه‌تری (زنگ) وسطش رخ داد. کار طولانی: گذشتهٔ استمراری؛ کار کوتاه: گذشتهٔ ساده.",
       "اگر هر دو ساده باشند (<en>I had a shower when you called</en>) یعنی بعد از تماس تو رفتم دوش گرفتم — ترتیب، نه هم‌زمانی."],
  misses:[
    { en:"I had a shower when you called.", why:"یعنی تماس تو باعث شد بروم دوش بگیرم؛ هم‌زمانی از دست رفت." },
    { en:"I was having a shower when you were calling.", why:"هر دو استمراری یعنی دو کار طولانیِ موازی؛ زنگ زدن کار لحظه‌ای است." }
  ],
  alt:"<en>I was taking a shower</en> — آمریکایی‌ها <en>take</en> می‌گویند، بریتانیایی‌ها <en>have</en>."},
{ id:"t-pac-2", slot:"t-pac",
  fa:"دیروز ساعت هشت شب چه کار می‌کردی؟",
  en:"What were you doing at eight o'clock yesterday evening?",
  why:["پرسیدن از کاری که در یک لحظهٔ مشخص از گذشته در جریان بود: گذشتهٔ استمراری.",
       "<en>What did you do at eight?</en> یعنی ساعت هشت چه کاری را شروع کردی یا انجام دادی — یک رویداد، نه وسطِ یک کار."],
  misses:[
    { en:"What did you do at eight o'clock yesterday evening?", why:"دنبال رویداد است، نه کاری که آن لحظه در جریان بود." },
    { en:"What you were doing at eight o'clock yesterday night?", why:"جای فاعل و فعل کمکی در سؤال عوض نشده؛ و ساعت هشت معمولاً <en>evening</en> است، نه <en>night</en>." }
  ]},
{ id:"t-pac-3", slot:"t-pac",
  fa:"داشتم از خیابان رد می‌شدم که یک ماشین با سرعت از جلویم رد شد.",
  en:"I was crossing the street when a car sped past me.",
  why:["«داشتم … که …» الگوی کلاسیکِ پس‌زمینه + رویدادِ ناگهانی است: <en>was/were + -ing … when + past simple</en>.",
       "«رد شدن از جلوی» = <en>speed past / go past</en>؛ <en>sped</en> گذشتهٔ <en>speed</en> است."],
  misses:[
    { en:"I crossed the street when a car sped past me.", why:"یعنی اول ماشین رد شد و بعد تو (یا به‌خاطرش) از خیابان رد شدی؛ هم‌زمانی گم می‌شود." },
    { en:"I was crossing the street when a car was speeding past me.", why:"هر دو پس‌زمینه شده‌اند و رویدادِ «ناگهان» دیگر وجود ندارد." }
  ]},
{ id:"t-pac-4", slot:"t-pac",
  fa:"وقتی رسیدیم، باران می‌آمد و همه چتر داشتند.",
  en:"When we arrived, it was raining and everyone had an umbrella.",
  why:["باران قبل از رسیدن ما شروع شده بود و ادامه داشت: گذشتهٔ استمراری (پس‌زمینه).",
       "ولی «چتر داشتند» حالت است (مالکیت) و <en>have</en> در این معنا استمراری نمی‌گیرد. فارسی هر دو را با یک شکل (می‌آمد / داشتند) گفته؛ انگلیسی جدایشان می‌کند."],
  misses:[
    { en:"When we arrived, it rained and everyone had an umbrella.", why:"یعنی به محض رسیدن ما باران شروع شد — گویی رسیدن ما باعثش بود." },
    { en:"When we arrived, it was raining and everyone was having an umbrella.", why:"<en>have</en> به معنی مالکیت استمراری نمی‌گیرد." }
  ]},
{ id:"t-pac-5", slot:"t-pac",
  fa:"در حالی که من ظرف‌ها را می‌شستم، همسرم بچه‌ها را می‌خواباند.",
  en:"While I was washing the dishes, my partner was putting the kids to bed.",
  why:["دو کار طولانی که هم‌زمان در جریان بودند: هر دو گذشتهٔ استمراری، معمولاً با <en>while</en>.",
       "«خواباندن بچه‌ها» = <en>put the kids to bed</en>. <en>sleep</en> متعدی نیست که بشود <x>sleep the kids</x> گفت."],
  misses:[
    { en:"While I washed the dishes, my partner put the kids to bed.", why:"دستوری است ولی کارها را کامل و بسته نشان می‌دهد؛ حس «هم‌زمان در جریان بودن» ضعیف می‌شود." },
    { en:"While I was washing the dishes, my partner was sleeping the kids.", why:"<en>sleep</en> مفعول نمی‌گیرد؛ «خواباندن» = <en>put … to bed</en>." }
  ]},

/* ── گذشتهٔ کامل ───────────────────────── */
{ id:"t-pap-1", slot:"t-pap",
  fa:"وقتی به ایستگاه رسیدم، قطار رفته بود.",
  en:"When I got to the station, the train had left.",
  why:["دو اتفاق در گذشته، و یکی قبل از دیگری: رفتن قطار قبل از رسیدن من. رویداد عقب‌تر گذشتهٔ کامل می‌گیرد.",
       "اگر بنویسی <en>the train left</en> یعنی درست همان وقتی رسیدم قطار راه افتاد — جلوی چشمم."],
  misses:[
    { en:"When I got to the station, the train left.", why:"یعنی رسیدن من و رفتن قطار هم‌زمان بود؛ ترتیب را از دست دادی." },
    { en:"When I got to the station, the train has left.", why:"حال کامل به حال وصل است؛ داستان در گذشته است، پس یک پله عقب‌تر: <en>had left</en>." }
  ]},
{ id:"t-pap-2", slot:"t-pap",
  fa:"تا آن روز هیچ‌وقت سوار هواپیما نشده بودم.",
  en:"I had never been on a plane before that day.",
  why:["تجربه‌ای که تا یک نقطه در گذشته نبوده. همان منطقِ «تا حالا» (حال کامل)، ولی نقطهٔ مرجع «آن روز» در گذشته است، پس یک پله عقب: گذشتهٔ کامل.",
       "«سوار هواپیما شدن» به‌عنوان تجربه: <en>be on a plane</en> یا <en>fly</en>."],
  misses:[
    { en:"I have never been on a plane before that day.", why:"حال کامل تا الان را می‌سنجد؛ نقطهٔ مرجع اینجا «آن روز» است." },
    { en:"I never got on a plane until that day.", why:"گذشتهٔ ساده قابل فهم است ولی حسِ «تا آن لحظه تجربه نکرده بودم» را کم‌رنگ می‌کند." }
  ]},
{ id:"t-pap-3", slot:"t-pap",
  fa:"وقتی به خانه رسیدم، فهمیدم که کیف پولم را در تاکسی جا گذاشته‌ام.",
  en:"When I got home, I realised I had left my wallet in the taxi.",
  why:["فارسی در نقل فکر، زمان را از دید همان لحظه می‌گوید (جا گذاشته‌ام). انگلیسی همه‌چیز را یک پله عقب می‌برد: کاری که قبل از «فهمیدم» اتفاق افتاده، گذشتهٔ کامل می‌گیرد.",
       "<en>realise</en> + جملهٔ <en>that</en> (که می‌شود حذفش کرد)."],
  misses:[
    { en:"When I got home, I realised I have left my wallet in the taxi.", why:"ترجمهٔ مستقیم «جا گذاشته‌ام». در داستانِ گذشته حال کامل جا ندارد." },
    { en:"When I got home, I realised I left my wallet in the taxi.", why:"در محاوره شنیده می‌شود، ولی ترتیب را مبهم می‌کند؛ گذشتهٔ کامل آن را روشن می‌کند." }
  ]},
{ id:"t-pap-4", slot:"t-pap",
  fa:"تا مهمان‌ها برسند، شام را خورده بودیم.",
  en:"By the time the guests arrived, we had already eaten dinner.",
  why:["<en>By the time</en> + گذشتهٔ ساده، و در بخش دیگر گذشتهٔ کامل: کاری که قبل از آن نقطه تمام شده بود.",
       "<en>already</en> بین <en>had</en> و فعل اصلی می‌نشیند."],
  misses:[
    { en:"By the time the guests arrived, we already ate dinner.", why:"گذشتهٔ ساده ترتیب را روشن نمی‌کند؛ <en>by the time</en> تقریباً همیشه گذشتهٔ کامل را صدا می‌زند." },
    { en:"Until the guests arrived, we had eaten dinner.", why:"<en>until</en> یعنی «تا آن موقع مدام…»؛ برای «قبل از آن نقطه تمام شده بود»، <en>by the time</en>." }
  ]},
{ id:"t-pap-5", slot:"t-pap",
  fa:"چون صبحانه نخورده بودم، ظهر از گرسنگی داشتم می‌مردم.",
  en:"I was starving by lunchtime because I hadn't had breakfast.",
  why:["علت (صبحانه نخوردن) قبل از نتیجه (گرسنگی ظهر) بوده؛ علت یک پله عقب‌تر: <en>hadn't had</en>.",
       "«از گرسنگی داشتم می‌مردم» یک اصطلاح است: <en>I was starving</en>. ترجمهٔ کلمه‌به‌کلمه (<x>I was dying from hunger</x>) خیلی دراماتیک است."],
  misses:[
    { en:"I was starving by lunchtime because I haven't had breakfast.", why:"<en>haven't had</en> به حال وصل است؛ کل ماجرا در گذشته است." },
    { en:"I was dying from hunger at noon because I didn't eat breakfast.", why:"دستوری قابل قبول است، ولی اصطلاح غیرطبیعی است و ترتیب با گذشتهٔ ساده ضعیف‌تر." }
  ]},

/* ── گذشتهٔ کامل استمراری ──────────────── */
{ id:"t-papc-1", slot:"t-papc",
  fa:"وقتی بالاخره اتوبوس آمد، چهل دقیقه بود که منتظر بودیم.",
  en:"When the bus finally came, we had been waiting for forty minutes.",
  why:["منتظر ماندن تا لحظه‌ای در گذشته ادامه داشته و طولش مهم است. همان حال کامل استمراری، ولی یک پله عقب‌تر: <en>had been waiting</en>.",
       "فارسی می‌گوید «منتظر بودیم» — گذشتهٔ ساده. طول بازه (چهل دقیقه) است که زمان فعل انگلیسی را تعیین می‌کند."],
  misses:[
    { en:"When the bus finally came, we were waiting for forty minutes.", why:"گذشتهٔ استمراری با <en>for</en> + طول بازهٔ منتهی به یک نقطه غلط است؛ این کار گذشتهٔ کامل استمراری است." },
    { en:"When the bus finally came, we have been waiting for forty minutes.", why:"یک پله کم عقب رفته‌ای؛ نقطهٔ مرجع (آمدن اتوبوس) در گذشته است." }
  ]},
{ id:"t-papc-2", slot:"t-papc",
  fa:"پدرم خسته بود، چون تمام روز در باغ کار کرده بود.",
  en:"My father was tired because he'd been working in the garden all day.",
  why:["فعالیت طولانی قبل از یک نقطه در گذشته، که ردش در آن نقطه دیده می‌شد (خستگی): گذشتهٔ کامل استمراری.",
       "این همان «چشم‌هایت قرمز است، گریه کرده‌ای؟» است، یک پله عقب‌تر."],
  misses:[
    { en:"My father was tired because he was working in the garden all day.", why:"گذشتهٔ استمراری ترتیب را نمی‌گوید؛ به نظر می‌رسد خستگی و کار هم‌زمان بوده‌اند." },
    { en:"My father was tired because he has been working in the garden all day.", why:"حال کامل استمراری به الان وصل است، در حالی که «خسته بود» گذشته است." }
  ],
  alt:"<en>because he'd worked in the garden all day</en> هم درست است؛ تأکید را از فرایند به کارِ انجام‌شده می‌برد."},
{ id:"t-papc-3", slot:"t-papc",
  fa:"زمین خیس بود؛ معلوم بود که تمام شب باران آمده.",
  en:"The ground was wet — it had obviously been raining all night.",
  why:["استدلال از ردِ فعلی (در گذشته) به فعالیتی که قبلش ادامه داشته: گذشتهٔ کامل استمراری.",
       "فارسی «آمده» (ماضی نقلی) گفته، چون از دید همان لحظه نقل می‌کند؛ در انگلیسی داستان گذشته است و یک پله عقب می‌رود."],
  misses:[
    { en:"The ground was wet — it has obviously been raining all night.", why:"ترجمهٔ مستقیم «آمده»؛ نقطهٔ مرجع (زمین خیس بود) در گذشته است." },
    { en:"The ground was wet — it was obviously raining all night.", why:"یعنی تمام شب داشت باران می‌آمد — ولی رابطهٔ علت و ردش را نمی‌سازد." }
  ]},
{ id:"t-papc-4", slot:"t-papc",
  fa:"برادرم سه سال بود که در آن شرکت کار می‌کرد که اخراجش کردند.",
  en:"My brother had been working at that company for three years when he was fired.",
  why:["سه سال کار تا لحظهٔ اخراج (نقطه‌ای در گذشته): <en>had been working … for three years when …</en>.",
       "«اخراجش کردند» فاعل مشخصی ندارد، پس مجهول: <en>he was fired</en> یا <en>they let him go</en>."],
  misses:[
    { en:"My brother was working at that company for three years when they fired him.", why:"گذشتهٔ استمراری + <en>for three years</en> + نقطهٔ پایان، کار گذشتهٔ کامل استمراری است." },
    { en:"My brother has been working at that company for three years when he was fired.", why:"حال کامل استمراری با داستانِ کاملاً گذشته جور نیست." }
  ]},
{ id:"t-papc-5", slot:"t-papc",
  fa:"چشم‌هایم درد گرفته بود، چون ساعت‌ها به صفحهٔ گوشی خیره شده بودم.",
  en:"My eyes were hurting because I'd been staring at my phone screen for hours.",
  why:["فعالیتی چندساعته که قبل از درد گرفتن چشم‌ها ادامه داشت؛ طول مهم است: گذشتهٔ کامل استمراری.",
       "<en>stare at</en> با <en>at</en>؛ «خیره شدن به»."],
  misses:[
    { en:"My eyes were hurting because I was staring at my phone screen for hours.", why:"<en>was staring … for hours</en> ترتیب و بازه را نمی‌رساند." },
    { en:"My eyes were hurting because I'd been staring to my phone screen for hours.", why:"<en>stare</en> با <en>at</en> می‌آید، نه <x>to</x>." }
  ]},

/* ── آینده با will ─────────────────────── */
{ id:"t-fw-1", slot:"t-fw",
  fa:"کیسه‌ها سنگین است؟ صبر کن، کمکت می‌کنم.",
  en:"Are those bags heavy? Hold on, I'll help you.",
  why:["تصمیمی که همین لحظه گرفته شد، به‌صورت پیشنهاد: <en>will</en>. «کمکت می‌کنم» در فارسی فعل حال است، ولی انگلیسی برای پیشنهاد و تصمیم آنی <en>will</en> می‌خواهد.",
       "<en>I'm going to help you</en> یعنی از قبل برنامه‌اش را داشتم — عجیب است."],
  misses:[
    { en:"Are those bags heavy? Hold on, I help you.", why:"ترجمهٔ مستقیم فعل حال فارسی؛ حال ساده پیشنهاد نمی‌سازد." },
    { en:"Are those bags heavy? Hold on, I'm going to help you.", why:"<en>going to</en> نیت قبلی است؛ اینجا تصمیم همین لحظه گرفته شده." }
  ]},
{ id:"t-fw-2", slot:"t-fw",
  fa:"فکر می‌کنم فردا باران بیاید.",
  en:"I think it'll rain tomorrow.",
  why:["پیش‌بینی بر اساس نظر شخصی (<en>I think</en>، <en>probably</en>، <en>I'm sure</en>) با <en>will</en> می‌آید.",
       "فارسی بعد از «فکر می‌کنم» التزامی (بیاید) یا حال (می‌آید) می‌گذارد؛ انگلیسی به‌جایش <en>will</en> دارد."],
  misses:[
    { en:"I think it rains tomorrow.", why:"حال ساده برای پیش‌بینی نمی‌آید." },
    { en:"I think it is raining tomorrow.", why:"حال استمراری برای آینده فقط برای قرارهای انسانی است؛ باران قرار نمی‌گذارد." }
  ]},
{ id:"t-fw-3", slot:"t-fw",
  fa:"قول می‌دهم دیگر دیر نکنم.",
  en:"I promise I won't be late again.",
  why:["قول، تهدید، پیشنهاد و درخواست قلمروی <en>will</en> است. منفی‌اش <en>won't</en>.",
       "«دیر نکنم» فعل انگلیسی ندارد؛ <en>be late</en> است. «دیگر» اینجا = <en>again</en>."],
  misses:[
    { en:"I promise I'm not late again.", why:"فعل حال ساده قول نمی‌سازد." },
    { en:"I promise I won't late anymore.", why:"<en>late</en> صفت است و <en>be</en> می‌خواهد. <en>anymore</en> هم ممکن است، ولی <en>again</en> طبیعی‌تر است." }
  ],
  alt:"<en>I promise not to be late again.</en> — با مصدر هم درست است."},
{ id:"t-fw-4", slot:"t-fw",
  fa:"نگران نباش، حتماً قبول می‌شوی.",
  en:"Don't worry — you'll definitely pass.",
  why:["اطمینان‌دادن و پیش‌بینی: <en>will</en>. قید <en>definitely</en> بعد از <en>will</en> می‌نشیند: <en>you'll definitely pass</en>.",
       "«قبول شدن در امتحان» = <en>pass</en>. <en>be accepted</en> مال دانشگاه و درخواست است."],
  misses:[
    { en:"Don't worry — you'll be accepted definitely.", why:"<en>be accepted</en> برای پذیرش در دانشگاه یا شغل است؛ و قید در آخر جمله بی‌جاست." },
    { en:"Don't worry — you definitely pass.", why:"بدون <en>will</en> پیش‌بینی ساخته نمی‌شود." }
  ]},
{ id:"t-fw-5", slot:"t-fw",
  fa:"تلفن دارد زنگ می‌زند — من جواب می‌دهم.",
  en:"The phone's ringing — I'll get it.",
  why:["تصمیم آنی: <en>will</en>. «جواب دادن تلفن» در محاوره <en>get it</en> یا <en>answer it</en> است.",
       "<en>I'm going to answer it</en> یعنی از قبل تصمیمش را گرفته بودی — منتظر این تماس بودی."],
  misses:[
    { en:"The phone's ringing — I answer it.", why:"حال ساده برای تصمیم آنی استفاده نمی‌شود." },
    { en:"The phone rings — I'll get it.", why:"<en>rings</en> یعنی عادتاً زنگ می‌زند؛ برای همین لحظه <en>is ringing</en>." }
  ]},

/* ── آینده با be going to ───────────────── */
{ id:"t-fg-1", slot:"t-fg",
  fa:"به آسمان نگاه کن، الان باران می‌گیرد.",
  en:"Look at the sky — it's going to rain.",
  why:["پیش‌بینی بر اساس شواهدی که جلوی چشم است (ابرهای سیاه): <en>be going to</en>.",
       "<en>will</en> بیشتر نظر و حدس است؛ اینجا گوینده دارد به نشانه‌ای اشاره می‌کند."],
  misses:[
    { en:"Look at the sky — it will rain.", why:"دستوری است، ولی حسِ «شواهد را ببین» را که با <en>Look at…</en> ساخته شده از بین می‌برد." },
    { en:"Look at the sky — it rains now.", why:"حال ساده، و «الان» اینجا یعنی به‌زودی، نه همین لحظه." }
  ]},
{ id:"t-fg-2", slot:"t-fg",
  fa:"تصمیمم را گرفته‌ام: از ماه بعد در باشگاه ثبت‌نام می‌کنم.",
  en:"I've made up my mind: I'm going to join a gym next month.",
  why:["نیت و تصمیمی که از قبل گرفته شده: <en>be going to</en>. خودِ جمله («تصمیمم را گرفته‌ام») این را تأیید می‌کند.",
       "«در باشگاه ثبت‌نام کردن» = <en>join a gym</en>."],
  misses:[
    { en:"I've made up my mind: I'll join a gym next month.", why:"<en>will</en> حسِ تصمیم همین لحظه را دارد و با «تصمیمم را گرفته‌ام» کمی ناجور است." },
    { en:"I've made up my mind: I register in a gym from next month.", why:"حال ساده برای نیت نمی‌آید؛ و <x>from next month</x> ترجمهٔ «از» است — <en>next month</en> کافی است." }
  ]},
{ id:"t-fg-3", slot:"t-fg",
  fa:"مواظب باش! آن لیوان الان می‌افتد.",
  en:"Careful! That glass is going to fall.",
  why:["لیوان لبهٔ میز است — شواهد حاضر: <en>be going to</en>.",
       "اگر لیوان در هوا بود (در حال افتادن)، <en>is falling</en> درست می‌شد. اینجا هنوز نیفتاده."],
  misses:[
    { en:"Careful! That glass will fall.", why:"قابل فهم است، ولی برای خطرِ جلوی چشم <en>going to</en> طبیعی است." },
    { en:"Careful! That glass falls.", why:"حال ساده یعنی به طور کلی می‌افتد — مثل یک قانون." }
  ]},
{ id:"t-fg-4", slot:"t-fg",
  fa:"این آخر هفته می‌خواهیم اتاق بچه را رنگ کنیم؛ رنگش را هم خریده‌ایم.",
  en:"We're going to paint the kids' room this weekend — we've already bought the paint.",
  why:["«می‌خواهیم» + برنامه‌ای که مقدماتش انجام شده: <en>be going to</en>.",
       "<en>want to</en> فقط آرزو یا خواسته است؛ نیتِ عملی را نمی‌رساند. «می‌خواهم» فارسی بیشتر وقت‌ها یعنی <en>going to</en>."],
  misses:[
    { en:"We want to paint the kids' room this weekend.", why:"فقط خواسته است؛ ممکن است انجام نشود. «رنگ را خریده‌ایم» نشان می‌دهد برنامه است." },
    { en:"We will paint the kid room this weekend.", why:"<en>will</en> نیت قبلی را نمی‌رساند، و مالکیت جمع <en>kids'</en> است." }
  ]},
{ id:"t-fg-5", slot:"t-fg",
  fa:"با این ترافیک، به جلسه دیر می‌رسیم.",
  en:"With this traffic, we're going to be late for the meeting.",
  why:["پیش‌بینی بر اساس وضعیتی که الان جلوی ماست (ترافیک): <en>be going to</en>.",
       "«دیر رسیدن به» = <en>be late for</en>."],
  misses:[
    { en:"With this traffic, we arrive late to the meeting.", why:"حال ساده پیش‌بینی نیست، و <en>arrive</en> با <en>at</en> می‌آید." },
    { en:"With this traffic, we will be late to the meeting.", why:"<en>will</en> هم می‌شود، ولی <en>late for</en> درست است، نه <x>late to</x> (در بریتانیایی)." }
  ]},

/* ── آیندهٔ استمراری ───────────────────── */
{ id:"t-fc-1", slot:"t-fc",
  fa:"فردا همین موقع، دارم به تهران پرواز می‌کنم.",
  en:"This time tomorrow, I'll be flying to Tehran.",
  why:["کاری که در یک لحظهٔ مشخص از آینده در جریان خواهد بود: <en>will be + -ing</en>. همان گذشتهٔ استمراری، ولی رو به جلو.",
       "<en>I'll fly</en> یعنی آن لحظه پرواز شروع می‌شود، نه اینکه وسط پروازم."],
  misses:[
    { en:"This time tomorrow, I'll fly to Tehran.", why:"یعنی پرواز درست در آن لحظه شروع می‌شود؛ حسِ «وسطِ کار» گم می‌شود." },
    { en:"This time tomorrow, I'm flying to Tehran.", why:"حال استمراری قرارِ آینده را می‌گوید (پرواز دارم)، ولی «وسطِ پرواز در آن لحظه» را نه." }
  ]},
{ id:"t-fc-2", slot:"t-fc",
  fa:"ساعت نه زنگ نزن؛ آن موقع دارم بچه‌ها را می‌خوابانم.",
  en:"Don't call at nine — I'll be putting the kids to bed then.",
  why:["در لحظهٔ مشخصی از آینده (ساعت نه) کاری در جریان خواهد بود: آیندهٔ استمراری.",
       "«خواباندن» = <en>put … to bed</en>."],
  misses:[
    { en:"Don't call at nine — I'll put the kids to bed then.", why:"یعنی ساعت نه تصمیم دارم این کار را شروع کنم — نه اینکه وسطش هستم." },
    { en:"Don't call at nine — I put the kids to bed then.", why:"حال ساده یعنی عادتم است؛ ممکن است درست باشد، ولی «آن موقع مشغولم» را نمی‌گوید." }
  ]},
{ id:"t-fc-3", slot:"t-fc",
  fa:"فردا به فروشگاه می‌روی؟ اگر می‌روی، برایم شیر می‌گیری؟",
  en:"Will you be going to the shop tomorrow? If so, could you get me some milk?",
  why:["پرسیدن مؤدبانه دربارهٔ برنامهٔ کسی، بدون اینکه درخواست به نظر برسد: <en>Will you be + -ing?</en>",
       "<en>Will you go to the shop tomorrow?</en> شبیه درخواست است: «می‌شود فردا بروی فروشگاه؟»"],
  misses:[
    { en:"Will you go to the shop tomorrow?", why:"شبیه این است که از او می‌خواهی برود؛ نه اینکه بپرسی برنامه‌اش چیست." },
    { en:"Are you go to the shop tomorrow?", why:"<en>are</en> بدون <en>-ing</en>." }
  ],
  alt:"<en>Are you going to the shop tomorrow?</en> هم طبیعی است؛ آیندهٔ استمراری فقط کمی مؤدبانه‌تر و بی‌طرف‌تر است."},
{ id:"t-fc-4", slot:"t-fc",
  fa:"غصه نخور؛ سال دیگر همین موقع در خانهٔ جدیدمان زندگی می‌کنیم.",
  en:"Don't worry — this time next year we'll be living in our new house.",
  why:["«سال دیگر همین موقع» یک لحظه در آینده است که در آن وضعیتی در جریان خواهد بود: آیندهٔ استمراری.",
       "فارسی با حال ساده (زندگی می‌کنیم) گفته؛ انگلیسی بدون <en>will</en> آینده را نمی‌سازد."],
  misses:[
    { en:"Don't worry — this time next year we live in our new house.", why:"حال ساده، و آینده بدون نشانه‌اش." },
    { en:"Don't worry — this time next year we will live in our new house.", why:"دستوری است، ولی حسِ «در آن لحظه در حال زندگی هستیم» را ضعیف می‌کند." }
  ]},
{ id:"t-fc-5", slot:"t-fc",
  fa:"وقتی به خانه برسی، احتمالاً دارم آشپزی می‌کنم.",
  en:"When you get home, I'll probably be cooking.",
  why:["بعد از <en>when</en> (زمانی) آینده با حال ساده می‌آید: <en>When you get home</en>. در بخش اصلی: آیندهٔ استمراری، چون آن موقع وسطِ آشپزی خواهم بود.",
       "<en>probably</en> بعد از <en>will</en>: <en>I'll probably be</en>."],
  misses:[
    { en:"When you will get home, I'll probably be cooking.", why:"بعد از <en>when</en>ِ زمانی <en>will</en> نمی‌آید." },
    { en:"When you get home, I'll probably cook.", why:"یعنی وقتی برسی شروع به آشپزی می‌کنم." }
  ]},

/* ── آیندهٔ کامل ───────────────────────── */
{ id:"t-fp-1", slot:"t-fp",
  fa:"تا ساعت شش کارم را تمام کرده‌ام.",
  en:"I'll have finished my work by six.",
  why:["کاری که تا یک نقطه در آینده تمام شده خواهد بود: <en>will have + V3</en>، تقریباً همیشه با <en>by</en>.",
       "فارسی ماضی نقلی (کرده‌ام) گذاشته. همین تله است: <en>I've finished by six</en> در انگلیسی معنا ندارد."],
  misses:[
    { en:"I've finished my work by six.", why:"حال کامل به الان وصل است؛ نقطهٔ مرجع (ساعت شش) در آینده است." },
    { en:"I'll finish my work until six.", why:"<en>until</en> یعنی «تا آن موقع مدام»؛ برای ضرب‌الاجل <en>by</en>. و <en>will finish</en> یعنی آن موقع تمامش می‌کنم، نه تا آن موقع تمام شده است." }
  ]},
{ id:"t-fp-2", slot:"t-fp",
  fa:"تا تو برسی، شام را آماده کرده‌ام.",
  en:"By the time you arrive, I'll have made dinner.",
  why:["<en>By the time</en> + حال ساده (آینده)، و در بخش اصلی آیندهٔ کامل.",
       "بعد از <en>by the time</en> (مثل <en>when</en>) <en>will</en> نمی‌آید."],
  misses:[
    { en:"By the time you will arrive, I'll have made dinner.", why:"در بند زمانی <en>will</en> ممنوع است." },
    { en:"By the time you arrive, I'll make dinner.", why:"یعنی آن موقع شروع به آماده کردن می‌کنم." }
  ]},
{ id:"t-fp-3", slot:"t-fp",
  fa:"تا آخر ماه، کل وام را پس داده‌ایم.",
  en:"By the end of the month, we'll have paid off the whole loan.",
  why:["تمام شدن کاری تا یک ضرب‌الاجل آینده: آیندهٔ کامل با <en>by</en>.",
       "«پس دادن وام به‌طور کامل» = <en>pay off</en>."],
  misses:[
    { en:"Until the end of the month, we'll have paid back all the loan.", why:"<en>until</en> ضرب‌الاجل نیست؛ <en>by</en> است." },
    { en:"By the end of the month, we paid off the whole loan.", why:"گذشتهٔ ساده؛ این هنوز اتفاق نیفتاده." }
  ]},
{ id:"t-fp-4", slot:"t-fp",
  fa:"سال دیگر همین موقع، ده سال است که ازدواج کرده‌ایم.",
  en:"By this time next year, we'll have been married for ten years.",
  why:["«ده سال است که» در نقطه‌ای از آینده: آیندهٔ کامل. <en>be married</en> حالت است، پس <en>will have been married</en> (نه استمراری).",
       "<en>we'll have married</en> یعنی تا آن موقع عمل ازدواج انجام شده — ولی ما طول بودن در ازدواج را می‌خواهیم."],
  misses:[
    { en:"By this time next year, we are married for ten years.", why:"فعل حال با بازه، تلهٔ آشنای فارسی." },
    { en:"By this time next year, we will marry for ten years.", why:"<en>marry</en> عمل یک‌باره است و با بازهٔ ده‌ساله نمی‌آید." }
  ]},
{ id:"t-fp-5", slot:"t-fp",
  fa:"فکر می‌کنی تا آخر سال خانه را فروخته باشند؟",
  en:"Do you think they'll have sold the house by the end of the year?",
  why:["سؤال دربارهٔ کاری که تا نقطه‌ای در آینده تمام شده خواهد بود: آیندهٔ کامل.",
       "فارسی التزامیِ کامل (فروخته باشند) گذاشته؛ انگلیسی التزامی ندارد و همان <en>will have + V3</en> است."],
  misses:[
    { en:"Do you think they sold the house by the end of the year?", why:"گذشتهٔ ساده؛ ماجرا در آینده است." },
    { en:"Do you think they will sell the house until the end of the year?", why:"<en>until</en> و ضرب‌الاجل با هم جور نیستند، و <en>will sell</en> زمانِ انجام را می‌گوید، نه تمام شدن تا آن موقع." }
  ]},

/* ── آیندهٔ کامل استمراری ──────────────── */
{ id:"t-fpc-1", slot:"t-fpc",
  fa:"ماه بعد، ده سال می‌شود که اینجا زندگی می‌کنم.",
  en:"Next month, I'll have been living here for ten years.",
  why:["بازه‌ای که از گذشته شروع شده، تا نقطه‌ای در آینده ادامه دارد و طولش مهم است: <en>will have been + -ing</en>.",
       "فارسی می‌گوید «زندگی می‌کنم» (حال). انگلیسی باید هم بازه را نشان دهد (<en>have been</en>) هم نقطهٔ آینده را (<en>will</en>)."],
  misses:[
    { en:"Next month, I live here for ten years.", why:"حال ساده با بازه و آینده؛ هیچ‌کدام را نمی‌رساند." },
    { en:"Next month, I'll be living here for ten years.", why:"یعنی ماه بعد برای ده سال اینجا زندگی خواهم کرد — ده سال آینده!" }
  ]},
{ id:"t-fpc-2", slot:"t-fpc",
  fa:"تا برسیم، دوازده ساعت است که پشت فرمان هستیم.",
  en:"By the time we get there, we'll have been driving for twelve hours.",
  why:["طول فعالیتی که تا لحظهٔ رسیدن (در آینده) ادامه خواهد داشت: آیندهٔ کامل استمراری.",
       "در بند <en>By the time</en> حال ساده: <en>we get there</en>."],
  misses:[
    { en:"By the time we get there, we have been driving for twelve hours.", why:"حال کامل استمراری تا الان را می‌سنجد، نه تا رسیدن." },
    { en:"By the time we will get there, we'll drive for twelve hours.", why:"<en>will</en> در بند زمانی، و <en>will drive for twelve hours</en> یعنی از آن موقع دوازده ساعت رانندگی می‌کنیم." }
  ]},
{ id:"t-fpc-3", slot:"t-fpc",
  fa:"ساعت پنج که بشود، هشت ساعت است پشت این میز نشسته‌ام.",
  en:"By five o'clock, I'll have been sitting at this desk for eight hours.",
  why:["هشت ساعت نشستن تا نقطهٔ ساعت پنج (در آینده): آیندهٔ کامل استمراری.",
       "فارسی «نشسته‌ام» (ماضی نقلی) می‌گوید؛ انگلیسی باید آینده را هم اضافه کند."],
  misses:[
    { en:"By five o'clock, I have been sitting at this desk for eight hours.", why:"<en>will</en> جا افتاده؛ نقطهٔ مرجع آینده است." },
    { en:"By five o'clock, I'll have sat on this desk for eight hours.", why:"<en>on this desk</en> یعنی روی خود میز نشسته‌ای؛ <en>at this desk</en>. و ساده به جای استمراری طول را ضعیف می‌کند." }
  ]},
{ id:"t-fpc-4", slot:"t-fpc",
  fa:"تا خرداد، دو سال می‌شود که دارم برای این آزمون درس می‌خوانم.",
  en:"By June, I'll have been studying for this exam for two years.",
  why:["بازهٔ دوساله که تا نقطه‌ای در آینده (خرداد) ادامه دارد: آیندهٔ کامل استمراری.",
       "دو <en>for</en> پشت سر هم عیب نیست: <en>studying for this exam</en> (هدف) و <en>for two years</en> (طول)."],
  misses:[
    { en:"By June, I'm studying for this exam for two years.", why:"حال استمراری با بازه و آینده — ترجمهٔ مستقیم «دارم درس می‌خوانم»." },
    { en:"Until June, I'll have been studying for this exam since two years.", why:"<en>by</en> نه <x>until</x>، و <en>for</en> نه <x>since</x>." }
  ]},
{ id:"t-fpc-5", slot:"t-fpc",
  fa:"پدرم وقتی بازنشسته شود، سی سال است که معلمی کرده.",
  en:"By the time my father retires, he'll have been teaching for thirty years.",
  why:["سی سال تدریس تا لحظهٔ بازنشستگی (آینده): آیندهٔ کامل استمراری. <en>by the time</en> نقطه را دقیق می‌کند.",
       "در بند زمانی حال ساده: <en>retires</en>، نه <x>will retire</x>."],
  misses:[
    { en:"When my father will retire, he has taught for thirty years.", why:"<en>will</en> در بند زمانی، و <en>has taught</en> به الان وصل است نه به زمان بازنشستگی." },
    { en:"By the time my father retires, he'll teach for thirty years.", why:"یعنی از آن موقع سی سال درس خواهد داد." }
  ]},

/* ── آینده در گذشته ────────────────────── */
{ id:"t-fip-1", slot:"t-fip",
  fa:"می‌خواستم بهت زنگ بزنم، ولی یادم رفت.",
  en:"I was going to call you, but I forgot.",
  why:["نیتی در گذشته که انجام نشد: <en>was/were going to</en>. همان <en>going to</en>ِ نیت، یک پله عقب.",
       "«می‌خواستم» فارسی بیشتر وقت‌ها یعنی همین، نه <en>wanted</en>."],
  misses:[
    { en:"I wanted to call you, but I forgot.", why:"قابل قبول است، ولی فقط خواسته را می‌گوید؛ <en>was going to</en> نیتِ عملی را." },
    { en:"I'm going to call you, but I forgot.", why:"نیت در حال با فراموشی در گذشته جور نیست." }
  ]},
{ id:"t-fip-2", slot:"t-fip",
  fa:"می‌دانستم اتوبوس دیر می‌کند.",
  en:"I knew the bus would be late.",
  why:["از نقطه‌ای در گذشته به آینده‌ی آن نگاه می‌کنی: <en>will</en> یک پله عقب می‌رود و <en>would</en> می‌شود.",
       "فارسی زمان را از دید همان لحظه نگه می‌دارد (دیر می‌کند)؛ انگلیسی همه را هم‌زمان با فعل اصلی (<en>knew</en>) عقب می‌برد."],
  misses:[
    { en:"I knew the bus will be late.", why:"<en>will</en> بعد از فعل گذشته؛ backshift جا افتاده." },
    { en:"I knew the bus is late.", why:"یعنی می‌دانستم (همین حالا) دیر است — آیندگی گم شد." }
  ]},
{ id:"t-fip-3", slot:"t-fip",
  fa:"همسایه‌ها گفتند فردایش کمک‌مان می‌کنند.",
  en:"The neighbours said they would help us the next day.",
  why:["نقل قول غیرمستقیم در گذشته: <en>will</en> → <en>would</en>. «فردایش» (فردای آن روز) = <en>the next day</en> / <en>the following day</en>.",
       "<en>tomorrow</en> فقط وقتی درست است که آن فردا هنوز نیامده باشد."],
  misses:[
    { en:"The neighbours said they will help us tomorrow.", why:"اگر هنوز فردا نشده، قابل قبول است؛ ولی «فردایش» می‌گوید آن روز گذشته." },
    { en:"The neighbours said that they help us the next day.", why:"حال ساده آینده‌ی آن لحظه را نمی‌سازد." }
  ]},
{ id:"t-fip-4", slot:"t-fip",
  fa:"قرار بود ساعت هشت همدیگر را ببینیم، ولی جلسه لغو شد.",
  en:"We were going to meet at eight, but the meeting was cancelled.",
  why:["برنامه‌ای در گذشته که عملی نشد: <en>were going to</en>. «قرار بود» را با <en>were supposed to</en> هم می‌شود گفت.",
       "«لغو شد» فاعل ندارد: مجهول <en>was cancelled</en>."],
  misses:[
    { en:"We would meet at eight, but the meeting was cancelled.", why:"<en>would</en> تنها اینجا مبهم است و بیشتر حس عادتِ گذشته (<en>used to</en>) می‌دهد." },
    { en:"We are going to meet at eight, but the meeting cancelled.", why:"زمان حال با داستان گذشته، و <x>cancelled</x> معلوم بدون مفعول — جلسه خودش را لغو نکرد." }
  ],
  alt:"<en>We were supposed to meet at eight…</en> — روی «قرار» تأکید می‌کند تا روی نیت."},
{ id:"t-fip-5", slot:"t-fip",
  fa:"فکر نمی‌کردم این‌قدر طول بکشد.",
  en:"I didn't think it would take so long.",
  why:["فکری در گذشته دربارهٔ آینده‌ی آن موقع: <en>would</en>.",
       "«این‌قدر» در گذشته = <en>so long</en> یا <en>this long</en>. <en>take</en> برای مدت زمان."],
  misses:[
    { en:"I didn't think it will take so long.", why:"<en>will</en> بعد از فعل گذشته؛ یک پله عقب نرفته." },
    { en:"I didn't think it takes this long.", why:"حال ساده، و آیندگی آن لحظه گم شده." }
  ]},

/* ══ دور دوم: جمله‌های ۶ تا ۱۰ ══ */

/* ── حال ساده ─────────────────────────── */
{ id:"t-ps-6", slot:"t-ps",
  fa:"خواهرم در بیمارستان کار می‌کند و هفته‌ای سه شب شیفت است.",
  en:"My sister works at a hospital and does three night shifts a week.",
  why:["شغل و برنامهٔ ثابت: حال ساده. «هفته‌ای سه شب» تکرار منظم است.",
       "«هفته‌ای» = <en>a week</en> (نه <x>in a week</x> که یعنی ظرف یک هفته). «شیفت شب بودن» = <en>do / work night shifts</en>."],
  misses:[
    { en:"My sister is working at a hospital and does three night shifts a week.", why:"<en>is working</en> یعنی شغل موقتی است — مثلاً فقط این ماه." },
    { en:"My sister work at a hospital and is three nights in shift a week.", why:"<en>-s</en> سوم‌شخص جا افتاده، و «شیفت است» ترجمهٔ کلمه‌به‌کلمه است." }
  ]},
{ id:"t-ps-7", slot:"t-ps",
  fa:"این اتوبوس از جلوی خانهٔ ما رد نمی‌شود.",
  en:"This bus doesn't go past our house.",
  why:["مسیر ثابتِ اتوبوس، واقعیت همیشگی: حال سادهٔ منفی با <en>doesn't</en>.",
       "«از جلوی … رد شدن» = <en>go past</en>. <en>pass</en> هم هست، ولی بدون <en>from</en>: <en>pass our house</en>."],
  misses:[
    { en:"This bus isn't passing our house.", why:"یعنی همین الان از جلوی خانه رد نمی‌شود (یا این روزها به‌طور موقت)." },
    { en:"This bus doesn't pass from in front of our house.", why:"ترجمهٔ «از جلوی»؛ <en>pass</en> مفعول مستقیم می‌گیرد." }
  ]},
{ id:"t-ps-8", slot:"t-ps",
  fa:"هر چند وقت یک بار به پدر و مادرت سر می‌زنی؟",
  en:"How often do you visit your parents?",
  why:["پرسیدن از بسامد عادت: <en>How often</en> + حال ساده.",
       "«سر زدن به» = <en>visit</en> یا <en>go and see</en>؛ <en>visit</en> مفعول مستقیم می‌گیرد، بدون <x>to</x>."],
  misses:[
    { en:"How often are you visiting your parents?", why:"استمراری برای عادت نمی‌آید؛ شبیه پرسیدن از برنامهٔ این روزهاست." },
    { en:"How much do you visit to your parents?", why:"بسامد با <en>How often</en>، و <en>visit</en> بدون <en>to</en>." }
  ]},
{ id:"t-ps-9", slot:"t-ps",
  fa:"این کت‌وشلوار خیلی بهت می‌آید.",
  en:"This suit really suits you.",
  why:["«آمدن به کسی» (برازنده بودن) یک حالت است، نه کُنش. فعل‌های حالت (<en>suit, fit, belong, know, own</en>) حتی برای همین لحظه حال ساده می‌گیرند.",
       "<en>suit</en> هم اسم است (کت‌وشلوار) هم فعل (برازنده بودن)."],
  misses:[
    { en:"This suit is really suiting you.", why:"فعل حالت استمراری نمی‌گیرد." },
    { en:"This suit really comes to you.", why:"ترجمهٔ «بهت می‌آید»؛ در انگلیسی <en>suits you</en> یا <en>looks good on you</en>." }
  ],
  alt:"<en>This suit looks great on you.</en>"},
{ id:"t-ps-10", slot:"t-ps",
  fa:"بچه‌ها معمولاً ساعت چهار از مدرسه برمی‌گردند، ولی امروز دیرتر می‌آیند.",
  en:"The kids usually get back from school at four, but today they're coming later.",
  why:["نیمهٔ اول عادت است («معمولاً»): حال ساده. نیمهٔ دوم یک استثنای امروزی است که برنامه‌اش ریخته شده: حال استمراری.",
       "فارسی هر دو را با یک شکل (برمی‌گردند / می‌آیند) گفته؛ انگلیسی عادت را از برنامهٔ امروز جدا می‌کند."],
  misses:[
    { en:"The kids are usually getting back from school at four.", why:"<en>usually</en> با استمراری ناجور است؛ عادت حال ساده می‌خواهد." },
    { en:"The kids usually get back from school at four, but today they come later.", why:"حال ساده برای امروز یعنی قاعده؛ استثنای امروز استمراری می‌خواهد." }
  ]},

/* ── حال استمراری ──────────────────────── */
{ id:"t-pc-6", slot:"t-pc",
  fa:"به چی می‌خندی؟",
  en:"What are you laughing at?",
  why:["کاری که همین حالا جلوی چشم در جریان است: حال استمراری.",
       "«خندیدن به» = <en>laugh at</en>، و در سؤال حرف اضافه آخر جمله می‌ماند."],
  misses:[
    { en:"What do you laugh at?", why:"یعنی معمولاً به چه چیزهایی می‌خندی؟ — سؤال دربارهٔ عادت." },
    { en:"Why are you laughing to?", why:"<en>laugh</en> با <en>at</en> می‌آید، و «به چی» = <en>What … at</en>." }
  ]},
{ id:"t-pc-7", slot:"t-pc",
  fa:"این ماه دارم پول جمع می‌کنم که لپ‌تاپ بخرم.",
  en:"I'm saving up for a new laptop this month.",
  why:["پروژهٔ موقتِ «این ماه»: حال استمراری.",
       "«پول جمع کردن» = <en>save (up)</en>. <x>collect money</x> یعنی از دیگران پول جمع کردن (مثلاً برای خیریه)."],
  misses:[
    { en:"I save money for a laptop this month.", why:"حال ساده برای کار موقت در جریان مناسب نیست." },
    { en:"I'm collecting money to buy a laptop this month.", why:"<en>collect money</en> یعنی از مردم پول می‌گیری." }
  ],
  alt:"<en>I'm saving up to buy a laptop this month.</en>"},
{ id:"t-pc-8", slot:"t-pc",
  fa:"بچه‌ام دارد سریع قد می‌کشد؛ هر ماه باید کفش نو بخرم.",
  en:"My kid is growing so fast — I have to buy new shoes every month.",
  why:["تغییری که در این دوره در جریان است: حال استمراری. «هر ماه باید» عادت است: حال ساده.",
       "«قد کشیدن» = <en>grow</en>."],
  misses:[
    { en:"My kid grows so fast.", why:"قابل فهم است ولی شبیه واقعیت کلی است؛ روندِ این روزها را استمراری می‌رساند." },
    { en:"My kid is pulling height so fast.", why:"ترجمهٔ «قد کشیدن» — در انگلیسی فقط <en>grow</en>." }
  ]},
{ id:"t-pc-9", slot:"t-pc",
  fa:"تو همیشه وسط حرفم می‌پری!",
  en:"You're always interrupting me!",
  why:["<en>always</en> + استمراری = گلایه از عادتی آزاردهنده. حال ساده (<en>You always interrupt me</en>) فقط گزارش است، بدون آن رنگ عصبانیت.",
       "«وسط حرف کسی پریدن» = <en>interrupt someone</en>."],
  misses:[
    { en:"You always interrupt me!", why:"دستوری درست است، ولی گلایه ضعیف‌تر؛ در انگلیسی رنگ عصبانیت را استمراری می‌دهد." },
    { en:"You're always jumping in the middle of my talk!", why:"ترجمهٔ کلمه‌به‌کلمه؛ <en>interrupt</en>." }
  ]},
{ id:"t-pc-10", slot:"t-pc",
  fa:"شنبه ساعت ده می‌روم دندانپزشکی؛ وقت گرفته‌ام.",
  en:"I'm seeing the dentist at ten on Saturday — I've made an appointment.",
  why:["قرار شخصیِ ثابت‌شده در آینده: حال استمراری. «وقت گرفته‌ام» همان نشانهٔ قرار است.",
       "«رفتن دندانپزشکی» = <en>see the dentist</en> یا <en>go to the dentist('s)</en>."],
  misses:[
    { en:"I go to the dentist at ten on Saturday.", why:"حال ساده برای قرار شخصی نیست؛ شبیه عادت هفتگی است." },
    { en:"I will go to the dentist at ten on Saturday.", why:"<en>will</en> حس تصمیم تازه دارد؛ اینجا قرار از قبل گذاشته شده." }
  ]},

/* ── حال کامل ──────────────────────────── */
{ id:"t-pp-6", slot:"t-pp",
  fa:"همین الان غذا خوردم؛ سیرم.",
  en:"I've just eaten, so I'm full.",
  why:["«همین الان» + نتیجهٔ فعلی (سیرم): حال کامل با <en>just</en>. فارسی «خوردم» (گذشتهٔ ساده) گفته؛ تله همین‌جاست.",
       "<en>just</en> بین <en>have</en> و فعل اصلی."],
  misses:[
    { en:"I just ate, so I'm full.", why:"در آمریکایی محاوره رایج است؛ در بریتانیایی و نوشتار حال کامل." },
    { en:"I have just eat, so I'm full.", why:"قسمت سوم: <en>eaten</en>." }
  ]},
{ id:"t-pp-7", slot:"t-pp",
  fa:"این فیلم را سه بار دیده‌ام.",
  en:"I've seen this film three times.",
  why:["تعداد دفعات تا الان (و ممکن است باز ببینم): حال کامل.",
       "<en>I saw it three times</en> یعنی در یک دورهٔ بسته (مثلاً وقتی بچه بودم)."],
  misses:[
    { en:"I saw this film three times.", why:"دورهٔ بسته را فرض می‌کند؛ شمارشِ تا الان حال کامل می‌خواهد." },
    { en:"I've seen this film for three times.", why:"دفعات بدون <en>for</en>: <en>three times</en>." }
  ]},
{ id:"t-pp-8", slot:"t-pp",
  fa:"قیمت نان از پارسال دو برابر شده.",
  en:"The price of bread has doubled since last year.",
  why:["تغییر از نقطه‌ای در گذشته تا حالا: حال کامل با <en>since</en>.",
       "<en>double</en> خودش فعل لازم است (دو برابر شدن) و مجهول لازم ندارد."],
  misses:[
    { en:"The price of bread doubled since last year.", why:"<en>since</en> گذشتهٔ ساده را نمی‌پذیرد." },
    { en:"The price of bread has been doubled since last year.", why:"مجهول یعنی کسی عمداً دو برابرش کرده — ممکن است، ولی فارسی چنین نگفته." }
  ]},
{ id:"t-pp-9", slot:"t-pp",
  fa:"هیچ‌وقت در عمرم این‌قدر خسته نبوده‌ام.",
  en:"I've never been this tired in my life.",
  why:["تجربه در کل زندگی تا الان: حال کامل با <en>never</en>.",
       "«این‌قدر» + صفت = <en>this / so + adjective</en>."],
  misses:[
    { en:"I was never so tired in my life.", why:"زندگی را بسته فرض می‌کند؛ برای «تا حالا» حال کامل." },
    { en:"I have never be this tired in my life.", why:"قسمت سوم <en>be</en>: <en>been</en>." }
  ]},
{ id:"t-pp-10", slot:"t-pp",
  fa:"بالاخره گواهینامه‌ام را گرفته‌ام!",
  en:"I've finally got my driving licence!",
  why:["خبرِ تازه با نتیجهٔ فعلی (الان گواهینامه دارم): حال کامل. <en>finally</en> بعد از <en>have</en>.",
       "«گواهینامه» = <en>driving licence</en> (آمریکایی: <en>driver's license</en>)؛ <x>certificate</x> مدرک تحصیلی است."],
  misses:[
    { en:"I've finally taken my certificate!", why:"<en>certificate</en> گواهینامهٔ رانندگی نیست، و «گرفتن» اینجا <en>get</en> است." },
    { en:"I finally got my driving licence!", why:"در آمریکایی کاملاً طبیعی است؛ در بریتانیایی خبرِ تازه با حال کامل." }
  ]},

/* ── حال کامل استمراری ─────────────────── */
{ id:"t-ppc-6", slot:"t-ppc",
  fa:"از صبح دارد برف می‌آید.",
  en:"It's been snowing since this morning.",
  why:["از نقطه‌ای در گذشته تا الان، و هنوز ادامه دارد: حال کامل استمراری با <en>since</en>.",
       "<en>It's</en> اینجا = <en>It has</en>."],
  misses:[
    { en:"It's snowing since this morning.", why:"حال استمراری + <en>since</en>؛ ترجمهٔ مستقیم «دارد می‌آید»." },
    { en:"It snows since the morning.", why:"حال ساده هم عادت است و هم با <en>since</en> نمی‌آید." }
  ]},
{ id:"t-ppc-7", slot:"t-ppc",
  fa:"سه ماه است دنبال خانه می‌گردیم.",
  en:"We've been looking for a flat for three months.",
  why:["جست‌وجویی که سه ماه است ادامه دارد: حال کامل استمراری با <en>for</en>.",
       "«گشتن دنبال» = <en>look for</en> (یا <en>search for</en>، با <en>for</en>)."],
  misses:[
    { en:"We're looking for a flat for three months.", why:"فعل حال با بازه — تلهٔ همیشگی." },
    { en:"We've been searching a flat for three months.", why:"<en>search a flat</en> یعنی خود آپارتمان را بگردی؛ <en>search for</en>." }
  ]},
{ id:"t-ppc-8", slot:"t-ppc",
  fa:"چرا نفس‌نفس می‌زنی؟ دویده‌ای؟",
  en:"Why are you out of breath? Have you been running?",
  why:["فعالیت اخیر با ردِ فعلی (نفس‌نفس زدن): حال کامل استمراری.",
       "«نفس‌نفس زدن» = <en>be out of breath</en>."],
  misses:[
    { en:"Why are you out of breath? Did you run?", why:"رابطهٔ «ردِ فعلی ← فعالیت اخیر» گم می‌شود." },
    { en:"Why do you breathe hard? Have you run?", why:"حال ساده برای همین لحظه، و <en>have you run</en> حس تجربه می‌دهد." }
  ]},
{ id:"t-ppc-9", slot:"t-ppc",
  fa:"مدتی است که بد می‌خوابم.",
  en:"I haven't been sleeping well lately.",
  why:["الگویی که مدتی است ادامه دارد: حال کامل استمراری. <en>lately / recently</en> جای «مدتی است».",
       "انگلیسی ترجیح می‌دهد منفی کند: <en>haven't been sleeping well</en> به جای <en>have been sleeping badly</en>."],
  misses:[
    { en:"I'm sleeping badly for a while.", why:"حال استمراری با بازه." },
    { en:"I don't sleep well since a while.", why:"حال ساده با <en>since</en>، و <en>since</en> نقطهٔ شروع می‌خواهد." }
  ],
  alt:"<en>I've been sleeping badly recently.</en>"},
{ id:"t-ppc-10", slot:"t-ppc",
  fa:"از وقتی به این محله آمده‌ایم، با دوچرخه سر کار می‌روم.",
  en:"I've been cycling to work since we moved to this neighbourhood.",
  why:["عادتی که از یک نقطه شروع شده و ادامه دارد: حال کامل استمراری.",
       "بعد از <en>since</en> نقطهٔ شروع با گذشتهٔ ساده: <en>since we moved</en> (نه <x>since we have moved</x>)."],
  misses:[
    { en:"I go to work by bike since we moved to this neighbourhood.", why:"حال ساده + <en>since</en>." },
    { en:"I've been cycling to work since we have moved here.", why:"بعد از <en>since</en> رویداد نقطه‌ای با گذشتهٔ ساده." }
  ]},

/* ── گذشتهٔ ساده ───────────────────────── */
{ id:"t-pas-6", slot:"t-pas",
  fa:"هفتهٔ پیش گوشی از دستم افتاد و صفحه‌اش ترک خورد.",
  en:"I dropped my phone last week and the screen cracked.",
  why:["«هفتهٔ پیش»: گذشتهٔ ساده، دو رویداد پشت سر هم.",
       "«از دستم افتاد» در انگلیسی با فاعل شخص طبیعی است: <en>I dropped it</en>. <en>crack</en> لازم است: <en>the screen cracked</en>."],
  misses:[
    { en:"My phone fell from my hand last week and the screen has cracked.", why:"<en>dropped</en> طبیعی‌تر است، و حال کامل با <en>last week</en> نمی‌آید." },
    { en:"I have dropped my phone last week.", why:"حال کامل با زمان گذشتهٔ مشخص." }
  ]},
{ id:"t-pas-7", slot:"t-pas",
  fa:"چرا دیروز سر کار نیامدی؟",
  en:"Why didn't you come to work yesterday?",
  why:["«دیروز»: گذشتهٔ ساده. سؤال منفی: <en>Why didn't you + V?</en>",
       "«سر کار» = <en>to work</en> (بدون <en>the</en>)."],
  misses:[
    { en:"Why you didn't come to work yesterday?", why:"ترتیب سؤال: <en>didn't</en> قبل از فاعل." },
    { en:"Why haven't you come to work yesterday?", why:"حال کامل با <en>yesterday</en>." }
  ]},
{ id:"t-pas-8", slot:"t-pas",
  fa:"سه سال پیش به این شهر آمدیم.",
  en:"We moved to this city three years ago.",
  why:["<en>ago</en> نقطه‌ای مشخص در گذشته است: همیشه گذشتهٔ ساده.",
       "«آمدن» برای جابه‌جا شدن محل زندگی = <en>move</en>. «سه سال پیش» = <en>three years ago</en> (بعد از عدد)، نه <x>before three years</x>."],
  misses:[
    { en:"We have moved to this city three years ago.", why:"<en>ago</en> و حال کامل هرگز با هم نمی‌آیند." },
    { en:"We came to this city before three years.", why:"ترجمهٔ «پیش»؛ <en>ago</en> و بعد از بازه." }
  ]},
{ id:"t-pas-9", slot:"t-pas",
  fa:"بچه که بودم، هر تابستان پیش مادربزرگم می‌رفتم.",
  en:"When I was a kid, I spent every summer at my grandmother's.",
  why:["عادتِ گذشته: گذشتهٔ ساده (یا <en>used to / would</en>). «می‌رفتم» فارسی استمراری است ولی معنایش عادت است، نه کار در حال انجام.",
       "«پیش مادربزرگم» (خانه‌اش) = <en>at my grandmother's</en>."],
  misses:[
    { en:"When I was a kid, I was going to my grandmother every summer.", why:"گذشتهٔ استمراری برای عادت تکراری نمی‌آید." },
    { en:"When I was kid, I went to my grandmother's every summers.", why:"<en>a kid</en>، و <en>every</en> با اسم مفرد." }
  ],
  alt:"<en>…I used to spend / I'd spend every summer at my grandmother's.</en>"},
{ id:"t-pas-10", slot:"t-pas",
  fa:"دیروز تا دیروقت کار کردم و بعد مستقیم رفتم خانه.",
  en:"I worked late yesterday and then went straight home.",
  why:["رویدادهای تمام‌شده، پشت سر هم: گذشتهٔ ساده.",
       "<en>home</en> بعد از <en>go</en> حرف اضافه نمی‌گیرد: <en>went home</en>. «تا دیروقت» = <en>late</en>."],
  misses:[
    { en:"I worked until late yesterday and then went directly to home.", why:"<en>to home</en> غلط است؛ <en>home</en> خودش قید مقصد است." },
    { en:"I have worked late yesterday and then went straight home.", why:"حال کامل با <en>yesterday</en>." }
  ]},

/* ── گذشتهٔ استمراری ───────────────────── */
{ id:"t-pac-6", slot:"t-pac",
  fa:"داشتم آشپزی می‌کردم که دستم را بریدم.",
  en:"I cut my finger while I was cooking.",
  why:["کار طولانی (آشپزی) + رویداد کوتاه وسطش (بریدن): استمراری + ساده. <en>while</en> قبل از کار طولانی، <en>when</en> قبل از رویداد کوتاه.",
       "<en>cut</en> در گذشته همان <en>cut</en> است."],
  misses:[
    { en:"I cooked when I cut my finger.", why:"یعنی بریدن دست باعث شد آشپزی کنم!" },
    { en:"I was cutting my finger while I was cooking.", why:"یعنی بریدن هم کاری ممتد بوده — عجیب." }
  ],
  alt:"<en>I was cooking when I cut my finger.</en>"},
{ id:"t-pac-7", slot:"t-pac",
  fa:"کل عصر دیروز باران می‌آمد، برای همین در خانه ماندیم.",
  en:"It was raining all afternoon yesterday, so we stayed in.",
  why:["پس‌زمینهٔ طولانی که توضیح می‌دهد چرا کاری کردیم: گذشتهٔ استمراری.",
       "«در خانه ماندن» = <en>stay in</en> یا <en>stay at home</en>."],
  misses:[
    { en:"It rained all afternoon yesterday, so we stayed in.", why:"این هم درست است؛ استمراری فقط تصویرِ «در جریان بودن» را پررنگ‌تر می‌کند." },
    { en:"It was raining all afternoon yesterday, so we were staying in home.", why:"<en>stay in</en> یا <en>stay at home</en>، و ماندن اینجا نتیجه است نه پس‌زمینه." }
  ]},
{ id:"t-pac-8", slot:"t-pac",
  fa:"داشتیم فیلم می‌دیدیم که برق رفت.",
  en:"We were watching a film when the power went off.",
  why:["پس‌زمینه (فیلم) + رویداد ناگهانی (برق رفت): الگوی کلاسیک.",
       "«برق رفتن» = <en>the power went off / out</en>، یا <en>there was a power cut</en>."],
  misses:[
    { en:"We watched a film when the power went off.", why:"یعنی رفتن برق باعث شد فیلم ببینیم." },
    { en:"We were watching a film when the electricity was going.", why:"رویداد ناگهانی گذشتهٔ ساده می‌خواهد." }
  ]},
{ id:"t-pac-9", slot:"t-pac",
  fa:"دیروز دیدمت! داشتی با یک نفر توی کافه حرف می‌زدی.",
  en:"I saw you yesterday! You were talking to someone in a café.",
  why:["«دیدم» رویداد است؛ کاری که تو در آن لحظه مشغولش بودی: گذشتهٔ استمراری.",
       "<en>talk to someone</en> طبیعی‌ترین شکل است."],
  misses:[
    { en:"I saw you yesterday! You talked with someone in a café.", why:"گذشتهٔ ساده کل گفت‌وگو را گزارش می‌کند، نه لحظه‌ای که دیدمت." },
    { en:"I have seen you yesterday!", why:"حال کامل با <en>yesterday</en>." }
  ]},
{ id:"t-pac-10", slot:"t-pac",
  fa:"ساعت هفت که بیدار شدم، همه هنوز خواب بودند.",
  en:"When I woke up at seven, everyone was still sleeping.",
  why:["حالتی در جریان در لحظهٔ بیدار شدن من: گذشتهٔ استمراری (<en>was still sleeping</en>) یا صفت (<en>was still asleep</en>).",
       "<en>everyone</en> مفرد است: <en>was</en>."],
  misses:[
    { en:"When I woke up at seven, everyone still slept.", why:"گذشتهٔ ساده این معنا را نمی‌رساند." },
    { en:"When I woke up at seven, everyone were still sleep.", why:"<en>everyone</en> فعل مفرد می‌گیرد، و <en>sleep</en> صفت نیست: <en>asleep</en>." }
  ],
  alt:"<en>…everyone was still asleep.</en>"},

/* ── گذشتهٔ کامل ───────────────────────── */
{ id:"t-pap-6", slot:"t-pap",
  fa:"وقتی به سینما رسیدیم، فیلم شروع شده بود.",
  en:"When we got to the cinema, the film had already started.",
  why:["شروع فیلم قبل از رسیدن ما: گذشتهٔ کامل.",
       "<en>The film started when we got there</en> یعنی درست همان لحظه شروع شد — یعنی به موقع رسیدیم!"],
  misses:[
    { en:"When we got to the cinema, the film started.", why:"هم‌زمانی؛ معنا برعکس می‌شود." },
    { en:"When we got to the cinema, the film has already started.", why:"حال کامل در داستان گذشته." }
  ]},
{ id:"t-pap-7", slot:"t-pap",
  fa:"قبلاً آن رستوران رفته بودم، برای همین راه را بلد بودم.",
  en:"I'd been to that restaurant before, so I knew the way.",
  why:["تجربه‌ای قبل از یک نقطه در گذشته: گذشتهٔ کامل.",
       "<en>been to</en> = رفته و برگشته (تجربه). <en>gone to</en> یعنی رفته و هنوز آنجاست."],
  misses:[
    { en:"I'd gone to that restaurant before, so I knew the way.", why:"<en>gone</en> برای تجربه نیست؛ <en>been</en>." },
    { en:"I have been to that restaurant before, so I knew the way.", why:"نقطهٔ مرجع (<en>knew</en>) گذشته است؛ یک پله عقب‌تر." }
  ]},
{ id:"t-pap-8", slot:"t-pap",
  fa:"تازه ناهار را تمام کرده بودیم که مهمان‌ها رسیدند.",
  en:"We had just finished lunch when the guests turned up.",
  why:["کاری که کمی قبل از یک رویداد گذشته تمام شده بود: <en>had just + V3</en>.",
       "«سر رسیدن» (بی‌خبر) = <en>turn up</en>."],
  misses:[
    { en:"We just finished lunch when the guests turned up.", why:"ترتیب مبهم می‌شود؛ <en>just</en> با گذشتهٔ کامل روشن است." },
    { en:"We had just finish lunch when the guests turned up.", why:"قسمت سوم: <en>finished</en>." }
  ]},
{ id:"t-pap-9", slot:"t-pap",
  fa:"وقتی برگشتم، یکی ظرف‌ها را شسته بود.",
  en:"When I got back, someone had washed the dishes.",
  why:["شستن قبل از برگشتن من: گذشتهٔ کامل.",
       "<en>someone washed the dishes</en> یعنی بعد از رسیدن من شست."],
  misses:[
    { en:"When I got back, someone washed the dishes.", why:"ترتیب برعکس: اول من رسیدم، بعد کسی شست." },
    { en:"When I got back, someone has washed the dishes.", why:"حال کامل در داستان گذشته." }
  ]},
{ id:"t-pap-10", slot:"t-pap",
  fa:"مطمئن نبودم در را قفل کرده‌ام یا نه.",
  en:"I wasn't sure whether I had locked the door.",
  why:["فکری در گذشته دربارهٔ کاری قبل‌تر: گذشتهٔ کامل. فارسی باز ماضی نقلی (کرده‌ام) گفته، چون از دید همان لحظه نقل می‌کند.",
       "«… یا نه» = <en>whether</en> (یا <en>whether or not</en>)."],
  misses:[
    { en:"I wasn't sure whether I have locked the door.", why:"ترجمهٔ مستقیم «کرده‌ام»؛ زمان عقب نرفته." },
    { en:"I wasn't sure if I locked the door or not.", why:"در گفتار شنیده می‌شود، ولی ترتیب زمانی را مبهم می‌گذارد." }
  ]},

/* ── گذشتهٔ کامل استمراری ──────────────── */
{ id:"t-papc-6", slot:"t-papc",
  fa:"وقتی رسیدم، بچه‌ها یک ساعت بود که بازی می‌کردند.",
  en:"When I arrived, the kids had been playing for an hour.",
  why:["یک ساعت بازی تا لحظهٔ رسیدن من: گذشتهٔ کامل استمراری.",
       "«یک ساعت بود که» = <en>had been … for an hour</en>."],
  misses:[
    { en:"When I arrived, the kids were playing for an hour.", why:"گذشتهٔ استمراری با طولِ منتهی به یک نقطه نمی‌آید." },
    { en:"When I arrived, the kids have been playing for an hour.", why:"حال کامل استمراری به الان وصل است." }
  ]},
{ id:"t-papc-7", slot:"t-papc",
  fa:"زمین فوتبال گِلی بود، چون تمام هفته باران آمده بود.",
  en:"The football pitch was muddy because it had been raining all week.",
  why:["فعالیت ممتد قبل از یک نقطهٔ گذشته، با ردی در آن نقطه (گِل): گذشتهٔ کامل استمراری.",
       "زمین فوتبال = <en>pitch</en> (آمریکایی: <en>field</en>)."],
  misses:[
    { en:"The football pitch was muddy because it has been raining all week.", why:"یک پله عقب نرفته." },
    { en:"The football pitch was muddy because it was raining all week.", why:"رابطهٔ «قبل از آن نقطه» گم می‌شود." }
  ]},
{ id:"t-papc-8", slot:"t-papc",
  fa:"قبل از اینکه این خانه را بخریم، ده سال بود که اجاره‌نشین بودیم.",
  en:"Before we bought this house, we had been renting for ten years.",
  why:["ده سال اجاره تا لحظهٔ خرید (نقطه‌ای در گذشته): گذشتهٔ کامل استمراری.",
       "«اجاره‌نشین بودن» = <en>rent</en> (فعل) یا <en>be tenants</en>."],
  misses:[
    { en:"Before we bought this house, we were renting for ten years.", why:"استمراری ساده بازه را تا آن نقطه نمی‌رساند." },
    { en:"Before we bought this house, we had been tenant for ten years.", why:"<en>tenant</en> قابل‌شمارش است: <en>tenants</en>؛ و فعل <en>renting</en> طبیعی‌تر است." }
  ]},
{ id:"t-papc-9", slot:"t-papc",
  fa:"صدای مادرم گرفته بود، چون تمام شب در عروسی آواز خوانده بود.",
  en:"My mum's voice was hoarse because she'd been singing all night at the wedding.",
  why:["فعالیت طولانی قبل از یک نقطهٔ گذشته، با ردی در آن نقطه (صدای گرفته): گذشتهٔ کامل استمراری.",
       "«صدا گرفتن» = <en>be hoarse</en> یا <en>lose your voice</en>."],
  misses:[
    { en:"My mum's voice was hoarse because she was singing all night.", why:"هم‌زمانی به جای ترتیب." },
    { en:"My mum's voice was taken because she'd been singing all night.", why:"ترجمهٔ «صدایش گرفته بود»؛ <en>hoarse</en>." }
  ]},
{ id:"t-papc-10", slot:"t-papc",
  fa:"مکانیک گفت ماشین مدت‌ها بود که روغن نشت می‌داد.",
  en:"The mechanic said the car had been leaking oil for a long time.",
  why:["نقل قول در گذشته از چیزی که تا آن موقع مدت‌ها ادامه داشت: گذشتهٔ کامل استمراری.",
       "«نشت دادن» = <en>leak</en>."],
  misses:[
    { en:"The mechanic said the car has been leaking oil for a long time.", why:"بعد از <en>said</en> زمان یک پله عقب می‌رود." },
    { en:"The mechanic said the car was leaking oil for a long time.", why:"بازه تا آن لحظه را نمی‌رساند." }
  ]},

/* ── آینده با will ─────────────────────── */
{ id:"t-fw-6", slot:"t-fw",
  fa:"فکر نکنم علی امشب بیاید؛ خیلی سرش شلوغ است.",
  en:"I don't think Ali will come tonight — he's really busy.",
  why:["پیش‌بینی بر اساس نظر: <en>will</en>. انگلیسی منفی را روی <en>think</en> می‌گذارد: <en>I don't think … will</en>، نه <en>I think … won't</en>.",
       "«سرش شلوغ است» = <en>he's busy</en>."],
  misses:[
    { en:"I think Ali won't come tonight.", why:"دستوری است ولی کمتر طبیعی؛ انگلیسی‌زبان‌ها منفی را جلو می‌آورند." },
    { en:"I don't think Ali comes tonight.", why:"حال ساده برای پیش‌بینی نیست." }
  ]},
{ id:"t-fw-7", slot:"t-fw",
  fa:"در را برایم باز می‌کنی؟ دست‌هایم پر است.",
  en:"Will you open the door for me? My hands are full.",
  why:["درخواست با <en>Will you…?</en> (یا مؤدبانه‌تر <en>Could you…?</en>).",
       "<en>Do you open…?</en> یعنی عادتاً در را باز می‌کنی؟"],
  misses:[
    { en:"Do you open the door for me?", why:"سؤال دربارهٔ عادت، نه درخواست." },
    { en:"Are you opening the door for me?", why:"یعنی داری بازش می‌کنی؟ — پرسیدن از کاری که در جریان است." }
  ],
  alt:"<en>Could you open the door for me?</en>"},
{ id:"t-fw-8", slot:"t-fw",
  fa:"خب، من پیتزا می‌خورم. تو چی؟",
  en:"OK, I'll have the pizza. What about you?",
  why:["تصمیم لحظه‌ای هنگام سفارش: <en>I'll have…</en>.",
       "در سفارش غذا «خوردن» = <en>have</en>."],
  misses:[
    { en:"OK, I eat pizza. What about you?", why:"یعنی عادتاً پیتزا می‌خورم." },
    { en:"OK, I'm going to take the pizza.", why:"<en>going to</en> یعنی از قبل تصمیم داشتم؛ و <en>take</en> برای سفارش غیرطبیعی است." }
  ]},
{ id:"t-fw-9", slot:"t-fw",
  fa:"قیمت‌ها احتمالاً تا سال دیگر باز بالا می‌رود.",
  en:"Prices will probably go up again by next year.",
  why:["پیش‌بینی با درجهٔ احتمال: <en>will probably</en>. <en>probably</en> بعد از <en>will</en> ولی قبل از <en>won't</en>: <en>probably won't</en>.",
       "«بالا رفتن» = <en>go up / rise</en>."],
  misses:[
    { en:"Prices probably go up again by next year.", why:"بدون <en>will</en> پیش‌بینی ساخته نمی‌شود." },
    { en:"Prices will go up probably again until next year.", why:"جای قید، و <en>until</en> به جای <en>by</en>." }
  ]},
{ id:"t-fw-10", slot:"t-fw",
  fa:"نگران نباش، به کسی نمی‌گویم.",
  en:"Don't worry — I won't tell anyone.",
  why:["قول: <en>won't</en>.",
       "<en>tell</en> شخص را مستقیم مفعول می‌گیرد؛ <en>say</en> نمی‌گیرد (<x>say anyone</x> غلط است). در جملهٔ منفی <en>anyone</en>."],
  misses:[
    { en:"Don't worry — I don't tell anyone.", why:"حال ساده قول نمی‌سازد؛ یعنی عادتم نیست به کسی بگویم." },
    { en:"Don't worry — I won't say anyone.", why:"<en>say</en> مفعول شخص نمی‌گیرد." }
  ]},

/* ── آینده با be going to ───────────────── */
{ id:"t-fg-6", slot:"t-fg",
  fa:"کی می‌خواهی به مادرت بگویی؟",
  en:"When are you going to tell your mum?",
  why:["پرسیدن از نیت و برنامه: <en>be going to</en>. «می‌خواهی» اینجا یعنی نیت، نه آرزو.",
       "<en>When do you want to tell…?</en> فقط از خواسته می‌پرسد."],
  misses:[
    { en:"When do you want to tell your mum?", why:"دربارهٔ میل است، نه برنامه." },
    { en:"When you are going to tell your mum?", why:"ترتیب سؤال: <en>are</en> قبل از فاعل." }
  ]},
{ id:"t-fg-7", slot:"t-fg",
  fa:"امسال بالاخره سیگار را ترک می‌کنم؛ تصمیمم جدی است.",
  en:"I'm finally going to give up smoking this year — I'm serious.",
  why:["نیت از قبل: <en>be going to</en>. «ترک کردن» عادت = <en>give up / quit</en> + <en>-ing</en>.",
       "<en>smoking</en> (نه <x>cigarette</x>) چون عادت را ترک می‌کنی."],
  misses:[
    { en:"I'm going to quit smoke this year.", why:"بعد از <en>quit</en> اسم‌مصدر: <en>smoking</en>." },
    { en:"I will leave cigarette this year.", why:"<en>leave</en> برای عادت نیست، و «سیگار» اینجا عادت است." }
  ]},
{ id:"t-fg-8", slot:"t-fg",
  fa:"ببین بچه‌ها چقدر خسته‌اند؛ الان خوابشان می‌برد.",
  en:"Look how tired the kids are — they're going to fall asleep any minute.",
  why:["پیش‌بینی بر اساس نشانه‌ای جلوی چشم: <en>be going to</en>. «الان» = <en>any minute</en>.",
       "«خواب کسی را بردن» = <en>fall asleep</en>."],
  misses:[
    { en:"Look how tired the kids are — they will sleep now.", why:"<en>sleep</en> خواب بودن است، نه به خواب رفتن؛ و شواهد <en>going to</en> می‌خواهد." },
    { en:"Look how tired the kids are — they fall asleep now.", why:"حال ساده برای پیش‌بینی نمی‌آید." }
  ]},
{ id:"t-fg-9", slot:"t-fg",
  fa:"امسال قرار نیست سفر برویم؛ پولش را نداریم.",
  en:"We aren't going to go away this year — we can't afford it.",
  why:["برنامهٔ منفی: <en>aren't going to</en>. <en>going to go</en> (دو بار <en>go</en>) کاملاً درست است.",
       "«پولش را نداشتن» = <en>can't afford it</en>."],
  misses:[
    { en:"We don't travel this year — we don't have its money.", why:"حال ساده برای برنامه، و «پولش» ترجمهٔ کلمه‌به‌کلمه." },
    { en:"We won't go away this year.", why:"درست است، ولی لحن تصمیم آنی یا امتناع دارد؛ برنامهٔ از قبل <en>going to</en> است." }
  ]},
{ id:"t-fg-10", slot:"t-fg",
  fa:"این دیوار دارد ترک برمی‌دارد؛ آخرش فرو می‌ریزد.",
  en:"This wall is cracking — it's going to collapse eventually.",
  why:["شواهد حاضر (ترک) → پیش‌بینی: <en>be going to</en>.",
       "«آخرش» = <en>eventually</en> (نه <x>finally</x>، که یعنی بعد از انتظار طولانی و خوشایند)."],
  misses:[
    { en:"This wall is cracking — it will collapse finally.", why:"<en>finally</en> معنای «سرانجامِ منتظرمانده» دارد؛ <en>eventually</en>." },
    { en:"This wall is cracking — it collapses eventually.", why:"حال ساده برای پیش‌بینی نیست." }
  ]},

/* ── آیندهٔ استمراری ───────────────────── */
{ id:"t-fc-6", slot:"t-fc",
  fa:"فردا ساعت ده جلسه‌ام، پس تلفن را جواب نمی‌دهم.",
  en:"I'll be in a meeting at ten tomorrow, so I won't be answering my phone.",
  why:["«جواب نمی‌دهم» اینجا تصمیم یا امتناع نیست؛ نتیجهٔ طبیعیِ این است که آن موقع مشغولم: <en>won't be answering</en>.",
       "<en>I won't answer</en> لحن امتناع دارد: «جواب نمی‌دهم، نمی‌خواهم!»"],
  misses:[
    { en:"I'm in a meeting at ten tomorrow, so I won't answer my phone.", why:"بخش اول درست است؛ ولی <en>won't answer</en> شبیه لجبازی است." },
    { en:"I'll be in a meeting at ten tomorrow, so I don't answer my phone.", why:"حال ساده برای آینده." }
  ]},
{ id:"t-fc-7", slot:"t-fc",
  fa:"سه‌شنبه ساعت سه منتظرت هستم.",
  en:"I'll be waiting for you at three on Tuesday.",
  why:["در آن لحظهٔ آینده منتظر ماندن در جریان خواهد بود: آیندهٔ استمراری.",
       "ترتیب زمان در انگلیسی: ساعت، بعد روز: <en>at three on Tuesday</en>."],
  misses:[
    { en:"I wait for you at three on Tuesday.", why:"حال ساده برای آینده نیست." },
    { en:"I'm waiting you at three on Tuesday.", why:"<en>wait for</en>، و استمراری ساده حس «آن موقع در جریان است» را نمی‌دهد." }
  ]},
{ id:"t-fc-8", slot:"t-fc",
  fa:"هفتهٔ بعد همین موقع، کنار دریا دراز کشیده‌ایم.",
  en:"This time next week, we'll be lying on a beach.",
  why:["«هفتهٔ بعد همین موقع» + کار در جریان: آیندهٔ استمراری.",
       "«دراز کشیده بودن» حالت در جریان است، نه کار تمام‌شده؛ فارسی با ماضی نقلی (کشیده‌ایم) گمراه می‌کند. <en>lie</en> → <en>lying</en>."],
  misses:[
    { en:"This time next week, we'll have lain on a beach.", why:"آیندهٔ کامل یعنی تا آن موقع کار تمام شده — ترجمهٔ «کشیده‌ایم»." },
    { en:"This time next week, we'll lie on a beach.", why:"یعنی آن موقع دراز می‌کشیم (شروع کار)." }
  ]},
{ id:"t-fc-9", slot:"t-fc",
  fa:"امشب برای شام خانه می‌آیی؟",
  en:"Will you be coming home for dinner tonight?",
  why:["پرسیدن مؤدبانه از برنامهٔ کسی: <en>Will you be + -ing?</en>",
       "<en>home</en> بعد از فعل حرکتی حرف اضافه نمی‌گیرد."],
  misses:[
    { en:"Will you come home for dinner tonight?", why:"شبیه درخواست است: «بیا خانه!»" },
    { en:"Do you come to home for dinner tonight?", why:"حال ساده، و <x>to home</x>." }
  ],
  alt:"<en>Are you coming home for dinner tonight?</en>"},
{ id:"t-fc-10", slot:"t-fc",
  fa:"با این روند، ده سال دیگر همه ماشین برقی می‌رانند.",
  en:"At this rate, in ten years' time everyone will be driving electric cars.",
  why:["وضعیتی که در نقطه‌ای از آینده در جریان خواهد بود: آیندهٔ استمراری.",
       "«ده سال دیگر» = <en>in ten years' time</en> یا <en>in ten years</en>. «با این روند» = <en>at this rate</en>."],
  misses:[
    { en:"At this rate, until ten years everyone drives electric cars.", why:"<en>until</en> معنای «تا آن موقع» دارد؛ و حال ساده برای آینده." },
    { en:"With this trend, after ten years everyone will drive electric cars.", why:"<en>after ten years</en> برای آینده از الان غیرطبیعی است؛ <en>in ten years</en>." }
  ]},

/* ── آیندهٔ کامل ───────────────────────── */
{ id:"t-fp-6", slot:"t-fp",
  fa:"تا بچه‌ها از مدرسه برگردند، خرید را کرده‌ام.",
  en:"By the time the kids get back from school, I'll have done the shopping.",
  why:["کاری که تا یک نقطهٔ آینده تمام شده: <en>will have + V3</en>. در بند <en>by the time</en> حال ساده.",
       "«خرید کردن» (روزمره) = <en>do the shopping</en>."],
  misses:[
    { en:"By the time the kids get back, I've done the shopping.", why:"ترجمهٔ «کرده‌ام»؛ آینده گم شده." },
    { en:"By the time the kids will get back, I'll have made the shopping.", why:"<en>will</en> در بند زمانی، و <en>do</en> نه <x>make</x>." }
  ]},
{ id:"t-fp-7", slot:"t-fp",
  fa:"با این وضع، تا آخر هفته کل پس‌اندازمان را خرج کرده‌ایم.",
  en:"At this rate, we'll have spent all our savings by the end of the week.",
  why:["تمام شدن تا یک ضرب‌الاجل: آیندهٔ کامل با <en>by</en>.",
       "<en>savings</en> (پس‌انداز) جمع است."],
  misses:[
    { en:"At this rate, we'll spend all our savings until the end of the week.", why:"<en>until</en> نه، <en>by</en>؛ و <en>will spend</en> زمان انجام را می‌گوید، نه تمام شدن." },
    { en:"At this rate, we have spent all our saving by the end of the week.", why:"حال کامل برای آینده، و <en>savings</en> با <en>s</en>." }
  ]},
{ id:"t-fp-8", slot:"t-fp",
  fa:"ساعت نه که برسی، فیلم تمام شده.",
  en:"By the time you get here at nine, the film will have finished.",
  why:["تمام شدن قبل از یک نقطهٔ آینده: آیندهٔ کامل.",
       "<en>the film will finish</en> یعنی درست موقع رسیدن تو تمام می‌شود."],
  misses:[
    { en:"When you arrive at nine, the film will finish.", why:"هم‌زمانی، نه «قبلش تمام شده»." },
    { en:"By the time you get here at nine, the film has finished.", why:"حال کامل برای آینده." }
  ]},
{ id:"t-fp-9", slot:"t-fp",
  fa:"تا پنجاه‌سالگی، وام خانه را کامل داده‌ام.",
  en:"I'll have paid off my mortgage by the time I'm fifty.",
  why:["آیندهٔ کامل با ضرب‌الاجل. در بند زمانی حال ساده: <en>by the time I'm fifty</en>.",
       "«وام خانه» = <en>mortgage</en>؛ «کامل پرداختن» = <en>pay off</en>."],
  misses:[
    { en:"I'll have paid off my mortgage by the time I will be fifty.", why:"<en>will</en> در بند زمانی." },
    { en:"I'll pay my house loan until I'm fifty.", why:"یعنی تا پنجاه‌سالگی مدام قسط می‌دهم — معنای دیگر." }
  ]},
{ id:"t-fp-10", slot:"t-fp",
  fa:"فکر می‌کنی تا فردا جواب داده باشند؟",
  en:"Do you think they'll have replied by tomorrow?",
  why:["التزامیِ کامل فارسی (داده باشند) در انگلیسی آیندهٔ کامل است.",
       "ضرب‌الاجل با <en>by</en>."],
  misses:[
    { en:"Do you think they replied until tomorrow?", why:"گذشتهٔ ساده، و <en>until</en>." },
    { en:"Do you think they will reply by tomorrow?", why:"قابل قبول است ولی می‌پرسد «فردا جواب می‌دهند؟»، نه «تا فردا جواب داده‌اند؟»." }
  ]},

/* ── آیندهٔ کامل استمراری ──────────────── */
{ id:"t-fpc-6", slot:"t-fpc",
  fa:"تا شب، ده ساعت است که در این فرودگاه منتظریم.",
  en:"By tonight, we'll have been waiting at this airport for ten hours.",
  why:["طول انتظار تا نقطه‌ای در آینده: <en>will have been + -ing</en>.",
       "فارسی «منتظریم» (حال) گفته؛ انگلیسی باید هم بازه و هم آینده را نشان دهد."],
  misses:[
    { en:"By tonight, we are waiting at this airport for ten hours.", why:"حال با بازه و آینده." },
    { en:"By tonight, we'll be waiting at this airport for ten hours.", why:"یعنی از امشب ده ساعت منتظر خواهیم بود." }
  ]},
{ id:"t-fpc-7", slot:"t-fpc",
  fa:"ماه بعد، یک سال می‌شود که پیانو یاد می‌گیرم.",
  en:"Next month, I'll have been learning the piano for a year.",
  why:["بازه تا نقطه‌ای در آینده: آیندهٔ کامل استمراری.",
       "ساز با <en>the</en>: <en>learn the piano</en>."],
  misses:[
    { en:"Next month, I learn piano for a year.", why:"حال ساده، و <en>the piano</en>." },
    { en:"Next month, I've been learning the piano for a year.", why:"<en>will</en> جا افتاده." }
  ]},
{ id:"t-fpc-8", slot:"t-fpc",
  fa:"تا کار ساختمان تمام شود، دو سال است که صدای دریل می‌شنویم.",
  en:"By the time the building work is finished, we'll have been listening to drilling for two years.",
  why:["آیندهٔ کامل استمراری با <en>by the time</en> (+ حال ساده، اینجا مجهول: <en>is finished</en>).",
       "«شنیدن» ممتد و ناخواسته اینجا <en>listen to</en> یا <en>put up with</en> است."],
  misses:[
    { en:"By the time the building work will finish, we'll have been listening to drilling for two years.", why:"<en>will</en> در بند زمانی." },
    { en:"By the time the building work is finished, we're hearing drilling for two years.", why:"حال استمراری با بازه و آینده." }
  ],
  alt:"<en>…we'll have been putting up with the drilling for two years.</en>"},
{ id:"t-fpc-9", slot:"t-fpc",
  fa:"آبان که بشود، پنج سال است در این شرکت کار می‌کنم.",
  en:"By November, I'll have been working at this company for five years.",
  why:["بازهٔ کاری تا یک ماه مشخص در آینده: آیندهٔ کامل استمراری.",
       "ماه شمسی را به میلادی برگردان (آبان ≈ <en>November</en>)."],
  misses:[
    { en:"In November, I work at this company for five years.", why:"حال ساده با بازه و آینده." },
    { en:"By November, I'll be working at this company for five years.", why:"یعنی از نوامبر پنج سال دیگر کار خواهم کرد." }
  ]},
{ id:"t-fpc-10", slot:"t-fpc",
  fa:"ساعت یک که بشود، شش ساعت است داری درس می‌خوانی؛ استراحت کن.",
  en:"By one o'clock, you'll have been studying for six hours — take a break.",
  why:["طول فعالیت تا نقطه‌ای در آینده: آیندهٔ کامل استمراری.",
       "«استراحت کردن» (کوتاه) = <en>take a break</en>."],
  misses:[
    { en:"By one o'clock, you've been studying for six hours.", why:"<en>will</en> جا افتاده؛ ساعت یک هنوز نرسیده." },
    { en:"By one o'clock, you'll study for six hours — do a rest.", why:"<en>will study</en> یعنی از آن موقع؛ و <en>take a break</en>." }
  ]},

/* ── آینده در گذشته ────────────────────── */
{ id:"t-fip-6", slot:"t-fip",
  fa:"فکر می‌کردم امروز هوا بهتر می‌شود.",
  en:"I thought the weather would get better today.",
  why:["پیش‌بینیِ گذشته دربارهٔ آینده‌ی آن موقع: <en>would</en>.",
       "«بهتر شدن» = <en>get better / improve</en>."],
  misses:[
    { en:"I thought the weather will get better today.", why:"بعد از <en>thought</en>، <en>will</en> یک پله عقب می‌رود." },
    { en:"I thought the weather becomes better today.", why:"حال ساده، و <en>get better</en> طبیعی‌تر است." }
  ]},
{ id:"t-fip-7", slot:"t-fip",
  fa:"داشتم می‌رفتم بیرون که تلفن زنگ زد.",
  en:"I was about to go out when the phone rang.",
  why:["«داشتم می‌رفتم» اینجا یعنی «نزدیک بود بروم»: آیندهٔ خیلی نزدیک در گذشته = <en>was about to</en> (یا <en>was just going to</en>).",
       "اگر در حال بیرون رفتن بودی (دم در)، <en>I was going out</en> هم ممکن است."],
  misses:[
    { en:"I'm about to go out when the phone rang.", why:"زمان حال با داستان گذشته." },
    { en:"I went out when the phone rang.", why:"یعنی زنگ تلفن باعث شد بیرون بروم." }
  ],
  alt:"<en>I was just going to go out when the phone rang.</en>"},
{ id:"t-fip-8", slot:"t-fip",
  fa:"مطمئن بودم که قبول می‌شوی.",
  en:"I was sure you'd pass.",
  why:["اطمینانِ گذشته دربارهٔ آینده‌ی آن موقع: <en>would</en> (<en>'d</en>).",
       "«قبول شدن در امتحان» = <en>pass</en>."],
  misses:[
    { en:"I was sure you will pass.", why:"backshift جا افتاده." },
    { en:"I was sure you would be accepted.", why:"<en>be accepted</en> برای پذیرش در دانشگاه یا شغل است." }
  ]},
{ id:"t-fip-9", slot:"t-fip",
  fa:"به همکارم قول دادم گزارش را تا جمعه تمام کنم.",
  en:"I promised my colleague I'd finish the report by Friday.",
  why:["قولی در گذشته دربارهٔ آینده: <en>would</en>. ضرب‌الاجل با <en>by</en>.",
       "یا با مصدر: <en>I promised to finish…</en>."],
  misses:[
    { en:"I promised my colleague I will finish the report by Friday.", why:"اگر هنوز جمعه نرسیده قابل قبول است، ولی backshift معیار است." },
    { en:"I promised to my colleague I'd finish the report until Friday.", why:"<en>promise</en> شخص را مستقیم می‌گیرد، و <en>by</en> نه <en>until</en>." }
  ],
  alt:"<en>I promised my colleague to finish the report by Friday.</en>"},
{ id:"t-fip-10", slot:"t-fip",
  fa:"قرار بود امروز آفتابی باشد، ولی ببین چه بارانی!",
  en:"It was supposed to be sunny today, but look at this rain!",
  why:["انتظاری در گذشته که عملی نشد: <en>was supposed to</en> یا <en>was going to</en>.",
       "برای پیش‌بینی هوا، <en>was supposed to</en> رایج‌ترین است."],
  misses:[
    { en:"It would be sunny today, but look at this rain!", why:"<en>would</en> تنها این معنای «قرار بود» را نمی‌رساند." },
    { en:"It is supposed to be sunny today, but look at this rain!", why:"قابل قبول (پیش‌بینی هنوز معتبر)؛ ولی چون خراب شده، گذشته طبیعی‌تر است." }
  ],
  alt:"<en>It was going to be sunny today…</en>"}

]);
