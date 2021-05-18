---
title: Detail Article Enhancement
date: 2021-05-18T04:32:03.271Z
thumb_img_path: /images/otlylmu4.jpeg
template: post
---
# Detail Article Enhancement

![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1611563834239_Detail+Article+Redirect.jpg)

|                         |                                                                                                                                                                                                                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Name**        | Detail Article Enhancement - detikcom                                                                                                                                                                                                                                             |
| **Status**              | ~~On Hold~~ / ~~Just Start~~ / ~~In UI UX~~ / ~~Usability~~ / Slicing / HO to IT                                                                                                                                                                                                  |
| **Team**                | PM: Fahmi | UI UX: Rendi | Slicing : Bangkit |  UX Research : Lacborra                                                                                                                                                                                                            |
| **Supporting Document** | * [Figma Prototype](https://www.figma.com/proto/ia4XNqAhCjFPZpm7WKhtQ5/Haibunda-Apps?node-id=1770%3A42679&viewport=1238%2C780%2C0.08151339739561081&scaling=scale-down)* [Figma File](https://www.figma.com/file/xNqZpHf7zh4kfLZEfjZRsv/Detik-News-Template?node-id=1887%3A14992) |

# Background

detikcom sebagai salah satu Media Digital ingin mengembangkan eksplorasi halaman detail artikel dan meningkatkan PV melalui detail artikel.



**Objectives**

Meningkatkan *Page Views* untuk situs detikcom*.*



**Strategi Produk**

Mengembangkan eksplorasi di halaman detail artikel salah satunya dengan metode auto redirect.



**Success Measurement**

* Page View meningkat





# Design Concept

## Detail Article Long Story With Auto Redirect

User mengakses detail artikel detikcom setelah melewati area artikel dan komentar lalu akan muncul box sticky sebagai penanda artikel akan di redirect untuk pindah halaman selanjutnya.



![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1611563898072_Screen+Shot+2021-01-25+at+15.35.43.png)![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1611563916999_Screen+Shot+2021-01-25+at+15.35.53.png)



|                                                        |                                                                                         |                                                                          |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Given That**                                         | **When**                                                                                | **Then**                                                                 |
| User Membaca Halaman Detail Artikel Long Story         | Scrolling sampai area setelah button komentar                                           | Muncul box auto redirect ke halaman selanjutnya dalam waktu 10 detik     |
|                                                        | Scrolling sampai area setelah button komentar lalu user balik scrolling ke area artikel | Box auto redirect non aktif dan waktu auto redirect akan di reset.       |
| User ada di halaman terakhir detail artikel long story | Scrolling sampai bawah sebelum footer                                                   | Muncul area artikel selanjutnya dengan auto redirect dalam waktu 5 detik |
|                                                        | Scrolling sampai bawah sebelum footer lalu balik scroll ke atas                         | Muncul box auto redirect ke artikel selanjutnya dalam waktu 10 detik     |



## Detail Artikel Selanjutnya

Highlight Artikel Selanjutnya agar lebih terlihat user, idenya adalah membuat tampilan dari artikel selanjutnya seakan-akan seperti halaman detail artikel baru.



![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1611563957216_Screen+Shot+2021-01-25+at+15.36.33.png)![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1611564015164_Screen+Shot+2021-01-25+at+15.39.53.png)



|                                   |                                                                  |                                                                          |
| --------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Given That**                    | **When**                                                         | **Then**                                                                 |
| User ada di halaman artikel biasa | Scrolling sampai bawah sebelum footer                            | Muncul area artikel selanjutnya dengan auto redirect dalam waktu 5 detik |
|                                   | Scrolling sampai bawah sebelum footer lalu balik scroll ke atas  | Muncul box auto redirect ke artikel selanjutnya dalam waktu 10 detik     |



Notes : Jangan sampai ada artikel yg sama dengan yg dibaca utk artikel selanjutnya



# Prototype

<https://www.figma.com/proto/xNqZpHf7zh4kfLZEfjZRsv/Detik-News-Template?node-id=1902%3A12510&viewport=418%2C971%2C0.20321962237358093&scaling=scale-down>

# Timeline



# Usability Testing

## Skenario

**Halaman Long Story**

|                                         |                                                                                                    |                                                                                                              |                                                                                                                                                                     |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Halaman                                 | Goals                                                                                              | Skenario                                                                                                     | Usability Question                                                                                                                                                  |
| Halaman 1 ke Halaman Selanjutnya        | User memahami bahwa untuk melanjutkan halaman ia bisa melakukan tap pada halaman “Selanjutnya”     | Minta user untuk baca artikel terlebih dahulu lalu paparkan user pada bagian Pagination.                     | * Apakah artikel sudah selesai? Kalau belum darimana ia bisa tahu?* Bagaimana cara untuk melanjutkan baca artikel?                                                  |
|                                         | User memahami bahwa box Auto-Redirect akan memindahkan user secara otomatis ke halaman selanjutnya | Posisikan user seolah ingin melihat artikel lain. Paparkan padanya bagian auto-redirect halaman selanjutnya. | * Adakah hal baru yang muncul saat kamu melakukan scroll?* Jika ada, boleh jelaskan bagian apa itu?                                                                 |
|                                         | User memahami bahwa ia dapat melakukan close pada box Auto-Redirect                                |                                                                                                              | * Apa saja yang kamu bisa lakukan di bagian tersebut? (Lihat apakah user sadar untuk melakukan close)* Apa yang akan terjadi jika waktu di bagian tersebut selesai? |
| Halaman Terakhir ke Artikel Selanjutnya | User memahami bahwa box Artikel Selanjutnya akan memindahkan dirinya ke artikel selanjutnya        | Minta user membaca artikel hingga ia terpapar dengan box artikel selanjutnya                                 | * Bagian apa ini menurutmu?* Apa yang bisa dilakukan di bagian ini?                                                                                                 |
|                                         | User memahami bahwa box Auto-Redirect akan memindahkan user secara otomatis ke artikel selanjutnya | Minta user melakukan scroll kebawah seolah ia ingin mencari artikel yang lain.                               | (Saat sampai bagian paling bawah)* Boleh jelaskan bagian apa yang baru saja muncul?                                                                                 |
|                                         | User memahami bahwa ia dapat melakukan close pada box Auto-Redirect                                | Paparkan bagian box auto-redirect                                                                            | * Menurutmu apa yang bisa dilakukan di bagian tersebut?                                                                                                             |

**Detil Artikel Biasa**

|                        |                                                                                                    |                                                                                |                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Halaman                | Goals                                                                                              | Skenario                                                                       | Pertanyaan                                                                          |
| Ke artikel selanjutnya | User memahami bahwa box Artikel Selanjutnya akan memindahkan dirinya ke artikel selanjutnya        | Minta user membaca artikel hingga ia terpapar dengan box artikel selanjutnya   | * Bagian apa ini menurutmu?* Apa yang bisa dilakukan di bagian ini?                 |
|                        | User memahami bahwa box Auto-Redirect akan memindahkan user secara otomatis ke artikel selanjutnya | Minta user melakukan scroll kebawah seolah ia ingin mencari artikel yang lain. | (Saat sampai bagian paling bawah)* Boleh jelaskan bagian apa yang baru saja muncul? |
|                        | User memahami bahwa ia dapat melakukan close pada box Auto-Redirect                                | Paparkan bagian box auto-redirect                                              | * Menurutmu apa yang bisa dilakukan di bagian tersebut?                             |

## Usability Report 1

![](/static/img/pixel.gif)

![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1611820031589_Screen+Shot+2021-01-28+at+14.46.55.png)

|                                                                  |     |     |     |     |     |         |
| ---------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- |
| Temuan                                                           | P1  | P2  | P3  | P4  | P5  | Catatan |
| Semua user menyadari bahwa pada bagian ini artikel belum selesai | x   | x   | x   | \-  | x   |         |
| User melanjutkan membaca artikel menggunakan button selanjutnya  | x   | x   | x   | x   | x   |         |
| User melanjutkan membaca artikel dengan tap pada halaman 2       | \-  | x   | \-  | x   | x   |         |

- - -

![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1611819324167_Screen+Shot+2021-01-28+at+14.34.12.png)

|                                                                                                                                                               |     |     |     |     |     |         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- |
| Temuan                                                                                                                                                        | P1  | P2  | P3  | P4  | P5  | Catatan |
| User tidak menyadari saat box auto redirect halaman muncul                                                                                                    | x   | x   | \-  | x   | x   |         |
| Setelah melihat box auto-redirect, semua user memahami bahwa ia akan secara otomatis akan memindahkannya ke halaman selanjutnya                               | x   | x   | x   | x   | x   |         |
| User bisa melakukan close pada bagian auto-redirect                                                                                                           | x   | x   | x   | x   | x   |         |
| User merasa bahwa button close tidak terlihat                                                                                                                 | \-  | \-  | \-  | x   | x   |         |
| Terdapat user yang merasa bahwa auto-redirect halaman tidak berguna, sebab saat ia melewati halaman pagination berarti ia sudah tidak tertarik dengan artikel | \-  | \-  | \-  | x   | x   |         |

- - -

![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1611886250972_Screen+Shot+2021-01-29+at+09.10.29.png)

|                                                                            |     |     |     |     |     |         |
| -------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- |
| Temuan                                                                     | P1  | P2  | P3  | P4  | P5  | Catatan |
| User merasa bahwa bagian ini adalah halaman terakhir dari artikel          | x   | x   | x   | x   | x   |         |
| User merasa bahwa box artikel selanjutnya adalah merekomendasikan artikel  | x   | x   | x   | x   | x   |         |
| User merasa bahwa box artikel selanjutnya bisa di click                    | x   | x   | x   | x   | x   |         |

- - -

![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1611819426862_Screen+Shot+2021-01-28+at+14.33.54.png)

|                                                                                                       |     |     |     |     |     |         |
| ----------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- |
| Temuan                                                                                                | P1  | P2  | P3  | P4  | P5  | Catatan |
| User merasa bahwa artikel selanjutnya akan muncul dalam 5 detik                                       | x   | x   | x   | x   | x   |         |
| User mampu melakukan close pada bagian box rekomendasi artikel                                        | x   | x   | x   | x   | x   |         |
| User merasa bahwa artikel yang akan dipaparkan adalah artikel dengan judul yang terlihat              | x   | x   | x   | \-  | x   |         |
| User merasa ia akan dipindahkan ke halaman artikel selanjutnya                                        | x   | x   | x   | \-  | x   |         |
| User merasa ia akan dipaparkan halaman artikel selanjutnya di halaman artikel ini. (Modelan Infinite) | \-  | \-  | \-  | x   | \-  |         |
| User merasa tidak butuh rekomendasi artikel kalau sama dengan box yang berada di akhir artikel        | \-  | \-  | \-  | x   | \-  |         |

- - -

## Concern

* Terdapat user yang merasa bahwa auto-redirect halaman tidak berguna, sebab saat ia melewati halaman pagination berarti ia sudah tidak tertarik dengan artikel
* User merasa tidak melihat floating card auto redirect
* User merasa tidak butuh rekomendasi artikel kalau sama dengan box yang berada di akhir artikel





# Adjusment

Dari hasil usability testing lebih baik auto redirect dibuat **general** untuk semua detail artikel dengan memaparkan artikel selanjutnya dengan melihat data dari hotjar bahwa user rata-rata scrolling sampai **box berita detikcom lainnya**.



## Alternatif 1

User dipaparkan floating box artikel selanjutnya dengan auto redirect setelah artikel ke-3 box berita detikcom lainnya 



![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1612070465140_Screen+Shot+2021-01-31+at+12.20.43.png)

|                                     |                                                           |                                                                                        |
| ----------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Given That**                      | **When**                                                  | **Then**                                                                               |
| User Membaca Halaman Detail Artikel | Scrolling sampai artikel ke-3 box berita detikcom lainnya | Floating box artikel selanjutnya dengan ditambahkan auto redirect dalam waktu 10 detik |
|                                     | User klik tombol close floating box artikel selanjutnya   | Floating Box artikel selanjutnya tidak muncul lagi                                     |
|                                     | Ketika ada breaking News dan ballon ads                   | Floating Box Artikel Selanjutnya tidak dimunculkan                                     |

## Alternatif 2

User dipaparkan floating box artikel selanjutnya tanpa auto redirect sampai box berita detikcom lainnya lalu user ditampilkan auto redirect



![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1612070722430_Screen+Shot+2021-01-31+at+12.22.39.png)![](https://paper-attachments.dropbox.com/s_2E538414F61F842DDF3DF626DDBFEF0815556A38ACDAFE2BE36A759F7F9515A3_1612070710833_Screen+Shot+2021-01-31+at+12.22.51.png)

|                                     |                                                           |                                                                                        |
| ----------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Given That**                      | **When**                                                  | **Then**                                                                               |
| User Membaca Halaman Detail Artikel | Scrolling sampai area setelah button komentar             | Muncul floating box artikel selanjutnya tanpa auto redirect                            |
|                                     | Scrolling sampai artikel ke-3 box berita detikcom lainnya | Floating box artikel selanjutnya dengan ditambahkan auto redirect dalam waktu 10 detik |
|                                     | User klik tombol close floating box artikel selanjutnya   | Floating Box artikel selanjutnya tidak muncul lagi                                     |
|                                     | Ketika ada breaking News dan ballon ads                   | Floating Box Artikel Selanjutnya tidak dimunculkan                                     |

## Protoytpe

<https://www.figma.com/proto/xNqZpHf7zh4kfLZEfjZRsv/Detik-News-Template?node-id=2260%3A81&viewport=850%2C-179%2C0.2689809203147888&scaling=scale-down>



## Usability Report 2



![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1612425698174_Screen+Shot+2021-02-04+at+15.00.43.png)

|                                                                                                     |     |     |     |     |     |         |
| --------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ------- |
| Temuan                                                                                              | P1  | P2  | P3  | P4  | P5  | Catatan |
| Semua user mampu melakukan close pada pop-up                                                        | x   | x   | x   | x   | x   |         |
| Semua user merasa bahwa pop-up merupakan rekomendasi artikel                                        | x   | x   | x   | x   | x   |         |
| Terdapat user yang merasa bahwa rekomendasi artikel berbeda topik dengan artikel yang telah ia baca |     | x   |     |     |     |         |

![](https://paper-attachments.dropbox.com/s_A17FE9DA6713EE4B8573C52F4ECD28F2AD9D3FC4EED857B4550334CC7C625708_1612425672684_Screen+Shot+2021-02-04+at+15.00.52.png)

|                                                                                                 |     |     |     |     |     |                                                                                                                                          |
| ----------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Temuan                                                                                          | P1  | P2  | P3  | P4  | P5  | Catatan                                                                                                                                  |
| User merasa bahwa setelah 7 detik user akan dipindahkan ke judul artikel yang terpapar          | x   |     | x   | x   | x   |                                                                                                                                          |
| Semua user mampu melakukan close pada pop-up                                                    | x   | x   | x   | x   | x   |                                                                                                                                          |
| User merasa bahwa pop-up intrussive karena bisa tiba-tiba pindah halaman                        |     |     | x   | x   |     | * P3 membandingkan dengan experience autoplay youtube yang juga dianggap mengganggu karena ia tidak menyadari sepenuhnya perubahan popup |
| User merasa tidak terlalu menarik kalau artikel antara yang auto-redirect dan pop-up biasa sama |     |     |     | x   |     |                                                                                                                                          |
| User merasa bahwa 7 detik adalah waktu dimana pop-up akan menghilang                            |     | x   |     |     |     |                                                                                                                                          |

## Concern

* Terdapat user yang merasa bahwa pop-up intrussive karena bisa tiba-tiba pindah halaman karena ia tidak menyadari perubahan dari pop-up biasa ke pop-up dengan auto redirect
* Terdapat user yang merasa tidak terlalu menarik kalau artikel antara yang auto-redirect dan pop-up biasa sama



# Slicing HTML

|                           |                                                                                                                                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Halaman                   | Link                                                                                                                                                                                                                                                                                                       |
| Detail Artikel            | <http://online.detik.com/design/detik/mobile/detiknews/detail.php?redirect=1>                                                                                                                                                                                                                              |
| Detail Artikel With Ads   | <http://online.detik.com/design/detik/mobile/detiknews/detail.php?redirect=1>                                                                                                                                                                                                                              |
| Detail Artikel Long Story | [http://online.detik.com/design/detik/mobile/detiknews/detail-artikel-panjang.php?redirect=1](https://www.google.com/url?q=http://online.detik.com/design/detik/mobile/detiknews/detail-artikel-panjang.php?redirect%3D1&sa=D&source=hangouts&ust=1614652982948000&usg=AFQjCNFsF3hcw-mTe3xiO6XpJpfI_WHVqA) |