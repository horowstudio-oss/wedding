# Wedding Invitation PRO

نسخة تسليم جاهزة لـ GitHub Pages.

## تعديل أي عرس جديد
كل بيانات العميل موجودة في `config.js` فقط:
- bride / groom
- dateISO / dateLabel
- نص الدعوة
- البرنامج
- اسم وموقع القاعة
- Dress code
- الألوان
- الملاحظة والنص الختامي
- مسارات الصور والموسيقى

## تبديل الصور
استبدل الملفات داخل `assets` بنفس الأسماء:
- hero.jpg
- venue.jpg
- dinner.jpg

## الموسيقى
الملف المرفق `ambient.wav` مقطع Ambient أصلي بسيط للاختبار/التسليم، وليس أغنية تجارية.
يمكن استبداله بأي ملف صوت تملكه ثم تعديل `music` في config.js.

## GitHub
ارفع محتويات هذا المجلد إلى root للمستودع. GitHub Pages يعمل مباشرة بدون build.
