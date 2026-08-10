(function () {
  var DICT = {
    "nav.home": ["Home", "الرئيسية"],
    "nav.about": ["About", "من نحن"],
    "nav.services": ["Services", "خدماتنا"],
    "nav.software": ["Software Development", "تطوير البرمجيات"],
    "nav.impact": ["Impact", "إنجازاتنا"],
    "nav.clients": ["Clients", "عملاؤنا"],
    "nav.team": ["Team", "فريق العمل"],
    "nav.blog": ["Blog", "المقالات"],
    "nav.contact": ["Contact", "تواصل معنا"],
    "nav.cta": ["Get a quote", "اطلب عرض سعر"],

    "foot.tagline": ["Egypt-based events, broadcast technology, and software development company serving medical, corporate, and governmental clients since 2020.", "شركة مصرية تعمل في تنظيم الفعاليات وتقنيات البث وتطوير البرمجيات، ونخدم منذ عام 2020 عملاء من القطاع الطبي وقطاع الشركات والجهات الحكومية."],
    "foot.company": ["Company", "الشركة"],
    "foot.services": ["Services", "الخدمات"],
    "foot.contact": ["Contact", "تواصل معنا"],
    "foot.rights": ["© 2022–2026 IDEA for Conference Organizing (IDEA-EG). All rights reserved.", "© 2022–2026 شركة أيديا لتنظيم المؤتمرات. جميع الحقوق محفوظة."],
    "foot.oscredit": ["A project of the IDEA-EG Operating System", "A project of the IDEA-EG Operating System"],

    "home.eyebrow": ["EVENTS · BROADCAST TECH · SOFTWARE", "فعاليات · تقنيات بث · برمجيات"],
    "home.h1": ["We build the events, the broadcast systems, and the software behind them.", "بننظّم الفعاليات، وبنبني أنظمة البث والبرمجيات اللي بتشغّلها من خلفها."],
    "home.lead": ["IDEA-EG is an Egyptian company with three practices under one roof: full-scale conference & event production, live broadcast/media technology, and custom software development — web platforms, mobile apps and business systems built in-house.", "أيديا مصر شركة مصرية تجمع تحت سقف واحد ثلاثة تخصصات: تنظيم وإنتاج المؤتمرات والفعاليات، وتقنيات البث والإعلام المباشر، وتطوير البرمجيات المخصصة، بدءًا من منصات الويب وتطبيقات الموبايل وحتى أنظمة إدارة الأعمال، وكل ده بأيدي فريقنا من غير أي تعهيد خارجي."],
    "home.cta1": ["Start a project", "ابدأ مشروعك"],
    "home.cta2": ["Explore our services", "تصفّح خدماتنا"],
    "home.stat1": ["Events delivered", "فعالية أُقيمت بنجاح"],
    "home.stat2": ["Live surgical broadcasts", "عملية جراحية تم بثّها مباشرة"],
    "home.stat3": ["Years in operation", "سنوات من الخبرة في السوق"],
    "home.what": ["What we do", "مجالات عملنا"],
    "home.h2-1": ["Three practices, one team", "ثلاثة تخصصات، وفريق واحد ينفّذها"],
    "home.p-1": ["Most agencies pick one lane. We run three — because the events we build increasingly need the software and broadcast systems to match.", "أغلب الشركات بتتخصص في مجال واحد بس. إحنا اخترنا نجمع بين تلاتة، لأن الفعاليات اللي بننظّمها بقت محتاجة برمجيات وأنظمة بث توازيها في نفس المستوى."],
    "home.why": ["Why software, from an events company", "ليه شركة فعاليات بتبني برمجيات؟"],
    "home.h2-2": ["The technology behind the stage is our own code.", "التقنية اللي شغّالة خلف كل مسرح، أكواد كتبها فريقنا بنفسه."],
    "home.p-2": ["Every registration platform, badge scanner, live-analytics dashboard and control-room tool we use on-site was built by our own development team. That in-house capability now serves clients directly — as custom web apps, mobile apps, and internal management systems.", "منصات التسجيل، وأجهزة قراءة الباجات، ولوحات التحليل المباشر، وأدوات غرفة التحكم اللي بنستخدمها في كل فعالية، كلها من تصميم وبرمجة فريقنا الداخلي. وهي نفس الخبرة اللي بقينا نقدّمها دلوقتي للعملاء بشكل مباشر، سواء تطبيق ويب أو موبايل أو نظام إدارة داخلي مخصص."],
    "home.seesoft": ["See software services", "اطّلع على خدمات البرمجة"],
    "home.trusted": ["Trusted by", "من عملائنا"],
    "home.h2-3": ["Pharma, medical societies & government bodies", "شركات أدوية، وجمعيات طبية، وجهات حكومية"],
    "home.viewclients": ["View all clients & partners", "شاهد كل العملاء والشركاء"],
    "home.h2-4": ["Have an event, a broadcast, or a product to build?", "عندك فعالية تحتاج تنظيم، أو بث تحتاج تجهيزه، أو منتج تحتاج تبنيه؟"],
    "home.p-4": ["Tell us what you're working on — we'll tell you which of our teams should be in the room.", "احكيلنا عن مشروعك، وإحنا هنحدد أنسب فريق عندنا يشتغل معاك عليه."],
    "home.getintouch": ["Get in touch", "تواصل معنا"],

    "team.eyebrow": ["Meet the team", "تعرّف على الفريق"],
    "team.h1": ["The people behind every stage, screen and system", "الناس اللي بيقفوا خلف كل مسرح، وكل شاشة، وكل نظام"],
    "team.lead": ["From project managers to a coding manager, PR to speaker support — the same team plans your event, runs the broadcast, and ships the software.", "من مديري المشاريع إلى مدير قسم البرمجة، ومن العلاقات العامة إلى دعم المتحدثين — نفس الفريق ده هو اللي بيخطط لفعاليتك، وبيدير البث، وبيسلّم البرنامج جاهز."],
    "team.extra.label": ["engineers, accountants and technicians working behind every event", "مهندسًا ومحاسبًا وفنيًا بيشتغلوا خلف الكواليس على كل فعالية"],

    "clients.eyebrow": ["Trusted by", "من عملائنا"],
    "clients.h1": ["Clients & partners", "عملاؤنا وشركاؤنا"],
    "clients.lead": ["Pharmaceutical leaders, medical societies, universities, hospitals and government ministries across Egypt and the region.", "من كبرى شركات الأدوية والجمعيات الطبية، إلى الجامعات والمستشفيات والوزارات الحكومية، في مصر والمنطقة."],

    "services.eyebrow": ["What we do", "مجالات عملنا"],
    "services.h1": ["Four practices, one accountable team.", "أربعة تخصصات، وفريق واحد مسؤول عن التنفيذ."],
    "services.lead": ["From a live surgery broadcast to a customer-facing mobile app, every service below is delivered by an in-house team — no outsourcing, no handoffs.", "من بث جراحة مباشرة على الهواء، لتطبيق موبايل بيستخدمه عملاؤك، كل خدمة من اللي هتلاقيها تحت دي بينفّذها فريقنا بنفسه، من غير تعهيد لأي طرف خارجي."],
    "services.quickhead": ["At a glance — what's included in every proposal", "نظرة سريعة على اللي بيتضمنه كل عرض سعر"],
    "services.included": ["Included in proposals", "مشمول في عروض الأسعار"],
    "services.notsure.h2": ["Not sure which service you need?", "مش متأكد أنهي خدمة اللي محتاجها؟"],
    "services.notsure.p": ["Describe the project and we'll scope the right team — often more than one practice is involved.", "احكيلنا عن مشروعك بس، وإحنا هنحدد الفريق المناسب. في الغالب أكتر من تخصص بيشتغل مع بعض على نفس المشروع."],
    "services.notsure.btn": ["Talk to us", "تواصل معنا"],
    "services.explore": ["Explore in depth", "تفاصيل أكتر"],
    "services.fourcore": ["Our four core practices", "تخصصاتنا الأربعة الرئيسية"],
    "services.readmore": ["Read more →", "اضغط هنا ←"],

    "about.eyebrow": ["About IDEA-EG", "عن أيديا مصر"],
    "about.h1": ["An events company that also builds software.", "شركة فعاليات، ودلوقتي بيت برمجيات كمان."],
    "about.lead": ["Founded in Egypt, IDEA-EG grew from live medical-conference production into a full-service company spanning event management, broadcast technology, and custom software — serving pharmaceutical, medical, governmental and corporate clients across Egypt and Saudi Arabia.", "أيديا مصر شركة مصرية بدأت في إنتاج المؤتمرات الطبية المباشرة، وكبرت لتصبح شركة متكاملة الخدمات تجمع إدارة الفعاليات وتقنيات البث والبرمجيات المخصصة، وبنخدم دلوقتي عملاء من قطاع الأدوية والطب والحكومة والشركات في مصر والسعودية."],
    "about.who": ["Who we are", "مين إحنا"],
    "about.who.p": ["IDEA-EG is a leading Egyptian company in conference and event management, with a distinguished specialization in the medical sector. Backed by extensive experience and a wide network of professional connections, we deliver a seamless integration of science, technology, comfort and engagement — creating events that are both informative and memorable, supported by the software and broadcast systems we build in-house.", "أيديا مصر شركة رائدة في إدارة المؤتمرات والفعاليات، وليها تخصص واضح في القطاع الطبي. بفضل خبرتنا الواسعة وشبكة علاقاتنا المهنية، بنقدّم مزيج متكامل من العلم والتقنية والراحة والتفاعل، عشان نطلّع فعاليات مفيدة وفعلًا محفورة في الذاكرة، مدعومة ببرمجيات وأنظمة بث بنبنيها بأيدينا."],
    "about.vision": ["Our vision", "رؤيتنا"],
    "about.vision.p": ["To be the region's benchmark for excellence in event management and event technology, with deep specialized expertise in medical, scientific and governmental sectors.", "إننا نبقى المرجع الأول في المنطقة للتميز في إدارة الفعاليات وتقنياتها، بخبرة عميقة ومتخصصة في القطاعات الطبية والعلمية والحكومية."],
    "about.mission": ["Our mission", "رسالتنا"],
    "about.mission.p": ["We bring science to life through immersive, well-orchestrated events, and we back every event with the software and broadcast infrastructure that make it run without failure — delivering scientific impact, cultural exchange, comfort and meaningful connections.", "بنحوّل العلم لتجربة حية من خلال فعاليات منظمة بعناية، وبندعم كل فعالية ببنية تحتية من البرمجيات وأنظمة البث بتضمن إن كل حاجة تمشي بدون أي عطل، عشان نوصّل أثر علمي حقيقي، وتبادل ثقافي، وراحة، وعلاقات ذات معنى."],
    "about.founder": ["Message from the founder", "كلمة المؤسس"],
    "about.founder.h2": ["A note from Karim Taha, Founder & CEO", "كلمة من كريم طه، المؤسس والرئيس التنفيذي"],
    "about.founder.p": ["\"At IDEA-EG, we believe that every event is more than just a gathering — it's a powerful opportunity to inform, inspire and connect. From the very beginning, our mission has been clear: to bring science to life through events that balance precision, innovation and a human touch. With every conference we organize, every screen we light up, every voice we amplify, and every system we build, we're helping build bridges between people, ideas and breakthroughs.\"", "\"في أيديا مصر، إحنا مؤمنين إن أي فعالية مش مجرد تجمّع، دي فرصة حقيقية للتوعية والإلهام وبناء العلاقات. من أول يوم، رسالتنا كانت واضحة: نحوّل العلم لواقع ملموس من خلال فعاليات توازن بين الدقة والابتكار واللمسة الإنسانية. مع كل مؤتمر بننظمه، وكل شاشة بننوّرها، وكل صوت بنوصّله، وكل نظام بنبنيه، إحنا بنساهم في بناء جسور بين الناس والأفكار والإنجازات العلمية.\""],

    "contact.eyebrow": ["Let's talk", "يلا نتكلم"],
    "contact.h1": ["Contact IDEA-EG", "تواصل مع أيديا مصر"],
    "contact.lead": ["Whether it's a conference, a broadcast, or a piece of software — tell us what you're building.", "سواء كان اللي محتاجه مؤتمر، أو بث مباشر، أو برنامج، احكيلنا عن مشروعك."],
    "contact.name": ["Name", "الاسم"],
    "contact.phone": ["Phone number", "رقم التليفون"],
    "contact.email": ["Email", "البريد الإلكتروني"],
    "contact.msg": ["What are you working on?", "احكيلنا شغال على إيه"],
    "contact.send": ["Send message", "إرسال الرسالة"],
    "contact.cairo": ["Cairo — Head Office", "القاهرة - المقر الرئيسي"],
    "contact.portsaid": ["Port Said Branch", "فرع بورسعيد"],
    "contact.jeddah": ["Jeddah, Saudi Arabia", "جدة، المملكة العربية السعودية"],
    "contact.email.label": ["Email", "البريد الإلكتروني"],

    "sw.eyebrow": ["Service 04 · In-house engineering", "الخدمة 04 · فريق هندسي داخلي"],
    "sw.h1": ["Software development", "تطوير البرمجيات"],
    "sw.lead": ["IDEA-EG isn't only a conference and audio-visual company — we're also a software house. Our engineering team designs and ships the web platforms, mobile apps and business systems that run behind our own events, and we build the same calibre of software for outside clients: SaaS products, internal management tools, and automation that removes manual work.", "أيديا مصر مش بس شركة مؤتمرات وسمعيات بصرية، إحنا كمان بيت برمجيات بمعنى الكلمة. فريق الهندسة عندنا هو اللي بيصمم ويبني منصات الويب وتطبيقات الموبايل وأنظمة إدارة الأعمال اللي بتشغّل فعالياتنا من الخلف، وبنقدّم نفس المستوى ده من البرمجيات لعملاء من برّه الشركة: منتجات SaaS، وأدوات إدارة داخلية، وحلول أتمتة بتوفّر عليك الشغل اليدوي."],
    "sw.cta": ["Discuss a software project", "ناقش معانا مشروعك البرمجي"],
    "sw.whatwebuild": ["What we build", "إيه اللي بنبنيه"],
    "sw.h2": ["Web, mobile and the systems in between", "مواقع، تطبيقات موبايل، وكل الأنظمة اللي بينهم"],
    "sw.why": ["Why an events company builds software", "ليه شركة فعاليات بتبني برمجيات"],
    "sw.h2-2": ["We build software because our events demanded it first.", "بنينا قسم برمجيات لأن فعالياتنا هي أول من احتاجه."],
    "sw.p2": ["Managing 650+ events, live surgical broadcasts and multi-branch operations across Egypt and Saudi Arabia meant off-the-shelf tools weren't enough. So we built our own — registration platforms, control-room software, license-managed client portals, inventory and treasury systems. That same engineering discipline is now available to any business that needs software built and supported by a team that ships under real deadline pressure.", "لما بقينا ندير أكتر من 650 فعالية، وبثوث جراحية مباشرة، وفروع متعددة بين مصر والسعودية، اكتشفنا إن الأدوات الجاهزة في السوق مش كفاية. فقررنا نبني أدواتنا بنفسنا: منصات تسجيل، وبرمجيات لغرف التحكم، وبوابات عملاء بتراخيص مُدارة، وأنظمة مخزون وخزينة. ونفس الانضباط الهندسي ده بقى متاح دلوقتي لأي شركة محتاجة برمجيات بيبنيها ويدعمها فريق متعوّد على الشغل تحت ضغط مواعيد حقيقية."],
    "sw.h2-3": ["Have a product idea or an internal process to automate?", "عندك فكرة منتج، أو عملية داخلية عاوز تؤتمتها؟"],
    "sw.p3": ["Tell us what the software needs to do — we'll scope it like we scope a live broadcast: no room for failure.", "احكيلنا المطلوب من البرنامج يعمل إيه بالظبط، وإحنا هنخطط له بنفس الدقة اللي بنخطط بيها لبث مباشر، لأن مفيش مجال للخطأ."],
    "sw.cta2": ["Start the conversation", "ابدأ الحوار معانا"],

    "impact.eyebrow": ["Since 2020", "منذ عام 2020"],
    "impact.h1": ["Five years of pioneering hybrid & virtual event solutions across MENA", "خمس سنوات من الريادة في حلول الفعاليات الهجينة والافتراضية بمنطقة الشرق الأوسط وشمال أفريقيا"],
    "impact.lead": ["150 physical conferences, an industry-record broadcast, and 30 virtual studios built when the world needed them most.", "150 مؤتمرًا حضوريًا، ورقم قياسي في البث المباشر، و30 استوديو افتراضي بنيناهم بالظبط في الوقت اللي كان العالم محتاج فيه لينا أكتر من أي وقت."],
    "impact.quote": ["\"When the world shut down, we built 30 virtual studios. When surgeons needed to teach, we linked six operating rooms live.\"", "\"لما العالم كله وقف، بنينا 30 استوديو افتراضي. ولما الجراحين احتاجوا يعلّموا طلابهم، ربطنا 6 غرف عمليات مع بعض على الهواء مباشرة.\""],

    "media.eyebrow": ["Service 02", "الخدمة 02"],
    "media.h1": ["Media tech & broadcast infrastructure", "تقنيات الإعلام والبنية التحتية للبث"],
    "media.lead": ["The technical backbone behind every conference we run — including our industry-record simultaneous live surgery broadcast: six operating rooms streaming 4K video with zero latency to a single hall.", "العمود الفقري الفني اللي بيشغّل كل مؤتمر بننظمه، وعلى رأسه رقمنا القياسي في بث جراحي متزامن: ست غرف عمليات ببث فيديو بجودة 4K وبدون أي تأخير لقاعة واحدة."],

    "events.eyebrow": ["Service 01", "الخدمة 01"],
    "events.h1": ["Event management & production", "إدارة وإنتاج الفعاليات"],
    "events.lead": ["Complete planning and execution — from defining objectives and concept development to budget management and post-event reporting.", "تخطيط وتنفيذ كامل، من تحديد الأهداف وتطوير الفكرة، وصولًا لإدارة الميزانية وإعداد تقرير ما بعد الفعالية."],
    "events.cta.h2": ["Planning a conference or corporate event?", "بتخطط لمؤتمر أو فعالية خاصة بشركتك؟"],
    "events.cta.btn": ["Request a proposal", "اطلب عرض سعر"],

    "brand.eyebrow": ["Service 03", "الخدمة 03"],
    "brand.h1": ["Branding, digital & experiential design", "الهوية البصرية والتصميم الرقمي والتفاعلي"],
    "brand.lead": ["Identity, physical space and digital reach, designed together so an event looks and feels consistent from the invitation to the exhibition floor.", "الهوية، والمساحة الفعلية، والحضور الرقمي، بنصممهم مع بعض عشان تحس إن الفعالية متناسقة من أول الدعوة لحد أرض المعرض."],

    "blog.eyebrow": ["Insights", "رؤى ومقالات"],
    "blog.h1": ["News & insights from IDEA-EG", "أخبار ومقالات من أيديا مصر"],
    "blog.lead": ["Notes from the field — events we've run, technology we've built, and what we've learned along the way.", "ملاحظات من أرض الواقع، عن فعاليات نفّذناها، وتقنيات بنيناها، ودروس اتعلمناها في الطريق."],
    "blog.empty": ["No articles published yet — check back soon.", "لسه مفيش مقالات منشورة، تابعنا قريب."],
    "blog.back": ["← Back to blog", "→ رجوع للمقالات"],

    "contact.whatsapp": ["Chat on WhatsApp", "تواصل عبر واتساب"],
    "contact.facebook": ["Follow on Facebook", "تابعنا على فيسبوك"],
    "contact.viewmap": ["View on Google Maps", "شاهد على خرائط جوجل"],

    "foot.phone": ["01061888636", "01061888636"],
    "foot.address": ["32 Ahmed Hassan El-Zayat St., Nasr City, 7th District, In front of the Malaysian Embassy, Cairo, Egypt", "32 شارع أحمد حسن الزيات، مدينة نصر، الحي السابع، أمام السفارة الماليزية، القاهرة، مصر"],
    "contact.cairo.address": ["32 Ahmed Hassan El-Zayat St., Nasr City, 7th District\nIn front of the Malaysian Embassy — 1st Floor (3)", "32 شارع أحمد حسن الزيات، مدينة نصر، الحي السابع\nأمام السفارة الماليزية — الدور الأول (3)"],
    "contact.cairo.phones": ["01061888636 · 01111897966 · 0222426434", "01061888636 · 01111897966 · 0222426434"],
    "contact.portsaid.address": ["26 July Street, El Sharq District — 2nd Floor (8)", "26 شارع يوليو، حي الشرق — الدور الثاني (8)"],
    "contact.jeddah.address": ["Al-Madinah Al-Munawarah Rd, As Salamah, Jeddah 23437", "طريق المدينة المنورة، حي السلامة، جدة 23437"],
    "contact.jeddah.phone": ["+966 59 463 3444", "+966 59 463 3444"],

    "event.eyebrow": ["Upcoming event", "فعالية قادمة"],
    "event.days": ["Days", "يوم"],
    "event.hours": ["Hours", "ساعة"],
    "event.mins": ["Min", "دقيقة"],
    "event.secs": ["Sec", "ثانية"]
  };

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = DICT[key];
      if (entry) el.textContent = lang === "ar" ? entry[1] : entry[0];
    });
    // generic per-element bilingual content (used for CMS/DB-driven cards)
    document.querySelectorAll("[data-ar]").forEach(function (el) {
      var enText = el.getAttribute("data-en");
      var arText = el.getAttribute("data-ar");
      if (lang === "ar" && arText) el.textContent = arText;
      else if (enText) el.textContent = enText;
    });
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.textContent = lang === "ar" ? "EN" : "عربي";
    localStorage.setItem("idea_lang", lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  window.toggleLang = function () {
    var cur = document.documentElement.getAttribute("lang") || "en";
    applyLang(cur === "ar" ? "en" : "ar");
  };

  // Pull any admin-edited text from Supabase and override the built-in dictionary,
  // so every string on the site stays editable from the admin panel without a redeploy.
  async function loadContentOverrides() {
    try {
      if (!window.getSupabaseClient) return;
      var sb = window.getSupabaseClient();
      var { data } = await sb.from("website_content").select("key,content_en,content_ar");
      if (data) {
        data.forEach(function (row) {
          DICT[row.key] = [row.content_en, row.content_ar || row.content_en];
        });
        var saved = localStorage.getItem("idea_lang") || "en";
        applyLang(saved);
      }
    } catch (e) { /* offline or CMS unavailable — keep built-in text */ }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = localStorage.getItem("idea_lang") || "en";
    applyLang(saved);
    loadContentOverrides();
  });
})();
