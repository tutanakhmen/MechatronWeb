import image1 from "../assets/image.png"; // Gambar tunggal
import alfikri from "../assets/alfikri.png";
import cakbun from "../assets/cakbun.png";
import sincen from "../assets/sincen.png";
import uq from "../assets/uq.png";
import gatau from "../assets/gatau.png";
import content1 from "../assets/content1.JPG";
import freelance from "../assets/freelance.JPG";
import scratch from "../assets/scratch.png";
import roblox from "../assets/roblox.png";
import test from "../assets/test.JPG"

const Beranda = () => {
  return (
    <div className="beranda pb-0 mx-auto">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={image1}
          alt="Hero Image"
          className="w-full h-full object-cover transition-all duration-500"
        />

        <div className="absolute inset-2 flex flex-col justify-center w-1/2 text-black px-10">
          <h1 className="text-7xl font-bold mb-4">
            Kursus <a className="text-primary">Coding</a> dan <br />{" "}
            <a className="text-primary">Robotik</a>
          </h1>
          <p className="text-xl font-bold">
            Optimalkan potensi anak Anda di era digital dengan <br />
            bergabung dalam kursus coding interaktif yang <br />
            dirancang khusus untuk anak usia dini sampai remaja.
          </p>
          <div className="daftar-sekarang bg-primary rounded-3xl p-3 my-5 mr-auto hover:bg-darkprimary">
            <a href="" className="text-5xl font-bold text-white p-9">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>

      <div className="mitra my-4">
        <h1 className="text-5xl flex justify-center font-bold my-4 py-4">
          <a className="text-primary pt-3">Mitra Internasional</a> &nbsp;{" "}
          <a className="text-white bg-primary p-3 rounded-xl"> Kami</a>
        </h1>
        <div className="container mx-auto flex flex-row items-center justify-center">
          <div className="mitra-box mx-4">
            <img src={alfikri} alt="" />
          </div>

          <div className="mitra-box mx-4  ">
            <img src={gatau} alt="" />
          </div>

          <div className="mitra-box mx-4  ">
            <img src={cakbun} alt="" />
          </div>

          <div className="mitra-box mx-4 ">
            <img src={sincen} alt="" />
          </div>

          <div className="mitra-box mx-4 ">
            <img src={uq} alt="" />
          </div>
        </div>
      </div>

      <div className="content1 my-10">
        <div className="container mx-auto grid grid-cols-2 items-center">
          <div className="content1-box">
            <h1 className="text-4xl font-medium my-3 ml-3">
              Lebih Dari Sekedar <br /> Belajar Coding
            </h1>
            <p className="m-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores voluptate harum dolorum rerum delectus ad quae officia
              in esse sapiente atque quod, a doloremque cumque consequatur
              dolore possimus alias? Nostrum eligendi exercitationem
              consequuntur doloremque tempore, dolores voluptates enim molestiae
              odio, iste nihil, quibusdam placeat officiis unde! Eligendi labore
              reprehenderit laboriosam.
            </p>
          </div>
          <div className="content1-box">
            <img
              src={test}
              alt=""
              className="rounded-2xl shadow-2xl max-w-xl"
            />
          </div>
        </div>
      </div>

      <div className="content2">
        <div className="container grid grid-cols-2 items-center bg-slate1 rounded-3xl mx-auto shadow-2xl hover:scale-105 transition-all">
          <div className="content2-box">
            <img src={freelance} alt="" className="rounded-3xl max-w-lg" />
          </div>
          <div className="content2-box pr-16">
            <p className="font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae quaerat sapiente pariatur culpa impedit saepe, illum
              rem voluptatibus dolorum eligendi! Amet facilis voluptatum veniam
              accusamus magnam libero delectus, animi aspernatur!
            </p>
          </div>
        </div>
      </div>

      <div className="program bg-primary my-10">
        <h1 className="text-4xl flex justify-center font-bold">
          <a className="text-white mt-8">Program Mechatron Untuk Usia</a>&nbsp;{" "}
          <a className="mt-5 bg-white rounded-xl p-3 shadow-2xl">7 Tahun (CODING)</a>
        </h1>
        <div className="container mx-auto grid grid-cols-3 my-2">
          <div className="program-box grid grid-rows-2  bg-white rounded-2xl shadow-2xl m-16 mt-72 pb-10 hover:scale-105 transition-all">
            <div className="img-program -rotate-12 mb-3 flex justify-center max-w-40">
              <img src={scratch} alt="" className="max-w-52" />
            </div>
            <div className="img-content">
              <p className="px-5 font-semibold">
                Belajar Icon-Block Programming dengan membuat animasi dan game
                dengan platform ScratchJr
              </p>
            </div>
          </div>

          <div className="program-box grid grid-rows-2  bg-white rounded-2xl shadow-2xl m-16 mt-36 mb-40 hover:scale-105 transition-all">
            <div className="img-program">
              <img src={roblox} alt="" className="max-w-52" />
            </div>
            <div className="img-content">
              <p className="px-5 font-semibold">
                Belajar Icon-Block Programming dan text programming dengan
                pembelajaran kreatif dan inklusif melalui permainan di platform
                Minecraft Education
              </p>
            </div>
          </div>

          <div className="program-box grid grid-rows-2  bg-white rounded-2xl shadow-2xl m-16 mt-10 mb-72 pb-10 hover:scale-105 transition-all">
            <div className="img-program -rotate-12 mb-3 flex justify-center max-w-40">
              <img src={scratch} alt="" className="max-w-52" />
            </div>
            <div className="img-content">
              <p className="px-5 font-semibold">
                Mengenalkan dasar coding melalui bahasa pemrograman visual
                dengan platform Scratch dan membuat karya berupa story ,
                animasi, simple game, hingga complex game.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="keunggulan my-10">
        <div className="container grid grid-cols-2 mx-auto items-center">
          <div className="keunggulan-box">
            <img src={content1} alt="" className="rounded-2xl max-w-2xl shadow-2xl hover:scale-105 transition-all"/>
          </div>
          <div className="keunggulan-box">
            <h1 className="text-4xl font-semibold text-primary my-5">Keunggulan Kami</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem natus totam porro quasi repudiandae ipsa velit
              dolorum repellendus possimus assumenda! Quaerat molestias ab
              maxime amet, vitae praesentium quas quam nemo quibusdam, cumque
              officia accusamus nam accusantium minima explicabo ipsum fugiat,
              labore porro possimus. Accusamus veritatis neque obcaecati beatae
              ab quidem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
