import image1 from "../assets/heroedit.png"; // Gambar tunggal
// import image2 from "../assets/Hero1.JPG"; // Gambar lainnya (dihapus jika hanya satu gambar)
// import image3 from "../assets/Hero2.JPG"; // Gambar lainnya (dihapus jika hanya satu gambar)

const Beranda = () => {
  // Tidak perlu state untuk currentIndex karena hanya ada satu gambar
  return (
    <div className="beranda pb-0 mx-auto">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={image1}  // Gambar yang akan ditampilkan
          alt="Hero Image"
          className="w-full h-full object-cover transition-all duration-500"
        />

        <div className="absolute bottom-16 left-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Kursus Coding dan Robotik</h1>
          <p className="text-xl max-w-lg">
            Optimalkan potensi anak Anda di era digital dengan
            bergabung dalam kursus coding interaktif yang
            dirancang khusus untuk anak usia dini sampai remaja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
