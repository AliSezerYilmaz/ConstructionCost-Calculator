import React, { Component } from "react";
import { CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Navbar from "./Navbar";
import "./Style/hesap.css";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";

export class Hesap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yapıA: "",
      bolgeK: "",
      birimM: "",
      yapıSK: "",
      projeUO: "",
      projeYK: "",
      hizmetB: "",
    };
  }
  handleyapıA = (event) => {
    this.setState({
      yapıA: event.target.value,
    });
  };
  handlebolgeK = (event) => {
    this.setState({
      bolgeK: event.target.value,
    });
  };
  handlebirimM = (event) => {
    this.setState({
      birimM: event.target.value,
    });
  };
  handleyapıSK = (event) => {
    this.setState({
      yapıSK: event.target.value,
    });
  };
  handleprojeUO = (event) => {
    this.setState({
      projeUO: event.target.value,
    });
  };
  handleprojeYK = (event) => {
    this.setState({
      projeYK: event.target.value,
    });
  };

  handlehizmetB = (event) => {
    this.setState({
      hizmetB: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    var raw =
      parseFloat(this.state.bolgeK) *
      parseFloat(
        this.state.yapıA *
          parseFloat(this.state.birimM) *
          parseFloat(this.state.yapıSK) *
          parseFloat(this.state.projeUO) *
          parseFloat(this.state.projeYK) *
          parseFloat(this.state.hizmetB) *
          0.75
      );

    raw = raw.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(raw)) raw = raw.replace(pattern, "$1,$2");

    alertify
      .alert(`${raw} ₺`, function () {
        window.location.reload(true);
      })
      .set({ title: "Proje Ücreti" })
      .set({ label: "Tamam" });
  };

  render() {
    return (
      <div className="hesap"
        
      >
        <Navbar />
        <div className="main">
          <Form style={{ margin: "25px" }} onSubmit={this.handleSubmit}>
            <CardTitle
              style={{
                color:"white",
                fontFamily: "Fantasy",
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "40px",
                marginTop: "25px",
              }}
            >
              Proje Ücreti
            </CardTitle>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Yapı Alanı (m²)</Label>

                  <Input
                    autocomplete="off"
                    type="number"
                    step="0.01"
                    name="yapıA"
                    value={this.state.yapıA}
                    onChange={this.handleyapıA}
                    className="data"
                    required
                  ></Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Bölge Katsayısı :</Label>
                  <a
                    href="https://www.imo.org.tr/resimler/dosya_ekler/796598525b61db2_ek.pdf?tipi=83&turu=X&sube=0"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#69A7C6" }}
                    rel="noreferrer"
                  >
                    Öğrenmek İçin Tıklayınız
                  </a>
                  <Input
                    autocomplete="off"
                    type="number"
                    step="0.01"
                    value={this.state.bolgeK}
                    className="data"
                    name="bolgeK"
                    onChange={this.handlebolgeK}
                    required
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup required>
                  <Label>Proje Yineleme Katsayısı :</Label>
                  <a
                    href="https://prnt.sc/2595wuw"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#69A7C6" }}
                    rel="noreferrer"
                  >
                    Öğrenmek İçin Tıklayınız
                  </a>
                  <Input
                    autocomplete="off"
                    type="number"
                    step="0.01"
                    name="projeYK"
                    value={this.state.projeYK}
                    onChange={this.handleprojeYK}
                    className="data"
                    required
                  ></Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup required>
                  <Label>Hizmet Bölümleri :</Label>
                  <a
                    href="https://prnt.sc/2594h0l"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#69A7C6" }}
                    rel="noreferrer"
                  >
                    Öğrenmek İçin Tıklayınız
                  </a>
                  <Input
                    autocomplete="off"
                    type="number"
                    step="0.01"
                    name="hizmetB"
                    value={this.state.hizmetB}
                    onChange={this.handlehizmetB}
                    className="data"
                    required
                  ></Input>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label>Proje Ücret Oranı :</Label>
                  <a
                    href="https://prnt.sc/2593uo9"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#69A7C6" }}
                    rel="noreferrer"
                  >
                    Öğrenmek İçin Tıklayınız
                  </a>
                  <Input
                    autocomplete="off"
                    value={this.state.projeUO}
                    name="projeUO"
                    onChange={this.handleprojeUO}
                    type="number"
                    step="0.01"
                    className="data"
                    required
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Birim Maliyeti :</Label>
                  <a
                    href="https://www.resmigazete.gov.tr/eskiler/2021/03/20210324-3.htm"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#69A7C6" }}
                    rel="noreferrer"
                  >
                    Öğrenmek İçin Tıklayınız
                  </a>
                  <Input
                    style={{ border: "3px solid black", borderRadius: "15px" }}
                    value={this.state.birimM}
                    id="exampleSelectMulti"
                    name="birimM"
                    className="data"
                    onChange={this.handlebirimM}
                    type="select"
                    required
                  >
                    <option selected></option>
                    <option value={255}>1. Sınıf A</option>
                    <option value={390}>1. Sınıf B</option>
                    <option value={640}>2. Sınıf A</option>
                    <option value={940}>2. Sınıf B</option>
                    <option value={1030}>2. Sınıf C</option>
                    <option value={1360}>3. Sınıf A</option>
                    <option value={1800}>3. Sınıf B</option>
                    <option value={1920}>4. Sınıf A</option>
                    <option value={2300}>4. Sınıf B</option>
                    <option value={2480}>4. Sınıf C</option>
                    <option value={2970}>5. Sınıf A</option>
                    <option value={3600}>5. Sınıf B</option>
                    <option value={4000}>5. Sınıf C</option>
                    <option value={4700}>5. Sınıf D</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Yapı Sınıf Katsayısı</Label>
                  <Input
                    style={{ border: "3px solid black", borderRadius: "15px" }}
                    value={this.state.yapıSK}
                    name="yapıSK"
                    onChange={this.handleyapıSK}
                    type="select"
                    required
                    className="data"
                  >
                    <option selected></option>
                    <option value={1}>
                      Kâgir-Yüzeysel & Kâgir-Derin & Betonarme-Yüzeysel
                    </option>
                    <option value={1.1}>
                      Betonarme-Derin & Çelik-Yüzeysel
                    </option>
                    <option value={1.2}>Çelik-Derin</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Input type="submit" value="Hesapla"></Input>
          </Form>
        </div>
        <footer className="footer"> <p>
          1811012017 Dolunay DÖKDÖK-1811012047 Burak Emirhan YILDIRIM-1811012053 Ali Sezer YILMAZ
        </p></footer>
        
      </div>
    );
  }
}

export default Hesap;
