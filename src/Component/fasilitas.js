import React, { Component } from "react";
import { Card, Table } from "flowbite-react";
import GedungAsrama from "./assets/asrama.jpg";
import MasjidDanAula from "./assets/Masjid.jpg";
import RunagKelasDanLeb from "./assets/KelasDanLab.jpg";
import Lapangan from "./assets/Lapangan.jpg";
import fasilitas from "./assets/fasilitas.png";

class Fasilitas extends Component {
  render() {
    return (
      <div className="container">
<<<<<<< Updated upstream:src/Component/fitur.js
        <div h2>Fasilitas sekolah</div>
=======
        <div className="h1">Fasilitas sekolah</div>
        <hr class="my-6 border sm:mx-auto lg:my-8" />
>>>>>>> Stashed changes:src/Component/fasilitas.js
        <div className="row">
          <div className="col text-center">
            <Card className="br">
              <img className="auto" src={GedungAsrama} alt=""></img>

              <div className="h4 text-blue-500">Gedung asrama</div>
            </Card>
          </div>
          <div className="col text-center">
            <Card className="br">
              <img className="auto" src={MasjidDanAula} alt=""></img>
              <div className="h4 text-blue-500">Masjid Dan Aula</div>
            </Card>
          </div>
          <div className="col text-center">
            <Card>
              <img className="auto" src={RunagKelasDanLeb} alt=""></img>
              <div className="h4 text-blue-500">Ruang Kelas Dan lab</div>
            </Card>
          </div>
          <div className="col text-center">
            <Card>
              <img className="auto" src={Lapangan} alt=""></img>
              <div className="h4 text-blue-500">Lapangan Olahraga</div>
            </Card>
          </div>
          <div className="col text-center">
            <Card>
              <p>djkashdjhd</p>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <img src={fasilitas} alt="Centered Image" class="img-fluid" />
        </div>
        <div className="h1">Fasilitas asrama</div>
        <hr class="my-6 border sm:mx-auto lg:my-8" />
        <p>
          SMK TI Bazma merupakan sekolah berbasis asrama dengan fasilitas yang
          mumpuni demi mendukung proses belajar yang nyaman dan kondusif.
          Fasilitas di asrama terdiri dari fasilitas umum dan kamar tidur.
        </p>
        
      </div>
    );
  }
}
export default Fasilitas;
