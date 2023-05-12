import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "./swagger.json" assert {type: "json"};
import addUserRouter from "./routes/users.route.js";
import addAuthRouter from "./routes/auth.route.js";
import addCourseRouter from "./routes/courses.route.js";

dotenv.config({path: "./.env"});

const main = () => {
    const app = express();
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(express.static(path.join(".", "public")));
    addAuthRouter(app);
    addUserRouter(app);
    addCourseRouter(app);
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    app.listen(process.env.PORT || 3000, () => {
        console.log(`port => ${process.env.PORT || 3000}`);
    });
};

main();


/*
<div dir="rtl">

# پروژه سامانه انتخاب واحد

## مقدمه
در این پروژه قرار است با ساخت و پیاده سازی فاز اول سامانه انتخاب واحد، به صورت عملی با زبان برنامه نویسی جاوا اسکریپت و محیط اجرای Node آشنا شوید.

## معماری
ساختار پروژه بر اساس معماری تمیز (Clean Architecture) پیاده سازی شود و بقیه معماری در فاز های بعد نیز بر اساس همین معماری پیاده سازی شود.

## نقاط اتصال (Endpoints)
### عمومی
- ورود کاربران: POST /login

### مدیر IT
- ساخت، ویرایش، حذف، دریافت استاد و لیست اساتید: POST /admin/Professor, PUT /admin/Professor/{ID}, DELETE /admin/Professor/{ID}, GET /admin/Professors, GET /admin/Professor/{ID}
- ساخت، ویرایش و حذف، دریافت دانشجو و لیست دانشجویان: POST /admin/student, PUT /admin/student/{ID}, DELETE /admin/student/{ID}, GET /admin/students, GET /admin/student/{ID}
- ساخت، ویرایش و حذف، دریافت مدیر آموزش و لیست مدیران: POST /admin/manager, PUT /admin/manager/{ID}, DELETE /admin/manager/{ID}, GET /admin/managers, GET /admin/manager/{ID}
- دیدن لیست دروس

### مدیر آموزش
- ساخت، ویرایش و حذف دروس مصوب و ترمی: POST /course, PUT /course/{ID}, DELETE /course/{ID}, GET /courses, GET /course/{ID}
- دیدن لیست اساتید و دانشجویان: GET /students, GET /student/{ID}, GET /Professors, GET /Professor/{ID}

### دانشجو
- ویرایش اطالعات قابل تغییر خود (با اعتبارسنجی): PUT /student/{ID}
- دیدن لیست دروس با امکان فیلتر بر اساس رشته: GET /courses, GET /course/{ID}

### استاد
- ویرایش اطالعات قابل تغییر خود (با اعتبارسنجی): PUT /Professor/{ID}
- دیدن لیست دروس با امکان فیلتر بر اساس رشته: GET /courses, GET /course/{ID}

</div>

<div dir="rtl">

## الزامات اضافی

### استفاده از فایل .env برای نگهداری اطلاعات حساس
- بسته dotenv را نصب کنید تا محتویات فایل .env را در برنامه خود بارگذاری کنید.
npm install dotenv
- یک فایل .env در ریشه پروژه خود ایجاد کنید و اطلاعات حساس (مانند کلیدهای API، اعتبارنامه‌های پایگاه داده) را به صورت جفت‌های کلید-مقدار اضافه کنید.
API_KEY=your_api_key
DB_USER=username
DB_PASSWORD=password
- فایل .env را در برنامه خود با استفاده از بسته dotenv بارگذاری کنید.
javascript
require('dotenv').config();
- اطلاعات حساس را در برنامه خود با استفاده از process.env دسترسی پیدا کنید.
javascript
const apiKey = process.env.API_KEY;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

### استفاده از Git در طول پروژه
- یک مخزن Git در پوشه پروژه خود مقدماتی کنید.
git init
- یک فایل .gitignore اضافه کنید تا فایل‌ها و پوشه‌هایی که نباید ردیابی شوند (مانند node_modules، .env) را مستثنی کنید.
node_modules
.env
- تغییرات خود را به طور منظم ثبت کنید و از پیام‌های معنادار ثبت استفاده کنید.
git add .
git commit -m "Add feature X"

### مدیریت خطا با پیروی از استاندارد RFC 7231
- مطمئن شوید که برنامه شما کدهای وضعیت HTTP و پیام‌های خطای مناسب را براساس استاندارد RFC 7231 بازمی‌گرداند.

برای مثال، هنگام رسیدگی به یک خطای "Not Found"، یک کد وضعیت 404 و یک پیام خطا بازگردانید.
javascript
app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

### استفاده از قالب log common برای ثبت خطا
- یک نرم‌افزار logging middleware پیاده سازی کنید که خطاها را در قالب log common ثبت کند.

برای مثال، می‌توانید از بسته morgan برای ثبت خطا در قالب log common استفاده کنید.
npm install morgan
- نرم‌افزار morgan middleware را به برنامه خود اضافه کنید.
javascript
const morgan = require('morgan');
app.use(morgan('common'));

</div>
*/
