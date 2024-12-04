
const Footer = () => {
  return (
    <div className="footer bg-primary">
        <div className="container mx-auto flex justify-between items-center">
           <div className="footer-box m-7 grid grid-rows-3">
            <img src="" alt="" />
            <a href="" className="text-3xl font-bold drop-shadow-md">Mechatron Center</a>
            <p>Jl. Margonda No.1, Depok, Kec. <br/>
                Pancoran Mas, Kota Depok, <br/>
                Jawa Barat 16436</p>
                <p>© 2024 Mechatron. All Rights Reserved</p>
           </div>

           <div className="footer-box m-7 grid grid-rows-7">
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold text-2xl drop-shadow-md">Program</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Home</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Coding</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Robotik</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Offline</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Privat</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Ekskul Sekolah</a>
           </div>
           
           <div className="footer-box m-7 grid grid-rows-7">
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold text-2xl drop-shadow-md">Lainnya</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Trial Class</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Pengajar</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Blog</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Competition</a>
           </div>

           <div className="footer-box m-7 grid grid-rows-7">
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold text-2xl drop-shadow-md">Pusat Bantuan</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Tentang Kami</a>
            <a href="" className="font-semibold flex justify-center py-1 hover:font-bold">Kebijakan Privasi</a>
           </div>
        </div>
    </div>
    )
}

export default Footer