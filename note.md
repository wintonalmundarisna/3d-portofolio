**CATATAN TAMBAHAN**

- Github Adrian = https://github.com/adrianhajdin/project_3D_developer_portfolio
- 3d download = sketchfab.com
- clear cache = npm cache clean --force
- rafce = shortcut u default isi file jsx
- Memasang react tanpa membuat folder baru = pnpm create vite@latest ./ -- --template react
- Absolute akan mentok ke ujung parent tapi parentnya harus relative

emailjs = 3m41lj5.
id email template = // template_bmisy68
id email services = // service_mp2zkfd
public key = nK3j64VeUio3DAmIC

Error :

- Di hero ukuran lebarnya bermasalah, coba otak atik pov nya
- Bagian contact masih belum bisa mengirim
- Navbar belum hilang ketika mencapai top

Kendala :

- Ketika menginstall --legacy-pper-deps npm akan stuck, download lama sampe sejam tapi gagal
- Versi library yang berbeda, mfitur pointLight di versi terbaru harus 1000 untuk bisa terang, sedangkan di versi lama cukup pakai 1
- Tidak yakin mau pakai portofolio ini untuk pribadi karena css native aja belum hatam, gimana mau 3D

---

**DEPENDENCIES**

- [x] Install banyak tool secara bersamaan

  - pnpm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
  - --legacy-peer-deps, gabisa dan menyebabkan error dikarenakan beda versi node

---

- [x] **"@emailjs/browser": "^3.10.0",**

  - u membuat template email yang terintegrasi dengan email asli

- [x] **"framer-motion": "^9.0.7",**

  - u membuat animasi, misal fadeIn, fadeUp, slideIn, dll
  - <motion.div variants={fadeIn("up", "spring", index \* 0.5, 0.75)} >
  - fadeIn("arah", "tipe", delay, durasiAnimasi)
  - Contohnya ada di semua kecuali loader, navbar, tech

- [x] **"maath": "^0.5.2",**

  - u perhitungan Math.PI, random number, dll
  - Contohnya ada di stars

- [x] **"react": "^18.2.0",**

  - [ ] Suspense (Ball, Earth, Stars)

    - Izin u/ meload canvas
    - Memastikan ada yang ditampilkan ketika gambar masih lading

  - [ ] useEffect (Computer)

    - U/ mengubah/menambahkan sesuatu ketika event terjadi

  - [ ] useState (Contact, Navbar)

    - U/ membuat var dan functionnya dan ditampilkan

  - [ ] useRef (Stars, Contact)

    - U/ manipulasi DOM dan referensi
    - Contohnya menu navbar otomatis scroll ketika di klik

- [x] **"react-dom": "^18.2.0",**

  - Digunakan u memanggil router dan semua kebutuhan dom

- [x] **"react-router-dom": "^6.8.1",**

  - Link (Navbar)
    - U/ href tanpa render

- [x] **"react-tilt": "^0.1.4",**

  - U/ membuat bentuk 3d, misal card dan agar card tsb bisa bergerak

  - Contohnya ada di about dan works

- [x] **"react-vertical-timeline-component": "^3.6.0",**

  - u membuat garis pada section experiences

- [x] **"three": "^0.149.0"**
  - [ ] @react-three/drei
    - Decal (Ball)
      - U/ mapping, position, rotation ball
    - Float (Ball)
      - U/ mengatur speed, intens rotasi, dll
    - OrbitControls (Ball, Computer, Earth)
      - untuk draw/menggerakkan objek di dalam canvas
    - Preload (Ball, Computer, Earth, Stars)
      - Meload/Menampilkan semua element 3D model
    - useTexture (Ball)
      - Mengatur texture 3D model
    - useGLTF (Computer, Earth)
      - untuk mengizinkan import model 3D atau u/ mengambil gambar format gltf
    - Points (Stars)
      - Library titik titik yang membentuk bintang pada bg contact
    - PointMaterial (Stars)
      - Detail dari point
    - Sphere (Stars)
      - Posisi, radius, dan jumlah bintang
    - Html (Loader)
      - U/ pemanggilan dan design animasi loading 3D model ketika diload
    - useProgress (Loader)
      - U/ membuat efek loading % ketika model diload pada HTML diatas
  - [ ] @react-three/fiber
    - Canvas (Ball, Computer, Earth, Stars)
      - Menyediakan empty canvas untuk meletakkan sesuatu didalamnya
      - Bisa dibilang ini adalah parent kalo mau ngoding yg berkaitan dengan canvas
      - Bisa ngatur frameloop, shadow, dll
    - useFrame (Stars)
      - Membuat sebuah frame

---

**DEV DEPENDENCIES**

"@types/react": "^18.0.27",
"@types/react-dom": "^18.0.10",
"@vitejs/plugin-react": "^3.1.0",
"autoprefixer": "^10.4.13",
"postcss": "^8.4.21",
"tailwindcss": "^3.2.6",
"vite": "^4.1.0"

---

**TAG BARU DITEMUI**

- [x] **Ball**

  - <ambientLight />
    - u/ cahaya, misal efek warna abu abu pada ball
  - <directionalLight />
    - u/ cahaya, warna terang/putih pada ball, kebalikan diatas
  - <mesh />
    - Sebagai parent untuk menampilkan model ball
  - <icosahedronGeometry />
    - u menampilkan bola
  - <meshStandardMaterial />
    - u pewarnaan pada bola

- [x] **Computer**

  - <hemisphereLight />
    - Untuk pencahayaan, biar ga hitam modelnya
  - <spotLight />
    - Detail cahaya
  - <pointLight/>
    - Pencahayaan yg seperti pantulan lampu pada layar
  - <primitive />
    - u menampilkan dan mengatur style gambar komputer

- [x] **Earth**

  - <OrbitControls/>
    - Membuat model bumi bisa dirotasi

- [x] Stars
  - <group />
    - Tag u/ banyak tag

---

- [x] **styles.js (Tempatnya reusable content)**

  - Mengatur padding X dan Y, contoh ada di navbar
  - Tempat head/sub text dalam hero
  - Tempat head/sub text semua content kecuali hero

- [x] **utils/motion.js**

  - textVariant untuk styling text dan animasinya
  - animasi fadeIn, zoomIn dan slideIn
  - staggerContainer akan dipanggil di hoc/SectionWrapper u/ mengatur container agar sama semua

- [x]**hoc**

  - index.js, cuma buat export SectionWrapper agar menjadi higher component
  - SectionWrapper.jsx, u/ membuat container yg bekerja sama dengan utils/motion.js/staggerContainer, juga digunakan u/ membuat fitur scroll pada animasi scroll

- [x] **constants/index.js**

  - Memanggil semua asset pada folder assets
  - Berisi data navLinks, services, technologies, experiences, testimonials, projects

- [x] **components/index.js**

  - Memanggil semua file yang ada di folder components dan folder canvas lalu mengexportnya tapi gatau buat apa karena di App.jsx tetap memanggil semua file components satu persatu

- [x] **canvas/index.js**

  - Berisi import semua file yang ada di folder canvas, lalu mengexportnya, karena sudah index (default) jadi otomatis terpanggil dan gaperlu menuliskan nama file satu persatu, coba buka file Contact.jsx

- [x] **Folder assets dan public**
  - Sama sama berisi gambar
