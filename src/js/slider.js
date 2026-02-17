import cake from '../Img/cake.png'
import coffee from '../Img/coffee.png'
import orange from '../Img/orange.png'
import salad from '../Img/salad.png'
import tea from '../Img/tea.png'
import sandwich from '../Img/sandwich.png'

export const items = [
  { id: 1, title: "بار گرم" },
  { id: 2, title: "بار سرد" },
  { id: 3, title: "اسموتی" },
  { id: 4, title: "دمنوش" },
  { id: 5, title: "کیک و دسر" },
  { id: 6, title: "ماکتیل" },
  { id: 7, title: "شیک" },
  { id: 8, title: "شیر موز" },
  { id: 9, title: "شیر انبه" },
  { id: 10, title: "شیر پسته" },
  { id: 11, title: "شیر نارگیل" },
  { id: 12, title: "شیر خرما" },
  { id: 13, title: "شیر توت فرنگی" },
  { id: 14, title: "معجون" },
  { id: 15, title: "ویتامینه" },
  { id: 16, title: "فراپه" },
  { id: 17, title: "گلاسه" },
  { id: 18, title: "ایس پک" },
  { id: 19, title: "مک فلری" },
];

export const products = [
  // ========== بار گرم (category: 1) ==========
  { id: 1, name: "اسپرسو", price: "45,000", category: 1, img: coffee },
  { id: 2, name: "آمریکانو", price: "45,000", category: 1, img: coffee },
  { id: 3, name: "لاته", price: "48,000", category: 1, img: coffee },
  { id: 4, name: "کاپوچینو", price: "48,000", category: 1, img: coffee },
  { id: 5, name: "موکا", price: "52,000", category: 1, img: coffee },
  { id: 6, name: "ماکیاتو", price: "47,000", category: 1, img: coffee },
  { id: 7, name: "کورتادو", price: "49,000", category: 1, img: coffee },
  
  // ========== بار سرد (category: 2) ==========
  { id: 8, name: "آیس کافی", price: "52,000", category: 2, img: coffee },
  { id: 9, name: "آیس آمریکانو", price: "48,000", category: 2, img: coffee },
  { id: 10, name: "آیس لاته", price: "55,000", category: 2, img: coffee },
  { id: 11, name: "آیس موکا", price: "58,000", category: 2, img: coffee },
  { id: 12, name: "آیس ماکیاتو", price: "53,000", category: 2, img: coffee },
  { id: 13, name: "آفوگاتو", price: "62,000", category: 2, img: coffee },
  
  // ========== اسموتی (category: 3) ==========
  { id: 14, name: "اسموتی انبه", price: "65,000", category: 3, img: orange },
  { id: 15, name: "اسموتی توت فرنگی", price: "65,000", category: 3, img: orange },
  { id: 16, name: "اسموتی موز", price: "62,000", category: 3, img: orange },
  { id: 17, name: "اسموتی آناناس", price: "68,000", category: 3, img: orange },
  { id: 18, name: "اسموتی مخلوط", price: "70,000", category: 3, img: orange },
  
  // ========== دمنوش (category: 4) ==========
  { id: 19, name: "به لیمو", price: "45,000", category: 4, img: tea },
  { id: 20, name: "گل گاو زبان", price: "48,000", category: 4, img: tea },
  { id: 21, name: "بابونه", price: "42,000", category: 4, img: tea },
  { id: 22, name: "آویشن", price: "43,000", category: 4, img: tea },
  { id: 23, name: "ماسالا", price: "52,000", category: 4, img: tea },
  { id: 24, name: "هات چاکلت", price: "55,000", category: 4, img: tea },
  { id: 25, name: "چای سبز", price: "40,000", category: 4, img: tea },
  { id: 26, name: "چای سیاه", price: "38,000", category: 4, img: tea },
  
  // ========== کیک و دسر (category: 5) ==========
  { id: 27, name: "چیز کیک", price: "75,000", category: 5, img: cake },
  { id: 28, name: "کیک خیس", price: "65,000", category: 5, img: cake },
  { id: 29, name: "تیرامیسو", price: "85,000", category: 5, img: cake },
  { id: 30, name: "براونی", price: "58,000", category: 5, img: cake },
  { id: 31, name: "کیک هویج", price: "62,000", category: 5, img: cake },
  { id: 32, name: "کرپ", price: "55,000", category: 5, img: cake },
  
  // ========== ماکتیل (category: 6) ==========
  { id: 33, name: "موهیتو کلاسیک", price: "48,000", category: 6, img: orange },
  { id: 34, name: "موهیتو انبه", price: "55,000", category: 6, img: orange },
  { id: 35, name: "سویت سامر", price: "52,000", category: 6, img: orange },
  { id: 36, name: "ساندری", price: "50,000", category: 6, img: orange },
  { id: 37, name: "بلو لگون", price: "58,000", category: 6, img: orange },
  
  // ========== شیک (category: 7) ==========
  { id: 38, name: "شیک وانیلی", price: "62,000", category: 7, img: orange },
  { id: 39, name: "شیک شکلاتی", price: "65,000", category: 7, img: orange },
  { id: 40, name: "شیک توت فرنگی", price: "65,000", category: 7, img: orange },
  { id: 41, name: "شیک موز", price: "63,000", category: 7, img: orange },
  
  // ========== شیر موز (category: 8) ==========
  { id: 42, name: "شیر موز ساده", price: "35,000", category: 8, img: orange },
  { id: 43, name: "شیر موز با عسل", price: "42,000", category: 8, img: orange },
  { id: 44, name: "شیر موز با خرما", price: "45,000", category: 8, img: orange },
  
  // ========== شیر انبه (category: 9) ==========
  { id: 45, name: "شیر انبه ساده", price: "45,000", category: 9, img: orange },
  { id: 46, name: "شیر انبه با عسل", price: "52,000", category: 9, img: orange },
  
  // ========== شیر پسته (category: 10) ==========
  { id: 47, name: "شیر پسته", price: "58,000", category: 10, img: orange },
  { id: 48, name: "شیر پسته با عسل", price: "65,000", category: 10, img: orange },
  
  // ========== شیر نارگیل (category: 11) ==========
  { id: 49, name: "شیر نارگیل", price: "48,000", category: 11, img: orange },
  { id: 50, name: "شیر نارگیل موز", price: "55,000", category: 11, img: orange },
  
  // ========== شیر خرما (category: 12) ==========
  { id: 51, name: "شیر خرما", price: "42,000", category: 12, img: orange },
  { id: 52, name: "شیر خرما با گردو", price: "52,000", category: 12, img: orange },
  
  // ========== شیر توت فرنگی (category: 13) ==========
  { id: 53, name: "شیر توت فرنگی", price: "45,000", category: 13, img: orange },
  { id: 54, name: "شیر توت فرنگی با عسل", price: "52,000", category: 13, img: orange },
  
  // ========== معجون (category: 14) ==========
  { id: 55, name: "معجون انرژی", price: "68,000", category: 14, img: orange },
  { id: 56, name: "معجون پروتئین", price: "75,000", category: 14, img: orange },
  { id: 57, name: "معجون میوه‌ای", price: "65,000", category: 14, img: orange },
  
  // ========== ویتامینه (category: 15) ==========
  { id: 58, name: "ویتامینه هویج", price: "48,000", category: 15, img: orange },
  { id: 59, name: "ویتامینه پرتقال", price: "48,000", category: 15, img: orange },
  { id: 60, name: "ویتامینه سیب", price: "48,000", category: 15, img: orange },
  
  // ========== فراپه (category: 16) ==========
  { id: 61, name: "فراپه قهوه", price: "72,000", category: 16, img: coffee },
  { id: 62, name: "فراپه شکلات", price: "75,000", category: 16, img: coffee },
  { id: 63, name: "فراپه کارامل", price: "78,000", category: 16, img: coffee },
  
  // ========== گلاسه (category: 17) ==========
  { id: 64, name: "گلاسه قهوه", price: "68,000", category: 17, img: coffee },
  { id: 65, name: "گلاسه وانیل", price: "65,000", category: 17, img: coffee },
  
  // ========== ایس پک (category: 18) ==========
  { id: 66, name: "ایس پک قهوه", price: "58,000", category: 18, img: coffee },
  { id: 67, name: "ایس پک موکا", price: "62,000", category: 18, img: coffee },
  
  // ========== مک فلری (category: 19) ==========
  { id: 68, name: "مک فلری شکلات", price: "82,000", category: 19, img: cake },
  { id: 69, name: "مک فلری توت فرنگی", price: "82,000", category: 19, img: cake },
  { id: 70, name: "مک فلری کارامل", price: "85,000", category: 19, img: cake },
];