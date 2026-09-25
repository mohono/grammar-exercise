/* ═══ مخزن جمله‌ها — شرطی (۱۰ ساختار × ۱۰) ═══ */
window.POOL = (window.POOL || []).concat([

/* ── شرطی نوع صفر ──────────────────────── */
{ id:"c-0-1", slot:"c-0",
  fa:"اگر گلدان‌ها را آب ندهی، خشک می‌شوند.",
  en:"If you don't water plants, they die.",
  why:["یک واقعیت همیشگی، نه یک موقعیت خاص: شرطی نوع صفر، هر دو طرف حال ساده. <en>if</en> اینجا تقریباً یعنی <en>whenever</en>.",
       "اگر دربارهٔ همین گلدان‌های خاص و همین هفته حرف می‌زدی، نوع اول (<en>they'll die</en>) درست بود."],
  misses:[
    { en:"If you won't water plants, they die.", why:"در بند <en>if</en>، <en>will</en> برای آینده نمی‌آید. (<en>won't</en> اینجا یعنی «حاضر نیستی».)" },
    { en:"If you don't water plants, they get dry.", why:"<en>get dry</en> یعنی خشک شدنِ سطحی؛ برای گیاه <en>die</en> یا <en>dry out</en>." }
  ]},
{ id:"c-0-2", slot:"c-0",
  fa:"اگر دیر بخوابم، صبح سردرد می‌گیرم.",
  en:"If I go to bed late, I get a headache in the morning.",
  why:["عادت و الگوی تکراری در زندگی من: نوع صفر. هر بار این شرط برقرار شود، این نتیجه می‌آید.",
       "فارسی بعد از «اگر» التزامی (بخوابم) می‌گذارد؛ انگلیسی حال ساده."],
  misses:[
    { en:"If I will go to bed late, I get a headache in the morning.", why:"<en>will</en> در بند <en>if</en> جا ندارد." },
    { en:"If I sleep late, I will get a headache in the morning.", why:"<en>sleep late</en> یعنی دیر بیدار شدن! و <en>will</en> آن را به یک موقعیت خاص تبدیل می‌کند." }
  ]},
{ id:"c-0-3", slot:"c-0",
  fa:"اگر شیر را بیرون یخچال بگذاری، ترش می‌شود.",
  en:"If you leave milk out of the fridge, it goes off.",
  why:["واقعیت کلی (هر شیری، هر وقت): نوع صفر، دو طرف حال ساده.",
       "«ترش شدن / خراب شدن» غذا = <en>go off</en> یا <en>go sour</en>. «شدن» فارسی اینجا <en>go</en> است، نه <x>become</x>."],
  misses:[
    { en:"If you leave milk out of the fridge, it becomes sour.", why:"دستوری است، ولی هم‌آیی (collocation) طبیعی <en>go sour / go off</en> است." },
    { en:"If you will leave milk outside the fridge, it goes off.", why:"<en>will</en> در بند <en>if</en>." }
  ]},
{ id:"c-0-4", slot:"c-0",
  fa:"بچه‌ها اگر شام نخورند، نصفه‌شب بیدار می‌شوند.",
  en:"If the kids don't eat dinner, they wake up in the middle of the night.",
  why:["الگوی همیشگی خانه: نوع صفر.",
       "<en>If the kids won't eat dinner</en> در واقع جملهٔ درستی است ولی معنای دیگری دارد: «اگر حاضر نشوند شام بخورند»."],
  misses:[
    { en:"If the kids don't eat dinner, they will wake up at midnight.", why:"<en>will</en> آن را یک پیش‌بینی خاص می‌کند، و «نصفه‌شب» همیشه دقیقاً <en>midnight</en> (ساعت ۱۲) نیست." },
    { en:"If the kids won't eat dinner, they wake up in the middle of the night.", why:"<en>won't</en> در بند <en>if</en> معنای «امتناع» دارد، نه آینده." }
  ]},
{ id:"c-0-5", slot:"c-0",
  fa:"اگر این دکمه را بزنی، دستگاه خاموش می‌شود.",
  en:"If you press this button, the machine switches off.",
  why:["طرز کار یک وسیله — همیشه همین است: نوع صفر.",
       "«خاموش شدن» خودبه‌خود = <en>switch off / turn off</en> (لازم)."],
  misses:[
    { en:"If you will press this button, the machine switches off.", why:"<en>will</en> در بند <en>if</en>." },
    { en:"If you press this button, the machine becomes off.", why:"<en>off</en> با <en>become</en> نمی‌آید؛ <en>switches off</en> یا <en>goes off</en>." }
  ]},

/* ── شرطی نوع اول ──────────────────────── */
{ id:"c-1-1", slot:"c-1",
  fa:"اگر فردا باران بیاید، پیک‌نیک را عقب می‌اندازیم.",
  en:"If it rains tomorrow, we'll put off the picnic.",
  why:["احتمال واقعی در آینده: <en>If + حال ساده, will + فعل</en>. آینده در بند <en>if</en> با حال ساده گفته می‌شود.",
       "«عقب انداختن» = <en>put off / postpone</en>."],
  misses:[
    { en:"If it will rain tomorrow, we'll put off the picnic.", why:"رایج‌ترین خطای شرطی: <en>will</en> در بند <en>if</en>." },
    { en:"If it rains tomorrow, we put off the picnic.", why:"بدون <en>will</en> شبیه عادت (نوع صفر) می‌شود." }
  ]},
{ id:"c-1-2", slot:"c-1",
  fa:"اگر عجله نکنی، به قطار نمی‌رسی.",
  en:"If you don't hurry, you'll miss the train.",
  why:["احتمال واقعی: نوع اول.",
       "«به قطار نرسیدن» = <en>miss the train</en>؛ «رسیدن به قطار» = <en>catch the train</en>. <x>reach the train</x> یعنی به محل قطار رسیدن."],
  misses:[
    { en:"If you don't hurry, you won't reach the train.", why:"<en>reach</en> برای مکان است؛ برای قطار <en>catch / miss</en>." },
    { en:"If you won't hurry, you'll miss the train.", why:"<en>will</en> در بند <en>if</en>." }
  ]},
{ id:"c-1-3", slot:"c-1",
  fa:"اگر زودتر تمامش کردی، زنگ بزن.",
  en:"If you finish early, give me a call.",
  why:["احتمال واقعی در آینده با نتیجهٔ امری: <en>If + حال ساده, امری</en>.",
       "تلهٔ فارسی: «کردی» شکل گذشته دارد ولی معنایش آینده است. در انگلیسی اگر گذشته بگذاری (<en>If you finished</en>) شرط را فرضی و دور می‌کنی."],
  misses:[
    { en:"If you finished early, call me.", why:"گذشته در بند <en>if</en> یعنی فرضی و نامحتمل — ترجمهٔ مستقیم «کردی»." },
    { en:"If you will finish early, call me.", why:"<en>will</en> در بند <en>if</en>." }
  ]},
{ id:"c-1-4", slot:"c-1",
  fa:"اگر ارزان‌ترش را پیدا کنم، این را پس می‌دهم.",
  en:"If I find a cheaper one, I'll take this one back.",
  why:["احتمال واقعی: نوع اول.",
       "«ارزان‌ترش» = <en>a cheaper one</en>؛ صفت تنها در انگلیسی اسم نمی‌شود، <en>one</en> لازم است. «پس دادن جنس» = <en>take back / return</en>."],
  misses:[
    { en:"If I find cheaper, I give back this.", why:"<en>one</en> جا افتاده، <en>will</en> هم، و «پس دادن به فروشگاه» <en>take back</en> است." },
    { en:"If I will find a cheaper one, I'll return this one.", why:"<en>will</en> در بند <en>if</en>." }
  ]},
{ id:"c-1-5", slot:"c-1",
  fa:"اگر امشب وقت کنم، ایمیلت را جواب می‌دهم.",
  en:"If I get time tonight, I'll reply to your email.",
  why:["نوع اول: <en>If + حال ساده, will</en>.",
       "«وقت کردن» = <en>get / have time</en>. <en>reply to</en> با <en>to</en>."],
  misses:[
    { en:"If I will have time tonight, I'll reply your email.", why:"<en>will</en> در بند <en>if</en>، و <en>reply</en> بی‌<en>to</en>." },
    { en:"If I had time tonight, I'd reply to your email.", why:"نوع دوم: یعنی احتمالش کم است — گوینده این را نگفته." }
  ]},

/* ── شرطی نوع دوم ──────────────────────── */
{ id:"c-2-1", slot:"c-2",
  fa:"اگر ماشین داشتم، هر روز با مترو نمی‌آمدم.",
  en:"If I had a car, I wouldn't take the metro every day.",
  why:["خلافِ واقعیتِ حال (ماشین ندارم): گذشته در بند <en>if</en>، <en>would</en> در نتیجه. گذشته اینجا زمان نیست، فاصله از واقعیت است.",
       "فارسی هم همین کار را می‌کند (داشتم، نمی‌آمدم) — اینجا فارسی کمک می‌کند."],
  misses:[
    { en:"If I have a car, I won't take the metro every day.", why:"نوع اول: یعنی ممکن است ماشین داشته باشم — ولی ندارم." },
    { en:"If I would have a car, I wouldn't take the metro every day.", why:"<en>would</en> در بند <en>if</en> نمی‌آید." }
  ]},
{ id:"c-2-2", slot:"c-2",
  fa:"اگر جای تو بودم، این کار را قبول می‌کردم.",
  en:"If I were you, I'd take the job.",
  why:["نصیحت با فرضِ ناممکن: <en>If I were you</en>. <en>were</en> برای همهٔ اشخاص در شرطی فرضی، شکل معیار است.",
       "«قبول کردن کار» = <en>take / accept the job</en>."],
  misses:[
    { en:"If I am you, I will take the job.", why:"من نمی‌توانم تو باشم؛ پس نوع اول بی‌معناست." },
    { en:"If I would be you, I'd take the job.", why:"<en>would</en> در بند <en>if</en>." }
  ],
  alt:"<en>If I was you…</en> در گفتار رایج است؛ <en>were</en> در نوشتار ایمن‌تر است."},
{ id:"c-2-3", slot:"c-2",
  fa:"اگر خانه‌مان بزرگ‌تر بود، مادرم می‌توانست پیش ما زندگی کند.",
  en:"If our flat were bigger, my mother could live with us.",
  why:["خلاف واقعیت حال (خانه کوچک است). در نتیجه به جای <en>would</en> می‌شود <en>could</en> (توانایی) یا <en>might</en> (احتمال) گذاشت.",
       "«پیش ما» = <en>with us</en>."],
  misses:[
    { en:"If our flat is bigger, my mother can live with us.", why:"نوع اول/صفر: یعنی ممکن است بزرگ‌تر باشد." },
    { en:"If our flat were bigger, my mother could live near us.", why:"<en>near us</en> یعنی نزدیک ما، نه در خانهٔ ما." }
  ]},
{ id:"c-2-4", slot:"c-2",
  fa:"اگر آشپزی بلد بودم، این‌قدر پول غذای بیرون نمی‌دادم.",
  en:"If I could cook, I wouldn't spend so much on takeaways.",
  why:["خلاف واقعیت حال. «بلد بودن» مهارت = <en>can</en>، و گذشته‌اش در شرطی: <en>could</en>.",
       "«پول دادن برای» = <en>spend (money) on</en>."],
  misses:[
    { en:"If I knew cooking, I wouldn't spend so much on takeaways.", why:"«بلد بودن» مهارت در انگلیسی <en>can</en> یا <en>know how to</en> است." },
    { en:"If I can cook, I won't spend so much on takeaways.", why:"نوع اول: گویی ممکن است آشپزی بلد باشم." }
  ]},
{ id:"c-2-5", slot:"c-2",
  fa:"اگر برندهٔ لاتاری شوی، با پولش چه کار می‌کنی؟",
  en:"If you won the lottery, what would you do with the money?",
  why:["فارسی حال (شوی، می‌کنی) گفته، ولی برندهٔ لاتاری شدن تقریباً ناممکن است. انگلیسی برای موقعیت‌های خیالی نوع دوم را ترجیح می‌دهد.",
       "درجهٔ احتمال را گوینده تعیین می‌کند، نه دستور زبان — ولی برای لاتاری تقریباً همه نوع دوم می‌گویند."],
  misses:[
    { en:"If you win the lottery, what will you do with the money?", why:"دستوری است، ولی انگار واقعاً بلیت برنده در دست داری." },
    { en:"If you would win the lottery, what would you do?", why:"<en>would</en> در بند <en>if</en>." }
  ]},

/* ── شرطی نوع سوم ──────────────────────── */
{ id:"c-3-1", slot:"c-3",
  fa:"اگر زودتر راه افتاده بودیم، به پرواز رسیده بودیم.",
  en:"If we'd left earlier, we would have caught the flight.",
  why:["خلاف واقعیت گذشته (دیر راه افتادیم و جا ماندیم): <en>If + had + V3, would have + V3</en>. دو پله فاصله: یکی برای «خیالی»، یکی برای «گذشته».",
       "<en>'d</en> در بند <en>if</en> = <en>had</en>؛ در بند نتیجه = <en>would</en>."],
  misses:[
    { en:"If we left earlier, we would catch the flight.", why:"نوع دوم: یعنی الان — ولی پرواز رفته." },
    { en:"If we would have left earlier, we would have caught the flight.", why:"<en>would have</en> در بند <en>if</en> غلط است (در گفتار آمریکایی شنیده می‌شود)." }
  ]},
{ id:"c-3-2", slot:"c-3",
  fa:"اگر دیروز آدرس را می‌دانستم، به مهمانی می‌آمدم.",
  en:"If I'd known the address yesterday, I would have come to the party.",
  why:["تلهٔ فارسی: فارسی برای گذشتهٔ خیالی هم همان «می‌دانستم / می‌آمدم» را می‌گوید. فقط «دیروز» نشان می‌دهد نوع سوم است.",
       "انگلیسی باید دو پله عقب برود: <en>had known</en>، <en>would have come</en>."],
  misses:[
    { en:"If I knew the address yesterday, I would come to the party.", why:"ترجمهٔ مستقیم فارسی؛ در انگلیسی نوع دوم است و به حال اشاره می‌کند." },
    { en:"If I had known the address yesterday, I would come to the party.", why:"نیمه‌کاره: نتیجه هم در گذشته است، پس <en>would have come</en>." }
  ]},
{ id:"c-3-3", slot:"c-3",
  fa:"اگر به حرف مکانیک گوش داده بودی، ماشین وسط راه خراب نمی‌شد.",
  en:"If you'd listened to the mechanic, the car wouldn't have broken down on the way.",
  why:["خلاف واقع گذشته: نوع سوم. «خراب نمی‌شد» فارسی باز همان شکلِ مبهم است؛ نقطهٔ گذشته را جملهٔ اول مشخص کرده.",
       "«خراب شدن ماشین» = <en>break down</en>. «گوش دادن به» = <en>listen to</en>."],
  misses:[
    { en:"If you had listened the mechanic, the car wouldn't have broken down.", why:"<en>listen</en> بدون <en>to</en> مفعول نمی‌گیرد." },
    { en:"If you'd listened to the mechanic, the car wouldn't break down on the way.", why:"نتیجه در حال است؛ ولی خرابی در گذشته اتفاق افتاده." }
  ]},
{ id:"c-3-4", slot:"c-3",
  fa:"اگر آن روز باران نیامده بود، هیچ‌وقت همدیگر را نمی‌دیدیم.",
  en:"If it hadn't rained that day, we would never have met.",
  why:["خلاف واقع گذشته: نوع سوم با شرط منفی (<en>hadn't rained</en>).",
       "«همدیگر را دیدن» به معنی آشنا شدن = <en>meet</en> (دوطرفه، بدون <en>each other</en>)."],
  misses:[
    { en:"If it didn't rain that day, we would never meet.", why:"نوع دوم؛ «آن روز» گذشته را اعلام کرده." },
    { en:"If it hadn't rained that day, we would never have seen each other.", why:"دستوری درست، ولی <en>see each other</en> یعنی دیدار، نه آشنایی." }
  ]},
{ id:"c-3-5", slot:"c-3",
  fa:"اگر به من گفته بودی، کمکت می‌کردم.",
  en:"If you'd told me, I would have helped you.",
  why:["«گفته بودی» گذشتهٔ خیالی را نشان می‌دهد؛ «کمکت می‌کردم» فارسی مبهم است ولی نتیجه هم در گذشته است: <en>would have helped</en>.",
       "خطای رایج: <en>If you would have told me</en> — <en>would</en> در بند <en>if</en> ممنوع."],
  misses:[
    { en:"If you told me, I would help you.", why:"نوع دوم: موقعیت فرضی حال." },
    { en:"If you would have told me, I would have helped you.", why:"<en>would have</en> در بند <en>if</en>." }
  ]},

/* ── مختلط: شرط گذشته، نتیجهٔ حال ──────── */
{ id:"c-m1-1", slot:"c-m1",
  fa:"اگر دیشب زود خوابیده بودم، الان این‌قدر خسته نبودم.",
  en:"If I'd gone to bed early last night, I wouldn't be so tired now.",
  why:["شرط در گذشته (دیشب) → <en>had + V3</en>؛ نتیجه در حال (الان) → <en>would + V</en>. دو تنظیم مستقل: هر طرف زمان خودش را می‌گیرد.",
       "قید «الان» علامت نتیجهٔ حال است."],
  misses:[
    { en:"If I'd gone to bed early last night, I wouldn't have been so tired now.", why:"<en>would have been</en> گذشته است و با «الان» جور نیست." },
    { en:"If I went to bed early last night, I wouldn't be so tired now.", why:"<en>went</en> در شرطی فرضی یعنی حال — ولی «دیشب» گذشته است." }
  ]},
{ id:"c-m1-2", slot:"c-m1",
  fa:"اگر آن آپارتمان را خریده بودیم، الان پولدار بودیم.",
  en:"If we'd bought that flat, we'd be rich now.",
  why:["خرید در گذشته (نشد) → <en>had bought</en>؛ نتیجه الان (پولدار نیستیم) → <en>would be</en>.",
       "<en>we'd</en> اول = <en>we had</en>، دومی = <en>we would</en>."],
  misses:[
    { en:"If we'd bought that flat, we would have been rich now.", why:"نتیجه را به گذشته فرستادی؛ «الان» می‌گوید حال است." },
    { en:"If we bought that flat, we'd be rich now.", why:"شرط باید در گذشته باشد: <en>had bought</en>." }
  ]},
{ id:"c-m1-3", slot:"c-m1",
  fa:"اگر در دانشگاه پزشکی خوانده بودم، الان دکتر بودم.",
  en:"If I'd studied medicine at university, I'd be a doctor now.",
  why:["تصمیم گذشته → نتیجهٔ امروز: مختلط نوع ۱.",
       "رشته‌ها بدون حرف تعریف: <en>study medicine</en>. شغل با <en>a</en>: <en>a doctor</en>."],
  misses:[
    { en:"If I'd studied medicine at university, I would have been a doctor now.", why:"«الان» نتیجه را در حال نگه می‌دارد." },
    { en:"If I'd studied the medicine at university, I'd be doctor now.", why:"رشته بدون <en>the</en>، شغل با <en>a</en>." }
  ]},
{ id:"c-m1-4", slot:"c-m1",
  fa:"اگر صبحانه خورده بودی، الان گرسنه نبودی.",
  en:"If you'd had breakfast, you wouldn't be hungry now.",
  why:["شرطِ گذشته (صبح) → نتیجهٔ حال (الان): مختلط.",
       "«صبحانه خوردن» = <en>have breakfast</en>، بدون حرف تعریف."],
  misses:[
    { en:"If you'd had breakfast, you wouldn't have been hungry now.", why:"نتیجه باید در حال بماند." },
    { en:"If you had breakfast, you wouldn't be hungry now.", why:"نوع دوم: یعنی اگر عادتاً صبحانه می‌خوردی — نه امروز صبح." }
  ]},
{ id:"c-m1-5", slot:"c-m1",
  fa:"اگر آن پیشنهاد کار را قبول کرده بودم، الان در کانادا زندگی می‌کردم.",
  en:"If I'd accepted that job offer, I'd be living in Canada now.",
  why:["شرط گذشته، نتیجهٔ در جریانِ حال: <en>would be + -ing</en>.",
       "«قبول کردن پیشنهاد» = <en>accept / take an offer</en>."],
  misses:[
    { en:"If I'd accepted that job offer, I would have lived in Canada now.", why:"<en>would have lived</en> گذشته است." },
    { en:"If I accepted that job offer, I'd live in Canada now.", why:"شرط باید گذشته (دو پله عقب) باشد." }
  ]},

/* ── مختلط: شرط حال، نتیجهٔ گذشته ──────── */
{ id:"c-m2-1", slot:"c-m2",
  fa:"اگر این‌قدر خجالتی نبودم، دیروز در جلسه نظرم را گفته بودم.",
  en:"If I weren't so shy, I would have spoken up in the meeting yesterday.",
  why:["خجالتی بودن یک ویژگی همیشگی است (حال) → <en>weren't</en>؛ اتفاق دیروز (گذشته) → <en>would have spoken</en>. مختلط نوع ۲.",
       "آزمون: اگر فقط دیروز خجالت کشیدی، <en>If I hadn't been so shy</en> (نوع سوم). اگر همیشه این‌طوری هستی، شرط در حال است."],
  misses:[
    { en:"If I wasn't so shy, I would speak up in the meeting yesterday.", why:"نتیجهٔ دیروز باید <en>would have + V3</en> باشد." },
    { en:"If I hadn't been so shy, I would have spoken up yesterday.", why:"نوع سوم؛ درست است فقط اگر خجالت مخصوص دیروز بوده." }
  ],
  alt:"<en>…I would have said what I thought in the meeting yesterday.</en>"},
{ id:"c-m2-2", slot:"c-m2",
  fa:"اگر انگلیسی‌ام خوب بود، آن کار را گرفته بودم.",
  en:"If my English were better, I would have got that job.",
  why:["سطح انگلیسی الان هم پایین است (شرط حال) و نتیجه دربارهٔ کاری در گذشته است: مختلط نوع ۲.",
       "«گرفتن کار» = <en>get a job</en>."],
  misses:[
    { en:"If my English were better, I would get that job.", why:"نتیجه در حال؛ ولی آن فرصت گذشته است." },
    { en:"If my English had been better, I would have got that job.", why:"نوع سوم؛ فقط اگر انگلیسی‌ات الان بهتر شده." }
  ]},
{ id:"c-m2-3", slot:"c-m2",
  fa:"اگر به بادام‌زمینی حساسیت نداشتم، از آن کیک خورده بودم.",
  en:"If I weren't allergic to peanuts, I would have had some of that cake.",
  why:["حساسیت یک واقعیت همیشگی است (حال)، و کیک مال مهمانیِ گذشته: مختلط نوع ۲.",
       "«حساسیت داشتن به» = <en>be allergic to</en>."],
  misses:[
    { en:"If I weren't allergic to peanuts, I would eat that cake.", why:"یعنی الان — ولی آن کیک در گذشته بود." },
    { en:"If I didn't have allergy to peanuts, I would have had some of that cake.", why:"<en>have an allergy</en> با <en>an</en>؛ <en>be allergic to</en> طبیعی‌تر است." }
  ]},
{ id:"c-m2-4", slot:"c-m2",
  fa:"اگر ماشین داشتیم، دیشب مجبور نمی‌شدیم پیاده برگردیم.",
  en:"If we had a car, we wouldn't have had to walk home last night.",
  why:["ماشین نداشتن حالت فعلی است → <en>had</en> (گذشتهٔ فرضی)؛ دیشب → <en>wouldn't have had to</en>.",
       "دو <en>had</en> پشت سر هم عجیب به نظر می‌رسد ولی درست است: <en>have had to</en> = مجبور شده بودن."],
  misses:[
    { en:"If we had a car, we wouldn't have to walk home last night.", why:"<en>wouldn't have to</en> حال است؛ «دیشب» گذشته." },
    { en:"If we had a car, we wouldn't have to go home on foot yesterday night.", why:"زمان نتیجه، و <en>last night</en> نه <x>yesterday night</x>." }
  ]},
{ id:"c-m2-5", slot:"c-m2",
  fa:"اگر این‌قدر فراموش‌کار نبودی، تولد مادرت یادت نمی‌رفت.",
  en:"If you weren't so forgetful, you wouldn't have forgotten your mother's birthday.",
  why:["فراموش‌کاری ویژگی همیشگی (حال)؛ فراموش کردن تولد، اتفاقِ گذشته: مختلط نوع ۲.",
       "«یادت رفتن» = <en>forget</en> با فاعل شخص."],
  misses:[
    { en:"If you weren't so forgetful, you wouldn't forget your mother's birthday.", why:"نتیجه در حال — مثل عادت کلی، نه آن تولد مشخص." },
    { en:"If you weren't so forgetful, your mother's birthday wouldn't have gone from your memory.", why:"ترجمهٔ کلمه‌به‌کلمهٔ «یادت رفت»؛ انگلیسی <en>forget</en> دارد." }
  ]},

/* ── unless و provided that ─────────────── */
{ id:"c-unl-1", slot:"c-unl",
  fa:"اگر عجله نکنیم، دیر می‌رسیم.",
  en:"Unless we hurry, we'll be late.",
  why:["<en>unless</en> = <en>if … not</en>. خودش منفی است، پس فعل بعدش مثبت می‌ماند.",
       "مثل <en>if</en>، بعد از <en>unless</en> هم برای آینده حال ساده."],
  misses:[
    { en:"Unless we don't hurry, we'll be late.", why:"منفی دوگانه: یعنی «اگر عجله کنیم، دیر می‌رسیم»." },
    { en:"Unless we will hurry, we'll be late.", why:"<en>will</en> بعد از <en>unless</en> نمی‌آید." }
  ],
  alt:"<en>If we don't hurry, we'll be late.</en>"},
{ id:"c-unl-2", slot:"c-unl",
  fa:"تا وقتی قبض‌ها را سر وقت بدهی، مشکلی پیش نمی‌آید.",
  en:"As long as you pay the bills on time, there won't be a problem.",
  why:["«تا وقتی» اینجا شرط است (به شرطِ اینکه)، نه زمان: <en>as long as</en>.",
       "تلهٔ فارسی: «تا وقتی» تو را به <x>until</x> می‌کشاند، که یعنی «تا لحظه‌ای که» — یعنی بعد از پرداخت مشکل پیش می‌آید!"],
  misses:[
    { en:"Until you pay the bills on time, there won't be a problem.", why:"<en>until</en> زمانی است: یعنی مشکل از لحظهٔ پرداخت شروع می‌شود." },
    { en:"As long as you will pay the bills on time, there won't be a problem.", why:"<en>will</en> بعد از <en>as long as</en> نمی‌آید." }
  ]},
{ id:"c-unl-3", slot:"c-unl",
  fa:"می‌توانی ماشینم را ببری، به شرطی که تا ساعت ده برگردانی.",
  en:"You can borrow my car, provided (that) you bring it back by ten.",
  why:["«به شرطی که» = <en>provided (that)</en> یا <en>providing</en> — شرطِ سفت‌وسخت‌تر از <en>if</en>. بعدش حال ساده.",
       "ضرب‌الاجل با <en>by</en>، نه <x>until</x>. «ماشین کسی را بردن» (قرضی) = <en>borrow</en>."],
  misses:[
    { en:"You can borrow my car, provided you will bring it back until ten.", why:"<en>will</en> بعد از <en>provided</en>، و <en>until</en> به جای <en>by</en>." },
    { en:"You can take my car, on condition you bring back it by ten.", why:"<en>on condition that</en> کامل است، و ضمیر بین فعل و ذره می‌آید: <en>bring it back</en>." }
  ]},
{ id:"c-unl-4", slot:"c-unl",
  fa:"جز در مواقع اضطراری به من زنگ نزن.",
  en:"Don't call me unless it's an emergency.",
  why:["«جز اینکه / مگر اینکه» = <en>unless</en>. فعلِ بعد از <en>unless</en> مثبت.",
       "«جز در» را نباید <x>except in</x> ترجمه کرد؛ <en>except in an emergency</en> هم هست، ولی <en>unless</en> طبیعی‌تر است."],
  misses:[
    { en:"Don't call me unless it isn't an emergency.", why:"منفی دوگانه: یعنی فقط وقتی اضطراری نیست زنگ بزن!" },
    { en:"Don't call me except emergency.", why:"حرف تعریف و ساختار ناقص: <en>except in an emergency</en>." }
  ]},
{ id:"c-unl-5", slot:"c-unl",
  fa:"به شرطی که هوا خوب باشد، فردا کوه می‌رویم.",
  en:"We'll go hiking tomorrow as long as the weather's good.",
  why:["شرط با <en>as long as</en> یا <en>provided</en>، و آینده در نتیجه با <en>will</en>.",
       "«کوه رفتن» = <en>go hiking</en> یا <en>go to the mountains</en>."],
  misses:[
    { en:"We'll go hiking tomorrow as long as the weather will be good.", why:"<en>will</en> در بند شرط." },
    { en:"We go to mountain tomorrow provided the weather is good.", why:"<en>will</en> جا افتاده، و <en>the mountains</en> (جمع با <en>the</en>)." }
  ]},

/* ── were to ───────────────────────────── */
{ id:"c-wt-1", slot:"c-wt",
  fa:"اگر یک روز کارت را از دست بدهی، چه کار می‌کنی؟",
  en:"If you were to lose your job, what would you do?",
  why:["<en>If + S + were to + V</en> فرض آینده را دورتر و نامحتمل‌تر می‌کند (و مؤدبانه‌تر، چون موضوع ناخوشایند است). نتیجه با <en>would</en>.",
       "برای همهٔ اشخاص <en>were</en>."],
  misses:[
    { en:"If you would lose your job, what would you do?", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If you were lose your job, what would you do?", why:"<en>to</en> جا افتاده: <en>were to lose</en>." }
  ],
  alt:"<en>If you lost your job, what would you do?</en> — نوع دوم ساده."},
{ id:"c-wt-2", slot:"c-wt",
  fa:"اگر فرضاً اجاره دو برابر شود، مجبوریم از شهر برویم.",
  en:"If our rent were to double, we'd have to move out of the city.",
  why:["«فرضاً» نشانهٔ فرض دور است: <en>were to</en>. <en>double</en> فعل است (دو برابر شدن).",
       "نتیجه: <en>would have to</en> = مجبور می‌شدیم."],
  misses:[
    { en:"If our rent were double, we'd have to move out of the city.", why:"<en>were double</en> یعنی اگر (الان) دو برابر بود — حالت، نه تغییر." },
    { en:"If our rent were to double, we have to move out of the city.", why:"نتیجه باید <en>would</en> بگیرد." }
  ]},
{ id:"c-wt-3", slot:"c-wt",
  fa:"اگر فرضاً رئیست بفهمد، اخراج می‌شوی؟",
  en:"If your boss were to find out, would you get fired?",
  why:["فرض نامحتمل در آینده: <en>were to find out</en>. نتیجه سؤالی: <en>would you…?</en>",
       "«اخراج شدن» = <en>get fired / be fired</en>."],
  misses:[
    { en:"If your boss would find out, would you get fired?", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If your boss were to find out, will you fire?", why:"نتیجه <en>would</en> می‌خواهد، و <en>you fire</en> یعنی تو کسی را اخراج می‌کنی." }
  ]},
{ id:"c-wt-4", slot:"c-wt",
  fa:"اگر قرار باشد همه هم‌زمان برق مصرف کنند، شبکه از کار می‌افتد.",
  en:"If everyone were to use electricity at the same time, the grid would go down.",
  why:["یک سناریوی فرضی: <en>were to</en> با <en>everyone</en> (فعل مفرد، ولی در شرطی فرضی <en>were</en>).",
       "«قرار باشد» فارسی اینجا برنامه نیست، فرض است."],
  misses:[
    { en:"If everyone would use electricity at the same time, the grid would go down.", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If everyone is to use electricity at the same time, the grid will go down.", why:"<en>is to</en> یعنی «موظف است / قرار است» — دستور، نه فرض." }
  ]},
{ id:"c-wt-5", slot:"c-wt",
  fa:"اگر فرضاً فردا یک میلیون دلار بهت بدهند، اولین چیزی که می‌خری چیست؟",
  en:"If you were to be given a million dollars tomorrow, what would you buy first?",
  why:["فرض خیالی در آینده + مجهول (بدهند با فاعل نامعلوم): <en>were to be given</en>.",
       "یا ساده‌تر: <en>If someone were to give you…</en>."],
  misses:[
    { en:"If someone would give you a million dollars tomorrow, what would you buy first?", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If you were to be given a million dollars tomorrow, what will you buy first?", why:"نتیجهٔ فرضی باید <en>would</en> باشد." }
  ],
  alt:"<en>If someone were to give you a million dollars tomorrow…</en>"},

/* ── شرطی وارونه ───────────────────────── */
{ id:"c-inv-1", slot:"c-inv",
  fa:"اگر می‌دانستم تو هم می‌آیی، زودتر آمده بودم.",
  en:"Had I known you were coming, I'd have got here earlier.",
  why:["نوع سوم وارونه: <en>if</en> حذف می‌شود و <en>had</en> جلوی فاعل می‌آید: <en>Had I known…</en>. رسمی‌تر و فشرده‌تر.",
       "«تو هم می‌آیی» در گذشته backshift می‌شود: <en>you were coming</en>."],
  misses:[
    { en:"Had I knew you were coming, I'd have got here earlier.", why:"بعد از <en>had</en> قسمت سوم: <en>known</en>." },
    { en:"Did I know you were coming, I would come earlier.", why:"وارونگی با <en>did</en> در شرطی نمی‌آید؛ فقط <en>had / should / were</en>." }
  ],
  alt:"<en>If I'd known you were coming, I'd have got here earlier.</en>"},
{ id:"c-inv-2", slot:"c-inv",
  fa:"اگر احیاناً سؤالی داشتید، با من تماس بگیرید.",
  en:"Should you have any questions, please contact me.",
  why:["<en>Should + S + V</en> = <en>If … (by any chance)</en>. «احیاناً» دقیقاً همین <en>should</en> است. رایج در ایمیل رسمی.",
       "<en>contact</en> مفعول مستقیم می‌گیرد: <en>contact me</en>، نه <x>contact with me</x>."],
  misses:[
    { en:"Should you have any questions, please contact with me.", why:"<en>contact</en> حرف اضافه نمی‌گیرد." },
    { en:"Should you had any questions, please contact me.", why:"بعد از <en>should</en> فعل ساده: <en>have</en>." }
  ],
  alt:"<en>If you have any questions, please contact me.</en> — ساده‌تر."},
{ id:"c-inv-3", slot:"c-inv",
  fa:"اگر جای تو بودم، این‌قدر نگران نمی‌شدم.",
  en:"Were I you, I wouldn't worry so much.",
  why:["نوع دوم وارونه: <en>Were + S</en>. بسیار رسمی؛ در گفت‌وگو <en>If I were you</en> رایج‌تر است.",
       "فقط <en>were</en> وارونه می‌شود، نه <en>was</en>."],
  misses:[
    { en:"Was I you, I wouldn't worry so much.", why:"وارونگی شرطی فقط با <en>were</en>." },
    { en:"Were I you, I won't worry so much.", why:"نتیجهٔ فرضی: <en>would</en>." }
  ],
  alt:"<en>If I were you, I wouldn't worry so much.</en>"},
{ id:"c-inv-4", slot:"c-inv",
  fa:"اگر راننده ترمز نکرده بود، بچه زیر ماشین رفته بود.",
  en:"Had the driver not braked, the child would have been hit.",
  why:["نوع سوم وارونهٔ منفی: <en>Had + S + not + V3</en>. <en>not</en> بعد از فاعل می‌آید و مخفف نمی‌شود.",
       "«زیر ماشین رفتن» = <en>be hit / be run over</en> (مجهول)."],
  misses:[
    { en:"Hadn't the driver braked, the child would have been hit.", why:"در وارونگی شرطی شکل مخفف (<en>Hadn't</en>) نمی‌آید." },
    { en:"Had the driver not braked, the child would have gone under the car.", why:"ترجمهٔ کلمه‌به‌کلمه؛ <en>be hit / be run over</en>." }
  ],
  alt:"<en>If the driver hadn't braked, the child would have been hit.</en>"},
{ id:"c-inv-5", slot:"c-inv",
  fa:"اگر احیاناً پروازتان لغو شد، هزینه را برمی‌گردانیم.",
  en:"Should your flight be cancelled, we will refund the cost.",
  why:["<en>Should</en> + فاعل + فعل ساده؛ و چون لغو شدن مجهول است: <en>Should your flight be cancelled</en>.",
       "«لغو شد» فارسی شکل گذشته دارد ولی آینده است — همان تلهٔ «اگر … کردی»."],
  misses:[
    { en:"Should your flight is cancelled, we will refund the cost.", why:"بعد از <en>should</en> شکل ساده: <en>be</en>." },
    { en:"Should your flight cancel, we will refund the cost.", why:"پرواز خودش لغو نمی‌کند؛ مجهول لازم است." }
  ],
  alt:"<en>If your flight is cancelled, we will refund the cost.</en>"},

/* ── but for و otherwise ────────────────── */
{ id:"c-bf-1", slot:"c-bf",
  fa:"اگر کمک تو نبود، هیچ‌وقت اسباب‌کشی را یک‌روزه تمام نمی‌کردیم.",
  en:"But for your help, we would never have finished the move in one day.",
  why:["<en>But for + اسم</en> = <en>If it hadn't been for</en>. بعدش اسم می‌آید، نه جمله. چون اسباب‌کشی گذشته است، نتیجه <en>would have + V3</en>.",
       "گفتاری‌تر: <en>If it hadn't been for your help</en> یا <en>Without your help</en>."],
  misses:[
    { en:"But for you helped, we would never have finished the move in one day.", why:"بعد از <en>but for</en> اسم می‌آید، نه جمله: <en>your help</en>." },
    { en:"If it wasn't for your help, we would never finish the move in one day.", why:"اسباب‌کشی در گذشته بوده؛ هر دو طرف باید یک پله عقب‌تر باشند." }
  ],
  alt:"<en>If it hadn't been for your help… / Without your help…</en>"},
{ id:"c-bf-2", slot:"c-bf",
  fa:"اگر ترافیک نبود، ده دقیقه‌ای می‌رسیدیم.",
  en:"If it weren't for the traffic, we'd get there in ten minutes.",
  why:["<en>If it weren't for + اسم</en>: خلاف واقع حال (ترافیک هست). نتیجه: <en>would + V</en>.",
       "برای گذشته: <en>If it hadn't been for</en>."],
  misses:[
    { en:"If it isn't for the traffic, we'll get there in ten minutes.", why:"ترافیک واقعاً هست؛ ساختار واقعی معنا ندارد." },
    { en:"If there wasn't the traffic, we'd get there in ten minutes.", why:"<en>If there weren't any traffic</en> (بدون <en>the</en>) درست است." }
  ],
  alt:"<en>If there weren't so much traffic, we'd get there in ten minutes.</en>"},
{ id:"c-bf-3", slot:"c-bf",
  fa:"کتم را برداشتم؛ وگرنه یخ می‌زدم.",
  en:"I took my coat; otherwise, I would have frozen.",
  why:["<en>otherwise</en> = اگر این‌طور نبود. چون جملهٔ اول در گذشته است، نتیجهٔ خیالی: <en>would have + V3</en>.",
       "<en>otherwise</en> قید است، نه حرف ربط: یا نقطه‌ویرگول قبلش، یا جملهٔ جدید."],
  misses:[
    { en:"I took my coat; otherwise, I would freeze.", why:"یخ زدن در گذشته بود؛ یک پله کم عقب رفتی." },
    { en:"I took my coat, if not I froze.", why:"<en>if not</en> تنها این نقش را ندارد، و <en>froze</en> یعنی واقعاً یخ زدم!" }
  ]},
{ id:"c-bf-4", slot:"c-bf",
  fa:"باید میز رزرو کنیم؛ وگرنه جا گیرمان نمی‌آید.",
  en:"We need to book a table; otherwise, we won't get one.",
  why:["<en>otherwise</en> + نتیجهٔ واقعیِ آینده: <en>will</en>. <en>otherwise</en> خودش فرضی نیست؛ زمان به موقعیت بستگی دارد.",
       "«جا گیرمان نمی‌آید» = <en>we won't get a table / one</en>."],
  misses:[
    { en:"We need to book a table; otherwise, we wouldn't get one.", why:"<en>would</en> موقعیت را خیالی می‌کند؛ اینجا خطر واقعی است." },
    { en:"We need to book a table, otherwise we don't get a place.", why:"آینده <en>will</en> می‌خواهد؛ و <en>otherwise</en> بعد از ویرگول تنها (comma splice) در نوشتار رسمی ضعیف است." }
  ],
  alt:"<en>…or (else) we won't get one.</en> — گفتاری‌تر."},
{ id:"c-bf-5", slot:"c-bf",
  fa:"اگر مادربزرگم نبود، بچگی سختی داشتم.",
  en:"If it hadn't been for my grandmother, I would have had a difficult childhood.",
  why:["بچگی در گذشته است: <en>If it hadn't been for + اسم</en>، نتیجه <en>would have + V3</en>.",
       "فارسی «نبود / داشتم» ابهامی دارد که فقط موضوع (بچگی) حلش می‌کند."],
  misses:[
    { en:"If it wasn't for my grandmother, I would have a difficult childhood.", why:"نوع دوم: گویی بچگی الان در جریان است." },
    { en:"But for my grandmother, I had a difficult childhood.", why:"نتیجه باید فرضی باشد؛ این یعنی واقعاً بچگی سختی داشتم." }
  ],
  alt:"<en>But for my grandmother, I would have had a difficult childhood.</en>"},

/* ══ دور دوم: جمله‌های ۶ تا ۱۰ ══ */

/* ── شرطی نوع صفر ──────────────────────── */
{ id:"c-0-6", slot:"c-0",
  fa:"اگر یخ را گرم کنی، آب می‌شود.",
  en:"If you heat ice, it melts.",
  why:["قانون طبیعی: نوع صفر، هر دو طرف حال ساده.",
       "«آب شدن» یخ = <en>melt</en>."],
  misses:[
    { en:"If you heat ice, it becomes water.", why:"دستوری است ولی غیرطبیعی؛ فعل مخصوصش <en>melt</en> است." },
    { en:"If you will heat ice, it will melt.", why:"<en>will</en> در بند <en>if</en>، و قانون کلی نیازی به <en>will</en> ندارد." }
  ]},
{ id:"c-0-7", slot:"c-0",
  fa:"اگر دیر به مدرسه برسی، باید بروی دفتر.",
  en:"If you're late for school, you have to go to the office.",
  why:["قاعدهٔ همیشگی مدرسه: نوع صفر.",
       "«دیر رسیدن به» = <en>be late for</en>."],
  misses:[
    { en:"If you arrive late to school, you will have to go to the office.", why:"نوع اول یک موقعیت خاص را می‌سازد؛ اینجا قاعده است. (<en>late for</en>)" },
    { en:"If you will be late for school, you must go to office.", why:"<en>will</en> در بند <en>if</en>، و <en>the office</en>." }
  ]},
{ id:"c-0-8", slot:"c-0",
  fa:"اگر بعد از ساعت شش قهوه بخورم، خوابم نمی‌برد.",
  en:"If I drink coffee after six, I can't sleep.",
  why:["الگوی همیشگی بدن من: نوع صفر. نتیجه با <en>can't</en> (ناتوانی).",
       "فارسی التزامی (بخورم)؛ انگلیسی حال ساده."],
  misses:[
    { en:"If I will drink coffee after six, I can't sleep.", why:"<en>will</en> در بند <en>if</en>." },
    { en:"If I drink coffee after six, my sleep doesn't take me.", why:"ترجمهٔ «خوابم نمی‌برد»؛ <en>I can't sleep / get to sleep</en>." }
  ]},
{ id:"c-0-9", slot:"c-0",
  fa:"گربه‌مان اگر گرسنه باشد، تمام شب میو می‌کند.",
  en:"If our cat is hungry, it meows all night.",
  why:["رفتار همیشگی: نوع صفر.",
       "برای حیوان خانگی <en>it</en> یا (با علاقه) <en>he / she</en>."],
  misses:[
    { en:"If our cat will be hungry, it meows all night.", why:"<en>will</en> در بند <en>if</en>." },
    { en:"If our cat is hungry, it is meowing all night.", why:"استمراری برای الگوی همیشگی نیست." }
  ]},
{ id:"c-0-10", slot:"c-0",
  fa:"اگر رمز را سه بار اشتباه بزنی، کارتت مسدود می‌شود.",
  en:"If you enter the wrong PIN three times, your card gets blocked.",
  why:["قاعدهٔ سیستم: نوع صفر. «مسدود شدن» = <en>get / be blocked</en> (مجهول).",
       "«رمز کارت» = <en>PIN</en>."],
  misses:[
    { en:"If you enter the wrong PIN three times, your card blocks.", why:"کارت خودش چیزی را مسدود می‌کند." },
    { en:"If you will enter the wrong password three times, your card is blocked.", why:"<en>will</en> در بند <en>if</en>." }
  ]},

/* ── شرطی نوع اول ──────────────────────── */
{ id:"c-1-6", slot:"c-1",
  fa:"اگر تا ساعت هفت نیامدم، بدون من شروع کنید.",
  en:"If I'm not there by seven, start without me.",
  why:["احتمال واقعی + امری. «نیامدم» فارسی شکل گذشته دارد ولی آینده است؛ انگلیسی حال ساده.",
       "ضرب‌الاجل: <en>by</en>."],
  misses:[
    { en:"If I didn't come until seven, start without me.", why:"گذشته فرضی می‌کند، و <en>until</en> معنا را عوض می‌کند." },
    { en:"If I won't be there by seven, start without me.", why:"<en>will</en> در بند <en>if</en>." }
  ]},
{ id:"c-1-7", slot:"c-1",
  fa:"اگر این‌قدر شیرینی بخوری، دندان‌هایت خراب می‌شود.",
  en:"If you eat so many sweets, your teeth will rot.",
  why:["هشدار دربارهٔ آیندهٔ واقعی: نوع اول.",
       "«خراب شدن دندان» = <en>rot</en> یا <en>you'll ruin your teeth</en>."],
  misses:[
    { en:"If you will eat so many sweets, your teeth will rot.", why:"<en>will</en> در بند <en>if</en>." },
    { en:"If you eat so many sweets, your teeth break.", why:"<en>break</en> یعنی بشکند؛ و نتیجه بی‌<en>will</en>." }
  ]},
{ id:"c-1-8", slot:"c-1",
  fa:"اگر آن کتاب را دیدی، برایم بخر.",
  en:"If you see that book, buy it for me.",
  why:["احتمال واقعی + امری. باز «دیدی» گذشته است ولی معنایش آینده.",
       "<en>buy it for me</en> یا <en>buy me it</en> (دومی کمتر رایج)."],
  misses:[
    { en:"If you saw that book, buy it for me.", why:"گذشته در بند <en>if</en> یعنی فرضی." },
    { en:"If you see that book, buy for me.", why:"مفعول (<en>it</en>) جا افتاده." }
  ]},
{ id:"c-1-9", slot:"c-1",
  fa:"اگر امروز پول را بریزی، فردا به حسابش می‌رسد.",
  en:"If you transfer the money today, it'll reach the account tomorrow.",
  why:["نوع اول: <en>If + حال, will</en>.",
       "«ریختن پول» (انتقال) = <en>transfer</en>."],
  misses:[
    { en:"If you pour the money today, it will arrive tomorrow.", why:"ترجمهٔ «ریختن»؛ <en>transfer / send</en>." },
    { en:"If you will transfer the money today, it arrives tomorrow.", why:"<en>will</en> در جای غلط." }
  ]},
{ id:"c-1-10", slot:"c-1",
  fa:"اگر رئیس بپرسد، می‌گویم مریض بودی.",
  en:"If the boss asks, I'll say you were ill.",
  why:["احتمال واقعی: نوع اول. <en>say</en> بدون مفعول شخص.",
       "«مریض بودن» = <en>be ill / sick</en>."],
  misses:[
    { en:"If the boss will ask, I'll say you were ill.", why:"<en>will</en> در بند <en>if</en>." },
    { en:"If the boss asks, I'll tell you were ill.", why:"<en>tell</en> مفعول شخص می‌خواهد: <en>I'll tell him / her</en>، یا <en>say</en>." }
  ]},

/* ── شرطی نوع دوم ──────────────────────── */
{ id:"c-2-6", slot:"c-2",
  fa:"اگر وقت بیشتری داشتم، ورزش می‌کردم.",
  en:"If I had more time, I'd exercise.",
  why:["خلاف واقع حال: گذشته + <en>would</en>.",
       "فارسی هم «داشتم / می‌کردم» گفته؛ اینجا فارسی کمک می‌کند."],
  misses:[
    { en:"If I have more time, I'll exercise.", why:"نوع اول: گویی ممکن است وقت پیدا کنم." },
    { en:"If I would have more time, I would do sport.", why:"<en>would</en> در بند <en>if</en>؛ و <en>do sport</en> غیرطبیعی است." }
  ]},
{ id:"c-2-7", slot:"c-2",
  fa:"اگر پدرم زنده بود، الان خیلی خوشحال می‌شد.",
  en:"If my father were alive, he'd be so happy now.",
  why:["خلاف واقع حال: <en>were</en> + <en>would</en>.",
       "«زنده بودن» = <en>be alive</en> (صفت)."],
  misses:[
    { en:"If my father was live, he would be so happy.", why:"<en>live</en> صفت اسنادی نیست؛ <en>alive</en>." },
    { en:"If my father is alive, he will be so happy.", why:"نوع اول: گویی ممکن است زنده باشد." }
  ]},
{ id:"c-2-8", slot:"c-2",
  fa:"اگر نزدیک محل کارم زندگی می‌کردم، پیاده می‌رفتم.",
  en:"If I lived near work, I'd walk.",
  why:["خلاف واقع حال: گذشتهٔ ساده + <en>would</en>.",
       "<en>near work</en> بدون حرف تعریف."],
  misses:[
    { en:"If I was living near work, I'd go on foot.", why:"استمراری لازم نیست؛ <en>walk</en> طبیعی‌تر از <en>go on foot</en>." },
    { en:"If I live near work, I'd walk.", why:"زمان‌ها ناهماهنگ." }
  ]},
{ id:"c-2-9", slot:"c-2",
  fa:"اگر می‌توانستی هر جای دنیا زندگی کنی، کجا را انتخاب می‌کردی؟",
  en:"If you could live anywhere in the world, where would you choose?",
  why:["فرض خیالی: <en>could</en> (گذشتهٔ <en>can</en>) در بند <en>if</en>، <en>would</en> در سؤال.",
       "«هر جای» = <en>anywhere</en>."],
  misses:[
    { en:"If you can live anywhere in the world, where will you choose?", why:"نوع اول؛ خیالی بودن گم شد." },
    { en:"If you could live in every place of the world, where would you choose?", why:"<en>every place</en> یعنی همه‌جا با هم؛ <en>anywhere</en>." }
  ]},
{ id:"c-2-10", slot:"c-2",
  fa:"اگر گوشی‌ام این‌قدر کُند نبود، گوشی نو لازم نداشتم.",
  en:"If my phone weren't so slow, I wouldn't need a new one.",
  why:["خلاف واقع حال: <en>weren't</en> + <en>wouldn't</en>.",
       "«گوشی نو» تکراری است: <en>a new one</en>."],
  misses:[
    { en:"If my phone isn't so slow, I won't need a new one.", why:"نوع اول؛ ولی گوشی واقعاً کُند است." },
    { en:"If my phone wasn't so slow, I wouldn't need a new phone.", why:"<en>wasn't</en> در گفتار رایج است؛ تکرار <en>phone</en> سبک ضعیفی است." }
  ]},

/* ── شرطی نوع سوم ──────────────────────── */
{ id:"c-3-6", slot:"c-3",
  fa:"اگر ساعت را کوک کرده بودم، خواب نمی‌ماندم.",
  en:"If I'd set an alarm, I wouldn't have overslept.",
  why:["خلاف واقع گذشته: نوع سوم. «خواب نمی‌ماندم» مبهم است، ولی «کوک کرده بودم» گذشته را روشن کرده.",
       "«خواب ماندن» = <en>oversleep</en> (گذشته: <en>overslept</en>)."],
  misses:[
    { en:"If I set an alarm, I wouldn't oversleep.", why:"نوع دوم (یا اول): انگار دربارهٔ حال و آینده." },
    { en:"If I would have set an alarm, I wouldn't have slept.", why:"<en>would have</en> در بند <en>if</en>؛ و <en>sleep</en> خواب ماندن نیست." }
  ]},
{ id:"c-3-7", slot:"c-3",
  fa:"اگر بلیت‌ها را زودتر خریده بودیم، ارزان‌تر درمی‌آمد.",
  en:"If we'd bought the tickets earlier, they would have been cheaper.",
  why:["خلاف واقع گذشته: <en>had bought</en> + <en>would have been</en>.",
       "«درآمدن» (تمام شدن قیمت) اینجا فقط <en>be</en> است."],
  misses:[
    { en:"If we bought the tickets earlier, they would be cheaper.", why:"نوع دوم." },
    { en:"If we'd bought the tickets earlier, they would come out cheaper.", why:"ترجمهٔ «درمی‌آمد»، و زمان نتیجه گذشته نشده." }
  ]},
{ id:"c-3-8", slot:"c-3",
  fa:"اگر چتر برده بودی، خیس نمی‌شدی.",
  en:"If you'd taken an umbrella, you wouldn't have got wet.",
  why:["نوع سوم. «خیس شدن» = <en>get wet</en>، و در نوع سوم: <en>have got wet</en> (آمریکایی: <en>gotten</en>).",
       "«بردن چتر» = <en>take an umbrella</en>."],
  misses:[
    { en:"If you took an umbrella, you wouldn't get wet.", why:"نوع دوم." },
    { en:"If you'd brought an umbrella, you wouldn't have become wet.", why:"<en>bring</en> قابل قبول است؛ ولی <en>get wet</en> نه <x>become wet</x>." }
  ]},
{ id:"c-3-9", slot:"c-3",
  fa:"اگر آن روز آن آگهی را ندیده بودم، این کار را پیدا نمی‌کردم.",
  en:"If I hadn't seen that ad that day, I wouldn't have found this job.",
  why:["نوع سوم با شرط منفی: <en>hadn't seen</en>.",
       "«آن روز» گذشته را اعلام می‌کند."],
  misses:[
    { en:"If I didn't see that ad that day, I wouldn't find this job.", why:"نوع دوم." },
    { en:"If I hadn't seen that ad, I didn't find this job.", why:"نتیجه باید فرضی باشد: <en>wouldn't have found</en>." }
  ]},
{ id:"c-3-10", slot:"c-3",
  fa:"اگر زنگ زده بودی، می‌آمدم دنبالت.",
  en:"If you'd called, I'd have come and picked you up.",
  why:["نوع سوم. <en>I'd have</en> = <en>I would have</en>.",
       "«آمدن دنبال کسی» = <en>pick someone up</en>."],
  misses:[
    { en:"If you called, I'd come after you.", why:"نوع دوم، و <en>come after</en> یعنی تعقیب کردن!" },
    { en:"If you'd called, I'd have come to pick up you.", why:"ضمیر بین فعل و ذره: <en>pick you up</en>." }
  ]},

/* ── مختلط: شرط گذشته، نتیجهٔ حال ──────── */
{ id:"c-m1-6", slot:"c-m1",
  fa:"اگر دیروز کارم را تمام کرده بودم، امروز آزاد بودم.",
  en:"If I'd finished my work yesterday, I'd be free today.",
  why:["شرط دیروز → <en>had + V3</en>؛ نتیجهٔ امروز → <en>would + V</en>.",
       "هر طرف زمان خودش را تنظیم می‌کند."],
  misses:[
    { en:"If I'd finished my work yesterday, I would have been free today.", why:"نتیجهٔ امروز را به گذشته بردی." },
    { en:"If I finished my work yesterday, I'd be free today.", why:"شرط دیروز باید دو پله عقب برود." }
  ]},
{ id:"c-m1-7", slot:"c-m1",
  fa:"اگر به حرفم گوش داده بودی، الان این مشکل را نداشتیم.",
  en:"If you'd listened to me, we wouldn't have this problem now.",
  why:["شرط گذشته، نتیجهٔ حال («الان»): مختلط.",
       "<en>have</en> (داشتن مشکل) اینجا فعل اصلی است: <en>wouldn't have this problem</en>."],
  misses:[
    { en:"If you'd listened to me, we wouldn't have had this problem now.", why:"«الان» حال است." },
    { en:"If you listened to me, we wouldn't have this problem now.", why:"شرط باید گذشته باشد." }
  ]},
{ id:"c-m1-8", slot:"c-m1",
  fa:"اگر ماشین را نفروخته بودیم، الان مجبور نبودیم با تاکسی برویم.",
  en:"If we hadn't sold the car, we wouldn't have to take taxis now.",
  why:["فروش در گذشته → نتیجهٔ امروز: <en>hadn't sold</en> + <en>wouldn't have to</en>.",
       "<en>have to</en> (مجبور بودن) در شرطی: <en>would have to</en>."],
  misses:[
    { en:"If we hadn't sold the car, we wouldn't have had to take taxis now.", why:"نتیجه گذشته شد." },
    { en:"If we didn't sell the car, we mustn't take taxis now.", why:"شرط در زمان غلط، و <en>mustn't</en> یعنی ممنوع است." }
  ]},
{ id:"c-m1-9", slot:"c-m1",
  fa:"اگر پارسال رانندگی یاد گرفته بودم، الان مستقل‌تر بودم.",
  en:"If I'd learned to drive last year, I'd be more independent now.",
  why:["مختلط نوع ۱. «رانندگی یاد گرفتن» = <en>learn to drive</en>.",
       "<en>learned</en> و <en>learnt</en> هر دو درست‌اند."],
  misses:[
    { en:"If I'd learned driving last year, I would have been more independent now.", why:"<en>learn to drive</en> رایج‌تر است، و نتیجه باید حال بماند." },
    { en:"If I learned to drive last year, I'm more independent now.", why:"نه شرط فرضی است، نه نتیجه." }
  ]},
{ id:"c-m1-10", slot:"c-m1",
  fa:"اگر گوشی‌ام را شارژ کرده بودم، الان می‌توانستم آدرس را بهت بدهم.",
  en:"If I'd charged my phone, I could give you the address now.",
  why:["شرط گذشته، نتیجهٔ حال با توانایی: <en>could + V</en>.",
       "<en>could have given</en> یعنی در گذشته می‌توانستم."],
  misses:[
    { en:"If I'd charged my phone, I could have given you the address now.", why:"«الان» با <en>could have</en> جور نیست." },
    { en:"If I charged my phone, I can give you the address.", why:"نوع اول: یعنی اگر الان شارژ کنم." }
  ]},

/* ── مختلط: شرط حال، نتیجهٔ گذشته ──────── */
{ id:"c-m2-6", slot:"c-m2",
  fa:"اگر پولدار بودم، آن خانه را خریده بودم.",
  en:"If I were rich, I would have bought that house.",
  why:["پولدار نبودن حالت همیشگی (حال)؛ خانه فرصتی در گذشته بود: <en>were</en> + <en>would have bought</en>.",
       "اگر فقط آن موقع پول نداشتی: <en>If I'd been rich…</en>."],
  misses:[
    { en:"If I were rich, I would buy that house.", why:"یعنی الان می‌خریدم — ولی فرصتش گذشته." },
    { en:"If I was rich, I bought that house.", why:"نتیجه فرضی نیست." }
  ]},
{ id:"c-m2-7", slot:"c-m2",
  fa:"اگر قدم بلندتر بود، در تیم بسکتبال مدرسه انتخاب شده بودم.",
  en:"If I were taller, I would have been picked for the school basketball team.",
  why:["قد ویژگی همیشگی است (حال)؛ انتخاب تیم در گذشته: مختلط نوع ۲. نتیجه مجهول: <en>would have been picked</en>.",
       "«قد بلندتر» = <en>taller</en>."],
  misses:[
    { en:"If my height were longer, I would have been picked.", why:"قد با <en>tall</en> سنجیده می‌شود، نه <x>long</x>." },
    { en:"If I were taller, I would be picked for the school team.", why:"یعنی الان — ولی مدرسه تمام شده." }
  ]},
{ id:"c-m2-8", slot:"c-m2",
  fa:"اگر رانندگی بلد بودم، دیشب خودم می‌رفتم فرودگاه.",
  en:"If I could drive, I would have gone to the airport myself last night.",
  why:["ناتوانی فعلی (<en>could</en>)، نتیجه در «دیشب»: <en>would have gone</en>.",
       "«خودم» = <en>myself</en>."],
  misses:[
    { en:"If I could drive, I would go to the airport myself last night.", why:"<en>would go</en> با «دیشب» جور نیست." },
    { en:"If I knew driving, I would have gone to airport myself.", why:"«بلد بودن» مهارت = <en>can</en>؛ و <en>the airport</en>." }
  ]},
{ id:"c-m2-9", slot:"c-m2",
  fa:"اگر این‌قدر تنبل نبودی، تا حالا کار را تمام کرده بودی.",
  en:"If you weren't so lazy, you would have finished the job by now.",
  why:["تنبلی ویژگی همیشگی (حال)؛ «تا حالا تمام کرده بودی» نتیجه‌ای است که باید تا الان رخ می‌داد: <en>would have finished … by now</en>.",
       "<en>by now</en> = تا الان."],
  misses:[
    { en:"If you weren't so lazy, you would finish the job by now.", why:"<en>by now</en> کامل می‌خواهد." },
    { en:"If you hadn't been so lazy, you would have finished by now.", why:"نوع سوم؛ فقط اگر تنبلی مال گذشته بوده." }
  ]},
{ id:"c-m2-10", slot:"c-m2",
  fa:"اگر اهل ریسک بودم، آن پیشنهاد را قبول کرده بودم.",
  en:"If I were more of a risk-taker, I would have accepted that offer.",
  why:["شخصیت (حال) → تصمیم گذشته: مختلط نوع ۲.",
       "«اهل ریسک» = <en>a risk-taker</en>؛ <en>more of a</en> = «بیشتر اهلِ…»."],
  misses:[
    { en:"If I were a risk-taker, I would accept that offer.", why:"نتیجه باید گذشته باشد؛ پیشنهاد رفته." },
    { en:"If I were a person of risk, I would have accepted.", why:"ترجمهٔ «اهل ریسک»؛ <en>risk-taker</en>." }
  ]},

/* ── unless و provided that ─────────────── */
{ id:"c-unl-6", slot:"c-unl",
  fa:"شام را در حیاط می‌خوریم، مگر اینکه باران بیاید.",
  en:"We'll have dinner in the garden unless it rains.",
  why:["«مگر اینکه» = <en>unless</en>، و بعدش حال ساده.",
       "«حیاط» = <en>garden</en> (بریتانیایی) یا <en>yard</en> (آمریکایی)."],
  misses:[
    { en:"We'll have dinner in the garden unless it will rain.", why:"<en>will</en> بعد از <en>unless</en>." },
    { en:"We'll have dinner in the garden unless it doesn't rain.", why:"منفی دوگانه: معنا برعکس." }
  ]},
{ id:"c-unl-7", slot:"c-unl",
  fa:"اگر بلیت نداشته باشید، نمی‌توانید وارد شوید.",
  en:"You can't come in unless you have a ticket.",
  why:["<en>if … not</en> = <en>unless</en>. فارسی «نداشته باشید» منفی است؛ بعد از <en>unless</en> مثبت: <en>have</en>.",
       "ترتیب انگلیسی اغلب نتیجه را جلو می‌آورد."],
  misses:[
    { en:"Unless you don't have a ticket, you can't come in.", why:"منفی دوگانه." },
    { en:"You can't enter unless you will have a ticket.", why:"<en>will</en> بعد از <en>unless</en>." }
  ],
  alt:"<en>You can't come in if you don't have a ticket.</en>"},
{ id:"c-unl-8", slot:"c-unl",
  fa:"می‌توانی مهمانی بگیری، به شرطی که تا نیمه‌شب تمام شود.",
  en:"You can have a party, as long as it's over by midnight.",
  why:["شرط اجازه: <en>as long as / provided</en>. «تمام شدن» = <en>be over</en>.",
       "ضرب‌الاجل با <en>by</en>."],
  misses:[
    { en:"You can have a party, as long as it will finish until midnight.", why:"<en>will</en> و <en>until</en>." },
    { en:"You can take a party, provided it finishes at midnight.", why:"<en>have / throw a party</en>؛ و <en>at</en> یعنی دقیقاً ساعت ۱۲." }
  ]},
{ id:"c-unl-9", slot:"c-unl",
  fa:"تا وقتی حقوقم سر وقت بیاید، شکایتی ندارم.",
  en:"As long as I get paid on time, I've got no complaints.",
  why:["«تا وقتی» شرطی = <en>as long as</en>، نه <x>until</x>.",
       "«حقوقم بیاید» = <en>I get paid</en> (get-passive)."],
  misses:[
    { en:"Until my salary comes on time, I have no complaint.", why:"<en>until</en> زمانی است؛ معنا برعکس." },
    { en:"As long as my salary will come on time, I don't have complaints.", why:"<en>will</en> بعد از <en>as long as</en>." }
  ]},
{ id:"c-unl-10", slot:"c-unl",
  fa:"تا کسی نپرسد، چیزی نمی‌گویم.",
  en:"I won't say anything unless someone asks.",
  why:["«تا … نپرسد» = مگر اینکه بپرسد: <en>unless</en> با فعل مثبت.",
       "<en>someone</en> مفرد: <en>asks</en>."],
  misses:[
    { en:"I won't say anything until someone doesn't ask.", why:"ترجمهٔ «تا … نپرسد»؛ در انگلیسی بی‌معناست." },
    { en:"I won't say anything unless someone doesn't ask.", why:"منفی دوگانه." }
  ],
  alt:"<en>I won't say anything until someone asks.</en> — با <en>until</en> و فعل مثبت هم درست است."},

/* ── were to ───────────────────────────── */
{ id:"c-wt-6", slot:"c-wt",
  fa:"اگر فرضاً فردا برق کل شهر برود، چه کار می‌کنی؟",
  en:"If the power were to go off across the whole city tomorrow, what would you do?",
  why:["فرض دور در آینده: <en>were to + V</en>، نتیجه <en>would</en>.",
       "«کل شهر» = <en>across the whole city</en>."],
  misses:[
    { en:"If the power would go off tomorrow, what would you do?", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If the power were to go off tomorrow, what will you do?", why:"نتیجه باید <en>would</en> باشد." }
  ]},
{ id:"c-wt-7", slot:"c-wt",
  fa:"اگر فرضاً بخواهی شغلت را عوض کنی، چه کاری می‌کنی؟",
  en:"If you were to change careers, what would you do?",
  why:["سؤال فرضی درباره آینده: <en>were to</en>.",
       "«عوض کردن شغل» (حرفه) = <en>change careers</en> (با <en>s</en>)."],
  misses:[
    { en:"If you want to change your job, what will you do?", why:"واقعی و نزدیک؛ فرض دور گم شد." },
    { en:"If you were change careers, what would you do?", why:"<en>to</en> جا افتاده." }
  ]},
{ id:"c-wt-8", slot:"c-wt",
  fa:"اگر فرضاً قیمت بنزین سه برابر شود، مردم ماشین را کنار می‌گذارند؟",
  en:"If petrol prices were to triple, would people give up their cars?",
  why:["فرض دور: <en>were to</en>. <en>triple</en> فعل است (سه برابر شدن).",
       "«کنار گذاشتن» = <en>give up</en>."],
  misses:[
    { en:"If petrol prices were triple, would people give up their cars?", why:"یعنی الان سه برابر است." },
    { en:"If petrol prices were to triple, will people put aside their cars?", why:"<en>would</en> لازم است، و <en>give up</en> طبیعی‌تر." }
  ]},
{ id:"c-wt-9", slot:"c-wt",
  fa:"اگر فرضاً کسی کلید خانه‌ات را پیدا کند، می‌تواند وارد شود؟",
  en:"If someone were to find your house key, could they get in?",
  why:["فرض دور + توانایی در نتیجه: <en>could</en>.",
       "<en>they</en> برای <en>someone</en>."],
  misses:[
    { en:"If someone would find your key, could they get in?", why:"<en>would</en> در بند <en>if</en>." },
    { en:"If someone were to find your house key, can they get in?", why:"نتیجه باید فرضی باشد: <en>could</en>." }
  ]},
{ id:"c-wt-10", slot:"c-wt",
  fa:"اگر فرضاً مدرسه‌ها یک ماه تعطیل شوند، بچه‌ها را چه کار کنیم؟",
  en:"If the schools were to close for a month, what would we do with the kids?",
  why:["فرض دور در آینده: <en>were to close</en>.",
       "«چه کار کنیم با» = <en>what would we do with</en>."],
  misses:[
    { en:"If the schools were to be closed for a month, what do we do?", why:"مجهول هم ممکن است، ولی نتیجه باید <en>would</en> بگیرد." },
    { en:"If the schools would close for a month, what would we do?", why:"<en>would</en> در بند <en>if</en>." }
  ]},

/* ── شرطی وارونه ───────────────────────── */
{ id:"c-inv-6", slot:"c-inv",
  fa:"اگر زودتر خبر داده بودید، اتاق را برایتان نگه می‌داشتیم.",
  en:"Had you told us earlier, we would have kept the room for you.",
  why:["نوع سوم وارونه: <en>Had + S + V3</en>. رسمی (مثلاً هتل).",
       "«نگه داشتن» (رزرو) = <en>keep / hold</en>."],
  misses:[
    { en:"Had you told us earlier, we would keep the room for you.", why:"نتیجه باید گذشته باشد." },
    { en:"Did you tell us earlier, we would have kept the room.", why:"وارونگی با <en>did</en> نمی‌آید." }
  ]},
{ id:"c-inv-7", slot:"c-inv",
  fa:"اگر احیاناً دیر کردم، منتظرم نمانید.",
  en:"Should I be late, don't wait for me.",
  why:["<en>Should + S + V</en> = اگر احیاناً. فعل بعد از <en>should</en> ساده: <en>be</en>.",
       "«دیر کردم» باز شکل گذشته با معنای آینده."],
  misses:[
    { en:"Should I am late, don't wait for me.", why:"بعد از <en>should</en>، <en>be</en>." },
    { en:"Should I was late, don't wait me.", why:"زمان غلط و <en>wait for</en>." }
  ],
  alt:"<en>If I'm late, don't wait for me.</en>"},
{ id:"c-inv-8", slot:"c-inv",
  fa:"اگر خانه‌مان نزدیک‌تر بود، بیشتر به دیدنتان می‌آمدیم.",
  en:"Were our house closer, we'd visit you more often.",
  why:["نوع دوم وارونه: <en>Were + S + صفت</en>. رسمی و ادبی.",
       "«بیشتر» (دفعات) = <en>more often</en>."],
  misses:[
    { en:"Was our house closer, we'd visit you more.", why:"فقط <en>were</en> وارونه می‌شود." },
    { en:"Were our house closer, we visit you more often.", why:"نتیجه <en>would</en> می‌خواهد." }
  ],
  alt:"<en>If our house were closer, we'd visit you more often.</en>"},
{ id:"c-inv-9", slot:"c-inv",
  fa:"اگر احیاناً کالا آسیب‌دیده به دستتان رسید، ظرف هفت روز خبر دهید.",
  en:"Should the item arrive damaged, please let us know within seven days.",
  why:["زبان رسمیِ فروشگاه: <en>Should + S + V</en>. «ظرف» = <en>within</en>.",
       "<en>arrive damaged</en>: فعل + صفت حالت."],
  misses:[
    { en:"Should the item arrives damaged, let us know in seven days.", why:"بعد از <en>should</en> فعل ساده؛ و <en>in</en> یعنی بعد از هفت روز." },
    { en:"Should the item be damaged arrived, let us know.", why:"ساختار درهم؛ <en>arrive damaged</en>." }
  ]},
{ id:"c-inv-10", slot:"c-inv",
  fa:"اگر آن تماس را نگرفته بودم، هیچ‌وقت خبردار نمی‌شدم.",
  en:"Had I not got that call, I would never have found out.",
  why:["نوع سوم وارونهٔ منفی: <en>Had I not + V3</en> (بدون مخفف).",
       "«خبردار شدن» = <en>find out</en>."],
  misses:[
    { en:"Hadn't I got that call, I would never have found out.", why:"مخفف در وارونگی شرطی نمی‌آید." },
    { en:"Had I not got that call, I would never find out.", why:"نتیجه باید گذشته باشد." }
  ],
  alt:"<en>If I hadn't got that call, I would never have found out.</en>"},

/* ── but for و otherwise ────────────────── */
{ id:"c-bf-6", slot:"c-bf",
  fa:"اگر نقشهٔ گوشی نبود، گم شده بودیم.",
  en:"But for the map on my phone, we would have got lost.",
  why:["<en>But for + اسم</en>، و ماجرا در گذشته: <en>would have got lost</en>.",
       "گفتاری‌تر: <en>Without the map on my phone…</en>"],
  misses:[
    { en:"But for the map on my phone, we would get lost.", why:"گم شدن در گذشته ممکن بود؛ یک پله کم." },
    { en:"If it wasn't the map on my phone, we would have lost.", why:"<en>If it hadn't been for</en>، و <en>get lost</en> نه <x>lose</x>." }
  ],
  alt:"<en>If it hadn't been for the map on my phone…</en>"},
{ id:"c-bf-7", slot:"c-bf",
  fa:"اگر به‌خاطر بچه‌ها نبود، سال‌ها پیش از این شهر رفته بودیم.",
  en:"If it hadn't been for the kids, we would have left this city years ago.",
  why:["<en>If it hadn't been for + اسم</en> برای گذشته.",
       "«سال‌ها پیش» = <en>years ago</en>."],
  misses:[
    { en:"If it wasn't because of the kids, we would leave this city years ago.", why:"ترجمهٔ «به‌خاطر»، و زمان نتیجه." },
    { en:"If it hadn't been for the kids, we would have left this city before years.", why:"<en>years ago</en>." }
  ]},
{ id:"c-bf-8", slot:"c-bf",
  fa:"زود بخواب، وگرنه فردا خسته‌ای.",
  en:"Go to bed early; otherwise, you'll be tired tomorrow.",
  why:["<en>otherwise</en> + نتیجهٔ واقعی آینده: <en>will</en>.",
       "«زود خوابیدن» = <en>go to bed early</en>."],
  misses:[
    { en:"Go to bed early; otherwise, you would be tired tomorrow.", why:"<en>would</en> خیالی است؛ اینجا خطر واقعی." },
    { en:"Sleep early, if not you are tired tomorrow.", why:"<en>otherwise / or</en>، و آینده <en>will</en>." }
  ],
  alt:"<en>Go to bed early, or you'll be tired tomorrow.</en>"},
{ id:"c-bf-9", slot:"c-bf",
  fa:"خوشبختانه بیمه داشتیم؛ وگرنه باید کل هزینه را خودمان می‌دادیم.",
  en:"Luckily we had insurance; otherwise, we would have had to pay the whole cost ourselves.",
  why:["جملهٔ اول گذشته است، پس نتیجهٔ خیالیِ <en>otherwise</en>: <en>would have had to</en>.",
       "«باید … می‌دادیم» = <en>would have had to pay</en>."],
  misses:[
    { en:"Luckily we had insurance; otherwise, we would have to pay the whole cost.", why:"یک پله کم عقب رفته." },
    { en:"Luckily we had insurance; otherwise, we had to pay the whole cost.", why:"یعنی واقعاً پرداختیم!" }
  ]},
{ id:"c-bf-10", slot:"c-bf",
  fa:"اگر اجاره‌ها نبود، این شهر عالی بود.",
  en:"If it weren't for the rents, this city would be perfect.",
  why:["<en>If it weren't for + اسم</en>: خلاف واقع حال.",
       "«عالی» = <en>perfect / great</en>."],
  misses:[
    { en:"If it isn't for the rents, this city will be perfect.", why:"اجاره‌ها واقعاً هستند؛ ساختار واقعی بی‌معناست." },
    { en:"If it hadn't been for the rents, this city would have been perfect.", why:"مال گذشته است؛ اجاره‌ها الان هستند." }
  ],
  alt:"<en>But for the rents, this city would be perfect.</en>"}

]);
