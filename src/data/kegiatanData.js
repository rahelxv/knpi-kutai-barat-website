export const daftarKegiatan = [
  {
    id: "pelantikan-2026",
    judul: "Pelantikan Pengurus DPD KNPI KUTAI BARAT",
    tanggal: "22 April 2026",
    tipe: "Foto",
    thumbnail: `${import.meta.env.BASE_URL}pelantikan/DSC00340.jpg`,
    deskripsi:
      "Momen pengukuhan pengurus baru DPD KNPI KUTAI BARAT di Auditorium Aji Tulur Jejangkat (ATJ).",
    album: [
      300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 314, 315, 316, 318,
      320, 325, 330, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351,
      352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 381, 382, 383, 384, 385,
      386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400,
      401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
      416, 417, 418, 419, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431,
      432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
    ].map((num) => ({
      type: "image",
      url: `${import.meta.env.BASE_URL}pelantikan/DSC00${num}.jpg`,
    })),
  },
  {
    id: "musda-viii-2026",
    judul: "Musyawarah Daerah (Musda) VIII DPD KNPI Kutai Barat",
    tanggal: "22 April 2026",
    tipe: "Foto",
    thumbnail: `${import.meta.env.BASE_URL}musda/IMG_0454.JPG`,
    deskripsi:
      "Musyawarah Daerah (Musda) VIII tahun 2026 menjadi momentum krusial dalam menentukan arah baru kepemimpinan pemuda Tanaa Purai Ngeriman.",

    album: [
      396, 397, 398, 400, 401, 403, 408, 410, 411, 413, 415, 416, 418, 419, 422,
      423, 424, 426, 427, 428, 429, 430, 454,
    ].map((num) => ({
      type: "image",
      url: `${import.meta.env.BASE_URL}musda/IMG_0${num}.JPG`,
    })),
  },
];
